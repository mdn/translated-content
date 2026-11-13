---
title: <animateTransform>
slug: Web/SVG/Reference/Element/animateTransform
l10n:
  sourceCommit: 12222b32eec33a7411c6de8afc8408d9aa617dd2
---

L'élément [SVG](/fr/docs/Web/SVG) **`<animateTransform>`** anime un attribut de transformation sur son élément cible, permettant ainsi aux animations de contrôler le déplacement, la mise à l'échelle, la rotation et/ou l'inclinaison.

## Contexte d'utilisation

{{SVGInfo}}

## Attributs

- {{SVGAttr("by")}}
- {{SVGAttr("from")}}
- {{SVGAttr("to")}}
- {{SVGAttr("type")}}

## Interface DOM

Cet élément implémente l'interface {{DOMxRef("SVGAnimateTransformElement")}}.

## Exemples

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

{{EmbedLiveSample("Exemples", 120, 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
