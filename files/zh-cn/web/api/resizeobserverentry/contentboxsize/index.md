---
title: ResizeObserverEntry.contentBoxSize
slug: Web/API/ResizeObserverEntry/contentBoxSize
---

{{APIRef("Resize Observer API")}}

{{domxref("ResizeObserverEntry")}} 接口的只读属性 **`contentBoxSize`** 在回调运行时，返回一个包含被监听元素的内容盒大小的数组。

## 值

一个数组，包含被监听元素的新内容盒大小的对象。该数组在支持多列的场景中出现多个部分的元素时是必要的。数组中的每个对象都包含以下两个属性：

- `blockSize`
  - : 被监听的元素在块方向上的内容盒的长度。对于具有水平 {{cssxref("writing-mode")}} 的盒子，这是垂直尺寸或者高度；如果 writing-mode 是垂直的，这是水平的尺寸或者宽度。
- `inlineSize`
  - : 被监听的元素在内联方向上内容盒的长度。对于具有水平 {{cssxref("writing-mode")}} 的盒子，这是水平尺寸或者宽度；如果 writing-mode 是垂直的，这是垂直的尺寸或者高度。

> **备注：** 更多关于书写模式和块以及内联尺寸的解释，请阅读[处理不同方向的文本](/zh-CN/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)。

## 示例

以下示例取自 [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html)
（[见源码](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-border-radius.html)）。这个示例包含绿色的盒子，大小按照视口大小的百分比变化。当视口的大小改变，盒子的圆角会和盒子的大小成比例的变化。我们可以使用百分比的形式来设置 {{cssxref("border-radius")}}，但是很快就得到了丑陋的椭圆形角；以下这个解决方案给你提供了漂亮的方形角，可以随盒子的大小缩放。

```js
const resizeObserver = new ResizeObserver((entries) => {
  const calcBorderRadius = (size1, size2) =>
    `${Math.min(100, size1 / 10 + size2 / 10)}px`;

  for (const entry of entries) {
    if (entry.borderBoxSize?.length > 0) {
      entry.target.style.borderRadius = calcBorderRadius(
        entry.borderBoxSize[0].inlineSize,
        entry.borderBoxSize[0].blockSize,
      );
    } else {
      entry.target.style.borderRadius = calcBorderRadius(
        entry.contentRect.width,
        entry.contentRect.height,
      );
    }
  }
});

resizeObserver.observe(document.querySelector("div"));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
