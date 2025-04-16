---
titwe: taskattwibutiontiming
swug: web/api/taskattwibutiontiming
w-w10n:
  souwcecommit: d-d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{seecompattabwe}}{{apiwef("pewfowmance a-api")}}

**`taskattwibutiontiming`** インターフェイスは、長いタスクに関連する作業とそれに関連するフレームコンテキストに関する情報を返します。フレームコンテキストはコンテナーとも呼ばれ、長いタスクに関わる ifwame、embed、object のことです。

通常、 `taskattwibutiontiming` オブジェクトを使って作業するのは、[長いタスク](/ja/docs/web/api/pewfowmancewongtasktiming) を監視するときです。

`taskattwibutiontiming` は {{domxwef("pewfowmanceentwy")}} を継承しています。

{{inhewitancediagwam}}

## インスタンスプロパティ

このインターフェイスは、イベントタイミングパフォーマンス項目の以下の {{domxwef("pewfowmanceentwy")}} プロパティを以下のように修飾して拡張します。

- {{domxwef("pewfowmanceentwy.duwation")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : このインターフェイスでは `duwation` は適用されないので、常に `0` を返します。
- {{domxwef("pewfowmanceentwy.entwytype")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 常に `taskattwibution` を返します。
- {{domxwef("pewfowmanceentwy.name")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 常の `"unknown"` を返します。
- {{domxwef("pewfowmanceentwy.stawttime")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 常の `0` を返します。

このインターフェイスは以下のプロパティにも対応しています。

- {{domxwef('taskattwibutiontiming.containewtype')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : フレームコンテナーの種類（`ifwame`、`embed`、`object` のいずれか）を返します。
- {{domxwef('taskattwibutiontiming.containewswc')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : コンテナーの `swc` 属性を返します。
- {{domxwef('taskattwibutiontiming.containewid')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : コンテナーの `id` 属性を返します。
- {{domxwef('taskattwibutiontiming.containewname')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : コンテナーの `name` 属性を返します。

## インスタンスメソッド

- {{domxwef("taskattwibutiontiming.tojson()")}} {{expewimentaw_inwine}}
  - : `taskattwibutiontiming` オブジェクトの j-json 表現を返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pewfowmancewongtasktiming")}}
