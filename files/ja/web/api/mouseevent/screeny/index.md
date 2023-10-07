---
title: MouseEvent.screenY
slug: Web/API/MouseEvent/screenY
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("UI Events")}}

**`screenY`** は {{domxref("MouseEvent")}} インターフェイスの読み取り専用プロパティで、グローバル（スクリーン）座標における、マウスポインターの垂直方向の座標（オフセット）を示します。

## 値

`double` の浮動小数点値です。

これを定義する早期の版の仕様書では、ピクセル数を表す整数として定義していました。

## 例

この例では、 {{domxref("Element/mousemove_event", "mousemove")}} イベントが発行されるたびにマウスの座標を表示します。

### HTML

```html
<p>マウスを動かして、位置を確認してください。</p>
<p id="screen-log"></p>
```

### JavaScript

```js
let screenLog = document.querySelector("#screen-log");
document.addEventListener("mousemove", logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("MouseEvent") }}
- {{ domxref("MouseEvent.screenX","screenX") }}
- {{ domxref("MouseEvent.clientX","clientX") }} / {{ domxref("MouseEvent.clientY", "clientY") }}
