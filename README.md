# CDS95 웹 배포본

Android Chrome 및 iPhone Safari에서 접속할 웹 빌드입니다.

게임 접속 주소: **https://dkenldlqfur.github.io/cds_web/**

2026-10-23: 웹에서 원본 AVI 파일을 찾다가 CD 확인 창이 반복되던 경로를 수정했습니다. 웹은 CD 확인 없이 변환된 OGV 영상을 필요할 때 내려받습니다. 기존 페이지가 열려 있으면 닫고 [수정본 주소](https://dkenldlqfur.github.io/cds_web/?v=cd-fix-20261023)로 접속하세요.

2026-10-23: 첫 동영상 뒤 상태 문구 초기화 시 시세의 `%` 기호 때문에 `Status text exceeds original owned buffer`가 발생하던 경로를 수정했습니다. 기존 게임 탭을 닫고 [최신 수정본](https://dkenldlqfur.github.io/cds_web/?v=status-fix-20261023)으로 접속하세요.

2026-10-23: 휴대폰의 실제 표시 영역에 게임 화면 전체를 맞추도록 공통 화면 배치를 보강했습니다. 화면 회전, 조작 버튼 줄 바꿈, 키보드 및 확대 상태 변경 시 배율을 다시 계산합니다. [휴대폰 화면 수정본](https://dkenldlqfur.github.io/cds_web/?v=mobile-layout-20261023).

2026-10-23: 하단 키를 실제 게임 입력에 맞춰 표시했습니다. ‘메뉴’는 방향키, ‘항해’는 숫자 방향키(가운데 5는 정지·재개)입니다. Enter·Esc·Tab·Space는 실제 키 이름으로 표시합니다. [휴대폰 키 수정본](https://dkenldlqfur.github.io/cds_web/?v=mobile-keys-20261023).

## 배포 상태

저장소 소유자의 승인으로 공개 저장소로 전환하고 GitHub Pages를 활성화했습니다. 배포 진행 상태는 [Actions](https://github.com/dkenldlqfur/cds_web/actions)에서 확인할 수 있습니다.

`main` 브랜치 업데이트는 정적 파일 검사 후 자동으로 배포됩니다. Actions → Publish game to GitHub Pages → Run workflow로 다시 배포할 수도 있습니다.

## 포함 파일

- `site/`: 웹에 제공할 게임 파일 전체.
- `site-manifest.json`: 모든 배포 파일의 크기와 SHA-256.
- `tools/verify_site.py`: 게임 실행 없이 파일을 검사하는 도구.
- `.github/workflows/pages.yml`: 파일 검사 후 GitHub Pages에 배포하는 설정.

GitHub Pages의 실행 환경은 `isolation-sw.js`가 준비합니다. 첫 접속 때 자동으로 한 번 새로고침할 수 있습니다. 인터넷 연결이 필요합니다. 저장은 해당 주소의 브라우저 저장소에 보관하며 다른 기기로 자동 동기화하지 않습니다.

요청에 따라 플레이 테스트 및 휴대폰 실기기 테스트는 수행하지 않았습니다. 빌드·리소스·문법·바인딩·배포 파일의 정적 검사만 수행했습니다. 기존 개인 저장 파일은 포함하지 않습니다.
