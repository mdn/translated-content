---
title: Window.top
slug: Web/API/Window/top
---

{{APIRef}}

返回窗口层级最顶层窗口的引用。

## 语法

```plain
var topWindow = window.top;
```

## 备注

[`window.parent`](/zh-CN/DOM/window.parent) 返回当前窗口的直接父对象，而 {{domxref("window.top")}} 返回最顶层的窗口对象。

当你在处理父窗口的子框架（subframe），而你想获取顶层框架时，这个属性相当有用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
