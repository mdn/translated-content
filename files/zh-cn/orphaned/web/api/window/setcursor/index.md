---
title: Window.setCursor()
slug: orphaned/Web/API/Window/setCursor
original_slug: Web/API/Window/setCursor
---
{{ ApiRef() }}

{{Non-standard_header}}

## 概要

在当前窗口中改变光标（鼠标）的样子

## 例子

```plain
function setBusyCursor(enable) {
  window.setCursor(enable ? "wait" : "auto");
}
```

## 提示

鼠标样式不会自动重置，需要主动设置回 `auto` 属性。

这个函数方法是 [ChromeWindow interface](/en-US/docs/XPCOM_Interface_Reference/nsIDOMChromeWindow) 的一部分。这个方法在某些网页上不能用，可以使用 CSS {{cssxref("cursor")}} 代替。

## 规范

这不是任何规范的一部分
