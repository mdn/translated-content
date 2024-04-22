---
title: SubtleCrypto.deriveBits()
slug: Web/API/SubtleCrypto/deriveBits
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

{{domxref("SubtleCrypto")}} 接口的 **`deriveBits()`** 方法用于从一个基本密钥派生比特序列（数组）。

它以基本密钥、使用的派生算法和需要派生的比特长度为参数。返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，会兑现一个包含派生比特序列的 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)。

此方法与 [`SubtleCrypto.deriveKey()`](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey) 非常类似，区别在于 `deriveKey()` 返回的是 [`CryptoKey`](/zh-CN/docs/Web/API/CryptoKey) 对象，而不是 `ArrayBuffer`。本质上，`deriveKey()` 是由 `deriveBits()` 和 [`importKey()`](/zh-CN/docs/Web/API/SubtleCrypto/importKey) 这两个方法组合而成的。

该函数支持的派生算法与 `deriveKey()` 相同：ECDH、HKDF 和 PBKDF2。参见[支持的算法](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey#支持的算法)以了解这些算法的详细信息。

## 语法

```js-nolint
deriveBits(algorithm, baseKey, length)
```

### 参数

- `algorithm`
  - : 一个对象，用于定义使用的[派生算法](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey#支持的算法)。
    - 使用 [ECDH](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey#ecdh)，则传入 [`EcdhKeyDeriveParams`](/zh-CN/docs/Web/API/EcdhKeyDeriveParams) 对象。
    - 使用 [HKDF](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey#hkdf)，则传入 [`HkdfParams`](/zh-CN/docs/Web/API/HkdfParams) 对象。
    - 使用 [PBKDF2](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2)，则传入 [`Pbkdf2Params`](/zh-CN/docs/Web/API/Pbkdf2Params) 对象。
- `baseKey`
  - : 一个 {{domxref("CryptoKey")}}，表示派生算法的输入。如果算法（`algorithm`）是 ECDH，则该对象为 ECDH 的私钥。否则，它为派生函数的初始密钥材料（key material）：例如，对于 PBKDF2，它可能是一个密码（使用 [`SubtleCrypto.importKey()`](/zh-CN/docs/Web/API/SubtleCrypto/importKey) 导入为一个 `CryptoKey` 对象）。
- `length`
  - : 一个数字，表示要派生的比特位数。为了兼容所有浏览器，此数字应为 8 的倍数。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，会兑现一个包含派生的比特序列的 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)。

### 异常

当发生一下几种异常时，promise 会被拒绝：

- `OperationError` {{domxref("DOMException")}}
  - : 若 `deriveBits()` 的 _length_ 参数为 null，或在某些情况下如果 _length_ 参数不是 8 的倍数，则会抛出此异常。
- `InvalidAccessError` {{domxref("DOMException")}}
  - : 若基本密钥不是要求的派生算法的密钥，或 [`CryptoKey.usages`](/zh-CN/docs/Web/API/CryptoKey) 的值不包含 `deriveBits`，则会抛出此异常。
- `NotSupported` {{domxref("DOMException")}}
  - : 若尝试使用未知或不适用于派生的算法，则会抛出此异常。

## 支持的算法

参见 [`deriveKey()` 文档的支持的算法部分](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey#支持的算法)。

## 示例

> **备注：** 你可以在 GitHub 上[尝试可用的示例](https://mdn.github.io/dom-examples/web-crypto/derive-bits/index.html)。

### ECDH

在此示例中，Alice 和 Bob 分别生成了一个 ECDH 密钥对。

然后，我们使用 Alice 的私钥和 Bob 的公钥来派生一个共享密钥（shared secret）。[在 GitHub 上查看完整代码](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-bits/ecdh.js)。

```js
async function deriveSharedSecret(privateKey, publicKey) {
  const sharedSecret = await window.crypto.subtle.deriveBits(
    {
      name: "ECDH",
      namedCurve: "P-384",
      public: publicKey,
    },
    privateKey,
    128,
  );

  const buffer = new Uint8Array(sharedSecret, 0, 5);
  const sharedSecretValue = document.querySelector(".ecdh .derived-bits-value");
  sharedSecretValue.classList.add("fade-in");
  sharedSecretValue.addEventListener("animationend", () => {
    sharedSecretValue.classList.remove("fade-in");
  });
  sharedSecretValue.textContent = `${buffer}…[共 ${sharedSecret.byteLength} 字节]`;
}

// 生成两个 ECDH 密钥对：一个是 Alice 的，一个是 Bob 的
// 在正常的使用情况下，他们会单独生成密钥对，并安全地交换公钥。
const generateAlicesKeyPair = window.crypto.subtle.generateKey(
  {
    name: "ECDH",
    namedCurve: "P-384",
  },
  false,
  ["deriveBits"],
);

const generateBobsKeyPair = window.crypto.subtle.generateKey(
  {
    name: "ECDH",
    namedCurve: "P-384",
  },
  false,
  ["deriveBits"],
);

Promise.all([generateAlicesKeyPair, generateBobsKeyPair]).then((values) => {
  const alicesKeyPair = values[0];
  const bobsKeyPair = values[1];

  const deriveBitsButton = document.querySelector(".ecdh .derive-bits-button");
  deriveBitsButton.addEventListener("click", () => {
    // 然后 Alice 使用她的私钥和 Bob 的公钥生成一个密钥（secret）。
    // Bob 可以使用他的私钥和 Alice 的公钥来生成相同的密钥。
    deriveSharedSecret(alicesKeyPair.privateKey, bobsKeyPair.publicKey);
  });
});
```

### PBKDF2

在此示例中，我们要求用户提供密码，然后使用 PBKDF2 派生比特序列。[在 GitHub 上查看完整代码](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-bits/pbkdf2.js)。

```js
let salt;

/*
获取用于作为 deriveBits 方法的输入的密钥材料。
密钥材料是用户提供的密码。
*/
function getKeyMaterial() {
  const password = window.prompt("请输入你的密码");
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits", "deriveKey"],
  );
}

/*
通过用户提供的密码派生比特序列。
*/
async function getDerivedBits() {
  const keyMaterial = await getKeyMaterial();
  salt = window.crypto.getRandomValues(new Uint8Array(16));
  const derivedBits = await window.crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    256,
  );

  const buffer = new Uint8Array(derivedBits, 0, 5);
  const derivedBitsValue = document.querySelector(
    ".pbkdf2 .derived-bits-value",
  );
  derivedBitsValue.classList.add("fade-in");
  derivedBitsValue.addEventListener("animationend", () => {
    derivedBitsValue.classList.remove("fade-in");
  });
  derivedBitsValue.textContent = `${buffer}…[共 ${derivedBits.byteLength} 字节]`;
}

const deriveBitsButton = document.querySelector(".pbkdf2 .derive-bits-button");
deriveBitsButton.addEventListener("click", () => {
  getDerivedBits();
});
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
