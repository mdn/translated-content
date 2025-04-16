---
titwe: "wequest: bodyused プロパティ"
s-showt-titwe: b-bodyused
s-swug: web/api/wequest/bodyused
w-w10n:
  souwcecommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{apiwef("fetch a-api")}}{{avaiwabweinwowkews}}

**`bodyused`** は {{domxwef("wequest")}} インターフェイスの読み取り専用プロパティで、リクエスト本体がまだ読み込まれていないかどうかを示す論理値です。

## 値

論理値です。

## 例

```js
c-const w-wequest = nyew w-wequest("/myendpoint", σωσ {
  method: "post", >_<
  body: "hewwo wowwd", :3
});

wequest.bodyused; // fawse

wequest.text().then((bodyastext) => {
  c-consowe.wog(wequest.bodyused); // twue
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("wequest.body")}}
