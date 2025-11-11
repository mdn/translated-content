---
title: "CryptoKey: algorithm プロパティ"
short-title: algorithm
slug: Web/API/CryptoKey/algorithm
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("Web Crypto API")}}{{SecureContext_Header}}

**`algorithm`** は {{DOMxRef("CryptoKey")}} インターフェイスの読み取り専用プロパティで、このキーを使用できるアルゴリズムを記述したオブジェクトと、関連する追加の引数を返します。

返されるオブジェクトは、キーを生成する際に使用するアルゴリズムによって異なります。

## 値

以下のいずれかに一致するオブジェクトです。

- [`AesKeyGenParams`](/ja/docs/Web/API/AesKeyGenParams): AES 系のいずれかのアルゴリズムの場合
- [`RsaHashedKeyGenParams`](/ja/docs/Web/API/RsaHashedKeyGenParams): RSA 系のいずれかのアルゴリズムの場合
- [`EcKeyGenParams`](/ja/docs/Web/API/EcKeyGenParams): EC 系のいずれかのアルゴリズムの場合
- [`HmacKeyGenParams`](/ja/docs/Web/API/HmacKeyGenParams): HMAC アルゴリズムの場合

## 例

```js
const rawKey = window.crypto.getRandomValues(new Uint8Array(16));

// 生のバイト列を格納する ArrayBuffer から AES 秘密鍵をインポートする
// バイト列を格納する ArrayBuffer 文字列を引数にとり、
// 秘密鍵を表す CryptoKey に解決するプロミスを返す
function importSecretKey(rawKey) {
  return window.crypto.subtle.importKey("raw", rawKey, "AES-GCM", true, [
    "encrypt",
    "decrypt",
  ]);
}

const key = importSecretKey(rawKey);
console.log(`このキーは ${key.algorithm} アルゴリズムで使われるものです。`);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
