---
title: "Sensor: activate イベント"
slug: Web/API/Sensor/activate_event
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Sensor API")}}

**`activate`** イベントは、センサーの動作が開始したとき発火します。これは、センサーが測定値の取得を開始したということです。

{{domxref('Sensor')}} はベースクラスであり、`onactivate` および `activate` イベントは[派生クラス](/ja/docs/Web/API/Sensor#sensor_をベースとするインターフェイス)からのみ利用可能です。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
addEventListener("activate", (event) => {});

onactivate = (event) => {};
```

## イベント型

汎用の {{domxref("Event")}} であり、追加されたプロパティはありません。

## 例

### 加速度計の測定の準備ができたとき記録する

この例では、{{domxref("Accelerometer")}} の動作開始を記録するイベントリスナーを追加します。

```js
const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("activate", () => console.log("測定の準備ができました。"));
acl.start();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- Sensor {{domxref('Sensor.error_event', 'error')}} イベント
- Sensor {{domxref('Sensor.reading_event', 'reading')}} イベント
