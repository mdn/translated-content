---
title: "SVGTextPathElement: method プロパティ"
short-title: method
slug: Web/API/SVGTextPathElement/method
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

**`method`** は {{domxref("SVGTextPathElement")}} インターフェイスの読み取り専用プロパティで、この {{SVGElement("textPath")}} 要素の {{SVGAttr("method")}} 属性を反映します。これはこのインターフェイスで定義されている [`TEXTPATH_METHODTYPE_*` 定数](/ja/docs/Web/API/SVGTextPathElement#static_properties)のいずれかを取ります。

## 値

{{domxref("SVGAnimatedEnumeration")}} オブジェクトです。

## 例

### `method` プロパティへのアクセス

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <path id="myPath" d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" />
  </defs>
  <text font-size="20" fill="blue">
    <textPath id="myTextPath" href="#myPath" method="align">
      このテキストはパスに沿います。
    </textPath>
  </text>
</svg>
```

```js
const textPath = document.getElementById("myTextPath");

// method プロパティへのアクセス
console.log(textPath.method.baseVal); // 出力結果: 1 (TEXTPATH_METHODTYPE_ALIGN)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGTextPathElement.spacing")}}
- [`SVGTextPathElement` メソッドの型](/ja/docs/Web/API/SVGTextPathElement#静的プロパティ)
