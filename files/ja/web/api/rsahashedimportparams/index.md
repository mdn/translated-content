---
title: RsaHashedImportParams
slug: Web/API/RsaHashedImportParams
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{ APIRef("Web Crypto API") }}

[ウェブ暗号化 API](/ja/docs/Web/API/Web_Crypto_API) の **`RsaHashedImportParams`** 辞書は、何らかの RSA ベースの鍵ペアをインポートする際、すなわち [RSASSA-PKCS1-v1_5](/ja/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5)・[RSA-PSS](/ja/docs/Web/API/SubtleCrypto/sign#rsa-pss)・[RSA-OAEP](/ja/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) のいずれかで表されるアルゴリズムを用いる際、{{domxref("SubtleCrypto.importKey()")}} や {{domxref("SubtleCrypto.unwrapKey()")}} の引数 `algorithm` として渡すオブジェクトを表します。

## インスタンスプロパティ

- `name`
  - : 文字列です。使用するアルゴリズムに応じて、`RSASSA-PKCS1-v1_5`・`RSA-PSS`・`RSA-OAEP` のいずれかを設定してください。
- `hash`
  - : 文字列、もしくは単一の文字列値プロパティ `name` を持つオブジェクトです。これは用いる[ダイジェストアルゴリズム](/ja/docs/Web/API/SubtleCrypto/digest)の識別子です。以下のいずれかを設定します。
    - `SHA-256`: [SHA-256](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム) アルゴリズムを選択します。
    - `SHA-384`: [SHA-384](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム) アルゴリズムを選択します。
    - `SHA-512`: [SHA-512](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム) アルゴリズムを選択します。

    > [!WARNING]
    > `SHA-1` にも対応していますが、[SHA-1](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム) アルゴリズムは脆弱とされており、もう使用しないべきです。

## 例

{{domxref("SubtleCrypto.importKey()")}} の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{domxref("SubtleCrypto.importKey()")}} または {{domxref("SubtleCrypto.unwrapKey()")}} メソッドで何らかの RSA ベースのアルゴリズムに対応しているブラウザーは、この型に対応しているはずです。

## 関連情報

- {{domxref("SubtleCrypto.importKey()")}}
- {{domxref("SubtleCrypto.unwrapKey()")}}
