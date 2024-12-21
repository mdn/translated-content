---
title: HTMLImageElement.loading
slug: Web/API/HTMLImageElement/loading
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} 的 **`loading`** 属性为一个字符串，它的值会提示 {{Glossary("用户代理")}} 告诉浏览器不在{{Glossary("可视视口")}}内的图片该如何加载。这样一来，通过推迟图片加载仅让其在需要的时候加载而非页面初始载入时立刻加载，优化了页面的载入。

## 语法

```plain
let imageLoadScheduling = htmlImageElement.loading;
htmlImageElement.loading = eagerOrLazy;
```

### 值

{{domxref("DOMString")}} 提示用户代理该如何最佳规划图片加载来优化页面性能。可能的值有：

- `eager`
  - : 默认行为， `eager` 告诉浏览器当处理 `<img>` 标签时立即加载图片。
- `lazy`
  - : 告诉用户代理推迟图片加载直到浏览器认为其需要立即加载时才去加载。例如，如果用户正在往下滚动页面，值为 `lazy` 会导致图片仅在马上要出现在 {{Glossary("可视视口")}}中时开始加载。

## 使用说明

### load 事件的时机

{{domxref("Window.load_event","load")}} 事件在文档被完整的处理完成时触发。当图片使用立即加载 (默认值) 时，文档中的所有图片都会在 `load` 事件触发前载入。

当 `loading` 值设为 `lazy` 时，图片不再会在请求，下载，处理的时间内推迟 `load` 事件触发。

`loading` 属性值设为 `lazy` 但是在页面初次加载时就在可视视口内的图片会立即加载但它们也不会推迟 `load` 事件。换句话说，这些图片不会在处理 `<img>` 元素时立即加载，但仍会作为页面初始加载的一部分而加载。他们只是不会影响 `load` 事件。

这表明当 `load` 触发时，可视区域内懒加载的图片可能不可见。

### 防止元素在图片懒加载时出现移位

当一个加载被 `loading` 属性设为 `lazy` 的图片最后加载时，浏览器会根据{{HTMLElement("img")}} 元素的尺寸和图片自身大小重排文档，更新被图片影响的元素的位置。

为了防止重排发生，你需要使用 [`width`](/zh-CN/docs/Web/HTML/Element/img#width) 和 [`height`](/zh-CN/docs/Web/HTML/Element/img#height) 属性明确设置图片大小。通过这样建立固有长宽比，你防止了元素的移位。取决于实际的加载时间和重排，移位造成的最小的影响可能只是使用户困惑和不适，最坏的影响则是导致用户点错目标。

## 示例

下面展示的 `addImageToList()` 函数将一个照片缩略图添加到一个物品列表中，使用懒加载防止请求图片，直到其真正需要显示。

```js
function addImageToList(url) {
  const list = document.querySelector("div.photo-list");

  let newItem = document.createElement("div");
  newItem.className = "photo-item";

  let newImg = document.createElement("img");
  newImg.loading = "lazy";
  newImg.width = 320;
  newImg.height = 240;
  newImg.src = url;

  newItem.appendChild(newImg);
  list.appendChild(newItem);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("img")}} 元素
- MDN 学习专区中的 [Web 性能](/zh-CN/docs/Learn_web_development/Extensions/Performance)
- MDN web 性能指南中的[懒加载](/zh-CN/docs/Web/Performance/Lazy_loading)
