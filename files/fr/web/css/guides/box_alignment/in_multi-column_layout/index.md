---
title: L'alignement des boîtes avec une disposition en multi-colonnes
short-title: En disposition de multi-colonnes
slug: Web/CSS/Guides/Box_alignment/In_multi-column_layout
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

Le module [d'alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment) détaille le fonctionnement de l'alignement selon les différentes méthodes de disposition. Dans cet article, nous voyons comment fonctionne l'alignement des boîtes avec [une disposition multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout). Cette page détaille les aspects spécifiques relatifs à l'alignement et au module <i lang="en">Multi-Column Layout</i>. Pour une description générale des fonctionnalités communes pour les différentes dispositions, voir [la page principale sur cette spécification](/fr/docs/Web/CSS/Guides/Box_alignment).

Dans [la disposition multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts), le {{Glossary("alignment container", "conteneur d'alignement")}} est la boîte de contenu du conteneur multi-colonnes. Le {{Glossary("alignment subject", "sujet d'alignement")}} est la boîte de colonne. Les propriétés qui s'appliquent aux dispositions multi-colonnes sont détaillées ci-dessous.

## `align-content` et `justify-content`

La propriété {{CSSxRef("align-content")}} s'applique à l'axe de bloc et {{CSSxRef("justify-content")}} à l'axe en ligne. Tout espace ajouté entre les colonnes selon la distribution choisie est ajouté entre les colonnes, ce qui peut rendre les gouttières plus larges que celles définies par la propriété {{CSSxRef("column-gap")}} (ou le raccourci {{CSSxRef("gap")}}).

L'utilisation d'une valeur de `justify-content` autre que `normal` ou `stretch` entraîne l'affichage des boîtes de colonne à la {{CSSxRef("column-width")}} définie sur le conteneur multi-colonnes, et l'espace restant est réparti selon la valeur de `justify-content`.

## `column-gap`

La propriété {{CSSxRef("column-gap")}} a été initialement définie dans la spécification de la disposition multi-colonnes, puis unifiée avec les propriétés d'espacement pour d'autres méthodes de disposition dans le module d'alignement des boîtes. Alors que d'autres méthodes de disposition traitent la valeur initiale de `column-gap` comme `0`, la disposition multi-colonnes la traite comme `1em` — vous voulez généralement un espace entre les colonnes.

## Voir aussi

- Le module [d'alignement de boîte CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
- [Aperçu de l'alignement de boîte](/fr/docs/Web/CSS/Guides/Box_alignment/Overview)
- [Alignement de boîte dans des boîtes flexibles](/fr/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Alignement de boîte dans une disposition en grille](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [Alignement de boîte pour les dispositions en bloc, positionnées en absolu et les tableaux](/fr/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)
