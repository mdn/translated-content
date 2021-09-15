---
title: ResizeObserverEntry
slug: Web/API/ResizeObserverEntry
tags:
  - API
  - Bounding Box
  - Interface
  - Reference
  - Resize Observer API
  - ResizeObserver
  - ResizeObserverEntry
  - content box
  - observers
browser-compat: api.ResizeObserverEntry
---
{{APIRef("Resize Observer API")}}

The **`ResizeObserverEntry`** 接口表示传递给 {{domxref('ResizeObserver.ResizeObserver','ResizeObserver()')}} 构造函数的回调函数的对象，它允许您访问正在观察的 {{domxref("Element")}} or {{domxref("SVGElement")}} 的新维度。

## Properties

- {{domxref('ResizeObserverEntry.borderBoxSize')}} {{readonlyinline}}
  - : 一个包含运行回调时观察到的元素的新边框大小的对象。
- {{domxref('ResizeObserverEntry.contentBoxSize')}} {{readonlyinline}}
  - : 一个包含运行回调时观察到的元素的新内容框大小的对象。
- {{domxref('ResizeObserverEntry.devicePixelContentBoxSize')}} {{readonlyinline}}
  - : 运行回调时，包含以设备像素为单位的新内容框大小的对象。
- {{domxref('ResizeObserverEntry.contentRect')}} {{readonlyinline}}
  - :  {{domxref('DOMRectReadOnly')}} 对象，包含运行回调时观察到的元素的新大小。 请注意，这比上述两个属性得到更好的支持，但它是 Resize Observer API 的早期实现遗留下来的，出于 Web 兼容性原因仍包含在规范中，并且可能在未来版本中被弃用。
- {{domxref('ResizeObserverEntry.target')}} {{readonlyinline}}
  - :对被观察的  {{domxref('Element')}} or {{domxref("SVGElement")}} 的引用。

> **Note:** content-box是可以放置内容的框，意思是边框框减去内边距和边框宽度。border-box包含内容、填充和边框。See [The box model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model) for further explanation.

## Methods

None.

## Examples

以下代码段取自 [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([see source](https://github.com/mdn/dom-examples/blob/master/resize-observer/resize-observer-text.html)) 示例. 这使用了一个简单的特征检测测试来查看浏览器是否支持较新的 `contentBoxSize` 属性——如果支持，它会使用它来获取它需要的大小数据。如果不是，则使用旧的 `contentRect` 属性。

```js
const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    if(entry.contentBoxSize) {
      h1Elem.style.fontSize = Math.max(1.5, entry.contentBoxSize.inlineSize/200) + 'rem';
      pElem.style.fontSize = Math.max(1, entry.contentBoxSize.inlineSize/600) + 'rem';
    } else {
      h1Elem.style.fontSize = Math.max(1.5, entry.contentRect.width/200) + 'rem';
      pElem.style.fontSize = Math.max(1, entry.contentRect.width/600) + 'rem';
    }
  }
});

resizeObserver.observe(divElem);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
