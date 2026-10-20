---
title: "ShadowRoot: elementsFromPoint() メソッド"
short-title: elementsFromPoint()
slug: Web/API/ShadowRoot/elementsFromPoint
l10n:
  sourceCommit: 62a6f2dbd99b39212f4c4c12aa2a6d499e447f46
---

{{APIRef("DOM")}}{{Non-standard_Header}}

**`elementsFromPoint()`** は {{domxref("ShadowRoot")}} インターフェイスのメソッドで、指定された（ビューポートを基準とした）座標にあるすべてのシャドウルート要素の配列を返します。要素は、最上部の要素（表示の Z 順序が最も高いもの）から最下部の要素へと順に並べられます。

動作は、{{domxref("ShadowRoot.elementFromPoint")}} メソッドと似ています。一部のブラウザーでは、その位置にあるシャドウルート要素のみが返されます。一方、他のブラウザーでは、[シャドウ DOM](/ja/docs/Web/API/Web_components/Using_shadow_DOM) の外側にある要素、つまり最上位層のシャドウ DOM 要素から文書のルートノードに至るまでの要素（{{htmlelement("html")}} や {{SVGElement("svg")}} といったルート要素など）も含まれます。これらのブラウザーでは、その動作は {{domxref("Document.elementsFromPoint")}} メソッドと似ていますが、[シャドウ境界](/ja/docs/Glossary/Shadow_tree)を越えることができます。

## 構文

```js-nolint
elementsFromPoint(x, y)
```

### 引数

- `x`
  - : 点の水平座標で、現在の{{Glossary("viewport", "ビューポート")}}の左端からの相対値です。
- `y`
  - : 点の垂直座標で、現在の{{Glossary("viewport", "ビューポート")}}の上端からの相対値です。

### 返値

{{domxref('Element')}} オブジェクトの配列です。

## 例

```js
const customElem = document.querySelector("my-custom-element");
const shadow = customElem.shadowRoot;
const elements = shadow.elementsFromPoint(20, 20);
const msg = elements.map((el) => el.localName).join(" < ");
if (msg) {
  console.log(msg);
} else {
  console.log("x: 20、y: 20 の位置に、この独自の要素の子要素は存在しませんでした。");
}
```

`<my-custom-element>` がビューポートの左上隅付近にあり、かつ単一の `<div>` が含まれている場合、上記はブラウザーの実装に応じて、以下のどちらかを返すことがあります。

```plain
div
div < my-custom-element < body < html
```

## 仕様書

どの標準規格にも属しません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("ShadowRoot.elementFromPoint()")}}
- {{DOMxRef("Document.elementsFromPoint()")}}
