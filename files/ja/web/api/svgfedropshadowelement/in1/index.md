---
title: "SVGFEDropShadowElement: in1 プロパティ"
short-title: in1
slug: Web/API/SVGFEDropShadowElement/in1
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

**`in1`** は {{domxref("SVGFEDropShadowElement")}} インターフェイスの読み取り専用プロパティで、この {{SVGElement("feDropShadow")}} 要素の {{SVGAttr("in")}} 属性を反映します。

## 値

{{domxref("SVGAnimatedString")}} オブジェクトです。

## 例

この例では、フィルター内に 2 つの {{SVGElement("feDropShadow")}} 要素が定義されており、それぞれ異なる `in` 属性が設定されています。

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="drop-shadow-filter">
      <!-- 1 つ目のドロップシャドウは SourceGraphic に適用 -->
      <feDropShadow
        in="SourceGraphic"
        dx="10"
        dy="10"
        stdDeviation="5"
        flood-color="red" />
      <!-- 2 つ目のドロップシャドウは BackgroundImage に適用 -->
      <feDropShadow
        in="BackgroundImage"
        dx="-10"
        dy="-10"
        stdDeviation="5"
        flood-color="blue" />
    </filter>
  </defs>
  <!-- 赤い影をつけた矩形 -->
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    fill="red"
    filter="url(#drop-shadow-filter)" />
  <!-- 青い影をつけた円 -->
  <circle
    cx="100"
    cy="100"
    r="50"
    fill="blue"
    filter="url(#drop-shadow-filter)" />
</svg>
```

`in` 属性は次のようにアクセスできます。

```js
const dropShadows = document.querySelectorAll("feDropShadow");

console.log(dropShadows[0].in1.baseVal); // 出力結果: "SourceGraphic"
console.log(dropShadows[1].in1.baseVal); // 出力結果: "BackgroundImage"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedString")}}
