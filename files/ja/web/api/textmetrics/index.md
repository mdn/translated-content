---
title: TextMetrics
slug: Web/API/TextMetrics
l10n:
  sourceCommit: 0a4d5b451cc54599ed2b99cef4fdd39c3fd96a3d
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

**`TextMetrics`** インターフェイスは、キャンバス内のテキストの一部の長さを表します。`TextMetrics` インスタンスは {{domxref("CanvasRenderingContext2D.measureText()")}} メソッドから取得することができます。

## インスタンスプロパティ

- {{domxref("TextMetrics.width")}} {{ReadOnlyInline}}
  - : インラインテキストのある区間の幅を CSS ピクセル単位で返します。コンテキストの現在のフォントを考慮します。
- {{domxref("TextMetrics.actualBoundingBoxLeft")}} {{ReadOnlyInline}}
  - : {{domxref("CanvasRenderingContext2D.textAlign")}} プロパティで指定された位置合わせ点から、指定されたテキストの境界矩形の左側までの、ベースラインに平行な距離（CSS ピクセル単位）。これは、指定された位置合わせ点から左方向への距離を示す正の数値です。
- {{domxref("TextMetrics.actualBoundingBoxRight")}} {{ReadOnlyInline}}
  - : {{domxref("CanvasRenderingContext2D.textAlign")}} プロパティで指定された位置合わせ点から、指定されたテキストの境界矩形の右端までの距離を CSS ピクセル単位で返します。距離はベースラインと平行に測定されます。
- {{domxref("TextMetrics.fontBoundingBoxAscent")}} {{ReadOnlyInline}}
  - : {{domxref("CanvasRenderingContext2D.textBaseline")}} 属性で指定された水平線から、テキストの描画に使用される全フォントの最も高い境界矩形の上端までの距離を、CSS ピクセル単位で返します。
- {{domxref("TextMetrics.fontBoundingBoxDescent")}} {{ReadOnlyInline}}
  - : {{domxref("CanvasRenderingContext2D.textBaseline")}} 属性で指定された水平線から、テキストの描画に使用されたすべてのフォントの境界矩形の下端までの距離を、CSS ピクセル単位で返します。
- {{domxref("TextMetrics.actualBoundingBoxAscent")}} {{ReadOnlyInline}}
  - : {{domxref("CanvasRenderingContext2D.textBaseline")}} 属性で指定された水平線から、テキストの描画に使用される境界矩形の上端までの距離を CSS ピクセル単位で返します。
- {{domxref("TextMetrics.actualBoundingBoxDescent")}} {{ReadOnlyInline}}
  - : {{domxref("CanvasRenderingContext2D.textBaseline")}} 属性で指定された水平線から、テキストの描画に使用される境界矩形の下端までの距離を CSS ピクセル単位で返します。
- {{domxref("TextMetrics.emHeightAscent")}} {{ReadOnlyInline}}
  - : {{domxref("CanvasRenderingContext2D.textBaseline")}} プロパティで指定された水平線から、行ボックス内の em 矩形の上端までの距離を、CSS ピクセル単位で返します。
- {{domxref("TextMetrics.emHeightDescent")}} {{ReadOnlyInline}}
  - : {{domxref("CanvasRenderingContext2D.textBaseline")}} プロパティで指定される水平線から、行ボックス内の em 矩形の下端までの距離を、CSS ピクセル単位で返します。
- {{domxref("TextMetrics.hangingBaseline")}} {{ReadOnlyInline}}
  - : {{domxref("CanvasRenderingContext2D.textBaseline")}} プロパティで指定される水平線から、行ボックスのハンギングベースラインまでの距離を CSS ピクセル単位で返します。
- {{domxref("TextMetrics.alphabeticBaseline")}} {{ReadOnlyInline}}
  - : {{domxref("CanvasRenderingContext2D.textBaseline")}} プロパティで指定される水平線から、行ボックスの{{glossary("/Baseline/Typography", "アルファベットベースライン")}}までの距離を CSS ピクセル単位で返します。
- {{domxref("TextMetrics.ideographicBaseline")}} {{ReadOnlyInline}}
  - : {{domxref("CanvasRenderingContext2D.textBaseline")}} プロパティで指定される水平線から、行ボックスの表意文字ベースライン（訳注：漢字などのベースライン）までの距離を CSS ピクセル単位で返します。

## 例

### ベースラインの解説

この例は、`TextMetrics` オブジェクトが保持するベースラインを示しています。デフォルトのベースラインは `alphabeticBaseline` です。{{domxref("CanvasRenderingContext2D.textBaseline")}} プロパティも参照してください。

#### HTML

```html
<canvas id="canvas" width="550" height="500"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const baselinesAboveAlphabetic = [
  "fontBoundingBoxAscent",
  "actualBoundingBoxAscent",
  "emHeightAscent",
  "hangingBaseline",
];
const baselinesBelowAlphabetic = [
  "ideographicBaseline",
  "emHeightDescent",
  "actualBoundingBoxDescent",
  "fontBoundingBoxDescent",
];
const baselines = [...baselinesAboveAlphabetic, ...baselinesBelowAlphabetic];
ctx.font = "25px serif";
ctx.strokeStyle = "red";

baselines.forEach((baseline, index) => {
  const text = `Abcdefghijkl漢字 (${baseline})`;
  const textMetrics = ctx.measureText(text);
  const y = 50 + index * 50;
  ctx.beginPath();
  ctx.fillText(text, 0, y);

  const baselineMetricValue = textMetrics[baseline];
  if (baselineMetricValue === undefined) {
    return;
  }

  const lineY = baselinesBelowAlphabetic.includes(baseline)
    ? y + Math.abs(baselineMetricValue)
    : y - Math.abs(baselineMetricValue);
  ctx.moveTo(0, lineY);
  ctx.lineTo(550, lineY);
  ctx.stroke();
});
```

#### 結果

{{EmbedLiveSample('Baselines_illustrated', 700, 550)}}

### テキストの幅の計測

テキストの x 方向を測定する際には、斜体・イタリックフォントでは文字が送り幅を超えて突出するため、`actualBoundingBoxLeft` と `actualBoundingBoxRight` の合計がインラインボックスの幅 (`width`) を超える場合があります。

したがって、絶対的なテキスト幅をより正確に得る方法として、`actualBoundingBoxLeft` と `actualBoundingBoxRight` の合計を使用することが有用である場合があります。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const text = "Abcdefghijklmnop";
ctx.font = "italic 50px serif";
const textMetrics = ctx.measureText(text);

console.log(textMetrics.width);
// 459.8833312988281

console.log(
  textMetrics.actualBoundingBoxRight + textMetrics.actualBoundingBoxLeft,
);
// 462.8833333333333
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CanvasRenderingContext2D")}} におけるクリエイターメソッド
- {{HTMLElement("canvas")}} 要素、および関連するインターフェイスである {{domxref("HTMLCanvasElement")}}
