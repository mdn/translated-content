---
title: EcKeyGenParams
slug: Web/API/EcKeyGenParams
---

{{ APIRef("Web Crypto API") }}

[Web Crypto API](/ja/docs/Web/API/Web_Crypto_API) の辞書 **`EcKeyGenParams`** は、楕円曲線ベース、すなわちアルゴリズムとして [ECDSA](/en-US/docs/Web/API/SubtleCrypto/sign#ecdsa) または [ECDH](/en-US/docs/Web/API/SubtleCrypto/deriveKey#ecdh) を指定する鍵ペアを生成する際に {{domxref("SubtleCrypto.generateKey()")}} の引数 `algorithm` として渡すべきオブジェクトを表します。

## プロパティ

- `name`
  - : 文字列。使用したいアルゴリズムにより、`ECDSA` または `ECDH` に設定するべきです。
- `namedCurve`
  - : 使用する楕円曲線の名前を表す文字列です。以下の [NIST](https://www.nist.gov/) によって承認された曲線の名前のうちいずれかを指定できます。

    - `P-256`
    - `P-384`
    - `P-521`

## 例

{{domxref("SubtleCrypto.generateKey()")}} の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{domxref("SubtleCrypto.generateKey()")}} メソッドにおいてアルゴリズム "ECDH" または "ECDSA" をサポートしているブラウザーは、この型をサポートするはずです。

## 関連情報

- {{domxref("SubtleCrypto.generateKey()")}}
