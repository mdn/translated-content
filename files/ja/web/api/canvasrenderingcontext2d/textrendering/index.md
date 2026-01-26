---
title: "CanvasRenderingContext2D: textRendering プロパティ"
short-title: textRendering
slug: Web/API/CanvasRenderingContext2D/textRendering
l10n:
  sourceCommit: e7eb0e7c8c9e23554bb4f85ce6f86dc4991c419b
---

{{APIRef}}

**`CanvasRenderingContext2D.textRendering`** は[キャンバス API](/ja/docs/Web/API/Canvas_API) のプロパティで、テキストを描画するときに何を最適化するかについての情報をレンダリングエンジンに提供します。

値は SVG の [`text-rendering`](/ja/docs/Web/SVG/Reference/Attribute/text-rendering) 属性（および CSS の [`text-rendering`](/ja/docs/Web/CSS/Reference/Properties/text-rendering) プロパティ）に相当します。

## 値

ブラウザーのエンジンへ渡す、テキストを描画するヒントです。
以下のいずれかです。

- `auto`
  - : ブラウザーは、テキストを描画する際に、速度、読みやすさ、幾何学的な精度を最適化するタイミングについて、経験に基づいて推測します。
- `optimizeSpeed`
  - : ブラウザーはテキストを描画する際、読みやすさや幾何学的精度よりも描画速度を重視します。
    カーニングと合字を無効にします。
- `optimizeLegibility`
  - : ブラウザーは、レンダリング速度や幾何学的精度よりも読みやすさを重視します。
    これによりカーニングとオプションの合字が有効になります。
- `geometricPrecision`
  - : ブラウザーは、描画速度や読みやすさよりも幾何学的な正確さを 重視します。
    フォントのある側面（カーニングなど）は直線的に変倍するわけではありません。
    変倍率が大きい場合、テキストの描画があまり美しくないことがありますが、サイズは期待通りになります（基盤のオペレーティングシステムを対応している最も近いフォントサイズに切り上げも切り下げもされません）。

プロパティは、値を取得または設定するために使用することができます。

## 例

この例では、`textRendering`プロパティの対応している値をそれぞれ使用して、テキスト "Hello World "を表示しています。
また、プロパティを読み込むことで、それぞれの場合の値も表示されます。

### HTML

```html
<canvas id="canvas" width="700" height="220"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "20px serif";

// Default (auto)
ctx.fillText(`Hello world (default: ${ctx.textRendering})`, 5, 20);

// Text rendering: optimizeSpeed
ctx.textRendering = "optimizeSpeed";
ctx.fillText(`Hello world (${ctx.textRendering})`, 5, 50);

// Text rendering: optimizeLegibility
ctx.textRendering = "optimizeLegibility";
ctx.fillText(`Hello world (${ctx.textRendering})`, 5, 80);

// Text rendering: geometricPrecision
ctx.textRendering = "geometricPrecision";
ctx.fillText(`Hello world (${ctx.textRendering})`, 5, 110);
```

### 結果

{{ EmbedLiveSample('Examples', 700, 230) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
