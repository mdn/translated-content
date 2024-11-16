---
title: <animateTransform>
slug: Web/SVG/Element/animateTransform
l10n:
  sourceCommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

{{SVGRef}}

`animateTransform` 要素は、 ターゲット要素に対して座標変換属性をアニメーションさせ、これにより平行移動、拡大縮小、回転、ゆがみなどのアニメーションを制御することができます。

## 使用可能な場所

{{svginfo}}

## 例

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg">
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

{{ EmbedLiveSample('Example','120','120') }}

### 属性

- {{ SVGAttr("by") }}
- {{ SVGAttr("from") }}
- {{ SVGAttr("to") }}
- {{ SVGAttr("type") }}

## DOM インターフェイス

この属性は [`SVGAnimateTransformElement`](/ja/docs/Web/API/SVGAnimateTransformElement) インターフェイスを提供します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
