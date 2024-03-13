---
title: What are extensions?
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
---

{{AddonSidebar}}

> **참고:** 만약 브라우저 확장 기능의 기본적인 개념은 이미 익숙하다면, 이 섹션을 스킵하고 [확장 기능 파일이 어떻게 구성되는지 읽어보세요](/ko/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension). 그 다음, [참고 문서](/ko/docs/Mozilla/Add-ons/WebExtensions#reference)와 함께 확장 기능을 개발해 보세요. [Firefox Extension Workshop](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension)을 방문하여 Firefox용 테스트, 게시 및 확장 기능에 대한 작업 흐름에 대해 자세히 알아보세요.

확장 기능은 브라우저에 기능을 추가합니다. 확장 기능은 표준 웹 기술(HTML, CSS, JavaScript)을 이용해 만들어집니다. 확장 기능은 JavaScript에서 사용되는 웹 API 뿐만이 아니라 전용 JavaScript API에도 접근할 수 있어 웹페이지의 코드가 할 수 있는 것보다 더 많은 일을 할 수 있습니다. 다음은 수행할 수 있는 작업의 몇 가지 예시입니다.

**웹사이트를 개선하거나 보완**: 애드온을 사용하여 웹사이트에서 추가 기능이나 정보를 제공할 수 있습니다. 서비스의 향상을 위해 사용자가 방문한 페이지에서 세부 정보를 수집하도록 허용할 수 있습니다.

![가격 비교 기능을 제공하는 Amazon 애드온 예제](amazon_add_on.png)

예제: [Amazon Assistant for Firefox](https://addons.mozilla.org/en-US/firefox/addon/amazon-browser-bar/), [OneNote Web Clipper](https://addons.mozilla.org/en-US/firefox/addon/onenote-clipper/), and [Grammarly for Firefox](https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/).

**사용자의 개성 표현**: 브라우저 확장 기능은 웹페이지의 콘텐츠를 조작할 수 있습니다. 예를 들어, 사용자가 방문하는 모든 페이지에 좋아하는 로고나 사진을 배경으로 추가하거나, 독립형 [테마 애드온](https://extensionworkshop.com/documentation/themes/)과 동일한 방식으로 Firefox UI을 업데이트할 수 있습니다.

![배트맨 테마를 보여주는 나의 웹 새 탭 애드온](myweb_new_tab_add_on.png)

Examples: [MyWeb New Tab](https://chrome.google.com/webstore/detail/myweb-new-tab/cnbiadnhebmicjcbpgajglfemclnlagh), [Tabliss](https://addons.mozilla.org/en-US/firefox/addon/tabliss/), and [VivaldiFox](https://addons.mozilla.org/en-US/firefox/addon/vivaldifox/).

**웹페이지에 컨텐츠를 추가 또는 제거**: 사용자를 위해 웹페이지에서 방해가 되는 광고를 차단하도록 돕거나, 웹 페이지에서 국가 또는 도시가 언급될 때마다 여행 가이드에 대한 접근을 제공하거나, 일관된 읽기 경험을 제공하기 위해 페이지 컨텐츠를 재구성하는 작업을 하고 싶을 수 있습니다. 웹페이지의 HTML과 CSS에 접근하고 업데이트함으로써 확장 기능은 사용자가 원하는 방식으로 웹을 볼 수 있도록 돕습니다.

![트래커 통계를 차단하는 uBlock origin 애드온 예제](ublock_origin_add_on.png)

Examples: [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/), [Reader](https://addons.mozilla.org/en-US/firefox/addon/reader/), and [Toolbox for Google Play Store™](https://addons.mozilla.org/en-US/firefox/addon/toolbox-google-play-store/).

**도구 및 새로운 브라우징 기능 추가**: 작업 보드에 새로운 기능을 추가하거나, URL, 하이퍼링크, 화면의 글자로부터 QR코드 이미지를 생성합니다. [WebExtensions APIs](/ko/docs/Mozilla/Add-ons/WebExtensions)가 제공하는 유연한 UI 옵션들과 강력한 기능을 통해 브라우저에 새로운 기능을 쉽게 추가할 수 있습니다. 그리고 당신의 웹사이트가 아니더라도, 거의 모든 웹사이트의 기능을 향상시킬 수 있습니다.

![QR코드 생성기 애드온 예제](qr_code_image_generator_add_on.png)

Examples: [Swimlanes for Trello](https://addons.mozilla.org/en-US/firefox/addon/swimlanes-for-trello/) and [Tomato Clock](https://addons.mozilla.org/en-US/firefox/addon/tomato-clock/).

**게임**: 전통적인 오프라인 컴퓨터 게임뿐만 아니라 새로운 게임을 만들어 볼 수 있습니다. 가령 일상적인 브라우징에 게임플레이를 포함시키는 방식처럼 말이죠.

Examples: [Solitaire Card Game](https://addons.mozilla.org/en-US/firefox/addon/solitaire-spider-freecell/), and [2048 Prime](https://addons.mozilla.org/en-US/firefox/addon/2048-prime/).

**개발 도구 추가**: 웹 개발 도구를 비즈니스로 제공하거나 공유하고 싶은 웹 개발에 대한 유용한 기술 또는 접근 방식을 개발했을 수 있습니다. 어느 쪽이든 간에, 개발자 도구 모음에 새 탭을 추가하여 내장 Firefox 개발자 도구를 향상시킬 수 있습니다.

![Axe 접근성 테스팅 애드온 예제](axe_developer_tools_add_on.png)

Examples: [Web Developer](https://addons.mozilla.org/en-US/firefox/addon/web-developer/), [Web React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/), and [aXe Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/).

Firefox 용 확장 프로그램은 확장 기능 개발을 위한 크로스 브라우저 시스템인 [WebExtensions APIs](/ko/docs/Mozilla/Add-ons/WebExtensions)를 사용하여 만들어집니다. 대부분의 경우 API는 Google 크롬 및 Opera에서 지원하는 [extension API](https://developer.chrome.com/extensions)와 호환됩니다. 대부분의 경우 이러한 브라우저 용으로 작성된 확장 프로그램은 Firefox 또는 Microsoft Edge에서 몇 가지 [변경 사항](/en-US/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension)만으로 실행됩니다. API는 [멀티프로세스 Firefox](/en-US/Firefox/Multiprocess_Firefox)와도 완벽하게 호환됩니다.

질문 혹은 아이디어가 있거나, [기존 Extension을 WebExtensions API로 마이그레이션 할 때](https://extensionworkshop.com/documentation/develop/porting-a-legacy-firefox-extension/) 도움이 필요하다면 [Add-ons Discourse](https://discourse.mozilla.org/c/add-ons/35)나 [Matrix](https://wiki.mozilla.org/Matrix)의 [Add-ons room](https://chat.mozilla.org/#/room/#addons:mozilla.org)로 요청해주세요.

## What's next?

- 간단한 확장 기능을 만들어보려면 [Your first extension](/ko/Add-ons/WebExtensions/Your_first_WebExtension) 참조.
- 확장 기능의 구조에 대한 내용은 [Anatomy of an extension](/ko/Add-ons/WebExtensions/Anatomy_of_a_WebExtension) 참조
- 확장 기능 예시를 확인하려면 [Example extensions](/ko/Add-ons/WebExtensions/Examples) 참조.
