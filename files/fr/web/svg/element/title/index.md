---
title: title
slug: Web/SVG/Element/title
tags:
  - Element
  - Reference
  - SVG
  - SVG Description
translation_of: Web/SVG/Element/title
---
{{SVGRef}}

Tout élément graphique ou conteneur dans un dessin SVG peut définir un titre en utilisant un élément **`<title>`**, ce titre ne peut contenir que du texte.

Quand l'élément contenant un titre apparaît à l'utilisateur sous forme d'image, l'élément `<title>` n'est pas affiché. Néanmoins, quelques moteurs de rendu peuvent, par exemple, l'afficher sous forme d'infobulle. Des représentations alternatives sont possibles, visuelles ou auditives, en renplacement des éléments graphiques. De manière générale, cet élément améliore l'accessibilité des documents SVG.

L'élément `<title>` est souvent le premier enfant de son parent. Notons que les implémentations qui rendent l'élément title en infobulle ne le font que s'il est à cette place.

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute#Attributs_de_base "en/SVG/Attribute#Core")&nbsp;»
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}

### Attributs spécifiques

_(Aucun)_

## Interface DOM

Cet élément implémente l'interface [`SVGTitleElement`](/fr/docs/Web/API/SVGTitleElement "en/DOM/SVGTitleElement").

## Exemple

```html
<svg width="220" height="70" xmlns="http://www.w3.org/2000/svg">
  <title>SVG Title Demo example</title>
  <rect x="10" y="10" width="200" height="50"
    style="fill:wheat; stroke:blue; stroke-width:1px">
</svg>
```

{{ EmbedLiveSample('Exemple', '100%', 100) }}

## Spécifications

| Spécification                                                                                                | Statut                   | Commentaire         |
| ------------------------------------------------------------------------------------------------------------ | ------------------------ | ------------------- |
| {{SpecName('SVG2', 'struct.html#TitleElement', '&lt;title&gt;')}}                     | {{Spec2('SVG2')}} |                     |
| {{SpecName('SVG1.1', 'struct.html#DescriptionAndTitleElements', '&lt;title&gt;')}} | {{Spec2('SVG1.1')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("svg.elements.title")}}

## Voir aussi

- {{ SVGElement("desc") }}
