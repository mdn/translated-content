---
title: Pbkdf2Params
slug: Web/API/Pbkdf2Params
l10n:
  sourceCommit: a516a9818e8cef06c626d436ee1d73fc6d87ec51
---

{{ APIRef("Web Crypto API") }}

[ウェブ暗号化 API](/ja/docs/Web/API/Web_Crypto_API) の **`Pbkdf2Params`** 辞書は、[PBKDF2](/ja/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2) アルゴリズムを用いる際に {{domxref("SubtleCrypto.deriveKey()")}} の引数 `algorithm` に渡すオブジェクトを表します。

## インスタンスプロパティ

- `name`
  - : 文字列です。`PBKDF2` に設定してください。
- `hash`
  - : 文字列、または単一の文字列値プロパティ `name` を持つオブジェクトです。これは、用いる[ダイジェストアルゴリズム](/ja/docs/Web/API/SubtleCrypto/digest)を表す識別子です。以下のいずれかを設定してください。
    - `SHA-256`: [SHA-256](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム) アルゴリズムを選択します。
    - `SHA-384`: [SHA-384](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム) アルゴリズムを選択します。
    - `SHA-512`: [SHA-512](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム) アルゴリズムを選択します。

    > [!WARNING]
    > `SHA-1` はほとんどの暗号アプリケーションでは脆弱とされていますが、PBKDF2 ではまだ安全とされています。とはいえ、全ての使用を移行することが推奨されるので、`SHA-1` を使う必要がなければ使わないでください。かわりに他のダイジェストアルゴリズムを使用してください。

- `salt`
  - : {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} のいずれかです。16 バイト以上のランダム値または疑似ランダム値を設定するべきです。[`deriveKey()`](/ja/docs/Web/API/SubtleCrypto/deriveKey) に渡す入力キーマテリアルと違って、`salt` は秘密にしておく必要はありません。
- `iterations`
  - : `Number` で、`deriveKey()` 内でハッシュ関数を実行する回数を表します。これにより、`deriveKey()` の処理の計算コストがどのくらい高くなるか (すなわち、遅くなるか) を決定します。ここでは、攻撃者が鍵に対して辞書攻撃を行う際のコストが上がるため、遅いことは良いことです。一般的な助言としては、アプリケーションのパフォーマンスが許容できる範囲で、できるだけ多い回数を用いてください。

## 例

{{domxref("SubtleCrypto.deriveKey()")}} の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{domxref("SubtleCrypto.deriveKey()")}} メソッドで "PBKDF2" アルゴリズムに対応しているブラウザーは、この型に対応しているはずです。

## 関連情報

- {{domxref("SubtleCrypto.deriveKey()")}}
