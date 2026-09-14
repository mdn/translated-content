---
title: "SVGFEDropShadowElement: stdDeviationX プロパティ"
short-title: stdDeviationX
slug: Web/API/SVGFEDropShadowElement/stdDeviationX
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

**`stdDeviationX`** は {{domxref("SVGFEDropShadowElement")}} インターフェイスの読み取り専用プロパティで、この {{SVGElement("feDropShadow")}} 要素の {{SVGAttr("stdDeviation")}} 属性の（おそらく自動で計算された）X 成分を反映します。

## 値

{{domxref("SVGAnimatedNumber")}} オブジェクトです。

## 例

### `stdDeviationX` 値へアクセス

この例では、`<feDropShadow>` のぼかし処理における水平方向の標準偏差を、`SVGFEDropShadowElement` インターフェイスの読み取り専用のプロパティ `stdDeviationX` を使用して取得します。

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="drop-shadow-filter">
      <!-- 水平方向のぼかし効果をつけるために、stdDeviationX プロパティを 5 に設定したドロップシャドウ -->
      <feDropShadow
        in="SourceGraphic"
        dx="10"
        dy="10"
        stdDeviation="5 10"
        flood-color="gray" />
    </filter>
  </defs>

  <!-- 灰色の影を持つ矩形 -->
  <rect
    x="50"
    y="50"
    width="100"
    height="100"
    fill="red"
    filter="url(#drop-shadow-filter)" />
</svg>
```

```js
const dropShadow = document.querySelector("feDropShadow");

console.log(dropShadow.stdDeviationX.baseVal); // 出力結果: 5
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedNumber")}}
