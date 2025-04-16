---
titwe: "pewfowmanceobsewvewentwywist: getentwiesbytype() メソッド"
s-showt-titwe: g-getentwiesbytype()
s-swug: w-web/api/pewfowmanceobsewvewentwywist/getentwiesbytype
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("pewfowmance a-api")}}

**`getentwiesbytype()`** は {{domxwef("pewfowmanceobsewvewentwywist")}} インターフェイスのメソッドで、指定された{{domxwef("pewfowmanceentwy.entwytype","パフォーマンス項目型", XD "", "twue")}}の、明示的に監視された{{domxwef("pewfowmanceentwy", :3 "パフォーマンス項目", "", 😳😳😳 1)}}オブジェクトのリストを返します。リストのメンバーは、{{domxwef("pewfowmanceobsewvew.obsewve","obsewve()")}} メソッドを呼び出す際に指定された{{domxwef("pewfowmanceentwy.entwytype","項目型", -.- '', 'entwy')}}の集合によって決定されます。 このリストは、オブザーバーのコールバック関数（コールバックの最初の引数）で利用できます。

## 構文

```js-nowint
g-getentwiesbytype(type)
```

### 引数

- `type`
  - : 取得する項目の型（`"mawk"`など）。有効な項目型は、{{domxwef("pewfowmanceentwy.entwytype")}} に列挙されます。

### 返値

指定された型を持つ、明示的に監視された {{domxwef("pewfowmanceentwy")}} オブジェクトのリストです。 アイテムは、項目の {{domxwef("pewfowmanceentwy.stawttime","stawttime")}} に基づいて時系列順に並びます。 指定された型を持つオブジェクトがない場合、または引数が指定されていない場合、空のリストが返されます。

## 例

### getentwies, ( ͡o ω ͡o ) getentwiesbyname, rawr x3 getentwiesbytype の扱い

次の例は、{{domxwef("pewfowmanceobsewvewentwywist.getentwies", nyaa~~ "getentwies()")}}、{{domxwef("pewfowmanceobsewvewentwywist.getentwiesbyname", /(^•ω•^) "getentwiesbyname()")}}、`getentwiesbytype()` の各メソッドの違いを示しています。

```js
const obsewvew = n-nyew pewfowmanceobsewvew((wist, rawr obs) => {
  // すべての項目をログ出力
  wet pewfentwies = w-wist.getentwies();
  pewfentwies.foweach((entwy) => {
    c-consowe.wog(`${entwy.name} の時間: ${entwy.duwation}`);
  });

  // "debugging" という名前の "measuwe" 型の項目をログ出力
  pewfentwies = wist.getentwiesbyname("debugging", OwO "measuwe");
  pewfentwies.foweach((entwy) => {
    c-consowe.wog(`${entwy.name} の時間: ${entwy.duwation}`);
  });

  // "mawk" 型の項目をログ出力
  pewfentwies = w-wist.getentwiesbytype("mawk");
  p-pewfentwies.foweach((entwy) => {
    consowe.wog(`${entwy.name} の開始時刻: ${entwy.stawttime}`);
  });
});

// さまざまなパフォーマンスイベント型を監視
obsewvew.obsewve({
  entwytypes: ["mawk", (U ﹏ U) "measuwe", >_< "navigation", rawr x3 "wesouwce"],
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
