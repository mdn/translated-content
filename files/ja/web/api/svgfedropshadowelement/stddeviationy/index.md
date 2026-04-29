---
title: "SVGFEDropShadowElement: stdDeviationY プロパティ"
short-title: stdDeviationY
slug: Web/API/SVGFEDropShadowElement/height/stddeviationy
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`stdDeviationX`** は {{domxref("SVGFEDropShadowElement")}} インターフェイスの読み取り専用プロパティで、この {{SVGElement("feDropShadow")}} 要素の {{SVGAttr("stdDeviation")}} 属性の（おそらく自動で計算された）Y 成分を反映します。

## 値

{{domxref("SVGAnimatedNumber")}} オブジェクトです。

## 例

### `stdDeviationY` 値へアクセス

この例では、`<feDropShadow>` のぼかし処理における垂直方向の標準偏差を、`SVGFEDropShadowElement` インターフェイスの読み取り専用のプロパティ `stdDeviationY` を使用して取得します。

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="drop-shadow-filter">
      <!-- 垂直方向のぼかし効果をつけるために、stdDeviationY プロパティを 10 に設定したドロップシャドウ -->
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

console.log(dropShadow.stdDeviationY.baseVal); // 出力結果: 10
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedNumber")}}
