---
title: "SVGFEDisplacementMapElement: yChannelSelector プロパティ"
short-title: yChannelSelector
slug: Web/API/SVGFEDisplacementMapElement/yChannelSelector
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

**`yChannelSelector`** は {{domxref("SVGFEDisplacementMapElement")}} インターフェイスの読み取り専用プロパティで、この {{SVGElement("feDisplacementMap")}} 要素の {{SVGAttr("yChannelSelector")}} 属性を反映します。これは、このインターフェイスで定義されている定数 `SVG_CHANNEL_*` のいずれかを取ります。

## 値

{{domxref("SVGAnimatedEnumeration")}} オブジェクトです。

## 例

### `yChannelSelector` 属性へのアクセス

この例では、{{SVGElement("filter")}} の中で定義されている {{SVGElement("feDisplacementMap")}} 要素に `yChannelSelector` 属性があります。

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="displacementFilter">
      <!-- Displacement Map with yChannelSelector set to Red Channel -->
      <feDisplacementMap in="SourceGraphic" scale="20" yChannelSelector="G">
        <feFuncR type="table" tableValues="0 1" />
      </feDisplacementMap>
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    fill="green"
    filter="url(#displacementFilter)" />
</svg>
```

次のように `yChannelSelector` 属性にアクセスして、値を取得できます。

```js
const displacementMap = document.querySelector("feDisplacementMap");

console.log(displacementMap.yChannelSelector.baseVal); // 出力結果: 2 (SVG_CHANNEL_G)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedEnumeration")}}
