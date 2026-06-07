---
title: "SVGFEDropShadowElement: dy プロパティ"
short-title: dy
slug: Web/API/SVGFEDropShadowElement/dy
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

**`dy`** は {{domxref("SVGFEDropShadowElement")}} インターフェイスの読み取り専用プロパティで、この {{SVGElement("feDropShadow")}} 要素の {{SVGAttr("dy")}} 属性を反映します。

## 値

{{domxref("SVGAnimatedNumber")}} オブジェクトです。

## 例

### `dy` 値へアクセス

この例では、`SVGFEDropShadowElement` インターフェイスの読み取り専用のプロパティ `dy` を使用して、`<feDropShadow>` の垂直方向のオフセットを取得します。

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="drop-shadow-filter">
      <!-- dy プロパティを 10 に設定したドロップシャドウ -->
      <feDropShadow
        in="SourceGraphic"
        dx="10"
        dy="10"
        stdDeviation="5"
        flood-color="red" />
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

  <!-- 赤い影をつけた円 -->
  <circle
    cx="100"
    cy="100"
    r="50"
    fill="blue"
    filter="url(#drop-shadow-filter)" />
</svg>
```

```js
const dropShadow = document.querySelector("feDropShadow");

console.log(dropShadow.dy.baseVal); // 出力結果: 10
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedNumber")}}
