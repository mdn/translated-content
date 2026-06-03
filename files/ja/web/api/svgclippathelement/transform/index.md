---
title: "SVGClipPathElement: transform プロパティ"
short-title: transform
slug: Web/API/SVGClipPathElement/transform
l10n:
  sourceCommit: 0bb352f93d19c62cd07807479975f610f7b02cf4
---

{{APIRef("SVG")}}

**`transform`** は {{domxref("SVGClipPathElement")}} インターフェイスの読み取り専用プロパティで、 {{SVGElement("clipPath")}} 要素の {{SVGAttr("transform")}} 属性（この要素に適用される座標変換のリスト）を反映します。

## 値

{{domxref("SVGTransformList")}} です。

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
    <clipPath
      id="clip1"
      clipPathUnits="objectBoundingBox"
      transform="skewX(40) scale(1 0.5)">
      <circle cx=".5" cy=".5" r=".35" />
    </clipPath>

    <rect id="r1" x="0" y="0" width="100" height="100" />

    <use clip-path="url(#clip1)" href="#r1" fill="lightblue" />
  </svg>
</div>
<pre id="log"></pre>
```

```js
const translateType = [
  "unknown",
  "matrix()",
  "translate()",
  "scale()",
  "rotate()",
  "skewx()",
  "skewy()",
];

const clipPath1 = document.getElementById("clip1");

const log = document.getElementById("log");

let result = "次の座標変換が適用されています。\n";
for (const transform of clipPath1.transform.baseVal) {
  result += `- '${translateType[transform.type]}' 型の座標変換が見つかりました。\n`;
}

log.textContent = result;
```

{{EmbedLiveSample("Examples", "280", "280")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("clipPathUnits")}}
- {{SVGElement("clipPath")}}
