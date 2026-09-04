---
title: "SVGFEDisplacementMapElement: xChannelSelector プロパティ"
short-title: xChannelSelector
slug: Web/API/SVGFEDisplacementMapElement/xChannelSelector
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

**`xChannelSelector`** は {{domxref("SVGFEDisplacementMapElement")}} インターフェイスの読み取り専用プロパティで、この {{SVGElement("feDisplacementMap")}} 要素の {{SVGAttr("xChannelSelector")}} 属性を反映します。これは、このインターフェイスで定義されている定数 `SVG_CHANNEL_*` のいずれかを取ります。

## 値

{{domxref("SVGAnimatedEnumeration")}} オブジェクトです。

## 例

### `xChannelSelector` 属性へのアクセス

この例では、{{SVGElement("filter")}} の中で定義されている {{SVGElement("feDisplacementMap")}} 要素に `xChannelSelector` 属性があります。

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="displacementFilter">
      <!-- Displacement Map with xChannelSelector set to Red Channel -->
      <feDisplacementMap in="SourceGraphic" scale="20" xChannelSelector="R">
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
    filter="url(#displacementFilter)" />
</svg>
```

次のように `xChannelSelector` 属性にアクセスして、値を取得できます。

```js
const displacementMap = document.querySelector("feDisplacementMap");

console.log(displacementMap.xChannelSelector.baseVal); // 出力結果: 1 (SVG_CHANNEL_R)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedEnumeration")}}
