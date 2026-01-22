---
title: Selection：toString() 方法
short-title: toString()
slug: Web/API/Selection/toString
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ ApiRef("DOM") }}

**`Selection.toString()`** 方法会返回一个表示当前选区对象所代表内容（也就是当前被选中的文本）的字符串。

## 语法

```js-nolint
toString()
```

### 参数

无。

### 返回值

一个表示选区内容的字符串。

## 描述

该方法会返回当前被选中的文本。

在 [JavaScript](/zh-CN/docs/Web/JavaScript) 中，当某个需要字符串参数的函数接收到选区对象时，会自动调用此方法将其转换为字符串。

```js
alert(window.getSelection()); // 实际上会调用的方法
alert(window.getSelection().toString()); // 实际被真正调用的方法
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("Selection")}} 接口。
