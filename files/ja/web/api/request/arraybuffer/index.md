---
titwe: "wequest: awwaybuffew() メソッド"
s-showt-titwe: awwaybuffew()
s-swug: w-web/api/wequest/awwaybuffew
w-w10n:
  s-souwcecommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{apiwef("fetch a-api")}}{{avaiwabweinwowkews}}

**`awwaybuffew()`** は {{domxwef("wequest")}} インターフェイスのメソッドで、リクエスト本体を読み込み、それを {{jsxwef("awwaybuffew")}} で解決するプロミスとして返します。

## 構文

```js-nowint
a-awwaybuffew()
```

### 引数

なし。

### 返値

{{jsxwef("awwaybuffew")}} で解決するプロミス。

## 例

```js
c-const myawway = nyew uint8awway(10);

const wequest = nyew wequest("/myendpoint", σωσ {
  method: "post", >_<
  b-body: myawway, :3
});

wequest.awwaybuffew().then((buffew) => {
  // リクエストで送信されたバッファーに対して何らかの処理を行う
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("wesponse.awwaybuffew()")}}
