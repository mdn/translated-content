---
title: TextDecoder()
slug: Web/API/TextDecoder/TextDecoder
---

{{APIRef("Encoding API")}}

**`TextDecoder()`** 构造函数使用参数中指定的编码返回一个新创建的 {{DOMxRef("TextDecoder")}} 对象。

如果 _utfLabel_ 值是未知的，或是使用了“`replacement`”编码（“`iso-2022-cn`”或“`iso-2022-cn-ext`”）的两个值之一，则会抛出 {{jsxref("RangeError")}}。

## 语法

```js
new TextDecoder()
new TextDecoder(utfLabel)
new TextDecoder(utfLabel, options)
```

### 参数

- `utfLabel` {{optional_inline}}
  - : 一个字符串，默认是 `"utf-8"`，包含编码器的 *label* 。可以是[任意有效的编码](zh-CN/docs/Web/API/Encoding_API/Encodings)。
- `options` {{optional_inline}}

  - : 一个具有属性的 `TextDecoderOptions` 对象：

    - `fatal`
      - : 一个 [`Boolean`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)，表示当遇到一个编码错误时，{{DOMxRef("TextDecoder.decode()")}} 方法是否必须抛出 {{jsxref("TypeError")}}。默认是 `false`。

## 示例

```js
var textDecoder1 = new TextDecoder("iso-8859-2");
var textDecoder2 = new TextDecoder();
var textDecoder3 = new TextDecoder("csiso2022kr", {fatal: true}); // Allows TypeError exception to be thrown.
var textDecoder4 = new TextDecoder("iso-2022-cn"); // Throw a RangeError exception.
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 属于 {{DOMxRef("TextDecoder")}} 接口。
