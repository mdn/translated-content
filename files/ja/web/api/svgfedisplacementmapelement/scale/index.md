---
title: "SVGFEDisplacementMapElement: scale プロパティ"
short-title: scale
slug: Web/API/SVGFEDisplacementMapElement/scale
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

**`scale`** は {{domxref("SVGFEDisplacementMapElement")}} インターフェイスの読み取り専用プロパティで、この {{SVGElement("feDisplacementMap")}} 要素の {{SVGAttr("scale")}} 属性を反映します。

## 値

{{domxref("SVGAnimatedNumber")}} オブジェクトです。

## 例

### `scale` 属性へのアクセス

この例では、{{SVGElement("filter")}} の中で定義されている {{SVGElement("feDisplacementMap")}} 要素には `scale` 属性があります。

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="filter1">
      <!-- Displacement Map -->
      <feDisplacementMap in="SourceGraphic" scale="20">
        <feFuncR type="table" tableValues="0 1" />
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
</svg>
```

次のようにして、`scale` 属性の値にアクセスして値を取得できます。

```js
const displacementMap = document.querySelector("feDisplacementMap");

console.log(displacementMap.scale.baseVal); // 出力結果: 20
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedNumber")}}
