---
title: animateTransform
slug: Web/SVG/Element/animateTransform
---

{{SVGRef}}

L'élément **`<animateTransform>`** permet d'animer un élement en appliquant une transformation: translation, mise à l'échelle, rotation et/ou inclinaison.

## Contexte d'utilisation

{{svginfo}}

## Exemple

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

{{ EmbedLiveSample('Exemple','120','120') }}

## Attributs

### Attributs globaux

- [Attributs de traitement conditionnel](/fr/docs/Web/SVG/Attribute#conditionalproccessing) »
- [Attributs de base](/fr/docs/Web/SVG/Attribute#core) »
- [Attributs de l'évènement d'animation](/fr/docs/Web/SVG/Attribute#animationevent) »
- [Attributs Xlink](/fr/docs/Web/SVG/Attribute#xlink) »
- [Attributs de ciblage d'animation](/fr/docs/Web/SVG/Attribute#animationattributetarget) »
- [Attributs de chronométrage d'animation](/fr/docs/Web/SVG/Attribute#animationtiming) »
- [Attributs de valeur d'animation](/fr/docs/Web/SVG/Attribute#animationvalue) »
- [Attributs d'ajout d'animations](/fr/docs/Web/SVG/Attribute#animationaddition)&nbsp;»
- {{ SVGAttr("externalResourcesRequired") }}

### Attributs spécifiques

- {{ SVGAttr("by") }}
- {{ SVGAttr("from") }}
- {{ SVGAttr("to") }}
- {{ SVGAttr("type") }}

## Interface DOM

Cet élément implémente l'interface [`SVGAnimateTransformElement`](/fr/docs/Web/API/SVGAnimateTransformElement).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
