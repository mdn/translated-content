---
title: "SVGRectElement: ry プロパティ"
short-title: ry
slug: Web/API/SVGRectElement/ry
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{APIRef("SVG")}}

**`ry`** は {{domxref("SVGRectElement")}} インターフェイスの読み取り専用のプロパティで、 SVG 矩形の角の曲線部分の垂直方向の大きさを {{domxref("SVGAnimatedLength")}} として表します。長さは、y 軸方向のユーザー座標系の単位で表されます。構文は、 [`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length) と同じです。

これは、 {{SVGElement("rect")}} 要素のプレゼンテーション属性 {{SVGAttr("ry")}} を反映します。 CSS のプロパティ {{cssxref("ry")}} が、SVG のプレゼンテーション属性 `ry` よりも優先されるため、この値は要素の角の実際の曲率を反映しない場合があります。既定値は `0` であり、矩形を直角の角で描きます。

## 値

{{domxref("SVGAnimatedLength")}} です。

## 例

以下の SVG があったとします。

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="60" height="60" rx="15" ry="15" />
  <rect x="60" y="0" width="60" height="60" rx="15%" ry="15%" />
</svg>
```

`ry` 属性の計算値にアクセスすることができます。

```js
const rectangles = document.querySelectorAll("rect");
const rySize0 = rectangle[0].ry;
const rySize1 = rectangle[1].ry;
console.log(rySize0.baseVal.value); // 出力: 15 （`ry` の値）
console.log(rySize1.baseVal.value); // 出力: 30 （200 の 15%）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGRectElement.rx")}}
