---
title: SubtleCrypto.deriveKey()
slug: Web/API/SubtleCrypto/deriveKey
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

{{domxref("SubtleCrypto")}} 接口的 **`deriveKey()`** 方法用于从主密钥派生密钥。

它以基本密钥、使用的派生算法和派生密钥所需的属性为参数。返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，会兑现一个表示新密钥的 {{domxref("CryptoKey")}} 对象。

值得注意的是，你可以使用的三种密钥派生算法有截然不同的特性，而适用于截然不同的情况。参见[支持的算法](#支持的算法)以获取详细信息。

## 语法

```js-nolint
deriveKey(algorithm, baseKey, derivedKeyAlgorithm, extractable, keyUsages)
```

### 参数

- `algorithm`
  - : 一个对象，用于指定使用的[派生算法](#支持的算法)。
    - 使用 [ECDH](#ecdh)，则传入 [`EcdhKeyDeriveParams`](/zh-CN/docs/Web/API/EcdhKeyDeriveParams) 对象。
    - 使用 [HKDF](#hkdf)，则传入 [`HkdfParams`](/zh-CN/docs/Web/API/HkdfParams) 对象。
    - 使用 [PBKDF2](#pbkdf2)，则传入 [`Pbkdf2Params`](/zh-CN/docs/Web/API/Pbkdf2Params) 对象。
- `baseKey`
  - : 一个 {{domxref("CryptoKey")}}，表示派生算法的输入。如果算法（`algorithm`）为 ECDH，则该对象为 ECDH 的私钥。否则，它为派生函数的初始密钥材料（key material）：例如，对于 PBKDF2，它可能是一个密码（使用 [`SubtleCrypto.importKey()`](/zh-CN/docs/Web/API/SubtleCrypto/importKey) 导入为一个 `CryptoKey` 对象）。
- `derivedKeyAlgorithm`
  - : 一个用于派生密钥算法的对象。
    - 对于 [HMAC](/zh-CN/docs/Web/API/SubtleCrypto/sign#hmac)：传入 [`HmacKeyGenParams`](/zh-CN/docs/Web/API/HmacKeyGenParams) 对象。
    - 对于 [AES-CTR](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-ctr)、[AES-CBC](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-cbc)、[AES-GCM](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) 或 [AES-KW](/zh-CN/docs/Web/API/SubtleCrypto/wrapKey#aes-kw)：传入 [`AesKeyGenParams`](/zh-CN/docs/Web/API/AesKeyGenParams) 对象。
- `extractable`
  - : 一个布尔值，表示是否可以使用 {{domxref("SubtleCrypto.exportKey()")}} 或 {{domxref("SubtleCrypto.wrapKey()")}} 来导出密钥。
- `keyUsages`
  - : 一个{{jsxref("Array", "数组", "", 1)}}，表示派生出来的密钥的用途。注意，密钥的用法必须是 `derivedKeyAlgorithm` 设置的算法所允许的。数组元素可能的值有：
    - `encrypt`：密钥可用于{{domxref("SubtleCrypto.encrypt()", "加密", "", 1)}}消息。
    - `decrypt`：密钥可用于{{domxref("SubtleCrypto.decrypt()", "解密", "", 1)}}消息。
    - `sign`：密钥可用于对消息进行{{domxref("SubtleCrypto.sign()", "签名", "", 1)}}。
    - `verify`：密钥可用于{{domxref("SubtleCrypto.verify()", "验证", "", 1)}}签名。
    - `deriveKey`：密钥可用于{{domxref("SubtleCrypto.deriveKey()", "派生新的密钥", "", 1)}}。
    - `deriveBits`：密钥可用于{{domxref("SubtleCrypto.deriveBits()", "派生比特序列", "", 1)}}。
    - `wrapKey`：密钥可用于{{domxref("SubtleCrypto.wrapKey()", "包装一个密钥", "", 1)}}。
    - `unwrapKey`：密钥可用于{{domxref("SubtleCrypto.unwrapKey()", "解开一个密钥的包装", "", 1)}}。

### 返回值

一个 {{jsxref("Promise")}}，会兑现一个 {{domxref("CryptoKey")}}。

### 异常

当发生一下几种异常时，promise 会被拒绝：

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 若主密钥与要求的派生算法所使用的密钥类型不匹配，或密钥的 `keyUsages` 的值中不包含 `deriveKey`，则会抛出此异常。
- `NotSupported` {{domxref("DOMException")}}
  - : 若尝试使用未知或不适用于派生的算法，或用于派生密钥的算法（algorithm）没有定义密钥长度（key length），则会抛出此异常。
- `SyntaxError` {{domxref("DOMException")}}
  - : 若 `keyUsages` 是空的，而解包装密钥的类型是 `secret` 或 `private`，则抛出此异常。

## 支持的算法

`deriveKey()` 支持的三种算法各有特点而适用于不同的场合。

### ECDH

ECDH（椭圆曲线迪菲—赫尔曼密钥交换，Elliptic Curve Diffie-Hellman）是一种*密钥协商算法*。它使每个人都能拥有用于生成共享密钥的 ECDH 公钥/私钥对：即，密钥仅在两人之间共享（而不包括其他人）。然后他们可以使用这个共享密钥作为对称密钥来保护他们的通信，或可以使用密钥来作为派生同类密钥（例如，使用 HKDF 算法）的输入。

ECDH 的规范定于 [RFC 6090](https://datatracker.ietf.org/doc/html/rfc6090)。

### HKDF

HKDF 是一种*密钥派生函数*。它被用于从一些熵值相对较高的输入（如 ECDH 密钥协商操作的输出）派生密钥材料。

它并*非*用于从熵值相对较低的输入（例如密码）派生密钥。对于此种用途，请使用 PBKDF2。

HKDF 的规范定于 [RFC 5869](https://datatracker.ietf.org/doc/html/rfc5869)。

### PBKDF2

PBKDF2 也是一种*密钥派生函数*。它被用于从一些熵值相对较低的输入（例如密码）派生密钥材料。它通过将例如 HMAC 等函数以及加盐（salt）操作等一起应用到输入密码上，并多次重复此过程来派生密钥材料。这个过程重复的次数越多，密钥推导计算的成本就越高：这使得攻击者难以使用字典攻击这类暴力破解的方法来找出密钥。

PBKDF2 的规范定于 [RFC 2898](https://datatracker.ietf.org/doc/html/rfc2898)。

## 示例

> **备注：** 你可以在 GitHub 上[尝试可用的示例](https://mdn.github.io/dom-examples/web-crypto/derive-key/index.html)。

### ECDH

在此示例中，Alice 和 Bob 分别生成了一个 ECDH 密钥对，然后相互交换公钥。并使用 `deriveKey()` 来派生一个可用于加密消息的共享 AES 密钥。[在 GitHub 上查看完整代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/ecdh.js)

```js
/*
派生 AES 密钥，需要提供：
- 自己的 ECDH 私钥
- 对方的 ECDH 公钥
*/
function deriveSecretKey(privateKey, publicKey) {
  return window.crypto.subtle.deriveKey(
    {
      name: "ECDH",
      public: publicKey,
    },
    privateKey,
    {
      name: "AES-GCM",
      length: 256,
    },
    false,
    ["encrypt", "decrypt"],
  );
}

async function agreeSharedSecretKey() {
  // 生成两个 ECDH 密钥对：一个是 Alice 的，一个是 Bob 的
  // 在正常的使用情况下，他们会单独生成密钥对，并安全地交换公钥。
  let alicesKeyPair = await window.crypto.subtle.generateKey(
    {
      name: "ECDH",
      namedCurve: "P-384",
    },
    false,
    ["deriveKey"],
  );

  let bobsKeyPair = await window.crypto.subtle.generateKey(
    {
      name: "ECDH",
      namedCurve: "P-384",
    },
    false,
    ["deriveKey"],
  );

  // 然后 Alice 使用她的私钥和 Bob 的公钥生成密钥（secret key）。
  let alicesSecretKey = await deriveSecretKey(
    alicesKeyPair.privateKey,
    bobsKeyPair.publicKey,
  );

  // Bob 使用他的私钥和 Alice 的公钥来生成相同的密钥。
  let bobsSecretKey = await deriveSecretKey(
    bobsKeyPair.privateKey,
    alicesKeyPair.publicKey,
  );

  // Alice 可以使用她的密钥拷贝来加密发送给 Bob 的消息。
  let encryptButton = document.querySelector(".ecdh .encrypt-button");
  encryptButton.addEventListener("click", () => {
    encrypt(alicesSecretKey);
  });

  // Bob 可以使用他的拷贝来解密消息。
  let decryptButton = document.querySelector(".ecdh .decrypt-button");
  decryptButton.addEventListener("click", () => {
    decrypt(bobsSecretKey);
  });
}
```

### PBKDF2

在此示例中，我们要求用户提供密码，然后使用 PBKDF2 派生 AES 密钥，并使用 AES 密钥来加密消息。
[在 GitHub 上查看完整代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/pbkdf2.js)

```js
/*
获取用于作为 deriveKey 方法的输入的密钥材料。
密钥材料是用户提供的密码。
*/
function getKeyMaterial() {
  const password = window.prompt("请输入你的密码");
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveBits", "deriveKey"],
  );
}

async function encrypt(plaintext, salt, iv) {
  const keyMaterial = await getKeyMaterial();
  const key = await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"],
  );

  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HKDF 规范](https://datatracker.ietf.org/doc/html/rfc5869)。
- [NIST 基于密码的密钥派生指南](https://csrc.nist.gov/publications/detail/sp/800-132/final)。
- [密码存储备忘录](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)。
- [关于为 PBKDF2 选择迭代计数器的建议](https://security.stackexchange.com/questions/3959/recommended-of-iterations-when-using-pbkdf2-sha256/3993#3993)。
