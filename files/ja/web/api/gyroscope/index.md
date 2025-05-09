---
title: Gyroscope
slug: Web/API/Gyroscope
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{APIRef("Sensor API")}}

[Sensor APIs](/ja/docs/Web/API/Sensor_APIs) の **`Gyroscope`** インターフェイスは、デバイスの 3 軸それぞれの角速度の計測値を提供します。

このセンサーを使用するには、ユーザーが [権限 API](/ja/docs/Web/API/Permissions_API) により `'gyroscope'` デバイスセンサーを使用する許可を与える必要があります。さらに、この機能はサーバーで設定された [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy) によりブロックされる可能性があります。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("Gyroscope.Gyroscope", "Gyroscope()")}}
  - : 新しい `Gyroscope` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref('Gyroscope.x')}} {{ReadOnlyInline}}
  - : デバイスの x 軸方向の角速度を表す `double` 値を返します。
- {{domxref('Gyroscope.y')}} {{ReadOnlyInline}}
  - : デバイスの y 軸方向の角速度を表す `double` 値を返します。
- {{domxref('Gyroscope.z')}} {{ReadOnlyInline}}
  - : デバイスの z 軸方向の角速度を表す `double` 値を返します。

## インスタンスメソッド

_`Gyroscope` には独自のメソッドはありません。しかし、親インターフェイスの {{domxref("Sensor")}} および {{domxref("EventTarget")}} からメソッドを継承しています。_

## イベント

_`Gyroscope` には独自のイベントはありません。しかし、親インターフェイスの {{domxref('Sensor')}} からイベントを継承しています。_

## 例

ジャイロスコープは、通常 {{domxref('Sensor.reading_event', 'reading')}} イベントコールバックで読み取られます。以下の例では、これを 1 秒に 60 回行います。

```js
let gyroscope = new Gyroscope({ frequency: 60 });

gyroscope.addEventListener("reading", (e) => {
  console.log(`X 軸方向の角速度 ${gyroscope.x}`);
  console.log(`Y 軸方向の角速度 ${gyroscope.y}`);
  console.log(`Z 軸方向の角速度 ${gyroscope.z}`);
});
gyroscope.start();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
