---
title: document.releaseCapture
slug: Web/API/Document/releaseCapture
---

{{ ApiRef() }}

### 概述

如果该 document 中的一个元素之上当前启用了鼠标捕获，则释放鼠标捕获。通过调用 {{ domxref("element.setCapture()") }} 实现在一个元素上启用鼠标捕获。

### 语法

```plain
document.releaseCapture()
```

一旦释放鼠标捕获，鼠标事件将不再全部被定向到启用了鼠标捕获的元素。

### 示例

请参见 {{ domxref("element.setCapture()") }} 的 [示例](/zh-CN/docs/Web/API/Element/setCapture#example)

### 规范

基于 Internet Explorer 的实现。

### 参见

- {{ domxref("element.setCapture()") }}
