---
title: SubtleCrypto.digest()
slug: Web/API/SubtleCrypto/digest
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

{{domxref("SubtleCrypto")}} 接口的 **`digest()`** 方法生成给定数据的{{Glossary("digest", "摘要")}}。摘要是从一些可变长的输入生成的短且具有固定长度的值。密码摘要应表现出抗冲突性，这意味着很难构造出具有相同摘要值的两个不同的输入。

它以使用的摘要算法的标识符和计算摘要的数据为参数。并返回一个 {{jsxref("Promise")}}，会兑现数据的摘要值。

## 语法

```js-nolint
digest(algorithm, data)
```

### 参数

- `algorithm`
  - : 可以是一个字符串或一个仅有 `name` 字符串属性的对象。该字符串为使用的哈希函数的名称。支持的值有：
    - `"SHA-1"`（请不要在加密应用程序中使用它）
    - `"SHA-256"`
    - `"SHA-384"`
    - `"SHA-512"`
- `data`
  - : 一个包含将计算摘要的数据的 {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}} 或 {{jsxref("DataView")}} 对象。

### 返回值

一个 {{jsxref("Promise")}}，会兑现一个包含摘要值的 {{jsxref("ArrayBuffer")}}。

## 支持的算法

摘要算法（也称为[加密哈希函数](/zh-CN/docs/Glossary/Cryptographic_hash_function)）将任意长度的数据块转换为固定长度的输出（通常比输入短得多）。其在密码学中有多种应用。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">算法</th>
      <th scope="col">输出长度（比特）</th>
      <th scope="col">块大小（比特）</th>
      <th scope="col">规范</th>
    </tr>
    <tr>
      <th scope="row">SHA-1</th>
      <td>160</td>
      <td>512</td>
      <td>
        <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf"
          >FIPS 180-4</a
        > 第 6.1 节
      </td>
    </tr>
    <tr>
      <th scope="row">SHA-256</th>
      <td>256</td>
      <td>512</td>
      <td>
        <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf"
          >FIPS 180-4</a
        > 第 6.2 节
      </td>
    </tr>
    <tr>
      <th scope="row">SHA-384</th>
      <td>384</td>
      <td>1024</td>
      <td>
        <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf"
          >FIPS 180-4</a
        > 第 6.5 节
      </td>
    </tr>
    <tr>
      <th scope="row">SHA-512</th>
      <td>512</td>
      <td>1024</td>
      <td>
        <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf"
          >FIPS 180-4</a
        > 第 6.4 节
      </td>
    </tr>
  </tbody>
</table>

> **警告：** 现在，SHA-1 被认为是易受攻击的，不应将其用于加密应用程序。

> **备注：** 如果你在寻找如何创建密钥散列消息认证码（[HMAC](/zh-CN/docs/Glossary/HMAC)），则需要改用 [SubtleCrypto.sign()](/zh-CN/docs/Web/API/SubtleCrypto/sign#hmac) 方法。

## 示例

### 基本示例

此示例对消息进行编码，然后计算其 SHA-256 摘要，并打印摘要长度：

```js
const text =
  "An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.";

async function digestMessage(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return hash;
}

digestMessage(text).then((digestBuffer) =>
  console.log(digestBuffer.byteLength),
);
```

### 将摘要转换为十六进制字符串

摘要以 `ArrayBuffer` 的形式返回，但为了进行比较和显示，通常会使用十六进制（hex）字符串的形式表示。此示例计算摘要，然后将 `ArrayBuffer` 转换为十六进制字符串：

```js
const text =
  "An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.";

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message); // 编码为（utf-8）Uint8Array
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // 计算消息的哈希值
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // 将缓冲区转换为字节数组
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // 将字节数组转换为十六进制字符串
  return hashHex;
}

digestMessage(text).then((digestHex) => console.log(digestHex));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

> **备注：** Chrome 60 添加了对非 TLS 连接禁用 crypto.subtle 的特性。

## 参见

- [SubtleCrypto 的非加密用途](/zh-CN/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto)
- [Chromium 安全来源规范](https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features/)
- [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf) 规定了 SHA 系列的摘要算法。
