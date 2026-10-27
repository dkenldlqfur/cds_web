// Track the engine's own contexts without creating a second audio device.
// DOM toolbar keys bypass Godot's canvas input callbacks, so resume on real
// page gestures too. In particular, do not await before calling resume().
(() => {
 'use strict';
 if (window.CDS95Audio) return;
 const contexts = new Set();
 const wrappedConstructors = new Map();
 let gestureSeen = false;
 let lastError = '';
 function state() {
  const live = [...contexts].filter(context => context.state !== 'closed');
  if (!live.length) return 'uninitialized';
  if (live.every(context => context.state === 'running')) return 'running';
  return live.find(context => context.state !== 'running').state;
 }
 function update() {
  const button = document.getElementById('audio-unlock');
  if (button) button.hidden = !contexts.size || state() === 'running' || state() === 'uninitialized';
 }
 function resume(context) {
  if (context.state === 'running' || context.state === 'closed') return;
  try {
   const pending = context.resume();
   // A blocked request can remain pending. A later trusted tap must still
   // retry, rather than waiting on a promise from an expired activation.
   if (pending && typeof pending.then === 'function') pending.then(() => {
    lastError = ''; update();
   }, error => { lastError = String(error); update(); });
  } catch (error) { lastError = String(error); }
  update();
 }
 function remember(context) {
  if (contexts.has(context)) return context;
  contexts.add(context);
  const changed = () => {
   if (context.state === 'closed') {
    contexts.delete(context);
    context.removeEventListener('statechange', changed);
   }
   update();
  };
  context.addEventListener('statechange', changed);
  // Startup crosses asynchronous loading. Resume if the browser retains
  // the earlier activation; otherwise the next tap or sound button retries.
  if (gestureSeen) resume(context);
  update();
  return context;
 }
 for (const name of ['AudioContext', 'webkitAudioContext']) {
  const NativeContext = window[name];
  if (typeof NativeContext !== 'function') continue;
  let WrappedContext = wrappedConstructors.get(NativeContext);
  if (!WrappedContext) {
   WrappedContext = new Proxy(NativeContext, {
    construct(target, args, newTarget) {
     return remember(Reflect.construct(target, args, newTarget));
    }
   });
   wrappedConstructors.set(NativeContext, WrappedContext);
   wrappedConstructors.set(WrappedContext, WrappedContext);
  }
  try { window[name] = WrappedContext; } catch (_) { /* Keep native audio available. */ }
 }
 function gesture(event) {
  if (!event.isTrusted) return;
  gestureSeen = true;
  for (const context of contexts) resume(context);
 }
 for (const event of ['pointerdown', 'touchend', 'keydown', 'click']) {
  document.addEventListener(event, gesture, {capture: true, passive: true});
 }
 document.addEventListener('visibilitychange', update);
 const button = document.getElementById('audio-unlock');
 if (button) button.addEventListener('click', () => document.getElementById('canvas')?.focus());
 window.CDS95Audio = Object.freeze({getState: state, getLastError: () => lastError});
 update();
})();
