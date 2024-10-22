---
title: HkdfParams
slug: Web/API/HkdfParams
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("Web Crypto API") }}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`HkdfParams`** 字典表示当使用 [HKDF](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey#hkdf) 算法时，对象应该以 `algorithm` 参数传递给 {{domxref("SubtleCrypto.deriveKey()")}}。

## 实例属性

- `name`
  - : 一个字符串，应设置为 `HKDF`。
- `hash`

  - : 表示要使用的[摘要算法](/zh-CN/docs/Web/API/SubtleCrypto/digest#支持的算法)的字符串。这可能是以下之一：

    - `SHA-1`
    - `SHA-256`
    - `SHA-384`
    - `SHA-512`

- `salt`
  - : 一个 {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}} 或 {{jsxref("DataView")}}。[HKDF 规范](https://datatracker.ietf.org/doc/html/rfc5869) 指出添加盐值“能显著提高 HKDF 的强度”。理想情况下，盐值应是一个与摘要函数输出长度相同的随机值或伪随机值。与传递给 `deriveKey()` 的输入密钥材料不同，盐值无须保密。
- `info`
  - : 一个 {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}} 或 {{jsxref("DataView")}}。表示特定于应用程序的上下文信息。这用于将派生密钥绑定到某个应用程序或上下文，使你能够在相同的输入密钥材料时为不同的上下文派生不同的密钥。重要的是这应该独立于输入密钥材料本身。此属性为必需属性，但可以是空缓冲区。

## 示例

参见 {{domxref("SubtleCrypto.deriveKey()")}} 的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

支持 {{domxref("SubtleCrypto.deriveKey()")}} 方法的“HKDF”算法的浏览器将会支持此类型。

## 参见

- {{domxref("SubtleCrypto.deriveKey()")}}
