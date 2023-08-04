---
title: "CanvasRenderingContext2D: font プロパティ"
slug: Web/API/CanvasRenderingContext2D/font
l10n:
  sourceCommit: 1306c224f386c6a8038a3bd115ce5637d5bd6084
---

{{APIRef}}

**`CanvasRenderingContext2D.font`** はキャンバス 2D API のプロパティで、テキストを描画するときに用いられる現在のテキストスタイルを指定します。この文字列は [CSS の font](/ja/docs/Web/CSS/font) の記述子と同じ構文を用います。

## 値

文字列で、CSS の {{cssxref("font")}} の値として解釈されるものです。既定のフォントは 10px sans-serif です。

## 例

### カスタムフォントの使用

この例では、 `font` プロパティを使用して、カスタムフォントの太さ、大きさ、ファミリーを指定します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "bold 48px serif";
ctx.strokeText("Hello world", 50, 100);
```

#### 結果

{{ EmbedLiveSample('Using_a_custom_font', 700, 180) }}

### CSS フォント読み込み API でフォントを読み込む

{{domxref("FontFace")}} API の助力により、キャンバスで使用する前にフォントを明示的に読み込むことができます。

```js
let f = new FontFace("test", "url(x)");

f.load().then(() => {
  // canvas コンテキストでフォントを使用する準備ができた
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義するインターフェイス: {{domxref("CanvasRenderingContext2D")}}
