---
title: "SVGClipPathElement: clipPathUnits プロパティ"
short-title: clipPathUnits
slug: Web/API/SVGClipPathElement/clipPathUnits
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

**`clipPathUnits`** は {{domxref("SVGClipPathElement")}} インターフェイスの読み取り専用プロパティで、この要素のコンテンツに使用する座標系を定義する {{SVGElement("clipPath")}} 要素の {{SVGAttr("clipPathUnits")}} 属性を反映します。

> [!NOTE]
> このプロパティは読み取り専用ですが、実際には {{domxref("SVGAnimatedEnumeration.baseVal", "baseVal")}} と {{domxref("SVGAnimatedEnumeration.animVal", "animVal")}} の変更できる 2 つの値を持つコンテナーです。

## 値

座標系を表す {{domxref("SVGAnimatedEnumeration")}} です。取りうる値は {{domxref("SVGUnitTypes")}} インターフェイスで定義されています。

- `0` (`SVG_UNIT_TYPE_UNKNOWN`)
  - : 型は、定義済みの型ではありません。
- `1` (`SVG_UNIT_TYPE_USERSPACEONUSE`)
  - : {{SVGAttr("clipPathUnits")}} 属性の `userSpaceOnUse` の値に対応し、要素内のすべての座標は、クリップパスが作成されたときに定義されたユーザー座標系を参照することを意味します。これは既定値です。
- `2` (`SVG_UNIT_TYPE_OBJECTBOUNDINGBOX`)
  - : 同属性の `objectBoundingBox` の値に対応し、要素内のすべての座標が、クリップパスが適用される要素の境界ボックスを基準とする相対座標であることを意味します。これは、座標系の原点がオブジェクトの境界ボックスの左上隅であり、オブジェクトの境界ボックスの幅と高さは 1 単位の長さであるとみなされることを意味します。

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
  <svg viewBox="0 0 100 100" width="200" height="200">
    <clipPath id="clip1" clipPathUnits="userSpaceOnUse">
      <circle cx="50" cy="50" r="35" />
    </clipPath>

    <clipPath id="clip2" clipPathUnits="objectBoundingBox">
      <circle cx=".5" cy=".5" r=".35" />
    </clipPath>

    <!-- クリップパスに実体化するいくつかの参照長方形 -->
    <rect id="r1" x="0" y="0" width="45" height="45" />
    <rect id="r2" x="0" y="55" width="45" height="45" />
    <rect id="r3" x="55" y="55" width="45" height="45" />
    <rect id="r4" x="55" y="0" width="45" height="45" />

    <!-- 最初の 3 つの長方形は、単位 userSpaceOnUse でクリップされる -->
    <use clip-path="url(#clip1)" href="#r1" fill="red" />
    <use clip-path="url(#clip1)" href="#r2" fill="blue" />
    <use clip-path="url(#clip1)" href="#r3" fill="yellow" />

    <!-- 最後の長方形は、objectBoundingBox 単位でクリップされる -->
    <use clip-path="url(#clip2)" href="#r4" fill="green" />
  </svg>
</div>
<pre id="log"></pre>
```

```js
const clipPath1 = document.getElementById("clip1");
const clipPath2 = document.getElementById("clip2");

const log = document.getElementById("log");

log.textContent = `3 回使用されたクリップパスは、 'clipPathUnits' の値が ${clipPath1.clipPathUnits.baseVal} です。
1 回使用されたクリップパスは、 'clipPathUnits' の値が ${clipPath2.clipPathUnits.baseVal} です。`;
```

{{EmbedLiveSample("Examples", "280", "260")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("clipPathUnits")}}
- {{SVGElement("clipPath")}}
