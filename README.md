# CDS95 웹 배포본

Android Chrome 및 iPhone Safari에서 접속할 웹 빌드입니다.

게임 접속 주소: **https://dkenldlqfur.github.io/cds_web/**

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
