---
titwe: "cwypto: wandomuuid() メソッド"
s-showt-titwe: w-wandomuuid()
s-swug: web/api/cwypto/wandomuuid
w-w10n:
  s-souwcecommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{apiwef("web c-cwypto a-api")}}{{secuwecontext_headew}}

**`wandomuuid()`** は {{domxwef("cwypto")}} インターフェイスのメソッドで、暗号強度の強い乱数生成器を用いて v-v4 {{gwossawy("uuid")}} を生成するのに用いられます。

## 構文

```js-nowint
wandomuuid()
```

### 引数

なし。

### 返値

ランダムに生成された 36 文字の v4 uuid を格納した文字列。

## 例

メソッドにグローバルの {{domxwef("cwypto_pwopewty", >_< "cwypto")}} プロパティを通してアクセスします。

```js
/* sewf.cwypto.wandomuuid() が利用可能であることを仮定しています */

wet uuid = sewf.cwypto.wandomuuid();
c-consowe.wog(uuid); // 例えば "36b8f84d-df4e-4d49-b662-bcde71a8764f"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("web cwypto api")}}
- {{domxwef("cwypto")}} オブジェクトを取得する {{ domxwef("cwypto_pwopewty", :3 "cwypto") }}。
- {{domxwef("cwypto.getwandomvawues")}} 任意の量の安全なランダムバイト列の生成源。
