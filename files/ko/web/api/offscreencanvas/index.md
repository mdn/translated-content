---
title: OffscreenCanvas
slug: Web/API/OffscreenCanvas
l10n:
  sourceCommit: f6ff6e14c5af7cb9ed701d7f4506f770014c704f
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

{{HtmlElement("canvas")}} 요소나 [Canvas API](/ko/docs/Web/API/Canvas_API)를 사용할 때, 렌더링, 애니메이션, 사용자 상호작용은 일반적으로 웹 애플리케이션의 주 실행 스레드에서 발생합니다.
캔버스 애니메이션과 렌더링과 관련된 계산은 애플리케이션 성능에 상당한 영향을 미칠 수 있습니다.

**`OffscreenCanvas`** 인터페이스는 화면 밖에서 렌더링할 수 있는 캔버스를 제공하고 DOM과 Canvas API를 분리하여 {{HtmlElement("canvas")}} 요소가 DOM에 완전히 의존하지 않도록 합니다. 렌더링 작업은 [worker](/ko/docs/Web/API/Web_Workers_API) 맥락 내에서 실행할 수도 있어서 별도의 스레드에서 일부 작업을 실행하고 메인 스레드에서 무거운 작업을 피할 수 있습니다.

`OffscreenCanvas`는 [transferable object](/ko/docs/Web/API/Web_Workers_API/Transferable_objects)입니다.

{{InheritanceDiagram}}

## 생성자

- {{domxref("OffscreenCanvas.OffscreenCanvas", "OffscreenCanvas()")}}
  - : `OffscreenCanvas` 생성자. 새 `OffscreenCanvas` 객체를 생성합니다.

## 속성

- {{domxref("OffscreenCanvas.height")}}
  - : 캔버스의 높이
- {{domxref("OffscreenCanvas.width")}}
  - : 캔버스의 너비

## 메소드

- {{domxref("OffscreenCanvas.getContext()")}}

  - : 렌더링된 캔버스 맥락 객체를 반환합니다.

- {{domxref("OffscreenCanvas.convertToBlob()")}}

  - : 캔버스에 들어있는 이미지에 대한 {{domxref("Blob")}} 객체를 생성합니다.

- {{domxref("OffscreenCanvas.transferToImageBitmap()")}}
  - : `OffscreenCanvas`에 렌더링된 이미지중에서 가장 최근에 렌더링된 이미지를 {{domxref("ImageBitmap")}} 객체로 생성합니다. {{domxref("ImageBitmap")}}을 관리하는데 중요한 참고사항을 확인하세요.

## 이벤트

부모인 {{domxref("EventTarget")}}으로부터 이벤트를 상속받습니다.

{{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} 또는 `oneventname` 속성에 이벤트 리스너를 할당하여 이벤트를 수신하세요.

- [`contextlost`](/ko/docs/Web/API/OffscreenCanvas/contextlost_event)
  - : [`OffscreenCanvasRenderingContext2D`](/ko/docs/Web/API/OffscreenCanvasRenderingContext2D) 맥락 손실을 감지하면 발생합니다.
- [`contextrestored`](/ko/docs/Web/API/OffscreenCanvas/contextrestored_event)
  - : [`OffscreenCanvasRenderingContext2D`](/ko/docs/Web/API/OffscreenCanvasRenderingContext2D) 맥락을 복원하면 발생합니다.

## 예제

### `OffscreenCanvas` 에서 만들어진 프레임을 동기적으로 화면에 보여주는 방법

`OffscreenCanvas` API를 사용하는 한 가지 방법은 `OffscreenCanvas`에 속한 `RenderingContext`를 이용해 새로운 프레임 객체를 생성하는 것입니다. 새 프레임이 맥락에 렌더링 되고나면, {{domxref("OffscreenCanvas.transferToImageBitmap", "transferToImageBitmap()")}} 메소드를 호출하여 가장 최근에 렌더링 된 이미지를 저장 할 수 있습니다. 이 메소드는 전송 사본을 생성하지 않고도, 다른 수 많은 Web API와 두번째 캔버스에서 사용될 수 있는 {{domxref("ImageBitmap")}} 객체를 리턴합니다.

`ImageBitmap`을 화면에 표시하려면, 현재 (화면에 보여지고 있는) 캔버스 요소의 `canvas.getContext("bitmaprenderer")` 메소드를 호출했을 때 생성되는 {{domxref("ImageBitmapRenderingContext")}} 맥락을 사용하면 됩니다. 이 맥락는 캔버스의 내용을 지정된 `ImageBitmap`으로 전환하는 기능만 제공합니다. `OffscreenCanvas`에서 이전에 렌더링이 되고 저장된 `ImageBitmap`을 사용하여 {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}}을 호출하면 `ImageBitmap`이 캔버스에 표시되고 소유권이 캔버스로 넘어갑니다. 단일 `OffscreenCanvas`는 프레임들을 임의의 다른 `ImageBitmapRenderingContext` 객체들로 전달할 수 있습니다.

아래에 두 개의 {{HTMLElement("canvas")}} 요소가 있습니다.

```html
<canvas id="one"></canvas> <canvas id="two"></canvas>
```

다음의 코드는 위에서 설명한 것처럼 `OffscreenCanvas`를 이용해 렌더링합니다.

```js
const one = document.getElementById("one").getContext("bitmaprenderer");
const two = document.getElementById("two").getContext("bitmaprenderer");

const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

// ... gl 맥락을 이용해 첫 번째 캔버스에 무언가를 그립니다 ...

// 첫 번째 캔버스에 렌더링을 수행합니다.
const bitmapOne = offscreen.transferToImageBitmap();
one.transferFromImageBitmap(bitmapOne);

// ... gl 맥락을 이용해 두 번째 캔버스에 무언가를 그립니다 ...

// 두 번째 캔버스에 렌더링을 수행합니다.
const bitmapTwo = offscreen.transferToImageBitmap();
two.transferFromImageBitmap(bitmapTwo);
```

### `OffscreenCanvas` 에서 만들어진 프레임을 비동기적으로 화면에 보여주는 방법

`OffscreenCanvas` API를 이용하는 또 다른 방법은 {{HTMLElement("canvas")}}의 {{domxref("HTMLCanvasElement.transferControlToOffscreen", "transferControlToOffscreen()")}}를 호출하는 것 입니다. [worker](/ko/docs/Web/API/Web_Workers_API) 또는 메인 스레드에서 여부와 관계없이, 메인 스레드의 {{domxref("HTMLCanvasElement")}}객체의 `OffscreenCanvas` 객체를 반환합니다. {{domxref("OffscreenCanvas.getContext", "getContext()")}}를 호출하면 해당 `OffscreenCanvas`의 `RenderingContext`를 얻을 수 있습니다.

main.js (메인 스레드 코드)는 다음과 같을 수 있습니다.

```js
const htmlCanvas = document.getElementById("canvas");
const offscreen = htmlCanvas.transferControlToOffscreen();

const worker = new Worker("offscreencanvas.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

반면에 `offscreencanvas.js` 스크립트 (worker 스레드)는 다음과 같을 수 있습니다.

```js
onmessage = (evt) => {
  const canvas = evt.data.canvas;
  const gl = canvas.getContext("webgl");
  // ... gl 맥락을 이용해 무언가를 그립니다 ...
};
```

또한 worker 내에서 {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}}를 사용할 수 있습니다.

```js
onmessage = (evt) => {
  const canvas = evt.data.canvas;
  const gl = canvas.getContext("webgl");

  function render(time) {
    // ... gl 맥락을 이용해 무언가를 그립니다 ...
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
};
```

전체 예제는 GitHub의 [OffscreenCanvas 예제 소스](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker)를 참조하거나 [OffscreenCanvas 예제 라이브](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)를 실행하세요.

## 상세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더 보기

- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("OffscreenCanvasRenderingContext2D")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageBitmapRenderingContext")}}
- {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}}
- {{domxref("Window.requestAnimationFrame()", "requestAnimationFrame()")}}
- [WebGL Off the Main Thread – Mozilla Hacks](https://hacks.mozilla.org/2016/01/webgl-off-the-main-thread/) (2016)
