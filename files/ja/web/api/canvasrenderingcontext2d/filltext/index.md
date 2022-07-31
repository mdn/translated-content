---
title: CanvasRenderingContext2D.fillText()
slug: Web/API/CanvasRenderingContext2D/fillText
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Draw String
  - Draw Text
  - 文字列の描画
  - テキストの描画
  - Fill Text
  - Filling Text
  - メソッド
  - リファレンス
  - テキスト
  - fillText
browser-compat: api.CanvasRenderingContext2D.fillText
translation_of: Web/API/CanvasRenderingContext2D/fillText
---
{{APIRef("HTML DOM")}}

{{domxref("CanvasRenderingContext2D")}} の **`fillText()`** はキャンバス 2D API のメソッドで、指定した座標にテキスト文字列を描画し、その文字を現在の {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} で塗りつぶします。オプションの引数で、描画されるテキストの最大幅を指定すると、{{Glossary("user agent", "ユーザーエージェント")}}は、この幅に収まるようにテキストを圧縮したり、フォントサイズを縮小したりします。

このメソッドは現在のパスを変更することなく直接描画を行うため、その後の {{domxref("CanvasRenderingContext2D.fill()", "fill()")}} や {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} の呼び出しには影響を与えません。

テキストのフォントやレイアウト構成は、 {{domxref("CanvasRenderingContext2D.font","font")}}、{{domxref("CanvasRenderingContext2D.textAlign","textAlign")}}、{{domxref("CanvasRenderingContext2D.textBaseline","textBaseline")}}、{{domxref("CanvasRenderingContext2D.direction","direction")}} の各プロパティで定義されたものを使用して描画が行われます。

> **Note:** 文字列の文字の輪郭を描画するには、そのコンテキストで {{domxref("CanvasRenderingContext2D.strokeText", "strokeText()")}} メソッドを呼び出してください。

## 構文

```js
CanvasRenderingContext2D.fillText(text, x, y [, maxWidth]);
```

### 引数

- `text`
  - : {{domxref("DOMString")}} で、このコンテキストに描画するテキスト文字列を指定します。テキストは、 {{domxref("CanvasRenderingContext2D.font","font")}}、{{domxref("CanvasRenderingContext2D.textAlign","textAlign")}}、{{domxref("CanvasRenderingContext2D.textBaseline","textBaseline")}}、{{domxref("CanvasRenderingContext2D.direction","direction")}} の設定を使用して描画されます。
- `x`
  - : テキストの描画を始める、x 軸の座標をピクセル単位で指定します。
- `y`
  - : テキストの描画を始める、y 軸の座標をピクセル単位で指定します。
- `maxWidth` {{optional_inline}}
  - : 描画するテキストの最大幅をピクセル数で指定します。指定しなかった場合、テキストの幅は制限されません。この値を指定すると、ユーザーエージェントはカーニングを調整したり、水平方向に縮小されたフォントを選択したり（利用可能であるか、または品質を損なうことなく生成できる場合）、フォントを縮小したりして、指定した幅にテキストを収めます。

### 返値

{{jsxref("undefined")}}

## 例

### 塗りつぶしたテキストを描画

この例では、 "Hello world" という語を `fillText()` メソッドで描画します。

#### HTML

まず、描画するためのキャンバスが必要です。このコードでは、幅 400 ピクセル、横 150 ピクセルのコンテキストを作成します。

```html
<canvas id="canvas" width="400" height="150"></canvas>
```

#### JavaScript

この例の JavaScript コードは次のようになります。

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.font = '50px serif';
ctx.fillText('Hello world', 50, 90);
```

このコードでは、 {{HTMLElement("canvas")}} への参照を取得し、その 2D グラフィックコンテキストへの参照を取得します。

そして、 {{domxref("CanvasRenderingContext2D", "font")}} を高さ 50 ピクセルの "serif" （ユーザーの既定の{{interwiki("wikipedia", "セリフ_(文字)", "セリフ付き")}}フォント）に設定し、 `fillText()` を呼び出して座標 (50, 90) からテキスト "Hello world" を描画しています。

#### 結果

{{ EmbedLiveSample('Drawing_filled_text', 700, 180) }}

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
ctx.fillText('Hello world', 50, 90, 140);
```

#### 結果

{{ EmbedLiveSample('Restricting_the_text_size', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [テキストの描画](/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.strokeText()")}}
