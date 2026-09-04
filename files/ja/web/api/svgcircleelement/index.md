---
title: SVGCircleElement
slug: Web/API/SVGCircleElement
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef("SVG")}}

**`SVGCircleElement`** インターフェイスは、{{SVGElement("circle")}} 要素のためのものです。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("SVGGeometryElement")}} から継承したプロパティもあります。_

- {{domxref("SVGCircleElement.cx")}} {{ReadOnlyInline}}
  - : このプロパティは、この {{SVGElement("circle")}} 要素の中心の X 座標を定義します。これはこの要素の {{SVGAttr("cx")}} 属性で記述されたものです。
- {{domxref("SVGCircleElement.cy")}} {{ReadOnlyInline}}
  - : このプロパティは、この `<circle>` 要素の中心の Y 座標を定義します。これはこの要素の {{SVGAttr("cy")}} 属性で記述されたものです。
- {{domxref("SVGCircleElement.r")}} {{ReadOnlyInline}}
  - : このプロパティは、この `<circle>` 要素の半径を定義します。これはこの要素の {{SVGAttr("r")}} で記述されたものです。

## インスタンスメソッド

_親インターフェイスである {{domxref("SVGGeometryElement")}} から継承したメソッドがあります。_

## 例

### 円のサイズ変更

この例では、円を描画し、クリックすると半径をランダムに増減させます。

#### HTML

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 250 250"
  width="250"
  height="250">
  <circle cx="100" cy="100" r="50" fill="gold" id="circle" />
</svg>
```

#### JavaScript

```js
const circle = document.getElementById("circle");

function clickCircle() {
  // 円の半径が増加するか減少するかをランダムに決定する
  const change = Math.random() > 0.5 ? 10 : -10;
  // 円の半径を最小 10 から最大 250 の範囲に制限するので、
  // 見えなくなったりビューポートよりも大きくなったりしない
  const newValue = Math.min(Math.max(circle.r.baseVal.value + change, 10), 250);
  circle.setAttribute("r", newValue);
}

circle.addEventListener("click", clickCircle);
```

{{EmbedLiveSample('Resizing a circle', '', '300')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG の {{SVGElement("circle")}} 要素
