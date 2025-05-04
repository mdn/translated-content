---
title: <animateTransform>
slug: Web/SVG/Reference/Element/animateTransform
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`<animateTransform>`** は [SVG](/ja/docs/Web/SVG) の要素で、ターゲット要素に対して座標変換属性をアニメーションさせ、これにより平行移動、拡大縮小、回転、ゆがみなどのアニメーションを制御することができます。

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

## 関連情報

- {{SVGElement("discard")}}
