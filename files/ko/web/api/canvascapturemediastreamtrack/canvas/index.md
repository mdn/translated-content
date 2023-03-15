---
title: CanvasCaptureMediaStreamTrack.canvas
slug: Web/API/CanvasCaptureMediaStreamTrack/canvas
---

{{APIRef}}

The {{domxref("CanvasCaptureMediaStreamTrack")}} **`canvas`**읽기 전용 속성은 프레임이 캡쳐되는{{domxref("HTMLCanvasElement")}} 를 반환한다.

## 구문

```js
var elt = stream.canvas;
```

### 값

`캡처되는 프레임의 원본인 canvas를 나타내는 HTMLCanvasElement` .

## 예시

```js
// 캡처할 canvas 요소 찾기
var canvasElt = document.getElementsByTagName("canvas")[0];

// stream 얻기
var stream = canvasElt.captureStream(25); // 25 FPS

// stream 처리하기
...

// stream과 연결된 canvas 가져오기
var canvas = stream.canvas;
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더 보기

- {{domxref("HTMLCanvasElement.captureStream()")}} to create a stream to capture a given canvas element.
- {{HTMLElement("canvas")}}
