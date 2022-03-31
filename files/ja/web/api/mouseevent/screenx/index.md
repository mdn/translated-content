---
title: MouseEvent.screenX
slug: Web/API/MouseEvent/screenX
tags:
  - API
  - CSSOM View
  - DOM イベント
  - MouseEvent
  - プロパティ
  - 読み取り専用
  - リファレンス
browser-compat: api.MouseEvent.screenX
translation_of: Web/API/MouseEvent/screenX
---
{{APIRef("DOM Events")}}

**`screenX`** は {{domxref("MouseEvent")}} インターフェイスの読み取り専用プロパティで、グローバル（スクリーン）座標における、マウスポインターの水平方向の座標（オフセット）を示します。

> **Note:** マルチスクリーン環境では、水平方向に並べられた画面が単一の機器として扱われ、 `screenX` の範囲に画面の幅が加算されることがあります。

## 構文

```js
var x = instanceOfMouseEvent.screenX
```

### 返値

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
let screenLog = document.querySelector('#screen-log');
document.addEventListener('mousemove', logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}
```

### 結果

{{EmbedLiveSample("Example")}}

### イベントのルーティング

ウィンドウや文書、範囲の要素にイベントをトラップすると、次の例のように、そのイベント（クリックなど）の座標を取得して、適切にルーティングすることができます。

```js
function checkClickMap(e) {
  if (e.screenX < 50) doRedButton();
  if (50 <= e.screenX && e.screenX < 100) doYellowButton();
  if (e.screenX >= 100) doRedButton();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("MouseEvent") }}
- {{ domxref("MouseEvent.screenY","screenY") }}
- {{ domxref("MouseEvent.clientX","clientX") }} / {{ domxref("MouseEvent.clientY", "clientY") }}
