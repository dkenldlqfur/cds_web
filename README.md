# CDS95 웹 배포본

Android Chrome 및 iPhone Safari에서 접속할 웹 빌드입니다.

게임 접속 주소: **https://dkenldlqfur.github.io/cds_web/**

2026-10-24: 환경설정과 음량 조절 창을 게임 화면 안에 표시하고 게임의 색상·원본 버튼 그림을 적용했습니다. 화면 크기에 맞춰 중앙에 배치하고, 음량 즉시 적용·확인 시 저장·취소 시 복원은 유지합니다. Windows·웹 빌드 및 정적 검사만 수행하며 플레이 테스트는 진행하지 않았습니다. [설정 창 UI 수정본](https://dkenldlqfur.github.io/cds_web/?v=settings-game-ui-20261024).

2026-10-24: 메인 메뉴의 성배 퍼즐에서 실제 할당 없이 메모리 부족 경고를 열던 호출을 수정했습니다. 같은 문제를 가진 미니게임 리소스 준비 경로 16곳을 실제 할당 → 실패 시 재시도 안내 순서로 연결했습니다. Windows·웹 컴파일 시점 검사와 배포 파일 정적 검사로 검증하며 플레이 테스트는 수행하지 않습니다. [미니게임 메모리 경고 수정본](https://dkenldlqfur.github.io/cds_web/?v=minigame-memory-20261024).

2026-10-23: 편집 도구의 검토된 용어·오역 수정, 01–10 저장/불러오기 슬롯, 항해일지 동반 보관과 기존 저장 보존, 월드 지도 선박 중앙 추적을 적용했습니다. 조선소 슬롯·중량, 포격 명중률, 심판 전열, 상륙 선박 이미지, 힌트·이벤트 조건 등도 수정했습니다. 지도는 원래 타일 좌표를 유지하며 중앙에서 최대 8픽셀 이내로 추적합니다. 사용자 요청에 따라 플레이 없이 Windows·웹 컴파일과 정적 검사만 수행했습니다. [편집 도구 기능 적용본](https://dkenldlqfur.github.io/cds_web/?v=editor-features-20261023).

2026-10-23: 환경설정의 음량 버튼을 Godot 내부 0~100% 슬라이더로 연결했습니다. 0% 음소거, 즉시 미리 적용, 확인 시 저장, 취소 시 이전 음량 복원을 지원하며 다음 시작 때 저장값을 불러옵니다. Windows 음량 프로그램 없이 Windows·웹이 같은 AudioServer 설정을 사용합니다. 이번 변경은 사용자 요청에 따라 컴파일·정적 검사만 수행했습니다. [Godot 음량 설정 적용본](https://dkenldlqfur.github.io/cds_web/?v=godot-volume-20261023).

2026-10-23: 종료 시 `World bridge stage receiver`가 발생하던 호출 경로를 수정했습니다. World 정리가 상태창·정보창 전용 물리 콜백으로 들어가지 않고 기존 Screen/Active/Stage를 사용하도록 연결했으며, 재활성화 래퍼의 같은 우회 호출도 수정했습니다. 사용자 요청에 따라 이번 수정은 컴파일·정적 검사로 검증하며, 수정 후 플레이 테스트는 수행하지 않았습니다. [종료 오류 수정본](https://dkenldlqfur.github.io/cds_web/?v=exit-stage-fix-20261023).

2026-10-23: 상륙 시 `Virtual missing canonical global20B`로 중단되던 공통 네이티브 코드를 수정했습니다. 저장용 20바이트 레코드와 실제 16바이트 전역 객체를 혼동하던 검사였으며, 육상 대화의 동일 검사도 수정했습니다. 실제 객체·메모리 처리 코드의 독립 회귀 테스트에서 기존 오류를 재현하고 수정 후 36개 검사를 통과했습니다. 브라우저에서 항해부터 상륙까지의 플레이 검증은 별도입니다. [상륙 오류 수정본](https://dkenldlqfur.github.io/cds_web/?v=landing-global-fix-20261023).

2026-10-23: 실제 웹 실행으로 메뉴 입력 문제 두 가지를 재현하고 수정했습니다. WebAssembly의 시간 변환이 최댓값에 고정되어 화면 갱신과 Enter 대기가 멈추던 문제, 짧은 터치 해제를 중첩 위치 검사에서 먼저 소비하던 문제입니다. 수정 빌드의 Chrome 실행에서 방향키 선택 변경, 한 번의 Enter로 새 게임 메뉴 열기, Esc 종료 확인과 취소, 짧은 터치로 새 게임 메뉴 열기를 확인했습니다. [타이머·터치 수정본](https://dkenldlqfur.github.io/cds_web/?v=clock-touch-fix-20261023).

2026-10-23: 모든 하단 키가 불안정하다는 보고에 따라 게임이 버튼의 원본 키 입력 큐를 직접 읽도록 변경했습니다. 브라우저 콜백과 캔버스 포커스를 거치는 게임 전달 경로를 제거하고 중복 입력을 방지했습니다. [공통 입력 수정본](https://dkenldlqfur.github.io/cds_web/?v=input-poll-20261023). 실제 휴대폰 플레이는 수행하지 않았으므로 체감 동작은 미검증입니다.

2026-10-23: 메인 메뉴가 Esc를 무시하던 처리를 수정했습니다. 메인 메뉴에서 Esc를 누르면 종료 확인이 표시되고, 확인 창에서 Esc 또는 아니오를 선택하면 메인 메뉴로 돌아갑니다. [메인 메뉴 Esc 수정본](https://dkenldlqfur.github.io/cds_web/?v=main-esc-20261023). 실제 메뉴 처리 본문을 포함한 컴파일 시점 검사만 수행했습니다.

2026-10-23: 웹에서 원본 AVI 파일을 찾다가 CD 확인 창이 반복되던 경로를 수정했습니다. 웹은 CD 확인 없이 변환된 OGV 영상을 필요할 때 내려받습니다. 기존 페이지가 열려 있으면 닫고 [수정본 주소](https://dkenldlqfur.github.io/cds_web/?v=cd-fix-20261023)로 접속하세요.

2026-10-23: 첫 동영상 뒤 상태 문구 초기화 시 시세의 `%` 기호 때문에 `Status text exceeds original owned buffer`가 발생하던 경로를 수정했습니다. 기존 게임 탭을 닫고 [최신 수정본](https://dkenldlqfur.github.io/cds_web/?v=status-fix-20261023)으로 접속하세요.

2026-10-23: 휴대폰의 실제 표시 영역에 게임 화면 전체를 맞추도록 공통 화면 배치를 보강했습니다. 화면 회전, 조작 버튼 줄 바꿈, 키보드 및 확대 상태 변경 시 배율을 다시 계산합니다. [휴대폰 화면 수정본](https://dkenldlqfur.github.io/cds_web/?v=mobile-layout-20261023).

2026-10-23: 하단 키를 실제 게임 입력에 맞춰 표시했습니다. ‘메뉴’는 방향키, ‘항해’는 숫자 방향키(가운데 5는 정지·재개)입니다. Enter·Esc·Tab·Space는 실제 키 이름으로 표시합니다. [휴대폰 키 수정본](https://dkenldlqfur.github.io/cds_web/?v=mobile-keys-20261023).

2026-10-23: 메뉴에서 짧은 화면 터치를 놓치지 않도록 실제 누름·해제를 위치와 함께 보관합니다. 하단 키도 브라우저 포커스에 의존하지 않고 Godot 입력 처리기에 직접 전달합니다. 기존 탭을 닫고 [터치·첫 키 입력 수정본](https://dkenldlqfur.github.io/cds_web/?v=touch-keys-20261023)으로 접속하세요.

## 배포 상태

저장소 소유자의 승인으로 공개 저장소로 전환하고 GitHub Pages를 활성화했습니다. 배포 진행 상태는 [Actions](https://github.com/dkenldlqfur/cds_web/actions)에서 확인할 수 있습니다.

`main` 브랜치 업데이트는 정적 파일 검사 후 자동으로 배포됩니다. Actions → Publish game to GitHub Pages → Run workflow로 다시 배포할 수도 있습니다.

## 포함 파일

- `site/`: 웹에 제공할 게임 파일 전체.
- `site-manifest.json`: 모든 배포 파일의 크기와 SHA-256.
- `tools/verify_site.py`: 게임 실행 없이 파일을 검사하는 도구.
- `.github/workflows/pages.yml`: 파일 검사 후 GitHub Pages에 배포하는 설정.

GitHub Pages의 실행 환경은 `isolation-sw.js`가 준비합니다. 첫 접속 때 자동으로 한 번 새로고침할 수 있습니다. 인터넷 연결이 필요합니다. 저장은 해당 주소의 브라우저 저장소에 보관하며 다른 기기로 자동 동기화하지 않습니다.

처음에는 요청에 따라 정적 검사만 수행했습니다. 이후 사용자가 플레이 테스트를 명시적으로 요청하여, 별도 임시 프로필의 Chrome에서 640×800 화면과 터치 입력으로 위 메뉴 동작을 직접 검증했습니다. Android/iPhone 실기기와 Safari는 테스트하지 않았습니다. Windows 빌드와 배포 파일의 정적 검사도 통과했습니다. 기존 개인 저장 파일은 포함하지 않습니다.
