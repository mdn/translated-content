---
title: RsaPssParams
slug: Web/API/RsaPssParams
l10n:
  sourceCommit: 3b22c657f659c249cbe6e4fc6794370a5cb67a72
---

{{ APIRef("Web Crypto API") }}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`RsaPssParams`** 字典表示当使用 [RSA-PSS](/zh-CN/docs/Web/API/SubtleCrypto/sign#rsa-pss) 算法时，应作为 `algorithm` 参数传递给 {{domxref("SubtleCrypto.sign()")}} 或 {{domxref("SubtleCrypto.verify()")}} 的对象。

## 实例属性

- `name`
  - : 一个字符串，应设置为 `RSA-PSS`。
- `saltLength`
  - : 一个表示要使用的随机盐长度（以字节为单位）的 `long` 型整数。

    [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) 指出，“典型的盐长度”为 0 或密钥[生成](/zh-CN/docs/Web/API/SubtleCrypto/generateKey)时所选的[摘要算法](/zh-CN/docs/Web/API/SubtleCrypto#支持的算法)的输出长度。例如，如果使用 [SHA-256](/zh-CN/docs/Web/API/SubtleCrypto/digest#支持的算法) 作为摘要算法，则盐长度可以是 32。

    `saltLength` 的最大值由以下公式给出：

    ```js
    Math.ceil((keySizeInBits - 1) / 8) - digestSizeInBytes - 2;
    ```

    因此，对于 2048 位的密钥长度和 32 字节的摘要输出大小，最大值将会是 222。

## 示例

参见 {{domxref("SubtleCrypto.sign()")}} 和 {{domxref("SubtleCrypto.verify()")}} 的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

支持在 {{domxref("SubtleCrypto.sign()")}} 和 {{domxref("SubtleCrypto.verify()")}} 方法中使用“RSA-PSS”算法的浏览器将会支持此类型。

## 参见

- [RFC 3447: RSASSA-PSS](https://datatracker.ietf.org/doc/html/rfc3447#section-8.1)
