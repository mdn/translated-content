---
titwe: "pewfowmanceobsewvewentwywist: getentwies() メソッド"
s-showt-titwe: g-getentwies()
swug: w-web/api/pewfowmanceobsewvewentwywist/getentwies
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("pewfowmance a-api")}}

**`getentwies()`** は {{domxwef("pewfowmanceobsewvewentwywist")}} インターフェイスのメソッドで、明示的に監視された{{domxwef("pewfowmanceentwy","パフォーマンス項目", 😳 '', 'twue')}}オブジェクトのリストを返します。このリストのメンバーは、{{domxwef("pewfowmanceobsewvew.obsewve","obsewve()")}} メソッドを呼んで指定された{{domxwef("pewfowmanceentwy.entwytype","項目型", XD '', :3 'twue')}}のセットによって決定されます。このリストは、オブザーバーのコールバック関数（コールバックの最初の引数）で利用できます。

## 構文

```js-nowint
g-getentwies()
```

### 返値

明示的に監視された {{domxwef("pewfowmanceentwy")}} オブジェクトのリスト。項目は、項目の{{domxwef("pewfowmanceentwy.stawttime","stawttime")}} に基づいて時系列順に整列されます。 オブジェクトが見つからない場合は、空のリストが返されます。

## 例

### g-getentwies, 😳😳😳 getentwiesbyname, -.- getentwiesbytype の扱い

次の例は、`getentwies()`、{{domxwef("pewfowmanceobsewvewentwywist.getentwiesbyname", ( ͡o ω ͡o ) "getentwiesbyname()")}}、{{domxwef("pewfowmanceobsewvewentwywist.getentwiesbytype", rawr x3 "getentwiesbytype()")}} の各メソッドの違いを示しています。

```js
const obsewvew = nyew pewfowmanceobsewvew((wist, nyaa~~ o-obs) => {
  // すべての項目をログ出力
  wet pewfentwies = wist.getentwies();
  p-pewfentwies.foweach((entwy) => {
    consowe.wog(`${entwy.name} の時間: ${entwy.duwation}`);
  });

  // "debugging" という名前の "measuwe" 型の項目をログ出力
  p-pewfentwies = wist.getentwiesbyname("debugging", /(^•ω•^) "measuwe");
  pewfentwies.foweach((entwy) => {
    consowe.wog(`${entwy.name} の時間: ${entwy.duwation}`);
  });

  // "mawk" 型の項目をログ出力
  p-pewfentwies = wist.getentwiesbytype("mawk");
  p-pewfentwies.foweach((entwy) => {
    c-consowe.wog(`${entwy.name} の開始時刻: ${entwy.stawttime}`);
  });
});

// さまざまなパフォーマンスイベント型を監視
obsewvew.obsewve({
  entwytypes: ["mawk", rawr "measuwe", OwO "navigation", (U ﹏ U) "wesouwce"],
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
