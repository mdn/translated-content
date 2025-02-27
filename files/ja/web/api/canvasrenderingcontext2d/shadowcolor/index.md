---
title: "CanvasRenderingContext2D: shadowColor プロパティ"
slug: Web/API/CanvasRenderingContext2D/shadowColor
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API の **`CanvasRenderingContext2D.shadowColor`** プロパティは、影の色を設定します。

描画時の影の不透明度は、塗りつぶしでは {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} の色の、線の描画では {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} の色の影響を受けることを覚えておいてください。

> [!NOTE]
> 影はプロパティ `shadowColor` が透明でない色に設定されているときのみ描画されます。さらに、プロパティ {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}、{{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}}、{{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}} のいずれかがゼロでない値に設定されていなければなりません。

## 値

[CSS](/ja/docs/Web/CSS) の {{cssxref("&lt;color&gt;")}} の値として解析される文字列です。デフォルト値は完全に透明な黒です。

## 例

### 図形に影を加える

この例では、2 個の正方形に影を加えます。正方形のうち 1 個は塗りつぶされ、もう 1 個は線で描かれます。`shadowColor` プロパティで影の色を設定し、`shadowOffsetX` と `shadowOffsetY` で影の図形からの相対位置を設定します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 影
ctx.shadowColor = "red";
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;

// 塗りつぶす長方形
ctx.fillRect(20, 20, 100, 100);

// 線で描く長方形
ctx.lineWidth = 6;
ctx.strokeRect(170, 20, 100, 100);
```

#### 結果

{{ EmbedLiveSample('Adding_a_shadow_to_shapes', 700, 180) }}

### 半透明な図形の影

影の不透明度は (`shadowColor` では完全に不透明な値を設定していても) 親オブジェクトの透明度の影響を受けます。この例では、半透明の色の長方形を線で描き、塗りつぶしを行います。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

塗りつぶす影のアルファ値は `.8 * .2` すなわち `.16` になります。線で描く影のアルファ値は `.8 * .6` すなわち `.48` になります。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 影
ctx.shadowColor = "rgba(255, 0, 0, .8)";
ctx.shadowBlur = 8;
ctx.shadowOffsetX = 30;
ctx.shadowOffsetY = 20;

// 塗りつぶす長方形
ctx.fillStyle = "rgba(0, 255, 0, .2)";
ctx.fillRect(10, 10, 150, 100);

// 線で描く長方形
ctx.lineWidth = 10;
ctx.strokeStyle = "rgba(0, 0, 255, .6)";
ctx.strokeRect(10, 10, 150, 100);
```

#### 結果

{{ EmbedLiveSample('Shadows_on_translucent_shapes', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### WebKit/Blink 固有の注意点

WebKit ベースおよび Blink ベースのブラウザーでは、このプロパティに加え、非標準で非推奨のメソッド `ctx.setShadow()` が実装されています。

```js
setShadow(width, height, blur, color, alpha);
setShadow(width, height, blur, graylevel, alpha);
setShadow(width, height, blur, r, g, b, a);
setShadow(width, height, blur, c, m, y, k, a);
```

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
