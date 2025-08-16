---
title: "SVGRectElement: rx プロパティ"
short-title: rx
slug: Web/API/SVGRectElement/rx
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`rx`** は {{domxref("SVGRectElement")}} インターフェイスの読み取り専用のプロパティで、 SVG 矩形の角の曲線部分の水平方向の大きさを {{domxref("SVGAnimatedLength")}} として表します。長さは、x 軸方向のユーザー座標系の単位で表されます。構文は、 [`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length) と同じです。

これは、 {{SVGElement("rect")}} 要素のプレゼンテーション属性 {{SVGAttr("rx")}} を反映します。 CSS のプロパティ {{cssxref("rx")}} が、SVG のプレゼンテーション属性 `rx` よりも優先されるため、この値は要素の角の実際の曲率を反映しない場合があります。既定値は `0` であり、矩形を直角の角で描きます。

## 値

{{domxref("SVGAnimatedLength")}} です。

## 例

以下の SVG があったとします。

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="60" height="60" rx="15" ry="15" />
  <rect x="60" y="0" width="60" height="60" rx="15%" ry="15" />
</svg>
```

`rx` 属性の計算値にアクセスすることができます。

```js
const rectangles = document.querySelectorAll("rect");
const rxSize0 = rectangle[0].rx;
const rxSize1 = rectangle[1].rx;
console.log(rxSize0.baseVal.value); // 出力: 15 （`rx` の値）
console.log(rxSize1.baseVal.value); // 出力: 45 （300 の 15%）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGRectElement.ry")}}
