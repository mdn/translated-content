---
title: ResizeObserverEntry
slug: Web/API/ResizeObserverEntry
---

{{APIRef("Resize Observer API")}}

**`ResizeObserverEntry`** 接口是传递给 {{domxref('ResizeObserver.ResizeObserver','ResizeObserver()')}} 构造函数中的回调函数参数的对象，它允许你获取真正在观察的 {{domxref("Element")}} 或 {{domxref("SVGElement")}} 最新的大小。

## 属性

- {{domxref('ResizeObserverEntry.borderBoxSize')}} {{readonlyinline}}
  - : 一个对象，当运行回调时，该对象包含着正在观察元素的新边框盒的大小。
- {{domxref('ResizeObserverEntry.contentBoxSize')}} {{readonlyinline}}
  - : 一个对象，当运行回调时，该对象包含着正在观察元素的新内容盒的大小。
- {{domxref('ResizeObserverEntry.devicePixelContentBoxSize')}} {{readonlyinline}}
  - : 一个对象，当运行回调时，该对象包含着正在观察元素的新内容盒的大小（以设备像素为单位）。
- {{domxref('ResizeObserverEntry.contentRect')}} {{readonlyinline}}
  - : 一个对象，当运行回调时，该对象包含着正在观察元素新大小的 {{domxref('DOMRectReadOnly')}} 对象。请注意，这比以上两个属性有着更好的支持，但是它是 Resize Observer API 早期实现遗留下来的，出于对浏览器的兼容性原因，仍然被保留在规范中，并且在未来的版本中可能被弃用。
- {{domxref('ResizeObserverEntry.target')}} {{readonlyinline}}
  - : 对正在观察 {{domxref('Element')}} 或 {{domxref("SVGElement")}} 的引用。

> **备注：** 内容盒是放置内容的盒子，即边框盒减去内边距和边框宽度。边框盒包含内容、内边距和边框。更多解释参见[盒模型](/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model)。

## 方法

无。

## 示例

以下片段取自 [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html)（[参见源代码](https://github.com/mdn/dom-examples/blob/master/resize-observer/resize-observer-text.html)）示例。这使用了一个简单的特征检查去查看是否浏览器支持较新的 `contentBoxSize` 属性——如果支持，它将使用它获取需要的尺寸数据。如果不支持，它将使用一个较旧的 `contentRect` 属性。

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (entry.contentBoxSize) {
      h1Elem.style.fontSize = `${Math.max(
        1.5,
        entry.contentBoxSize.inlineSize / 200,
      )}rem`;
      pElem.style.fontSize = `${Math.max(
        1,
        entry.contentBoxSize.inlineSize / 600,
      )}rem`;
    } else {
      h1Elem.style.fontSize = `${Math.max(
        1.5,
        entry.contentRect.width / 200,
      )}rem`;
      pElem.style.fontSize = `${Math.max(1, entry.contentRect.width / 600)}rem`;
    }
  }
});
resizeObserver.observe(divElem);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
