---
title: HmacKeyGenParams
slug: Web/API/HmacKeyGenParams
l10n:
  sourceCommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{ APIRef("Web Crypto API") }}

[Web Crypto API](/ja/docs/Web/API/Web_Crypto_API) の辞書 **`HmacKeyGenParams`** は、[HMAC](/ja/docs/Web/API/SubtleCrypto/sign#hmac) アルゴリズム用の鍵を生成する際に {{domxref("SubtleCrypto.generateKey()")}} の引数 `algorithm` として渡すべきオブジェクトを表します。

## インスタンスプロパティ

- `name`
  - : 文字列。`HMAC` に設定するべきです。
- `hash`
  - : 使用する[ダイジェスト関数](/ja/docs/Web/API/SubtleCrypto/digest#%E5%AF%BE%E5%BF%9C%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)の名前を表す文字列。`SHA-1`, `SHA-256`, `SHA-384`, `SHA-512` のいずれかを指定できます。
- `length` {{optional_inline}}
  - : {{jsxref("Number")}}。鍵の長さ (ビット数) を表します。省略された場合、鍵の長さは選択したハッシュ関数のブロックサイズと等しくなります。異なる長さを用いるいい理由が無い限り、このプロパティは省略してデフォルトの値を用いてください。

## 例

{{domxref("SubtleCrypto.generateKey()")}} の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{domxref("SubtleCrypto.generateKey()")}} メソッドにおいてアルゴリズム "HMAC" をサポートしているブラウザーは、この型をサポートするはずです。

## 関連情報

- {{domxref("SubtleCrypto.generateKey()")}}
