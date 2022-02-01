---
title: Axe principal
slug: Glossary/Main_Axis
tags:
  - CSS
  - Glossaire
  - axes
  - flexbox
translation_of: Glossary/Main_Axis
original_slug: Glossaire/Axe_principal
---
L'axe principal d'une {{glossary("flexbox")}} est déterminé par la direction définie dans la propriété {{cssxref("flex-direction")}}. Il y a 4 valeurs possibles pour `flex-direction`. Ce sont :

- `row` (_ligne_)
- `row-reverse`
- `column` (_colonne_)
- `column-reverse`

Si vous choisissez `row` ou `row-reverse` votre axe principal passera alors le long de la ligne dans le sens de la direction définie.

![In this image the flex-direction is row which forms the main axis](basics1.png)

Choisissez `column` ou `column-reverse` et votre axe principal parcourt du début au pied de la page dans la direction du bloc.

![](basics2.png)

Sur l'axe principal, vous pouvez contrôler le dimensionnement des éléments flexibles en ajoutant tout espace disponible aux éléments eux-mêmes, par le biais des propriétés `flex` sur les éléments. Ou, vous pouvez contrôler l'espace entre et autour des éléments en utilisant la propriété `justify-content`.

## En apprendre plus

### Références de la propriété

- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("justify-content")}}
- {{cssxref("flex")}}

### En lire plus

- Guide Flexbox CSS : _[Les concepts de base pour flexbox](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Concepts_de_base_flexbox)_
- Guide Flexbox CSS : _[Aligner des éléments dans un conteneur flexible](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Aligner_des_%C3%A9l%C3%A9ments_dans_un_conteneur_flexible)_
- Guide Flexbox CSS : _[Contrôler les proportions des boîtes flexibles le long de l'axe principal](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Contr%C3%B4ler_les_proportions_des_bo%C3%AEtes_flexibles_le_long_de_l_axe_principal)_
