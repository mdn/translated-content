---
title: CanvasRenderingContext2D.arc()
slug: Web/API/CanvasRenderingContext2D/arc
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - メソッド
  - リファレンス
browser-compat: api.CanvasRenderingContext2D.arc
translation_of: Web/API/CanvasRenderingContext2D/arc
---
{{APIRef}}

**`CanvasRenderingContext2D.arc()`** は[キャンバス 2D API](/ja/docs/Web/API/CanvasRenderingContext2D) のメソッドで、サブパスに円弧を加えます。

## 構文

```js
void ctx.arc(x, y, radius, startAngle, endAngle [, counterclockwise]);
```

`arc()` メソッドは (x, y) を中心とし、 `radius` を半径とした円弧を作成します。角度は `startAngle` から `endAngle` まで、 `counterclockwise` で指定された向き（既定では時計回り）に描かれます。

### 引数

- `x`
  - : 円弧の中心の水平座標です。
- `y`
  - : 円弧の中心の垂直座標です。
- `radius`
  - : 円弧の半径です。正の数である必要があります。
- `startAngle`
  - : 円弧の始まりの角度を、 X 軸の正の方向から時計回りに定められるラジアン角で表します。
- `endAngle`
  - : 円弧の終わりの角度を、 X 軸の正の方向から時計回りに定められるラジアン角で表します。
- `counterclockwise` {{optional_inline}}
  - : 省略可能な論理値です。 `true` の場合、円弧を反時計回りに始まりから終わりの角度に向けて描きます。既定値は `fale` （時計回り）です。

## 例

### 完全な円の描画

このコードは、 `arc()` メソッドで完全な円を描く方法を示します。

#### HTML

```html
<canvas></canvas>
```

#### JavaScript

円弧の X 座標は 100、 Y 座標は 75、半径は 50 です。円弧を一周させるには、 0 ラジアン（0**°**）の角度で始まり、 2π ラジアン（360**°**）の角度で終わります。

```js
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
```

#### 結果

{{ EmbedLiveSample('Drawing_a_full_circle', 700, 180) }}

### 様々な形状のデモ

以下の例は様々な形を描くことで、 `arc()` メソッドは何ができるのかを示します。

```html hidden
<canvas width="150" height="200"></canvas>
```

```js
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Draw shapes
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 2; j++) {
    ctx.beginPath();
    let x             = 25 + j * 50;                 // x 座標
    let y             = 25 + i * 50;                 // y 座標
    let radius        = 20;                          // 円弧の半径
    let startAngle    = 0;                           // 円弧の開始位置
    let endAngle      = Math.PI + (Math.PI * j) / 2; // 円弧の終了位置
    let counterclockwise = i % 2 == 1;                  // 円弧を描く方向

    ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

    if (i > 1) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
  }
}
```

#### 結果

{{ EmbedLiveSample('Different_shapes_demonstrated', 160, 210,
  "canvas_arc.png") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- 楕円弧を描くには {{domxref("CanvasRenderingContext2D.ellipse()")}} を使用してください。
