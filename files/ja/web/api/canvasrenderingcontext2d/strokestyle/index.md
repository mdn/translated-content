---
title: "CanvasRenderingContext2D: strokeStyle プロパティ"
short-title: strokeStyle
slug: Web/API/CanvasRenderingContext2D/strokeStyle
l10n:
  sourceCommit: c8b447485fd893d5511d88f592f5f3aec29a725b
---

{{APIRef}}

**`CanvasRenderingContext2D.strokeStyle`** はキャンバス 2D API のプロパティで、図形の辺（輪郭）に使用する色、グラデーション、またはパターンを指定します。既定値は `#000` （黒色）です。

> [!NOTE]
> 輪郭と塗りつぶしのスタイル例については、[キャンバスのチュートリアル](/ja/docs/Web/API/Canvas_API/Tutorial)の [スタイルと色の適用](/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) をご覧ください。

## 値

以下のいずれかです。

- `color`
  - : CSS の {{cssxref("&lt;color&gt;")}} 値として解釈される文字列。
- `gradient`
  - : {{domxref("CanvasGradient")}} オブジェクト（線形または放射グラデーション）。
- `pattern`
  - : {{domxref("CanvasPattern")}} オブジェクト（繰り返し画像）。

## 例

### 図形の輪郭色の変更

このサンプルでは、青色の輪郭を矩形に適用します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "blue";
ctx.strokeRect(10, 10, 100, 100);
```

#### 結果

{{ EmbedLiveSample('Changing_the_stroke_color_of_a_shape', 700, 160) }}

### ループを使用した複数の輪郭色の作成

この例では、 2 つの `for` ループと {{domxref("CanvasRenderingContext2D.arc", "arc()")}} メソッドを使用して、それぞれが異なる輪郭色を持つ円のグリッドを描画します。このためには、 2 つの変数 `i` と `j` を使用して、円ごとに固有の RGB 色を生成し、また緑色と青色の値だけを変更するようにします（赤色は固定値とします）。

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const ctx = document.getElementById("canvas").getContext("2d");

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    ctx.strokeStyle = `rgb(
        0
        ${Math.floor(255 - 42.5 * i)}
        ${Math.floor(255 - 42.5 * j)})`;
    ctx.beginPath();
    ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
    ctx.stroke();
  }
}
```

結果はこのようになります。

{{EmbedLiveSample("Creating_multiple_stroke_colors_using_loops", "", "180")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### WebKit/Blink 特有のメモ

WebKit および Blink ベースのブラウザーの場合、このプロパティに加えて、非標準で非推奨のメソッド `ctx.setStrokeColor()` が実装されています。

```js
setStrokeColor(color);
setStrokeColor(color, alpha);
setStrokeColor(grayLevel);
setStrokeColor(grayLevel, alpha);
setStrokeColor(r, g, b, a);
setStrokeColor(c, m, y, k, a);
```

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasPattern")}}
