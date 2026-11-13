---
title: "SVGAnimatedLength: animVal プロパティ"
short-title: animVal
slug: Web/API/SVGAnimatedLength/animVal
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

**`animVal`** は {{domxref("SVGAnimatedLength")}} インターフェイスのプロパティで、 SVG の列挙型の現在の値を表します。アニメーションがない場合は、 {{domxref("SVGAnimatedLength.baseVal", "baseVal")}} と同じ値になります。

## 値

{{domxref("SVGLength")}} で、アニメーション中の現在の値になります。

## 例

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  width="200"
  height="200">
  <circle cx="50" cy="50" r="20" fill="gold" id="circle">
    <animate
      attributeName="r"
      values="20;25;10;20"
      dur="8s"
      repeatCount="indefinite" />
  </circle>
</svg>
<pre id="log"></pre>
```

```js
const circle = document.getElementById("circle");
const log = document.getElementById("log");

function displayLog() {
  const animValue = circle.r.animVal.value;
  const baseValue = circle.r.baseVal.value;
  log.textContent = `The 'circle.r.animVal' is ${animValue}.\n`;
  log.textContent += `The 'circle.r.baseVal' is ${baseValue}.`;
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

- {{domxref("SVGAnimatedLength.baseVal")}}
