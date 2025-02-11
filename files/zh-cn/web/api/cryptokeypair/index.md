---
title: CryptoKeyPair
slug: Web/API/CryptoKeyPair
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{APIRef("Web Crypto API")}}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`CryptoKeyPair`** 字典表示非对称加密算法（也称为公钥算法）中的一对密钥。

`CryptoKeyPair` 对象可以通过使用 {{domxref("SubtleCrypto.generateKey()")}} 方法获得，当选定的算法是以下非对称算法之一时：RSASSA-PKCS1-v1_5、RSA-PSS、RSA-OAEP、ECDSA 或 ECDH。

它包含两个属性，都是 [`CryptoKey`](/zh-CN/docs/Web/API/CryptoKey) 对象：`privateKey` 属性包含私钥，`publicKey` 属性包含公钥。

## 实例属性

- `CryptoKeyPair.privateKey`
  - : [`CryptoKey`](/zh-CN/docs/Web/API/CryptoKey) 对象表示私钥。对于加密和解密算法，该密钥用于解密。对于签名和验证算法，它用于签名。
- `CryptoKeyPair.publicKey`
  - : [`CryptoKey`](/zh-CN/docs/Web/API/CryptoKey) 对象表示公钥。对于加密和解密算法，该密钥用于加密，对于签名和验证算法，它用于验证签名。

## 示例

`SubtleCrypto` 方法的示例大多使用了 `CryptoKey` 对象。例如：

- [`SubtleCrypto.generateKey()`](/zh-CN/docs/Web/API/SubtleCrypto/generateKey)
- [`SubtleCrypto.deriveKey()`](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey)
- [`SubtleCrypto.importKey()`](/zh-CN/docs/Web/API/SubtleCrypto/importKey)
- [`SubtleCrypto.exportKey()`](/zh-CN/docs/Web/API/SubtleCrypto/exportKey)
- [`SubtleCrypto.wrapKey()`](/zh-CN/docs/Web/API/SubtleCrypto/wrapKey)
- [`SubtleCrypto.unwrapKey()`](/zh-CN/docs/Web/API/SubtleCrypto/unwrapKey)
- [`SubtleCrypto.encrypt()`](/zh-CN/docs/Web/API/SubtleCrypto/encrypt)
- [`SubtleCrypto.decrypt()`](/zh-CN/docs/Web/API/SubtleCrypto/decrypt)
- [`SubtleCrypto.sign()`](/zh-CN/docs/Web/API/SubtleCrypto/sign)
- [`SubtleCrypto.verify()`](/zh-CN/docs/Web/API/SubtleCrypto/verify)

## 规范

{{Specifications}}

## 参见

- {{domxref("SubtleCrypto.generateKey")}}
- {{domxref("SubtleCrypto.sign")}} 和 {{domxref("SubtleCrypto.verify")}}
- {{domxref("SubtleCrypto.encrypt")}} 和 {{domxref("SubtleCrypto.decrypt")}}
