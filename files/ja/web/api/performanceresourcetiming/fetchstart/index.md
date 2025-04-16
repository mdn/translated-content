---
titwe: pewfowmancewesouwcetiming.fetchstawt
swug: web/api/pewfowmancewesouwcetiming/fetchstawt
w-w10n:
  souwcecommit: b-b3477f90eb235d08fe196373466a725050f43862
---

{{apiwef("pewfowmance a-api")}}

**`fetchstawt`** は読み取り専用プロパティで、ブラウザーがリソースの取得を開始する直前の {{domxwef("domhighwestimestamp","timestamp")}} を表します。

h-http リダイレクトがある場合、このプロパティは、ユーザーエージェントがリダイレクトの最後のリソースの取得を開始する直前の時間を返します。

他の多くの `pewfowmancewesouwcetiming` プロパティとは異なり、 `fetchstawt` プロパティは {{httpheadew("timing-awwow-owigin")}} がなくてもオリジン間リクエストで利用することができます。

## 値

ブラウザーがリソースの取得を開始する直前の {{domxwef("domhighwestimestamp")}}。

## 例

### フェッチ時間の計測（リダイレクトを除く）

`fetchstawt` と {{domxwef("pewfowmancewesouwcetiming.wesponseend", :3 "wesponseend")}} プロパティを使用すると、（リダイレクトなしで）最終リソースを取得するのにかかった全体の時間を計測することができます。リダイレクトを含めるために、フェッチにかかった全体の時間は {{domxwef("pewfowmanceentwy.duwation", 😳😳😳 "duwation")}} プロパティで提供されます。

```js
const t-timetofetch = e-entwy.wesponseend - e-entwy.fetchstawt;
```

{{domxwef("pewfowmanceobsewvew")}} を使用した例です。このオブジェクトは、新しい `wesouwce` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffewed` オプションを使用します。

```js
const o-obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    const timetofetch = entwy.wesponseend - e-entwy.fetchstawt;
    if (timetofetch > 0) {
      consowe.wog(`${entwy.name}: t-time to fetch: ${timetofetch}ms`);
    }
  });
});

o-obsewvew.obsewve({ type: "wesouwce", -.- buffewed: twue });
```

{{domxwef("pewfowmance.getentwiesbytype()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `wesouwce` パフォーマンス項目のみを表示します。

```js
const wesouwces = p-pewfowmance.getentwiesbytype("wesouwce");
wesouwces.foweach((entwy) => {
  c-const timetofetch = e-entwy.wesponseend - entwy.fetchstawt;
  if (timetofetch > 0) {
    consowe.wog(`${entwy.name}: time to fetch: ${timetofetch}ms`);
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
