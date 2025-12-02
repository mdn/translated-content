---
title: Mode de disposition
slug: Glossary/Layout_mode
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **mode de disposition CSS** (_layout mode_), parfois raccourci en «&nbsp;disposition&nbsp;» est un algorithme qui détermine la position et la taille des boîtes des éléments en fonction des interactions avec leurs voisins et leurs ancêtres.

Il existe plusieurs modes de disposition&nbsp;:

- **[Disposition en flux ou flux normal](/fr/docs/Web/CSS/Guides/Display/Flow_layout)**
  - : Tous les éléments font partie du flux normal jusqu'à ce qu'une propriété les en sorte. Le flux normal inclut&nbsp;:
    - **[Disposition en bloc](/fr/docs/Web/CSS/Guides/Display/Block_and_inline_layout)**
      - : Conçue pour organiser des boîtes comme les paragraphes.
    - **[Disposition en ligne](/fr/docs/Web/CSS/CSS_inline_layout)**
      - : Conçue pour organiser des éléments en ligne comme le texte.

- **[Disposition en tableau](/fr/docs/Web/CSS/Guides/Table)**
  - : Conçue pour organiser des tableaux.
- **Disposition flottante**
  - : Conçue pour positionner un élément à gauche ou à droite, le reste du contenu du flux normal s'enroulant autour.
- **[Disposition positionnée](/fr/docs/Web/CSS/Guides/Positioned_layout)**
  - : Conçue pour positionner des éléments sans grande interaction avec les autres.
- **[Disposition en colonnes multiples](/fr/docs/Web/CSS/Guides/Multicol_layout)**
  - : Conçue pour organiser le contenu en colonnes, comme dans un journal.
- **[Disposition avec des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout)**
  - : Conçue pour organiser des pages complexes pouvant être redimensionnées facilement.
- **[Disposition en grille](/fr/docs/Web/CSS/Guides/Grid_layout)**
  - : Conçue pour organiser les éléments selon une grille fixe.

> [!NOTE]
> [Les propriétés CSS](/fr/docs/Web/CSS/Reference) ne s'appliquent toutes à tous les _modes de disposition_. La plupart des propriétés n'ont d'effet que pour un ou deux de ces modes et seront sans effet pour un élément qui s'inscrit dans un autre mode de disposition.

## Voir aussi

- [Modèle de formatage visuel](/fr/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- Le module [d'affichage CSS](/fr/docs/Web/CSS/Guides/Display)
