---
title: RsaHashedImportParams
slug: Web/API/RsaHashedImportParams
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{ APIRef("Web Crypto API") }}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`RsaHashedImportParams`** 字典表示在生成任何基于 RSA 的密钥对时，对象应该以 `algorithm` 参数传递给 {{domxref("SubtleCrypto.importKey()")}} 或 {{domxref("SubtleCrypto.unwrapKey()")}}：即当算法被标记为 [RSASSA-PKCS1-v1_5](/zh-CN/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5)、[RSA-PSS](/zh-CN/docs/Web/API/SubtleCrypto/sign#rsa-pss) 或 [RSA-OAEP](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) 中的任一种时。

## 实例属性

- `name`
  - : 一个字符串，应设置为 `RSASSA-PKCS1-v1_5`、`RSA-PSS` 或 `RSA-OAEP`，依据你想要使用的算法。
- `hash`

  - : 一个表示要使用的[摘要函数](/zh-CN/docs/Web/API/SubtleCrypto/digest)名称的字符串。可以是 `SHA-256`、`SHA-384` 或 `SHA-512` 中任意一个。

    > [!WARNING]
    > 从技术上讲，虽然你可以在这里传递 `SHA-1`，但强烈建议不要这样做，因为它被认为是脆弱的。

## 示例

参见 {{domxref("SubtleCrypto.importKey()")}} 的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

支持在 {{domxref("SubtleCrypto.importKey()")}} 或 {{domxref("SubtleCrypto.unwrapKey()")}} 方法中使用任何基于 RSA 算法的浏览器将会支持此类型。

## 参见

- {{domxref("SubtleCrypto.importKey()")}}
- {{domxref("SubtleCrypto.unwrapKey()")}}
