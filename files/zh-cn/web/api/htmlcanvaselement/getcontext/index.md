---
title: HTMLCanvasElement.getContext()
slug: Web/API/HTMLCanvasElement/getContext
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement.getContext()`** 方法返回{{jsxref("canvas")}} 的上下文，如果上下文没有定义则返回 {{jsxref("null")}} .

在同一个 canvas 上以相同的 `contextType` 多次调用此方法只会返回同一个上下文。

## 语法

```
var ctx = canvas.getContext(contextType);
var ctx = canvas.getContext(contextType, contextAttributes);
```

### 参数

- 上下文类型（contextType）

  - : 是一个指示使用何种上下文的 {{domxref("DOMString")}} 。可能的值是：

    - `"2d`", 建立一个 {{domxref("CanvasRenderingContext2D")}} 二维渲染上下文。
    - `"webgl"` (或`"experimental-webgl"`) 这将创建一个 {{domxref("WebGLRenderingContext")}} 三维渲染上下文对象。只在实现[WebGL](/zh-CN/docs/Web/WebGL) 版本 1(OpenGL ES 2.0) 的浏览器上可用。
    - "`webgl2`" (或 "`experimental-webgl2`") 这将创建一个 {{domxref("WebGL2RenderingContext")}} 三维渲染上下文对象。只在实现 [WebGL](/zh-CN/docs/Web/WebGL) 版本 2 (OpenGL ES 3.0) 的浏览器上可用。{{experimental_inline}}
    - `"bitmaprenderer"` 这将创建一个只提供将 canvas 内容替换为指定{{domxref("ImageBitmap")}}功能的{{domxref("ImageBitmapRenderingContext")}} 。

    > **备注：** 标识符 "`experimental-webgl`" 或 "`experimental-webgl2`" 用于新 [WebGL](/zh-CN/docs/Web/WebGL)的实现。这些实现还没有达到测试套件一致性或图形驱动程序平台局势尚不稳定。[Khronos Group](https://www.khronos.org/) 集团认证[WebGL](/zh-CN/docs/Web/WebGL) 实现在某些[一致性规则](https://www.khronos.org/registry/webgl/sdk/tests/CONFORMANCE_RULES.txt)。

- `上下文属性 (contextAttributes)`

  - : 你可以在创建渲染上下文的时候设置多个属性，例如：

    ```js
    canvas.getContext("webgl", { antialias: false, depth: false });
    ```

    2d 上下文属性：

    - **`alpha`**: {{jsxref("boolean")}}值表明{{jsxref("canvas")}}包含一个{{jsxref("alpha")}}通道。如果设置为{{jsxref("false")}}, 浏览器将认为{{jsxref("canvas")}}背景总是不透明的，这样可以加速绘制透明的内容和图片。
    - {{non-standard_inline}} (Gecko only) **`willReadFrequently`**: {{jsxref("boolean")}}值表明是否有重复读取计划。经常使用{{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}}，这将迫使软件使用 2D {{jsxref("canvas")}} 并 节省内存（而不是硬件加速）。这个方案适用于存在属性 `gfx.canvas.willReadFrequently`的环境。并设置为{{jsxref("true")}} (缺省情况下，只有 B2G / Firefox OS).
    - {{non-standard_inline}} (Blink only) **`storage`**: {{jsxref("string")}} 这样表示使用哪种方式存储 (默认为：持久（"persistent"）).

    WebGL 上下文属性：

    - **`alpha`**: {{jsxref("boolean")}}值表明{{jsxref("canvas")}}包含一个{{jsxref("alpha")}}缓冲区。
    - **`antialias`**: {{jsxref("boolean")}}值表明是否开启抗锯齿。
    - **`depth`**: {{jsxref("boolean")}}值表明绘制缓冲区包含一个深度至少为 16 位的缓冲区。
    - **`failIfMajorPerformanceCaveat`**: 表明在一个系统性能低的环境是否创建该上下文的{{jsxref("boolean")}}值。
    - **`powerPreference`**: 指示浏览器在运行 WebGL 上下文时使用相应的 GPU 电源配置。可能值如下：

      - `"default"`:自动选择，默认值。
      - `"high-performance"`: 高性能模式。
      - `"low-power"`: 节能模式。

    - **`premultipliedAlpha`**: 表明排版引擎将假设绘制缓冲区包含预混合 alpha 通道的{{jsxref("boolean")}}值。
    - **`preserveDrawingBuffer`**: 如果这个值为{{jsxref("true")}}缓冲区将不会被清除，会保存下来，直到被清除或被使用者覆盖。
    - **`stencil`**: 表明绘制缓冲区包含一个深度至少为 8 位的模版缓冲区{{jsxref("boolean")}}值。

### 返回值

{{domxref("RenderingContext")}} 返回值是下列之一：

- {{domxref("CanvasRenderingContext2D")}} 为 `"2d"`,
- {{domxref("WebGLRenderingContext")}} 为`"webgl"` 和`"experimental-webgl"`,
- {{domxref("WebGL2RenderingContext")}} 为`"webgl2"` 和`"experimental-webgl2"`, 或者
- {{domxref("ImageBitmapRenderingContext")}} 为`"bitmaprenderer"`.

如果 `contextType` 不是上述之一，返回{{jsxref("null")}}.

## 例子

定义 {{HTMLElement("canvas")}} 元素：

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

通过如下代码可以获取 {{jsxref("canvas")}}`2d` 上下文：

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
console.log(ctx); // CanvasRenderingContext2D { ... }
```

现在你已经获取到了 2D 画布的渲染上下文 ({{domxref("CanvasRenderingContext2D")}})，可以使用它画你想画的了。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLCanvasElement")}}.
- {{domxref("OffscreenCanvas.getContext()")}}
- 可用的上下文：{{domxref("CanvasRenderingContext2D")}}, {{domxref("WebGLRenderingContext")}} 和 {{domxref("WebGL2RenderingContext")}} and {{domxref("ImageBitmapRenderingContext")}}.
