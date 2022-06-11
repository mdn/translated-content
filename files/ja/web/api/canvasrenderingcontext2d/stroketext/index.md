---
title: CanvasRenderingContext2D.strokeText()
slug: Web/API/CanvasRenderingContext2D/strokeText
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Draw String
  - Draw Text
  - 文字列の描画
  - テキストの描画
  - メソッド
  - リファレンス
  - Stroke String
  - テキストの輪郭
  - strokeText
browser-compat: api.CanvasRenderingContext2D.strokeText
translation_of: Web/API/CanvasRenderingContext2D/strokeText
---
{{APIRef}}

{{domxref("CanvasRenderingContext2D")}} の **`strokeText()`** メソッドはキャンバス 2D API の一部であり、テキスト文字列の文字の輪郭を指定した座標に描画します。オプションの引数で、描画されるテキストの最大幅を指定することができます。{{Glossary("user agent", "ユーザーエージェント")}}はこの幅を実現するために、、テキストを圧縮したり、フォントサイズを縮小したりします。

このメソッドは現在のパスを変更することなく、直接キャンバスに描画を行います。その後の {{domxref("CanvasRenderingContext2D.fill()", "fill()")}} や {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} には影響を与えません。

> **Note:** 輪郭線のみを描くのではなく、テキスト文字を塗りつぶすのであれば {{domxref('CanvasRenderingContext2D.fillText()', 'fillText()')}} メソッドを使用してください。

## 構文

```js
CanvasRenderingContext2D.strokeText(text, x, y [, maxWidth]);
```

### 引数

- `text`
  - : {{domxref("DOMString")}} で、このコンテキストに描画するテキスト文字列を指定します。
    テキストは {{domxref("CanvasRenderingContext2D.font","font")}}, {{domxref("CanvasRenderingContext2D.textAlign","textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline","textBaseline")}}, {{domxref("CanvasRenderingContext2D.direction","direction")}} で指定された設定を使用して描画されます。
- `x`
  - : テキストを描き始める位置の X 座標です。
- `y`
  - : テキストを描き始める位置の Y 座標です。
- `maxWidth` {{optional_inline}}
  - : テキストを描画する際の最大幅を指定します。指定しなかった場合、テキストの幅に制限はありません。しかし、この値を指定すると、ユーザーエージェントはカーニングを調整したり、より水平方向に縮小されたフォントを選択したり（利用可能であるか、または品質を損なうことなく生成できる場合）、または指定した幅にテキストを収めるためにより小さいフォントを使用したりします。

### 返値

{{jsxref("undefined")}} です。

## 例

### テキストの輪郭線の描画

この例では、 "Hello world" という語を `strokeText()` メソッドを使用して描きます。

#### HTML

最初に、描画先のキャンバスが必要です。このコードは 400 ピクセル幅、 150 ピクセル高のコンテキストを生成します。

```html
<canvas id="canvas" width="400" height="150"></canvas>
```

#### JavaScript

この例の JavaScript コードは次の通りです。

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.font = '50px serif';
ctx.strokeText('Hello world', 50, 90);
```

このコードは {{HTMLElement("canvas")}} への参照を受け取り、そこから二次元グラフィックコンテキストへの参照を取得します。

そこで、 {{domxref("CanvasRenderingContext2D.font", "font")}} に 50 ピクセル高の "serif" （ユーザーの既定の{{interwiki("wikipedia", "セリフ_(文字)", "セリフ付き")}}フォント）を設定し、`strokeText()` を呼呼び出して座標 (50, 90) からテキスト "Hello world" を描画します。

#### 結果

{{ EmbedLiveSample('Drawing_text_outlines', 700, 180) }}

### テキストの大きさの制限

この例は "Hello world" という文字列を、 140 ピクセルの幅に制約して描画します。

#### HTML

```html
<canvas id="canvas" width="400" height="150"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.font = '50px serif';
ctx.strokeText('Hello world', 50, 90, 140);
```

#### 結果

{{ EmbedLiveSample('Restricting_the_text_size', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [テキストの描画](/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillText()")}}
