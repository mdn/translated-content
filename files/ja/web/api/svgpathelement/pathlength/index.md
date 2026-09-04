---
title: "SVGPathElement: pathLength プロパティ"
short-title: pathLength
slug: Web/API/SVGPathElement/pathLength
l10n:
  sourceCommit: ea24a70e5c5e3b474d683e9b0dcb8807aaba82f3
---

{{APIRef("SVG")}}

**`pathLength`** は {{domxref("SVGPathElement")}} インターフェイスの読み取り専用プロパティで、この {{SVGelement("path")}} の {{SVGAttr("pathLength")}} 属性を反映します。

## 値

An {{domxref("SVGAnimatedNumber")}}.

## 例

### `pathLength` プロパティへのアクセス

```html
<svg width="200" height="100">
  <path id="myPath" d="M 0,30 h100" pathLength="50" />
</svg>
```

```js
const pathElement = document.getElementById("myPath");

// pathLength プロパティにアクセス
const animatedNumber = pathElement.pathLength;

// pathLength 属性のベース値
console.log(animatedNumber.baseVal); // 結果: 100
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGGeometryElement.pathLength")}}
- {{SVGAttr("pathLength")}}
- {{domxref("SVGAnimatedLength")}}
