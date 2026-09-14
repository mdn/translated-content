---
title: AesGcmParams
slug: Web/API/AesGcmParams
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("Web Crypto API") }}

[ウェブ暗号化 API](/ja/docs/Web/API/Web_Crypto_API) の **`AesGcmParams`** 辞書は、[AES-GCM](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) アルゴリズムを用いる際、{{domxref("SubtleCrypto.encrypt()")}}・{{domxref("SubtleCrypto.decrypt()")}}・{{domxref("SubtleCrypto.wrapKey()")}}・{{domxref("SubtleCrypto.unwrapKey()")}} の引数 `algorithm` に渡すオブジェクトを表します。

この引数に適切な値を設定する方法の詳細は、AES-GCM の仕様書 [NIST SP800-38D](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)、特に Input Data に関する section 5.2.1.1 を参照してください。

## インスタンスプロパティ

- `name`
  - : 文字列です。`AES-GCM` に設定してください。
- `iv`
  - : 初期化ベクトルを格納した、{{jsxref("ArrayBuffer")}}・{{jsxref("TypedArray")}}・{{jsxref("DataView")}} のいずれかです。これは、ある鍵で行う暗号化操作全てで一意である必要があります。言い換えると、同じ鍵では決して IV を再使用してはいけません。AES-GCM の仕様書では IV の長さは 96 ビットが推奨されており、通常は乱数生成器で生成したビット列を格納します。[仕様書の Section 8.2](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf#%5B%7B%22num%22%3A65%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C0%2C792%2Cnull%5D) に IV の構築方法の概要があります。なお、IV は秘密にする必要はなく、たとえば暗号化されたメッセージと一緒に平文で送信しても OK です。
- `additionalData` {{optional_inline}}
  - : {{jsxref("ArrayBuffer")}}・{{jsxref("TypedArray")}}・{{jsxref("DataView")}} のいずれかです。暗号化はしないが、暗号化したデータと一緒に認証を行う追加データを格納します。ここで `additionalData` を設定した場合は、対応する [`decrypt()`](/ja/docs/Web/API/SubtleCrypto/decrypt) を呼び出す際にも同じデータを設定しなければなりません。`decrypt()` を呼び出す際に渡したデータがもとのデータと一致しない場合は、復号操作は例外を投げます。これにより、紐づいたデータを暗号化せずに認証することができます。

    `additionalData` のビット数は、`2^64 - 1` より小さくなければなりません。

    `additionalData` プロパティは省略可能で、省略しても暗号化操作のセキュリティは損なわれません。

- `tagLength` {{optional_inline}}
  - : `Number` です。暗号化操作で生成され、対応する復号の際に認証に用いる認証タグのビット数を設定します。

    [Web Crypto API の仕様書](https://w3c.github.io/webcrypto/#aes-gcm-operations-encrypt)によれば、この値は 32, 64, 96, 104, 112, 120, 128 のいずれかでなければなりません。一方、AES-GCM の仕様書では 96, 104, 112, 120, 128 のいずれかにすることが推奨されていますが、アプリケーションによっては 32 または 64 ビットでもいいかもしれません。より詳しい指針は、"Recommendation for Block Cipher Modes of Operation" に関する NIST Publication の [Appendix C](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf#%5B%7B%22num%22%3A92%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C0%2C792%2Cnull%5D) を参照してください。

    `tagLength` は省略可能で、指定しない場合は 128 になります。

## 例

{{domxref("SubtleCrypto.encrypt()")}} および {{domxref("SubtleCrypto.decrypt()")}} の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{domxref("SubtleCrypto.encrypt()")}}・{{domxref("SubtleCrypto.decrypt()")}}・{{domxref("SubtleCrypto.wrapKey()")}}・{{domxref("SubtleCrypto.unwrapKey()")}} メソッドで "AES-GCM" アルゴリズムに対応しているブラウザーは、この型に対応しているはずです。

## 関連情報

- {{domxref("SubtleCrypto.encrypt()")}}
- {{domxref("SubtleCrypto.decrypt()")}}
- {{domxref("SubtleCrypto.wrapKey()")}}
- {{domxref("SubtleCrypto.unwrapKey()")}}
