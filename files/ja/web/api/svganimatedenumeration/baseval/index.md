---
title: "SVGAnimatedEnumeration: baseVal プロパティ"
short-title: baseVal
slug: Web/API/SVGAnimatedEnumeration/baseVal
l10n:
  sourceCommit: 0bb352f93d19c62cd07807479975f610f7b02cf4
---

{{APIRef("SVG")}}

**`baseVal`** は {{domxref("SVGAnimatedEnumeration")}} インターフェイスのプロパティで、 SVG の列挙型の初期値を表します。

## 値

整数で、列挙型の初期値になります。

## 例

この {{SVGElement("clipPath")}} 要素のコードがあるとします。 {{SVGAttr("clipPathUnits")}} は {{domxref("SVGAnimatedEnumeration")}} オブジェクトに関連付けられたものです。

```html
<svg viewBox="0 0 100 100" width="200" height="200">
  <clipPath id="clip1" clipPathUnits="userSpaceOnUse">
    <circle cx="50" cy="50" r="35" />
  </clipPath>

  <!-- Some reference rect to materialized to clip path -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
</svg>
```

このコードでは要素を取得し、 {{domxref("SVGClipPathElement.clipPathUnits")}} プロパティの `baseVal` をログ出力します。

```js
const clipPathElt = document.getElementById("clip1");
console.log(clipPathElt.clipPathUnits.baseVal); // userSpaceOnUse に対応する 1 を出力
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedEnumeration.animVal")}}
