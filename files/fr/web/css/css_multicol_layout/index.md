---
title: Colonnes CSS
slug: Web/CSS/CSS_multicol_layout
---

{{CSSRef}}

**Les colonnes CSS** (_CSS Multi-column Layout_ en anglais) forment un module CSS qui définit le comportement d'une disposition en colonnes, qui permet de décrire comment le contenu doit être réparti entre les colonnes et qui détaille comment sont gérées les espaces et les règles entre les colonnes.

## Exemple simple

Dans l'exemple qui suit, on applique la propriété {{cssxref("column-count")}} sur l'élément qui possède la classe `container`. La valeur de la propriété `column-count` est `3`, et le contenu est donc arrangé entre trois colonnes de tailles égales.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count.html", '100%', 550)}}

## Liens avec le module de spécification CSS Fragmentation

La disposition en colonnes est fortement liée aux [média paginés](/fr/docs/Web/CSS/CSS_paged_media) pour lesquels chaque colonne devient un fragment (de la même façon qu'une page imprimée devient un fragment d'un document). Aussi, les propriétés désormais définies dans le module de spécification [CSS Fragmentation](/fr/docs/Web/CSS/CSS_fragmentation) sont nécessaires afin de contrôler la façon dont le contenu est scindé entre les colonnes.

## Référence

### Propriétés relatives à la disposition en colonnes

- {{cssxref("column-count")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}
- {{cssxref("column-rule")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("column-span")}}
- {{cssxref("column-width")}}
- {{cssxref("columns")}}

### Propriétés relatives à la fragmentation

- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}
- {{cssxref("orphans")}}
- {{cssxref("widows")}}

## Guides

- [Concepts de base relatifs à la disposition en colonnes](/fr/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
  - : Un aperçu du module de spécification CSS pour la disposition avec plusieurs colonnes.
- [Mettre en forme les colonnes](/fr/docs/Web/CSS/CSS_multicol_layout/Styling_columns)
  - : Comment utiliser les règles liées aux colonnes et gérer l'espace entre les colonnes.
- [Équilibrer le remplissement des colonnes](/fr/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns)
  - : Comment répartir un élément sur plusieurs colonnes et comment contrôler la façon dont les colonnes sont remplies.
- [Gérer le dépassement](/fr/docs/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout)
  - : Comprendre ce qui se produit quand un élément dépasse de la colonne à laquelle il appartient et ce qui se produit lorsqu'il y a trop de contenu pour un conteneur en colonnes.
- [Gérer la fragmentation du contenu en multi-colonnes](/fr/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout)
  - : Une introduction au module de spécification CSS Fragmentation et à la façon dont le contenu est coupé entre les colonnes.

## Spécifications

{{Specifications}}

## Voir aussi

Les autres modules liées aux dispositions possibles en CSS :

- [Les boîtes flexibles (_flexbox_)](/fr/docs/Web/CSS/CSS_flexible_box_layout)
- [Les grilles CSS (_CSS Grid_)](/fr/docs/Web/CSS/CSS_grid_layout)
