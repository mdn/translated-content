---
title: CanvasRenderingContext2D：fontStretch 属性
slug: Web/API/CanvasRenderingContext2D/fontStretch
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{APIRef}}

[Canvas API](/zh-CN/docs/Web/API/Canvas_API) 的 **`CanvasRenderingContext2D.fontStretch`** 属性指定绘制文本时字体如何被扩展或压缩。

该属性对应于 CSS 中的 [`font-stretch`](/zh-CN/docs/Web/CSS/font-stretch) 属性，当使用关键字时（百分比值不支持）。

## 值

字体的伸展值作为字符串。支持的值包括：`ultra-condensed`、`extra-condensed`、`condensed`、`semi-condensed`、`normal`（默认）、`semi-expanded`、`expanded`、`extra-expanded`、`ultra-expanded`。

该属性可以用于获取或设置字体的伸展值。

## 示例

以下示例演示了如何使用 `fontStretch` 属性在 Canvas 中显示文本“Hello World”，并展示了每种支持的 `fontStretch` 值的效果。每个情况下，都会显示相应的伸展值。

### HTML

```html
<canvas id="canvas" width="700" height="310"></canvas>
```

### JavaScript

首先获取 HTML 文件中声明的 canvas，并获取其 `CanvasRenderingContext2D` 对象，以便后续用于绘制文本。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
```

接下来，在示例中加载一个变宽度的变量字体。这是必要的，因为 `fontStretch` 只能拉伸具有拉伸信息的字体，否则文本将使用最接近的可用字体拉伸值（通常是正常宽度）。

在这个示例中，我们使用 [`FontFace`](/zh-CN/docs/Web/API/FontFace) 定义了一个字体，这个字体是谷歌的 [Inconsolata](https://fonts.google.com/specimen/Inconsolata/tester) 字体，支持从 50% 到 200% 的字体宽度（允许我们展示 `ultra-condensed` 到 `ultra-expanded` 的 `fontStretch` 值）。然后将这个字体添加到文档的 [`FontFaceSet`](/zh-CN/docs/Web/API/FontFaceSet)（[`document.fonts`](/zh-CN/docs/Web/API/Document/fonts)）中，以便用于绘制。

```js
const fontFile = new FontFace(
  "Inconsolata",
  'url(https://fonts.gstatic.com/s/inconsolata/v31/QlddNThLqRwH-OJ1UHjlKENVzlm-WkL3GZQmAwPyya15.woff2) format("woff2")',
  { stretch: "50% 200%" },
);

document.fonts.add(fontFile);
```

然后调用 [`FontFaceSet.load()`](/zh-CN/docs/Web/API/FontFaceSet/load) 来获取并加载谷歌字体。注意，这个调用设置了所需的字体大小，并返回一个在字体加载完成后兑现的 promise。

接着，将下载的字体应用到上下文，并使用上下文根据每个关键字的伸展级别绘制文本。请注意，再次指定了所需字体的大小（这不必与加载的字体大小匹配）。

```js
document.fonts.load("30px Inconsolata").then(
  () => {
    ctx.font = "30px 'Inconsolata'";
    // 默认值（normal）
    ctx.fillText(`Hello world（默认：${ctx.fontStretch}）`, 5, 20);

    ctx.fontStretch = "ultra-condensed";
    ctx.fillText(`Hello world（${ctx.fontStretch}）`, 5, 50);

    ctx.fontStretch = "extra-condensed";
    ctx.fillText(`Hello world（${ctx.fontStretch}）`, 5, 80);

    ctx.fontStretch = "condensed";
    ctx.fillText(`Hello world（${ctx.fontStretch}）`, 5, 110);

    ctx.fontStretch = "semi-condensed";
    ctx.fillText(`Hello world（${ctx.fontStretch}）`, 5, 140);

    ctx.fontStretch = "semi-expanded";
    ctx.fillText(`Hello world（${ctx.fontStretch}）`, 5, 170);

    ctx.fontStretch = "expanded";
    ctx.fillText(`Hello world（${ctx.fontStretch}）`, 5, 200);

    ctx.fontStretch = "extra-expanded";
    ctx.fillText(`Hello world（${ctx.fontStretch}）`, 5, 230);

    ctx.fontStretch = "ultra-expanded";
    ctx.fillText(`Hello world（${ctx.fontStretch}）`, 5, 260);
  },
  (err) => {
    console.error(err);
  },
);
```

### 结果

{{ EmbedLiveSample('示例', 700, 300) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
