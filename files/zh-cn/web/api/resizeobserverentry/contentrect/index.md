---
title: ResizeObserverEntry.contentRect
slug: Web/API/ResizeObserverEntry/contentRect
---

{{APIRef("Resize Observer API")}}

{{domxref("ResizeObserverEntry")}} 接口的只读属性 `contentRect` 在回调运行时，返回一个包含被监听元素大小的 {{domxref('DOMRectReadOnly')}} 对象。注意，该属性比 {{domxref("ResizeObserverEntry.borderBoxSize")}} 或 {{domxref("ResizeObserverEntry.contentBoxSize")}} 有着更好的支持，但是它是在 Resize Observer API 早期实现遗留下来的，出于对浏览器的兼容性原因，仍然保留在规范中，并且在未来的版本中可能被弃用。

## 值

一个 {{domxref('DOMRectReadOnly')}} 对象，包含着 {{domxref("ResizeObserverEntry.target", "target")}} 属性表示的元素的新的大小。

如果 `target` 是一个 HTML {{domxref("Element","元素")}}，返回的 `contentRect` 是元素的内容盒。如果 `target` 是 {{domxref("SVGElement")}}，返回的 `contentRect` 是 SVG 的边界框。

## 示例

以下示例取自 [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html)（[见源码](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)）。它使用了一个简单的功能检测测试来查看浏览器是否支持较新的 {{domxref("ResizeObserverEntry.contentBoxSize")}} 属性——如果支持，则使用它来获取需要的尺寸数据。如果不支持，则使用 `contentRect`。

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
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
