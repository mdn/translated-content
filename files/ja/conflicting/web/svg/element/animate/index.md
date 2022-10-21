---
title: animateColor
slug: conflicting/Web/SVG/Element/animate
original_slug: Web/SVG/Element/animateColor
---

{{SVGRef}}{{deprecated_header}}

> **警告:** この要素は SVG1.1 仕様（第 2 版）で廃止され、将来の SVG のバージョンで削除される可能性があります。 この要素は {{ SVGElement("animate") }} 要素に置き換えられ、Firefox や Internet Explorer では実装されておりません。SVG ファイル製作者はこの要素の代わりに{{ SVGElement("animate") }}要素を使うべきです。

## 概要

`animateColor`要素は時間経過による色の変換を指定します。

## 使用可能な場所

{{svginfo}}

## 例

» [animateColor.svg](/files/3264/animateColor.svg)

## 属性

### グローバル属性

- [条件処理属性](/ja/docs/Web/SVG/Attribute#ConditionalProcessing) »
- [コア属性](/ja/docs/Web/SVG/Attribute#Core) »
- [アニメーションイベント属性](/ja/docs/Web/SVG/Attribute#AnimationEvent) »
- [Xlink 属性](/ja/docs/Web/SVG/Attribute#XLink) »
- [Animation attribute target attributes](/ja/docs/Web/SVG/Attribute#AnimationAttributeTarget) »
- [アニメーションタイミング属性](/ja/docs/Web/SVG/Attribute#AnimationTiming) »
- [Animation value attributes](/ja/docs/Web/SVG/Attribute#AnimationValue) »
- [Animation addition attributes](/ja/docs/Web/SVG/Attribute#AnimationAddition) »
- {{ SVGAttr("externalResourcesRequired") }}

### 専用属性

- {{ SVGAttr("by") }}
- {{ SVGAttr("from") }}
- {{ SVGAttr("to") }}

## DOM インターフェース

この要素は [`SVGAnimateColorElement`](/ja/docs/DOM/SVGAnimateColorElement) インターフェースを提供します。

## 仕様

| 仕様                                                                                                         | 状態                     | コメント   |
| ------------------------------------------------------------------------------------------------------------ | ------------------------ | ---------- |
| {{SpecName("SVG1.1", "animate.html#AnimateColorElement", "&lt;animateColor&gt;")}} | {{Spec2("SVG1.1")}} | 最初の定義 |

## ブラウザー互換性

{{Compat("svg.elements.animateColor")}}

## 関連情報

- {{ SVGElement("animate") }}
