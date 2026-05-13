---
title: HkdfParams
slug: Web/API/HkdfParams
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{ APIRef("Web Crypto API") }}

[Web Crypto API](/ja/docs/Web/API/Web_Crypto_API) の **`HkdfParams`** 辞書は、[HKDF](/ja/docs/Web/API/SubtleCrypto/deriveKey#hkdf) アルゴリズムを用いる際、{{domxref("SubtleCrypto.deriveKey()")}} の引数 `algorithm` として渡すオブジェクトを表します。

## インスタンスプロパティ

- `name`
  - : 文字列です。`HKDF` に設定してください。
- `hash`
  - : 文字列、もしくは単一の文字列値プロパティ `name` を持つオブジェクトです。これは用いる[ダイジェストアルゴリズム](/ja/docs/Web/API/SubtleCrypto/digest)を表す識別子です。以下のいずれかを指定してください。
    - `SHA-256`: [SHA-256](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム) アルゴリズムを選択します。
    - `SHA-384`: [SHA-384](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム) アルゴリズムを選択します。
    - `SHA-512`: [SHA-512](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム) アルゴリズムを選択します。

    > [!WARNING]
    > `SHA-1` にも対応していますが、[SHA-1](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム) アルゴリズムは脆弱とされており、もう使用しないべきです。

- `salt`
  - : {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} のいずれかです。[HKDF の仕様書](https://datatracker.ietf.org/doc/html/rfc5869)では、salt を加えることで「HKDF の強度を大幅に向上させる」としています。salt は、ダイジェスト関数の出力と同じ長さのランダム値または疑似ランダム値とするのが理想です。`deriveKey()` に渡す入力キーマテリアルと違って、salt は秘密にしておく必要はありません。
- `info`
  - : {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} のいずれかで、アプリケーション固有のコンテキスト情報を表します。これにより、導出される鍵をアプリケーションやコンテキストに紐づけ、入力キーマテリアルが同じでも異なるコンテキスト用に異なるキーを導出できるようになります。これは、入力キーマテリアル自体とは独立にするのが重要です。このプロパティは必須ですが、空のバッファーを使用できます。

## 例

{{domxref("SubtleCrypto.deriveKey()")}} の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{domxref("SubtleCrypto.deriveKey()")}} メソッドで "HKDF" アルゴリズムに対応しているブラウザーは、この型に対応しているはずです。

## 関連情報

- {{domxref("SubtleCrypto.deriveKey()")}}
