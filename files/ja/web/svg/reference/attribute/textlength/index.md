---
title: textLength
slug: Web/SVG/Reference/Attribute/textLength
l10n:
  sourceCommit: 364ac5bc62331153a6a7daaba93ee3cd0396d18f
---

**`textLength`** 属性は、 SVGの {{SVGElement("text")}} 要素と {{SVGElement("tspan")}} 要素で利用でき、テキストが描かれる空間の幅を指定することができます。 {{glossary("user agent", "ユーザーエージェント")}}は、 {{SVGAttr("lengthAdjust")}} 属性で指定された方法を使用して、テキストがその長さよりも広がらないようにします。既定では、文字間の間隔のみが調整されますが、 `lengthAdjust` を変更すると、文字サイズも調整できます。

`textLength` を使用することで、ウェブフォントの読み込みに失敗した場合（または読み込まれていない場合）を含め、さまざまな条件に関わらず、 SVG テキストが同じ幅で表示されるように保証することができます。

この属性は以下の SVG 要素で使用できます。

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
  <text y="20" textLength="6em">狭いテキスト幅</text>
  <text y="40" textLength="120%">広いテキスト幅</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "100")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        {{cssxref("length-percentage")}} |
        {{cssxref("number")}}
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `<length-percentage>`
  - : この値は、テキストが占める空間を絶対長またはパーセント値として指定します。
- `<number>`
  - : 数値で、現在の座標系の単位を参照して長さの目安を示します。

## インタラクティブサンプル

この例では、 {{HTMLElement("input")}} 要素の [`"range"`](/ja/docs/Web/HTML/Reference/Elements/input/range) 型を使用して、テキストの大きさを変えることができます。

### CSS

```css
.controls {
  font:
    16px "Open Sans",
    "Arial",
    sans-serif;
}
```

### SVG

では、 SVG から始めましょう。これはかなり基本的なもので、 1000 × 300 ピクセルの空間が 10 × 3 センチのボックスに割り当てられています。

```html
<svg
  width="10cm"
  height="3cm"
  viewBox="0 0 1000 300"
  xmlns="http://www.w3.org/2000/svg">
  <rect
    x="1"
    y="1"
    width="998"
    height="298"
    fill="none"
    stroke="green"
    stroke-width="2" />

  <text
    id="hello"
    x="10"
    y="150"
    font-family="sans-serif"
    font-size="60"
    fill="green">
    Hello world!
  </text>
</svg>
```

最初の段階では、テキストが含まれている矩形を作成し、その輪郭を描画するために、 {{SVGElement("rect")}} 要素が使用されています。次に、 {{SVGElement("text")}} を使用してテキスト要素自身を、 {{SVGAttr("id")}} を `"hello"` として作成します。

### HTML

この HTML には、グループ化された {{HTMLElement("div")}} の中に含まれている 2 つの表示要素があります。

```html
<div class="controls">
  <input type="range" id="widthSlider" min="80" max="978" />
  <span id="widthDisplay"></span>
</div>
```

{{HTMLElement("input")}} 要素は、表示型が `"range"` であり、ユーザーがテキストの幅を変更するために操作するスライダーコントロールを作成するために使用されます。 ID が `"widthDisplay"` である {{HTMLElement("span")}} 要素は、現在の幅の値を表示するためにあります。

### JavaScript

最後に、JavaScript コードを見てみましょう。 まず、 {{domxref("Document.getElementById()")}} を使用して、アクセスする必要がある要素への参照を保存します。

```js
const widthSlider = document.getElementById("widthSlider");
const widthDisplay = document.getElementById("widthDisplay");
const textElement = document.getElementById("hello");
const baseLength = Math.floor(textElement.textLength.baseVal.value);

widthSlider.value = baseLength;

widthSlider.addEventListener(
  "input",
  (event) => {
    textElement.textLength.baseVal.newValueSpecifiedUnits(
      SVGLength.SVG_LENGTHTYPE_PX,
      widthSlider.valueAsNumber,
    );
    widthDisplay.innerText = widthSlider.value;
  },
  false,
);

widthSlider.dispatchEvent(new Event("input"));
```

要素参照を取得した後、スライダーコントロールで{{domxref("EventTarget.addEventListener", "イベントリスナー", "", 1)}}を {{domxref("EventTarget.addEventListener", "addEventListener()")}} を呼び出して確立し、発生する {{domxref("Element/input_event", "input")}} イベントを受信できるようにします。これらのイベントは、ユーザーがスライダーの移動を停止していなくても、スライダーの値が変更されるたびに送信されるので、テキストの幅をレスポンスよく調整できます。

`"input"` イベントが発生すると、 `newValueSpecifiedUnits()` を呼び出して `textLength` の値をスライダーの新しい値に設定します。この際、 `SVGLength` インターフェイスの `SVG_LENGTHTYPE_PX` 単位型を使用して、値がピクセル単位で表されていることを示します。　`textLength` を掘り下げて、その `baseVal` プロパティを取得する必要があることに注意してください。 `textLength` は {{domxref("SVGLength")}} オブジェクトとして格納されているため、単純な数値として扱うことはできません。

テキスト幅を更新すると、 `widthDisplay` ボックスのコンテンツも新しい値で更新され、完了です。

### 結果

この例では、スライダーをドラッグして、それが何をするのかを実際に試してみましょう。

{{EmbedLiveSample("Interactive_example", 650, 160)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG チュートリアル: [テキスト](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Texts)
- {{domxref("SVGAnimatedLength")}} および {{domxref("SVGLength")}}
- {{SVGElement("text")}}
