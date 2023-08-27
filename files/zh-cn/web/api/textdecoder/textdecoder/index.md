---
title: TextDecoder()
slug: Web/API/TextDecoder/TextDecoder
---

{{APIRef("Encoding API")}}

**`TextDecoder()`** 构造函数使用参数中指定的编码返回一个新创建的 {{DOMxRef("TextDecoder")}} 对象。

## 语法

```js-nolint
new TextDecoder()
new TextDecoder(utfLabel)
new TextDecoder(utfLabel, options)
```

### 参数

- `utfLabel` {{optional_inline}}
  - : 一个字符串，默认是 `"utf-8"`。可以是[任意有效的编码](/zh-CN/docs/Web/API/Encoding_API/Encodings)。
- `options` {{optional_inline}}

  - : 一个具有属性的对象：

    - `fatal`
      - : 一个布尔值，表示在解码无效数据时，{{DOMxRef("TextDecoder.decode()")}} 方法是否必须抛出 {{jsxref("TypeError")}}。默认是 `false`，这意味着解码器将用替换字符替换错误的数据。

### 异常

- {{jsxref("RangeError")}}
  - : 如果 `label` 值是未知的，或是使用了 `'replacement'` 解码算法（`"iso-2022-cn"` 或 `"iso-2022-cn-ext"` 两个值之一），则会抛出。

## 示例

```js
const textDecoder1 = new TextDecoder("iso-8859-2");
const textDecoder2 = new TextDecoder();
const textDecoder3 = new TextDecoder("csiso2022kr", { fatal: true }); // Allows TypeError exception to be thrown.
const textDecoder4 = new TextDecoder("iso-2022-cn"); // Throw a RangeError exception.
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 属于 {{DOMxRef("TextDecoder")}} 接口。
