---
title: CSS Painting API
slug: Web/API/CSS_Painting_API
---

{{DefaultAPISidebar("CSS Painting API")}}

CSS Painting API（[CSS Houdini](/ja/docs/Web/Houdini) API の傘の一部）を使用すると、開発者は要素の背景、境界線、またはコンテンツに直接描画できる JavaScript 関数を記述できます。

## 概念と使用方法

基本的に、CSS Painting API には、開発者が CSS の [`<image>`](/ja/docs/Web/CSS/image) の関数である {{cssxref('paint', 'paint()')}} のためのカスタム値を作成できる機能が含まれています。 次に、これらの値を {{cssxref("background-image")}} などのプロパティに適用して、要素に複雑なカスタム背景を設定できます。

例えば、次のようにです。

```css
aside {
  background-image: paint(myPaintedImage);
}
```

この API は {{domxref('PaintWorklet')}} を定義します。 これは、計算されたスタイルの変更に応じて画像をプログラムで生成するために使用できるワークレット（{{domxref('worklet')}}）です。 これの使用方法の詳細については、[CSS Painting API の使用](/ja/docs/Web/API/CSS_Painting_API/ガイド)を参照してください。

## インターフェイス

- {{domxref('PaintWorklet')}}
  - : CSS プロパティがファイルを予期している画像をプログラムで生成します。 [`CSS.paintWorklet`](/ja/docs/Web/API/CSS/paintWorklet) を介してこのインターフェイスにアクセスします。
- {{domxref('PaintWorkletGlobalScope')}}
  - : `paintWorklet` のグローバル実行コンテキスト。
- {{domxref('PaintRenderingContext2D')}}
  - : [CanvasRenderingContext2D API](/ja/docs/Web/API/CanvasRenderingContext2D) のサブセットを実装します。 レンダリング先のオブジェクトのサイズである出力ビットマップを持ちます。
- {{domxref('PaintSize')}}
  - : 出力ビットマップの幅と高さの読み取り専用の値を返します。

## ディクショナリ

- {{domxref('PaintRenderingContext2DSettings')}}
  - : [CanvasRenderingContext2D](/ja/docs/Web/API/CanvasRenderingContext2D) 設定のサブセットを提供するディクショナリ。

## 例

CSS で JavaScript を使用して要素の背景に直接描画するには、[`registerPaint()`](/ja/docs/Web/API/PaintWorklet/registerPaint) 関数を使用してペイントワークレットを定義し、paintWorklet の `addModule()` メソッドを使用してワークレットを含めるようドキュメントに指示し、CSS {{cssxref('paint', 'paint()')}} 関数を使用して作成した画像を含めます。

[`registerPaint()`](/ja/docs/Web/API/PaintWorklet/registerPaint) 関数を使用して、`'hollowHighlights'` という PaintWorklet を作成します。

```js
registerPaint(
  "hollowHighlights",
  class {
    static get inputProperties() {
      return ["--boxColor"];
    }

    static get inputArguments() {
      return ["*", "<length>"];
    }

    static get contextOptions() {
      return { alpha: true };
    }

    paint(ctx, size, props, args) {
      const x = 0;
      const y = size.height * 0.3;
      const blockWidth = size.width * 0.33;
      const blockHeight = size.height * 0.85;

      const theColor = props.get("--boxColor");
      const strokeType = args[0].toString();
      const strokeWidth = parseInt(args[1]);

      console.log(theColor);

      if (strokeWidth) {
        ctx.lineWidth = strokeWidth;
      } else {
        ctx.lineWidth = 1.0;
      }

      if (strokeType === "stroke") {
        ctx.fillStyle = "transparent";
        ctx.strokeStyle = theColor;
      } else if (strokeType === "filled") {
        ctx.fillStyle = theColor;
        ctx.strokeStyle = theColor;
      } else {
        ctx.fillStyle = "none";
        ctx.strokeStyle = "none";
      }

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(blockWidth, y);
      ctx.lineTo(blockWidth + blockHeight, blockHeight);
      ctx.lineTo(x, blockHeight);
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      for (let i = 0; i < 4; i++) {
        let start = i * 2;
        ctx.beginPath();
        ctx.moveTo(blockWidth + start * 10 + 10, y);
        ctx.lineTo(blockWidth + start * 10 + 20, y);
        ctx.lineTo(blockWidth + start * 10 + 20 + blockHeight, blockHeight);
        ctx.lineTo(blockWidth + start * 10 + 10 + blockHeight, blockHeight);
        ctx.lineTo(blockWidth + start * 10 + 10, y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    }
  },
);
```

次に、paintWorklet を含めます。

```html hidden
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  <li>item 4</li>
  <li>item 5</li>
  <li>item 6</li>
  <li>item 7</li>
  <li>item 8</li>
  <li>item 9</li>
  <li>item 10</li>
  <li>item 11</li>
  <li>item 12</li>
  <li>item 13</li>
  <li>item 14</li>
  <li>item 15</li>
  <li>item 16</li>
  <li>item 17</li>
  <li>item 18</li>
  <li>item 19</li>
  <li>item 20</li>
</ul>
```

```js
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/hilite.js",
);
```

次に、CSS の {{cssxref('paint', 'paint()')}} 関数で {{cssxref('&lt;image&gt;')}} を使用できます。

```css
li {
  --boxColor: hsla(55, 90%, 60%, 1);
  background-image: paint(hollowHighlights, stroke, 2px);
}

li:nth-of-type(3n) {
  --boxColor: hsla(155, 90%, 60%, 1);
  background-image: paint(hollowHighlights, filled, 3px);
}

li:nth-of-type(3n + 1) {
  --boxColor: hsla(255, 90%, 60%, 1);
  background-image: paint(hollowHighlights, stroke, 1px);
}
```

セレクターブロックに boxColor を定義するカスタムプロパティを含めました。 PaintWorklet からカスタムプロパティにアクセスできます。

{{EmbedLiveSample("hollowExample", 300, 300)}}

## 仕様

{{Specifications}}

## ブラウザーの互換性

各 CSS Painting API インターフェイスのブラウザーの互換性のデータを参照してください。

## 関連情報

- [CSS Painting API の使用](/ja/docs/Web/API/CSS_Painting_API/ガイド)
- [CSS Typed Object Model API](/ja/docs/Web/CSS_Typed_OM)
- [CSS Houdini](/ja/docs/Web/Houdini)
