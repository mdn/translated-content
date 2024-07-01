---
title: Window.frameElement
slug: Web/API/Window/frameElement
---

{{ApiRef}}

**`Window.frameElement`** 속성은 {{HTMLElement("iframe")}}이나 {{HTMLElement("object")}}처럼 현재 창을 포함한 요소를 반환합니다. 창이 다른 문서에 포함된 것이 아니거나, 문서의 출처가 다른 경우, 즉 창과 해당 문서의 도메인이 서로 다른 경우 {{jsxref("null")}}을 반환합니다.

> **참고:** 속성 이름("frame")과는 달리, {{HTMLElement("object")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}를 포함한 모든 포함 지점에서 사용할 수 있습니다.

## 예제

```js
var frameEl = window.frameElement;
// If we're embedded, change the containing element's URL to 'http://mozilla.org/'
if (frameEl) {
  frameEl.src = "http://mozilla.org/";
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("window.frames")}}는 현재 창의 모든 자식 프레임을 배열형 객체로 나열합니다.
- {{domxref("window.parent")}}는 부모 창, 즉 `frameElement`를 담고 있는 창을 반환합니다.
