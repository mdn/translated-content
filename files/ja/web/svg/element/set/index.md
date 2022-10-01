---
title: set
slug: Web/SVG/Element/set
---

{{SVGRef}}

## 概要

`set` 要素は指定された時間の間の属性の値を設定します。この要素はすべての属性タイプをサポートしており、合理的に補間することができないものも含みます。例えば、文字列や論理型といった値です。`set` 要素は非加算的要素です。additive 属性と accumulate 属性は許可されておらず、指定されても無視されます。

## 使用可能な場所

{{svginfo}}

## 例

## 属性

### グローバル属性

- [条件処理属性](/ja/Web/SVG/Attribute#ConditionalProcessing) »
- [コア属性](/ja/Web/SVG/Attribute#Core) »
- [アニメーションイベント属性](/ja/Web/SVG/Attribute#AnimationEvent) »
- [Xlink 属性](/ja/Web/SVG/Attribute#XLink) »
- [Animation attribute target attributes](/ja/Web/SVG/Attribute#AnimationAttributeTarget) »
- [アニメーションタイミング属性](/ja/Web/SVG/Attribute#AnimationTiming) »
- {{ SVGAttr("externalResourcesRequired") }}

### 専用属性

- {{ SVGAttr("to") }}

## DOM インターフェース

この要素は [`SVGSetElement`](/ja/DOM/SVGSetElement) インターフェースを提供します。

## 仕様

| Specification                                                                        | Status                                   | Comment    |
| ------------------------------------------------------------------------------------ | ---------------------------------------- | ---------- |
| {{SpecName("SVG Animations 2", "#SetElement", "&lt;set&gt;")}} | {{Spec2("SVG Animations 2")}} |            |
| {{SpecName('SVG1.1', 'animate.html#SetElement', '&lt;set&gt;')}} | {{Spec2('SVG1.1')}}                 | 最初の定義 |

## ブラウザー互換性

{{Compat("svg.elements.set")}}

## 関連情報

- {{ SVGElement("animate") }}
