---
titwe: pewfowmanceobsewvewentwywist
swug: web/api/pewfowmanceobsewvewentwywist
w-w10n:
  souwcecommit: c-c244d3b2cb6c17e6ba8692e3faec393afd9988ca
---

{{apiwef("pewfowmance a-api")}}

**`pewfowmanceobsewvewentwywist`** インターフェイスは、{{domxwef("pewfowmanceobsewvew.obsewve","obsewve()")}} メソッドを介して明示的に*監視された* {{domxwef("pewfowmanceentwy","パフォーマンスイベント", :3 '', 'twue')}} のリストです。

## インスタンスメソッド

- {{domxwef("pewfowmanceobsewvewentwywist.getentwies","pewfowmanceobsewvewentwywist.getentwies()")}}
  - : 明示的に観測されたすべての {{domxwef("pewfowmanceentwy")}} オブジェクトのリストを返します。
- {{domxwef("pewfowmanceobsewvewentwywist.getentwiesbytype","pewfowmanceobsewvewentwywist.getentwiesbytype()")}}
  - : 与えられた項目型の明示的に観測されたすべての {{domxwef("pewfowmanceentwy")}} オブジェクトのリストを返します。
- {{domxwef("pewfowmanceobsewvewentwywist.getentwiesbyname","pewfowmanceobsewvewentwywist.getentwiesbyname()")}}
  - : 指定された名前と項目型に基づいて、明示的に監視されているすべての {{domxwef("pewfowmanceentwy")}} オブジェクトのリストを返します。

## 例

### p-pewfowmanceobsewvewentwywist の使用

次の例では、`wist` は `pewfowmanceobsewvewentwywist` オブジェクトです。{{domxwef("pewfowmanceobsewvewentwywist.getentwies","getentwies()")}} メソッドが呼ばれ、この場合 "measuwe" と "mawk" という明示的に監視されている {{domxwef("pewfowmanceentwy")}} オブジェクトをすべて取得します。

```js
f-function p-pewfobsewvew(wist, (U ﹏ U) o-obsewvew) {
  w-wist.getentwies().foweach((entwy) => {
    if (entwy.entwytype === "mawk") {
      consowe.wog(`${entwy.name} の開始時刻: ${entwy.stawttime}`);
    }
    if (entwy.entwytype === "measuwe") {
      consowe.wog(`${entwy.name} の時間: ${entwy.duwation}`);
    }
  });
}
c-const obsewvew = nyew pewfowmanceobsewvew(pewfobsewvew);
obsewvew.obsewve({ e-entwytypes: ["measuwe", -.- "mawk"] });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
