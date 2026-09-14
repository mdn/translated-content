---
title: AesDerivedKeyParams
slug: Web/API/AesDerivedKeyParams
l10n:
  sourceCommit: 63774786a6abccda8e70ad62429aa39571aba878
---

{{ APIRef("Web Crypto API") }}

[ウェブ暗号化 API](/ja/docs/Web/API/Web_Crypto_API) の **`AesDerivedKeyParams`** 辞書は、AES 鍵を導出するとき、すなわち [AES-CBC](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-cbc)・[AES-CTR](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-ctr)・[AES-GCM](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-gcm)・[AES-KW](/ja/docs/Web/API/SubtleCrypto/wrapKey#aes-kw) のいずれかで表されるアルゴリズムを用いるとき、{{domxref("SubtleCrypto.deriveKey()")}} の引数 `derivedKeyType` として渡すオブジェクトを表します。

## インスタンスプロパティ

- `name`
  - : 文字列です。用いるアルゴリズムに合わせて `AES-CBC`・`AES-CTR`・`AES-GCM`・`AES-KW` のいずれかに設定してください。
- `length`
  - : `Number` で、生成する鍵の長さ (ビット数) を表します。128・192・256 のいずれかでなければなりません。

## 例

{{domxref("SubtleCrypto.deriveKey()")}} の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{domxref("SubtleCrypto.deriveKey()")}} メソッドで AES ベースのアルゴリズムに対応しているブラウザーは、この型に対応しているはずです。

## 関連情報

- {{domxref("SubtleCrypto.generateKey()")}}
