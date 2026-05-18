---
title: "SVGTextPathElement: spacing プロパティ"
short-title: spacing
slug: Web/API/SVGTextPathElement/spacing
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

**`spacing`** は {{domxref("SVGTextPathElement")}} インターフェイスの読み取り専用プロパティで、この {{SVGElement("textPath")}} 要素の {{SVGAttr("spacing")}} 属性を反映します。これはこのインターフェイスで定義されている [`TEXTPATH_SPACINGTYPE_*` 定数](/ja/docs/Web/API/SVGTextPathElement#static_properties)のいずれかを取ります。

## 値

{{domxref("SVGAnimatedEnumeration")}} オブジェクトです。

## 例

### `spacing` プロパティへのアクセス

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <path id="myPath" d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" />
  </defs>
  <text font-size="20" fill="blue">
    <textPath id="myTextPath" href="#myPath" spacing="auto">
      このテキストはパスに沿います。
    </textPath>
  </text>
</svg>
```

```js
const textPath = document.getElementById("myTextPath");

// spacing プロパティへのアクセス
console.log(textPath.spacing.baseVal); // 出力結果: 1 (TEXTPATH_SPACINGTYPE_AUTO)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGTextPathElement.method")}}
- [`SVGTextPathElement` 文字間型](/ja/docs/Web/API/SVGTextPathElement#静的プロパティ)
