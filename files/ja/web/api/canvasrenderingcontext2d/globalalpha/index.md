---
title: "CanvasRenderingContext2D: globalAlpha プロパティ"
short-title: globalAlpha
slug: Web/API/CanvasRenderingContext2D/globalAlpha
l10n:
  sourceCommit: c8b447485fd893d5511d88f592f5f3aec29a725b
---

{{APIRef}}

**`CanvasRenderingContext2D.globalAlpha`** はキャンバス 2D API のプロパティで、図形や画像をキャンバスに描画する際に適用されるアルファ値（透明度）を設定します。

> **メモ:** [キャンバスチュートリアル](/ja/docs/Web/API/Canvas_API/Tutorial)の[スタイルと色の適用](/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)も参照してください。

## 値

`0.0` (完全に透明) と `1.0` (完全に不透明) の間の数値で、両端を含みます。デフォルト値は `1.0` です。{{jsxref("Infinity")}} や {{jsxref("NaN")}} を含むこの範囲の外の値は設定されず、`globalAlpha` のもとの値が維持されます。

## 例

### 半透明の図形を描画する

この例では、`globalAlpha` プロパティを用いて 2 個の半透明の矩形を描画します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.globalAlpha = 0.5;

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 100);
```

#### 結果

{{ EmbedLiveSample('Drawing_translucent_shapes', 700, 180) }}

### 透明な図形を重ねる

この例では、複数の透明な図形をそれぞれの上に重ねることの効果を示します。まず、4 個の異なる色の正方形からなるはっきりした背景を描画します。次に、`globalAlpha` プロパティを `0.2` (20% 不透明) に設定します。このアルファレベルは、透明な図形すべてに適用されます。そして、`for` ループを用いて半径を大きくしながら円を描いていきます。

新しい円を描くごとに、下にある既存の円の不透明度が事実上上がります。ステップ数を増やす (ことで描く円を増やす) と、やがて画像の中央から背景は完全に消えるでしょう。

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 背景を描画する
ctx.fillStyle = "#FD0";
ctx.fillRect(0, 0, 75, 75);
ctx.fillStyle = "#6C0";
ctx.fillRect(75, 0, 75, 75);
ctx.fillStyle = "#09F";
ctx.fillRect(0, 75, 75, 75);
ctx.fillStyle = "#F30";
ctx.fillRect(75, 75, 75, 75);
ctx.fillStyle = "#FFF";

// 透明度を設定する
ctx.globalAlpha = 0.2;

// 透明な円を描画する
for (let i = 0; i < 7; i++) {
  ctx.beginPath();
  ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
  ctx.fill();
}
```

{{EmbedLiveSample("Overlaying_transparent_shapes", "", "180")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### Gecko 固有の注意点

- Gecko 5.0 以降では、不正な値を `globalAlpha` に設定しても `SYNTAX_ERR` 例外は投げられず、正しく黙って無視されます。

### WebKit/Blink 固有の注意点

- WebKit ベースと Blink ベースのブラウザーでは、このプロパティに加え、非標準で非推奨のメソッド `ctx.setAlpha()` が実装されています。

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}}
