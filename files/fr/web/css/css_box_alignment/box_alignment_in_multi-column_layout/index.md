---
title: L'alignement des boîtes avec une disposition en colonnes
slug: Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Multi-column_Layout
tags:
  - CSS
  - Guide
translation_of: Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Multi-column_Layout
original_slug: Web/CSS/CSS_Box_Alignment/Alignement_boîtes_disposition_colonnes
---
{{CSSRef}}

Le module de spécification _[Box Alignment](/fr/docs/Web/CSS/CSS_Box_Alignment)_ détaille le fonctionnement de l'alignement selon les différentes méthodes de disposition. Dans cet article, nous verrons comment fonctionne l'alignement des boîtes avec [une disposition multi-colonnes](/fr/docs/Web/CSS/Colonnes_CSS). Cette page détaille les aspects spécifiques relatifs à l'alignement et au module _Multi-Column Layout_. Pour une description générale des fonctionnalités communes pour les différentes dispositions, voir [la page principale sur cette spécification](/fr/docs/Web/CSS/CSS_Box_Alignment).

Pour une disposition en colonne, le conteneur d'alignement est le conteneur de colonnes. Le sujet d'alignement correspond à la boîte de colonne. Les propriétés qui s'appliquent pour ce type de disposition sont détaillées ci-après.

> **Note :** Le module de spécification de la disposition en colonnes (_Multi-Column Layout_) précède celui pour l'alignement des boîtes. Aussi, certaines des propriétés décrites ici, bien que spécifiées afin de fonctionner pour ce mode de disposition, peuvent ne pas encore être prises en charge par les navigateurs.

## `align-content` et `justify-content`

La propriété {{cssxref("align-content")}} s'applique à l'axe de bloc et la propriété {{cssxref("justify-content")}} s'applique à l'axe en ligne. Tout espace ajouté entre les colonnes selon la distribution choisie sera ajouté entre les colonnes. Les gouttières pourront donc être plus larges que celles indiquées par la propriété {{cssxref("column-gap")}}.

Utiliser `justify-content` avec une valeur différente de `normal` ou `stretch` entraînera un dimensionnement des colonnes avec la valeur de {{cssxref("column-width")}}, définie sur le conteneur multi-colonnes. L'espace restant sera alors réparti selon la valeur de `justify-content`.

## `column-gap`

La propriété {{cssxref("column-gap")}} a été définie dans des versions antérieures du module de spécification pour la disposition multi-colonne. Son rôle a été généralisé avec les autres propriétés d'espacement dans le module d'alignement des boîtes.

On notera que, si les autres modes de disposition utilisent une valeur initiale de `0` pour `column-gap`, la disposition multi-colonne utilise une valeur initiale de `1em`.

## Référence

### Propriétés CSS

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("column-gap")}}

### Termes du glossaire

- [Sujet d'alignement](/fr/docs/Glossary/Alignment_Subject)
- [Conteneur d'alignement](/fr/docs/Glossary/Alignment_Container)
- [Alignement de recours](/fr/docs/Glossary/Fallback_Alignment)
