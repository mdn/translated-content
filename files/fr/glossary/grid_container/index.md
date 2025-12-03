---
title: Conteneur de grille
slug: Glossary/Grid_Container
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Utiliser la valeur `grid` ou `inline-grid` sur un élément le transforme en un **conteneur de grille** utilisant les [grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout), et les enfants directs de celui-ci deviennent un élément de cette grille.

Quand un élément devient un conteneur de grille il établit un **contexte** **de** **formatage** **de grille** (grid formatting context). Les enfants directs peuvent dorénavent se placer sur une grille explicite définie utilisant {{CSSxRef("grid-template-columns")}} et {{CSSxRef("grid-template-rows")}}, ou sur une grille implicite créée quand un élément est placé en dehors de la grille explicite.

## Voir aussi

- Les pages des propriétés CSS concernées&nbsp;:
  - {{CSSxRef("grid-template-columns")}}
  - {{CSSxRef("grid-template-rows")}}
  - {{CSSxRef("grid-auto-columns")}}
  - {{CSSxRef("grid-auto-rows")}}
  - {{CSSxRef("grid")}}
  - {{CSSxRef("grid-template")}}
- [Concepts de base de la mise en page en grille](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
