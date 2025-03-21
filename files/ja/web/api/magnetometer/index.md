---
title: Magnetometer
slug: Web/API/Magnetometer
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{APIRef("Sensor API")}}{{SeeCompatTable}}

[Sensor APIs](/ja/docs/Web/API/Sensor_APIs) の **`Magnetometer`** インターフェイスは、デバイスのプライマリー磁気センサーで検出される磁場の情報を提供します。

このセンサーを使用するには、ユーザーが [権限 API](/ja/docs/Web/API/Permissions_API) により `'magnetometer'` デバイスセンサーを使用する許可を与える必要があります。さらに、この機能はサーバーで設定された [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy) でブロックされる可能性があります。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("Magnetometer.Magnetometer", "Magnetometer()")}} {{Experimental_Inline}}
  - : 新しい `Magnetometer` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref('Magnetometer.x')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : デバイスの x 軸方向の磁場を表す `double` 値を返します。
- {{domxref('Magnetometer.y')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : デバイスの y 軸方向の磁場を表す `double` 値を返します。
- {{domxref('Magnetometer.z')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : デバイスの z 軸方向の磁場を表す `double` 値を返します。

## インスタンスメソッド

_`Magnetometer` には独自のメソッドはありません。しかし、親インターフェイスの {{domxref("Sensor")}} および {{domxref("EventTarget")}} からメソッドを継承しています。_

## イベント

_`Magnetometer` には独自のイベントはありません。しかし、親インターフェイスの {{domxref('Sensor')}} からイベントを継承しています。_

## 例

磁場は通常 {{domxref('Sensor.reading_event', 'reading')}} イベントコールバックで取得します。以下の例では、これを 1 秒に 60 回行います。

```js
let magSensor = new Magnetometer({ frequency: 60 });

magSensor.addEventListener("reading", (e) => {
  console.log(`X 軸方向の磁場 ${magSensor.x}`);
  console.log(`Y 軸方向の磁場 ${magSensor.y}`);
  console.log(`Z 軸方向の磁場 ${magSensor.z}`);
});
magSensor.start();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
