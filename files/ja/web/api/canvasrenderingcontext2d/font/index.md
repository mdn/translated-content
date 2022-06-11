---
title: CanvasRenderingContext2D.font
slug: Web/API/CanvasRenderingContext2D/font
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - プロパティ
  - リファレンス
browser-compat: api.CanvasRenderingContext2D.font
translation_of: Web/API/CanvasRenderingContext2D/font
---
{{APIRef}}

**`CanvasRenderingContext2D.font`** はキャンバス 2D API のプロパティで、テキストを描画するときに用いられる現在のテキストスタイルを指定します。この文字列は [CSS の font](/ja/docs/Web/CSS/font) の記述子と同じ構文を用います。

## 構文

```js
ctx.font = value;
```

### オプション

- `value`
  - : {{domxref("DOMString")}} で、 CSS の {{cssxref("font")}} の値として解釈されるものです。既定のフォントは 10px sans-serif です。

## 例

### カスタムフォントの使用

この例では、 `font` プロパティを使用して、カスタムフォントの太さ、大きさ、ファミリーを指定します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.font = 'bold 48px serif';
ctx.strokeText('Hello world', 50, 100);
```

#### 結果

{{ EmbedLiveSample('Using_a_custom_font', 700, 180) }}

CSS フォント読み込み API でフォントを読み込む

{{domxref("FontFace")}} API の助力により、キャンバスで使用する前にフォントを明示的に読み込むことができます。

```js
let f = new FontFace('test', 'url(x)');

f.load().then(function() {
  // canvas コンテキストでフォントを使用する準備ができた
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### Gecko 特有のメモ

 - Firefox など Gecko ベースのブラウザーでは、このプロパティのほかに標準外かつ非推奨の `ctx.mozTextStyle` を定義しています。代わりに `ctx.font` を使用してください。
 - Gecko では、システムフォントをキャンバスの 2D コンテキストの {{domxref("CanvasRenderingContext2D.font", "font")}} (例えば `menu`) の値として設定した場合、フォントの値を取得しても期待したフォントが返されない (何も返されない) ことがありました。これは、Firefox 57 でリリースされた Firefox の並列 CSS エンジン [Quantum/Stylo]("https://wiki.mozilla.org/Quantum/Stylo) で修正されました (bug 1374885)。

## 関連情報

- このメソッドを定義するインターフェイス: {{domxref("CanvasRenderingContext2D")}}
