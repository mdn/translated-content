---
title: ResizeObserverEntry.borderBoxSize
slug: Web/API/ResizeObserverEntry/borderBoxSize
---

{{APIRef("Resize Observer API")}}

{{domxref("ResizeObserverEntry")}} 接口的只读属性 **`borderBoxSize`** 在回调运行时，返回一个包含被监听元素的边框盒大小的数组。

## 值

一个数组，包含被监听元素的新边框盒大小的对象。该数组在支持多列的场景中出现多个部分的元素时是必要的。数组中的每个对象都包含以下两个属性：

- `blockSize`
  - : 被监听的元素在 block 方向上的长度。对于具有水平 {{cssxref("writing-mode")}} 的盒子，这是垂直尺寸或者高度；如果 writing-mode 是垂直的，这是水平的尺寸或者宽度。
- `inlineSize`
  - : 被监听的元素在 inline 方向上的长度。对于具有水平 {{cssxref("writing-mode")}} 的盒子，这是垂直尺寸或者高度；如果 writing-mode 是垂直的，这是水平的尺寸或者宽度。

> **备注：** 更多关于 writing mode 和 block 以及 inline 方面的解释，请阅读[处理不同的文本方向](/zh-CN/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)。

## 示例

```js
const resizeObserver = new ResizeObserver((entries) => {
  const calcBorderRadius = (size1, size2) =>
    `${Math.min(100, size1 / 10 + size2 / 10)}px`;

  for (const entry of entries) {
    if (entry.borderBoxSize?.length > 0) {
      entry.target.style.borderRadius = calcBorderRadius(
        entry.borderBoxSize[0].inlineSize,
        entry.borderBoxSize[0].blockSize
      );
    } else {
      entry.target.style.borderRadius = calcBorderRadius(
        entry.contentRect.width,
        entry.contentRect.height
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
