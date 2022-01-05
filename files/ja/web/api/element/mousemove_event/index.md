---
title: 'Element: mousemove イベント'
slug: Web/API/Element/mousemove_event
tags:
  - API
  - DOM
  - イベント
  - インターフェイス
  - MouseEvent
  - リファレンス
  - マウス
  - mousemove
  - move
  - ポインター
translation_of: Web/API/Element/mousemove_event
---
{{APIRef}}

`mousemove` イベントは、カーソルのホットスポットが要素内にあるときに、ポインティングデバイス (通常はマウス) が移動されると、その要素に発行されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers.onmousemove", "onmousemove")}}
      </td>
    </tr>
  </tbody>
</table>

<h2 id="Examples">例</h2>

次の例は、{{domxref("Element/mousedown_event", "mousedown")}}、`mousemove`、{{domxref("Element/mouseup_event", "mouseup")}} の各イベントを使って HTML5 の要素である [canvas](/ja/docs/Web/API/Canvas_API) の上にお絵かきができるものです。機能は単純で、線の太さは 1、線の色は黒に固定されています。

ページが読み込まれると、定数 `myPics` と `context` が、それぞれ canvas と描画に使用する 2D コンテキストの参照を格納するために生成されます。

`mousedown` イベントが発行されると線の描画が始まります。まずマウスの x 座標と y 座標が変数 `x` と `y` に格納され、フラグ `isDrawing` の値が true になります。

ページ上でマウスを動かすと、 `mousemove` イベントが発行されます。 `isDrawing` が true である場合、 `drawLine` 関数を呼び出して `x` と `y` に格納された値から現在の位置まで線を引きます。

`drawLine()` 関数の返値は、座標を再調整して `x` と `y` に保存します。

`mouseup` イベントで線の最後の区間を描画し、 `x` と `y` をそれぞれを `0` に設定し、その後の描画を止めるために `isDrawing` を `false` に設定します。

### HTML

```html
<h1>マウスイベントを使ったお絵かき</h1>
<canvas id="myPics" width="560" height="360"></canvas>
```

### CSS

```css
canvas {
  border: 1px solid black;
  width: 560px;
  height: 360px;
}
```

### JavaScript

```js
// 真のとき、マウスを動かすと線を描く
let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');

// event.offsetX, event.offsetY はキャンバスの縁からのオフセットの (x,y) です。

// mousedown, mousemove, mouseup にイベントリスナーを追加
myPics.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myPics.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
```

### 結果

{{EmbedLiveSample("Examples", 640, 450)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [イベントの紹介](/ja/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
