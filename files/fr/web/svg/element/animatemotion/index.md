---
title: animateMotion
slug: Web/SVG/Element/animateMotion
---

{{SVGRef}}

L'élément **`<animateMotion>`** permet d'animer un élément le long d'un chemin donné.

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs à traitement conditionnel](/fr/docs/Web/SVG/Attribute#ConditionalProccessing) »
- [Attributs fondamentaux](/fr/docs/Web/SVG/Attribute#Core) »
- [Attributs d'événements d'animation](/fr/docs/SVG/Attribute#AnimationEvent) »
- [Attributs XLink](/fr/docs/Web/SVG/Attribute#XLink) »
- [Attributs d'animation de timing](/fr/docs/SVG/Attribute#AnimationTiming) »
- [Attributs d'animation de valeurs](/fr/docs/SVG/Attribute#AnimationValue) »
- [Attributs d'animation d'ajout](/fr/docs/SVG/Attribute#AnimationAddition) »
- {{ SVGAttr("externalResourcesRequired") }}

### Attributs spécifiques

- {{ SVGAttr("calcMode") }}
- {{ SVGAttr("path") }}
- {{ SVGAttr("keyPoints") }}
- {{ SVGAttr("rotate") }}
- {{ SVGAttr("origin") }}

## Interface DOM

Cet élément implémente l'interface [`SVGAnimateMotionElement`](/fr/docs/DOM/SVGAnimateMotionElement).

## Exemple

### SVG

```html
<?xml version="1.0"?>
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Dessine le chemin en gris, avec 2 cercles aux extrémités -->
  <path
    d="M10,110 A120,120 -45 0,1 110 10 A120,120 -45 0,1 10,110"
    stroke="lightgrey"
    stroke-width="2"
    fill="none"
    id="theMotionPath" />
  <circle cx="10" cy="110" r="3" fill="lightgrey" />
  <circle cx="110" cy="10" r="3" fill="lightgrey" />

  <!-- Cercle rouge qui sera déplacé le long du chemin. -->
  <circle cx="" cy="" r="5" fill="red">
    <!-- Définit l'animation -->
    <animateMotion dur="6s" repeatCount="indefinite">
      <mpath xlink:href="#theMotionPath" />
    </animateMotion>
  </circle>
</svg>
```

### Résultat

{{EmbedLiveSample("Exemple", 120, 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{ SVGElement("mpath") }}
