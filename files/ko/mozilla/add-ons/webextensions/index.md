---
title: WebExtensions
slug: Mozilla/Add-ons/WebExtensions
---

{{AddonSidebar}}

Extension(이하 확장기능)은 브라우저의 기능을 확장하고 수정할 수 있습니다. Firefox 를 위한 확장기능은 확장 기능 개발을 위한 크로스 브라우저 시스템인 WebExtension API를 이용하여 만들어졌습니다. 이 시스템은 Google Chrome, Opera 및 [W3C Draft Community Group](https://browserext.github.io/browserext/)에서 지원하는 [extension API](https://developer.chrome.com/extensions) 와 대부분 호환됩니다. 그러므로 Google Chrome과 Opera를 대상으로 만들어진 확장기능은 [조금만 수정](/en-US/Add-ons/WebExtensions/Porting_from_Google_Chrome)하면 대부분 Firefox나 [Microsoft Edge](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/extensions/)에서도 동작합니다. 또한 extension API는 [멀티프로세스 Firefox](/en-US/Firefox/Multiprocess_Firefox)와도 완벽하게 호환됩니다.

질문 혹은 아이디어가 있거나, 기존 Extension을 WebExtensions API로 마이그레이션 할 때 도움이 필요하다면 [dev-addons 메일링 리스트](https://mail.mozilla.org/listinfo/dev-addons)나 [IRC](https://wiki.mozilla.org/IRC)의 [#webextensions](irc://irc.mozilla.org/webextensions)를 통해 알려주세요.

## 시작하기

- [확장기능이란 무엇인가?](/en-US/Add-ons/WebExtensions/What_are_WebExtensions)
- [첫번째 확장기능](/en-US/Add-ons/WebExtensions/Your_first_WebExtension)
- [두번째 확장기능](/en-US/Add-ons/WebExtensions/Your_second_WebExtension)
- [확장기능의 구조](/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [파이어폭스 개발 로드맵](/ko/docs/Mozilla/Add-ons/WebExtensions/Firefox_workflow_overview)
- [확장기능의 예시](/en-US/Add-ons/WebExtensions/Examples)
- [그 다음은?](/ko/docs/Mozilla/Add-ons/WebExtensions/What_next_)

## 개념

- [JavaScript API 일람](/ko/docs/Mozilla/Add-ons/WebExtensions/API)
- [Content scripts](/en-US/Add-ons/WebExtensions/Content_scripts)
- [주소패턴](/en-US/Add-ons/WebExtensions/Match_patterns)
- [파일과 상호작용하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Working_with_files)
- [여러 언어로 제공하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
- [보안 유의사항들](/ko/docs/Mozilla/Add-ons/WebExtensions/Security_best_practices)
- [보안 정책](/ko/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [다른 프로그램과 상호작용하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
- [개발자 도구 API 사용하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Using_the_devtools_APIs)
- [상호작용 명세 만들기](/en-US/Add-ons/WebExtensions/Native_manifests)
- [사용자와 상호작용하기](/ko/Add-ons/WebExtensions/User_actions)
- [확장기능의 생애주기](/ko/docs/Mozilla/Add-ons/WebExtensions/onboarding_upboarding_offboarding_best_practices)

## 사용자 인터페이스

- [개괄](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface)
- [도구모음 버튼](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action)
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

- [파이어폭스의 특성](/ko/docs/Mozilla/Add-ons/WebExtensions/Firefox_differentiators)
- [구글 크롬의 확장기능 가져오기](/en-US/Add-ons/WebExtensions/Porting_from_Google_Chrome)
- [오래된 파이어폭스 확장기능 변환하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Porting_a_legacy_Firefox_add-on)
- [안드로이드용 파이어폭스로 개발하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Developing_WebExtensions_for_Firefox_for_Android)
- [썬더볼트로 개발하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Developing_WebExtensions_for_Firefox_for_Android)
- [섭입된 확장기능](/ko/docs/Mozilla/Add-ons/WebExtensions/Embedded_WebExtensions)
- [Add-on SDK와의 비교](/ko/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_the_Add-on_SDK)
- [XUL/XPCOM 확장기능과의 비교](/ko/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_XUL_XPCOM_extensions)
- [크롬과의 차이점](/ko/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
- [안드로이드와 PC의 차이점](/ko/docs/Mozilla/Add-ons/WebExtensions/Differences_between_desktop_and_Android)
- [API 구현의 차이점](/ko/docs/Mozilla/Add-ons/WebExtensions/Differences_between_desktop_and_Android)

## 파이어폭스 생애주기

- [사용자 경험](/ko/docs/Mozilla/Add-ons/WebExtensions/User_experience_best_practices)
- [설치](/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)
- [디버깅](/en-US/Add-ons/WebExtensions/Debugging)
- [지속적인 테스트와 특성](/ko/docs/Mozilla/Add-ons/WebExtensions/Testing_persistent_and_restart_features)
- [web-ext 와 작업하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext)
- [web-ext 명령어 일람](/ko/docs/Mozilla/Add-ons/WebExtensions/web-ext_command_reference)
- [확장기능과 애드온 ID](/ko/docs/Mozilla/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID)
- [배포 옵션](/ko/docs/Mozilla/Add-ons/WebExtensions/Distribution_options)
- [올바른 권한 요청](/ko/docs/Mozilla/Add-ons/WebExtensions/Request_the_right_permissions)
- [페이지 스크립트와 개체 공유하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)
- [확장기능 폐기하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Retiring_your_extension)
- [팁과 트릭](/ko/docs/Mozilla/Add-ons/WebExtensions/Tips)
- [확장기능 개발 도구](/ko/docs/Mozilla/Add-ons/WebExtensions/Development_Tools)

## Reference

### JavaScript APIs

- [JavaScript API 일람](/ko/docs/Mozilla/Add-ons/WebExtensions/API)
- [JavaScript API 브라우저 호환성](/en-US/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)

{{ ListSubpages ("/en-US/Add-ons/WebExtensions/API") }}

### Manifest keys

- [manifest.json 일람](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- [manifest.json 브라우저 호환성](/ko/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)

{{ ListSubpages ("/en-US/Add-ons/WebExtensions/manifest.json") }}
