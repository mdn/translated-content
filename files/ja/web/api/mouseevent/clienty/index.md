---
title: MouseEvent.clientY
slug: Web/API/MouseEvent/clientY
tags:
  - API
  - CSSOM View
  - DOM イベント
  - MouseEvent
  - プロパティ
  - 読み取り専用
  - リファレンス
browser-compat: api.MouseEvent.clientY
---
{{APIRef("DOM Events")}}

**`clientY`** は {{domxref("MouseEvent")}} の読み取り専用のプロパティで、このイベントが発生した時点のアプリケーションの{{glossary("viewport", "ビューポート")}}における垂直座標を定義します（ページにおける座標ではありません）。

例えば、ビューポートの上端をクリックすると、そのページが垂直方向にスクロールしているかどうかにかかわらず、常に `clientY` の値が `0` のマウスイベントが発生します。

## 値

`double` の浮動小数点値です。

## 例

この例では、 {{domxref("Element/mousemove_event", "mousemove")}} イベントが発生するたびに、マウスの座標を表示します。

### HTML

```html
<p>マウスを動かして位置を確認してください。</p>
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("MouseEvent") }}
- {{domxref("MouseEvent.clientX","clientX")}}
- {{domxref("MouseEvent.screenX","screenX")}} /
  {{domxref("MouseEvent.screenY","screenY")}}
