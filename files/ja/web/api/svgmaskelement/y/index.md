---
title: "SVGMaskElement: y プロパティ"
short-title: y
slug: Web/API/SVGMaskElement/y
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

**`y`** は {{domxref("SVGMaskElement")}} インターフェイスの読み取り専用プロパティで、 {{SVGElement("mask")}} の {{SVGattr("y")}} 属性の値を含む {{domxref("SVGAnimatedLength")}} オブジェクトを返します。これは、マスク領域の左上隅の Y 軸座標を表します。

> [!NOTE]
> このプロパティは読み取り専用ですが、変更可能な 2 つの値、 {{domxref("SVGAnimatedLength.baseVal", "baseVal")}} および {{domxref("SVGAnimatedLength.animVal", "animVal")}} を格納する単なるコンテナーです。

## 値

{{domxref("SVGAnimatedLength")}} オブジェクトです。このオブジェクトの `baseVal` プロパティは、 {{domxref("SVGLength")}} で `y` の値を返します。

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
  <svg viewBox="-10 -10 120 120" width="100" height="100">
    <mask id="mask" x="0" maskUnits="userSpaceOnUse">
      <!-- Everything under a white pixel will be visible -->
      <rect x="0" y="0" width="100" height="100" fill="white" />

      <!-- Everything under a black pixel will be invisible -->
      <path
        d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
        fill="black" />
      <animate
        attributeName="y"
        values="0;80;0"
        dur="5s"
        repeatCount="indefinite" />
    </mask>

    <polygon points="-10,110 110,110 110,-10" fill="orange" />

    <!-- with this mask applied, we "punch" a heart shape hole into the circle -->
    <circle cx="50" cy="50" r="50" mask="url(#mask)" />
  </svg>
</div>
<pre id="log"></pre>
```

```js
const mask = document.getElementById("mask");

function displayLog() {
  const animValue = mask.y.animVal.value;
  const baseValue = mask.y.baseVal.value;
  log.textContent = `The 'y.animVal' is ${animValue}.\n`;
  log.textContent += `The 'y.baseVal' is ${baseValue}.`;
  requestAnimationFrame(displayLog);
}
displayLog();
```

{{EmbedLiveSample('Example', 100, 160)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
