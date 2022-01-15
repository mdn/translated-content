---
title: MouseEvent.button
slug: Web/API/MouseEvent/button
tags:
  - API
  - DOM
  - DOM イベント
  - MouseEvent
  - プロパティ
  - 読み取り専用
  - リファレンス
browser-compat: api.MouseEvent.button
translation_of: Web/API/MouseEvent/button
---
{{APIRef("DOM Events")}}

**`MouseEvent.button`** は読み取り専用のプロパティで、イベントを引き起こすのにどのボタンが押されたのかを表します。

このプロパティは、 1 つまたは複数のボタンを押したり離したりすることによって発生したイベント中に、どのボタンが押されたかを示すことのみを保証します。
したがって、 {{domxref("Element/mouseenter_event", "mouseenter")}}, {{domxref("Element/mouseleave_event", "mouseleave")}}, {{domxref("Element/mouseover_event", "mouseover")}}, {{domxref("Element/mouseout_event", "mouseout")}}, {{domxref("Element/mousemove_event", "mousemove")}} のようなイベントに対しては確かではありません。

ユーザーはポインティングデバイスの設定を変更できるため、例えばイベントのボタンプロパティがゼロだった場合、必ずしも物理的な左ボタンによるものとは限りません。ただし、そのような場合でも標準設定における左ボタンと同じ動作をするべきです。

> **Note:** {{domxref("MouseEvent.buttons")}} プロパティと混同しないように注意してください。こちらはすべての種類のマウスイベントで、ボタンの押下状態を示します。

## 値

該当するボタンに対応する番号です。

- `0`: 主ボタンが押された。通常は左ボタンか初期化されていない状態。
- `1`: 補助ボタンが押された。通常はホイールボタンまたは中央のボタンが押された場合。
- `2`: 副ボタンが押された。通常は右ボタン。
- `3`: 第四ボタン。一般的にブラウザーの戻るボタン。
- `4`: 第五ボタン。一般的にブラウザーの進むボタン。

上記のように、ボタンは標準の「左から右へ」のレイアウトとは異なる構成でも構いません。
左利き用に設定されたマウスでは、ボタンの動作が逆になることがあります。
ポインティングデバイスによっては 1 つのボタンしか持たず、キーボードまたは他の入力機構を使用して主、副、補助などを示します。
他のポインティングデバイスは多くのボタンを異なる機能およびボタン値にマッピングすることができます。

## 例

### HTML

```html
<button id="button" oncontextmenu="event.preventDefault();">マウスでここをクリックしてください...</button>
<p id="log"></p>
```

### JavaScript

```js
let button = document.querySelector('#button');
let log = document.querySelector('#log');
button.addEventListener('mouseup', logMouseButton);

function logMouseButton(e) {
  if (typeof e === 'object') {
    switch (e.button) {
      case 0:
        log.textContent = '左ボタンがクリックされました。';
        break;
      case 1:
        log.textContent = '中央ボタンがクリックされました。';
        break;
      case 2:
        log.textContent = '右ボタンがクリックされました。';
        break;
      default:
        log.textContent = `不明なボタンコード: ${e.button}`;
    }
  }
}
```

### 結果

{{EmbedLiveSample("Example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MouseEvent")}}
