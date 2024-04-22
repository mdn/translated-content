---
title: Document.readyState
slug: Web/API/Document/readyState
---

{{APIRef("DOM")}}

**`Document.readyState`** 속성을 통해 {{domxref("document")}}의 로딩 상태를 확인할 수 있다.

Document.readyState 속성 값이 바뀔 때 {{domxref("Document/readystatechange_event", "readystatechange")}} 이벤트가 {{domxref("document")}}에서 일어난다.

## Syntax

```js
var string = document.readyState;
```

### Values

`document의 readyState` 상태는 아래 3가지가 될 수 있다.

- `loading`
  - : {{domxref("document")}} 로딩 중.
- `interactive`
  - : 문서의 로딩은 끝이 나고 해석 중 이지만 images, stylesheets, frames과 같은 하위 자원들은 로딩되고 있는 상태이다.
- `complete`
  - : 문서와 모든 하위 자원들의 로드가 완료된 상태이다. 이 상태는 {{domxref("Window/load_event", "load")}} 이벤트가 발생되기 직전 상태이다.

## Examples

### Different states of readiness

```js
switch (document.readyState) {
  case "loading":
    // The document is still loading.
    break;
  case "interactive":
    // The document has finished loading. We can now access the DOM elements.
    // But sub-resources such as images, stylesheets and frames are still loading.
    var span = document.createElement("span");
    span.textContent = "A <span> element.";
    document.body.appendChild(span);
    break;
  case "complete":
    // The page is fully loaded.
    console.log(
      "The first CSS rule is: " + document.styleSheets[0].cssRules[0].cssText,
    );
    break;
}
```

### readystatechange as an alternative to DOMContentLoaded event

```js
// Alternative to DOMContentLoaded event
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    initApplication();
  }
};
```

### readystatechange as an alternative to load event

```js
// Alternative to load event
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    initApplication();
  }
};
```

### readystatechange as event listener to insert or modify the DOM before DOMContentLoaded

```js
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "interactive") {
    initLoader();
  } else if (event.target.readyState === "complete") {
    initApp();
  }
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 관련 이벤트
  - {{domxref("Document/readystatechange_event", "readystatechange")}}
  - {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - {{domxref("Window/load_event", "load")}}
