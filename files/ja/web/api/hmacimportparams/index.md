---
title: HmacImportParams
slug: Web/API/HmacImportParams
l10n:
  sourceCommit: 63774786a6abccda8e70ad62429aa39571aba878
---

{{ APIRef("Web Crypto API") }}

[ウェブ暗号化 API](/ja/docs/Web/API/Web_Crypto_API) の **`HmacImportParams`** 辞書は、[HMAC](/ja/docs/Web/API/SubtleCrypto/sign#hmac) アルゴリズム用の鍵のインポート・アンラップ・導出を行う際、以下の引数として渡すオブジェクトを表します。

- {{domxref("SubtleCrypto.importKey()")}} の引数 `algorithm`
- {{domxref("SubtleCrypto.unwrapKey()")}} の引数 `unwrappedKeyAlgorithm`
- {{domxref("SubtleCrypto.deriveKey()")}} の引数 `derivedKeyType`

## インスタンスプロパティ

- `name`
  - : 文字列です。`HMAC` に設定してください。
- `hash`
  - : 文字列、または単一の文字列値プロパティ `name` を持つオブジェクトです。これは、用いる[ダイジェストアルゴリズム](/ja/docs/Web/API/SubtleCrypto/digest)を表す識別子です。以下のいずれかを設定してください。
    - `SHA-256`: [SHA-256](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム) アルゴリズムを選択します。
    - `SHA-384`: [SHA-384](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム) アルゴリズムを選択します。
    - `SHA-512`: [SHA-512](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム) アルゴリズムを選択します。

    > [!WARNING]
    > `SHA-1` にも対応していますが、[SHA-1](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム) アルゴリズムは脆弱とされており、もう使用しないべきです。

- `length` {{optional_inline}}
  - : 鍵の長さ (ビット数) を表す `Number` です。省略した場合、鍵の長さは選択したダイジェスト関数により生成されるダイジェストの長さと等しくなります。他の長さを用いる良い理由が無いのであれば、このプロパティを省略し、デフォルト値を使用してください。

## 例

{{domxref("SubtleCrypto.importKey()")}}・{{domxref("SubtleCrypto.unwrapKey()")}}・{{domxref("SubtleCrypto.deriveKey()")}} の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{domxref("SubtleCrypto.importKey()")}}・{{domxref("SubtleCrypto.unwrapKey()")}}・{{domxref("SubtleCrypto.deriveKey()")}} メソッドで "HMAC" アルゴリズムに対応しているブラウザーは、この型に対応しているはずです。

## 関連情報

- {{domxref("SubtleCrypto.importKey()")}}
- {{domxref("SubtleCrypto.unwrapKey()")}}
- {{domxref("SubtleCrypto.deriveKey()")}}
