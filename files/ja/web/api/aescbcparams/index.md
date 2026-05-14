---
title: AesCbcParams
slug: Web/API/AesCbcParams
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{ APIRef("Web Crypto API") }}

[ウェブ暗号化 API](/ja/docs/Web/API/Web_Crypto_API) の **`AesCbcParams`** 辞書は、[AES-CBC](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-cbc) アルゴリズムを用いる際、{{domxref("SubtleCrypto.encrypt()")}}・{{domxref("SubtleCrypto.decrypt()")}}・{{domxref("SubtleCrypto.wrapKey()")}}・{{domxref("SubtleCrypto.unwrapKey()")}} の引数 `algorithm` に渡すオブジェクトを表します。

## インスタンスプロパティ

- `name`
  - : 文字列です。`AES-CBC` に設定してください。
- `iv`
  - : {{jsxref("ArrayBuffer")}}・{{jsxref("TypedArray")}}・{{jsxref("DataView")}} のいずれかです。初期化ベクトルを表します。16 バイトで、予測不可能で、できれば暗号学的にランダムでなければなりません。とはいえ、秘密にする必要はありません。(たとえば、暗号文と一緒に暗号化せずに送信してもよいです)

## 例

{{domxref("SubtleCrypto.encrypt()")}} および {{domxref("SubtleCrypto.decrypt()")}} の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{domxref("SubtleCrypto.encrypt()")}}・{{domxref("SubtleCrypto.decrypt()")}}・{{domxref("SubtleCrypto.wrapKey()")}}・{{domxref("SubtleCrypto.unwrapKey()")}} メソッドで "AES-CBC" アルゴリズムに対応しているブラウザーは、この型に対応しているはずです。

## 関連情報

- CBC モードは [NIST SP800-38A standard](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D) の section 6.2 で定義されています。
- {{domxref("SubtleCrypto.encrypt()")}}
- {{domxref("SubtleCrypto.decrypt()")}}
- {{domxref("SubtleCrypto.wrapKey()")}}
- {{domxref("SubtleCrypto.unwrapKey()")}}
