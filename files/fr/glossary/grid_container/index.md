---
title: Conteneur de grille
slug: Glossary/Grid_Container
tags:
  - CSS
  - Glossaire
  - Grille
translation_of: Glossary/Grid_Container
original_slug: Glossaire/grid_container
---
Utiliser la valeur `grid` ou `inline-grid` sur un élément le transforme en un conteneur de grille utilisant [CSS Grid Layout](/fr/docs/Web/CSS/CSS_Grid_Layout), et les enfants directs de celui-ci deviennent un élément de cette grille.

Quand un élément devient un conteneur de grille il établit un **contexte** **de** **formatage** **de grille** (grid formatting context). Les enfants directs peuvent dorénavent se placer sur une grille explicite définie utilisant {{cssxref("grid-template-columns")}} et {{cssxref("grid-template-rows")}}, ou sur une grille implicite créée quand un élément est placé en dehors de la grille explicite.



## En apprendre plus

### Référence de la propriété

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid")}}
- {{cssxref("grid-template")}}

### En lire plus

- Guide des grilles CSS _[Basic concepts of grid layout](/fr/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
