---
title: DataTransfer：setDragImage() 方法
short-title: setDragImage()
slug: Web/API/DataTransfer/setDragImage
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML Drag and Drop API")}}

当发生拖拽时，会从拖拽目标（触发 {{domxref("HTMLElement/dragstart_event", "dragstart")}} 事件的元素）处生成一张半透明图像，并在拖拽过程中保持该图像一直跟随鼠标指针。这个图片是自动创建的而无需自行创建。但如果期望用自定义图像，则你可以使用 **`DataTransfer.setDragImage()`** 方法来设置要使用的自定义图像。图像通常是一个 {{HTMLElement("img")}} 元素，但也可以是 {{HTMLElement("canvas")}} 或任何其他可视元素。

该方法的 `x` 和 `y` 坐标是图像应该相对于鼠标指针出现的偏移量。坐标指定鼠标指针相对于图片的偏移量。例如，要使图像居中，请使用图像宽度和高度的一半。

你必须在 {{domxref("HTMLElement/dragstart_event", "dragstart")}} 事件处理器中调用此方法。

## 语法

```js-nolint
setDragImage(imgElement, xOffset, yOffset)
```

### 参数

- `imgElement`
  - : 作为拖拽反馈图像的图像{{domxref("Element", "元素", , 1)}}。

    如果 {{domxref("Element")}} 是图像元素，则设置拖拽数据存储位图为该元素的图像（以其固有大小）；否则，将拖拽数据存储位图设置为从给定元素生成的图像（目前尚未规范确切的机制）。

    需要注意，如果 {{domxref("Element")}} 是一个已有的 {{domxref("HTMLElement")}}，则它需要在视口中可见才能作为拖拽反馈图像显示。或者，你也可以专门为此目的创建一个可能在屏幕外的新 DOM 元素。

- `xOffset`
  - : 指示图像中的横向偏移量的 `long`。
- `yOffset`
  - : 指示图像中的纵向偏移量的 `long`。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 使用 setDragImage()

```html
<div>
  <p id="source" draggable="true">
    选中该元素并将其拖拽到可放置区域，然后释放选择以移动该元素。
  </p>
</div>
<div id="target">可放置区域</div>
```

```css
div {
  margin: 0em;
  padding: 2em;
}
#source {
  color: blue;
  border: 1px solid black;
}
#target {
  border: 1px solid black;
}
```

```js
const source = document.getElementById("source");
const target = document.getElementById("target");

// 创建一张图像并将其作为拖拽图形；你可以使用你所希望使用的图片 URL
const img = new Image();
img.src = "/shared-assets/images/examples/favicon32.png";

source.addEventListener("dragstart", (ev) => {
  // 设置拖拽格式与数据（在此示例中使用事件目标的 id 作为数据）
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dataTransfer.setDragImage(img, 10, 10);
});

target.addEventListener("dragover", (ev) => {
  ev.preventDefault();
});

target.addEventListener("drop", (ev) => {
  ev.preventDefault();
  // 获取数据（放置目标的 id）
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
});
```

{{EmbedLiveSample("使用 setDragImage", "", 300)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [拖放](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖拽操作](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [使用拖拽数据存储](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
