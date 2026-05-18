---
title: "SVGTextPathElement: startOffset プロパティ"
short-title: startOffset
slug: Web/API/SVGTextPathElement/startOffset
l10n:
  sourceCommit: cb6a3d63ca47ea6efeb1d9f8f60e47375a59d541
---

{{APIRef("SVG")}}

**`startOffset`** は {{domxref("SVGTextPathElement")}} インターフェイスの読み取り専用プロパティで、この {{SVGElement("textPath")}} の {{SVGAttr("startOffset")}} 属性の X 成分を反映し、これは、パスを `<textPath>` 要素の座標系に変換した後、パス上の現在のテキスト位置がパスの先頭からどの位置にあるかを定義するオフセットを定義します。

## 値

{{domxref("SVGAnimatedLength")}} オブジェクトです。

## 例

### `startOffset` プロパティへのアクセス

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <path id="myPath" d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" />
  </defs>
  <text font-size="20" fill="blue">
    <textPath id="myTextPath" href="#myPath" startOffset="25%">
      このテキストはパスに沿います。
    </textPath>
  </text>
</svg>
```

```js
const textPath = document.getElementById("myTextPath");

// startOffset プロパティへのアクセス
console.log(textPath.startOffset.baseVal.valueAsString); // 出力結果: "25%"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG の {{SVGAttr("startOffset")}} 属性
