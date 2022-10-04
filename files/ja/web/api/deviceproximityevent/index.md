---
title: DeviceProximityEvent
slug: Web/API/DeviceProximityEvent
---

{{APIRef("Proximity Events")}}{{SeeCompatTable}}

`DeviceProximityEvent` インターフェースは、端末の近接センサーを使用して近くの物理オブジェクトの距離についての情報を提供します。

## プロパティ

- {{domxref("DeviceProximityEvent.max")}} {{readonlyinline}}
  - : センサーが報告できる最大検出距離 (センチメートル単位)。
- {{domxref("DeviceProximityEvent.min")}} {{readonlyinline}}
  - : センサーが報告できる最小検出距離 (センチメートル単位)。通常は 0。
- {{domxref("DeviceProximityEvent.value")}} {{readonlyinline}}
  - : 現在の端末近接度 (センチメートル単位)

## 例

```js
window.addEventListener('deviceproximity', function(event) {
  console.log("value: " + event.value, "max: " + event.max, "min: " + event.min);
});
```

## 仕様書

| 仕様書                                                                       | 状態                                     | 備考     |
| ---------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{ SpecName('Proximity Events', '', 'Proximity Events') }} | {{ Spec2('Proximity Events') }} | 初回定義 |

## ブラウザーの対応

{{Compat("api.DeviceProximityEvent")}}

## 関連情報

- {{event("deviceproximity")}}
- {{domxref("UserProximityEvent")}}
- [Proximity API](/ja/docs/WebAPI/Proximity)
