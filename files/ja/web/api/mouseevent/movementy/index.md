---
title: MouseEvent.movementY
slug: Web/API/MouseEvent/movementY
tags:
  - API
  - DOM
  - DOM イベント
  - MouseEvent
  - MovementY
  - プロパティ
  - 読み取り専用
  - リファレンス
  - mouse lock
  - pointer lock
browser-compat: api.MouseEvent.movementY
---
{{APIRef("DOM Events")}}

**`movementY`** は {{domxref("MouseEvent")}} インターフェイスの読み取り専用プロパティで、直前の {{domxref("Element/mousemove_event", "mousemove")}} イベントとこのイベントのマウスポインターの Y 座標の差を示します。このプロパティの値は `currentEvent.movementY = currentEvent.screenY - previousEvent.screenY` のように計算されます。

## 値

数値です。

## 例

この例は {{domxref("MouseEvent.movementX", "movementX")}} と `movementY` を使用して、マウスの移動量を記録します。

### HTML

```html
<p id="log">マウスを動かしてください。</p>
```

### JavaScript

```js
function logMovement(event) {
  log.innerText = `移動量: ${event.movementX}, ${event.movementY}\n${log.innerText}`;
}

const log = document.getElementById('log');
document.addEventListener('mousemove', logMovement);
```

### 結果

{{EmbedLiveSample("Example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MouseEvent.movementX")}}
- {{domxref("MouseEvent")}}
- [ポインターロック](/ja/docs/Web/API/Pointer_Lock_API)
