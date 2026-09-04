---
title: <feMergeNode>
slug: Web/SVG/Reference/Element/feMergeNode
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

**`<feMergeNode>`** は [SVG](/ja/docs/Web/SVG) の要素で、親要素である {{ SVGElement("feMerge") }} によって処理される別のフィルターの結果を受け取ります。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("in")}}

## DOM インターフェイス

この要素は [`SVGFEMergeNodeElement`](/ja/docs/Web/API/SVGFEMergeNodeElement) インターフェイスを実装しています。

## 例

```html
<svg
  width="200"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <filter id="feOffset" x="-40" y="-20" width="100" height="200">
    <feOffset in="SourceGraphic" dx="60" dy="60" />
    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur2" />
    <feMerge>
      <feMergeNode in="blur2" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>

  <rect
    x="40"
    y="40"
    width="100"
    height="100"
    stroke="black"
    fill="green"
    filter="url(#feOffset)" />
  <rect x="40" y="40" width="100" height="100" stroke="black" fill="green" />
</svg>
```

### 結果

{{EmbedLiveSample('Example', 200, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ SVGElement("filter") }}
- {{ SVGElement("animate") }}
- {{ SVGElement("set") }}
- {{ SVGElement("feMerge") }}
- [SVG チュートリアル: フィルター効果](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
