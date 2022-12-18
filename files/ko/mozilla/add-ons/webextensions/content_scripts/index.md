---
title: Content scripts
slug: Mozilla/Add-ons/WebExtensions/Content_scripts
---

{{AddonSidebar}}

콘텐츠 스크립트는 특정 웹페이지의 맥락에서 실행되는 확장 기능의 일부입니다(백그라운드 스크립트는 이와 반대로, {{HTMLElement("script")}} 요소를 사용하여 로드되는 것과 같은 확장 기능의 일부이거나 웹사이트 자체의 일부인 스크립트입니다).

[백그라운드 스크립트](/en-US/Add-ons/WebExtensions/Background_scripts)는 모든 [WebExtension JavaScript API](/en-US/Add-ons/WebExtensions/API)에 접근 가능하지만, 웹페이지의 콘텐츠에는 직접 접근하지 못합니다. 따라서 확장 기능이 이를 필요로 한다면, 콘텐츠 스크립트가 필요합니다.

일반적인 웹페이지에 로드되는 스크립트처럼, 콘텐츠 스크립트는 표준 DOM API를 사용하여 페이지의 콘텐츠를 읽고 수정할 수 있습니다.

콘텐츠 스크립트는 [WebExtension API의 작은 부분집합](/en-US/Add-ons/WebExtensions/Content_scripts#WebExtension_APIs)에만 접근 가능하지만, 메시징 시스템을 이용해 [백그라운드 스크립트와 통신 가능하며](/en-US/Add-ons/WebExtensions/Content_scripts#Communicating_with_background_scripts), 그런 식으로 간접적으로 WebExtension API에 접근할 수 있습니다.

> **참고:** 다음 도메인들에서 콘텐츠 스크립트는 차단되어 있습니다.
>
> accounts-static.cdn.mozilla.net, accounts.firefox.com, addons.cdn.mozilla.net, addons.mozilla.org, api.accounts.firefox.com, content.cdn.mozilla.net, content.cdn.mozilla.net, discovery.addons.mozilla.org, input.mozilla.org, install.mozilla.org, oauth.accounts.firefox.com, profile.accounts.firefox.com, support.mozilla.org, sync.services.mozilla.com, testpilot.firefox.com
>
> 이러한 도메인의 페이지에서 콘텐츠 스크립트를 삽입하려고 할 시 실패하며 페이지에 [CSP](/ko/docs/Web/HTTP/CSP) 오류가 로깅됩니다. 이러한 제한에는 addons.mozilla.org가 포함되므로 사용자가 확장 기능을 설치 직후 사용하려고 시도했지만 작동하지 않을 수 있습니다. 사용자가 addons.mozilla.org에서 나가게끔 적절한 경고나 [온보딩 페이지](/ko/docs/Mozilla/Add-ons/WebExtensions/onboarding_upboarding_offboarding_best_practices)를 추가할 수 있습니다.

> **참고:** [1408996](https://bugzilla.mozilla.org/show_bug.cgi?id=1408996) 버그로 인해 `var foo` 또는 `window.foo = "bar"`로 콘텐츠 스크립트의 전역 스코프에 추가된 값은 사라질 수 있습니다.

## 콘텐츠 스크립트 로드하기

다음의 세 가지 방법 중 하나를 이용해 콘텐츠 스크립트를 웹페이지에 로드할 수 있습니다.

1. **설치 도중, URL 패턴과 일치하는 페이지에**
  manifest.json 안의 [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 키를 사용하여, 브라우저가 [주어진 패턴과 일치하는](/en-US/Add-ons/WebExtensions/Match_patterns) URL에 해당하는 페이지를 로드할 때마다 콘텐츠 스크립트를 로드하도록 브라우저에 요청할 수 있습니다.

2. **실행 도중, URL 패턴과 일치하는 페이지에**
  {{WebExtAPIRef("contentScripts")}} API를 사용하여, 브라우저가 [주어진 패턴과 일치하는](/en-US/Add-ons/WebExtensions/Match_patterns) URL에 해당하는 페이지를 로드할 때마다 콘텐츠 스크립트를 로드하도록 브라우저에 요청할 수 있습니다. 이 방법은 실행 도중 콘텐츠 스크립트를 추가하고 제거할 수 있다는 것만 제외하면 방법 (1)과 같습니다.

3. **실행 도중, 특정 탭에**
  [`tabs.executeScript()`](/en-US/Add-ons/WebExtensions/API/Tabs/executeScript) API을 사용하여, 원할 때마다 콘텐츠 스크립트를 특정 탭에 로드할 수 있습니다. 유저가 [브라우저 액션](/ko/docs/Mozilla/Add-ons/WebExtensions/Browser_action)을 클릭했을 때 응답하는 것이 한 예시입니다.

확장 기능 당 프레임 당 하나의 전역 스코프만 있으므로, 콘텐츠 스크립트가 로드된 방식에 관계없이 한 콘텐츠 스크립트의 변수들은 다른 콘텐츠 스크립트로부터 직접 접근할 수 있습니다.

방법 (1)과 (2)를 사용해서 [일치 패턴](/ko/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)으로 나타낼 수 있는 URL의 페이지에만 스크립트를 로드할 수 있습니다. 방법 (3)을 사용해서 확장 기능과 함께 패키지된 페이지에도 스크립트를 로드할 수 있으나, "about:debugging" 이나 "about:addons"와 같이 특별한 권한이 있는 브라우저 페이지에는 스크립트를 로드할 수 없습니다.

## 콘텐츠 스크립트 환경

### DOM 접근

콘텐츠 스크립트는 일반적인 페이지 스크립트가 할 수 있는 것처럼 페이지의 DOM에 접근하고 수정할 수 있습니다. 또한 페이지 스크립트에 의해 DOM에 적용된 모든 변경 사항을 볼 수 있습니다.

하지만, 콘텐츠 스크립트는 "DOM의 깨끗한 외형"을 얻게 되는데, 이는 다음을 의미합니다.

- 콘텐츠 스크립트는 페이지 스크립트에서 정의된 JavaScript 변수를 볼 수 없습니다.
- 페이지 스크립트가 내장 DOM 속성을 재정의하는 경우에도, 콘텐츠 스크립트는 재정의된 속성이 아닌 기존의 속성을 보게 됩니다.

Gecko에서 이 동작은 [Xray vision](/ko/docs/Xray_vision)라 불립니다.

예를 들어, 다음과 같은 웹페이지를 생각해 보세요.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  </head>

  <body>
    <script src="page-scripts/page-script.js"></script>
  </body>
</html>
```

"page-script.js" 스크립트는 다음을 수행합니다.

```js
// page-script.js

// add a new element to the DOM
var p = document.createElement("p");
p.textContent = "This paragraph was added by a page script.";
p.setAttribute("id", "page-script-para");
document.body.appendChild(p);

// define a new property on the window
window.foo = "This global variable was added by a page script";

// redefine the built-in window.confirm() function
window.confirm = function() {
  alert("The page script has also redefined 'confirm'");
}
```

이제 확장 기능이 페이지에 콘텐츠 스크립트를 삽입합니다.

```js
// content-script.js

// can access and modify the DOM
var pageScriptPara = document.getElementById("page-script-para");
pageScriptPara.style.backgroundColor = "blue";

// can't see page-script-added properties
console.log(window.foo);  // undefined

// sees the original form of redefined properties
window.confirm("Are you sure?"); // calls the original window.confirm()
```

반대의 경우에도 마찬가지입니다. 페이지 스크립트는 콘텐츠 스크립트가 추가한 JavaScript 속성을 볼 수 없습니다.

이 모든 것은 콘텐츠 스크립트는 예상대로 동작하는 DOM 속성에 의존할 수 있고, 콘텐츠 스크립트에서 정의한 변수와 페이지 스크립트에서 정의한 변수와의 충돌을 걱정할 필요가 없음을 의미합니다.

이 동작의 실용적인 결론은 콘텐츠 스크립트가 페이지에서 로드한 JavaScript 라이브러리에 접근할 수 없다는 것입니다. 즉 예를 들어, 페이지가 jQuery를 포함한다면, 콘텐츠 스크립트에서는 이를 볼 수 없을 것입니다.

만약 콘텐츠 스크립트가 JavaScript 라이브러리를 사용하기를 원한다면, 해당 라이브러리를 사용하려는 콘텐츠 스크립트와 라이브러리 자체를 같이 삽입해야 합니다.

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "content-script.js"]
  }
]
```

Firefox는 콘텐츠 스크립트가 페이지 스크립트에 의해 생성된 JavaScript 객체에 접근하고 자신의 JavaScript 객체를 페이지 스크립트에 노출할 수 있도록 하는 일부 API를 제공합니다. [페이지 스크립트와 객체 공유](/ko/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) 항목에서 자세한 내용을 확인하세요.

### WebExtension API

표준 DOM API 외에도, 콘텐츠 스크립트는 다음 WebExtension API를 사용할 수 있습니다.

[`extension`](/en-US/Add-ons/WebExtensions/API/extension)로부터:

- [`getURL()`](</en-US/Add-ons/WebExtensions/API/extension#getURL()>)
- [`inIncognitoContext`](/en-US/Add-ons/WebExtensions/API/extension#inIncognitoContext)

[`runtime`](/en-US/Add-ons/WebExtensions/API/runtime)로부터:

- [`connect()`](</en-US/Add-ons/WebExtensions/API/runtime#connect()>)
- [`getManifest()`](</en-US/Add-ons/WebExtensions/API/runtime#getManifest()>)
- [`getURL()`](</en-US/Add-ons/WebExtensions/API/runtime#getURL()>)
- [`onConnect`](/en-US/Add-ons/WebExtensions/API/runtime#onConnect)
- [`onMessage`](/en-US/Add-ons/WebExtensions/API/runtime#onMessage)
- [`sendMessage()`](</en-US/Add-ons/WebExtensions/API/runtime#sendMessage()>)

[`i18n`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n)로부터:

- [`getMessage()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getMessage)
- [`getAcceptLanguages()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getAcceptLanguages)
- [`getUILanguage()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/getUILanguage)
- [`detectLanguage()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/detectLanguage)

[`menus`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus)로부터:

- [`getTargetElement`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement)

[`storage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage)로부터 모든 것.

### XHR 및 Fetch

콘텐츠 스크립트는 일반적인 [`window.XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest) 와 [`window.fetch()`](/en-US/docs/Web/API/Fetch_API) API를 사용해 요청을 만들 수 있습니다.

콘텐츠 스크립트는 확장 기능의 나머지와 동일한 교차 도메인 권한을 얻습니다. 따라서 확장 기능이 manifest.json에서 [`permissions`](/en-US/Add-ons/WebExtensions/manifest.json/permissions) 키를 사용해서 도메인의 교차 도메인 접근을 요청했을 때, 콘텐츠 스크립트에서도 해당 도메인에 접근할 수 있습니다.

이것은 콘텐츠 스크립트에 더 많은 권한이 있는 XHR과 fetch 인스턴스를 노출시켜서 이루어지는데, 페이지 자체의 요청처럼 [`Origin`](/en-US/docs/Web/HTTP/Headers/Origin)과 [`Referer`](/en-US/docs/Web/HTTP/Headers/Referer) 헤더를 설정하지 않는 부작용이 있습니다. 이는 요청이 교차 출처 성질을 드러내는 것을 방지하기 위해 종종 선호됩니다. 버전 58부터 콘텐츠 자체로부터 보내진 것처럼 동작하는 요청을 수행해야 하는 확장 기능은 대신 `content.XMLHttpRequest`과 `content.fetch()`를 사용할 수 있습니다. 교차 브라우저 확장 기능에서 이들의 존재가 기능 탐지되어야 합니다.

## 백그라운드 스크립트와 통신하기

콘텐츠 스크립트는 대부분의 WebExtension API를 직접 사용하지 못하지만, 메시징 API를 이용해 확장 기능의 백그라운드 스크립트와 통신할 수 있고 따라서 백그라운드 스크립트가 접근 가능한 모든 동일한 API에 간접적으로 접근 가능합니다.

백그라운드 스크립트와 콘텐츠 스크립트 간의 통신에는 두 가지 기본 패턴이 있습니다. 선택적 응답을 포함한 일회성 메시지를 보내거나, 또는 양쪽 간 더 오래 지속되는 연결을 구축하고, 해당 연결을 사용하여 메시지를 교환할 수 있습니다.

### 일회성 메시지

선택적 응답을 포함한 일회성 메시지를 보내기 위해, 다음의 API를 사용할 수 있습니다.

|                   | 콘텐츠 스크립트에서                                                                       | 백그라운드 스크립트에서                                                              |
| ----------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 메시지 보내기    | [`browser.runtime.sendMessage()`](/en-US/Add-ons/WebExtensions/API/runtime/sendMessage) | [`browser.tabs.sendMessage()`](/en-US/Add-ons/WebExtensions/API/Tabs/sendMessage) |
| 메시지 받기 | [`browser.runtime.onMessage`](/en-US/Add-ons/WebExtensions/API/runtime/onMessage)       | [`browser.runtime.onMessage`](/en-US/Add-ons/WebExtensions/API/runtime/onMessage) |

예를 들어, 아래는 웹페이지의 클릭 이벤트를 수신하는 콘텐츠 스크립트입니다. 링크를 클릭한 경우 대상 URL를 백그라운드 페이지로 보냅니다.

```js
// content-script.js

window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
  if (e.target.tagName != "A") {
    return;
  }
  browser.runtime.sendMessage({"url": e.target.href});
}
```

백그라운드 스크립트는 이 메시지를 수신하고 [`notifications`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API를 사용해 알림을 띄웁니다.

```js
// background-script.js

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    "type": "basic",
    "iconUrl": browser.extension.getURL("link.png"),
    "title": "You clicked a link!",
    "message": message.url
  });
}
```

이 예제 코드는 GitHub의 [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n) 예제에서 약간 수정되었습니다.

### 연결 기반 메시징

백그라운드 스크립트와 콘텐츠 스크립트가 많은 양의 메시지를 주고받고 있다면, 일회성 메시지를 보내는 것이 번거로울 수 있습니다. 따라서 다른 패턴은 두 맥락간 더 오래 지속되는 연결을 구축하고, 이 연결을 사용해서 메시지를 교환하는 것입니다.

양쪽은 메시지를 교환하는 데 사용할 수 있는 [`runtime.Port`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) 객체를 가지고 있습니다.

다음과 같이 연결을 생성합니다.

- 한쪽에서 [`runtime.onConnect`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect)을 사용해서 연결을 수신합니다.
- 다른 쪽에서는 [`tabs.connect()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) (콘텐츠 스크립트에 연결하려 하는 경우) 또는 [`runtime.connect()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) (백그라운드 스크립트에 연결하려 하는 경우)를 호출합니다. 이는 [`runtime.Port`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) 객체를 반환합니다.
- [`runtime.onConnect`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) 수신기는 자기 자신의 [`runtime.Port`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) 객체를 전달받습니다.

일단 양쪽이 포트를 가지게 되면, `runtime.Port.postMessage()`를 사용해서 메시지를 보내고 `runtime.Port.onMessage`를 사용해서 메시지를 받는 식으로 메시지를 교환하게 됩니다.

예를 들어, 로드되는 즉시 콘텐츠 스크립트는 다음을 수행하게 됩니다.

- 백그라운드 스크립트에 연결하고, `Port`를 `myPort` 변수에 저장합니다.
- `myPort`로부터 메시지를 수신하고 로그를 기록합니다.
- 사용자가 문서를 클릭하면 `myPort`를 사용해서 백그라운드 스크립트에 메시지를 보냅니다.

```js
// content-script.js

var myPort = browser.runtime.connect({name:"port-from-cs"});
myPort.postMessage({greeting: "hello from content script"});

myPort.onMessage.addListener(function(m) {
  console.log("In content script, received message from background script: ");
  console.log(m.greeting);
});

document.body.addEventListener("click", function() {
  myPort.postMessage({greeting: "they clicked the page!"});
});
```

이에 대응하는 백그라운드 스크립트는 다음을 수행합니다.

- 콘텐츠 스크립트에서 시도된 연결을 수신합니다.
- 연결 시도를 받았을 경우

  - `portFromCS` 변수에 포트 저장합니다.
  - 포트를 사용해서 콘텐츠 스크립트에 메시지를 보냅니다.
  - 포트로 전달되는 메시지를 수신하기 시작하고, 로깅합니다.

- 사용자가 확장 기능의 브라우저 액션을 클릭했을 때, `portFromCS`를 사용해서 콘텐츠 스크립트에 메시지를 보냅니다.

```js
// background-script.js

var portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({greeting: "hi there content script!"});
  portFromCS.onMessage.addListener(function(m) {
    console.log("In background script, received message from content script")
    console.log(m.greeting);
  });
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(function() {
  portFromCS.postMessage({greeting: "they clicked the button!"});
});
```

#### 여러 콘텐츠 스크립트

동시에 통신하는 여러 콘텐츠 스크립트가 있는 경우, 각 연결을 배열에 저장할 수 있습니다.

```js
// background-script.js

var ports = []

function connected(p) {
  ports[p.sender.tab.id]    = p
  //...
}

browser.runtime.onConnect.addListener(connected)

browser.browserAction.onClicked.addListener(function() {
  ports.forEach(p => {
        p.postMessage({greeting: "they clicked the button!"})
    })
});
```

### 일회성 메시지와 연결 기반 메시지 중 선택하기

The choice between one-off and connection-based messaging depends on how your extension expects to make use of messaging.

일회성과 연결 기반 메시징 중에서의 선택은 확장 프로그램이 메시징을 사용하는 방식에 따라 달라집니다.

권장하는 모범 사례는 다음과 같습니다.

- **다음의 경우 일회성 메시지를 사용하세요.**
  - 메시지에 단 하나의 응답만이 예상됩니다.
  - 소수의 스크립트가 전달받을 메시지를 수신합니다({{WebExtAPIRef("runtime.onMessage")}} 호출).
- **다음의 경우 연결 기반 메시지를 사용하세요.**
  - 스크립트가 여러 메시지가 교환되는 세션과 관련됩니다.
  - 확장 기능이 작업 진행 상황이나 작업이 중단되었는지, 혹은 시작된 작업을 메시징을 사용해서 중단시키고 싶은지 알아야 합니다.

## 웹페이지와 통신하기

콘텐츠 스크립트는 기본적으로 페이지 스크립트가 만든 객체에 접근할 수 없지만, DOM의 [`window.postMessage`](/en-US/docs/Web/API/Window/postMessage)와 [`window.addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) API로 페이지 스크립트와 통신할 수 있습니다.

예를 들면 다음과 같습니다.

```js
// page-script.js

var messenger = document.getElementById("from-page-script");

messenger.addEventListener("click", messageContentScript);

function messageContentScript() {
  window.postMessage({
    direction: "from-page-script",
    message: "Message from the page"
  }, "*");
```

```js
// content-script.js

window.addEventListener("message", function(event) {
  if (event.source == window &&
      event.data &&
      event.data.direction == "from-page-script") {
    alert("Content script received message: \"" + event.data.message + "\"");
  }
});
```

이에 대한 완전한 예제를 보려면 [GitHub의 데모페이지](https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html)를 방문하고 지침을 따르세요.

> **경고:** 이런 방식으로 신뢰할 수 없는 웹 콘텐츠와 상호 작용할 때마다 매우 조심해야 합니다. 확장 기능은 강력한 기능을 제공할 수 있는 권한을 가진 코드이고, 적대적인 웹 페이지는 그런 기능에 접근해서 확장 기능을 쉽게 속일 수 있습니다.
>
> 간단한 예제로, 콘텐츠 스크립트가 아래처럼 동작하는 메시지를 받는다고 합시다.
>
> ```js example-bad
> // content-script.js
>
> window.addEventListener("message", (event) => {
>   if (
>     event.source === window &&
>     event?.data?.direction === "from-page-script"
>   ) {
>     eval(event.data.message);
>   }
> });
> ```
>
> 이제 페이지 스크립트는 콘텐츠 스크립트의 모든 권한으로 어떠한 코드라도 실행할 수 있게 됩니다.

## 콘텐츠 스크립트에서 eval() 사용하기

> **참고:** `eval()`은 Manifest V3에서 지원하지 않습니다.

- Chrome의 경우,
  - : {{jsxref("Global_Objects/eval", "eval")}}은 항상 페이지 맥락이 아닌 콘텐츠 스크립트의 맥락에서 코드를 실행합니다.

- Firefox의 경우,

  - : `eval()`을 호출하면 **콘텐츠**의 맥락에서 코드를 실행합니다.

    `window.eval()`을 호출하면 **페이지**의 맥락에서 코드를 실행합니다.

예를 들어, 다음의 콘텐츠 스크립트를 생각해 봅시다.

```js
// content-script.js

window.eval('window.x = 1;');
eval('window.y = 2');

console.log(`In content script, window.x: ${window.x}`);
console.log(`In content script, window.y: ${window.y}`);

window.postMessage({
  message: "check"
}, "*");
```

이 코드는 `window.eval()` 및 `eval()`을 사용하여 변수 x와 y를 생성하고, 값을 로깅하고, 페이지에 메시지를 보냅니다.

메시지를 받으면, 페이지 스크립트는 동일한 변수들을 로그로 기록합니다.

```js
window.addEventListener("message", (event) => {
  if (event.source === window && event.data && event.data.message === "check") {
    console.log(`In page script, window.x: ${window.x}`);
    console.log(`In page script, window.y: ${window.y}`);
  }
});
```

Chrome에서는 다음과 같은 출력이 생성됩니다.

```
In content script, window.x: 1
In content script, window.y: 2
In page script, window.x: undefined
In page script, window.y: undefined
```

Firefox에서는 다음과 같은 출력이 생성됩니다.

```
In content script, window.x: undefined
In content script, window.y: 2
In page script, window.x: 1
In page script, window.y: undefined
```

[`setTimeout()`](/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), [`setInterval()`](/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) 및 [`Function()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)에도 동일하게 적용됩니다.

페이지 맥락에서에서 코드를 실행할 때는 매우 주의해야 합니다. 페이지의 환경은 잠재적으로 악의적인 웹 페이지에 의해 제어되며, 상호 작용하는 객체를 재정의하여 예기치 못한 방식으로 동작할 수 있습니다.

```js
// page.js redefines console.log

var original = console.log;

console.log = function() {
  original(true);
}
```

```js
// content-script.js calls the redefined version

window.eval('console.log(false)');
```
