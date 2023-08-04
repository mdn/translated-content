---
title: Window.scroll()
slug: Web/API/Window/scroll
---

{{APIRef}}

## 概述

滚动窗口至文档中的特定位置。

## 语法

```
window.scroll(x-coord, y-coord)
window.scroll(options)
```

### 参数

- `x-coord` 值表示你想要置于左上角的像素点的横坐标。
- `y-coord` 值表示你想要置于左上角的像素点的纵坐标。

\- 或者 -

- `options` 值是一个 {{domxref("ScrollToOptions")}} 字典

## 示例

```html
<!-- 把纵轴上第 100 个像素置于窗口顶部 -->

<button onClick="scroll(0, 100);">点击以向下滚动 100 像素</button>
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

[window.scrollTo](/zh-CN/docs/Web/API/Window/scrollTo) 实际上和该方法是相同的。想要重复地滚动某个距离，请使用 [window.scrollBy](/zh-CN/docs/Web/API/Window/scrollBy). 参见 [window.scrollByLines](/zh-CN/docs/Web/API/Window/scrollByLines), [window.scrollByPages](/zh-CN/docs/Web/API/Window/scrollByPages).

## 规范

{{Specifications}}
