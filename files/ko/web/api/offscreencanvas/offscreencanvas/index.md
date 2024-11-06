---
title: OffscreenCanvas()
slug: Web/API/OffscreenCanvas/OffscreenCanvas
l10n:
  sourceCommit: f6ff6e14c5af7cb9ed701d7f4506f770014c704f
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

**`OffscreenCanvas()`** 생성자는 새롭게 초기화된 {{domxref("OffscreenCanvas")}} 객체를 반환합니다.

## 구문

```js-nolint
new OffscreenCanvas(width, height);
```

### 매개 변수

- `width`
  - : offscreen 캔버스의 너비
- `height`
  - : offscreen 캔버스의 높이

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

The **`OffscreenCanvas()`** constructor returns a newly instantiated {{domxref("OffscreenCanvas")}} object.

## 예제

이 예제는 `OffscreenCanvas()` 생성자를 이용해 새로운 offscreen 캔버스를 생성하고, [WebGL](/ko/docs/Web/API/WebGL_API) 맥락의 {{domxref("OffscreenCanvas.getContext()", "getContext()")}} 메서드를 사용해 초기화합니다.

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더 보기

- {{domxref("OffscreenCanvas")}}, 생성자가 속한 인터페이스
