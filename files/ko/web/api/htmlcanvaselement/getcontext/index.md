---
title: HTMLCanvasElement.getContext()
slug: Web/API/HTMLCanvasElement/getContext
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement.getContext()`** 메소드는 캔버스의 드로잉 컨텍스트를 반환합니다. 컨텍스트 식별자가 지원되지 않을 경우 {{jsxref("null")}}을 반환합니다.

동일한 캔버스 엘리먼트에서 나중에 이 메소드를 호출하면 동일한 `contextType` 인자와 함께 메소드가 마지막으로 호출되었을 때 반환된 것과 같이 동일한 드로잉 컨텍스트 인스턴스를 반환합니다. 다른 드로잉 컨텍스트 객체를 얻으려면 다른 `contextType`을 전달하거나 다른 캔버스 엘리먼트에서 메소드를 호출해야 합니다.

## 구문

```js
var ctx = canvas.getContext(contextType);
var ctx = canvas.getContext(contextType, contextAttributes);
```

### 파라미터

- `contextType`
  - : 캔버스에 연관된 드로잉 컨텍스트를 정의하는 컨텍스트 식별자를 갖는 {{domxref("DOMString")}}입니다. 가능한 값은 다음과 같습니다.\* `"2d"`, 2차원 렌더링 컨텍스트를 나타내는 {{domxref("CanvasRenderingContext2D")}} 객체를 생성하게 합니다.
    - `"webgl"` (또는 `"experimental-webgl"`), 3차원 렌더링 컨텍스트를 나타내는 {{domxref("WebGLRenderingContext")}} 객체를 생성합니다. 이 컨텍스트는 [WebGL](/ko/docs/Web/WebGL) 버전 1 (OpenGL ES 2.0)을 구현하는 브라우저에서만 사용가능합니다.
    - `"webgl2"`, 3차원 렌더링 컨텍스트를 나타내는 {{domxref("WebGL2RenderingContext")}} 객체를 생성합니다. 이 컨텍스트는 [WebGL](/ko/docs/Web/WebGL) 버전 2 (OpenGL ES 3.0)를 구현하는 브라우저에서만 사용가능합니다. {{experimental_inline}}
    - `"bitmaprenderer"`, 캔버스의 컨텐츠를 주어진 {{domxref("ImageBitmap")}}으로 대체하기위한 기능만을 제공하는 {{domxref("ImageBitmapRenderingContext")}}를 생성합니다.> **참고:** 식별자 `"experimental-webgl"`은 WebGL의 새로운 구현에서 사용됩니다. 이러한 구현은 테스트 스위트 적합성을 아직 만족하지 못하며, 플랫폼 상의 그래픽 드라이버도 아직 불안정합니다. [Khronos Group](https://www.khronos.org/)은 특정 [적합성 규칙](https://www.khronos.org/registry/webgl/sdk/tests/CONFORMANCE_RULES.txt)에 따라 WebGL 구현을 인증합니다.
- `contextAttributes`

  - : 렌더링 컨텍스트를 생성할 때 몇 가지 컨텍스트 속성을 사용할 수 있습니다. 예를 들면:`js const gl = canvas.getContext('webgl', { antialias: false, depth: false });` 2d 컨텍스트 속성:

    - **`alpha`**: 캔버스가 알파 채널을 포함하는지를 나타내는 불리언입니다. `false`로 설정할 경우, 브라우저는 이제 배경이 항상 투명하다는 것을 알기때문에 투명한 컨텐츠나 이미지를 그리는 속도를 높일수 있습니다.

    - {{non-standard_inline}} (Gecko 전용) **`willReadFrequently`**: 많은 다시 읽기 작업이 계획되어있는지 여부를 나타내는 불리언입니다. 이는 소프트웨어(하드웨어 가속 대신) 2D 캔버스의 사용을 강제하며 {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} 호출이 빈번할때 메모리를 절약할 수 있습니다. 이 옵션은 `gfx.canvas.willReadFrequently.enable` 플래그가 `true`(기본 값이며, B2G/Firefox OS에만 해당) 설정되었을 경우에만 사용가능합니다.
    - {{non-standard_inline}} (Blink only) **`storage`**: 어떤 스토리지가 사용되었는지를 나타내는 문자열입니다(기본값은 "persistent").WebGL 컨텍스트 속성:\* **`alpha`**: 캔버스가 알파 버퍼를 포함하는지 여부를 나타내는 불리언입니다.
    - **`antialias`**: 안티 앨리어싱을 수행할지 여부를 나타내는 불리언입니다.
    - **`depth`**: 드로잉 버퍼가 최소 16 비트의 깊이 버퍼를 갖는지 여부를 나타내는 불리언입니다.
    - **`failIfMajorPerformanceCaveat`**: 시스템 성능이 낮을 경우에 컨텍스트를 생성할지 여부를 나타내는 불리언입니다.
    - **`powerPreference`**: WebGL 컨텍스트에 대해 적합한 GPU 구성이 무엇인지를 나타내는 유저 에이전트에 대한 힌트입니다. 가능한 값은 다음과 같습니다.

      - `"default"`: 유저 에이전트가 가장 적합한 GPU 구성을 결정하도록 합니다. 기본 값입니다.
      - `"high-performance"`: 전력 소비보다 렌더링 성능을 우선시합니다.
      - `"low-power"`: 렌더링 성능보다 전력 절약을 우선시합니다.

    - **`premultipliedAlpha`**: 페이지 컴포지터가 미리 곱해진 알파를 갖는 컬러를 포함하는 드로잉 버퍼를 가정할 것인지 여부를 나타내는 불리언입니다.
    - **`preserveDrawingBuffer`**: 값이 true일 경우 버퍼는 제거되지 않으며 값이 제거되거나 덮어쓰여지기 전까지 유지됩니다.
    - **`stencil`**: 드로잉 버퍼가 최소 8 비트의 스텐실 버퍼를 갖는지 여부를 나타내는 불리언입니다.

### 반환 값

{{domxref("RenderingContext")}}는 다음 중 하나입니다.

- `"2d"` 용 {{domxref("CanvasRenderingContext2D")}},
- `"webgl"` 및 `"experimental-webgl"` 용 {{domxref("WebGLRenderingContext")}},
- `"webgl2"` 용 {{domxref("WebGL2RenderingContext")}}
- `"bitmaprenderer"` 용 {{domxref("ImageBitmapRenderingContext")}}.

`contextType`이 가능한 드로잉 컨텍스트와 일치하지 않으면, `null`이 반환됩니다.

## 예시

다음 {{HTMLElement("canvas")}} 엘리먼트를 고려해볼 때:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

다음 코드를 사용해 캔버스의 `2d` 컨텍스트를 얻을 수 있습니다.

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
console.log(ctx); // CanvasRenderingContext2D { ... }
```

이제 캔버스에 대한 [2D 렌더링 컨텍스트](/ko/docs/Web/API/CanvasRenderingContext2D)를 갖고 있으며 이 안에 그릴 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- 이를 정의하는 인터페이스 {{domxref("HTMLCanvasElement")}}.
- {{domxref("OffscreenCanvas.getContext()")}}
- 사용 가능한 렌더링 컨텍스트: {{domxref("CanvasRenderingContext2D")}}, {{domxref("WebGLRenderingContext")}}, {{domxref("WebGL2RenderingContext")}}, {{domxref("ImageBitmapRenderingContext")}}.
