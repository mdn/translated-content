---
title: Window.innerWidth
slug: Web/API/Window/innerWidth
tags:
  - API
  - Property
  - Reference
translation_of: Web/API/Window/innerWidth
---
{{APIRef}}
브라우저 윈도우의 뷰포트 너비로, 수직 스크롤바가 존재한다면 포함합니다.

## 구문

```js
var intViewportWidth = window.innerWidth;
```

### Value

**_intViewportWidth_** stores the `window.innerWidth` property value.

The `window.innerWidth` property is read only; it has no default value.

## 참고

innerWidth 값은 window, frame, frameset이나 다른 윈도우들처럼 모든 window 형식의 객체에서 사용할 수 있습니다.

There is [an algorithm](https://bugzilla.mozilla.org/show_bug.cgi?id=189112#c7) to obtain the width of the viewport excluding, if rendered, the vertical scrollbar.

## 예제

```js
// 다음과 같이 뷰포트의 폭을 받아올 수 있습니다.
var intFrameWidth = window.innerWidth;

// 다음과 같이 frameset 안의 어떤 frame의 뷰포트 폭을 받아올 수 있습니다.
var intFrameWidth = self.innerWidth;

// 다음과 같이 가장 가까운 frameset의 뷰포트 폭을 받아올 수 있습니다.
var intFramesetWidth = parent.innerWidth;

// 다음과 같이 가장 바깥쪽 프레임셋의 뷰포트 폭을 받아올 수 있습니다.
var intOuterFramesetWidth = top.innerWidth;
```

윈도우의 사이즈를 변경하려면, {{domxref("window.resizeBy")}} 또는 {{domxref("window.resizeTo")}}를 참조하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고 자료

- {{domxref("window.outerWidth")}}
- {{domxref("window.innerHeight")}}
- {{domxref("window.outerHeight")}}
