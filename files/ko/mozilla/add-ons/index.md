---
title: 부가 기능들
slug: Mozilla/Add-ons
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

{{AddonSidebar}}

부가 기능을 통해 개발자는 Firefox의 기능을 확장하고 수정할 수 있습니다. 부가 기능은 표준 웹 기술(JavaScript, HTML, CSS)과 일부 전용 JavaScript API를 사용하여 작성됩니다.

부가 기능으로 할 수 있는 작업들;

- 특정 웹사이트의 내용 또는 모양새를 바꿉니다.
- Firefox의 사용자 인터페이스를 변형합니다.
- Firefox에 새로운 기능을 추가합니다.

여러 유형의 부가 기능이 있지만, 가장 일반적인 유형은 확장 프로그램입니다.

## 확장 프로그램 개발

과거에는 Firefox 확장 프로그램을 개발하기 위한 여러 도구 세트가 있었지만, 2017년 11월부터 확장 프로그램은 [WebExtensions API](/ko/docs/Mozilla/Add-ons/WebExtensions)를 사용하여 구축해야 합니다. 오버레이 부가 기능, 부트스트랩 부가 기능, Add-on SDK와 같은 다른 도구 세트는 더 이상 지원되지 않습니다.

Firefox용 WebExtensions API를 사용하여 작성된 확장 프로그램은 브라우저 간 호환성을 위해 설계되었습니다. 대부분의 경우 변경 사항이 거의 또는 전혀 없이 Chrome, Edge, Opera에서 실행됩니다. 또한 다중 프로세스 Firefox와도 완전히 호환됩니다. [Firefox 및 다른 브라우저에서 현재 지원되는 API](/ko/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)를 확인할 수 있습니다.

### 확장 프로그램 워크샵

[Firefox 확장 프로그램 워크샵](https://extensionworkshop.com/)은 Firefox용 확장 프로그램을 개발하고 사용자에게 간단하면서도 강력한 브라우징 경험 사용자 지정 방법을 제공하는 데 도움을 줄 수 있습니다. 다음 내용을 찾을 수 있습니다:

- [Firefox 확장 프로그램 기능 개요](https://extensionworkshop.com/#about)
- [개발 및 테스트를 위한 도구와 프로세스](https://extensionworkshop.com/documentation/develop/)
- [addons.mozilla.org에 확장 프로그램을 게시하거나 직접 배포하는 방법](https://extensionworkshop.com/documentation/publish/)
- [게시된 확장 프로그램 관리 방법](https://extensionworkshop.com/documentation/manage/)
- [확장 프로그램 개발 및 사용을 위한 엔터프라이즈 가이드](https://extensionworkshop.com/documentation/enterprise/)
- [Firefox용 테마 개발 방법](https://extensionworkshop.com/documentation/themes/)
- [Firefox 개발자 커뮤니티](https://extensionworkshop.com/community/)

### Firefox for Android용 확장 프로그램

2020년에 Mozilla는 새로운 Firefox for Android 경험을 출시할 예정입니다. 이 새로운 고성능 Android용 브라우저는 Mozilla의 모바일 브라우저 엔진인 GeckoView를 사용하여 처음부터 다시 구축되었습니다. 현재 GeckoView에서 WebExtensions API 지원을 구축하고 있습니다.

## 부가 기능 게시

"AMO"로 일반적으로 알려진 [Addons.mozilla.org](https://addons.mozilla.org/)는 개발자가 부가 기능을 등록하고 사용자가 이를 찾을 수 있는 Mozilla의 공식 사이트입니다. AMO에 부가 기능을 업로드하면 사용자와 제작자 커뮤니티에 참여하고 부가 기능의 대상을 찾을 수 있습니다.

AMO에 부가 기능을 등록할 필요는 없지만, 부가 기능은 Mozilla의 서명을 받아야 하며 그렇지 않으면 사용자가 설치할 수 없습니다.

부가 기능 게시 프로세스 개요는 [부가 기능 서명 및 배포](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)를 참조하세요.

## 다른 유형의 부가 기능

확장 프로그램 외에도 사용자가 Firefox를 사용자 지정할 수 있는 몇 가지 다른 부가 기능 유형이 있습니다. 이러한 부가 기능에는 다음이 포함됩니다:

- [사용자 사전](https://support.mozilla.org/ko/kb/how-do-i-use-firefox-spell-checker)을 사용하여 다른 언어로 맞춤법 검사를 할 수 있습니다.
- [언어 팩](https://support.mozilla.org/ko/kb/use-firefox-another-language)을 사용하여 Firefox 사용자 인터페이스에 더 많은 언어를 사용할 수 있습니다.

## 문의하기

도움을 받고, 부가 기능 뉴스를 최신 상태로 유지하고, 피드백을 제공하는 방법에 대한 자세한 내용은 [문의하기](/ko/docs/Mozilla/Add-ons/Contact_us) 페이지를 확인하세요.
