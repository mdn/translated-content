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

- `x-coord` 是你希望显示在左上角的文档水平轴像素。
- `y-coord` 是你希望显示在左上角的文档垂直轴像素。

——或者——

- `options`
  - : 包含以下参数的字典：
    - `top`
      - : 指定沿 Y 轴滚动窗口或元素的像素数量。
    - `left`
      - : 指定沿 X 轴滚动窗口或元素的像素数量。
    - `behavior`
      - : 确定滚动是即时完成还是以平滑动画进行。该选项是一个字符串，必须取以下值之一：
        - `smooth`：滚动应该平滑地进行动画展示
        - `instant`：滚动应在一次跳转中即时完成
        - `auto`：滚动行为由 {{cssxref("scroll-behavior")}} 的计算值来决定

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

## 备注

{{domxref("Window.scroll()")}} 实际上与此方法相同。有关相对滚动，请参阅 {{domxref("Window.scrollBy()")}}、{{domxref("Window.scrollByLines()")}} 和 {{domxref("Window.scrollByPages()")}}。

有关滚动元素，请参阅 {{domxref("Element.scrollTop")}} 和 {{domxref("Element.scrollLeft")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
