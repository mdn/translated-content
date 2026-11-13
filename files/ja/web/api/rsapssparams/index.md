---
title: RsaPssParams
slug: Web/API/RsaPssParams
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("Web Crypto API") }}

[ウェブ暗号化 API](/ja/docs/Web/API/Web_Crypto_API) の **`RsaPssParams`** 辞書は、[RSA-PSS](/ja/docs/Web/API/SubtleCrypto/sign#rsa-pss) アルゴリズムを用いる際に {{domxref("SubtleCrypto.sign()")}} や {{domxref("SubtleCrypto.verify()")}} の引数 `algorithm` として渡すオブジェクトを表します。

## インスタンスプロパティ

- `name`
  - : 文字列です。`RSA-PSS` に設定してください。
- `saltLength`
  - : `long` 整数で、用いるランダムソルトのバイト数を表します。

    [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) では、「典型的なソルトの長さ」は 0 もしくは鍵の[生成](/ja/docs/Web/API/SubtleCrypto/generateKey)時に選択した[ダイジェストアルゴリズム](/ja/docs/Web/API/SubtleCrypto#対応しているアルゴリズム)の出力の長さだとしています。たとえば、ダイジェストアルゴリズムとして [SHA-256](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム) を用いる場合、32 となります。

    `saltLength` の最大値は、以下の式で求まります。

    ```js
    Math.ceil((keySizeInBits - 1) / 8) - digestSizeInBytes - 2;
    ```

    たとえば、鍵の長さが 2048 ビットでダイジェストの出力の長さが 32 バイトの場合、最大値は 222 となります。

## 例

{{domxref("SubtleCrypto.sign()")}} および {{domxref("SubtleCrypto.verify()")}} の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{domxref("SubtleCrypto.sign()")}} および {{domxref("SubtleCrypto.verify()")}} メソッドで "RSA-PSS" アルゴリズムに対応しているブラウザーは、この型に対応しているはずです。

## 関連情報

- [RFC 3447: RSASSA-PSS](https://datatracker.ietf.org/doc/html/rfc3447#section-8.1)
