---
title: CanvasRenderingContext2D.strokeRect()
slug: Web/API/CanvasRenderingContext2D/strokeRect
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - メソッド
  - リファレンス
browser-compat: api.CanvasRenderingContext2D.strokeRect
translation_of: Web/API/CanvasRenderingContext2D/strokeRect
---
{{APIRef}}

**`CanvasRenderingContext2D.strokeRect()`** はキャンバス 2D API のメソッドで、矩形の輪郭を現在の {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} とその他のコンテキスト設定によって描画します。

このメソッドは、現在のパスを変更せずキャンバスに直接描画するため、 その後の {{domxref("CanvasRenderingContext2D.fill()", "fill()")}} または {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} の呼び出しには影響を与えません。

## 構文

```js
void ctx.strokeRect(x, y, width, height);
```

`strokeRect()` は、座標 `(x, y)` を始点とし、大きさが `(width, height)` の矩形の輪郭を描画します。

### 引数

- `x`
  - : 矩形の始点となる x 座標。
- `y`
  - : 矩形の始点となる y 座標。
- `width`
  - : 矩形の幅。正の値で右方向、負の値で左方向に描画します。
- `height`
  - : 矩形の高さ。正の値で下方向、負の値で上方向に描画します。

## 例

### 単純な矩形の輪郭

この例では、 `strokeRect()` により矩形を緑色の輪郭で描画します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

以下に示される矩形の左上角の座標は (20, 10) です。幅は 160 で、高さは 100 です。

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'green';
ctx.strokeRect(20, 10, 160, 100);
```

#### 結果

{{ EmbedLiveSample('A_simple_stroked_rectangle', 700, 180) }}

### 様々なコンテキスト設定の適用

この例では、面取りされた太い線の矩形を影付きで描画します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.shadowColor = '#d53';
ctx.shadowBlur = 20;
ctx.lineJoin = 'bevel';
ctx.lineWidth = 15;
ctx.strokeStyle = '#38f';
ctx.strokeRect(30, 30, 160, 90);
```

#### 結果

{{ EmbedLiveSample('Applying_various_context_settings', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
- {{domxref("CanvasRenderingContext2D.clearRect()")}}
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
