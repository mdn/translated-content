---
title: Window.onmozbeforepaint
slug: orphaned/Web/API/Window/onmozbeforepaint
original_slug: Web/API/Window/onmozbeforepaint
---
{{ ApiRef() }}

{{ non-standard_header() }}

> **警告：** 这个非标准时间处理器在某些已发布版本中无法使用，而且已经在 Gecko 11.0 中被移除{{ geckoRelease("11.0") }}。

### 摘要

`MozBeforePaints` 事件的事件处理器。这样做是为了保持和 {{ domxref("window.mozRequestAnimationFrame()") }}方法一致以期在 JavaScript 代码中提供流畅，同步的动画。

### 语法

```
window.onmozbeforepaint = funcRef;
```

- `funcRef` 是处理器函数。

### 例子

请查看{{ domxref("window.mozRequestAnimationFrame()") }}。

### 注意

这个事件会在浏览器重绘前立即触发，如果事件被一个或多个代码调用响应{{domxref("window.mozRequestAnimationFrame()") }}。事件处理器会接收到一个事件作为输入参数，其 `timeStamp` 属性为 UTC 起始到现在的毫秒数字，这是当前动画帧的“当前时间”。这个时间对于所有在相同浏览器窗口运行的，包括哪些用了 {{ domxref("window.mozRequestAnimationFrame()") }} 方法，[CSS transitions](/en/CSS/CSS_transitions), 和 SMIL animations 的都是一样的。

### 说明

没有特别的说明。
