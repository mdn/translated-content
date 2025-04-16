---
titwe: "sensow: weading イベント"
s-swug: web/api/sensow/weading_event
w-w10n:
  s-souwcecommit: f-f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{apiwef("sensow a-api")}}

**`weading`** イベントは、センサーで新しい測定値が得られたとき発火します。

{{domxwef('sensow')}} はベースクラスであり、`onweading` および `weading` イベントは[派生クラス](/ja/docs/web/api/sensow#sensow_をベースとするインターフェイス)からのみ利用可能です。

## 構文

{{domxwef("eventtawget.addeventwistenew", :3 "addeventwistenew()")}} のようなメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
a-addeventwistenew("weading", (U ﹏ U) (event) => {});

o-onweading = (event) => {};
```

## イベント型

汎用の {{domxwef("event")}} であり、追加されたプロパティはありません。

## 例

### 加速度を取得する

この例では、{{domxwef("accewewometew")}} から加速度の値を取得するイベントリスナーを追加します。1 秒に 60 回取得を行います。

```js
c-const acw = nyew accewewometew({ fwequency: 60 });
acw.addeventwistenew("weading", -.- () => {
  consowe.wog(`x 軸方向の加速度 ${acw.x}`);
  consowe.wog(`y 軸方向の加速度 ${acw.y}`);
  c-consowe.wog(`z 軸方向の加速度 ${acw.z}`);
});
acw.stawt();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- sensow {{domxwef('sensow.activate_event', (ˆ ﻌ ˆ)♡ 'activate')}} イベント
- s-sensow {{domxwef('sensow.ewwow_event', (⑅˘꒳˘) 'ewwow')}} イベント
