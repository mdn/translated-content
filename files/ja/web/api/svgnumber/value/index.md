---
title: "SVGNumber: value プロパティ"
short-title: value
slug: Web/API/SVGNumber/value
l10n:
  sourceCommit: 4d45ceb8c5083fcd325abf028105d0ddfe8d4874
---

{{APIRef("SVG")}}

**`value`** は {{domxref("SVGNumber")}} インターフェイスの読み取り専用プロパティで、数値を表します。

## 値

浮動小数点型です。

## 例

### `value` プロパティへのアクセス

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <circle id="myCircle" cx="100" cy="100" r="50" fill="blue" />
</svg>
```

```js
const circleElement = document.getElementById("myCircle");

// 半径 (r) の値のプロパティにアクセス
const radiusValue = circleElement.r.baseVal.value;

console.log(radiusValue); // 出力: 50
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
