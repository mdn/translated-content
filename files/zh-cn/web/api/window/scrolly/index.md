---
title: Window：scrollY 属性
short-title: scrollY
slug: Web/API/Window/scrollY
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

{{domxref("Window")}} 接口的 **`scrollY`** 只读属性返回文档当前垂直滚动的像素数。在现代浏览器中，该值是亚像素精确的，这意味着它不一定是整数。你可以从 {{domxref("Window.scrollX", "scrollX")}} 属性获取文档水平滚动的像素数。

## 值

一个双精度浮点值，表示文档当前相对原点垂直滚动的像素数；正值表示内容向下滚动（以露出底部更多内容）。更技术地说，`scrollY` 返回当前{{Glossary("viewport", "视口")}}上边缘的 Y 坐标。如果文档完全没有上下滚动，则 `scrollY` 为 0。如果没有视口，返回值为 0。如果文档在亚像素精确的设备上渲染，则返回值也是亚像素精确的，并且可能包含小数部分。

> [!NOTE]
> 如果你需要整数值，可以使用 {{jsxref("Math.round()")}} 对其进行四舍五入。

Safari 会通过将 `scrollY` 更新到超出最大滚动位置来响应过度滚动（除非默认的“回弹”效果被禁用，例如通过将 {{cssxref("overscroll-behavior")}} 设为 `none`），而 Chrome 和 Firefox 则不会。例如，在 Safari 上，当文档已位于顶部时继续向上滚动，`scrollY` 可能变为负数。

此属性为只读。要将窗口滚动到特定位置，请使用 {{domxref("Window.scroll()")}}。

## 示例

```js
// 确保滚动到第二页
if (window.scrollY) {
  window.scroll(0, 0); // 将滚动位置重置到文档的左上角。
}

window.scrollByPages(1);
```

## 说明

在使用诸如 {{domxref("window.scrollBy", "scrollBy()")}}、{{domxref("window.scrollByLines", "scrollByLines()")}} 或 {{domxref("window.scrollByPages", "scrollByPages()")}} 等相对滚动函数时，可用此属性检查文档是否尚未被滚动。

`pageYOffset` 属性是 `scrollY` 属性的别名。这意味着如果你没有重新赋值这两个属性中的任一属性，则 `window.pageYOffset === window.scrollY` 始终为真。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("window.scrollX")}}
