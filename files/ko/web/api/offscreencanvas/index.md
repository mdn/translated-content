---
title: OffscreenCanvas
slug: Web/API/OffscreenCanvas
---

{{APIRef("Canvas API")}} {{SeeCompatTable}}

**`OffscreenCanvas`** 는 화면 밖에서 렌더링되는 캔버스 인터페이스입니다. window 객체와 [worker](/ko/docs/Web/API/Web_Workers_API) 객체 모두 지원합니다.

## 생성자

- {{domxref("OffscreenCanvas.OffscreenCanvas", "OffscreenCanvas()")}}
  - : `OffscreenCanvas` 생성자. 새 `OffscreenCanvas` 객체를 생성합니다.

## 프로퍼티

- {{domxref("OffscreenCanvas.height")}}
  - : 캔버스의 높이
- {{domxref("OffscreenCanvas.width")}}
  - : 캔버스의 너비

## 메소드

- {{domxref("OffscreenCanvas.getContext()")}}

  - : 렌더링된 캔버스 컨텍스트 객체를 반환합니다.

- {{domxref("OffscreenCanvas.convertToBlob()")}}

  - : 캔버스에 들어있는 이미지에 대한 {{domxref("Blob")}} 객체를 생성합니다.

- {{domxref("OffscreenCanvas.transferToImageBitmap()")}}
  - : `OffscreenCanvas`에 렌더링된 이미지중에서 가장 최근에 렌더링된 이미지를 {{domxref("ImageBitmap")}} 객체로 생성합니다.

## 예시

### `OffscreenCanvas` 에서 만들어진 프레임을 동기적으로 화면에 보여주는 방법

`OffscreenCanvas` API를 사용하는 방법은 `OffscreenCanvas`에 속한 {{domxref("RenderingContext")}}를 이용해 새로운 프레임 객체를 생성하는 것입니다. 새 프레임이 컨텍스트에 렌더링이 되고나면, 가장 최근에 렌더링 된 이미지를 저장하는 {{domxref("OffscreenCanvas.transferToImageBitmap", "transferToImageBitmap()")}} 메소드를 호출할 수 있습니다. 이 메소드는 다른 수 많은 Web API에서 사용되고 있는 {{domxref("ImageBitmap")}} 객체를 리턴합니다.

`ImageBitmap`을 화면에 표시하려면, 현재 (화면에 보여지고 있는) 캔버스 요소의 `canvas.getContext("bitmaprenderer")` 메소드를 호출했을 때 생성되는 {{domxref("ImageBitmapRenderingContext")}} 객체를 사용하면 됩니다. 이 컨텍스트는 캔버스의 내용을 주어진 `ImageBitmap`으로 전환하는 기능을 제공합니다. `OffscreenCanvas`에서 이전에 렌더링이 되어서 등록된 `ImageBitmap`을 이용한 {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}}을 호출하면 `ImageBitmap`이 캔버스에 표시되고 소유권 역시 캔버스로 넘어갑니다. 단일 `OffscreenCanvas`는 프레임들을 임의의 다른 `ImageBitmapRenderingContext` 객체로 전달합니다.

아래에 두 개의 {{HTMLElement("canvas")}} 요소가 있습니다.

```html
<canvas id="one"></canvas> <canvas id="two"></canvas>
```

다음의 코드는 위에서 설명한 것처럼 `OffscreenCanvas`를 이용해 렌더링합니다.

```js
var one = document.getElementById("one").getContext("bitmaprenderer");
var two = document.getElementById("two").getContext("bitmaprenderer");

var offscreen = new OffscreenCanvas(256, 256);
var gl = offscreen.getContext("webgl");

// ... gl 컨텍스트를 이용해 첫 번째 캔버스에 무언가를 그립니다 ...

// 첫 번째 캔버스에 렌더링을 수행합니다.
var bitmapOne = offscreen.transferToImageBitmap();
one.transferFromImageBitmap(bitmapOne);

// ... gl 컨텍스트를 이용해 두 번째 캔버스에 무언가를 그립니다 ...

// 두 번째 캔버스에 렌더링을 수행합니다.
var bitmapTwo = offscreen.transferToImageBitmap();
two.transferFromImageBitmap(bitmapTwo);
```

### `OffscreenCanvas` 에서 만들어진 프레임을 비동기적으로 화면에 보여주는 방법

`OffscreenCanvas` API를 이용하는 또 다른 방법은 [worker](/ko/docs/Web/API/Web_Workers_API) 또는 메인 스레드위에서 {{HTMLElement("canvas")}} 요소의 {{domxref("HTMLCanvasElement.transferControlToOffscreen", "transferControlToOffscreen()")}}를 호출하는 것입니다. 여기서 메인 스레드는 `OffscreenCanvas` 객체를 반환하는 {{domxref("HTMLCanvasElement")}} 객체를 가지고 있습니다. {{domxref("OffscreenCanvas.getContext", "getContext()")}}를 호출하면 `OffscreenCanvas`에서 `RenderingContext`를 얻을 수 있습니다.

main.js (메인 스레드 코드):

```js
var htmlCanvas = document.getElementById("canvas");
var offscreen = htmlCanvas.transferControlToOffscreen();

var worker = new Worker("offscreencanvas.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

offscreencanvas.js (worker 코드):

```js
onmessage = function (evt) {
  var canvas = evt.data.canvas;
  var gl = canvas.getContext("webgl");

  // ... gl 컨텍스트를 이용해 무언가를 그립니다 ...
};
```

worker 내에서 requestAnimationFrame 또한 사용할 수 있습니다.

```js
onmessage = function (evt) {
  const canvas = evt.data.canvas;
  const gl = canvas.getContext("webgl");

  function render(time) {
    // ... gl 컨텍스트를 이용해 무언가를 그립니다 ...
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
};
```

## 상세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더 보기

- [WebGL Off the Main Thread – Mozilla Hacks](https://hacks.mozilla.org/2016/01/webgl-off-the-main-thread/)
- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageBitmapRenderingContext")}}
- {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}}
- {{domxref("WebGLRenderingContext.commit()")}}
