---
title: CanvasRenderingContext2D.drawFocusIfNeeded()
slug: Web/API/CanvasRenderingContext2D/drawFocusIfNeeded
tags:
  - API
  - アクセシビリティ
  - Canvas
  - CanvasRenderingContext2D
  - メソッド
  - リファレンス
browser-compat: api.CanvasRenderingContext2D.drawFocusIfNeeded
translation_of: Web/API/CanvasRenderingContext2D/drawFocusIfNeeded
---
{{APIRef}}

**`CanvasRenderingContext2D.drawFocusIfNeeded()`** はキャンバス 2D API のメソッドで、引数で与えられた要素にフォーカスが当たった時に、現在のパスもしくは指定されたパスの周りにフォーカスリングを描画します。

## 構文

```js
void ctx.drawFocusIfNeeded(element);
void ctx.drawFocusIfNeeded(path, element);
```

### 引数

- element
  - : フォーカスしたかどうかをチェックする要素。
- `path`
  - : 利用する {{domxref("Path2D")}} パス。

## 例

### ボタンのフォーカスの管理

この例では、キャンバス上に 2 つのボタンを描画します。 `drawFocusIfNeeded()` メソッドは、必要に応じてフォーカスリングを描画するために使用されます。

#### HTML

```html
<canvas id="canvas">
  <button id="button1">続ける</button>
  <button id="button2">終了</button>
</canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

document.addEventListener('focus', redraw, true);
document.addEventListener('blur', redraw, true);
canvas.addEventListener('click', handleClick, false);
redraw();

function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawButton(button1, 20, 20);
  drawButton(button2, 20, 80);
}

function handleClick(e) {
  // Calculate click coordinates
  const x = e.clientX - canvas.offsetLeft;
  const y = e.clientY - canvas.offsetTop;

  // 必要に応じて button1 をフォーカスする
  drawButton(button1, 20, 20);
  if (ctx.isPointInPath(x, y)) {
    button1.focus();
  }

  // 必要に応じて button2 をフォーカスする
  drawButton(button2, 20, 80);
  if (ctx.isPointInPath(x, y)) {
    button2.focus();
  }
}

function drawButton(el, x, y) {
  const active = document.activeElement === el;
  const width = 150;
  const height = 40;

  // ボタンの背景
  ctx.fillStyle = active ? 'pink' : 'lightgray';
  ctx.fillRect(x, y, width, height);

  // ボタンのテキスト
  ctx.font = '15px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = active ? 'blue' : 'black';
  ctx.fillText(el.textContent, x + width / 2, y + height / 2);

  // クリック可能な領域を定義
  ctx.beginPath();
  ctx.rect(x, y, width, height);

  // 必要に応じてフォーカスリングを描画
  ctx.drawFocusIfNeeded(el);
}
```

#### 結果

{{EmbedLiveSample('Managing_button_focus', 700, 180)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
