---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
---

{{JSRef}}

`byteLength` 访问器属性表示一个 {{jsxref("ArrayBuffer")}} 对象的字节长度。

{{EmbedInteractiveExample("pages/js/arraybuffer-bytelength.html")}}

## 语法

```plain
arraybuffer.byteLength
```

## 描述

byteLength 属性是一个访问器属性，它的 set 访问器函数是 undefined，这意味着你只能读这个属性。该值在数组创建时确定，并且不可变更。如果这个`ArrayBuffer` 被移除，则此属性返回 0。

## 示例

```js
var buffer = new ArrayBuffer(8);
buffer.byteLength; // 8
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("ArrayBuffer")}}
