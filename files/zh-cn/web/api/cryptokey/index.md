---
title: CryptoKey
slug: Web/API/CryptoKey
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`CryptoKey`** 接口表示从特定 {{domxref("SubtleCrypto")}} 方法（{{domxref("SubtleCrypto.generateKey", "generateKey()")}}、{{domxref("SubtleCrypto.deriveKey", "deriveKey()")}}、{{domxref("SubtleCrypto.importKey", "importKey()")}} 或 {{domxref("SubtleCrypto.unwrapKey", "unwrapKey()")}}）导出的{{glossary("key", "密钥")}}。

出于安全考虑，`CryptoKey` 接口仅在[安全上下文](/zh-CN/docs/Web/Security/Secure_Contexts)中可用。

## 实例属性

- `CryptoKey.type`

  - : 返回一个表示密钥类型的字符串，可使用以下值：

    - `"secret"`：为密钥（secret key），用于{{Glossary("Symmetric-key cryptography", "对称加密算法")}}。
    - `"private"`：为{{Glossary("Public-key cryptography", "非对称加密算法")}}的 [`CryptoKeyPair`](/zh-CN/docs/Web/API/CryptoKeyPair) 的密钥（private key）部分。
    - `"public"`：为{{Glossary("Public-key cryptography", "非对称加密算法")}}的 [`CryptoKeyPair`](/zh-CN/docs/Web/API/CryptoKeyPair) 的公钥（public key）部分。

- `CryptoKey.extractable`

  - : 一个布尔值，表示原始信息是否能使用 [`SubtleCrypto.exportKey()`](/zh-CN/docs/Web/API/SubtleCrypto/exportKey) 或 [`SubtleCrypto.wrapKey()`](/zh-CN/docs/Web/API/SubtleCrypto/wrapKey) 导出。

    - `true`：密钥可以导出。
    - `false`：密钥不能导出。使用 [`exportKey()`](/zh-CN/docs/Web/API/SubtleCrypto/exportKey) 或 [`wrapKey()`](/zh-CN/docs/Web/API/SubtleCrypto/wrapKey) 方法来导出此密钥将会抛出异常。

- `CryptoKey.algorithm`

  - : 一个描述可使用此密钥的算法及任何关联的额外参数的对象。

    - [`AesKeyGenParams`](/zh-CN/docs/Web/API/AesKeyGenParams) 如果算法是任意高级加密标准（AES）的变体。
    - [`RsaHashedKeyGenParams`](/zh-CN/docs/Web/API/RsaHashedKeyGenParams) 如果算法是任意 RSA 的变体。
    - [`EcKeyGenParams`](/zh-CN/docs/Web/API/EcKeyGenParams) 如果算法是任意椭圆曲线加密算法（EC）的变体。
    - [`HmacKeyGenParams`](/zh-CN/docs/Web/API/HmacKeyGenParams) 如果算法是任意密钥散列消息认证码（HMAC）的变体。

- `CryptoKey.usages`

  - : 一个字符串的{{jsxref("Array", "数组", "", 1)}}，指明密钥的用途。数组元素可能的值有：

    - `"encrypt"`：密钥可用于{{domxref("SubtleCrypto.encrypt()", "加密", "", 1)}}消息。
    - `"decrypt"`：密钥可用于{{domxref("SubtleCrypto.decrypt()", "解密", "", 1)}}消息。
    - `"sign"`：密钥可用于对消息进行{{domxref("SubtleCrypto.sign()", "签名", "", 1)}}。
    - `"verify"`：密钥可用于{{domxref("SubtleCrypto.verify()", "验证", "", 1)}}签名。
    - `"deriveKey"`：密钥可用于{{domxref("SubtleCrypto.deriveKey()", "派生新的密钥", "", 1)}}。
    - `"deriveBits"`：密钥可用于{{domxref("SubtleCrypto.deriveBits()", "派生比特序列", "", 1)}}。
    - `"wrapKey"`：密钥可被{{domxref("SubtleCrypto.wrapKey()", "包装", "", 1)}}。
    - `"unwrapKey"`：密钥可被{{domxref("SubtleCrypto.unwrapKey()", "解包装", "", 1)}}。

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

## 浏览器兼容性

{{Compat}}

## 参见

- [Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API)
- [Web 安全](/zh-CN/docs/Web/Security)
- [隐私、权限和信息安全](/zh-CN/docs/Web/Privacy)
- {{domxref("Crypto")}} 和 {{domxref("Crypto.subtle")}}。
