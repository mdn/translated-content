---
title: "CanvasRenderingContext2D: createPattern() メソッド"
short-title: createPattern()
slug: Web/API/CanvasRenderingContext2D/createPattern
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

**`CanvasRenderingContext2D.createPattern()`** はキャンバス 2D API のメソッドで、指定された画像と繰り返しを使ってパターンを作成します。
このメソッドは {{domxref("CanvasPattern")}} を返します。

このメソッドはキャンバスに直接には何も描画しません。
作成したパターンは、その後の描画で適用するために {{domxref("CanvasRenderingContext2D.fillStyle")}} または {{domxref("CanvasRenderingContext2D.strokeStyle")}} プロパティに代入する必要があります。

## 構文

```js-nolint
createPattern(image, repetition)
```

### 引数

- `image`

  - : パターンの画像として使用する画像。
    以下のいずれかになります。

    - {{domxref("HTMLImageElement")}} ({{HTMLElement("img")}})
    - {{domxref("SVGImageElement")}} ({{SVGElement("image")}})
    - {{domxref("HTMLVideoElement")}} （動画のキャプチャに使用する {{HTMLElement("video")}}）
    - {{domxref("HTMLCanvasElement")}} ({{HTMLElement("canvas")}})
    - {{domxref("ImageBitmap")}}
    - {{domxref("OffscreenCanvas")}}
    - {{domxref("VideoFrame")}}

- `repetition`

  - : 文字列で、パターンの画像の反復方法を示します。
    取りうる値は次の通りです。

    - `"repeat"`（水平・垂直方向両方）
    - `"repeat-x"`（水平方向のみ）
    - `"repeat-y"`（垂直方向のみ）
    - `"no-repeat"`（反復なし）

    `repetition` が空文字列 (`""`) や [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null)（ただし {{jsxref("undefined")}} ではないもの）で指定されると、`"repeat"` の値が使用されます。

### 返値

- {{domxref("CanvasPattern")}}
  - : パターンを示す不透過なオブジェクトです。

`image` が完全に読み込まれていない場合（({{domxref("HTMLImageElement.complete")}} が `false` の場合）は [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) が返却されます。

## 例

### 画像からパターンを作成

この例では `createPattern()` メソッドを使用して、反復元画像を持つ {{domxref("CanvasPattern")}} を作成します。
作成されたパターンはキャンバスコンテキストの塗りつぶしスタイルに割り当てられ、矩形に適用されます。

元画像はこのようになります。

![花模様のパターン](canvas_createpattern.png)

#### HTML

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "canvas_createpattern.png";
// Only use the image after it's loaded
img.onload = () => {
  const pattern = ctx.createPattern(img, "repeat");
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 300, 300);
};
```

{{ EmbedLiveSample('Creating_a_pattern_from_an_image', 700, 310) }}

### キャンバスからパターンを作成

この例では、画面外のキャンバスの内容からパターンを作成します。
次に、このパターンをプライマリーキャンバスの塗りつぶしスタイルに適用し、そのキャンバスをパターンで塗りつぶします。

#### JavaScript

```js
// パターンとオフスクリーンキャンバスを作成
const patternCanvas = document.createElement("canvas");
const patternContext = patternCanvas.getContext("2d");

// パターンの幅と高さを 50 にする
patternCanvas.width = 50;
patternCanvas.height = 50;

// パターンに背景色を設定し、弧を描く
patternContext.fillStyle = "#fec";
patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
patternContext.arc(0, 0, 50, 0, 0.5 * Math.PI);
patternContext.stroke();

// プライマリーキャンバスを作成し、パターンで塗りつぶす
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const pattern = ctx.createPattern(patternCanvas, "repeat");
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// プライマリーキャンバスをウェブページへ追加
document.body.appendChild(canvas);
```

#### 結果

{{ EmbedLiveSample('Creating_a_pattern_from_a_canvas', 700, 160) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasPattern")}}
