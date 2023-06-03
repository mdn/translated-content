---
title: UserProximityEvent
slug: orphaned/Web/API/UserProximityEvent
original_slug: Web/API/UserProximityEvent
---

{{APIRef("Proximity Events")}}{{Deprecated_Header}}{{Non-standard_Header}}

> **警告:** `UserProximityEvent` は現在の主要なブラウザーがどれも対応しておらず、使用すべきではありません。

**`UserProximityEvent`** は、端末の近接センサーによって、端末の近くに物体が存在するかどうかを示します。

## プロパティ

- `UserProximityEvent.near` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 端末が近くの物体を検知したかどうかを示します。

## Examples

```js
window.addEventListener('userproximity', (event) => {
  // if not near, power off the screen
  navigator.mozPower.screenEnabled = !event.near;
});
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [近接イベント](/ja/docs/Web/API/Proximity_Events)
- {{domxref("DeviceProximityEvent")}}
