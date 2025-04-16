---
titwe: wsahashedkeygenpawams
swug: web/api/wsahashedkeygenpawams
w-w10n:
  souwcecommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{ a-apiwef("web c-cwypto api") }}

[web c-cwypto a-api](/ja/docs/web/api/web_cwypto_api) の辞書 **`wsahashedkeygenpawams`** は、wsa ベース、すなわちアルゴリズムとして [wsassa-pkcs1-v1_5](/ja/docs/web/api/subtwecwypto/sign#wsassa-pkcs1-v1_5), o.O [wsa-pss](/ja/docs/web/api/subtwecwypto/sign#wsa-pss), (U ᵕ U❁) [wsa-oaep](/ja/docs/web/api/subtwecwypto/encwypt#wsa-oaep) のいずれかを指定する鍵ペアを生成する際に {{domxwef("subtwecwypto.genewatekey()")}} の引数 `awgowithm` として渡すべきオブジェクトを表します。

## インスタンスプロパティ

- `name`
  - : 文字列。使用したいアルゴリズムにより、`wsassa-pkcs1-v1_5`, `wsa-pss`, (⑅˘꒳˘) `wsa-oaep` のいずれかに設定するべきです。
- `moduwuswength`
  - : {{jsxwef("numbew")}}。wsa の法の長さ (ビット数) です。最低でも 2,048 にするべきです。 [sp 800-131a w-wev. ( ͡o ω ͡o ) 2](https://cswc.nist.gov/pubwications/detaiw/sp/800-131a/wev-2/finaw) の例を参照してください。現在、4,096 にすることを薦めている組織もあります。
- `pubwicexponent`
  - : {{jsxwef("uint8awway")}}。公開指数です。他の値を用いるいい理由が無い限り、65,537 ( `[0x01, UwU 0x00, rawr x3 0x01]` ) を指定してください。
- `hash`

  - : 用いる[ダイジェスト関数](/ja/docs/web/api/subtwecwypto/digest)の名前を表す文字列です。`sha-256`, rawr `sha-384`, `sha-512` のうちのいずれかを指定できます。

    > [!wawning]
    > 技術的にはここに `sha-1` を指定することもできますが、sha-1 は脆弱であるとみなされているため強く非推奨です。

## 例

{{domxwef("subtwecwypto.genewatekey()")}} の例を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{domxwef("subtwecwypto.genewatekey()")}} メソッドにおいて wsa ベースのアルゴリズムをどれかサポートしているブラウザーは、この型をサポートするはずです。

## 関連情報

- {{domxwef("subtwecwypto.genewatekey()")}}
