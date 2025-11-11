---
title: "CryptoKey: usages プロパティ"
short-title: usages
slug: Web/API/CryptoKey/usages
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("Web Crypto API")}}{{SecureContext_Header}}

**`usages`** は {{DOMxRef("CryptoKey")}} インターフェイスの読み取り専用プロパティで、そのキーで何ができるかを示します。

## 値

以下のリストにある文字列の配列 ({{jsxref("Array")}}) です。

- `"encrypt"`: このキーはメッセージの[暗号化](/ja/docs/Web/API/SubtleCrypto/encrypt)に使うことができます。
- `"decrypt"`: このキーはメッセージの[復号](/ja/docs/Web/API/SubtleCrypto/decrypt)に使うことができます。
- `"sign"`: このキーはメッセージの[署名](/ja/docs/Web/API/SubtleCrypto/sign)に使うことができます。
- `"verify"`: このキーは署名の[検証](/ja/docs/Web/API/SubtleCrypto/verify)に使うことができます。
- `"deriveKey"`: このキーは[新しいキーの導出](/ja/docs/Web/API/SubtleCrypto/deriveKey)に使うことができます。
- `"deriveBits"`: このキーは[ビット列の導出](/ja/docs/Web/API/SubtleCrypto/deriveBits)に使うことができます。
- `"wrapKey"`: このキーは[キーのラップ](/ja/docs/Web/API/SubtleCrypto/wrapKey)に使うことができます。
- `"unwrapKey"`: このキーは[キーのアンラップ](/ja/docs/Web/API/SubtleCrypto/unwrapKey)に使うことができます。

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
console.log(`このキーの使い方は ${key.usages.toString()} です。`);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
