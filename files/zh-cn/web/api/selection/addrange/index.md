---
title: Selection.addRange()
slug: Web/API/Selection/addRange
---

{{ApiRef}}

## 概述

向选区（{{domxref("Selection")}}）中添加一个区域（{{domxref("Range")}}）。

## 语法

```plain
sel.addRange(range)
```

### 参数

- _`range`_
  - : 一个区域（{{ domxref("Range") }}）对象将被增加到选区（{{ domxref("Selection") }}）当中。

## 例子

```js
/* 在一个 HTML 文档中选中所有加粗的文本。 */

var strongs = document.getElementsByTagName("strong");
var s = window.getSelection();

if (s.rangeCount > 0) s.removeAllRanges();

for (var i = 0; i < strongs.length; i++) {
  var range = document.createRange();
  range.selectNode(strongs[i]);
  s.addRange(range);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("Selection")}}，此方法所属接口。
