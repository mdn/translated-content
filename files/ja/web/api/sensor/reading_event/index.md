---
title: "Sensor: reading イベント"
slug: Web/API/Sensor/reading_event
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Sensor API")}}

**`reading`** イベントは、センサーで新しい測定値が得られたとき発火します。

{{domxref('Sensor')}} はベースクラスであり、`onreading` および `reading` イベントは[派生クラス](/ja/docs/Web/API/Sensor#sensor_をベースとするインターフェイス)からのみ利用可能です。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
addEventListener("reading", (event) => {});

onreading = (event) => {};
```

## イベント型

汎用の {{domxref("Event")}} であり、追加されたプロパティはありません。

## 例

### 加速度を取得する

この例では、{{domxref("Accelerometer")}} から加速度の値を取得するイベントリスナーを追加します。1 秒に 60 回取得を行います。

```js
const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("reading", () => {
  console.log(`X 軸方向の加速度 ${acl.x}`);
  console.log(`Y 軸方向の加速度 ${acl.y}`);
  console.log(`Z 軸方向の加速度 ${acl.z}`);
});
acl.start();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- Sensor {{domxref('Sensor.activate_event', 'activate')}} イベント
- Sensor {{domxref('Sensor.error_event', 'error')}} イベント
