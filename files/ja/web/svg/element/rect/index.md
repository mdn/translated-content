---
title: rect
slug: Web/SVG/Element/rect
---

{{SVGRef}}

## 概要

`rect` 要素は SVG の基本図形であり、四角形を生成する際の基準となる座標と、そこからの幅と高さを指定します。また、角の丸まった四角形を作ります。

## 例

### シンプルな `rect 要素の使い方`

» [rect-1.svg](rect-1.svg)

### `角の丸い rect` 要素

» [rect-2.svg](rect-2.svg)

## 属性

### グローバル属性

- [条件処理属性](/ja/Web/SVG/Attribute#ConditionalProcessing) »
- [コア属性](/ja/Web/SVG/Attribute#Core) »
- [グラフィカルイベント属性](/ja/Web/SVG/Attribute#GraphicalEvent) »
- [プレゼンテーション属性](/ja/Web/SVG/Attribute#Presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### 専用属性

- {{ SVGAttr("x") }}
- {{ SVGAttr("y") }}
- {{ SVGAttr("width") }}
- {{ SVGAttr("height") }}
- {{ SVGAttr("rx") }}
- {{ SVGAttr("ry") }}

## DOM インターフェイス

この要素は [`SVGRectElement`](/ja/DOM/SVGRectElement) インターフェイスを提供します。

## 使用可能な場所

{{svginfo}}

## 仕様

| 仕様                                                                                     | 状態                     | コメント   |
| ---------------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('SVG2', 'shapes.html#RectElement', '&lt;rect&gt;')}}     | {{Spec2('SVG2')}} |            |
| {{SpecName('SVG1.1', 'shapes.html#RectElement', '&lt;rect&gt;')}} | {{Spec2('SVG1.1')}} | 最初の定義 |

## ブラウザー互換性

{{Compat("svg.elements.rect")}}

## 関連情報

- {{ SVGElement("path") }}
