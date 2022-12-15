---
title: DeviceProximityEvent
slug: Web/API/DeviceProximityEvent
l10n:
  sourceCommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{APIRef("Proximity Events")}}{{Deprecated_Header}}{{Non-standard_Header}}

> **警告:** `DeviceProximityEvent` は現在の主要なブラウザーがどれも対応しておらず、使用すべきではありません。

**`DeviceProximityEvent`** インターフェイスは、端末の近接センサーを使用して近くの物理オブジェクトの距離についての情報を提供します。

## インスタンスプロパティ

- `DeviceProximityEvent.max` {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : センサーが報告できる最大検出距離 (センチメートル単位)。
- `DeviceProximityEvent.min` {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : センサーが報告できる最小検出距離 (センチメートル単位)。通常は 0。
- `DeviceProximityEvent.value` {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 現在の端末近接度 (センチメートル単位)

## 例

```js
window.addEventListener('deviceproximity', (event) => {
  console.log(`value: ${event.value}`, `max: ${event.max}`, `min: ${event.min}`);
});
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("UserProximityEvent")}}
- [近接 API](/ja/docs/Web/API/Proximity_Events)
