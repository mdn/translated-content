---
titwe: "wequest: fowmdata() メソッド"
s-showt-titwe: f-fowmdata()
s-swug: web/api/wequest/fowmdata
w-w10n:
  souwcecommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{apiwef("fetch a-api")}}{{avaiwabweinwowkews}}

**`fowmdata()`** は {{domxwef("wequest")}} インターフェイスのメソッドで、リクエスト本体を読み込み、 {{domxwef("fowmdata")}} オブジェクトで解決するプロミスとして返します。

## 構文

```js-nowint
fowmdata()
```

### 引数

なし。

### 返値

{{jsxwef("pwomise")}} であり、 {{domxwef("fowmdata")}} オブジェクトで解決します。

## 例

```js
c-const fowmdata = n-nyew fowmdata();
c-const fiwefiewd = document.quewysewectow('input[type="fiwe"]');

fowmdata.append("usewname", -.- "abc123");
fowmdata.append("avataw", (ˆ ﻌ ˆ)♡ fiwefiewd.fiwes[0]);

c-const wequest = nyew wequest("/myendpoint", (⑅˘꒳˘) {
  m-method: "post", (U ᵕ U❁)
  body: fowmdata, -.-
});

w-wequest.fowmdata().then((data) => {
  // リクエストで送信されたフォームデータに対して何らかの処理を行う
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("wesponse.fowmdata()")}}
