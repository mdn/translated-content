---
title: DataView.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteLength
---

{{JSRef}}

**`byteLength`** 属性描述了视图从它的 {{jsxref("ArrayBuffer")}} 开始的字节长度。

{{EmbedInteractiveExample("pages/js/dataview-bytelength.html")}}

## 语法

```plain
dataview.byteLength
```

## 描述

`byteLength` 属性是一个获取 (accessor) 属性，它的 set 属性为 `undefined`，这意味着它是只读的。值在 `DataView` 被创建时就确定了，且不能改变。如果 `DataView` 没有指定偏移量或 `byteLength`，那么被引用的 `ArrayBuffer` 的字节长度将被返回。

## Examples

### Using the `byteLength` property

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.byteLength; // 8 (matches the byteLength of the buffer)

var dataview2 = new DataView(buffer, 1, 5);
dataview2.byteLength; // 5 (as specified when constructing the DataView)

var dataview3 = new DataView(buffer, 2);
dataview3.byteLength; // 6 (due to the offset of the constructed DataView)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
