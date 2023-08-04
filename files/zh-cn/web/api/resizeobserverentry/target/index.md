---
title: ResizeObserverEntry.target
slug: Web/API/ResizeObserverEntry/target
---

{{APIRef("Resize Observer API")}}

{{domxref("ResizeObserverEntry")}} 接口的只读属性 **`target`** 返回一个正在被监听的 {{domxref('Element')}} 或 {{domxref('SVGElement')}} 的引用。

## 值

一个正在被监听的 {{domxref('Element')}} 或 {{domxref('SVGElement')}} 元素。

## 示例

以下示例取自 [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html)
（[见源码](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-border-radius.html)）。这个示例包含绿色的盒子，大小按照视口大小的百分比变化。当视口的大小改变，盒子的圆角会和盒子的大小成比例的变化。我们可以使用百分比的形式来设置 {{cssxref("border-radius")}}，但是很快就得到了丑陋的椭圆形角；以下这个解决方案给你提供了漂亮的方形角，可以随盒子的大小缩放。

为了获取到被监听元素的引用，以便我们在每次更改后可以更新它的 {{cssxref("border-radius")}} 值，我们可以使用每个条目的 `target` 属性——`entry.target.style.borderRadius`。

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      entry.target.style.borderRadius = `${Math.min(
        100,
        entry.contentBoxSize.inlineSize / 10 +
          entry.contentBoxSize.blockSize / 10,
      )}px`;
    } else {
      entry.target.style.borderRadius = `${Math.min(
        100,
        entry.contentRect.width / 10 + entry.contentRect.height / 10,
      )}px`;
    }
  }
});

resizeObserver.observe(document.querySelector("div"));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
