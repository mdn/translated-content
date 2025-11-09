---
title: Axe transversal
slug: Glossary/Cross_Axis
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

L'**axe transversal** d'une {{Glossary("flexbox")}} traverse l'{{Glossary("Main Axis", "axe principal")}}, donc si la {{CSSxRef("flex-direction")}} et l'axe principal sont `row` (_ligne_) ou `row-reverse` l'axe transversal est en colonne.

![The cross axis runs down the column](basics3.png)

Si l'axe principal est `column` ou `column-reverse`, l'axe transversal est donc en ligne.

![The cross axis runs along the row.](basics4.png)

L'alignement des articles sur l'axe transversal est réalisé avec la propriété `align-items` sur le conteneur flexible ou la propriété `align-self` sur les éléments individuels. Dans le cas d'un conteneur flexible multi-lignes, avec un espace supplémentaire sur l'axe transversal, vous pouvez utiliser `align-content` pour contrôler l'espacement des lignes.

## Voir aussi

### Références de la propriété

- {{CSSxRef("align-content")}}
- {{CSSxRef("align-items")}}
- {{CSSxRef("align-self")}}
- {{CSSxRef("flex-wrap")}}
- {{CSSxRef("flex-direction")}}
- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-flow")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
- {{CSSxRef("justify-content")}}
- {{CSSxRef("order")}}

### Pour aller plus loin

Guides sur le flexbox CSS&nbsp;:

- [Concepts de base du flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Alignement des éléments dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Gestion de l'enroulement des éléments flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Flex")}}
  - {{Glossary("Flex Container", "Conteneur flexible")}}
  - {{Glossary("Flex Item", "Élément flexible")}}
  - {{Glossary("Grid")}}
