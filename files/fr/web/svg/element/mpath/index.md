---
title: <mpath>
slug: Web/SVG/Element/mpath
tags:
  - Element
  - SVG
  - SVG Animation
translation_of: Web/SVG/Element/mpath
---
{{SVGRef}}

L'élément **`<mpath>`** se place dans un élément {{SVGElement("animateMotion")}}, il permet de référencer un élément {{SVGElement("path")}} pour définir le chemin utilisé par l'animation.

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute#Attributs_de_base "en/SVG/Attribute#Core")
- [Attributs Xlink](/fr/docs/Web/SVG/Attribute#Attributs_XLink "en/SVG/Attribute#XLink")
- {{SVGAttr("externalResourcesRequired")}}

### Attributs spécifiques

- {{SVGAttr("xlink:href")}}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGMPathElement")}}.

## Exemple

### SVG

```html
<svg width="100%" height="100%"  viewBox="0 0 500 300"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink" >

  <rect x="1" y="1" width="498" height="298"
        fill="none" stroke="blue" stroke-width="2" />

  <!-- Affiche le chemin en bleu avec trois cercles
       au début, au milieu et à la fin du chemin -->
  <path id="path1" d="M100,250 C 100,50 400,50 400,250"
        fill="none" stroke="blue" stroke-width="7.06"  />
  <circle cx="100" cy="250" r="17.64" fill="blue"  />
  <circle cx="250" cy="100" r="17.64" fill="blue"  />
  <circle cx="400" cy="250" r="17.64" fill="blue"  />

  <!-- Triangle qui sera déplacé le long du chemin.
       Il est définit avec une orientation verticale, la base du triangle
       est centrée horizontalement juste au-dessus de l'origine. -->
  <path d="M-25,-12.5 L25,-12.5 L 0,-87.5 z"
        fill="yellow" stroke="red" stroke-width="7.06"  >
    <!-- Référence le path à utiliser -->
    <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" >
       <mpath xlink:href="#path1"/>
    </animateMotion>
  </path>
</svg>
```

### Résultat

{{EmbedLiveSample("Exemple", 250, 165)}}

## Spécifications

| Spécification                                                                                | Statut                                   | Commentaire         |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------- |
| {{SpecName("SVG Animations 2", "#MPathElement", "&lt;mpath&gt;")}}     | {{Spec2("SVG Animations 2")}} | Aucun changement    |
| {{SpecName("SVG1.1", "animate.html#MPathElement", "&lt;mpath&gt;")}} | {{Spec2("SVG1.1")}}                 | Définition initiale |

## Compatibilité des navigateurs

{{Compat("svg.elements.mpath")}}

## Voir aussi

- {{SVGElement("animateMotion")}}
