---
title: atob()
slug: Web/API/atob
---

{{APIRef("HTML DOM")}}

**`atob()`** 对经过 base-64 编码的字符串进行解码。你可以使用 {{domxref("WindowBase64.btoa","window.btoa()")}} 方法来编码一个可能在传输过程中出现问题的数据，并且在接受数据之后，使用 atob() 方法再将数据解码。例如：你可以编码、传输和解码操作各种字符，比如 0-31 的 ASCII 码值。

关于针对 Unicode 或者 UTF-8 的应用方面，请查看 [this note at Base64 encoding and decoding](/zh-CN/docs/Web/JavaScript/Base64_encoding_and_decoding#The_.22Unicode_Problem.22) 和 [`btoa()` 的备注](/zh-CN/docs/Web/API/window.btoa#Unicode_Strings)。

## 语法

```plain
var decodedData = scope.atob(encodedData);
```

### 异常

如果传入字符串不是有效的 base64 字符串，比如其长度不是 4 的倍数，则抛出{{jsxref("DOMException")}}。

## 示例

```js
let encodedData = window.btoa("Hello, world"); // 编码
let decodedData = window.atob(encodedData); // 解码
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Base64 encoding and decoding](/zh-CN/docs/Web/API/WindowBase64/Base64_encoding_and_decoding)
- [`data` URIs](/zh-CN/docs/data_URIs)
- {{domxref("btoa()")}}
- [Components.utils.importGlobalProperties](/zh-CN/docs/Components.utils.importGlobalProperties)
