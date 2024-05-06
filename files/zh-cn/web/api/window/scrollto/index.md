---
title: Window：scrollTo() 方法
slug: Web/API/Window/scrollTo
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

**`Window.scrollTo()`** 会滚动到文档中的一组特定坐标。

## 语法

```js-nolint
scrollTo(x-coord, y-coord)
scrollTo(options)
```

### 参数

- `x-coord` 是文档水平轴上的像素点，表示你希望在视口左上角显示的位置。
- `y-coord` 是文档垂直轴上的像素点，表示你希望在视口左上角显示的位置。

——或者——

- `options`
  - : 一个包含以下参数的字典：
    - `top`
      - : 指定沿 Y 轴滚动窗口或元素的像素数量。
    - `left`
      - : 指定沿 X 轴滚动窗口或元素的像素数量。
    - `behavior`
      - : 确认滚动是立即完成还是平滑动画进行。此选项是一个字符串，必须取以下值之一：
        - `smooth`: 滚动应该平滑地进行动画展示
        - `instant`: 滚动应当瞬间完成，一次性跳跃到位
        - `auto`: 滚动行为由 {{cssxref("scroll-behavior")}} 的计算值来决定

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
window.scrollTo(0, 1000);
```

使用 `options`：

```js
window.scrollTo({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## 说明

{{domxref("Window.scroll()")}} 实际上与此方法相同。对于相对滚动，请参阅 {{domxref("Window.scrollBy()")}}、{{domxref("Window.scrollByLines()")}} 和 {{domxref("Window.scrollByPages()")}}。

对于滚动元素，请参阅 {{domxref("Element.scrollTop")}} 和 {{domxref("Element.scrollLeft")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
