---
title: What next?
slug: Mozilla/Add-ons/WebExtensions/What_next_
---
{{AddonSidebar}}

이제 생각했던 확장 기능을 실제로 만들어 볼 준비가 되었습니다. 그 전에, 순조로운 여정을 위해 몇 가지 사항을 숙지하는 것이 좋습니다.

이 페이지에서 논의되는 많은 부분들은 Firefox용 확장 기능을 작성, 테스트, 게시 및 배포하는 데 도움을 주는 웹 사이트인 [Extension Workshop](https://extensionworkshop.com/)에서 더 찾아볼 수 있습니다.

## 개발 환경

확장 기능을 만들기 위해 특별한 개발 혹은 빌드 환경 도구가 필요하지 않습니다. 텍스트 편집기만으로도 훌륭한 확장 기능을 만드는 것이 가능합니다. 그러나, 웹용으로 개발 중이고 재사용하고 싶은 도구 모음이나 환경이 있을 수 있습니다. 그렇다면, 몇 가지 사항을 알아두셔야 합니다.

경량화 혹은 난독화 도구를 사용하여 최종 코드를 제출하는 경우, [AMO 리뷰 프로세스](#리뷰_프로세스)에 소스 코드를 제공하여야 합니다. 또한 경량화, 난독화, 빌드 과정에 사용되는 도구들은 오픈 소스여야 하며(또는 무제한 무료 사용 제공) 검토자의 컴퓨터(Windows, Mac, 또는 Linux)에서 실행이 가능해야 합니다. 불행하게도, 검토자들은 영리 또는 웹 기반 도구로 작업할 수 없습니다.

[Extension Workshop에서 개발 도구에 대해 더 알아보기](https://extensionworkshop.com/documentation/develop/browser-extension-development-tools/)


## 서드파티 라이브러리

서드파티 라이브러리는 확장 기능에 복잡한 기능을 빠르게 추가할 수 있는 훌륭한 방법입니다. 확장 기능이 [AMO 리뷰 프로세스](#리뷰_프로세스)에 제출되면, 사용된 서드파티 라이브러리 또한 검토됩니다. 효율적인 검토를 위해, 항상 공식 웹사이트 혹은 저장소에서 서드파티 라이브러리를 다운로드 받고, 라이브러리가 경량화된 경우 소스 코드에 링크를 첨부하세요. 서드파티 라이브러리는 어떤 방식으로도 수정될 수 없습니다.

[Extension Workshop에서 소스 코드 제출에 대해 더 알아보기](https://extensionworkshop.com/documentation/publish/source-code-submission/)


## Firefox 애드온 배포 동의사항

Firefox의 릴리즈 또는 베타 버전에 확장 기능을 설치하려면 서명되어야 합니다. 서명은 addons.mozilla.org (AMO)에서 이루어지고 Firefox 애드온 배포 동의사항의 이용 약관이 적용됩니다. 동의사항의 목표는 Firefox 사용자들이 Firefox 경험을 향상시키는 잘 지원되는 양질의 애드온에 접근할 수 있도록 하는 것입니다.

[Extension Workshop에서 동의사항 읽기](https://extensionworkshop.com/documentation/publish/firefox-add-on-distribution-agreement/)

[Extension Workshop에서 서명에 대해 더 알아보기](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)


## 리뷰 프로세스

서명을 위해 제출된 확장 기능은 자동 검토의 대상이 됩니다. 자동 검토에서 수동 검토가 필요하다고 판단되었을 경우 수동 검토의 대상이 될 수 있습니다. 확장 기능은 자동 검토를 통과하기 전까지 서명이 이루어지지 않으며, 수동 검토를 통과하지 못한 경우 서명이 취소될 수 있습니다. 리뷰 프로세스는 엄격한 지침을 따르므로 검토 중 발생 가능한 문제를 확인하고 방지하기 쉽습니다.

[Extension Workshop에서 검토 정책과 지침 확인하기](https://extensionworkshop.com/documentation/publish/add-on-policies/)


## AMO의 추천 확장 기능

AMO에 확장 기능을 게시하기로 했다면 확장 기능은 AMO 웹사이트, Firefox 브라우저의 애드온 관리자 또는 Mozilla 웹사이트의 다른 위치에 표시될 수 있습니다. 추천을 위해 확장 기능이 어떻게 선택되는지 설명하는 가이드라인 목록이 작성되었습니다. 이 가이드라인을 준수하여 확장 기능이 추천될 가능성을 높일 수 있습니다.

[Extension Workshop에서 애드온 추천에 대해 더 알아보기](https://extensionworkshop.com/documentation/publish/recommended-extensions/)


## 학습 경험 계속하기

이제 무엇이 앞에 있는지 알았으니, 확장 기능 개발에 대해 더 자세히 알아볼 시간입니다. 다음 섹션들에서 확인할 수 있는 내용은 아래와 같습니다.

- [JavaScript API를 사용](/en-US/docs/Mozilla/Add-ons/WebExtensions/API)하는 자세한 방법부터 시작해서, 확장 기능 뒤에 있는 기본 개념을 더 알아보기
- 확장 기능에 사용 가능한 [사용자 인터페이스 구성 요소](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface) 가이드
- 확장 기능에서 주요 작업을 수행하거나 JavaScript API를 사용하는 방법에 대한 안내 가이드 모음
- [JavaScript API](/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)에 대한 전체 참조 가이드
- [Manifest keys](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)에 대한 전체 참조 가이드

또한 아래의 내용들을 포함하는, Firefox용 확장 기능을 만드는 데 알아야 할 모든 내용을 담고 있는 Extension Workshop으로 이동할 수 있습니다.

- [Firefox 확장 기능 개요](https://extensionworkshop.com/#about)
- [개발 및 테스트를 위한 도구와 절차에 대한 자세한 내용](https://extensionworkshop.com/documentation/develop/)
- [addons.mozilla.org에 확장 기능을 게시하거나 직접 배포하는 방법](https://extensionworkshop.com/documentation/publish/)
- [게시된 확장 기능을 관리하는 방법](https://extensionworkshop.com/documentation/manage/)
- [확장 기능 개발 및 사용을 위한 기업용 가이드](https://extensionworkshop.com/documentation/enterprise/)
- [Firefox 테마 개발 방법](https://extensionworkshop.com/documentation/themes/)
- [Firefox 개발자 커뮤니티에 대한 자세한 내용](https://extensionworkshop.com/community/)
