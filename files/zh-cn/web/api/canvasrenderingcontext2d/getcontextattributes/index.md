---
title: CanvasRenderingContext2D：getContextAttributes() 方法
slug: Web/API/CanvasRenderingContext2D/getContextAttributes
l10n:
  sourceCommit: ba09b113ee91eee477894ef2ac028bbc63f480b5
---

{{APIRef("WebGL")}}

**`CanvasRenderingContext2D.getContextAttributes()`** 方法返回一个包含上下文使用的属性的对象。

请注意，使用 [`HTMLCanvasElement.getContext()`](/zh-CN/docs/Web/API/HTMLCanvasElement/getContext) 创建上下文时可能会请求上下文的属性，但实际支持和使用的属性可能会有所不同。

## 语法

```js-nolint
getContextAttributes()
```

### 参数

无。

### 返回值

一个 `CanvasRenderingContext2DSettings` 对象，包含实际的上下文参数。它包括以下成员：

- `alpha` {{optional_inline}}
  - : 一个布尔值，指示画布是否包含 alpha 通道。如果为 `false`，背景总是不透明的，这可以加快对透明内容和图像的绘制速度。
- `colorSpace` {{optional_inline}}
  - : 指定渲染上下文的色彩空间。可能的值有：
    - `srgb`：表示 [sRGB 色彩空间](https://zh.wikipedia.org/wiki/SRGB)
    - `display-p3`：表示 [Display-P3 色彩空间](https://zh.wikipedia.org/wiki/DCI-P3)
- `desynchronized` {{optional_inline}}
  - : 一个布尔值，指示用户代理通过将画布绘制周期与事件循环解耦，从而减少了延迟。
- `willReadFrequently` {{optional_inline}}
  - : 一个布尔值，指示该画布是否使用软件加速（而不是硬件加速）来支持通过 {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} 的频繁读取操作。

## 示例

此示例展示了如何在创建画布上下文时指定上下文属性，并调用 `getContextAttributes()` 方法来读取浏览器实际使用的参数。

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += text;
}
```

首先我们使用 [`HTMLCanvasElement.getContext()`](/zh-CN/docs/Web/API/HTMLCanvasElement/getContext) 创建一个上下文，仅指定一个上下文属性。

```js
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d", { alpha: false });
```

如果浏览器支持 `getContextAttributes()` 方法，则使用它来读取浏览器实际使用的属性（包括我们显式指定的属性）：

```js
if (ctx.getContextAttributes) {
  const attributes = ctx.getContextAttributes();
  log(JSON.stringify(attributes));
} else {
  log("不支持 CanvasRenderingContext2D.getContextAttributes()");
}
```

根据浏览器支持的属性，下面的日志应显示类似于 `{alpha: false, colorSpace: 'srgb', desynchronized: false, willReadFrequently: false}` 的字符串。

{{EmbedLiveSample('示例','100%','50')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`HTMLCanvasElement.getContext()`](/zh-CN/docs/Web/API/HTMLCanvasElement/getContext)
- [`WebGLRenderingContext.getContextAttributes()`](/zh-CN/docs/Web/API/WebGLRenderingContext/getContextAttributes)
