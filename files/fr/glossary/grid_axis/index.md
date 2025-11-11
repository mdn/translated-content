---
title: Axe de grille
slug: Glossary/Grid_Axis
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

La mise en page en grille CSS (<i lang="en">CSS grid layout</i> en anglais) est une méthode de disposition bidimensionnelle permettant de disposer le contenu en _lignes_ et en _colonnes_. Ainsi, dans toute grille, nous avons deux axes. L'_axe de bloc_ ou axe des colonnes, et l'_axe en ligne_ ou axe des lignes.

C'est le long de ces axes que les éléments peuvent être alignés et justifiés à l'aide des propriétés définies dans la [spécification Box Alignment](/fr/docs/Web/CSS/Guides/Box_alignment).

L'_axe en ligne_ (aussi appelé axe des lignes ou axe principal) correspond à la direction dans laquelle le texte s'écoule normalement. L'_axe de bloc_ (aussi appelé axe des colonnes ou axe secondaire) est l'axe utilisé pour disposer les blocs de texte. La direction physique de ces axes peut changer selon le [mode d'écriture](/fr/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes) du document.

Par exemple, si vous écrivez de gauche à droite et de haut en bas (comme dans la prose française ou anglaise), les caractères individuels sont placés le long de l'axe en ligne, qui va de la gauche vers la droite.

![Diagramme montrant l'axe en ligne dans une grille CSS.](7_inline_axis.png)

Et, si le texte contient plusieurs lignes, celles-ci sont placées le long de l'axe de bloc, qui va du haut vers le bas.

![Diagramme montrant l'axe de bloc dans une grille CSS.](7_block_axis.png)

## Voir aussi

- [Les concepts de base des grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [L'alignement des boîtes avec une grille CSS](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [Grilles, valeurs logiques et modes d'écriture](/fr/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
