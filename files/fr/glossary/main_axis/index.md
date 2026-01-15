---
title: Axe principal
slug: Glossary/Main_Axis
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

L'axe principal d'une {{Glossary("flexbox")}} est déterminé par la direction définie dans la propriété CSS {{CSSxRef("flex-direction")}}. Il y a 4 valeurs possibles pour `flex-direction`. Ce sont&nbsp;:

- `row` (_ligne_)
- `row-reverse`
- `column` (_colonne_)
- `column-reverse`

Si vous choisissez `row` ou `row-reverse` votre axe principal passera alors le long de la ligne dans le sens de la direction définie.

![Dans cette image, la propriété flex-direction est définie sur row, ce qui forme l'axe principal](basics1.png)

Choisissez `column` ou `column-reverse` et votre axe principal parcourt du début au pied de la page dans la direction du bloc.

![Trois éléments flexibles occupent toute la largeur du conteneur, affichés les uns sous les autres dans l'ordre du code. Flex-direction est défini sur column. L'axe principal est vertical, c'est-à-dire du haut vers le bas](basics2.png)

Sur l'axe principal, vous pouvez contrôler le dimensionnement des éléments flexibles en ajoutant tout espace disponible aux éléments eux-mêmes, par le biais des propriétés `flex` sur les éléments. Ou, vous pouvez contrôler l'espace entre et autour des éléments en utilisant la propriété `justify-content`.

## Voir aussi

### Références de la propriété

- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-direction")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
- {{CSSxRef("justify-content")}}
- {{CSSxRef("flex")}}

### En lire plus

- Guide Flexbox CSS&nbsp;:
  - [Les concepts de base pour flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
  - [Aligner des éléments dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
  - [Contrôler les proportions des boîtes flexibles le long de l'axe principal](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
