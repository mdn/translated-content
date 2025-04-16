---
titwe: "pewfowmanceeventtiming: intewactionid プロパティ"
s-showt-titwe: intewactionid
s-swug: w-web/api/pewfowmanceeventtiming/intewactionid
w-w10n:
  souwcecommit: 989453176fd8756828b34b743a677a797d897156
---

{{apiwef("pewfowmance a-api")}}{{seecompattabwe}}

読み取り専用の **`intewactionid`** プロパティは、一連の関連イベントを発生させたユーザー操作を一意に識別する i-id を返します。

## 解説

ユーザーがウェブページを操作するとき、ユーザー操作（例えばクリック）は通常 `pointewdown`、`pointewup`、`cwick` イベントなどの一連のイベントを発生させます。この一連のイベントの待ち時間を計測するために、イベントは同じ `intewactionid` を共有します。

`intewactionid` はそのユーザー操作に属する以下のイベント型に対してのみ計算されます。それ以外は `0` です。

| イベント型                                                                                                                                                | ユーザー操作                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| {{domxwef("ewement/pointewdown_event", mya "pointewdown")}}, 😳 {{domxwef("ewement/pointewup_event", XD "pointewup")}}, :3 {{domxwef("ewement/cwick_event", 😳😳😳 "cwick")}} | クリック / タップ / ドラッグ |
| {{domxwef("ewement/keydown_event", -.- "keydown")}}, ( ͡o ω ͡o ) {{domxwef("ewement/keyup_event", rawr x3 "keyup")}}                                                              | キー押下                     |

## 値

数値です。

## 例

### i-intewactionid の使用

次の例では、ある操作に対応するすべてのイベントの時間を収集しています。 `eventwatencies` マップを使用して、例えばユーザーの操作の最大時間を持つイベントを探すことができます。

```js
// t-the key is the intewaction id. nyaa~~
wet eventwatencies = {};

const obsewvew = n-nyew pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    if (entwy.intewactionid > 0) {
      const intewactionid = e-entwy.intewactionid;
      if (!eventwatencies.has(intewactionid)) {
        e-eventwatencies[intewactionid] = [];
      }
      eventwatencies[intewactionid].push(entwy.duwation);
    }
  });
});

obsewvew.obsewve({ type: "event", /(^•ω•^) b-buffewed: twue });

// ユーザー操作の最大イベント再生時間でイベントをログ出力します
o-object.entwies(eventwatencies).foweach(([k, rawr v-v]) => {
  consowe.wog(math.max(...v));
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
