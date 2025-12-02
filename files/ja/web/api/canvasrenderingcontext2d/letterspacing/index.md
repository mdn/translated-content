---
title: "CanvasRenderingContext2D: letterSpacing プロパティ"
short-title: letterSpacing
slug: Web/API/CanvasRenderingContext2D/letterSpacing
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{APIRef}}

**`CanvasRenderingContext2D.letterSpacing`** は[キャンバス API](/ja/docs/Web/API/Canvas_API) のプロパティで、テキストを描画する際の字間を指定します。

これは CSS の [`letter-spacing`](/ja/docs/Web/CSS/Reference/Properties/letter-spacing) プロパティに相当します。

## 値

文字間隔を CSS {{cssxref("length")}} のデータ形式の文字列で指定します。
既定値は `0px` です。

このプロパティを使用して、間隔を取得したり設定したりすることができます。
不正な値や解析不可能な値を設定しても、プロパティ値は変更されません。

## 例

この例では、"Hello World "というテキストを3回表示し、それぞれの用途で文字間隔を変更するために `letterSpacing` プロパティを使用しています。
間隔はプロパティの値を使用して、それぞれの場合ごとに表示されます。

### HTML

```html
<canvas id="canvas" width="700"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "30px serif";

// Default letter spacing
ctx.fillText(`Hello world (既定値: ${ctx.letterSpacing})`, 10, 40);

// Custom letter spacing: 10px
ctx.letterSpacing = "10px";
ctx.fillText(`Hello world (${ctx.letterSpacing})`, 10, 90);

// Custom letter spacing: 20px
ctx.letterSpacing = "20px";
ctx.fillText(`Hello world (${ctx.letterSpacing})`, 10, 140);
```

### 結果

{{ EmbedLiveSample('Examples', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CanvasRenderingContext2D.wordSpacing")}}
