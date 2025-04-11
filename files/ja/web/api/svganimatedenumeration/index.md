---
title: SVGAnimatedEnumeration
slug: Web/API/SVGAnimatedEnumeration
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("SVG")}}

**`SVGAnimatedEnumeration`** インターフェイスは、特定の列挙型にある定数における、アニメーション可能な属性値を記述します。

## インスタンスプロパティ

- {{domxref("SVGAnimatedEnumeration.baseVal", "baseVal")}}
  - : アニメーションを適用する前の指定された属性の基底値である整数。
- {{domxref("SVGAnimatedEnumeration.animVal", "animVal")}}
  - : 指定された属性またはプロパティがアニメーションしている場合、その属性またはプロパティの現在のアニメーション値になります。指定された属性またはプロパティが現在アニメーションしていない場合、 `baseVal` と同じ値になります。

## インスタンスメソッド

`SVGAnimatedEnumeration` インターフェイスは、固有のメソッドを指定していません。

## 値

{{SVGElement("clipPath")}} 要素によるこのコードがあったとします。 {{SVGAttr("clipPathUnits")}} は `SVGAnimatedEnumeration` オブジェクトに関連付けられています。

```html
<svg viewBox="0 0 100 100" width="200" height="200">
  <clipPath id="clip1" clipPathUnits="userSpaceOnUse">
    <circle cx="50" cy="50" r="35" />
  </clipPath>

  <!-- クリップパスに素材化された参照長方形 -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
</svg>
```

このスニペットは要素を取得し、 {{domxref("SVGClipPathElement.clipPathUnits")}} プロパティの `baseVal` と `animVal` をログ出力します。アニメーションが現れないため、両者の値は同じです。

```js
const clipPathElt = document.getElementById("clip1");
console.log(clipPathElt.clipPathUnits.baseVal); // userSpaceOnUse に対応する 1 をログ出力
console.log(clipPathElt.clipPathUnits.animVal); // userSpaceOnUse に対応する 1 をログ出力
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
