---
title: OffscreenCanvas()
slug: Web/API/OffscreenCanvas/OffscreenCanvas
---

{{APIRef("Canvas API")}} {{SeeCompatTable}}

**`OffscreenCanvas()`** 생성자는 새롭게 초기화된 {{domxref("OffscreenCanvas")}} 객체를 반환합니다.

## 구문

```js
new OffscreenCanvas(width, height);
```

### 매개 변수

- `width`
  - : offscreen 캔버스의 너비
- `height`
  - : offscreen 캔버스의 높이

## 예시

이 예시는 `OffscreenCanvas()` 생성자를 이용해 새로운 offscreen 캔버스를 생성하고, [WebGL](/ko/docs/Web/API/WebGL_API) 컨텍스트의 {{domxref("OffscreenCanvas.getContext()", "getContext()")}} 메소드를 사용해 초기화합니다.

```js
let offscreen = new OffscreenCanvas(256, 256);
let gl = offscreen.getContext("webgl");
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더 보기

- {{domxref("OffscreenCanvas")}}, 생성자가 속한 인터페이스
