---
title: "SVGFEDisplacementMapElement: in1 プロパティ"
short-title: in1
slug: Web/API/SVGFEDisplacementMapElement/in1
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

**`in1`** は {{domxref("SVGFEDisplacementMapElement")}} インターフェイスの読み取り専用プロパティで、この {{SVGElement("feDisplacementMap")}} 要素の {{SVGAttr("in")}} 属性を反映します。

## 値

{{domxref("SVGAnimatedString")}} オブジェクトです。

## 例

この例では、フィルター内に 2 つの {{SVGElement("feDisplacementMap")}} 要素が定義されており、それぞれ異なる `in` 属性が設定されています。

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="filter1">
      <!-- First Displacement Map -->
      <feDisplacementMap in="SourceGraphic" scale="20">
        <feFuncR type="table" tableValues="0 1" />
      </feDisplacementMap>

      <!-- Second Displacement Map -->
      <feDisplacementMap in="BackgroundImage" scale="30">
        <feFuncR type="table" tableValues="0.5 1" />
      </feDisplacementMap>
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    fill="red"
    filter="url(#filter1)" />
  <circle cx="100" cy="100" r="50" fill="blue" filter="url(#filter1)" />
</svg>
```

次のようにして、`in` 属性にアクセスできます。

```js
const displacementMaps = document.querySelectorAll("feDisplacementMap");

console.log(displacementMaps[0].getAttribute("in")); // 出力結果: "SourceGraphic"
console.log(displacementMaps[1].getAttribute("in")); // 出力結果: "BackgroundImage"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedString")}}
