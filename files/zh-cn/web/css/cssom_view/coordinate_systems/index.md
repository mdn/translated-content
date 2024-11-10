---
title: 坐标系
slug: Web/CSS/CSSOM_view/Coordinate_systems
l10n:
  sourceCommit: 91cc9e7f8ae21665b40ad4c3fa5152cebad119ce
---

{{CSSRef}}

在图形上下文中指定像素的位置时（就像[代数](https://zh.wikipedia.org/wiki/代数)中指定坐标系一样），像素的位置是相对于上下文中的一个固定点定义的，这个固定点称为[原点](https://zh.wikipedia.org/wiki/原點)。位置指定为沿上下文每个维度从原点偏移的像素数。

本指南介绍了 CSS 对象模型使用的标准坐标系。这些坐标系通常只是在原点位置上有所不同。

## 维度

在 Web 技术使用的坐标系中，按照惯例，水平偏移量称为 _x 坐标_，负值表示在原点左侧，正值表示在原点右侧。*y 坐标*指定垂直偏移，负值表示在原点之上，正值表示在原点之下。

在 web 中，默认的原点是给定上下文的左*上*角（Y 坐标正值位于原点下方）。请注意，这与大多数数学模型不同，在大多数数学模型中，原点位于左*下*角，Y 坐标的正值位于原点之上。

在使用第三维度将物体从前向后分层时，我们使用 z 轴。z 轴从查看器一直延伸到屏幕表面。CSS z-index 属性会影响定位元素在此轴线上的位置，从而产生远离或朝向观众的效果。

> [!NOTE]
> 实际上，使用 CSS 属性（如 {{cssxref("transform")}}）可以改变这些坐标系的定义和方向。不过，我们现在只讨论标准坐标系。

## 标准 CSS 对象模型坐标系

CSS 对象模型使用四种标准坐标系。为了帮助直观地理解这些主要坐标系，下图显示了一台显示器，显示器上有一个浏览器窗口，窗口中的内容滚动到了视口之外。在视口外滚动的页面内容在浏览器窗口上方显示为半透明，以指示“页面”坐标的原点在哪里。“客户端”、“页面”和“视口”坐标系的原点已突出显示。

![电脑显示器与浏览器窗口的示意图，浏览器窗口包含视口以外的内容。标签显示了页面、屏幕和视口坐标的原点。](css-coords.svg)

### 偏移

使用“偏移”模型指定的坐标使用的是被检查元素或发生事件的元素的左上角。

例如，当发生{{domxref("MouseEvent", "鼠标事件", "", 1)}}时，事件的 {{domxref("MouseEvent.offsetX", "offsetX")}} 和 {{domxref("MouseEvent.offsetY", "offsetY")}} 属性中指定的鼠标位置相对于事件发生节点的左上角。原点的嵌入距离由 {{cssxref("padding-left")}} 和 {{cssxref("padding-top")}} 指定。

### 视口

“视口”（或“客户端”）坐标系以发生事件的视口或浏览上下文的左上角为原点。这就是呈现文档的整个视图区域。

例如，在台式电脑上，{{domxref("MouseEvent.clientX")}} 和 {{domxref("MouseEvent.clientY")}} 属性表示事件发生时鼠标光标相对于 {{domxref("window")}} 左上角的位置。使用触控笔或指针时，{{domxref("TouchEvent", "触摸事件", "", 1)}}中的 {{domxref("Touch.clientX")}} 和 {{domxref("Touch.clientY")}} 坐标相对于同一原点。

窗口的左上角始终是 `(0，0)`，与文档内容或任何滚动无关。换句话说，滚动文档会改变文档中给定位置的视口坐标。

### 页面

“页面”坐标系给出了一个像素相对于整个渲染{{domxref("Document", "文档", "", 1)}}左上角的位置。这意味着用户在文档中横向或纵向滚动元素后，除非元素通过布局变化移动，否则文档中元素的某一点将保持相同的坐标。

鼠标事件的 {{domxref("MouseEvent.pageX", "pageX")}} 和 {{domxref("MouseEvent.pageY", "pageY")}} 属性提供了事件发生时鼠标相对于文档左上角的位置。{{domxref("TouchEvent", "触摸事件", "", 1)}}中的 {{domxref("Touch.pageX")}} 和 {{domxref("Touch.pageY")}} 坐标相对于同一原点。

### 屏幕

最后，来介绍“屏幕”模型，原点是用户屏幕空间的左上角。该坐标系中的每个点都代表一个逻辑像素，因此每个坐标轴上的值都以整数递增或递减。如果文档中包含的窗口被移动，或者用户的屏幕几何形状发生变化（通过改变显示分辨率或在系统中添加或删除显示器），文档中给定点的位置就会发生变化。

{{domxref("MouseEvent.screenX")}} 和 {{domxref("MouseEvent.screenY")}} 属性给出了鼠标事件相对于屏幕原点的位置坐标。{{domxref("TouchEvent", "触摸事件", "", 1)}}中的 {{domxref("Touch.screenX")}} 和 {{domxref("Touch.screenY")}} 坐标相对于同一原点。

## 示例

让我们来看一个在元素中记录鼠标坐标的示例。每当鼠标进入内部盒子、在内部盒子中移动或退出内部盒子时，都会在四个可用系统中的每个系统中记录当前鼠标坐标来处理事件。

### JavaScript

在 JavaScript 中，代码通过调用 {{domxref("EventTarget.addEventListener", "addEventListener()")}}、{{domxref("Element/mouseenter_event", "mouseenter")}}、{{domxref("Element/mousemove_event", "mousemove")}} 和 {{domxref("Element/mouseleave_event", "mouseleave")}} 设置事件处理器。对于每个事件，我们都会调用 `setCoords()` 函数，该函数会将每个系统的坐标设置到 `<p>` 元素的内部文本中。

```js
const log = document.querySelector(".log");
const inner = document.querySelector(".inner");

function setCoords(e) {
  log.innerText = `
    偏移 X/Y：${e.offsetX}, ${e.offsetY}
    视口 X/Y：${e.clientX}, ${e.clientY}
    页面 X/Y：${e.pageX}, ${e.pageY}
    屏幕 X/Y：${e.screenX}, ${e.screenY}`;
}

inner.addEventListener("mousemove", setCoords);
inner.addEventListener("mouseenter", setCoords);
inner.addEventListener("mouseleave", setCoords);
```

### HTML

HTML 中包含一个 `"log"` 类的 `<p>` 元素，用于显示鼠标事件的数据。

```html
<div class="outer">
  <div class="inner">
    <p class="log">在这里移动鼠标以查看坐标</p>
  </div>
</div>
```

### CSS

用于包含盒子的 `"outer"` 类特意设置得很宽，以便在滚动内容时查看鼠标坐标的效果。`"inner"` 段落用于跟踪和记录鼠标事件。

```css
.outer {
  width: 1000px;
}

.inner {
  font-family: monospace;
  position: relative;
  width: 500px;
  height: 150px;
  top: 25px;
  left: 100px;
  background-color: darkblue;
  color: white;
  cursor: crosshair;
  user-select: none;
}

.log {
  position: relative;
  width: 100%;
  text-align: center;
}
```

### 结果

在这里，你可以看到实际效果。当鼠标在蓝色盒子内移动时，观察鼠标的 X 和 Y 坐标值在不同坐标系中的变化。

{{EmbedLiveSample("示例", 600, 250)}}

## 参见

- [使用 CSS 变换](/zh-CN/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)：如何改变坐标系
- {{domxref("MouseEvent", "鼠标事件", "", 1)}}的坐标：

  - {{domxref("MouseEvent.offsetX")}} 和 {{domxref("MouseEvent.offsetY")}}
  - {{domxref("MouseEvent.clientX")}} 和 {{domxref("MouseEvent.clientY")}}
  - {{domxref("MouseEvent.pageX")}} 和 {{domxref("MouseEvent.pageY")}}
  - {{domxref("MouseEvent.screenX")}} 和 {{domxref("MouseEvent.screenY")}}

- {{domxref("Touch", "触摸事件", "", 1)}}的坐标：

  - {{domxref("Touch.clientX")}} 和 {{domxref("Touch.clientY")}}
  - {{domxref("Touch.pageX")}} 和 {{domxref("Touch.pageY")}}
  - {{domxref("Touch.screenX")}} 和 {{domxref("Touch.screenY")}}
