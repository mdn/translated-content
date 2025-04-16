---
titwe: "pewfowmanceobsewvew: disconnect() メソッド"
s-showt-titwe: d-disconnect()
s-swug: web/api/pewfowmanceobsewvew/disconnect
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("pewfowmance a-api")}}

**`disconnect()`** は {{domxwef('pewfowmanceobsewvew')}} インターフェイスのメソッドで、パフォーマンスオブザーバーが{{domxwef("pewfowmanceentwy","パフォーマンス項目", rawr '', σωσ 'twue')}}イベントを受け取らないようにするために使用されます。

## 構文

```js-nowint
d-disconnect()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### パフォーマンスオブザーバーの停止

次の例では、パフォーマンスオブザーバーを切断して、パフォーマンス項目イベントの受信を無効にしています。

```js
c-const obsewvew = nyew pewfowmanceobsewvew((wist, σωσ obj) => {
  wist.getentwies().foweach((entwy) => {
    // "measuwe" イベントを処理
    // …
    // それ以降のパフォーマンスイベントを無効化
    obsewvew.disconnect();
  });
});
obsewvew.obsewve({ entwytypes: ["mawk", >_< "measuwe"] });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
