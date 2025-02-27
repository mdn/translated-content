---
title: HmacImportParams
slug: Web/API/HmacImportParams
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ APIRef("Web Crypto API") }}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`HmacImportParams`** 字典表示当为 [HMAC](/zh-CN/docs/Web/API/SubtleCrypto/sign#hmac) 算法生成密钥时，应该以 `algorithm` 参数传递给 {{domxref("SubtleCrypto.importKey()")}} 或 {{domxref("SubtleCrypto.unwrapKey()")}} 的对象。

## 实例属性

- `name`
  - : 一个字符串，应设置为 `HMAC`。
- `hash`

  - : 表示要使用的[摘要函数](/zh-CN/docs/Web/API/SubtleCrypto/digest#支持的算法)的字符串。可以取值为 `SHA-256`、`SHA-384` 或 `SHA-512`。

    > [!WARNING]
    > 从技术上讲，虽然你可以在这里传递 `SHA-1`，但强烈建议不要这样做，因为它被认为是脆弱的。

- `length` {{optional_inline}}
  - : 一个表示密钥位长度的 `Number`。如果省略此属性，则密钥的长度将等于所选摘要函数生成的摘要的长度。除非你有充分的理由使用不同的长度，否则请省略此属性并使用默认值。

## 示例

参见 {{domxref("SubtleCrypto.importKey()")}} 的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

支持 {{domxref("SubtleCrypto.importKey()")}}、{{domxref("SubtleCrypto.unwrapKey()")}} 方法的“HMAC”算法的浏览器将会支持此类型。

## 参见

- {{domxref("SubtleCrypto.importKey()")}}
- {{domxref("SubtleCrypto.unwrapKey()")}}
