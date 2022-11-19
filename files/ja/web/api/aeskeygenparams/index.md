---
title: AesKeyGenParams
slug: Web/API/AesKeyGenParams
---

{{ APIRef("Web Crypto API") }}

[Web Crypto API](/ja/docs/Web/API/Web_Crypto_API) の辞書 **`AesKeyGenParams`** は、AES 鍵、すなわちアルゴリズムとして [AES-CBC](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-cbc), [AES-CTR](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-GCM](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm), [AES-KW](/en-US/docs/Web/API/SubtleCrypto/wrapKey#aes-kw) のいずれかを指定する鍵を生成する際に {{domxref("SubtleCrypto.generateKey()")}} の引数 `algorithm` として渡すべきオブジェクトを表します。

## プロパティ

- `name`
  - : 文字列。使用したいアルゴリズムにより、`AES-CBC`, `AES-CTR`, `AES-GCM`, `AES-KW` のいずれかに設定するべきです。
- `length`
  - : {{jsxref("Number")}}。生成する鍵の長さ (ビット数) です。128, 192, 256 のいずれかでなければなりません。

## 例

{{domxref("SubtleCrypto.generateKey()")}} の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{domxref("SubtleCrypto.generateKey()")}} メソッドにおいて AES ベースのアルゴリズムをどれかサポートしているブラウザは、この型をサポートするはずです。

## 関連情報

- {{domxref("SubtleCrypto.generateKey()")}}
