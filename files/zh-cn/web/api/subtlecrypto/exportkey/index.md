---
title: SubtleCrypto.exportKey()
slug: Web/API/SubtleCrypto/exportKey
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

{{domxref("SubtleCrypto")}} 接口的 **`exportKey()`** 方法用于导出密钥。也就是说，它将一个 {{domxref("CryptoKey")}} 对象作为输入，并给出对应的外部可移植格式的密钥。

若要导出密钥，密钥的 {{domxref("CryptoKey.extractable")}} 必须设置为 `true`。

密钥可导出为多种格式：请参阅 [`SubtleCrypto.importKey()`](/zh-CN/docs/Web/API/SubtleCrypto/importKey) 页面[支持的格式](/zh-CN/docs/Web/API/SubtleCrypto/importKey#支持的格式)以获取详细信息。

密钥不会以加密的格式导出：要在导出密钥时对密钥进行加密，请使用
[`SubtleCrypto.wrapKey()`](/zh-CN/docs/Web/API/SubtleCrypto/wrapKey)
API 代替。

## 语法

```js-nolint
exportKey(format, key)
```

### 参数

- `format`
  - : 一个描述要导出的密钥格式的字符串。可为以下值之一：
    - `raw`：[Raw](/zh-CN/docs/Web/API/SubtleCrypto/importKey#raw) 格式。
    - `pkcs8`：[PKCS #8](/zh-CN/docs/Web/API/SubtleCrypto/importKey#pkcs_8) 格式。
    - `spki`：[SubjectPublicKeyInfo](/zh-CN/docs/Web/API/SubtleCrypto/importKey#subjectpublickeyinfo) 格式。
    - `jwk`：[JSON Web Key](/zh-CN/docs/Web/API/SubtleCrypto/importKey#json_web_key) 格式。
- `key`
  - : 要导出的 {{domxref("CryptoKey")}}。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

- 如果 `format` 为 `jwk`，则 promise 会兑现一个包含密钥的 JSON 对象。
- 否则，promise 将会兑现一个包含密钥的
  [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)。

### 异常

当发生以下几种异常时，promise 会被拒绝：

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 若尝试导出不可导出的密钥，则会抛出此异常。
- `NotSupported` {{domxref("DOMException")}}
  - : 若尝试导出为未知的格式，则会抛出此异常。
- {{jsxref("TypeError")}}
  - : 若尝试使用无效的格式，则会抛出此异常。

## 示例

> **备注：** 你可以在 GitHub 上[尝试可用的示例](https://mdn.github.io/dom-examples/web-crypto/export-key/index.html)。

### 导出为 Raw 格式

该示例将 AES 密钥导出为包含二进制密钥的 `ArrayBuffer`。[在 GitHub 上查看完整代码](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/raw.js)。

```js
/*
导出给定密钥，并将其写入“exported-key”的区域。
*/
async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey("raw", key);
  const exportedKeyBuffer = new Uint8Array(exported);

  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = `[${exportedKeyBuffer}]`;
}

/*
生成加密/解密密钥，
然后在“导出”按钮上设置事件监听器。
*/
window.crypto.subtle
  .generateKey(
    {
      name: "AES-GCM",
      length: 256,
    },
    true,
    ["encrypt", "decrypt"],
  )
  .then((key) => {
    const exportButton = document.querySelector(".raw");
    exportButton.addEventListener("click", () => {
      exportCryptoKey(key);
    });
  });
```

### 导出为 PKCS #8 格式

该示例将 RSA 私有签名密钥导出为 PKCS #8 对象。然后将导出的密钥编码为 PEM 格式。[在 GitHub 上查看完整代码](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/pkcs8.js)。

```js
/*
将 ArrayBuffer 转换为字符串
代码来自 https://developer.chrome.com/blog/how-to-convert-arraybuffer-to-and-from-string/
*/
function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

/*
导出给定密钥，并将其写入“exported-key”的区域。
*/
async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey("pkcs8", key);
  const exportedAsString = ab2str(exported);
  const exportedAsBase64 = window.btoa(exportedAsString);
  const pemExported = `-----BEGIN PRIVATE KEY-----\n${exportedAsBase64}\n-----END PRIVATE KEY-----`;

  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = pemExported;
}

/*
生成签名/验证密钥对，
然后在“导出”按钮上设置事件监听器。
*/
window.crypto.subtle
  .generateKey(
    {
      name: "RSA-PSS",
      // 考虑为要求保证长期安全性的系统使用 4096 位的密钥
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    true,
    ["sign", "verify"],
  )
  .then((keyPair) => {
    const exportButton = document.querySelector(".pkcs8");
    exportButton.addEventListener("click", () => {
      exportCryptoKey(keyPair.privateKey);
    });
  });
```

### 导出为 SubjectPublicKeyInfo 格式

该示例将 RSA 公开加密密钥导出为 PEM 编码的 SubjectPublicKeyInfo
对象。[在 GitHub 上查看完整代码](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/spki.js)。

```js
/*
将 ArrayBuffer 转换为字符串
代码来自 https://developer.chrome.com/blog/how-to-convert-arraybuffer-to-and-from-string/
*/
function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

/*
导出给定密钥，并将其写入“exported-key”的区域。
*/
async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey("spki", key);
  const exportedAsString = ab2str(exported);
  const exportedAsBase64 = window.btoa(exportedAsString);
  const pemExported = `-----BEGIN PUBLIC KEY-----\n${exportedAsBase64}\n-----END PUBLIC KEY-----`;

  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = pemExported;
}

/*
生成加密/解密密钥对，
然后在“导出”按钮上设置事件监听器。
*/
window.crypto.subtle
  .generateKey(
    {
      name: "RSA-OAEP",
      // 考虑为要求保证长期安全性的系统使用 4096 位的密钥
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    true,
    ["encrypt", "decrypt"],
  )
  .then((keyPair) => {
    const exportButton = document.querySelector(".spki");
    exportButton.addEventListener("click", () => {
      exportCryptoKey(keyPair.publicKey);
    });
  });
```

### 导出为 JSON Web Key 格式

该示例将 ECDSA 私有签名密钥导出为 JSON Web Key 对象。[在 GitHub 上查看完整代码](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/jwk.js)。

```js
/*
导出给定密钥，并将其写入“exported-key”的区域。
*/
async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey("jwk", key);
  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = JSON.stringify(exported, null, " ");
}

/*
生成签名/验证密钥对，
然后在“导出”按钮上设置事件监听器。
*/
window.crypto.subtle
  .generateKey(
    {
      name: "ECDSA",
      namedCurve: "P-384",
    },
    true,
    ["sign", "verify"],
  )
  .then((keyPair) => {
    const exportButton = document.querySelector(".jwk");
    exportButton.addEventListener("click", () => {
      exportCryptoKey(keyPair.privateKey);
    });
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`SubtleCrypto.importKey()`](/zh-CN/docs/Web/API/SubtleCrypto/importKey)
- [`SubtleCrypto.wrapKey()`](/zh-CN/docs/Web/API/SubtleCrypto/importKey)
- [PKCS #8 格式](https://datatracker.ietf.org/doc/html/rfc5208)。
- [SubjectPublicKeyInfo 格式](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1)。
- [JSON Web Key 格式](https://datatracker.ietf.org/doc/html/rfc7517)。
