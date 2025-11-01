---
title: WebExtensions
slug: Mozilla/Add-ons/WebExtensions
---

{{AddonSidebar}}

Extension(이하 확장기능)은 브라우저의 기능을 확장하고 수정할 수 있습니다. Firefox 를 위한 확장기능은 확장 기능 개발을 위한 크로스 브라우저 시스템인 WebExtension API를 이용하여 만들어졌습니다. 이 시스템은 Google Chrome, Opera 및 [W3C Draft Community Group](https://browserext.github.io/browserext/)에서 지원하는 [extension API](https://developer.chrome.com/docs/extensions) 와 대부분 호환됩니다. 그러므로 Google Chrome과 Opera를 대상으로 만들어진 확장기능은 [조금만 수정](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/)하면 대부분 Firefox나 [Microsoft Edge](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/extensions/)에서도 동작합니다. 또한 extension API는 [멀티프로세스 Firefox](/ko/docs/Mozilla/Firefox/Multiprocess_Firefox)와도 완벽하게 호환됩니다.

질문 혹은 아이디어가 있거나 도움이 필요하다면 [커뮤니티 포럼](https://discourse.mozilla.org/c/add-ons/35) 혹은 [Add-ons 방](https://matrix.to/#/#addons:mozilla.org) on [Matrix](https://wiki.mozilla.org/Matrix)

## 시작하기

- [확장기능이란 무엇인가?](/ko/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions)
- [첫번째 확장기능](/ko/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
- [두번째 확장기능](/ko/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
- [확장기능의 구조](/ko/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Firefox 개발 로드맵](https://extensionworkshop.com/documentation/develop/firefox-workflow-overview/)
- [확장기능의 예시](/ko/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [그 다음은?](/ko/docs/Mozilla/Add-ons/WebExtensions/What_next)

## 개념

- [JavaScript API 일람](/ko/docs/Mozilla/Add-ons/WebExtensions/API)
- [Content scripts](/ko/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [주소패턴](/ko/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- [파일과 상호작용하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Working_with_files)
- [여러 언어로 제공하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
- [보안 유의사항들](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/)
- [보안 정책](/ko/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [다른 프로그램과 상호작용하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
- [개발자 도구 API 사용하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)
- [상호작용 명세 만들기](/ko/docs/Mozilla/Add-ons/WebExtensions/Native_manifests)
- [사용자와 상호작용하기](/ko/docs/Mozilla/애드온들/WebExtensions/User_actions)
- [확장기능의 생애주기](https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/)

## 사용자 인터페이스

- [개괄](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface)
- [도구모음 버튼](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button)
- [도구모음 버튼과 팝업](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
- [주소창 버튼](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)
- [주소창 버튼과 팝업](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
- [상세 메뉴 항목](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items)
- [사이드바](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
- [설정 페이지](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
- [확장기능 페이지](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)
- [알림](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Notifications)
- [주소창 자동추천](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Omnibox)
- [개발자 도구 패널](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels)
- [브라우저 스타일](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)

## 기능 구현

- [HTTP 요청 가로채기](/ko/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests)
- [웹 페이지 수정하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page)
- [도구모음에 버튼 추가하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [설정 페이지 구성하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
- [클립보드와 상호작용하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)
- [Tabs API 사용하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API)
- [Bookmarks API 사용하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API)
- [Cookies API 사용하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API)
- [contextual identities 사용하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)
- [외부 요소 삽입하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page)

<!---->

## 다른 브라우저에서 옮겨오기

- [Firefox의 특성](https://extensionworkshop.com/documentation/develop/unique-firefox-capabilities/)
- [구글 크롬의 확장기능 가져오기](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/)
- [오래된 Firefox 확장기능 변환하기](https://extensionworkshop.com/documentation/develop/porting-a-legacy-firefox-extension/)
- [안드로이드용 Firefox로 개발하기](https://extensionworkshop.com/documentation/develop/developing-extensions-for-firefox-for-android/)
- [썬더볼트로 개발하기](https://extensionworkshop.com/documentation/develop/developing-extensions-for-firefox-for-android/)
- [섭입된 확장기능](/ko/docs/Mozilla/Add-ons/WebExtensions/Embedded_WebExtensions)
- [Add-on SDK와의 비교](https://extensionworkshop.com/documentation/develop/comparison-with-the-add-on-sdk/)
- [XUL/XPCOM 확장기능과의 비교](https://extensionworkshop.com/documentation/develop/comparison-with-xul-xpcom-extensions/)
- [크롬과의 차이점](/ko/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
- [안드로이드와 PC의 차이점](https://extensionworkshop.com/documentation/develop/differences-between-desktop-and-android-extensions/)
- [API 구현의 차이점](https://extensionworkshop.com/documentation/develop/differences-between-desktop-and-android-extensions/)

## Firefox 생애주기

- [사용자 경험](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/)
- [설치](/ko/docs/Mozilla/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)
- [디버깅](/ko/docs/Mozilla/Add-ons/WebExtensions/Debugging)
- [지속적인 테스트와 특성](https://extensionworkshop.com/documentation/develop/testing-persistent-and-restart-features/)
- [web-ext 와 작업하기](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)
- [web-ext 명령어 일람](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/)
- [확장기능과 애드온 ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/)
- [배포 옵션](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)
- [올바른 권한 요청](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/)
- [페이지 스크립트와 개체 공유하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)
- [확장기능 폐기하기](https://extensionworkshop.com/documentation/manage/retiring-your-extension/)
- [팁과 트릭](/ko/docs/Mozilla/Add-ons/WebExtensions)
- [확장기능 개발 도구](https://extensionworkshop.com/documentation/develop/browser-extension-development-tools/)

## Reference

### JavaScript APIs

- [JavaScript API 일람](/ko/docs/Mozilla/Add-ons/WebExtensions/API)
- [JavaScript API 브라우저 호환성](/ko/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)

{{ ListSubpages ("/en-US/Add-ons/WebExtensions/API") }}

### Manifest keys

- [manifest.json 일람](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- [manifest.json 브라우저 호환성](/ko/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)

{{ ListSubpages ("/en-US/Add-ons/WebExtensions/manifest.json") }}
