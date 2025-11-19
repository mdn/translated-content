---
title: DataView.prototype.setInt8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt8
---

**`setInt8()`** 从 [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView) 起始位置以 byte 为计数的指定偏移量 (byteOffset) 处储存一个 8-bit 数 (一个字节)。

{{InteractiveExample("JavaScript Demo: DataView.setInt8()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt8(1, 127); // Max signed 8-bit integer

console.log(view.getInt8(1));
// Expected output: 127
```

## 语法

```plain
dataview.setInt8(byteOffset, value)
```

## 参数

- byteOffset
  - : 偏移量，从头开始计算，单位为字节
- value
  - : 设置的整数值

### 返回

{{jsxref("undefined")}}.

### 抛出的错误

- {{jsxref("RangeError")}}
  - : 如果 byteOffset 超出了视图能储存的值，就会抛出错误

## 示例

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setInt8(1, 3);
dataview.getInt8(1); // 3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
