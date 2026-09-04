---
title: DataView.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/DataView/buffer
---

**`buffer`** 属性描述了在构造时被 DataView 引用的 {{jsxref("ArrayBuffer")}}。

{{InteractiveExample("JavaScript Demo: DataView.buffer")}}

```js interactive-example
// Create an ArrayBuffer
const buffer = new ArrayBuffer(123);

// Create a view
const view = new DataView(buffer);

console.log(view.buffer.byteLength);
// Expected output: 123
```

## 语法

```plain
dataview.buffer
```

## 描述

`buffer` 属性是一个访问器 (accessor) 属性，它的 `set` 属性为 `undefined`，这意味着它是只读的。值在 `DataView` 被创建时就确定了，且不能改变。

## 示例

### 使用 `buffer` 属性

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.buffer; // ArrayBuffer { byteLength: 8 }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
