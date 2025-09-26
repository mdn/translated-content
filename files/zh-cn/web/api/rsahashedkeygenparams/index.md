---
title: RsaHashedKeyGenParams
slug: Web/API/RsaHashedKeyGenParams
l10n:
  sourceCommit: 8e49db2182a5ad4ddfcaecdefd3d2d67db20f213
---

{{ APIRef("Web Crypto API") }}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`RsaHashedKeyGenParams`** 字典表示在生成任何基于 RSA 的密钥对时（即当算法被标记为 [RSASSA-PKCS1-v1_5](/zh-CN/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5)、[RSA-PSS](/zh-CN/docs/Web/API/SubtleCrypto/sign#rsa-pss) 或 [RSA-OAEP](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) 中的任一种时），应该以 `algorithm` 参数传递给 {{domxref("SubtleCrypto.generateKey()")}} 的对象。

## 实例属性

- `name`
  - : 一个字符串。应依据你想要使用的算法，设置为 `RSASSA-PKCS1-v1_5`、`RSA-PSS` 或 `RSA-OAEP`。
- `modulusLength`
  - : 一个 `Number`。RSA 模数的位长度。此长度应至少为 2048 位：例如，请参见 [SP 800-131A Rev. 2](https://csrc.nist.gov/pubs/sp/800/131/a/r2/final)。一些组织现在建议此长度应为 4096 位。
- `publicExponent`
  - : 一个 {{jsxref("Uint8Array")}}。公共指数。除非你有充分的理由使用此值，否则请在此处指定 65537（即 `[0x01, 0x00, 0x01]`）。
- `hash`
  - : 一个字符串或一个包含单个名为 `name` 且具有字符串值的属性的对象。表示要使用的[摘要函数](/zh-CN/docs/Web/API/SubtleCrypto/digest)的字符串。可以是以下值之一：
    - `SHA-256`：选择 [SHA-256](/zh-CN/docs/Web/API/SubtleCrypto/digest#支持的算法) 算法。
    - `SHA-384`：选择 [SHA-384](/zh-CN/docs/Web/API/SubtleCrypto/digest#支持的算法) 算法。
    - `SHA-512`：选择 [SHA-512](/zh-CN/docs/Web/API/SubtleCrypto/digest#支持的算法) 算法。

    > [!WARNING]
    > 此处也支持 `SHA-1`，但 [SHA-1](/zh-CN/docs/Web/API/SubtleCrypto/digest#支持的算法) 算法被认为是脆弱的，应该不再使用。

## 示例

参见 {{domxref("SubtleCrypto.generateKey()")}} 的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

支持在 {{domxref("SubtleCrypto.generateKey()")}} 方法中使用任何基于 RSA 算法的浏览器将会支持此类型。

## 参见

- {{domxref("SubtleCrypto.generateKey()")}}
