---
title: <g>
slug: Web/SVG/Reference/Element/g
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

**`<g>`** は [SVG](/ja/docs/Web/SVG) の要素で、他の SVG 要素をグループ化するために用いられるコンテナーです。

`<g>` 要素に適用された座標変換は、その全ての子要素に対して実行されます。適用された属性は子要素に継承されます。加えて、多数のオブジェクトをグループ化しておくと後に {{SVGElement("use")}} 要素で参照することができます。

## 使用コンテキスト

{{svginfo}}

## 属性

この要素には、グローバル属性のみがあります。

## DOM インターフェイス

この要素は {{domxref("SVGGElement")}} インターフェイスを実装しています。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- プレゼンテーション属性を継承するために g を使う -->
  <g fill="white" stroke="green" stroke-width="5">
    <circle cx="40" cy="40" r="25" />
    <circle cx="60" cy="60" r="25" />
  </g>
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
