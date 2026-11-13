---
title: EcdsaParams
slug: Web/API/EcdsaParams
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{ APIRef("Web Crypto API") }}

[ウェブ暗号化 API](/ja/docs/Web/API/Web_Crypto_API) の **`EcdsaParams`** 辞書は、[ECDSA](/ja/docs/Web/API/SubtleCrypto/sign#ecdsa) アルゴリズムを用いる際、{{domxref("SubtleCrypto.sign()")}} や {{domxref("SubtleCrypto.verify()")}} の引数 `algorithm` として渡すオブジェクトを表します。

## インスタンスプロパティ

- `name`
  - : 文字列です。`ECDSA` に設定してください。
- `hash`
  - : 文字列、または単一の文字列値プロパティ `name` を持つオブジェクトです。これは、用いる[ダイジェストアルゴリズム](/ja/docs/Web/API/SubtleCrypto/digest)を表す識別子です。以下のいずれかを設定してください。
    - `SHA-256`: [SHA-256](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム) アルゴリズムを選択します。
    - `SHA-384`: [SHA-384](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム) アルゴリズムを選択します。
    - `SHA-512`: [SHA-512](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム) アルゴリズムを選択します。

    > [!WARNING]
    > `SHA-1` にも対応していますが、[SHA-1](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム) アルゴリズムは脆弱とされており、もう使用しないべきです。

## 例

{{domxref("SubtleCrypto.sign()")}} や {{domxref("SubtleCrypto.verify()")}} の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{domxref("SubtleCrypto.sign()")}} および {{domxref("SubtleCrypto.verify()")}} メソッドで "ECDSA" アルゴリズムに対応しているブラウザーは、この型に対応しているはずです。

{{Compat}}

## 関連情報

- {{domxref("SubtleCrypto.sign()")}} と {{domxref("SubtleCrypto.verify()")}}
