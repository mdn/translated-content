---
title: 클라이언트 측 웹 개발 도구들의 이해
slug: Learn_web_development/Extensions/Client-side_tools
original_slug: Learn/Tools_and_testing/Understanding_client-side_tools
l10n:
  sourceCommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{LearnSidebar}}

클라이언트 측 도구는 어려울 수 있지만, 이 글의 시리즈에서는 가장 일반적인 클라이언트 측 도구 유형의 목적을 설명하고, 함께 연결할 수 있는 도구, 패키지 관리자를 사용하여 설치하는 방법, 커맨드 라인을 사용하여 제어하는 방법을 설명합니다. 마지막으로 우리는 생산성을 높이는 방법을 보여주는 완전한 툴체인 예제를 제공함으로써 마무리합니다.

## 필요한 사전 지식

여기에 설명된 도구를 사용하기 전에 먼저 핵심 언어인 [HTML](/ko/docs/Learn/HTML), [CSS](/ko/docs/Learn/CSS), 그리고 [JavaScript](/ko/docs/Learn/JavaScript)의 기본을 배워야 합니다.

## 안내서

- [1. 클라이언트 측 도구 개요](/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview)
  - : 이 글에서는 최신 웹 도구에 대한 개요, 사용 가능한 도구의 종류와 웹 앱 개발 수명 주기에서 도구를 어디에서 만날 수 있는지, 그리고 개별 도구에 대한 도움말을 찾는 방법에 대해 설명합니다.
- [2. 커맨드 라인 단기 속성 과정](/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)
  - : 개발 과정에서 터미널(또는 "커맨드 라인". 사실상 같은 의미입니다)에서 몇 가지 명령을 실행해야 할 때가 있을 것입니다. 이 글에서는 터미널에 대한 소개, 터미널에 입력해야 하는 필수 명령어, 명령을 서로 연결하는 방법, 자체 커맨드 라인 인터페이스 (CLI) 도구를 추가하는 방법에 대해 설명합니다.
- [3. 패키지 관리 기본사항](/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)
  - : 이 글에서는 패키지 관리자를 좀 더 자세히 살펴보고 프로젝트에서 패키지 관리자를 사용하는 방법을 이해해 보겠습니다. 프로젝트 도구 종속성을 설치하고, 최신 상태로 유지하는 등의 작업을 수행할 수 있습니다.
- [4. 완벽한 툴체인 소개](/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain)
  - : 시리즈의 마지막 두 글에서는 샘플 사례 연구 툴체인을 구축하는 과정을 안내하여 도구 지식을 강화할 것입니다. 합리적인 개발 환경을 설정하고 변환 도구를 배치하는 것부터 실제로 Netlify에 앱을 배포하는 것까지 모든 과정을 살펴볼 것입니다. 이 글에서는 사례 연구를 소개하고, 개발 환경을 설정하고, 코드 변환 도구를 설정합니다.
- [5. 앱 배포](/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment)
  - : 시리즈의 마지막 글에서는 이전 글에서 구축한 예제 툴체인에 샘플 앱을 배포할 수 있도록 추가합니다. 코드를 GitHub에 푸시하고, Netlify를 사용하여 배포하고, 프로세스에 간단한 테스트를 추가하는 방법도 보여드립니다.
