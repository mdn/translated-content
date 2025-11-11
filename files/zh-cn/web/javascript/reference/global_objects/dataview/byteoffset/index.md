---
title: DataView.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteOffset
---

**`byteOffset`** 属性描述了从 {{jsxref("ArrayBuffer")}} 开始的字节偏移量。

{{InteractiveExample("JavaScript Demo: DataView.byteOffset")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer, 12, 4); // From byte 12 for the next 4 bytes

console.log(view.byteOffset);
// Expected output: 12
```

## 语法

```plain
dataview.byteOffset
```

## 描述

`byteOffset` 属性是一个获取 (accessor) 属性，它的 set 属性为 undefined，这意味着它是只读的。值在 `DataView` 被创建时就确定了，且不能改变。

## 示例

### `使用 byteOffset 属性`

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.byteOffset; // 0 (没有指定偏移量)

var dataview2 = new DataView(buffer, 3);
dataview2.byteOffset; // 3 (在构造 DataView 时指定)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
