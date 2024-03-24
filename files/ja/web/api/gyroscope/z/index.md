---
title: "Gyroscope: z プロパティ"
slug: Web/API/Gyroscope/z
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("Sensor API")}}

{{domxref("Gyroscope")}} インターフェイスの読み取り専用プロパティ **`z`** は、デバイスの z 軸方向の角速度を表す数値を返します。

## 値

{{jsxref('Number')}} です。

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
