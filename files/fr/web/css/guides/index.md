---
title: Guides CSS
short-title: Guides
slug: Web/CSS/Guides
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Il existe plusieurs méthodes que vous pouvez utiliser pour mettre en page vos pages Web et vos applications. Le MDN contient plusieurs guides détaillés sur les différentes méthodes, et cette page en présente un aperçu.

## Disposition normale, en bloc et en ligne

Si vous n'utilisez pas de mise en page flexible ou en grille, votre contenu est alors mis en page selon une disposition normale, ou une mise en page en blocs et en ligne. Ces guides vous aideront à comprendre le fonctionnement de cette méthode de mise en page.

- [Disposition de bloc et en ligne avec le flux normal](/fr/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
  - : Une introduction à la disposition normale.
- [Être ou ne pas être dans le flux](/fr/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)
  - : Comment retirer un élément de la disposition et quel impact cela a sur la mise en page de votre document.
- [Explications quant aux contextes de formatage](/fr/docs/Web/CSS/Guides/Display/Formatting_contexts)
  - : Introduction à la création d'un nouveau contexte de formatage.
- [Disposition de flux et modes d'écriture](/fr/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
  - : Comment fonctionne la disposition si vous utilisez un mode d'écriture différent, tel que le texte vertical.
- [La disposition en flux et le dépassement](/fr/docs/Web/CSS/Guides/Display/Flow_layout_and_overflow)
  - : Comprendre et gérer le débordement.
- [Introduction au modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
  - : Comprendre le modèle de boîte est un élément fondamental du CSS&nbsp;; ce guide explique son fonctionnement.
- [Fusion des marges](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - : Découvrez pourquoi vous obtenez parfois une marge inférieure à celle attendue, en raison de l'effondrement des marges dans le flux normal.
- [Comprendre z-index en CSS](/fr/docs/Web/CSS/Guides/Positioned_layout/Understanding_z-index)
  - : Le positionnement absolu, la flexbox et la grille permettent tous de manipuler la pile (position relative des éléments sur l'axe z) via la propriété `z-index`. Cet article explique comment la gérer.

## Disposition multi-colonnes

La mise en page multi-colonnes, souvent appelée «&nbsp;multi-colonnes&nbsp;», prend le contenu dans son flux normal et le divise en colonnes. Découvrez comment utiliser cette méthode de mise en page dans les guides suivants.

- [Concepts de base pour la disposition multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
  - : Présentation des fonctionnalités de base de multi-colonnes.
- [Mettre en forme les colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout/Styling_columns)
  - : Les possibilités de stylisation des colonnes sont limitées&nbsp;; ce guide explique ce que vous pouvez faire.
- [Répartir et équilibrer le contenu entre les colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout/Spanning_balancing_columns)
  - : Étendre des éléments sur plusieurs colonnes et équilibrer le contenu des colonnes.
- [Gestion du dépassement en multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout/Handling_overflow)
  - : Que se passe-t-il lorsque le contenu dépasse l'espace disponible dans les colonnes&nbsp;?
- [Gérer la rupture du contenu entre les colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout/Handling_content_breaks)
  - : Gérer les coupures de contenu lorsque celui-ci est divisé en colonnes.

## Boîtes flexibles

La disposition flexible en CSS, communément appelée «&nbsp;flexbox&nbsp;», est un modèle de disposition optimisé pour la conception d'interfaces utilisateur et la disposition d'éléments dans une dimension. Dans le modèle de disposition flexible, les enfants d'un conteneur flexible peuvent être disposés dans n'importe quelle direction et peuvent «&nbsp;s'adapter&nbsp;» à leur taille, soit en s'agrandissant pour remplir l'espace inutilisé, soit en rétrécissant pour éviter de déborder du conteneur parent.

- [Les concepts de base pour flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
  - : Présentation des fonctionnalités de Flexbox.
- [Les liens entre flexbox et les autres méthodes de disposition](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
  - : Relations entre Flexbox et les autres méthodes de mise en page, ainsi que les autres spécifications CSS.
- [Aligner des éléments dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
  - : Fonctionnement des propriétés d'alignement des boîtes avec Flexbox.
- [Ordonner les éléments flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
  - : Explication des différentes façons de modifier l'ordre et la direction des éléments, et présentation des problèmes potentiels liés à cette opération.
- [Contrôler les proportions des boîtes flexibles le long de l'axe principal](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
  - : Explication des propriétés `flex-grow`, `flex-shrink` et `flex-basis`.
- [Maîtriser le passage à la ligne des éléments flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
  - : Comment créer des conteneurs flexibles avec plusieurs lignes et contrôler l'affichage des éléments le long de ces lignes.
- [Cas d'utilisation classiques de flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)
  - : Modèles de conception courants qui sont des cas d'utilisation typiques de Flexbox.

## Disposition en grille

La disposition en grille introduit un système de grille bidimensionnelle dans CSS. Les grilles peuvent être utilisées pour mettre en page les zones principales d'une page ou les petits éléments de l'interface utilisateur.

- [Les concepts de base des grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
  - : Présentation des fonctionnalités de la mise en page en grille.
- [Le modèle de grille et les autres modèles de disposition](/fr/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
  - : Comment la grille s'articule avec d'autres méthodes telles que l'alignement, le dimensionnement et la flexbox.
- [Placer les éléments sur les lignes d'une grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
  - : Comment placer des éléments par lignes numérotées.
- [Définir des zones sur une grille](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
  - : Comment placer des éléments à l'aide de la syntaxe <i lang="en">grid-template</i>.
- [Utiliser des lignes nommées sur une grille](/fr/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
  - : Comment nommer les lignes et placer les éléments par nom de ligne plutôt que par numéro.
- [Le placement automatique sur une grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
  - : Comment gérer l'algorithme de placement automatique et comprendre comment le navigateur place les éléments.
- [L'alignement des boîtes avec les grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
  - : Comment aligner des éléments et répartir l'espace sur les deux axes dans la grille.
- [Les grilles CSS, les valeurs logiques et les modes d'écriture](/fr/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
  - : Comment utiliser des propriétés et des valeurs relatives au flux plutôt que physiques avec la grille.
- [Les grilles CSS et l'accessibilitéS](/fr/docs/Web/CSS/Guides/Grid_layout/Accessibility)
  - : Quelques considérations en matière d'accessibilité lors de l'utilisation de la mise en page en grille.
- [Construire des dispositions courantes avec des grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)
  - : Utilisation de la grille pour créer des mises en page courantes.
- [Sous-grille](/fr/docs/Web/CSS/Guides/Grid_layout/Subgrid)
  - : Explication de la valeur de la sous-grille, qui fait partie du niveau 2 de la grille.
- [Disposition de maçonnerie](/fr/docs/Web/CSS/Guides/Grid_layout/Masonry_layout)
  - : Explication de la fonctionnalité de disposition en maçonnerie dans le niveau 3 de la grille.

## Alignement

- [L'alignement des boîtes pour les dispositions&nbsp;: en bloc, absolue, en tableau](/fr/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)
  - : Les propriétés d'alignement sont spécifiées pour la mise en page en bloc et en ligne, bien qu'il n'y ait pas encore de prise en charge par les navigateurs.
- [L'alignement des boîtes avec Flexbox](/fr/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
  - : Les propriétés d'alignement sont apparues pour la première fois avec flexbox&nbsp;; ce guide explique leur fonctionnement.

- [L'alignement des boîtes avec une grille CSS](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
  - : Comment aligner des éléments dans une disposition en grille.
- [L'alignement des boîtes avec une disposition en colonnes](/fr/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
  - : Comment l'alignement fonctionnera dans une disposition en colonnes.
