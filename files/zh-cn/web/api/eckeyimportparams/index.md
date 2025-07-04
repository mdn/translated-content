---
title: EcKeyImportParams
slug: Web/API/EcKeyImportParams
l10n:
  sourceCommit: 049632675ccb83fe2e257c43071d366d3f80ee2b
---

{{ APIRef("Web Crypto API") }}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`EcKeyImportParams`** 字典表示在生成任何基于椭圆曲线的密钥对时（即当算法被标记为 [ECDSA](/zh-CN/docs/Web/API/SubtleCrypto/sign#ecdsa) 或 [ECDH](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey#ecdh) 中的任一种时），应作为 `algorithm` 参数传递给 {{domxref("SubtleCrypto.importKey()")}} 或 {{domxref("SubtleCrypto.unwrapKey()")}} 的对象。

## 实例属性

- `name`
  - : 一个字符串。应依据想要使用的算法，设置为 `ECDSA` 或 `ECDH`。
- `namedCurve`
  - : 一个表示要使用的椭圆曲线名称的字符串。这可以是[美国国家标准技术研究所（NIST）](https://www.nist.gov/)批准的以下任意曲线名称：
    - `P-256`
    - `P-384`
    - `P-521`

## 示例

参见 {{domxref("SubtleCrypto.importKey()")}} 的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

支持在 {{domxref("SubtleCrypto.importKey()")}} 或 {{domxref("SubtleCrypto.wrapKey()")}} 方法中使用“ECDH”或“ECDSA”算法的浏览器将会支持此类型。

## 参见

- {{domxref("SubtleCrypto.importKey()")}}
- {{domxref("SubtleCrypto.unwrapKey()")}}
