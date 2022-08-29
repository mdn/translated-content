---
title: CanvasRenderingContext2D.closePath()
slug: Web/API/CanvasRenderingContext2D/closePath
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - メソッド
  - リファレンス
browser-compat: api.CanvasRenderingContext2D.closePath
translation_of: Web/API/CanvasRenderingContext2D/closePath
---
{{APIRef}}

**`CanvasRenderingContext2D.closePath()`** はキャンバス 2D API のメソッドで、現在の点から現在のサブパスの開始点までの間に直線を追加することを試みます。図形がすでに閉じていたり、 1 つしか点がなかったりした場合は、この関数は何もしません。

このメソッドはキャンバスには直接は何も描きません。 {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} または {{domxref("CanvasRenderingContext2D.fill()", "fill()")}} メソッドを使用してそのパスを描画することができます。

## 構文

```js
void ctx.closePath();
```

## 例

### 三角形を閉じる

この例は最初に三角形の2つの (対角の) 辺を `lineTo()` メソッドを使用して作成します。その後で、図形の最初と最後の点を自動的に接続する `closePath()` メソッドで、底辺を作成します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

三角形の頂点は、 (20, 150), (120, 20), (220, 150) とします。

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(20, 140);   // ペンを左下の隅へ移動
ctx.lineTo(120, 10);   // 上中央へ線を引く
ctx.lineTo(220, 140);  // 右下の隅へ線を引く
ctx.closePath();       // 左下の隅へ線を引く
ctx.stroke();
```

#### 結果

{{ EmbedLiveSample('Closing_a_triangle', 700, 180) }}

### サブパスを 1 つだけ閉じる

この例では、非接続のサブパス3つからなるスマイリーの顔マークを描画します。

> **Note:** すべての弧について、作成された後で `closePath()` が呼び出されていますが、最後の弧 (サブパス) のみが閉じられます。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

最初の 2 つの弧は顔の目を作成します。最後の弧は口を作成します。

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(240, 20, 40, 0, Math.PI);
ctx.moveTo(100, 20);
ctx.arc(60, 20, 40, 0, Math.PI);
ctx.moveTo(215, 80);
ctx.arc(150, 80, 65, 0, Math.PI);
ctx.closePath();
ctx.lineWidth = 6;
ctx.stroke();
```

#### 結果

{{ EmbedLiveSample('Closing_just_one_sub-path', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.beginPath()")}}
