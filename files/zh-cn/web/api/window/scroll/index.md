---
title: Window：scroll() 方法
slug: Web/API/Window/scroll
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

**`Window.scroll()`** 方法滚动窗口至文档中的特定位置。

## 语法

```js-nolint
scroll(xCoord, yCoord)
scroll(options)
```

### 参数

- `xCoord`
  - : 你想要在左上角显示的文档水平轴像素。
- `yCoord`
  - : 你想要在左上角显示的文档垂直轴像素。
- `options`
  - : 包含以下属性的对象：
    - `top`
      - : 指定沿 Y 轴滚动窗口或元素的像素数。
    - `left`
      - : 指定沿 X 轴滚动窗口或元素的像素数。
    - `behavior`
      - : 确定滚动是即时完成还是以平滑动画进行。该选项是一个字符串，必须取以下值之一：
        - `smooth`：滚动应该平滑地进行动画展示
        - `instant`：滚动应在一次跳转中即时完成
        - `auto`：滚动行为由 {{cssxref("scroll-behavior")}} 的计算值来决定

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```html
<!-- 把纵轴上第 100 个像素置于窗口顶部 -->

<button onclick="scroll(0, 100);">点击以向下滚动到第 100 个像素</button>
```

使用 `options`:

```js
window.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## 备注

{{domxref("Window.scrollTo()")}} 实际上和该方法是相同的。有关相对滚动，请参见 {{domxref("Window.scrollBy()")}}、{{domxref("Window.scrollByLines()")}} 和 {{domxref("Window.scrollByPages()")}}。

有关滚动元素，请参见 {{domxref("Element.scrollTop")}} 和 {{domxref("Element.scrollLeft")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window.scrollByLines()")}}
- {{domxref("Window.scrollByPages()")}}
- {{domxref("Element.scrollIntoView()")}}
