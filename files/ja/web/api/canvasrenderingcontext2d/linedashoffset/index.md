---
title: "CanvasRenderingContext2D: lineDashOffset プロパティ"
short-title: lineDashOffset
slug: Web/API/CanvasRenderingContext2D/lineDashOffset
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

**`CanvasRenderingContext2D.lineDashOffset`** はキャンバス 2D API のプロパティで、破線のオフセット、または「位相」を設定します。

> [!NOTE]
> 線は {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} メソッドを呼び出すことで描画されます。

## 値

破線のオフセット量を指定する浮動小数点数。デフォルト値は `0.0` です。

## 例

### 破線をずらす

この例では 2 本の破線が描画されます。まず最初の線には破線オフセットがありません。2 つ目は破線オフセットが 4 です。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.setLineDash([4, 16]);

// オフセットのない破線
ctx.beginPath();
ctx.moveTo(0, 50);
ctx.lineTo(300, 50);
ctx.stroke();

// オフセットが 4 である破線
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineDashOffset = 4;
ctx.moveTo(0, 100);
ctx.lineTo(300, 100);
ctx.stroke();
```

#### 結果

オフセット付き破線は赤色で描画されます。

{{ EmbedLiveSample('Offsetting_a_line_dash', 700, 180) }}

### アリの行進

[アリの行進](https://en.wikipedia.org/wiki/Marching_ants)効果は、コンピュータグラフィックスプログラムの選択ツールで多くの場合見られるアニメーション技法です。選択範囲の境界線をアニメーション化することで、ユーザーが選択範囲の境界線と画像の背景を判別しやすくします。

```html hidden
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let offset = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setLineDash([4, 2]);
  ctx.lineDashOffset = offset;
  ctx.strokeRect(10, 10, 100, 100);
}

function march() {
  offset++;
  if (offset > 5) {
    offset = 0;
  }
  draw();
  setTimeout(march, 20);
}

march();
```

{{ EmbedLiveSample('Marching_ants', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
- [スタイルと色の適用](/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
