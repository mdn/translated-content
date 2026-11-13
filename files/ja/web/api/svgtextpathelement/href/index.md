---
title: "SVGTextPathElement: href プロパティ"
short-title: href
slug: Web/API/SVGTextPathElement/href
l10n:
  sourceCommit: cb6a3d63ca47ea6efeb1d9f8f60e47375a59d541
---

{{APIRef("SVG")}}

**`href`** は {{domxref("SVGTextPathElement")}} インターフェイスの読み取り専用プロパティで、この {{SVGElement("textPath")}} 要素の {{SVGAttr("href")}} 属性（または非推奨の {{SVGAttr("xlink:href")}} 属性）を反映します。

## 値

{{domxref("SVGAnimatedString")}} オブジェクトです。

## 例

### `href` プロパティにアクセス

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <path id="myPath" d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" />
  </defs>
  <text font-size="20" fill="blue">
    <textPath id="myTextPath" href="#myPath">
      このテキストはパスに沿います。
    </textPath>
  </text>
</svg>
```

```js
const textPath = document.getElementById("myTextPath");

// href プロパティにアクセス
console.log(textPath.href.baseVal); // 出力結果: "#myPath"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG の {{SVGAttr("href")}} 属性
