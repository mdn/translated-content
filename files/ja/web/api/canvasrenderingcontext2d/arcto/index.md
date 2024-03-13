---
title: CanvasRenderingContext2D.arcTo()
slug: Web/API/CanvasRenderingContext2D/arcTo
---

{{APIRef}}

**`CanvasRenderingContext2D.arcTo()`** はキャンバス 2D APIのメソッドで、制御点と半径を指定して現在のサブパスに円弧を追加します。円弧は、指定された引数で必要に応じて、パスの最後の点に自動的に直線で接続されます。

このメソッドは、主に角丸の図形を描画するのに使用されます。

> **メモ:** 相対的に大きな半径を指定した場合、得られる角丸の描線が期待するものとは異なる可能性があります。円弧と連結する直線は円弧の半径に合うように描線されます。

## 構文

```js
void ctx.arcTo(x1, y1, x2, y2, radius);
```

### 引数

- `x1`
  - : 1 つ目の制御点の x 座標。
- `y1`
  - : 1 つ目の制御点の y 座標。
- `x2`
  - : 2 つ目の制御点の x 座標。
- `y2`
  - : 2 つ目の制御点の y 座標。
- `radius`
  - : 円弧の半径。負でない値を設定する必要があります。

## 結果

### arcTo の動作

`arcTo()` の動作を解釈するには、始点と 1 つ目の制御点を結ぶ直線と、そこから 2 つ目の制御点を結ぶ直線の 2 つの線をイメージする方法があります。 `arcTo()` を使用しない場合、これら 2 つの線分は鋭角を形成しますが、 `arcTo()` はこの鋭角部分に接する円弧を描くことで滑らかに接続します。すなわち、 2 つの直線に接する円弧を作成することになります。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 補助線
ctx.beginPath();
ctx.strokeStyle = "gray";
ctx.moveTo(200, 20);
ctx.lineTo(200, 130);
ctx.lineTo(50, 20);
ctx.stroke();

// 円弧
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.moveTo(200, 20);
ctx.arcTo(200, 130, 50, 20, 40);
ctx.stroke();

// 開始点
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.arc(200, 20, 5, 0, 2 * Math.PI);
ctx.fill();

// 制御点
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(200, 130, 5, 0, 2 * Math.PI); // Control point one
ctx.arc(50, 20, 5, 0, 2 * Math.PI); // Control point two
ctx.fill();
```

#### 結果

この例では、 `arcTo()` によって描かれる線を**黒い太線**を描きます。補助線は灰色、制御点は赤、開始点は青です。

{{ EmbedLiveSample('How_arcTo_works', 315, 165) }}

### 角丸図形の作成

この例では `arcTo()`を用いて丸い角を持つ線を描画しています。これが最も一般的な使われ方です。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

描線は直前の `moveTo()` により座標 (230, 20) から開始し、 2 つの制御点 (90, 130) と (20, 20) を結ぶ直線に接するように形成された半径 50 の円弧に接続されます。円弧の終端からは `lineTo()` メソッドにより (20, 20) の点まで直線が描画されます。 2 つ目の制御点の座標と同じ座標を `lineTo()` で指定することで、より滑らかな描線を得ることができます。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const p0 = { x: 230, y: 20 };
const p1 = { x: 90, y: 130 };
const p2 = { x: 20, y: 20 };

const labelPoint = function (p) {
  const offset = 15;
  ctx.fillText("(" + p.x + "," + p.y + ")", p.x + offset, p.y + offset);
};

ctx.beginPath();
ctx.moveTo(p0.x, p0.y);
ctx.arcTo(p1.x, p1.y, p2.x, p2.y, 50);
ctx.lineTo(p2.x, p2.y);

labelPoint(p0);
labelPoint(p1);
labelPoint(p2);

ctx.stroke();
```

#### 結果

{{ EmbedLiveSample('Creating_a_rounded_corner', 315, 165) }}

### 大きすぎる半径を指定した場合

相対的に大きな半径を指定した場合には、前述の方法では期待されるような滑らかな描線は得られません。この例では、 `moveTo()` 後の地点から円弧に接続される線は下方ではなく上方に向かってしまっています。これは、 2 つの直線に接する円の半径が大き過ぎるために、始点よりも上方に円弧との接点があるために発生しています。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(180, 90);
ctx.arcTo(180, 130, 110, 130, 130);
ctx.lineTo(110, 130);
ctx.stroke();
```

#### 結果

{{ EmbedLiveSample('Result_of_a_large_radius', 315, 165) }}

### ライブデモ

以下はより洗練されたデモです。半径の変化幅を調節し、どのように描線が変化するかを試すことができます。

#### HTML

```html
<div>
  <label for="radius">Radius: </label>
  <input name="radius" type="range" id="radius" min="0" max="100" value="50" />
  <label for="radius" id="radius-output">50</label>
</div>
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const controlOut = document.getElementById("radius-output");
const control = document.getElementById("radius");
control.oninput = () => {
  controlOut.textContent = r = control.value;
};

const mouse = { x: 0, y: 0 };

let r = 100; // Radius
const p0 = { x: 0, y: 50 };

const p1 = { x: 100, y: 100 };
const p2 = { x: 150, y: 50 };
const p3 = { x: 200, y: 100 };

const labelPoint = function (p, offset, i = 0) {
  const { x, y } = offset;
  ctx.beginPath();
  ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillText(`${i}:(${p.x}, ${p.y})`, p.x + x, p.y + y);
};

const drawPoints = function (points) {
  for (let i = 0; i < points.length; i++) {
    var p = points[i];
    labelPoint(p, { x: 0, y: -20 }, i);
  }
};

// Draw arc
const drawArc = function ([p0, p1, p2], r) {
  ctx.beginPath();
  ctx.moveTo(p0.x, p0.y);
  ctx.arcTo(p1.x, p1.y, p2.x, p2.y, r);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
};

let t0 = 0;
let rr = 0; // the radius that changes over time
let a = 0; // angle
let PI2 = Math.PI * 2;
const loop = function (t) {
  t0 = t / 1000;
  a = t0 % PI2;
  rr = Math.abs(Math.cos(a) * r);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawArc([p1, p2, p3], rr);
  drawPoints([p1, p2, p3]);
  requestAnimationFrame(loop);
};

loop(0);
```

#### 結果

{{EmbedLiveSample('Live_demo', 315, 200) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
