---
title: Axe transversal
slug: Glossary/Cross_Axis
tags:
  - CSS
  - Glossaire
  - axes
translation_of: Glossary/Cross_Axis
original_slug: Glossaire/Axe_transversal
---
L'axe transversal d'une {{glossary("flexbox")}} traverse l'{{glossary("Main Axis","axe principal")}}, donc si la {{glossary("flex-direction")}} et l'axe principal sont `row` (_ligne_) ou `row-reverse` l'axe transversal est en colonne.

![The cross axis runs down the column](basics3.png)

Si l'axe principal est `column` ou `column-reverse`, l'axe transversal est donc en ligne.

![The cross axis runs along the row.](basics4.png)

L'alignement des articles sur l'axe transversal est réalisé avec la propriété `align-items` sur le conteneur flexible ou la propriété `align-self` sur les éléments individuels. Dans le cas d'un conteneur flexible multi-lignes, avec un espace supplémentaire sur l'axe transversal, vous pouvez utiliser `align-content` pour contrôler l'espacement des lignes.

## En apprendre plus

### Références de la propriété

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex")}}

### En lire plus

- Guide Flexbox CSS : _[Les concepts de base pour flexbox](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Concepts_de_base_flexbox)_
- Guide Flexbox CSS : _[Aligner des éléments dans un conteneur flexible](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Aligner_des_%C3%A9l%C3%A9ments_dans_un_conteneur_flexible)_
- Guide Flexbox CSS : _[Maîtriser l'enveloppe des éléments flexibles](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Ma%C3%AEtriser_passage_%C3%A0_la_ligne_des_%C3%A9l%C3%A9ments_flexibles)_
