---
title: Anatomy of an extension
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
---

{{AddonSidebar}}

확장앱은 배포 및 설치를 위해 패키징 된 파일 모음으로 구성됩니다. 이 아티클은 확장앱에 있을 수 있는 파일들을 빠르게 살펴봅니다.

## manifest.json

manifest.json 파일은 모든 확장앱이 가져야하는 유일한 파일입니다. 이 파일에는 이름, 버전 및 필요한 권한과 같은 메타정보가 들어 있습니다.

또한 확장앱에 포함될 다른 파일들(하단 목록)을 가리킵니다.

- [Background pages](/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts): (브라우저 창의 수명과 독립적으로) 오랜 시간 실행되는 로직 구현.
- 확장앱의 아이콘 및 기타 버튼들.
- [사이드바, 팝업, 옵션 페이지](/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Sidebars_popups_options_pages): UI 컴포넌트를 제공하는 HTML 파일들
- [컨텐츠 스크립트](/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Content_scripts): 웹페이지에 주입할 자바스크립트 파일

![](webextension-anatomy.png)

세부 내용: [manifest.json](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 참조.

manifest에 참조 된 항목 외에도, [Extension pages](/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Extension_pages)와 해당 페이지의 리소스가 확장앱 번들에 포함될 수 있습니다.

## Background scripts

확장앱은 종종 특정 웹 페이지나 브라우저 창의 수명과 독립적으로 장기간 상태를 유지하거나 작업을 수행해야 합니다. 그때 필요한 것이 백그라운드 스크립트입니다.

백그라운드 스크립트는 확장앱이 로드 되자마자 로드되며 확장앱이 다시 비활성화 또는 제거될 때까지 로드된 상태를 유지합니다. 적절한 [권한](/en-US/Add-ons/WebExtensions/manifest.json/permissions)을 요청했다면 이 스크립트에서 [WebExtension APIs](/en-US/Add-ons/WebExtensions/API)를 사용할 수 있습니다.

### 백그라운드 스크립트 정의

"manifest.json"에 `background` 키로 백그라운드 스크립트를 포함할 수 있습니다:

```json
// manifest.json

"background": {
  "scripts": ["background-script.js"]
}
```

여러 개의 백그라운드 스크립트를 지정할 수 있습니다: 그 경우 한 웹페이지에서 여러 스크립트들이 실행되듯이 백그라운드 스크립트들이 동일한 context에서 실행됩니다.

### 백그라운드 스크립트 환경

#### DOM APIs

백그라운드 스크립트는 background pages라는 특별한 페이지의 context에서 실행됩니다. 이것은 백그라운드 스크립트에 모든 표준 DOM API들을 제공하는 전역 [`window`](/ko/docs/Web/API/Window) 객체를 제공합니다.

background page를 제공할 필요는 없습니다. 백그라운드 스크립트를 추가했다면 빈 background page가 생성됩니다.

그러나 background page를 별도의 HTML 파일로 제공하도록 선택할 수 있습니다.

```json
// manifest.json

"background": {
  "page": "background-page.html"
}
```

#### WebExtension APIs

백그라운드 스크립트는 선언된 [권한](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) 내의 모든 [WebExtension APIs](/en-US/Add-ons/WebExtensions/API)를 사용할 수 있습니다.

#### Cross-origin access

백그라운드 스크립트는 선언된 [host 권한](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) 내의 모든 서버(host)에 XHR 요청을 할 수 있습니다.

#### Web content

백그라운드 스크립트는 웹 페이지에 직접 엑세스하지 못합니다. 그러나 웹페이지에 [컨텐츠 스크립트](/ko/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)를 삽입할 수 있으며 [메시지 전달 API를 통해 컨텐츠 스크립트와 통신할 수 있습니다](/en-US/Add-ons/WebExtensions/Content_scripts#Communicating_with_background_scripts).

#### Content security policy

백그라운드 스크립트는 [`eval()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/eval) 사용과 같이 잠재적으로 위험할 수 있는 특정 작업을 제한합니다. 자세한 내용은 [컨텐츠 보안 정책](/ko/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)을 참조하십시오.

## Sidebars, popups, options pages

확장앱은 HTML를 이용하여 다양한 UI를 포함할 수 있습니다.

- [사이드바](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)는 브라우저 창의 왼쪽, 웹 페이지 옆에 표시되는 창입니다.
- [팝업](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)은 사용자가 [툴바 버튼](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action) 이나 [주소창 버튼](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)를 클릭 할 때 표시되는 다이얼로그입니다
- [옵션 페이지](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)는 브라우저의 애드온 매니저에서 확장앱의 환경 설정에 접근할 때 표시 되는 페이지입니다.

이러한 각 구성 요소에 대해 HTML 파일을 만들고 [manifest.json](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json)의 특정 속성에 지정합니다. 이 HTML 파일은 일반 웹 페이지와 마찬가지로 CSS 및 JavaScript 파일이 포함될 수 있습니다.

이 페이지들은 모두 [Extension pages](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) 유형이며, 일반 웹 페이지와 달리 이 페이지에서 실행되는 javaScript는 권한이 부여된 WebExtension API를 모두 사용할 수 있습니다(백그라운드 스크립트와 동일).
{{WebExtAPIRef("runtime.getBackgroundPage()")}}
심지어 위와 같이 background page에서 사용하는 변수에 직접 접근할 수도 있습니다.

## Extension pages

또한 미리 정의된 UI에 연결되지 않은 HTML 문서를 확장앱에 포함할 수 있습니다. 사이드바, 팝업 또는 옵션 페이지에 제공할 문서와 달리 manifest.json에 이 페이지를 정의하는 항목은 없습니다. 그러나 이 페이지 또한 백그라운드 스크립트와 동일하게 권한이 부여된 WebExtension API에 대한 접근 권한을 가집니다.

일반적으로 {{WebExtAPIRef("windows.create()")}} 또는 {{WebExtAPIRef("tabs.create()")}}를 사용하여 Extension page를 로드할 수 있습니다.

세부 내용 : [Extension pages](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) 참조.

## Content scripts

컨텐츠 스크립트를 사용하여 웹 페이지에 접근하고 수정하십시오. 컨텐츠 스크립트는 웹 페이지에 로드되고 해당 페이지의 context에서 실행됩니다.

컨텐츠 스크립트는 웹 페이지의 context에서 실행되는, 확장앱용 스크립트입니다. 이는 페이지 내의 {{HTMLElement ( "script")}} 요소 등 페이지 자체가 로드하는 스크립트와 다릅니다.

컨텐츠 스크립트는 웹페이지가 로드하는 일반 스크립트처럼 DOM에 접근 및 조작을 할 수 있습니다.

일반 페이지 스크립트와 달리 다음 작업을 수행 할 수 있습니다.

- 크로스 도메인의 XHR 요청
- [WebExtension APIs](/ko/docs/Mozilla/Add-ons/WebExtensions/API) 일부 사용
- 백그라운드 스크립트와 메시지를 교환함으로 모든 WebExtension API에 간접적으로 접근

컨텐츠 스크립트는 일반 페이지 스크립트에 직접 접근할 수는 없지만 [window.postMessage()](/ko/docs/Web/API/Window/postMessage) API를 사용하여 메시지를 교환할 수 있습니다.

일반적으로 컨텐츠 스크립트는 자바 스크립트를 지칭하지만, 동일한 매커니즘으로 웹 페이지에 CSS를 삽입할 수 있습니다.

세부내용: [content scripts](/ko/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) 참조.

## Web accessible resources

Web accessible resources는 확장앱에 포함되어 있고 컨텐츠 스크립트 및 페이지 스크립트에 엑세스할 수 있게 하려는 이미지, HTML, CSS 및 JavaScript와 같은 리소스입니다. 이 리소스는 특수한 URI를 사용하여 페이지 스크립트 및 컨텐츠 스크립트에서 참조할 수 있습니다.

예를 들어 컨텐츠 스크립트가 일부 이미지를 웹 페이지에 삽입하려는 경우, 확장앱에 포함시키고 web accessible하게 할 수 있습니다. 그러면 컨텐츠 스크립트에서 src 속성을 통해 이미지를 참조하는 img 태그를 만들고 추가할 수 있습니다.

자세한 내용은 manifest.json의 [web_accessible_resources](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) key의 스펙을 확인하세요.
