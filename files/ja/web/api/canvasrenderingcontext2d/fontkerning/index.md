---
title: "CanvasRenderingContext2D: fontKerning プロパティ"
short-title: fontKerning
slug: Web/API/CanvasRenderingContext2D/fontKerning
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

**`CanvasRenderingContext2D.fontKerning`** は[キャンバス API](/ja/docs/Web/API/Canvas_API) のプロパティで、フォントのカーニング情報をどのように使用するかを指定します。

カーニングはプロポーショナルフォントにおいて隣り合う文字の間隔を調整するもので、利用できる空間があれば、文字がお互いの視覚領域に入り込むようにします。
例えば、カーニングが施されたフォントでは、`AV`、`Ta`、`We` の文字が互いに寄り集まり、カーニングのない同等のテキストよりも文字空間が均一で読みやすくなります。

このプロパティは CSS の [`font-kerning`](/ja/docs/Web/CSS/font-kerning) プロパティに相当します。

## 値

このプロパティを使用して、値を取得したり設定したりすることができます。

利用可能な値は次の通りです。

- `auto`
  - : フォントのカーニングを使用するかどうかはブラウザーが決定します。
    例えば、小さなフォントでカーニングを適用するとテキストが読みにくくなる可能性があるため、無効とするブラウザーもあります。
- `normal`
  - : フォントに格納されているフォントカーニング情報を必ず適用します。
- `none`
  - : フォントに格納されているフォントカーニング情報を無効にします。

## 例

この例では、 `textRendering` プロパティに対応しているそれぞれの値を用いて、 "AVA Ta We" というテキストを表示します。

### HTML

```html
<canvas id="canvas" width="700" height="140"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "30px serif";

// Default (auto)
ctx.fillText(`AVA Ta We (既定値: ${ctx.fontKerning})`, 5, 30);

// Font kerning: normal
ctx.fontKerning = "normal";
ctx.fillText(`AVA Ta We (${ctx.fontKerning})`, 5, 70);

// Font kerning: none
ctx.fontKerning = "none";
ctx.fillText(`AVA Ta We (${ctx.fontKerning})`, 5, 110);
```

### 結果

最後の文字列はフォントのカーニングが無効になっているため、隣接する文字が均等に広がっていることに注意してください。

{{ EmbedLiveSample('Examples', 700, 150) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
