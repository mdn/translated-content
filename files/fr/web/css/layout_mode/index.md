---
title: Mode de mise en page
slug: Web/CSS/Layout_mode
---

{{CSSRef}}

Un **mode de disposition CSS** (_layout mode_), parfois raccourci en « disposition » est un algorithme qui détermine la position et la taille des boîtes des éléments en fonction des interactions avec leurs voisins et leurs ancêtres. Il existe plusieurs modes de disposition :

- _[Le flux normal (](/fr/docs/Web/CSS/CSS_flow_layout)_[normal flow](/fr/docs/Web/CSS/CSS_flow_layout)_[)](/fr/docs/Web/CSS/CSS_flow_layout)_ : tous les éléments font partie du flux normal par défaut. Le flux normal inclut la disposition en bloc qui permet d'organiser les boîtes comme les paragraphes et la disposition en ligne qui permet d'organiser les éléments en ligne comme le texte.
- [*La disposition en tableau (*Table layout*)*](/fr/docs/Web/CSS/CSS_table) : cette disposition est conçue pour organiser des tableaux.
- *La disposition flottante (*Float layout*)* : cette disposition est conçue pour positionner des éléments à gauche ou à droite du reste du contenu en flux normal et qui évolue « autour » de ces éléments.
- [*La disposition positionnée (*Positioned layout*)*](/fr/docs/Web/CSS/CSS_positioned_layout) : cette disposition est conçue afin de positionner des éléments sans interaction avec les autres.
- [*La disposition en colonnes (*Multi-column layout*)*](/fr/docs/Web/CSS/CSS_multicol_layout) : cette disposition permet d'organiser le contenu en colonnes, comme on peut le voir dans les journaux.
- [*La disposition avec les boîtes flexibles (flexbox) (*flexible box layout*)*](/fr/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) : cette disposition permet d'organiser des pages complexes qui peuvent être redimensionnées facilement.
- [*La disposition en grille (*Grid layout*)*](/fr/docs/Web/CSS/CSS_grid_layout) : cette disposition permet d'organiser les éléments relativement à une grille fixe.

> **Note :** [Les propriétés CSS](/fr/docs/Web/CSS/Reference) ne s'appliquent toutes à tous les modes de disposition. La plupart des propriétés n'ont d'effet que pour un ou deux de ces modes et seront sans effet pour un élément qui s'inscrit dans un autre mode de disposition.
