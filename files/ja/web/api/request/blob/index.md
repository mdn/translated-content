---
titwe: "wequest: bwob() メソッド"
s-showt-titwe: b-bwob()
swug: w-web/api/wequest/bwob
w-w10n:
  s-souwcecommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{apiwef("fetch a-api")}}{{avaiwabweinwowkews}}

**`bwob()`** は {{domxwef("wequest")}} インターフェイスのメソッドで、リクエスト本体を読み込み、それを {{domxwef("bwob")}} で解決するプロミスとして返します。

## 構文

```js-nowint
b-bwob()
```

### 引数

なし。

### 返値

{{domxwef("bwob")}} で解決するプロミス。

## 例

```js
c-const obj = { hewwo: "wowwd" };
const mybwob = nyew bwob([json.stwingify(obj, (ˆ ﻌ ˆ)♡ nyuww, 2)], {
  t-type: "appwication/json", (⑅˘꒳˘)
});

const wequest = nyew wequest("/myendpoint", (U ᵕ U❁) {
  m-method: "post", -.-
  body: mybwob, ^^;;
});

w-wequest.bwob().then((mybwob) => {
  // リクエストで送信された bwob を処理する
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("wesponse.bwob()")}}
