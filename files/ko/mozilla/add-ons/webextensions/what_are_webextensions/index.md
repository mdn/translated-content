---
title: What are extensions?
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
---
{{AddonSidebar}}

Extension(이하 확장앱)은 웹 브라우저의 기능을 수정하는 코드를 지칭합니다. 확장앱은 표준 웹 기술(JavaScript, HTML 그리고 CSS)과 일부 전용 JavaScript API를 사용하여 작성됩니다. 여러 가지 특징이 있지만 무엇보다도 확장앱은 브라우저에 새로운 기능을 추가할 수 있고 특정 웹사이트의 모양이나 내용을 변경할 수 있다는 점이 대표적입니다.

Firefox 용 확장 프로그램은 확장앱 개발을 위한 크로스 브라우저 시스템인 WebExtensions API를 사용하여 만들어집니다. 대부분의 경우 API는 Google 크롬 및 Opera에서 지원하는 [extension API](https://developer.chrome.com/extensions)와 호환됩니다. 대부분의 경우 이러한 브라우저 용으로 작성된 확장 프로그램은 Firefox 또는 Microsoft Edge에서 [약간의 변경](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension)만으로 실행됩니다. API는 [멀티프로세스 Firefox](https://developer.mozilla.org/en-US/Firefox/Multiprocess_Firefox)와도 완벽하게 호환됩니다.

과거에는 [XUL/XPCOM overlays](https://developer.mozilla.org/en-US/Add-ons/Overlay_Extensions), [bootstrapped extensions](/ko/docs/Mozilla/Add-ons/Bootstrapped_extensions), 또는 [Add-on SDK](/ko/docs/Mozilla/Add-ons/SDK) 중 하나의 방법으로 Firefox Extension을 개발했습니다. 이제 2017년 11월을 마지막으로 WebExtensions API가 유일한 Firefox 확장앱 개발 방법으로 통합되고, 기존의 방법은 더 이상 사용되지 않을 예정입니다.

질문 혹은 아이디어가 있거나, 기존 Extension을 WebExtensions API로 마이그레이션 할 때 도움이 필요하다면 [dev-addons 메일링 리스트](https://mail.mozilla.org/listinfo/dev-addons)나 [IRC](https://wiki.mozilla.org/IRC)의 [#extdev](irc://irc.mozilla.org/extdev)로 요청해주세요.

## What's next?

- 확장앱 예시를 확인하려면 [Example extensions](/ko/Add-ons/WebExtensions/Examples) 참조.
- 확장앱의 구조에 대한 내용은 [Anatomy of an extension](/ko/Add-ons/WebExtensions/Anatomy_of_a_WebExtension) 참조.
- 간단한 확장앱을 만들어보려면 [Your first extension](/ko/Add-ons/WebExtensions/Your_first_WebExtension) 참조.
