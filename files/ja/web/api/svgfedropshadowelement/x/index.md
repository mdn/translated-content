---
title: "SVGFEDropShadowElement: x プロパティ"
short-title: x
slug: Web/API/SVGFEDropShadowElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`x`** は {{domxref("SVGFEDropShadowElement")}} インターフェイスの読み取り専用プロパティで、SVG フィルタープリミティブの位置の水平座標を {{domxref("SVGAnimatedLength")}} で記述します。

これは、入力画像のドロップシャドウを作成する {{SVGElement("feDropShadow")}} 要素の {{SVGAttr("x")}} 属性を反映しています。この属性は、[`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length) または [`<percentage>`](/ja/docs/Web/SVG/Guides/Content_type#percentage) です。`<coordinate>` は、ユーザー座標系における長さであり、ユーザー座標系の原点から x 軸に沿って指定された距離を表します。`x` 属性がパーセント値の場合、プロパティの値は、ユーザー座標系単位でのフィルター領域の幅に対する相対値となります。

## 値

{{domxref("SVGAnimatedLength")}} です。

## 例

```js
const feDropShadow = document.querySelector("feDropShadow");
const leftPosition = feDropShadow.x;
console.log(leftPosition.baseVal.value); // `x` の値
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGFEDropShadowElement.y")}}
- CSS の {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} 関数
- CSS の {{cssxref("box-shadow")}} プロパティ
- CSS の {{cssxref("text-shadow")}} プロパティ
- CSS の {{cssxref("blend-mode")}} データ型
- CSS の {{cssxref("mix-blend-mode")}} プロパティ
