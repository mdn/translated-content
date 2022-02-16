---
title: animate
slug: Web/SVG/Element/animate
tags:
  - Animation SVG
  - Element
  - SVG
translation_of: Web/SVG/Element/animate
---
{{SVGRef}}

L'élément SVG **`<animate>`** est utilisé pour animer un attribut ou une propriété d'un élément au fil du temps. Il est normalement inséré dans l'élément cible ou référencé par l'attribut `href` de l'élément.

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs de traitrement conditionnel](/fr/docs/Web/SVG/Attribute#Attributs_de_traitement_conditionnel)
- [Attributs de base](/fr/docs/Web/SVG/Attribute#Attributs_de_base)
- [Attributs d'événement d'animation](/fr/docs/Web/SVG/Attribute#Événements_d'animation)
- [Attributs Xlink](/fr/docs/Web/SVG/Attribute#Attributs_XLink)
- [Attributs cible d'attributs d'animation](/fr/docs/Web/SVG/Attribute#Animation_cible)
- [Attributs de timing de l'animation](/fr/docs/Web/SVG/Attribute#Timing_de_l'animation)
- [Attributs de valeur de l'animation](/fr/docs/Web/SVG/Attribute#Valeurs_de_l'animation)
- [Attributs d'addition de l'animation](/fr/docs/Web/SVG/Attribute#Addition_de_l'animation)
- {{SVGAttr("externalResourcesRequired")}}

### Attributs spécifiques

- {{SVGAttr("attributeName")}}
- {{SVGAttr("attributeType")}}
- {{SVGAttr("from")}}
- {{SVGAttr("to")}}
- {{SVGAttr("dur")}}
- {{SVGAttr("repeatCount")}}

## Interface DOM

Cet élément implémente l'interface [`SVGAnimateElement`](/fr/docs/Web/DOM/SVGAnimateElement).

## Exemple

### SVG

```html
<?xml version="1.0"?>
<svg width="120" height="120" viewBox="0 0 120 120" version="1.1"
     xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="100" height="100">
    <animate attributeType="XML" attributeName="x" from="-100" to="120"
        dur="10s" repeatCount="indefinite"/>
  </rect>
</svg>
```

### Résultat

{{EmbedLiveSample("Exemple", 120, 120)}}

## Problèmes d'accessibilité

Les animations qui clignotent peuvent être problématiques pour les personnes ayant des problèmes cognitifs tels que le Trouble du Déficit de l'Attention avec ou sans Hyperactivité (TDAH). De plus, certains types de mouvements peuvent être un élément déclencheur pour les personnes présentant un risque de troubles vestibulaires, d'épilepsie, de migraine et de sensibilité à la scotopie.

Envisagez de créer un mécanisme permettant de suspendre ou de désactiver l'animation, ainsi que d'utiliser la [requête reduced-motion](/fr/docs/Web/CSS/@media/prefers-reduced-motion) pour améliorer l'expérience des utilisateurs ayant définit pour préférence de ne pas avoir d'animations.

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Guideline 2.2 explanations](/fr/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.2_%E2%80%94_Enough_Time_Provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Spécifications

| Spécification                                                                                    | Statut                                   | Commentaire         |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------- |
| {{SpecName("SVG Animations 2", "#AnimateElement", "&lt;animate&gt;")}}     | {{Spec2("SVG Animations 2")}} | Aucun changement    |
| {{SpecName("SVG1.1", "animate.html#AnimateElement", "&lt;animate&gt;")}} | {{Spec2("SVG1.1")}}                 | Définition initiale |

## Compatibilité des navigateurs

{{Compat("svg.elements.animate")}}
