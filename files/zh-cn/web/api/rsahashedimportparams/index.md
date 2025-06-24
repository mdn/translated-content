---
title: RsaHashedImportParams
slug: Web/API/RsaHashedImportParams
l10n:
  sourceCommit: 8e49db2182a5ad4ddfcaecdefd3d2d67db20f213
---

{{ APIRef("Web Crypto API") }}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`RsaHashedImportParams`** 字典表示在生成任何基于 RSA 的密钥对时（即当算法被标记为 [RSASSA-PKCS1-v1_5](/zh-CN/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5)、[RSA-PSS](/zh-CN/docs/Web/API/SubtleCrypto/sign#rsa-pss) 或 [RSA-OAEP](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) 中的任一种时），应该以 `algorithm` 参数传递给 {{domxref("SubtleCrypto.importKey()")}} 或 {{domxref("SubtleCrypto.unwrapKey()")}} 的对象。

## 实例属性

- `name`
  - : 一个字符串。应依据你想要使用的算法，设置为 `RSASSA-PKCS1-v1_5`、`RSA-PSS` 或 `RSA-OAEP`。
- `hash`
  - : 一个字符串或一个包含单个名为 `name` 且具有字符串值的属性的对象。表示要使用的[摘要函数](/zh-CN/docs/Web/API/SubtleCrypto/digest)名称的字符串。可以是以下值之一：
    - `SHA-256`：选择 [SHA-256](/zh-CN/docs/Web/API/SubtleCrypto/digest#支持的算法) 算法。
    - `SHA-384`：选择 [SHA-384](/zh-CN/docs/Web/API/SubtleCrypto/digest#支持的算法) 算法。
    - `SHA-512`：选择 [SHA-512](/zh-CN/docs/Web/API/SubtleCrypto/digest#支持的算法) 算法。

    > [!WARNING]
    > 此处也支持 `SHA-1`，但 [SHA-1](/zh-CN/docs/Web/API/SubtleCrypto/digest#支持的算法) 算法被认为是脆弱的，应该不再使用。

## 示例

参见 {{domxref("SubtleCrypto.importKey()")}} 的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

支持在 {{domxref("SubtleCrypto.importKey()")}} 或 {{domxref("SubtleCrypto.unwrapKey()")}} 方法中使用任何基于 RSA 算法的浏览器将会支持此类型。

## 参见

- {{domxref("SubtleCrypto.importKey()")}}
- {{domxref("SubtleCrypto.unwrapKey()")}}
