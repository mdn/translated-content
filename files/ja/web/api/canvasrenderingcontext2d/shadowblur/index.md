---
title: "CanvasRenderingContext2D: shadowBlur プロパティ"
slug: Web/API/CanvasRenderingContext2D/shadowBlur
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API の **`CanvasRenderingContext2D.shadowBlur`** プロパティは、影にかかるぼかしの量を設定します。デフォルトは `0` (ぼかしなし) です。

> [!NOTE]
> 影はプロパティ {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}} が透明でない値に設定されているときのみ描画されます。さらに、プロパティ `shadowBlur`、{{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}}、{{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}} のいずれかがゼロでない値に設定されていなければなりません。

## 値

影のぼかしの度合いを設定する非負の浮動小数点数です。`0` がぼかしなしを表し、数を大きくするとぼかしが強くなります。この値はピクセル数には対応せず、現在の変換行列の影響を受けません。デフォルト値は `0` です。負の値、{{jsxref("Infinity")}}、{{jsxref("NaN")}} は無視されます。

## 例

### 図形に影を加える

この例では、長方形にぼかしがかかった影を加えます、`shadowColor` プロパティで影の色を設定し、`shadowBlur` でぼかしの度合いを設定します。

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
ctx.shadowBlur = 15;

// 長方形
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 150, 100);
```

#### 結果

{{ EmbedLiveSample('Adding_a_shadow_to_a_shape', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### WebKit/Blink 固有の注意点

WebKit ベースおよび Blink ベースのブラウザーでは、このプロパティに加えて非標準で非推奨のメソッド `ctx.setShadow()` が実装されています。

```js
setShadow(width, height, blur, color, alpha);
setShadow(width, height, blur, graylevel, alpha);
setShadow(width, height, blur, r, g, b, a);
setShadow(width, height, blur, c, m, y, k, a);
```

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
