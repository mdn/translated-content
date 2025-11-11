---
title: Selection.toString()
slug: Web/API/Selection/toString
---

{{ ApiRef("DOM") }}

**`Selection.toString()`** 方法返回 selection 对象当前代表的字符串。例如，当前选中的文本。

## 语法

```js-nolint
toString()
```

### 参数

无。

### 返回值

selection 对象代表的字符串。

## 描述

此方法返回当前被选中的文本。

在 [JavaScript](/zh-CN/docs/Web/JavaScript) 中，当 selection 对象作为字符串类型传递给函数时，此方法会被自动调用：

```js
alert(window.getSelection()); // 被调用时
alert(window.getSelection().toString()); // 真实情况
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- 属于 {{domxref("Selection")}} 接口。
