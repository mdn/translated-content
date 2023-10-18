---
title: animateTransform
slug: Web/SVG/Element/animateTransform
---

{{SVGRef}}

`animateTransform` 要素は、 ターゲット要素に対して変換属性をアニメーション化し、これにより変形、スケーリング、回転およびまたはゆがみのアニメーションを制御することができます。

## 使用可能な場所

{{svginfo}}

## 例

```html
<?xml version="1.0"?>
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <polygon points="60,30 90,90 30,90">
    <animateTransform
      attributeName="transform"
      attributeType="XML"
      type="rotate"
      from="0 60 70"
      to="360 60 70"
      dur="10s"
      repeatCount="indefinite" />
  </polygon>
</svg>
```

**ライブサンプル**

{{ EmbedLiveSample('例','120','120') }}

## 属性

### グローバル属性

- [条件処理属性](/ja/docs/Web/SVG/Attribute#ConditionalProccessing) »
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
- {{ SVGAttr("type") }}

## DOM インターフェース

この属性は [`SVGAnimateTransformElement`](/ja/docs/DOM/SVGAnimateTransformElement) インターフェースを提供します。

## 仕様

{{Specifications}}

## ブラウザ互換性

{{Compat("svg.elements.animateTransform")}}
