---
title: RsaHashedKeyGenParams
slug: Web/API/RsaHashedKeyGenParams
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{ APIRef("Web Crypto API") }}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`RsaHashedKeyGenParams`** 字典表示在生成任何基于 RSA 的密钥对时，对象应该以 `algorithm` 参数传递给 {{domxref("SubtleCrypto.generateKey()")}}：即当算法被标记为 [RSASSA-PKCS1-v1_5](/zh-CN/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5)、[RSA-PSS](/zh-CN/docs/Web/API/SubtleCrypto/sign#rsa-pss) 或 [RSA-OAEP](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) 中的任一种时。

## 实例属性

- `name`
  - : 一个字符串，应设置为 `RSASSA-PKCS1-v1_5`、`RSA-PSS` 或 `RSA-OAEP`，依据你想要使用的算法。
- `modulusLength`
  - : 一个 `Number`。RSA 模数的位长度。此长度应至少为 2048 位：例如，请参见 [SP 800-131A Rev. 2](https://csrc.nist.gov/pubs/sp/800/131/a/r2/final)。一些组织现在建议此长度应为 4096 位。
- `publicExponent`
  - : 一个 {{jsxref("Uint8Array")}}。公共指数。除非你有充分的理由使用此值，否则请在此处指定 65537（即 `[0x01, 0x00, 0x01]`）。
- `hash`

  - : 一个表示要使用的[摘要函数](/zh-CN/docs/Web/API/SubtleCrypto/digest)名称的字符串。可以传递 `SHA-256`、`SHA-384` 或 `SHA-512` 中任意一个。

    > [!WARNING]
    > 从技术上讲，虽然你可以在这里传递 `SHA-1`，但强烈建议不要这样做，因为它被认为是脆弱的。

## 示例

参见 {{domxref("SubtleCrypto.generateKey()")}} 的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

支持在 {{domxref("SubtleCrypto.generateKey()")}} 方法中使用任何基于 RSA 算法的浏览器将会支持此类型。

## 参见

- {{domxref("SubtleCrypto.generateKey()")}}
