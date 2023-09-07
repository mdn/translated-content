---
title: btoa()
slug: Web/API/btoa
---

{{APIRef("HTML DOM")}}

**`btoa()`** 方法可以将一个*二进制字符串*（例如，将字符串中的每一个字节都视为一个二进制数据字节）编码为 {{glossary("Base64")}} 编码的 ASCII 字符串。

你可以使用这个方法来对可能遇到通信问题的数据进行编码，然后使用 {{domxref("atob", "atob()")}} 方法来对数据进行解码。例如，你可以对 ASCII 中的控制字符（值为 0 到 31 的字符）进行编码。

## 语法

```js-nolint
btoa(stringToEncode)
```

### 参数

- `stringToEncode`
  - : 一个需要编码的*二进制字符串*。

### 返回值

一个包含 `stringToEncode` 的 Base64 表示的 ASCII 字符串。

### 异常

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : 该字符串包含非单字节的字符。参见下方的“Unicode 字符串”。

## 示例

```js
const encodedData = btoa("Hello, world"); // 编码字符串
const decodedData = atob(encodedData); // 解码字符串
```

## Unicode 字符串

`btoa()` 函数将一个 JavaScript 字符串作为其参数。而 JavaScript 字符串使用 UTF-16 字符编码表示：在这种编码中，字符串使用一串 16 比特（2 字节）的单元来表示。每一个 ASCII 字符会被填充到每个单元的第一个字节中，而很多其他的字符则不然。

根据设计，Base64 仅将二进制数据作为其输入。而在 JavaScript 字符串中，这意味着每个字符只能使用一个字节表示。所以，如果你将一个字符串传递给 `btoa()`，而其中包含了需要使用超过一个字节才能表示的字符，你就会得到一个错误，因为这个字符串不能被看作是二进制数据：

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); //   61：占用 < 1 byte

const notOK = "✓";
console.log(notOK.codePointAt(0).toString(16)); // 2713：占用 > 1 byte

console.log(btoa(ok)); // YQ==
console.log(btoa(notOK)); // error
```

如果你需要使用 `btoa()` 将 Unicode 文本编码为 ASCII，一种选择是将字符串中的每一个 16 比特的单元都转换为使用一个字节的单元。例如：

```js
// convert a Unicode string to a string in which
// each 16-bit unit occupies only one byte
function toBinary(string) {
  const codeUnits = new Uint16Array(string.length);
  for (let i = 0; i < codeUnits.length; i++) {
    codeUnits[i] = string.charCodeAt(i);
  }
  const charCodes = new Uint8Array(codeUnits.buffer);
  let result = "";
  for (let i = 0; i < charCodes.byteLength; i++) {
    result += String.fromCharCode(charCodes[i]);
  }
  return result;
}

// a string that contains characters occupying > 1 byte
const myString = "☸☹☺☻☼☾☿";

const converted = toBinary(myString);
const encoded = btoa(converted);
console.log(encoded); // OCY5JjomOyY8Jj4mPyY=
```

如果你按上述的方法进行了编码，你当然需要一种方法来进行解码：

```js
function fromBinary(binary) {
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  const charCodes = new Uint16Array(bytes.buffer);
  let result = "";
  for (let i = 0; i < charCodes.length; i++) {
    result += String.fromCharCode(charCodes[i]);
  }
  return result;
}

const decoded = atob(encoded);
const original = fromBinary(decoded);
console.log(original); // ☸☹☺☻☼☾☿
```

参见 {{Glossary("Base64")}} 术语的 [Solution #1 – escaping the string before encoding it](/zh-CN/docs/Glossary/Base64#solution_1_–_javascripts_utf-16__base64) 示例中的 `utf8_to_b64` 和 `b64_to_utf8` 函数。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js`](https://github.com/zloirock/core-js) 中有对 [`btoa` 的 polyfill](https://github.com/zloirock/core-js#base64-utility-methods)
- [`data` URL](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)
- {{domxref("atob", "atob()")}}
- {{Glossary("Base64")}}
