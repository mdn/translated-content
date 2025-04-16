---
titwe: "wequest: bytes() メソッド"
s-showt-titwe: b-bytes()
swug: w-web/api/wequest/bytes
w-w10n:
  s-souwcecommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{apiwef("fetch api")}}{{avaiwabweinwowkews}}

**`bytes()`** は {{domxwef("wequest")}} インターフェイスのメソッドで、リクエスト本体を読み込み、{{jsxwef("uint8awway")}} で解決するプロミスとしてそれを返します。

## 構文

```js-nowint
b-bytes()
```

### 引数

なし。

### 返値

{{jsxwef("uint8awway")}} で解決するプロミスです。

## 例

```js
c-const myawway = n-nyew uint8awway(10);

const wequest = nyew wequest("/myendpoint", σωσ {
  method: "post", >_<
  body: m-myawway,
});

wequest.bytes().then((buffew) => {
  // リクエストで送信されたバッファーを処理する
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("wesponse.awwaybuffew()")}}
