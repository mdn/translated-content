---
title: WorkerGlobalScope：btoa() 方法
slug: Web/API/WorkerGlobalScope/btoa
l10n:
  sourceCommit: dd3048a4eb74a53395c9a2015baefaa46ef77a56
---

{{APIRef("HTML DOM")}}

{{domxref("WorkerGlobalScope")}} 接口的 **`btoa()`** 方法可以将一个*二进制字符串*（例如，将字符串中的每一个字节都视为一个二进制数据字节）编码为 {{glossary("Base64")}} 编码的 ASCII 字符串。

你可以使用这个方法来对可能遇到通信问题的数据进行编码，然后使用 {{domxref("WorkerGlobalScope.atob()")}} 方法来对数据进行解码。例如，你可以对 ASCII 中的控制字符（值为 0 到 31 的字符）进行编码。

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
const encodedData = self.btoa("Hello, world"); // 编码字符串
const decodedData = self.atob(encodedData); // 解码字符串
```

## Unicode 字符串

根据设计，Base64 仅将二进制数据作为其输入。而在 JavaScript 字符串中，这意味着每个字符只能使用一个字节表示。所以，如果你将一个字符串传递给 `btoa()`，而其中包含了需要使用超过一个字节才能表示的字符，你就会得到一个错误，因为这个字符串不能被看作是二进制数据：

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); //   61：占用 < 1 字节

const notOK = "✓";
console.log(notOK.codePointAt(0).toString(16)); // 2713：占用 > 1 字节

console.log(self.btoa(ok)); // YQ==
console.log(self.btoa(notOK)); // 错误
```

参见 {{Glossary("Base64")}} 术语条目中的“Unicode 问题”，以了解如何在处理任意 Unicode 文本时解决此限制。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js`](https://github.com/zloirock/core-js) 中有对 [`btoa` 的 polyfill](https://github.com/zloirock/core-js#base64-utility-methods)
- [`data` URL](/zh-CN/docs/Web/URI/Reference/Schemes/data)
- {{domxref("WorkerGlobalScope.atob()")}}
- {{domxref("Window.atob()")}}：相同的，但是是在窗口作用域内的方法。
- {{Glossary("Base64")}}
