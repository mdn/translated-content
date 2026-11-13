---
title: La fragmentation CSS
short-title: Fragmentation
slug: Web/CSS/Guides/Fragmentation
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le module de **fragmentation CSS** définit comment le contenu est affiché lorsqu'il est fragmenté et s'écoule sur plusieurs [pages](/fr/docs/Web/CSS/Guides/Paged_media), régions ou [colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout). Ce module définit des fonctionnalités pour la pagination, la rupture de taille et d'orientation des fragments, les veuves et les orphelins.

Ce module explique comment le contenu se divise entre les conteneurs de fragmentation et comment ces divisions peuvent être contrôlées par l'auteur·ice. Le terme générique pour la division du contenu entre les conteneurs est _fragmentation_. La fragmentation se produit lorsqu'une boîte en incise s'étend sur plusieurs lignes. Cela peut se produire lors de l'utilisation de fonctionnalités de mise en page telles que la [mise en page multi-colonnes CSS](/fr/docs/Web/CSS/Guides/Multicol_layout)&nbsp;: par exemple, lorsqu'un bloc s'étend sur plus d'une colonne à l'intérieur d'un conteneur de mise en page en colonnes, ou lorsqu'il s'étend sur un saut de page lors de l'impression. Chaque partie du rendu de l'élément est appelée un _fragment_.

Lorsqu'un contenu est physiquement imprimé ou affiché en aperçu avant impression, il y a des sauts de page. Dans ce type de média paginé, contrairement aux médias continus, le contenu du document peut être divisé entre une ou plusieurs pages, ou fragments. Pour éviter des ruptures maladroites, comme au milieu d'une ligne de texte ou avec un mot isolé sur sa propre page, les navigateurs peuvent déplacer le contenu qui tombe autrement sur le saut de page dans un processus appelé _pagination_.

## Référence

### Propriétés

- {{CSSxRef("box-decoration-break")}}
- {{CSSxRef("break-after")}}
- {{CSSxRef("break-before")}}
- {{CSSxRef("break-inside")}}
- {{CSSxRef("orphans")}}
- {{CSSxRef("widows")}}

### Termes du glossaire

- {{Glossary("Fragmentainer", "Conteneur de fragmentation")}}

## Guides

- [Gérer les ruptures de contenu dans une disposition multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout/Handling_content_breaks)
  - : Introduction à la spécification de la fragmentation et comment contrôler où le contenu des colonnes se divise.

## Concepts associés

- La propriété {{CSSxRef("overflow")}}
- Les propriétés {{CSSxRef("height")}}, {{CSSxRef("max-height")}} et {{CSSxRef("block-size")}}
- Les propriétés {{CSSxRef("width")}}, {{CSSxRef("max-width")}} et {{CSSxRef("inline-size")}}
- [Le contexte de formatage en bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context)

Le module de [média paginés CSS](/fr/docs/Web/CSS/Guides/Paged_media)

- {{CSSxRef("page")}}
- {{CSSxRef("@page")}}

Le module [d'affichage CSS](/fr/docs/Web/CSS/Guides/Display)

- Le terme de [boîte principale](/fr/docs/Web/CSS/Guides/Display/Visual_formatting_model#la_boîte_principale)
- Le guide du [contexte de formatage en bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context)

## Spécifications

{{Specifications}}

## Voir aussi

- Les descripteurs [`horizontal-viewport-segments`](/fr/docs/Web/CSS/Reference/At-rules/@media/horizontal-viewport-segments) et [`vertical-viewport-segments`](/fr/docs/Web/CSS/Reference/At-rules/@media/vertical-viewport-segments) de la règle `@media`
- [L'API Viewport Segments](/fr/docs/Web/API/Viewport_segments_API)
- Le module de [disposition multi-colonnes CSS](/fr/docs/Web/CSS/Guides/Multicol_layout)
