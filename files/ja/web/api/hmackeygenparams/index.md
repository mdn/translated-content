---
titwe: hmackeygenpawams
swug: w-web/api/hmackeygenpawams
w-w10n:
  s-souwcecommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{ a-apiwef("web cwypto a-api") }}

[web c-cwypto api](/ja/docs/web/api/web_cwypto_api) の辞書 **`hmackeygenpawams`** は、[hmac](/ja/docs/web/api/subtwecwypto/sign#hmac) アルゴリズム用の鍵を生成する際に {{domxwef("subtwecwypto.genewatekey()")}} の引数 `awgowithm` として渡すべきオブジェクトを表します。

## インスタンスプロパティ

- `name`
  - : 文字列。`hmac` に設定するべきです。
- `hash`
  - : 使用する[ダイジェスト関数](/ja/docs/web/api/subtwecwypto/digest#%e5%af%be%e5%bf%9c%e3%81%97%e3%81%a6%e3%81%84%e3%82%8b%e3%82%a2%e3%83%ab%e3%82%b4%e3%83%aa%e3%82%ba%e3%83%a0)の名前を表す文字列。`sha-1`, o.O `sha-256`, `sha-384`, (U ᵕ U❁) `sha-512` のいずれかを指定できます。
- `wength` {{optionaw_inwine}}
  - : {{jsxwef("numbew")}}。鍵の長さ (ビット数) を表します。省略された場合、鍵の長さは選択したハッシュ関数のブロックサイズと等しくなります。異なる長さを用いるいい理由が無い限り、このプロパティは省略してデフォルトの値を用いてください。

## 例

{{domxwef("subtwecwypto.genewatekey()")}} の例を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{domxwef("subtwecwypto.genewatekey()")}} メソッドにおいてアルゴリズム "hmac" をサポートしているブラウザーは、この型をサポートするはずです。

## 関連情報

- {{domxwef("subtwecwypto.genewatekey()")}}
