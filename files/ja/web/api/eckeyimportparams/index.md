---
title: EcKeyImportParams
slug: Web/API/EcKeyImportParams
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("Web Crypto API") }}

[ウェブ暗号化 API](/ja/docs/Web/API/Web_Crypto_API) の **`EcKeyImportParams`** 辞書は、楕円曲線ベースの鍵ペアを生成する際、すなわち [ECDSA](/ja/docs/Web/API/SubtleCrypto/sign#ecdsa) または [ECDH](/ja/docs/Web/API/SubtleCrypto/deriveKey#ecdh) アルゴリズムを用いる際に {{domxref("SubtleCrypto.importKey()")}} や {{domxref("SubtleCrypto.unwrapKey()")}} の引数 `algorithm` として渡すオブジェクトを表します。

## インスタンスプロパティ

- `name`
  - : 文字列です。用いたいアルゴリズムに応じて `ECDSA` または `ECDH` に設定してください。
- `namedCurve`
  - : 用いる楕円曲線の名前を表す文字列です。[NIST](https://www.nist.gov/) で認められた曲線を表す以下のいずれかの名前を指定できます。
    - `P-256`
    - `P-384`
    - `P-521`

## 例

{{domxref("SubtleCrypto.importKey()")}} の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{domxref("SubtleCrypto.importKey()")}} または {{domxref("SubtleCrypto.wrapKey()")}} メソッドで "ECDH" または "ECDSA" アルゴリズムに対応しているブラウザーは、この型に対応しているはずです。

## 関連情報

- {{domxref("SubtleCrypto.importKey()")}}
- {{domxref("SubtleCrypto.unwrapKey()")}}
