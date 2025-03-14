---
title: <tref>
slug: Web/SVG/Element/tref
l10n:
  sourceCommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

{{SVGRef}}{{deprecated_header}}

SVG の {{SVGElement("text")}} 要素のテキストコンテンツは、 {{SVGElement("text")}} 要素内に直接埋め込まれた文字データ、または参照先が **`<tref>`** 要素で指定された要素の文字データコンテンツのどちらかになります。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("xlink:href")}} {{deprecated_inline}}

## DOM インターフェイス

この要素は {{domxref("SVGTRefElement")}} インターフェイスを実装しています。

## 例

```xml
<svg width="100%" height="100%" viewBox="0 0 1000 300"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <text id="ReferencedText">
      Referenced character data
    </text>
  </defs>

  <text x="100" y="100" font-size="45" >
    Inline character data
  </text>

  <text x="100" y="200" font-size="45" fill="red" >
    <tref xlink:href="#ReferencedText"/>
  </text>

  <!-- Show outline of canvas using 'rect' element -->
  <rect x="1" y="1" width="998" height="298"
        fill="none" stroke-width="2" />
</svg>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("text")}}
