---
title: window.parent
slug: Web/API/Window/parent
---

{{ ApiRef() }}

### 概述

返回当前窗口的父窗口对象。

如果一个窗口没有父窗口，则它的 `parent` 属性为自身的引用。

如果当前窗口是一个 `<iframe>`, `<object>`, 或者 `<frame>`,则它的父窗口是嵌入它的那个窗口

### 语法

```plain
var parentWindow = window.parent;
```

### 例子

```plain
if (window.parent != window.top) {
  // 至少有三层窗口
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`window.frameElement`](/zh-CN/docs/Web/API/Window/frameElement) 返回嵌入当前窗口的 frame 对象。
- [`window.top`](/zh-CN/docs/Web/API/Window/top) 返回当前窗口最顶层的父窗口。
