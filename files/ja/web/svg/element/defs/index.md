---
title: defs
slug: Web/SVG/Element/defs
---

{{SVGRef}}

SVG では、後で再利用できるよう描画オブジェクトを定義します。参照される要素は、可能なかぎり`defs`要素内で定義されることが推奨されています。`defs`要素内でこれらの要素を定義することは、SVG の要素の可読性を向上させ、ひいては操作性をも向上させます。`defs`要素の描画要素は、そのままでは描画されません。ビューポート上で描画したい場所へそれらの要素を描画するために、{{ SVGElement("use") }}要素を使用します。

## 利用コンテキスト

{{svginfo}}

## 例

```xml
<svg width="80px" height="30px" viewBox="0 0 80 30"
     xmlns="http://www.w3.org/2000/svg">

  <defs>
    <linearGradient id="Gradient01">
      <stop offset="20%" stop-color="#39F" />
      <stop offset="90%" stop-color="#F3F" />
    </linearGradient>
  </defs>

  <rect x="10" y="10" width="60" height="10"
        fill="url(#Gradient01)"  />
</svg>
```

## 属性

### グローバル属性

- [条件的処理属性（コンディショナルプロセッシング属性）](/ja/SVG/Attribute#ConditionalProccessing) »
- [コア属性](/ja/SVG/Attribute#Core) »
- [描画イベント属性](/ja/SVG/Attribute#GraphicalEvent) »
- [プレゼンテーション属性](/ja/SVG/Attribute#Presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### スペシフィック属性

_スペシフィック属性はありません_

## DOM インタフェース

この要素は [`SVGDefsElement`](/ja/DOM/SVGDefsElement) インタフェースを実装しています。

## 仕様

| 仕様                                                                         | 状態                     | コメント   |
| ---------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName("SVG2", "struct.html#Head", "&lt;defs&gt;")}} | {{Spec2("SVG2")}} | 変更なし   |
| {{SpecName("SVG1.1", "struct.html#Head", "&lt;defs&gt;")}} | {{Spec2("SVG1.1")}} | 最初の定義 |

## ブラウザ互換性

{{Compat("svg.elements.defs")}}
