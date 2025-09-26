---
title: "Sensor: error イベント"
slug: Web/API/Sensor/error_event
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Sensor API")}}

**`error`** イベントは、センサーで例外が発生したとき発火します。

{{domxref('Sensor')}} はベースクラスであり、`onerror` および `error` イベントは[派生クラス](/ja/docs/Web/API/Sensor#sensor_をベースとするインターフェイス)からのみ利用可能です。

このイベントの発生後、{{domxref('Sensor')}} オブジェクトは idle 状態になります。センサーが値を読んでいた場合は、再び開始されるまで停止します。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## イベント型

{{domxref("Event")}} から派生した {{domxref("SensorErrorEvent")}} です。

{{InheritanceDiagram("SensorErrorEvent")}}

## イベントプロパティ

_以下のプロパティに加え、親インターフェイスの {{domxref("Event")}} 由来のプロパティが利用可能です。_

- {{domxref('SensorErrorEvent.error', 'error')}} {{ReadOnlyInline}}
  - : 投げられた {{domxref('DOMException')}} を返します。

## 例

### 加速度計の例外を記録する

この例では、{{domxref("Accelerometer")}} で発生したエラーを記録するイベントリスナーを追加します。

```js
const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("error", (error) => console.log(`エラー: ${error.name}`));
acl.start();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- Sensor {{domxref('Sensor.activate_event', 'activate')}} イベント
- Sensor {{domxref('Sensor.reading_event', 'reading')}} イベント
