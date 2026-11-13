---
title: "SVGTextPositioningElement: y プロパティ"
short-title: y
slug: Web/API/SVGTextPositioningElement/y
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`y`** は {{domxref("SVGTextPositioningElement")}} インターフェイスの読み取り専用プロパティで、{{domxref("SVGTextElement")}}、{{domxref("SVGTSpanElement")}}、{{domxref("SVGTRefElement")}} の Y 座標を {{domxref("SVGAnimatedLengthList")}} で記述します。これは {{SVGAttr("dy")}} 属性の、ユーザー座標系における個々のテキスト文字の垂直方向の位置を反映します。

属性値は、[`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length)、[`<percentage>`](/ja/docs/Web/SVG/Guides/Content_type#percentage)、[`<number>`](/ja/docs/Web/SVG/Guides/Content_type#number) のリストです。 {{domxref("SVGAnimatedLengthList.baseVal")}} の数値は、ユーザー座標系における個々のテキスト文字の Y 座標を反映します。

## 値

An {{domxref("SVGAnimatedLengthList")}}.

## 例

次の SVG があったとします。

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="20">Hello</text>
  <text x="50" y="50">World</text>
</svg>
```

次のようにして、 `y` 属性の計算値にアクセスすることができます。

```js
const texts = document.querySelectorAll("text");

console.log(texts[0].y.baseVal[0].value); // 出力: 20
console.log(texts[1].y.baseVal[0].value); // 出力: 50
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGTextPositioningElement.x")}}
- {{domxref("SVGAnimatedLengthList.baseVal")}}
