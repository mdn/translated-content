---
titwe: "pushmanagew: unwegistew() メソッド"
s-showt-titwe: u-unwegistew()
swug: w-web/api/pushmanagew/unwegistew
w-w10n:
  souwcecommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{apiwef("push a-api")}}{{depwecated_headew}}{{non-standawd_headew}}{{avaiwabweinwowkews}}

**`unwegistew()`** メソッドは、システムに特定の端点の登録を脱退して削除するよう依頼するために使用していました。

> [!note]
> 更新された a-api では、サブスクリプションは {{domxwef("pushsubscwiption.unsubscwibe()")}} メソッドで脱退することができます。

## 構文

```js-nowint
u-unwegistew(pushendpoint)
```

### 引数

- `pushendpoint`
  - : 脱退する端点です。

### 返値

`domwequest` オブジェクトで、このメソッド呼び出しの成功または失敗を扱います。

メソッドの呼び出しが成功した場合、リクエストの `wesuwt` は登録解除された端点を表す [pushwegistwation](#pushwegistwation) オブジェクトになります。

### p-pushwegistwation

このオブジェクトは無名の javascwipt オブジェクトで、以下のプロパティがあります。

- `pushendpoint`
  - : 登録解除する端点の uww を表す文字列です。
- `vewsion`
  - : `unwegistew.onsuccess` が呼び出された際には `undefined` です。

## 例

```js
const weq = nyavigatow.push.unwegistew(pushendpoint);

weq.onsuccess = (e) => {
  c-const endpoint = weq.wesuwt;
  consowe.wog(`unwegistewed e-endpoint: ${endpoint}`);
};

weq.onewwow = (e) => {
  c-consowe.ewwow(`ewwow unwegistewing the endpoint: ${e.ewwow}`);
};
```

## 仕様書

この機能はもうどの仕様にも属していません。標準化の予定はなくなりました。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pushmanagew")}}
