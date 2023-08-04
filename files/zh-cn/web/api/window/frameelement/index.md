---
title: window.frameElement
slug: Web/API/Window/frameElement
---

{{ ApiRef() }}

### 概述

返回嵌入当前`window`对象的元素 (比如 `<iframe>` 或者 `<object>`),如果当前`window`对象已经是顶层窗口，则返回`null`.

### 语法

```plain
var frameEl = window.frameElement;
```

### 例子

```plain
var frameEl = window.frameElement;
// 如果当前窗口被包含在一个框架里面，则将该框架的地址跳到'http://mozilla.org/'
if (frameEl)
  frameEl.src = 'http://mozilla.org/';
```

### 备注

虽然该属性名为`frameElement`,但该属性也会返回其他类型比如 `<object>` 或者其他可嵌入窗口的元素。

### 相关链接

- [`window.frames`](/zh-CN/DOM/window.frames) 返回一个类数组对象，返回当前窗口的所有子框架元素。
- [`window.parent`](/zh-CN/DOM/window.parent) 返回当前窗口的父窗口，也就是说，包含当前窗口所在的`frameElement`元素的窗口。

### 规范

[WHATWG](http://www.whatwg.org/specs/web-apps/current-work/#dom-frameelement)

### 浏览器兼容性

{{Compat}}
