---
title: WindowEventHandlers.onhashchange
slug: Web/API/Window/hashchange_event
---

{{APIRef("HTML DOM")}}{{domxref("WindowEventHandlers")}} 믹스인의 **WindowEventHandlers.onhashchange** 속성은

**hashchange** 이벤트를 처리하기 위한 {{event("Event_handlers", "event handler")}} 입니다.

hashchange 이벤트는 윈도우의 해시가 변경되면 시작됩니다. ( {{domxref("Window.location")}} 및 {{domxref("HTMLHyperlinkElementUtils.hash")}} 참조)

## 문법

**event handler:**

```js
window.onhashchange = funcRef;
```

**HTML event handler:**

```html
<body onhashchange="funcRef();"></body>
```

**event listener:**

{{domxref("EventTarget.addEventListener()", "addEventListener()")}}를 사용하여 이벤트 리스너 추가하기

```js
window.addEventListener("hashchange", funcRef, false);
```

### 매개변수

- `funcRef`
  - : 함수에 대한 참조.

## 예제

### event handler 사용하기

This example uses an event handler (`window.onhashchange`) to check the new hash value whenever it changes. If it equals `#cool-feature`, the script logs a message to the console.

```js
function locationHashChanged() {
  if (location.hash === "#cool-feature") {
    console.log("You're visiting a cool feature!");
  }
}

window.onhashchange = locationHashChanged;
```

### Using an event listener

이 예제는 이벤트 리스너를 사용하여 해시가 변경 될 때마다 콘솔에 알림표시합니다.

```js
function hashHandler() {
  console.log("The hash has changed!");
}

window.addEventListener("hashchange", hashHandler, false);
```

### Overriding the hash

이 함수는 새로운 해시를 동적으로 설정하여 임의로 두 값 중 하나로 설정합니다.

```js
function changeHash() {
  location.hash = Math.random() > 0.5 ? "location1" : "location2";
}
```

## hashchange 이벤트

`hashchange` 이벤트에는 다음과 같은 필드가 있습니다:

| Field    | Type        | Description                |
| -------- | ----------- | -------------------------- |
| `newURL` | `DOMString` | 탐색할 새로운 URL입니다.   |
| `oldURL` | `DOMString` | 탐색했던 이전의 URL입니다. |

### 제2의 해결책을 위한 event.newURL 와 event.oldURL

```js
//let this snippet run before your hashchange event binding code
if (!window.HashChangeEvent)
  (function () {
    var lastURL = document.URL;
    window.addEventListener("hashchange", function (event) {
      Object.defineProperty(event, "oldURL", {
        enumerable: true,
        configurable: true,
        value: lastURL,
      });
      Object.defineProperty(event, "newURL", {
        enumerable: true,
        configurable: true,
        value: document.URL,
      });
      lastURL = document.URL;
    });
  })();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [`hashchange`](/ko/docs/Web/API/Window/hashchange_event) event
- [Manipulating the browser history](/ko/docs/DOM/Manipulating_the_browser_history)
- [`history.pushState()` and `history.replaceState()`](/ko/docs/DOM/window.history) methods
- {{domxref("WindowEventHandlers.onpopstate")}}
- {{domxref("HTMLHyperlinkElementUtils.hash")}}
