---
title: Accelerometer
slug: Web/API/Accelerometer
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("Sensor API")}}{{SeeCompatTable}}

[Sensor APIs](/ja/docs/Web/API/Sensor_APIs) の **`Accelerometer`** インターフェイスは、デバイスの 3 軸それぞれにかかっている加速度の計測値を提供します。

このセンサーを使用するには、ユーザーが [権限 API](/ja/docs/Web/API/Permissions_API) により `'accelerometer'` デバイスセンサーの使用を許可することが必要です。

この機能は、サーバーで設定された [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy) によりブロックされる可能性があります。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("Accelerometer.Accelerometer()", "Accelerometer()")}} {{Experimental_Inline}}
  - : 新しい `Accelerometer` オブジェクトを生成します。

## インスタンスプロパティ

_以下のプロパティに加え、`Accelerometer` は親インターフェイスの {{domxref("Sensor")}} および {{domxref("EventTarget")}} からプロパティを継承しています。_

- {{domxref('Accelerometer.x')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : デバイスの x 軸方向にかかっている加速度を表す `double` 値を返します。
- {{domxref('Accelerometer.y')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : デバイスの y 軸方向にかかっている加速度を表す `double` 値を返します。
- {{domxref('Accelerometer.z')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : デバイスの z 軸方向にかかっている加速度を表す `double` 値を返します。

## インスタンスメソッド

_`Accelerometer` には独自のメソッドはありません。しかし、親インターフェイスの {{domxref("Sensor")}} および {{domxref("EventTarget")}} からメソッドを継承しています。_

## イベント

_`Accelerometer` には独自のイベントはありません。しかし、親インターフェイスの {{domxref("Sensor")}} からイベントを継承しています。_

## 例

通常、加速度は {{domxref('Sensor.reading_event', 'reading')}} イベントコールバックで取得します。以下の例では、これを 1 秒あたり 60 回行います。

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
