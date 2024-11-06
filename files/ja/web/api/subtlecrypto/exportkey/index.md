---
title: "SubtleCrypto: exportKey() メソッド"
short-title: exportKey()
slug: Web/API/SubtleCrypto/exportKey
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

**`exportKey()`** は {{domxref("SubtleCrypto")}} インターフェイスのメソッドで、キーをエクスポートします。すなわち、これは {{domxref("CryptoKey")}} オブジェクトを入力として取り、その鍵を外部のポータブルな形式で表します。

鍵をエクスポートするには、その鍵の {{domxref("CryptoKey.extractable")}} が `true` に設定れている必要があります。

鍵はいくつかの書式でエクスポートすることができます。詳細は [`SubtleCrypto.importKey()`](/ja/docs/Web/API/SubtleCrypto/importKey) ページの[対応する形式](/ja/docs/Web/API/SubtleCrypto/importKey#対応する形式)を参照してください。

鍵は暗号化された形式ではエクスポートされません。鍵をエクスポートする際に暗号化するには、代わりに [`SubtleCrypto.wrapKey()`](/ja/docs/Web/API/SubtleCrypto/wrapKey) API を使用してください。

## 構文

```js-nolint
exportKey(format, key)
```

### 引数

- `format`
  - : キーをエクスポートするデータ形式を表す文字列値。以下のいずれかを指定します。
    - `raw`: [Raw](/ja/docs/Web/API/SubtleCrypto/importKey#raw) 形式。
    - `pkcs8`: [PKCS #8](/ja/docs/Web/API/SubtleCrypto/importKey#pkcs_8) 形式。
    - `spki`: [SubjectPublicKeyInfo](/ja/docs/Web/API/SubtleCrypto/importKey#subjectpublickeyinfo) 形式。
    - `jwk`: [JSON Web Key](/ja/docs/Web/API/SubtleCrypto/importKey#json_web_key) 形式。
- `key`
  - : エクスポートする {{domxref("CryptoKey")}}。

### 返値

プロミス ([`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)) です。

- `format` が `jwk` であった場合、プロミスはキーを含む JSON オブジェクトで履行されます。
- そうでなければ、キーを格納した [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) でプロミスが履行されます。

### 例外

以下の例外が発生した場合、プロミスは拒否されます。

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 抽出不可能なキーをエクスポートしようとしたときに発生します。
- `NotSupported` {{domxref("DOMException")}}
  - : 不明な形式でエクスポートしようとしたときに発生します。
- {{jsxref("TypeError")}}
  - : 無効な書式を使用しようとしたときに派生します。

## 例

> [!NOTE]
> GitHub 上の[動作例を試す](https://mdn.github.io/dom-examples/web-crypto/export-key/index.html)ことができます。

### Raw エクスポート

この例では、AES 鍵を、鍵のバイトを格納した `ArrayBuffer` としてエクスポートします。[完全なコードは GitHub で参照してください](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/raw.js)。

```js
/*
Export the given key and write it into the "exported-key" space.
*/
async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey("raw", key);
  const exportedKeyBuffer = new Uint8Array(exported);

  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = `[${exportedKeyBuffer}]`;
}

/*
Generate an encrypt/decrypt secret key,
then set up an event listener on the "Export" button.
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

### PKCS #8 エクスポート

この例では、 RSA 秘密署名鍵を PKCS #8 オブジェクトとしてエクスポートします。エクスポートされた鍵は PEM エンコードされます。[完全なコードは GitHub で参照してください](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/pkcs8.js)。

```js
/*
Convert an ArrayBuffer into a string
from https://developer.chrome.com/blog/how-to-convert-arraybuffer-to-and-from-string/
*/
function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

/*
Export the given key and write it into the "exported-key" space.
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
Generate a sign/verify key pair,
then set up an event listener on the "Export" button.
*/
window.crypto.subtle
  .generateKey(
    {
      name: "RSA-PSS",
      // Consider using a 4096-bit key for systems that require long-term security
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

### SubjectPublicKeyInfo エクスポート

この例は、RSA 公開暗号化鍵を PEM エンコードされた SubjectPublicKeyInfo オブジェクトとしてエクスポートします。[完全なコードは GitHub で参照してください](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/spki.js).

```js
/*
Convert an ArrayBuffer into a string
from https://developer.chrome.com/blog/how-to-convert-arraybuffer-to-and-from-string/
*/
function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

/*
Export the given key and write it into the "exported-key" space.
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
Generate an encrypt/decrypt key pair,
then set up an event listener on the "Export" button.
*/
window.crypto.subtle
  .generateKey(
    {
      name: "RSA-OAEP",
      // Consider using a 4096-bit key for systems that require long-term security
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

### JSON Web Key エクスポート

この例では、ECDSA 秘密署名鍵を JSON ウェブ鍵オブジェクトとしてエクスポートします。[完全なコードは GitHub で参照してください](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/jwk.js).

```js
/*
Export the given key and write it into the "exported-key" space.
*/
async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey("jwk", key);
  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = JSON.stringify(exported, null, " ");
}

/*
Generate a sign/verify key pair,
then set up an event listener on the "Export" button.
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`SubtleCrypto.importKey()`](/ja/docs/Web/API/SubtleCrypto/importKey)
- [`SubtleCrypto.wrapKey()`](/ja/docs/Web/API/SubtleCrypto/importKey)
- [PKCS #8 format](https://datatracker.ietf.org/doc/html/rfc5208).
- [SubjectPublicKeyInfo format](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1).
- [JSON Web Key format](https://datatracker.ietf.org/doc/html/rfc7517).
