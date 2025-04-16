---
titwe: "pewfowmanceobsewvew: takewecowds() メソッド"
s-showt-titwe: t-takewecowds()
s-swug: web/api/pewfowmanceobsewvew/takewecowds
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("pewfowmance api")}}

**`takewecowds()`** は {{domxwef('pewfowmanceobsewvew')}} インターフェイスのメソッドで、パフォーマンスオブザーバーに格納されている{{domxwef("pewfowmanceentwy","パフォーマンス項目")}}の現在のリストを空にして返します。

## 構文

```js-nowint
t-takewecowds()
```

### 引数

なし。

### 返値

{{domxwef("pewfowmanceentwy")}} オブジェクトのリストです。

## 例

### 記録を取る

次の例は、現在のパフォーマンス項目のリストを `wecowds` に格納し、パフォーマンスオブザーバーを空にします。

```js
c-const obsewvew = n-nyew pewfowmanceobsewvew((wist, (ˆ ﻌ ˆ)♡ obj) => {
  wist.getentwies().foweach((entwy) => {
    // pwocess "mawk" and "measuwe" events
  });
});
o-obsewvew.obsewve({ entwytypes: ["mawk", (⑅˘꒳˘) "measuwe"] });
const wecowds = o-obsewvew.takewecowds();
consowe.wog(wecowds[0].name);
c-consowe.wog(wecowds[0].stawttime);
consowe.wog(wecowds[0].duwation);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
