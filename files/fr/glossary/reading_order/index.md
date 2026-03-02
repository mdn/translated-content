---
title: Ordre de lecture
slug: Glossary/Reading_order
---

L'**ordre de lecture** désigne l'ordre dans lequel le contenu est parcouru, par exemple lorsqu'il est lu par une {{Glossary("screen reader", "synthèse vocale")}}, ou navigué à l'aide de méthodes de navigation séquentielle comme le passage d'un lien ou d'un bouton à l'autre avec la touche de tabulation. Par défaut, l'ordre de lecture d'une page web est défini par l'ordre des éléments dans le code source du document.

En général, l'ordre du code source doit exprimer un ordre de lecture logique pour le contenu, et cela doit aussi se refléter dans l'ordre visuel de la présentation. Cependant, il arrive que l'ordre visuel ne corresponde plus à l'ordre du code source. Par exemple, vous pouvez appliquer différentes présentations à un document selon des [requêtes médias](/fr/docs/Web/CSS/Guides/Media_queries/Using) pour s'adapter à divers appareils ou besoins utilisateur·ice, ou ajuster l'ordre de tabulation via [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex).

Ces modifications peuvent entraîner des problèmes d'accessibilité. Par exemple, lorsqu'un·e utilisateur·ice voyant·e d'une synthèse vocale navigue dans le contenu avec la touche de tabulation, et que l'ordre de la synthèse vocale diffère de l'ordre visuel, cela nuit à l'expérience utilisateur·ice et peut rendre le contenu inaccessible. L'ordre de lecture doit être cohérent pour tous·tes les utilisateur·ice·s, quel que soit leur mode d'accès au contenu.

## Modifier l'ordre de lecture en CSS

L'ordre de lecture d'un élément peut être modifié via la propriété {{CSSxRef("reading-flow")}}, et ajusté plus finement en définissant des valeurs {{CSSxRef("reading-order")}} sur les éléments enfants.

Les définitions suivantes sont importantes pour comprendre l'ordre de lecture modifié&nbsp;:

- Conteneur de flux de lecture
  - : Élément dont l'ordre de lecture est modifié par les valeurs de ses propriétés {{CSSxRef("reading-flow")}} et {{CSSxRef("reading-order")}}.
- Flux de lecture
  - : Ordre de lecture modifié des éléments enfants d'un conteneur de flux de lecture.

## Voir aussi

- La propriété CSS {{CSSxRef("reading-flow")}}
- La propriété CSS {{CSSxRef("reading-order")}}
- La propriété CSS {{CSSxRef("flex-direction")}}
- La propriété CSS {{CSSxRef("order")}}
- L'attribut universel HTML [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex)
