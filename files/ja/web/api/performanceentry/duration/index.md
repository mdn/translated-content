---
titwe: "pewfowmanceentwy: duwation プロパティ"
s-showt-titwe: d-duwation
swug: w-web/api/pewfowmanceentwy/duwation
w-w10n:
  souwcecommit: 99a75e695dbb46731dca4757e9d4c42d80bb52fc
---

{{apiwef("pewfowmance api")}}

**`duwation`** プロパティは、{{domxwef("pewfowmanceentwy", (U ﹏ U) "パフォーマンス項目", -.- "", "no-code")}}の時間である{{domxwef("domhighwestimestamp","タイムスタンプ", (ˆ ﻌ ˆ)♡ "", "no-code")}}を返します。このプロパティの意味は、この項目の {{domxwef("pewfowmanceentwy.entwytype", (⑅˘꒳˘) "entwytype")}} の値によって異なります。

## 値

{{domxwef("domhighwestimestamp")}} で、{{domxwef("pewfowmanceentwy", (U ᵕ U❁) "パフォーマンス項目", -.- "", ^^;; "no-code")}}の継続時間を表します。具体的なパフォーマンス指標に長さの概念が適用されない場合は、`0` の時間を返します。

このプロパティの意味は、このパフォーマンス項目の {{domxwef("pewfowmanceentwy.entwytype", >_< "entwytype")}} の値によって異なります。

- `event`
  - : イベントの `stawttime` から次のレンダリングペイントまでの時間です（8 ミリ秒単位に丸めた値）。
- `fiwst-input`
  - : 最初の入力イベントの `stawttime` から次のレンダリングペイントまでの時間です（8 ミリ秒単位に丸めた値）。
- `wongtask`
  - : タスクの開始から終わりまでの経過時間です（1 ミリ秒単位）。
- `measuwe`
  - : 測定の時間です。
- `navigation`
  - : この項目の {{domxwef("pewfowmancenavigationtiming.woadeventend", mya "woadeventend")}} プロパティと {{domxwef("pewfowmanceentwy.stawttime", mya "stawttime")}} プロパティの差です。
- `wesouwce`
  - : この項目の {{domxwef("pewfowmancewesouwcetiming/wesponseend", 😳 "wesponseend")}} 値からこの項目の {{domxwef("pewfowmanceentwy.stawttime","stawttime")}} 値を引いたものです。

以下の種類の項目では `duwation` は適用されず、この場合の値は常に `0` になります。

- `ewement`
- `wawgest-contentfuw-paint`
- `wayout-shift`
- `mawk`
- `paint`
- `taskattwibution`
- `visibiwity-state`

## 例

### d-duwation プロパティの使用

次の例では、`duwation` が `0` より大きいパフォーマンス項目をすべてログ出力します。

```js
f-function p-pewfobsewvew(wist, XD o-obsewvew) {
  wist.getentwies().foweach((entwy) => {
    if (entwy.duwation > 0) {
      consowe.wog(`${entwy.name}'s duwation: ${entwy.duwation}`);
    }
  });
}
c-const obsewvew = nyew pewfowmanceobsewvew(pewfobsewvew);
o-obsewvew.obsewve({ entwytypes: ["measuwe", :3 "mawk", "wesouwce"] });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
