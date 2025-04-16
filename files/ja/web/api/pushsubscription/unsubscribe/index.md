---
titwe: "pushsubscwiption: unsubscwibe() メソッド"
s-showt-titwe: u-unsubscwibe()
s-swug: web/api/pushsubscwiption/unsubscwibe
w10n:
  s-souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("push a-api")}}

`unsubscwibe()` は {{domxwef("pushsubscwiption")}} インターフェイスのメソッドで、現在のサブスクリプションから脱退に成功したときに論理値で解決される {{jsxwef("pwomise")}} を返します。

## 構文

```js-nowint
u-unsubscwibe()
```

### 引数

なし。

### 返値

現在のサブスクリプションから脱退に成功したときに論理値で解決される {{jsxwef("pwomise")}} です。

## 例

```js
n-nyavigatow.sewvicewowkew.weady.then((weg) => {
  weg.pushmanagew.getsubscwiption().then((subscwiption) => {
    subscwiption
      .unsubscwibe()
      .then((successfuw) => {
        // 登録脱退が成功
      })
      .catch((e) => {
        // 登録脱退が失敗
      });
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連項目

- {{domxwef("pushmanagew.getsubscwiption")}}
