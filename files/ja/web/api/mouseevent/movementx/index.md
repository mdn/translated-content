---
title: MouseEvent.movementX
slug: Web/API/MouseEvent/movementX
tags:
  - API
  - DOM
  - DOM イベント
  - MouseEvent
  - MovementX
  - プロパティ
  - 読み取り専用
  - リファレンス
  - mouse lock
  - pointer lock
translation_of: Web/API/MouseEvent/movementX
browser-compat: api.MouseEvent.movementX
---
{{APIRef("DOM Events")}}

**`movementX`** は {{domxref("MouseEvent")}} インターフェイスの読み取り専用プロパティで、直前の {{domxref("Element/mousemove_event", "mousemove")}} イベントとこのイベントのマウスポインターの X 座標の差を示します。このプロパティの値は `currentEvent.movementX = currentEvent.screenX - previousEvent.screenX` のように計算されます。

## 値

数値です。

## 例

この例は `movementX` と {{domxref("MouseEvent.movementY", "movementY")}} を使用して、マウスの移動量を記録します。

### HTML

```html
<p id="log">マウスを動かしてください。</p>
```

### JavaScript

```js
function logMovement(event) {
  log.insertAdjacentHTML('afterbegin', `移動量: ${event.movementX}, ${event.movementY}<br>`);
  while (log.childNodes.length > 128) log.lastChild.remove()
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

- {{domxref("MouseEvent.movementY")}}
- {{domxref("MouseEvent")}}
- [ポインターロック](/ja/docs/Web/API/Pointer_Lock_API)
