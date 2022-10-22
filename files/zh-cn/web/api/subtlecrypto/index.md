---
title: SubtleCrypto
slug: Web/API/SubtleCrypto
---

{{APIRef("Web Crypto API")}}

基于[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API)的**SubtleCrypto** 接口提供了许多底层加密功能。它通过窗口上下文提供可用的{{domxref("Crypto.subtle")}} 属性来访问（通过{{domxref("Window.crypto")}}）。

> **警告：** 此 API 提供了许多底层加密源语。滥用他们很容易陷入微妙的陷阱中。
>
> 即使你正确的使用基础加密方法，也很难设计一套正确的安全密钥管理及整体安全设计方案，这些往往是安全专家的领域。
>
> 错误的安全系统设计和实现会使系统的安全性完全失效
>
> **如果你不知道此 API 能为你提供什么，则不应该使用该 API**

## 概览

我们可以将此 API 的功能分为两类：加密功能和密钥管理功能。

### 加密功能

这些函数你可以用来实现系统中的隐私和身份验证等安全功能。**SubtleCrypto** API 提供了如下加密函数：

- [`sign()`](/zh-CN/docs/Web/API/SubtleCrypto/sign) 、 [`verify()`](/zh-CN/docs/Web/API/SubtleCrypto/verify): 创建和验证数字签名。
- [`encrypt()`](/zh-CN/docs/Web/API/SubtleCrypto/encrypt) 和 [`decrypt()`](/zh-CN/docs/Web/API/SubtleCrypto/decrypt): 加密和解密数据。
- [`digest()`](/zh-CN/docs/Web/API/SubtleCrypto/digest)：为数据生成一个定长的，防碰撞的消息摘要。

### 密钥管理功能

除了 `digest()`，在 **SubtleCrypto** API 中所有加密功能都会使用密钥，并使用 CryptoKey 对象表示加密密钥。要执行签名和加密操作，请将 `CryptoKey` 对象传参给 `sign()` 或 `encrypt()` 函数。

#### 生成和派生密钥

[`generateKey()`](/zh-CN/docs/Web/API/SubtleCrypto/generateKey) 和 [`deriveKey()`](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey) 函数都可以创建一个新的 [`CryptoKey`](/zh-CN/docs/Web/API/CryptoKey) 对象。

不同之处在于 `generateKey()` 每次都会生成一个新的键值对，而 `deriveKey()` 通过从基础密钥资源中生成一个新的密钥。如果为两个独立的`deriveKey()`提供相同的基础密钥资源，那么你会获得两个具有相同基础值的 `CryptoKey` 对象。如果你想通过密码派生加密密钥，然后从相同的密码派生相同的密钥以解密数据，那么这将会非常有用。

#### 导入和导出密钥

要在应用程序外部使密钥可用，您需要导出密钥，`exportKey()` 可以为你提供该功能。你可以选择多种导出格式。

[`importKey()`](/zh-CN/docs/Web/API/SubtleCrypto/importKey)与 `exportKey()` 刚好相反。你可以从其他系统导入密钥，并且支持像 [PKCS #8](https://tools.ietf.org/html/rfc5208) 和 [JSON Web Key](https://tools.ietf.org/html/rfc7517) 这样可以帮助你执行此操作的标准格式。`exportKey()` 函数以非标准格式导出密钥。

如果密钥是敏感的，你需要使用 [`wrapKey()`](/zh-CN/docs/Web/API/SubtleCrypto/wrapKey), 该函数导出密钥并且使用另外一个密钥加密它。

`unwrapKey()` 与 `wrapKey()` 相反，该函数解密密钥后导入解密的密钥

#### 存储密钥

`CryptoKey`对象可以通过 [`structured clone algorithm`](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)来存储，这意味着你可以通过 web storage APIs 来存储和获取他们。更为规范的方式是通过使用[`IndexedDB API`](/zh-CN/docs/Web/API/IndexedDB_API) 来存储`CryptoKey`对象。

### 支持的算法

`Web Crypto API`提供的加密函数可以由一个或多个不同的加密算法执行：

函数可以通过参数来指定使用的算法。一些算法需要额外的参数，在这些情况下通过将算法参数作为对象字典传入额外的参数中实现。

下表总结了哪些算法适用于哪些加密操作：

|                   | [sign()](/zh-CN/docs/Web/API/SubtleCrypto/sign)[verify()](/zh-CN/docs/Web/API/SubtleCrypto/verify) | [encrypt()](/zh-CN/docs/Web/API/SubtleCrypto/encrypt)[decrypt()](/zh-CN/docs/Web/API/SubtleCrypto/decrypt) | [digest()](/zh-CN/docs/Web/API/SubtleCrypto/digest) | [deriveBits()](/zh-CN/docs/Web/API/SubtleCrypto/deriveBits)[deriveKey()](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey) | [wrapKey()](/zh-CN/docs/Web/API/SubtleCrypto/wrapKey)[unwrapKey()](/zh-CN/docs/Web/API/SubtleCrypto/unwrapKey) |
| ----------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| RSASSA-PKCS1-v1_5 | ✓                                                                                                  |                                                                                                            |                                                     |                                                                                                                      |                                                                                                                |
| RSA-PSS           | ✓                                                                                                  |                                                                                                            |                                                     |                                                                                                                      |                                                                                                                |
| ECDSA             | ✓                                                                                                  |                                                                                                            |                                                     |                                                                                                                      |                                                                                                                |
| HMAC              | ✓                                                                                                  |                                                                                                            |                                                     |                                                                                                                      |                                                                                                                |
| RSA-OAEP          |                                                                                                    | ✓                                                                                                          |                                                     |                                                                                                                      | ✓                                                                                                              |
| AES-CTR           |                                                                                                    | ✓                                                                                                          |                                                     |                                                                                                                      | ✓                                                                                                              |
| AES-CBC           |                                                                                                    | ✓                                                                                                          |                                                     |                                                                                                                      | ✓                                                                                                              |
| AES-GCM           |                                                                                                    | ✓                                                                                                          |                                                     |                                                                                                                      | ✓                                                                                                              |
| SHA-1             |                                                                                                    |                                                                                                            | ✓                                                   |                                                                                                                      |                                                                                                                |
| SHA-256           |                                                                                                    |                                                                                                            | ✓                                                   |                                                                                                                      |                                                                                                                |
| SHA-384           |                                                                                                    |                                                                                                            | ✓                                                   |                                                                                                                      |                                                                                                                |
| SHA-512           |                                                                                                    |                                                                                                            | ✓                                                   |                                                                                                                      |                                                                                                                |
| ECDH              |                                                                                                    |                                                                                                            |                                                     | ✓                                                                                                                    |                                                                                                                |
| HKDF              |                                                                                                    |                                                                                                            |                                                     | ✓                                                                                                                    |                                                                                                                |
| PBKDF2            |                                                                                                    |                                                                                                            |                                                     | ✓                                                                                                                    |                                                                                                                |
| AES-KW            |                                                                                                    |                                                                                                            |                                                     |                                                                                                                      | ✓                                                                                                              |

## 属性

_此接口既不继承也不实现任何属性。_

## 方法

_此接口不继承任何方法。_

- {{domxref("SubtleCrypto.encrypt()")}}
  - : 以算法、密钥、明文为参数，返回一个包含加密数据的 {{jsxref("Promise")}} 对象。
- {{domxref("SubtleCrypto.decrypt()")}}
  - : 以算法、密钥、密文为参数，返回一个包含解密数据的 {{jsxref("Promise")}} 对象。
- {{domxref("SubtleCrypto.sign()")}}
  - : 以文本、算法和密码为参数，返回一个包含签名的 {{jsxref("Promise")}}。
- {{domxref("SubtleCrypto.verify()")}}
  - : 以签名、与之匹配的文本、算法、密码为参数，验证签名的真实性，返回一个包含布尔型的 {jsxref("Promise")}} 对象。
- {{domxref("SubtleCrypto.digest()")}}
  - : 以生成摘要的算法和文本作为参数，返回一个包含数据摘要的 {{jsxref("Promise")}} 对象。
- {{domxref("SubtleCrypto.generateKey()")}}
  - : 以给出的用法和返可提取性作为参数，返回一个包含用于对称算法的新生成的 {{domxref("CryptoKey")}} 或者包含两个新的生成的密钥用于非对称加密的 {{domxref("CryptoKeyPair")}} 的 {{jsxref("Promise")}} 对象。
- {{domxref("SubtleCrypto.deriveKey()")}}
  - : 以从 master key 派生出来的密钥和特定的算法作为参数，返回一个包含新生成的 {{domxref("CryptoKey")}} 的 {{jsxref("Promise")}}对象。
- {{domxref("SubtleCrypto.deriveBits()")}}
  - : 以从 master key 派生出来的密钥和特定的算法作为参数，返回一个包含新生成的伪随机字节的 Buffer 的 {{jsxref("Promise")}} 对象。
- {{domxref("SubtleCrypto.importKey()")}}
  - : 以格式、算法、原始密钥数据、用途和可提取性作为参数，返回一个包含 {{domxref("CryptoKey")}} 的 {{jsxref("Promise")}} 对象。
- {{domxref("SubtleCrypto.exportKey()")}}
  - : 返回一个包含所请求格式的密钥的 Buffer 的 {{jsxref("Promise")}} 对象。
- {{domxref("SubtleCrypto.wrapKey()")}}
  - : 返回一个包含在不安全环境中使用（传输，存储）的包裹对称密钥的 {{jsxref("Promise")}} 对象。返回的被包裹的缓冲数据是按照参数中给出的格式的，包含使用给定算法的给予包装密钥包裹的密钥。
- {{domxref("SubtleCrypto.unwrapKey()")}}
  - : 返回一个包含对应于参数中给出的包裹密钥的 {{domxref("CryptoKey")}} 的 {{jsxref("Promise")}} 对象。

## 规范

{{Specifications}}

## 浏览器支持

{{Compat}}

## 另见

- {{domxref("Crypto")}} 和 {{domxref("Crypto.subtle")}}.
- [Crypto 101](https://www.crypto101.io/): an introductory course on cryptography.
