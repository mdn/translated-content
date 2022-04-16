---
title: animateColor
slug: conflicting/Web/SVG/Element/animate
tags:
  - Animation SVG
  - Element
  - SVG
translation_of: Web/SVG/Element/animateColor
original_slug: Web/SVG/Element/animateColor
---
{{SVGRef}}{{deprecated_header}}

> **Attention :** Cet élément est déprécié depuis SVG 1.1 Deuxième édition et peut etre retiré dans une prochaine version de SVG. Il ne fournis pas de fonctionnalités non disponible en utilisant l'élément {{ SVGElement("animate") }}. Il n'est pas implémenté dans Firefox ni dans Internet Explorer. Il est préférable d'utiliser l'élément {{ SVGElement("animate") }} à la place.

L'élément **`<animateColor>`** spécifie une transformation de couleur à travers le temps.

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs à traitement conditionnel](/fr/docs/Web/SVG/Attribute#ConditionalProccessing) »
- [Attributs fondamentaux](/fr/docs/Web/SVG/Attribute#Core) »
- [Attributs d'événements d'animation](/fr/docs/SVG/Attribute#AnimationEvent) »
- [Attributs XLink](/fr/docs/Web/SVG/Attribute#XLink) »
- [Attributs de cible d'attribut d'animation](/fr/docs/Web/SVG/Attribute#AnimationAttributeTarget) »
- [Attributs d'animation de timing](/fr/docs/SVG/Attribute#AnimationTiming "SVG/Attribute#AnimationTiming") »
- [Attributs d'animation de valeurs](/fr/docs/SVG/Attribute#AnimationValue "SVG/Attribute#AnimationValue") »
- [Attributs d'animation d'ajout](/fr/docs/SVG/Attribute#AnimationAddition "SVG/Attribute#AnimationAddition") »
- {{ SVGAttr("externalResourcesRequired") }}

### Attributs spécifiques

- {{ SVGAttr("by") }}
- {{ SVGAttr("from") }}
- {{ SVGAttr("to") }}

## Interface DOM

Cet élément implémente l'interface [`SVGAnimateColorElement`](/fr/docs/DOM/SVGAnimateColorElement "en/DOM/SVGAnimateColorElement").

## Exemple

### SVG

```html
<svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50">
    <animateColor attributeName="fill" attributeType="XML"
        from="black" to="red" dur="6s" repeatCount="indefinite"/>
  </circle>
</svg>
```

### Résultat

{{EmbedLiveSample("Exemple", 120, 120)}}

## Spécifications

| Spécification                                                                                                | Statut                   | Commentaire         |
| ------------------------------------------------------------------------------------------------------------ | ------------------------ | ------------------- |
| {{SpecName("SVG1.1", "animate.html#AnimateColorElement", "&lt;animateColor&gt;")}} | {{Spec2("SVG1.1")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("svg.elements.animateColor")}}

## Voir également

- {{ SVGElement("animate") }}
