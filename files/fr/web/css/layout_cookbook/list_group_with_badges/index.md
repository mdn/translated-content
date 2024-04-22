---
title: Liste de groupes avec indicateurs
slug: Web/CSS/Layout_cookbook/List_group_with_badges
---

{{CSSRef}}

Dans cet article, nous verrons comment créer une liste de groupes dont chaque élément possède un compteur sous la forme d'un indicateur (_badge_).

![A list of items with a badge indicating a count displayed to the right of the text.](list-group-badges.png)

## Spécifications sommaires

Les éléments de la liste doivent être affichés avec les indicateurs alignés à droite, quel que soit le volume de contenu pour un élément. L'indicateur doit être centré verticalement s'il y a plus d'une ligne de contenu.

## Exemple appliqué

{{EmbedGHLiveSample("css-examples/css-cookbook/list-group-badges.html", '100%', 720)}}

> **Note :** [Télécharger l'exemple](https://github.com/mdn/css-examples/blob/master/css-cookbook/list-group-badges--download.html).

## Choix effectués

Les boîtes flexibles sont un outil plutôt pratique pour constituer ce motif et permettent d'adapter simplement la disposition.

Pour s'assurer que le texte et l'indicateur soient bien alignés, on utilise la propriété `justify-content` avec la valeur `space-between`. Ainsi, l'espace supplémentaire est placé entre les éléments. Vous pouvez retirer cette propriété dans l'exemple ci-avant pour voir le badge se déplacer à la fin du texte.

Pour aligner le contenu horizontalement, on utilise la propriété `align-items` afin d'aligner le texte et l'indicateur sur l'axe secondaire. Si on veut que l'indicateur soit aligné en haut du contenu, on pourra utiliser `align-items: flex-start` à la place.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Alignement des boîtes avec les boîtes flexibles](/fr/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox)
- [Aligner des objets dans un conteneur flexible](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
