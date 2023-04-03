---
title: OffscreenCanvas.getContext()
slug: Web/API/OffscreenCanvas/getContext
---
{{APIRef("Canvas API")}} {{SeeCompatTable}}

**`OffscreenCanvas.getContext()`** 메소드는 offscreen 캔버스를 위한 드로잉 컨텍스트 반환합니다. 컨텍스트 식별자가 지원되는 상황이 아닐 경우 {{jsxref("null")}}를 반환합니다.

> **참고:** 이 API는 현재 [WebGL1](/ko/docs/Web/API/WebGLRenderingContext)과 [WebGL2](/ko/docs/Web/API/WebGL2RenderingContext) 컨텍스트에서만 실행됩니다. [Canvas 2D API](/ko/docs/Web/API/Canvas_API) 관련 [Firefox bug 801176](https://bugzil.la/801176)를 참조하세요.

## 구문

```js
offscreen.getContext(contextType, contextAttributes);
```

### 매개 변수

- `contextType`
  - : 캔버스의 드로잉 컨텍스트를 정의하는 컨텍스트 식별자가 포함된 {{domxref("DOMString")}}입니다:\* **`"2d"`** 는 2차원 렌더링 컨텍스트를 표현하는 {{domxref("CanvasRenderingContext2D")}} 객체를 생성합니다.
    - **`"webgl"`** 는 3차원 렌더링 컨텍스트를 표현하는 {{domxref("WebGLRenderingContext")}} 객체를 생성합니다. 이 컨텍스트는 [WebGL](/ko/docs/Web/WebGL) 버전 1(OpenGL ES 2.0)을 지원하는 브라우저에서만 사용 가능합니다.
    - **`"webgl2"`** 는 3차원 렌더링 컨텍스트를 표현하는 {{domxref("WebGL2RenderingContext")}} 객체를 생성합니다. 이 컨텍스트는 [WebGL](/ko/docs/Web/WebGL) 버전 2 (OpenGL ES 3.0)를 지원하는 브라우저에서만 사용 가능합니다. {{experimental_inline}}
    - **`"bitmaprenderer"`** 는 주어진 {{domxref("ImageBitmap")}}을 캔버스의 내용 대신 전환하는 함수를 제공하는 {{domxref("ImageBitmapRenderingContext")}}를 생성합니다

    > **참고:** `"experimental-webgl"`**과 **`"experimental-webgl2"`** 식별자는 WebGL에서도 사용됩니다.
    >
    > 그러나 아직 테스트 적합성을 통과하지 못했거나 플랫폼별 그래픽 드라이버 지원이 안정적이진 않습니다.
    > [Khronos Group](https://www.khronos.org/)은 특정한 [정합성 규칙](https://www.khronos.org/registry/webgl/sdk/tests/CONFORMANCE_RULES.txt)에 WebGL 구현을 인증하고 있습니다.
- `contextAttributes`

  - : You can use several context attributes when creating your rendering context, for
    example:

    ```js
    offscreen.getContext("webgl",
                     { antialias: false,
                       depth: false });
    ```

    2d context attributes:

    - **`alpha`**: Boolean that indicates if the canvas
      contains an alpha channel. If set to `false`, the browser now knows
      that the backdrop is always opaque, which can speed up drawing of transparent
      content and images then.
    - {{non-standard_inline}} (Gecko only)
      **`willReadFrequently`**: Boolean that indicates whether
      or not a lot of read-back operations are planned. This will force the use of a
      software (instead of hardware accelerated) 2D canvas and can save memory when
      calling {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}}
      frequently. This option is only available, if the flag
      `gfx.canvas.willReadFrequently.enable` is set to `true`
      (which, by default, is only the case for B2G/Firefox OS).
    - {{non-standard_inline}} (Blink only) **`storage`**:
      String that indicates which storage is used ("persistent" by default).

    WebGL context attributes:

    - **`alpha`**: Boolean that indicates if the canvas
      contains an alpha buffer.
    - **`depth`**: Boolean that indicates that the drawing
      buffer is requested to have a depth buffer of at least 16 bits.
    - **`stencil`**: Boolean that indicates that the drawing
      buffer is requested to have a stencil buffer of at least 8 bits.
    - **`antialias`**: Boolean that indicates whether or not
      to perform anti-aliasing if possible.
    - **`premultipliedAlpha`**: Boolean that indicates that
      the page compositor will assume the drawing buffer contains colors with
      pre-multiplied alpha.
    - **`preserveDrawingBuffer`**: If the value is true the
      buffers will not be cleared and will preserve their values until cleared or
      overwritten by the author.
    - **`failIfMajorPerformanceCaveat`**: Boolean that
      indicates if a context will be created if the system performance is low.

### Return value

A {{domxref("RenderingContext")}} which is either a

- {{domxref("CanvasRenderingContext2D")}} for `"2d"`,
- {{domxref("WebGLRenderingContext")}} for `"webgl"` and `"experimental-webgl"`,
- {{domxref("WebGL2RenderingContext")}} for `"webgl2"` and `"experimental-webgl2"` {{experimental_inline}}, or
- {{domxref("ImageBitmapRenderingContext")}} for `"bitmaprenderer"`.

If the `contextType` doesn't match a possible drawing context, `null` is returned.

## Examples

```js
var offscreen = new OffscreenCanvas(256, 256);
var gl = offscreen.getContext("webgl");

gl; // WebGLRenderingContext
gl.canvas; // OffscreenCanvas
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- The interface defining this method: {{domxref("OffscreenCanvas")}}
- {{domxref("HTMLCanvasElement.getContext()")}}
- Available rendering contexts: {{domxref("CanvasRenderingContext2D")}}, {{domxref("WebGLRenderingContext")}}, {{domxref("WebGL2RenderingContext")}}, and {{domxref("ImageBitmapRenderingContext")}}
