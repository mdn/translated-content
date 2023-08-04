---
title: HTMLImageElement.srcset
slug: Web/API/HTMLImageElement/srcset
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} 的 **`srcset`** 的值是一个字符串，用来定义一个或多个图像候选地址，以 `,` 分割，每个候选地址将在特定条件下得以使用。候选地址包含图片 URL 和一个可选的宽度描述符和像素密度描述符，该候选地址用来在特定条件下替代原始地址成为 {{domxref("HTMLImageElement.src", "src")}} 的属性。

`srcset`属性和{{domxref("HTMLImageElement.sizes", "sizes")}} 属性是响应式网页设计中至关重要的组件，可以搭配使用来创建根据展示场景使用图像的页面。

## 语法

```plain
htmlImageElement.srcset = imageCandidateStrings;
let srcset = htmlImageElement.srcset;
```

### 值

一个包含单个或多个以逗号分隔的图像候选列表{{domxref("USVString")}} ，表示在{{HTMLElement("img")}}里可以展示哪些图片。

每个图像候选字符串必须以有效 URL 开头，指向一个非交互的图形资源。紧接着是一个逗号 (`,`) 字符。最后是一个条件描述符，该描述符定义了在什么环境下使用该图像。除了分隔 URL 和相应条件描述符的空格之外的空格字符都将被忽略，包括头部和末尾的空格，以及每个逗号前后的空格。

如果没有提供条件描述符（也就是说，图像候选字符只含一个 URL），并没有命中的其他候选，则使用该候选作为回退方案。否则，条件描述符可以采用以下两种形式之一：

- 要指定在某个宽度下使用特定图像候选代表的图像资源，请提供 **宽度描述符**，包含表示该宽度的数字（以像素为单位）+ 小写字母“w”。例如，渲染一个 450 像素宽的图像对应的描述符字符串： `450w`。指定的宽度必须是正数、非零整数，并且*必须*与引用图像的固有宽度相匹配。
- 或者，您可以使用**像素密度描述符**，它指定了在什么样的显示器像素密度下应用相应的图像资源。它是通过将像素密度声明为正的非零浮点值，后跟小写字母“x”来编写的。例如，要指定在像素密度是标准密度的两倍时使用相应的图像，您可以提供像素密度描述符 `2x` 或 `2.0x`。< /li>

您可以混合使用这两种类型的描述符。但是，您不能为同一个描述符指定多个图像候选字符。以下都是有效的图像候选字符串：

```plain
"images/team-photo.jpg 1x, images/team-photo-retina.jpg 2x, images/team-photo-full 2048w"
```

此字符串指定了在标准像素密度 (`1x`) 以及两倍像素密度 (`2x`) 下使用的图像版本。还可以使用宽度为 2048 像素 (`2048w`) 的图像版本。

```plain
"header640.png 640w, header960.png 960w, header1024.png 1024w, header.png"
```

此字符串指定了在 {{Glossary("user agent", "user agent's")}} 需要渲染宽度为 640px、960px 或 1024px 的图像时使用的图像版本。以及一个额外的备用图像候选，没有任何条件，可用于任意宽度。

```plain
"icon32px.png 32w, icon64px.png 64w, icon-retina.png 2x icon-ultra.png 3x icon.svg"
```

这里，为宽度为 32 像素和 64 像素以及像素密度为 2 倍和 3 倍的图标提供了选项。备用图像以 SVG 文件的形式提供，它可在所有情况下使用。请注意，图像候选可使用不同的图像类型。

有关可用于 {{HTMLElement("img")}} 元素的图像格式的详细信息，请参阅 [图片文件类型和格式指南](/zh-CN/docs/Web/Media/Formats/Image_types) 。

## 示例

### HTML

下面的 HTML 表明图像的默认宽度是 200 像素。 `srcset` 属性还指定了 200 像素版本应用于 1x 显示器，而 400 像素版本应用于 2x 显示器。

```html
<div class="box">
  <img
    src="https://yari-demos.prod.mdn.mozit.cloud/zh-CN/docs/web/html/element/img/clock-demo-200px.png"
    alt="Clock"
    srcset="
      https://yari-demos.prod.mdn.mozit.cloud/zh-CN/docs/web/html/element/img/clock-demo-200px.png 1x,
      https://yari-demos.prod.mdn.mozit.cloud/zh-CN/docs/web/html/element/img/clock-demo-400px.png 2x
    " />
</div>
```

### CSS

CSS 仅指定图像及其父盒子的宽为 200 像素，并有一个简单的边框。还提供了 {{cssxref("word-break")}} 属性，使用 `break-all` 值告诉浏览器将字符串包在可用宽度内。

```css
.box {
  width: 200px;
  border: 2px solid rgba(150, 150, 150, 255);
  padding: 0.5em;
  word-break: break-all;
}

.box img {
  width: 200px;
}
```

### JavaScript

The following code is run within a handler for the {{domxref("Window", "window")}}'s {{domxref("Window.load_event", "load")}} event. It uses the image's {{domxref("HTMLImageElement.currentSrc", "currentSrc")}} property to fetch and display the URL selected by the browser from the `srcset`.

以下代码在 {{domxref("Window", "window")}} 的 {{domxref("Window.load_event", "load")}} 事件的处理程序中运行。它使用图像的 {{domxref("HTMLImageElement.currentSrc", "currentSrc")}} 属性来获取并显示浏览器从 `srcset` 中选择的 URL。

```js
let box = document.querySelector(".box");
let image = box.querySelector("img");

let newElem = document.createElement("p");
newElem.innerHTML = `Image: <code>${image.currentSrc}</code>`;
box.appendChild(newElem);
```

### 结果

输出展示在下面，所选 URL 将取决于您显示的图像版本，1x 版本还是 2x 版本？。如果您碰巧有标准和高密度显示器，请尝试在它们之间移动此窗口并重新加载页面以查看结果变化。

{{EmbedLiveSample("示例", 640, 320)}}

有关其他示例，请参阅我们的[响应式图片](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)指南。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Images in HTML](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Responsive images](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Image file type and format guide](/zh-CN/docs/Web/Media/Formats/Image_types)
