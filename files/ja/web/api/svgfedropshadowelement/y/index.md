---
title: "SVGFEDropShadowElement: y プロパティ"
short-title: y
slug: Web/API/SVGFEDropShadowElement/y
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`y`** は {{domxref("SVGFEDropShadowElement")}} インターフェイスの読み取り専用プロパティで、SVG フィルタープリミティブの位置の垂直座標を {{domxref("SVGAnimatedLength")}} で記述します。

これは、入力画像のドロップシャドウを作成する {{SVGElement("feDropShadow")}} 要素の {{SVGAttr("y")}} 属性を反映しています。この属性は、[`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length) または [`<percentage>`](/ja/docs/Web/SVG/Guides/Content_type#percentage) です。`<coordinate>` は、ユーザー座標系における長さであり、フィルターの原点から y 軸に沿って指定された距離を表します。`y` 属性がパーセント値の場合、プロパティの値は、ユーザー座標系単位でのフィルター領域の高さに対する相対値となります。デフォルト値は `0` です。

## 値

{{domxref("SVGAnimatedLength")}} です。

## 例

```js
const feDropShadow = document.querySelector("feDropShadow");
const topPosition = feDropShadow.y;
console.log(topPosition.baseVal.value); // `y` の値
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGFEDropShadowElement.x")}}
- CSS の {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} 関数
- CSS の {{cssxref("box-shadow")}} プロパティ
- CSS の {{cssxref("text-shadow")}} プロパティ
- CSS の {{cssxref("blend-mode")}} データ型
- CSS の {{cssxref("mix-blend-mode")}} プロパティ
