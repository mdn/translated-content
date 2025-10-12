---
title: SVGRectElement
slug: Web/API/SVGRectElement
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef("SVG")}}

`SVGRectElement` インターフェイスは、 {{SVGElement("rect")}} 要素のプロパティへのアクセス、およびそれらを操作するメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("SVGGeometryElement")}} から継承したプロパティもあります。_

- {{domxref("SVGRectElement.x")}} {{ReadOnlyInline}}
  - : 指定された {{SVGElement("rect")}} 要素の {{SVGAttr("x")}} 属性に対応する {{domxref("SVGAnimatedLength")}} を返します。
- {{domxref("SVGRectElement.y")}} {{ReadOnlyInline}}
  - : 指定された {{SVGElement("rect")}} 要素の {{SVGAttr("y")}} 属性に対応する {{domxref("SVGAnimatedLength")}} を返します。
- {{domxref("SVGRectElement.width")}} {{ReadOnlyInline}}
  - : 指定された {{SVGElement("rect")}} 要素の {{SVGAttr("width")}} 属性に対応する {{domxref("SVGAnimatedLength")}} を返します。
- {{domxref("SVGRectElement.height")}} {{ReadOnlyInline}}
  - : 指定された {{SVGElement("rect")}} 要素の {{SVGAttr("height")}} 属性に対応する {{domxref("SVGAnimatedLength")}} を返します。
- {{domxref("SVGRectElement.rx")}} {{ReadOnlyInline}}
  - : 指定された {{SVGElement("rect")}} 要素の {{SVGAttr("rx")}} 属性に対応する {{domxref("SVGAnimatedLength")}} を返します。
- {{domxref("SVGRectElement.ry")}} {{ReadOnlyInline}}
  - : 指定された {{SVGElement("rect")}} 要素の {{SVGAttr("ry")}} 属性に対応する {{domxref("SVGAnimatedLength")}} を返します。

## インスタンスメソッド

_このインターフェイスは固有のメソッドを実装していませんが、親である {{domxref("SVGGeometryElement")}} から継承したメソッドがあります。_

## 例

### SVG 矩形の色の変更

この例では、ユーザーがクリックするたびに、`SVGRectElement` の塗りつぶしの色をランダムな値に設定します。

#### HTML

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect width="300" height="100" id="myrect" />
  <text x="60" y="40" fill="white" font-size="40">クリック</text>
</svg>
```

#### CSS

```css
#myrect {
  fill: blue;
  stroke-width: 1;
  stroke: black;
}
```

#### JavaScript

```js
const myRect = document.querySelector("#myrect");

myRect.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  myRect.style.fill = `rgb(${r} ${g} ${b})`;
});
```

#### 結果

{{EmbedLiveSample('Changing the color of an SVG rectangle')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("rect")}}
