---
title: <image>
slug: Web/SVG/Reference/Element/image
l10n:
  sourceCommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

**`<image>`** SVG 元素用于在 SVG 文档中包含图像。它可以显示{{glossary("raster image", "位图")}}或其他 SVG 文件。

SVG 软件必须支持的图像格式只有 {{glossary("JPEG")}}、{{glossary("PNG")}} 和其他 SVG 文件。并未定义有关动画 {{glossary("GIF")}} 的行为。

使用 `<image>` 显示的 SVG 文件[被视为图像](/zh-CN/docs/Web/SVG/Guides/SVG_as_an_image)：外部资源不会被加载、{{cssxref(":visited")}} 样式[不会被应用](/zh-CN/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited)，且它们不能有交互。要包含动态 SVG 元素，可以尝试用 {{SVGElement("use")}} 引入外部 URL。要包含 SVG 文件并在其中运行脚本，请尝试在 {{SVGElement("foreignObject")}} 中嵌入 {{HTMLElement("object")}}。

> [!NOTE]
> HTML 规范定义 `<image>` 和 {{HTMLElement("img")}} 在用作 HTML 解析时是等效的。这种特定元素及其行为仅适用于 SVG 文档或内联 SVG。

## 使用上下文

{{svginfo}}

## 属性

- {{SVGAttr("x")}}：图像水平方向上到原点的距离。
- {{SVGAttr("y")}}：图像竖直方向上到原点的距离。
- {{SVGAttr("width")}}：图像宽度。和 HTML `<img>` 不同，该属性是必需的。
- {{SVGAttr("height")}}：图像高度。和 HTML `<img>` 不同，该属性是必需的。
- {{SVGAttr("href")}} 和 {{SVGAttr("xlink:href")}}{{deprecated_inline}}：指向图像文件的 URL。
- {{SVGAttr("preserveAspectRatio")}}：控制图像的缩放比例。
- {{SVGAttr("crossorigin")}}：定义 CORS 请求的凭据标志。
- {{SVGAttr("decoding")}}：向浏览器提供关于是否应该同步或异步执行图像解码的提示。

## DOM 接口

`<image>` 实现了 {{domxref("SVGImageElement")}} 接口。

## 示例

SVG 中 PNG 图像的基本渲染：

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <image href="mdn_logo_only_color.png" height="200" width="200" />
</svg>
```

### 结果

{{EmbedLiveSample("示例", 250, 260)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
