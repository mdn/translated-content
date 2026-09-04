---
title: "CanvasRenderingContext2D: getTransform() メソッド"
short-title: getTransform()
slug: Web/API/CanvasRenderingContext2D/getTransform
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

**`CanvasRenderingContext2D.getTransform()`** はキャンバス 2D API のメソッドで、このコンテキストに適用されている現在の変換行列を取得します。

## 構文

```js-nolint
getTransform()
```

### 引数

None.

### 返値

{{domxref("DOMMatrix")}} オブジェクトです。

変換行列は次のよう記述されます。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a & c & e \\ b & d & f \\ 0 & 0 & 1 \end{array} \right]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

> [!NOTE]
> 返されたオブジェクトはライブではないため、更新しても現在の変換行列には影響せず、現在の変換行列を更新しても既に返された `DOMMatrix` には影響しません。

## 例

次の例では、2 つの {{htmlelement("canvas")}} 要素があります。まず、最初の要素のコンテキストに {{domxref("CanvasRenderingContext2D.setTransform()")}} を使用して座標変換を適用し、その上に四角形を描画します。その後、`getTransform()` を使用してその行列を取得します。

次に、取得した行列を `setTransform()` に直接`DOMMatrix`オブジェクトを渡すことで、2つ目のキャンバスコンテキストに直接適用し、その上に円を描画します。

### HTML

```html
<canvas width="240"></canvas> <canvas width="240"></canvas>
```

### CSS

```css
canvas {
  border: 1px solid black;
}
```

### JavaScript

```js
const canvases = document.querySelectorAll("canvas");
const ctx1 = canvases[0].getContext("2d");
const ctx2 = canvases[1].getContext("2d");

ctx1.setTransform(1, 0.2, 0.8, 1, 0, 0);
ctx1.fillRect(25, 25, 50, 50);

let storedTransform = ctx1.getTransform();
console.log(storedTransform);

ctx2.setTransform(storedTransform);
ctx2.beginPath();
ctx2.arc(50, 50, 50, 0, 2 * Math.PI);
ctx2.fill();
```

### 結果

{{ EmbedLiveSample('Examples', "100%", 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.transform()")}}
