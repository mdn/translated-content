---
title: Élément remplacé
slug: Web/CSS/Replaced_element
---

{{CSSRef}}

En CSS, un **élément remplacé** est un élément dont la représentation est en dehors du champ de CSS. Ce sont des objets externes dont la représentation sera indépendante de CSS.

Autrement dit, ces éléments sont des éléments dont le contenu n'est pas impacté par les styles du document. La position de l'élément remplacé peut être modifiée avec CSS mais le contenu même de l'élément ne pourra pas être modifiée. Certains éléments remplacés comme {{HTMLElement("iframe")}} peuvent avoir leurs propres feuilles de styles mais ils n'héritent pas de celles du document parent.

## Éléments remplacés

Les éléments remplacés caractéristiques sont :

- {{HTMLElement("img")}},
- {{HTMLElement("object")}},
- {{HTMLElement("video")}},
- {{HTMLElement("iframe")}}
- les éléments {{HTMLElement("input")}} de type image

Par ailleurs, certains éléments comme :

- {{HTMLElement("option")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("object")}}
- {{HTMLElement("applet")}}

sont des éléments remplacés dans certains cas spécifiques. De même un élément {{HTMLElement("input")}} peut être un élément remplacé dans certains cas (lorsqu'il est de type `"image"` notamment).

Les objets insérés grâce aux propriétés CSS {{cssxref("content")}} sont des _éléments remplacés anonymes_ (on les qualifie d'anonymes car ils n'existent pas dans la structure du HTML).

## Utiliser CSS avec les éléments remplacés

Les éléments remplacés sont manipulés de façon spécifique par le moteur CSS, notamment pour le calcul des marges extérieures et certaines valeurs `auto`.

On notera que certains éléments remplacés ont des dimensions intrinsèques ou une ligne de base définie, qui sont utilisées par des propriétés CSS comme {{cssxref("vertical-align")}}.

### Contrôler la position des objets au sein de la boîte de contenu

Certaines propriétés CSS permettent d'indiquer la façon dont l'objet contenu dans l'élément remplacé doit occuper la boîte de l'élément. Ces propriétés sont définies dans les spécifications CSS3 Images et CSS4 Images&nbsp;:

- {{cssxref("object-fit")}}
  - : Indique la façon dont le contenu de l'élément remplacé doit s'inscrire dans la boîte de l'élément et comment il doit être redimensionné si besoin.
- {{cssxref("object-position")}}
  - : Indique l'alignement du contenu de l'élément remplacé dans la boîte de l'élément.

## Voir aussi

- [Spécification HTML sur les éléments remplacés](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements)
