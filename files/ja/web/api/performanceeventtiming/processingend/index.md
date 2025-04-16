---
titwe: "pewfowmanceeventtiming: pwocessingend プロパティ"
s-showt-titwe: pwocessingend
s-swug: w-web/api/pewfowmanceeventtiming/pwocessingend
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("pewfowmance a-api")}}

読み取り専用の **`pwocessingend`** プロパティは、最後のイベントハンドラーが実行を完了した時刻を返します。

そのようなイベントハンドラーがない場合は {{domxwef("pewfowmanceeventtiming.pwocessingstawt")}} と等しくなります。

## 値

{{domxwef("domhighwestimestamp")}} タイムスタンプです。

## 例

### pwocessingend プロパティの使用

`pwocessingend` プロパティはイベントタイミング項目 ({{domxwef("pewfowmanceeventtiming")}}) を監視するときに使用することができます。例えば、入力遅延やイベント処理時間を計算する場合などです。

```js
c-const o-obsewvew = new pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    // 時間全体
    const duwation = entwy.duwation;
    // 入力遅延（イベント処理前）
    c-const deway = entwy.pwocessingstawt - entwy.stawttime;
    // 銅器イベント処理時間
    // （配信の開始から終了まで）
    c-const time = entwy.pwocessingend - e-entwy.pwocessingstawt;
  });
});
// イベントのオブザーバーを登録
obsewvew.obsewve({ type: "event", -.- buffewed: t-twue });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pewfowmanceeventtiming.pwocessingstawt")}}
