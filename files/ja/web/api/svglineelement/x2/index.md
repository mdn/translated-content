---
title: "SVGLineElement: x2 プロパティ"
short-title: x2
slug: Web/API/SVGLineElement/x2
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`x2`** は {{domxref("SVGLineElement")}} インターフェイスの読み取り専用プロパティで、線の終点の X 軸座標値を {{domxref("SVGAnimatedLength")}} として記述します。これは、{{SVGElement("line")}} 要素の {{SVGAttr("x2")}} 属性の計算値を反映します。

この属性の値は [`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length)、[`<percentage>`](/ja/docs/Web/SVG/Guides/Content_type#percentage)、[`<number>`](/ja/docs/Web/SVG/Guides/Content_type#number) のいずれかです。{{domxref("SVGAnimatedLength.baseVal")}} の値は、ユーザー座標系における終点を X 軸方向の長さで表します。

## 値

{{domxref("SVGAnimatedLength")}} です。

## 例

次の SVG があったとします。

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="30" x2="40" y2="50" stroke="blue" stroke-width="2" />
  <line x1="15%" y1="0" x2="30%" y2="60" stroke="red" stroke-width="4" />
</svg>
```

`x2` 属性の計算値には、次のようにアクセスできます。

```js
const lines = document.querySelectorAll("line");
const x2Pos0 = lines[0].x2;
const x2Pos1 = lines[1].x2;
console.dir(x2Pos0.baseVal.value); // 出力: 40 (the value of `x2`)
console.dir(x2Pos1.baseVal.value); // 出力: 90 (30% of 300)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGLineElement.y2")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
