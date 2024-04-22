---
title: "-webkit-overflow-scrolling"
slug: Web/CSS/-webkit-overflow-scrolling
---

{{CSSRef}}{{Non-standard_header}}

### 概述

**`-webkit-overflow-scrolling`** 属性控制元素在移动设备上是否使用滚动回弹效果。

### 值

- `auto`
  - : 使用普通滚动，当手指从触摸屏上移开，滚动会立即停止。
- `touch`
  - : 使用具有回弹效果的滚动，当手指从触摸屏上移开，内容会继续保持一段时间的滚动效果。继续滚动的速度和持续的时间和滚动手势的强烈程度成正比。同时也会创建一个新的堆栈上下文。

### 示例

```css
-webkit-overflow-scrolling: touch; /* 当手指从触摸屏上移开，会保持一段时间的滚动 */

-webkit-overflow-scrolling: auto; /* 当手指从触摸屏上移开，滚动会立即停止 */
```

### 规范

尚未有相关规范。另在 Apple 提供的[Safari CSS 参考文档](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/css/property/-webkit-overflow-scrolling)中有所提及。

### 浏览器兼容性

{{Compat}}
