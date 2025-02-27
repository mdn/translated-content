---
title: TextDecoder
slug: Web/API/TextDecoder
---

{{APIRef("Encoding API")}}

**`TextDecoder`** 接口表示一个文本解码器，一个解码器只支持一种特定文本编码，例如 `UTF-8`、`ISO-8859-2`、`KOI8-R`、`GBK`，等等。解码器将字节流作为输入，并提供码位流作为输出。

{{AvailableInWorkers}}

## 构造函数

- {{DOMxRef("TextDecoder.TextDecoder", "TextDecoder()")}}
  - : 返回一个新构造的 `TextDecoder`，它使用参数中指定的解码方法生成码位流。

## 属性

_`TextDecoder` 接口不继承任何属性。_

- {{DOMxRef("TextDecoder.prototype.encoding")}}{{ReadOnlyInline}}
  - : 一个包含的解码器名称的字符串，即描述 `TextDecoder` 将使用的方法的字符串。
- {{DOMxRef("TextDecoder.prototype.fatal")}}{{ReadOnlyInline}}
  - : 一个{{jsxref('Boolean', '布尔值', '', '1')}}，表示错误模式是否致命。
- {{DOMxRef("TextDecoder.prototype.ignoreBOM")}} {{ReadOnlyInline}}
  - : 一个{{jsxref('Boolean', '布尔值', '', '1')}}，表示是否忽略[字节顺序标记（BOM）](https://www.w3.org/International/questions/qa-byte-order-mark)标记。

## 方法

_`TextDecoder` 接口不继承任何方法_。

- {{DOMxRef("TextDecoder.prototype.decode()")}}
  - : 返回一个字符串，其中包含使用特定 `TextDecoder` 对象的方法解码的文本。

## 示例

### 用类型化数组表示文本

本示例展示如何解码中文/日语字符![](2019-05-21_191907.png)，用五个不同的类型化数组表示：{{jsxref("Uint8Array")}}、{{jsxref("Int8Array")}}、{{jsxref("Uint16Array")}}、{{jsxref("Int16Array")}} 和 {{jsxref("Int32Array")}}。

```js
let utf8decoder = new TextDecoder(); // default 'utf-8' or 'utf8'

let u8arr = new Uint8Array([240, 160, 174, 183]);
let i8arr = new Int8Array([-16, -96, -82, -73]);
let u16arr = new Uint16Array([41200, 47022]);
let i16arr = new Int16Array([-24336, -18514]);
let i32arr = new Int32Array([-1213292304]);

console.log(utf8decoder.decode(u8arr));
console.log(utf8decoder.decode(i8arr));
console.log(utf8decoder.decode(u16arr));
console.log(utf8decoder.decode(i16arr));
console.log(utf8decoder.decode(i32arr));
```

### 处理非 UTF8 文本

在此示例中，我们对俄语文本“Привет，мир！”进行编码，它的意思是（"Hello, world."）。在我们的 {{domxref("TextDecoder/TextDecoder", "TextDecoder()")}} 构造函数中，我们指定适用于西里尔字母的 Windows-1251 字符编码。

```js
const win1251decoder = new TextDecoder("windows-1251");
const bytes = new Uint8Array([
  207, 240, 232, 226, 229, 242, 44, 32, 236, 232, 240, 33,
]);
console.log(win1251decoder.decode(bytes)); // Привет, мир!
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("TextEncoder")}} 接口描述了逆操作。
- 一个[垫片](https://code.google.com/p/stringencoding/)，允许在不支持它的浏览器使用这个接口。
- [Node.js 从 v11.0.0 开始支持全局导出](https://nodejs.org/api/util.html#util_class_util_textdecoder)
