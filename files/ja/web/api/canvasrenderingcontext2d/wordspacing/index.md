---
title: "CanvasRenderingContext2D: wordSpacing プロパティ"
short-title: wordSpacing
slug: Web/API/CanvasRenderingContext2D/wordSpacing
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{APIRef}}

**`CanvasRenderingContext2D.wordSpacing`** は[キャンバス API](/ja/docs/Web/API/Canvas_API) のプロパティで、テキストを描画する際の単語間の空間を指定します。

これは CSS の [`word-spacing`](/ja/docs/Web/CSS/word-spacing) プロパティに相当します。

## 値

単語間の空間を CSS の {{cssxref("length")}} データ形式の文字列として設定します。
既定値はは `0px` です。

このプロパティは、空間を取得または設定するために使用することができます。
プロパティ値は、不正な値/解析不可能な値に設定しても変更されません。

## 例

この例では、"Hello World "というテキストを 3 回表示し、それぞれの用途で間隔を変更するために `wordSpacing` プロパティを使用しています。
空間もプロパティの値を使用して、それぞれの用途ごとに表示されます。

### HTML

```html
<canvas id="canvas" width="700"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "30px serif";

// Default word spacing
ctx.fillText(`Hello world (既定値: ${ctx.wordSpacing})`, 10, 40);

// Custom word spacing: 10px
ctx.wordSpacing = "10px";
ctx.fillText(`Hello world (${ctx.wordSpacing})`, 10, 90);

// Custom word spacing: 30px
ctx.wordSpacing = "30px";
ctx.fillText(`Hello world (${ctx.wordSpacing})`, 10, 140);
```

### 結果

{{ EmbedLiveSample('Examples', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CanvasRenderingContext2D.letterSpacing")}}
