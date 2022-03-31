---
title: CanvasRenderingContext2D.textBaseline
slug: Web/API/CanvasRenderingContext2D/textBaseline
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - プロパティ
  - リファレンス
browser-compat: api.CanvasRenderingContext2D.textBaseline
translation_of: Web/API/CanvasRenderingContext2D/textBaseline
---
{{APIRef}}

**`CanvasRenderingContext2D.textBaseline`** はキャンバス 2D API のプロパティで、テキストを描画するときに用いられる現在のテキストのベースライン（基準線）を指定します。

## 構文

```js
ctx.textBaseline = "top" || "hanging" || "middle" || "alphabetic" || "ideographic" || "bottom";
```

### オプション

指定可能な値は次の通りです。

- `"top"`
  - : テキストのベースラインは em の高さの範囲 (em square) の上になります。
- `"hanging"`
  - : テキストのベースラインは hanging ベースラインになります（チベット語などのインド系の文字で使用されます）。
- `"middle"`
  - : テキストのベースラインは em の高さの範囲の中央になります。
- `"alphabetic"`
  - : テキストのベースラインは標準的なアルファベットベースラインになります。既定値です。
- `"ideographic"`
  - : テキストのベースラインは表意文字ベースラインになります。文字の主要範囲の底辺がアルファベットベースラインの下からはみ出る場合があるのに対し、このラインは主要範囲の底辺そのものを表します。(中国語、日本語、韓国語で意味を持ちます。)
- `"bottom"`
  - : テキストのベースラインは囲みボックスの下辺になります。表意文字ベースラインとの違いは、表意文字ベースラインがディセンダー (descenders) を考慮しないことです。

既定値は `"alphabetic"` です。

## 例

### 様々なプロパティ値の比較

この例では、様々な `textBaseline` プロパティ値を例示します。

#### HTML

```html
<canvas id="canvas" width="550" height="500"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const baselines = ['top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom'];
ctx.font = '36px serif';
ctx.strokeStyle = 'red';

baselines.forEach(function (baseline, index) {
  ctx.textBaseline = baseline;
  const y = 75 + index * 75;
  ctx.beginPath();
  ctx.moveTo(0, y + 0.5);
  ctx.lineTo(550, y + 0.5);
  ctx.stroke();
  ctx.fillText('Abcdefghijklmnop (' + baseline + ')', 0, y);
});
```

#### 結果

{{ EmbedLiveSample('Comparison_of_property_values', 700, 550) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているするインターフェイスである {{domxref("CanvasRenderingContext2D")}}
