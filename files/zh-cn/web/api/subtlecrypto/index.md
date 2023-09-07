---
title: SubtleCrypto
slug: Web/API/SubtleCrypto
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`SubtleCrypto`** 接口提供了许多底层加密函数。你可以通过 {{domxref("crypto_property", "crypto")}} 属性提供的 {{domxref("Crypto")}} 对象中的 {{domxref("Crypto.subtle", "subtle")}} 属性来访问 `SubtleCrypto` 的相关特性。

> **警告：** 此 API 提供了许多底层密码学原语。滥用它们很容易陷入微妙的陷阱中。
>
> 即使你正确地运用了基础加密方法，也很难设计一套正确的安全密钥管理及整体安全设计方案，这些往往是安全专家所做的事情。
>
> 错误的安全系统设计和实现会使系统的安全性完全失效。
>
> 你可以学习并进行实验，但我们并不能保证这些内容的安全性，最好有熟悉该领域的人对你的相关工作进行彻底的审查以保证其安全性。如果你要学习安全系统的设计和部署，可以学习 [Crypto 101 课程](https://www.crypto101.io/)。

## 实例属性

_此接口没有任何父接口，因此没有继承任何属性。_

## 实例方法

_此接口没有任何父接口，因此没有继承任何方法。_

- {{domxref("SubtleCrypto.encrypt()")}}
  - : 返回一个 {{jsxref("Promise")}}，会兑现与参数中给定的明文、算法和密钥对应的密文。
- {{domxref("SubtleCrypto.decrypt()")}}
  - : 返回一个 {{jsxref("Promise")}}，会兑现与参数中给定的密文、算法和密钥对应的明文。
- {{domxref("SubtleCrypto.sign()")}}
  - : 返回一个 {{jsxref("Promise")}}，会兑现与参数中给定的文本、算法和密钥对应的签名。
- {{domxref("SubtleCrypto.verify()")}}
  - : 返回一个 {{jsxref("Promise")}}，会兑现一个布尔值，表示参数中给定的签名是否与文本、密钥和算法对应的签名相匹配。
- {{domxref("SubtleCrypto.digest()")}}
  - : 返回一个 {{jsxref("Promise")}}，会兑现通过参数中给定的算法和文本生成的摘要。
- {{domxref("SubtleCrypto.generateKey()")}}
  - : 返回一个 {{jsxref("Promise")}}，会兑现一个新生成的{{domxref("CryptoKey", "密钥", "", 1)}}（用于对称加密算法）或{{domxref("CryptoKeyPair", "密钥对", "", 1)}}（用于非对称加密算法）。它们与通过参数给定的算法、用法和可导出性相对应。
- {{domxref("SubtleCrypto.deriveKey()")}}
  - : 返回一个 {{jsxref("Promise")}}，会兑现一个新生成的、从主密钥（以过参数给定的算法）派生出来的{{domxref("CryptoKey", "密钥", "", 1)}}。
- {{domxref("SubtleCrypto.deriveBits()")}}
  - : 返回一个 {{jsxref("Promise")}}，会兑现一个新生成的、从主密钥（以通过参数给定的算法）派生出来的伪随机比特序列。
- {{domxref("SubtleCrypto.importKey()")}}
  - : 返回一个 {{jsxref("Promise")}}，会兑现一个新生成的{{domxref("CryptoKey", "密钥", "", 1)}}，该密钥与通过参数给定的密钥格式、算法、原始密钥数据、用法和可导出性相对应。
- {{domxref("SubtleCrypto.exportKey()")}}
  - : 返回一个 {{jsxref("Promise")}}，会兑现一个包含所请求格式的密钥的原始密钥数据。
- {{domxref("SubtleCrypto.wrapKey()")}}
  - : 返回一个 {{jsxref("Promise")}}，会兑现一个包装的对称密钥，该密钥可在不安全的环境中使用（传输、存储）。该密钥与通过参数给定的格式相匹配，并使用制定的算法来包装给定的密钥。
- {{domxref("SubtleCrypto.unwrapKey()")}}
  - : 返回一个 {{jsxref("Promise")}}，会兑现一个与通过参数给定的包装密钥（wrapped key）对应的{{domxref("CryptoKey", "密钥", "", 1)}}。

## 使用 SubtleCrypto

我们可以将此 API 的实现函数分为两类：加密函数和密钥管理函数。

### 加密函数

这些函数你可以用来实现系统中的隐私和身份验证等安全特性。`SubtleCrypto` API 提供了如下加密函数：

- {{DOMxRef("SubtleCrypto.sign","sign()")}} 和 {{DOMxRef("SubtleCrypto.verify","verify()")}}：创建和验证数字签名。
- {{DOMxRef("SubtleCrypto.encrypt","encrypt()")}} 和 {{DOMxRef("SubtleCrypto.decrypt","decrypt()")}}：加密和解密数据。
- {{DOMxRef("SubtleCrypto.digest","digest()")}}：生成某些数据的定长、防碰撞的消息摘要。

### 密钥管理函数

除了 {{DOMxRef("SubtleCrypto.digest","digest()")}}，`SubtleCrypto` API 中所有加密函数都会使用密钥，并使用 {{DOMxRef("CryptoKey")}} 对象表示加密密钥。要执行签名和加密操作，请将 {{DOMxRef("CryptoKey")}} 对象传参给 {{DOMxRef("SubtleCrypto.sign","sign()")}} 或 {{DOMxRef("SubtleCrypto.encrypt","encrypt()")}} 函数。

#### 生成和派生密钥

{{DOMxRef("SubtleCrypto.generateKey","generateKey()")}} 和 {{DOMxRef("SubtleCrypto.deriveKey","deriveKey()")}} 函数都可以创建一个新的 {{DOMxRef("CryptoKey")}} 对象。

不同之处在于 `generateKey()` 每次都会生成一个新的键值对，而 `deriveKey()` 通过基础密钥资源派生一个新的密钥。如果为两个独立的 `deriveKey()` 函数调用提供相同的基础密钥资源，那么你会获得两个具有相同基础值的 `CryptoKey` 对象。如果你想通过密码派生加密密钥，然后从相同的密码派生相同的密钥以解密数据，那么这将会非常有用。

#### 导入和导出密钥

要在应用程序外部使密钥可用，你需要导出密钥，{{DOMxRef("SubtleCrypto.exportKey","exportKey()")}} 可以为你提供该功能。你可以选择多种导出格式。

{{DOMxRef("SubtleCrypto.importKey","importKey()")}} 与 `exportKey()` 刚好相反。你可以从其他系统导入密钥，并且支持像 [PKCS #8](https://datatracker.ietf.org/doc/html/rfc5208) 和 [JSON Web Key](https://datatracker.ietf.org/doc/html/rfc7517) 这样可以帮助你执行此操作的标准格式。`exportKey()` 函数以非加密格式导出密钥。

如果密钥是敏感的，你应该使用 {{DOMxRef("SubtleCrypto.wrapKey","wrapKey()")}}，该函数导出密钥并且使用另外一个密钥加密它。此类 API 调用被称为“密钥包装密钥”（key-wrapping key）。

{{DOMxRef("SubtleCrypto.unwrapKey","unwrapKey()")}} 与 `wrapKey()` 相反，该函数解密密钥后导入解密的密钥。

#### 存储密钥

`CryptoKey` 对象可以通过[结构化克隆算法](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)来存储，这意味着你可以通过 web storage API 来存储和获取它们。更为规范的方式是通过使用 [IndexedDB API](/zh-CN/docs/Web/API/IndexedDB_API) 来存储 `CryptoKey` 对象。

### 支持的算法

Web Crypto API 提供的加密函数可以由一个或多个不同的*加密算法*执行：函数可以通过 `algorithm` 参数来指定使用的算法。一些算法需要额外的参数，在这些情况下可以将 `algorithm` 参数作为对象字典传入额外的参数。

下表总结了哪些算法适用于哪些加密操作：

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">
        <a href="/zh-CN/docs/Web/API/SubtleCrypto/sign">sign()</a><br /><a
          href="/zh-CN/docs/Web/API/SubtleCrypto/verify"
          >verify()</a
        >
      </th>
      <th scope="col">
        <a href="/zh-CN/docs/Web/API/SubtleCrypto/encrypt">encrypt()</a><br /><a
          href="/zh-CN/docs/Web/API/SubtleCrypto/decrypt"
          >decrypt()</a
        >
      </th>
      <th scope="col">
        <a href="/zh-CN/docs/Web/API/SubtleCrypto/digest">digest()</a>
      </th>
      <th scope="col">
        <a href="/zh-CN/docs/Web/API/SubtleCrypto/deriveBits">deriveBits()</a
        ><br /><a href="/zh-CN/docs/Web/API/SubtleCrypto/deriveKey"
          >deriveKey()</a
        >
      </th>
      <th scope="col">
        <a href="/zh-CN/docs/Web/API/SubtleCrypto/wrapKey">wrapKey()</a><br /><a
          href="/zh-CN/docs/Web/API/SubtleCrypto/unwrapKey"
          >unwrapKey()</a
        >
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">RSASSA-PKCS1-v1_5</th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">RSA-PSS</th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">ECDSA</th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">HMAC</th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">RSA-OAEP</th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row">AES-CTR</th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row">AES-CBC</th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row">AES-GCM</th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row">SHA-1</th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">SHA-256</th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">SHA-384</th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">SHA-512</th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">ECDH</th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">HKDF</th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">PBKDF2</th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AES-KW</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API)
- [SubtleCrypto 的非加密用途](/zh-CN/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto)
- [Web 安全](/zh-CN/docs/Web/Security)
- [隐私、权限和信息安全](/zh-CN/docs/Web/Privacy)
- {{domxref("Crypto")}} 和 {{domxref("Crypto.subtle")}}。
- [Crypto 101](https://www.crypto101.io/)：密码学入门课程。
