---
title: "SVGMaskElement: maskUnits プロパティ"
short-title: maskUnits
slug: Web/API/SVGMaskElement/maskUnits
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

**`maskUnits`** は {{domxref("SVGMaskElement")}} インターフェイスの読み取り専用プロパティで、要素のマスクに使用する座標系を定義する {{SVGElement("mask")}} 要素の {{SVGAttr("maskUnits")}} 属性を反映します。

> [!NOTE]
> このプロパティは読み取り専用ですが、変更可能な 2 つの値、 {{domxref("SVGAnimatedEnumeration.baseVal", "baseVal")}} および {{domxref("SVGAnimatedEnumeration.animVal", "animVal")}} を格納する単なるコンテナーです。

## 値

座標系を表す {{domxref("SVGAnimatedEnumeration")}} です。取りうる値は {{domxref("SVGUnitTypes")}} インターフェイスで定義されています。

- `0` (`SVG_UNIT_TYPE_UNKNOWN`)
  - : この型は、定義済みの型ではありません。
- `1` (`SVG_UNIT_TYPE_USERSPACEONUSE`)
  - : {{SVGAttr("maskUnits")}} 属性の `userSpaceOnUse` の値に対応し、要素内のすべての座標は、マスクの作成時に定義されたユーザー座標系を参照することを意味します。これは既定値です。
- `2` (`SVG_UNIT_TYPE_OBJECTBOUNDINGBOX`)
  - : 属性の `objectBoundingBox` の値に対応し、要素内のすべての座標は、マスクが適用される要素の境界ボックスを基準とする相対座標であることを意味します。これは、座標系の原点がオブジェクトの境界ボックスの左上隅であり、オブジェクトの境界ボックスの幅と高さは 1 単位の長さを持つとみなされることを意味します。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<div>
  <svg
    viewBox="0 0 100 100"
    height="200"
    width="200"
    xmlns="http://www.w3.org/2000/svg">
    <mask
      id="mask1"
      maskUnits="userSpaceOnUse"
      x="20%"
      y="20%"
      width="60%"
      height="60%">
      <rect fill="black" x="0" y="0" width="100%" height="100%" />
      <circle fill="white" cx="50" cy="50" r="35" />
    </mask>

    <mask
      id="mask2"
      maskUnits="objectBoundingBox"
      x="20%"
      y="20%"
      width="60%"
      height="60%">
      <rect fill="black" x="0" y="0" width="100%" height="100%" />
      <circle fill="white" cx="50" cy="50" r="35" />
      <animate
        attributeName="maskUnits"
        values="objectBoundingBox;userSpaceOnUse"
        dur="1s"
        repeatCount="indefinite" />
    </mask>

    <!-- Some reference rect to materialized the mask -->
    <rect id="r1" x="0" y="0" width="45" height="45" />
    <rect id="r2" x="0" y="55" width="45" height="45" />
    <rect id="r3" x="55" y="55" width="45" height="45" />
    <rect id="r4" x="55" y="0" width="45" height="45" />

    <!-- The first 3 rect are masked with useSpaceOnUse units -->
    <use mask="url(#mask1)" href="#r1" fill="blue" />
    <use mask="url(#mask1)" href="#r2" fill="green" />
    <use mask="url(#mask1)" href="#r3" fill="yellow" />

    <!-- The last rect is masked with objectBoundingBox units -->
    <use mask="url(#mask2)" href="#r4" fill="lightblue" />
  </svg>
</div>
<pre id="log"></pre>
```

```js
const unitType = ["unknown", "userSpaceOnUse", "objectBoundingBox"];

const mask = document.getElementById("mask2");
const log = document.getElementById("log");

function displayLog() {
  const baseValue = unitType[mask.maskUnits.baseVal];
  const animValue = unitType[mask.maskUnits.animVal];
  log.textContent = `The top-right 'maskUnits.baseVal' coord system : ${baseValue}\n`;
  log.textContent += `The top-right 'maskUnits.animVal' coord system : ${animValue}`;
  requestAnimationFrame(displayLog);
}
displayLog();
```

{{EmbedLiveSample("Examples", "280", "260")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("maskUnits")}}
- {{SVGElement("mask")}}
