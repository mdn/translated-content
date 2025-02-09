---
title: HTMLImageElement：srcset 属性
slug: Web/API/HTMLImageElement/srcset
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} 的 **`srcset`** 属性的值是一个字符串，用于标识一个或多个以逗号（`,`）分割的**图像候选字符串**，每个候选地址将在特定条件下得以使用。

每个图像候选字符串包含图像 URL 和一个可选的宽度描述符或像素密度描述符，用于在特定条件下替代由 {{domxref("HTMLImageElement.src", "src")}} 属性指定的图像。

`srcset` 属性和 {{domxref("HTMLImageElement.sizes", "sizes")}} 属性是响应式网站设计中至关重要的组件，可以搭配使用来创建根据展示场景使用图像的页面。

> [!NOTE]
> 如果 [`srcset`](/zh-CN/docs/Web/HTML/Element/img#srcset) 属性使用了宽度描述符，则 `sizes` 属性必须也同时存在，否则 `srcset` 将会被忽略。

## 值

一个字符串，包含一个或多个图像候选字符串的逗号分隔列表，用于确定在由 `HTMLImageElement` 表示的 {{HTMLElement("img")}} 元素中显示哪个图像资源。

每个候选图像字符串必须以引用非交互式图形资源的有效 URL 开始。其后是空白字符，然后是一个条件描述符，说明应在何种情况下使用指定的图像。除了分隔 URL 和相应条件描述符的空白字符外，其他空格字符都将被忽略；这包括前导空格和尾部空格，以及每个逗号前后的空格。

条件描述符可能是以下两种形式之一：

- 要指明候选图像字符串指定的图像资源应在以特定宽度（像素）渲染图像时使用，请提供**宽度描述符**，由给出该宽度（像素）的数字和小写字母“w”组成。例如，要在渲染器需要 450 像素宽的图像时使用图像资源，请使用宽度描述符字符串 `450w`。指定的宽度必须是一个非零的正整数，并且*必须*与引用图像的固有宽度相匹配。当“srcset”包含“w”描述符时，浏览器会使用这些描述符和 {{domxref("HTMLImageElement.sizes", "sizes")}} 属性来选择资源。
- 或者，也可以使用**像素密度描述符**，指定在何种情况下应将相应的图像资源用作显示屏的像素密度。写法是将像素密度写成一个非零的正浮点数值，后面跟一个小写字母“x”。例如，要说明像素密度是标准密度的两倍时应使用相应的图像，可以给出像素密度描述符 `2x` 或 `2.0x`。

如果没有提供条件描述符（或者说，图像候选只提供了一个 URL），那么候选字符串具有默认描述符“1x”。

```plain
"images/team-photo.jpg, images/team-photo-retina.jpg 2x"
```

此字符串提供了以标准像素密度（未定义，默认为 `1x`）和双倍像素密度（`2x`）使用的图像版本。

当图像元素的 `srcset` 包含“x”描述符时，浏览器还会考虑 {{domxref("HTMLImageElement.src", "src")}}属性中的 URL（如果存在）作为候选，并将其默认描述符指定为 `1x`。

```plain
"header640.png 640w, header960.png 960w, header1024.png 1024w"
```

此字符串指定了在{{Glossary("user agent", "用户代理的")}}渲染器需要渲染宽度为 640px、960px 或 1024px 的图像时使用的图像版本。

请注意，如果“srcset”中的任何资源使用了“w”描述符，则该“srcset”中的所有资源也必须使用“w”描述符，图像元素的 {{domxref("HTMLImageElement.src", "src")}} 不被视为候选资源。

## 示例

### HTML

下面的 HTML 表明默认图像资源（包含在 {{domxref("HTMLImageElement.src", "src")}} 属性中）应该用于 1x 显示器，而 400 像素版本（包含在 `srcset` 属性中，并分配了 `2x` 描述符）应该用于 2x 显示器。

```html
<div class="box">
  <img
    src="/zh-CN/docs/Web/HTML/Element/img/clock-demo-200px.png"
    alt="钟表"
    srcset="/zh-CN/docs/Web/HTML/Element/img/clock-demo-400px.png 2x" />
</div>
```

### CSS

CSS 仅指定图像及其父盒子的宽为 200 像素，并有一个简单的边框。还提供了 {{cssxref("word-break")}} 属性，使用 `break-all` 值告诉浏览器将字符串包在可用宽度内。

```css
.box {
  width: 200px;
  border: 2px solid rgb(150 150 150);
  padding: 0.5em;
  word-break: break-all;
}

.box img {
  width: 200px;
}
```

### JavaScript

以下代码在 {{domxref("Window", "window")}} 的 {{domxref("Window.load_event", "load")}} 事件的处理程序中运行。它使用图像的 {{domxref("HTMLImageElement.currentSrc", "currentSrc")}} 属性来获取并显示浏览器从 `srcset` 中选择的 URL。

```js
window.addEventListener("load", () => {
  const box = document.querySelector(".box");
  const image = box.querySelector("img");

  const newElem = document.createElement("p");
  newElem.textContent = "图像：";
  newElem.appendChild(document.createElement("code")).textContent =
    image.currentSrc;
  box.appendChild(newElem);
});
```

### 结果

在下面显示的输出中，所选 URL 将对应于你的显示结果是选择 1x 还是 2x 版本的图像。如果你同时拥有标准显示屏和高密度显示屏，请尝试在两者之间移动该窗口并重新加载页面，看看结果会有什么变化。

{{EmbedLiveSample("示例", 640, 320)}}

有关其他示例，请参阅我们的[响应式图片](/zh-CN/docs/Web/HTML/Responsive_images)指南。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 中的图像](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [响应式图像](/zh-CN/docs/Web/HTML/Responsive_images)
- [图像文件类型和格式指南](/zh-CN/docs/Web/Media/Guides/Formats/Image_types)
