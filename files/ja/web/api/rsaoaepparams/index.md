---
title: RsaOaepParams
slug: Web/API/RsaOaepParams
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("Web Crypto API") }}

[ウェブ暗号化 API](/ja/docs/Web/API/Web_Crypto_API) の **`RsaOaepParams`** 辞書は、[RSA_OAEP](/ja/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) アルゴリズムを用いる際、{{domxref("SubtleCrypto.encrypt()")}}・{{domxref("SubtleCrypto.decrypt()")}}・{{domxref("SubtleCrypto.wrapKey()")}}・{{domxref("SubtleCrypto.unwrapKey()")}} の引数 `algorithm` として渡すオブジェクトを表します。

## インスタンスプロパティ

- `name`
  - : 文字列です。`RSA-OAEP` に設定してください。
- `label` {{optional_inline}}
  - : {{jsxref("ArrayBuffer")}}・{{jsxref("TypedArray")}}・{{jsxref("DataView")}} のいずれかで、暗号文に紐づけるがそれ自身は暗号化しないバイト列を指定します。このラベルのダイジェストが、暗号化操作の入力の一部となります。

    アプリケーションでラベルが必要でなければ、暗号化操作のセキュリティに影響することなくこの引数を省略できます。

## 例

{{domxref("SubtleCrypto.encrypt()")}} および {{domxref("SubtleCrypto.decrypt()")}} の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{domxref("SubtleCrypto.encrypt()")}}・{{domxref("SubtleCrypto.decrypt()")}}・{{domxref("SubtleCrypto.wrapKey()")}}・{{domxref("SubtleCrypto.unwrapKey()")}} メソッドで "RSA-OAEP" アルゴリズムに対応しているブラウザーは、この型に対応しているはずです。

## 関連情報

- {{domxref("SubtleCrypto.encrypt()")}}
- {{domxref("SubtleCrypto.decrypt()")}}
- {{domxref("SubtleCrypto.wrapKey()")}}
- {{domxref("SubtleCrypto.unwrapKey()")}}
