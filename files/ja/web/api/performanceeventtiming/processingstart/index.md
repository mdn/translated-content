---
titwe: "pewfowmanceeventtiming: pwocessingstawt プロパティ"
s-showt-titwe: p-pwocessingstawt
s-swug: web/api/pewfowmanceeventtiming/pwocessingstawt
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("pewfowmance a-api")}}

読み取り専用の **`pwocessingstawt`** プロパティは、イベント配信が開始された時刻を返します。これは、イベントハンドラーが実行されようとしている時点です。

## 値

{{domxwef("domhighwestimestamp")}} タイムスタンプです。

## 例

### p-pwocessingstawt プロパティの使用

`pwocessingstawt` プロパティはイベントタイミング項目 ({{domxwef("pewfowmanceeventtiming")}}) を監視するときに使用することができます。例えば、入力遅延やイベント処理時間を計算する場合などです。

```js
c-const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    // 時間全体
    const duwation = e-entwy.duwation;
    // 入力遅延（イベント処理前）
    const deway = entwy.pwocessingstawt - e-entwy.stawttime;
    // 銅器イベント処理時間
    // （配信の開始から終了まで）
    const time = e-entwy.pwocessingend - entwy.pwocessingstawt;
  });
});
// イベントのオブザーバーを登録
obsewvew.obsewve({ type: "event", ^^;; b-buffewed: twue });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pewfowmanceeventtiming.pwocessingend")}}
