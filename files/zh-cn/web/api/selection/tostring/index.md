---
title: Selection.toString()
slug: Web/API/Selection/toString
---

{{ ApiRef("DOM") }}{{SeeCompatTable}}

**`Selection.toString()`**返回代表当前 selection 对象的字符串，例如当前选择的文本文字。

## 语法

```plain
str = sel.toString()
```

### 返回值

- _`str`_ 代表 selection 的字符串。

### 参数

_无。_

## 描述

此方法返回当前被选中的文本文字。

在[JavaScript](/zh-CN/docs/Web/JavaScript)中，当 selection 对象作为字符串类型使用时，此方法会被自动调用：

```js
alert(window.getSelection()) // 被调用时
alert(window.getSelection().toString())  // 真实情况
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{domxref("Selection")}}, Selection 接口规范。
