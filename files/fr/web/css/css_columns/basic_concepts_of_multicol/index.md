---
title: Concepts de base pour la disposition multi-colonnes
slug: Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol
tags:
  - CSS
  - Guide
translation_of: Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol
original_slug: Web/CSS/CSS_Columns/Concepts_base_multi-colonnes
---
{{CSSRef}}

La disposition sur plusieurs colonnes (« _Multiple-column Layout_ » ou « _multicol_ » en anglais) est un module de spécification pour organiser du contenu sur un ensemble de colonnes, à la façon des colonnes dans un journal imprimé. Dans ce guide, nous verrons comment fonctionne cette spécification et quelques cas d'exemples.

## Concepts et terminologie

La disposition multi-colonnes se distinguent des autres dispositions CSS car elle fragmente le contenu, y compris les éléments descendants, en colonnes. Cela se produira de façon analogue en fragmentant sur des pages avec le module de spécification [CSS Paged Media](/fr/docs/Web/CSS/CSS_Pages).

Les propriétés définies dans cette spécification sont :

- {{cssxref("column-width")}}
- {{cssxref("column-count")}}
- {{cssxref("columns")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("column-rule")}}
- {{cssxref("column-span")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}

En ajoutant `column-count` ou `column-width` à un élément, on le transforme en conteneur multi-colonnes. Les colonnes sont des boîtes anonymes et sont décrites comme des « boîtes de colonne » dans la spécification.

## Definir des colonnes

Afin de créer un conteneur multi-colonnes, il est nécessaire d'utiliser au moins une propriété `column-*` (`column-count` ou `column-width`).

### La propriété `column-count`

La propriété `column-count` définit le nombre de colonnes sur lesquelles on veut afficher le contenu. Le navigateur affectera l'espace nécessaire à chaque boîte de colonne afin d'en créer le nombre indiqué.

Dans l'exemple qui suit, on utilise la propriété `column-count` afin de créer trois colonnes au sein de l'élément `.container`. Le contenu, y compris l'élément fils de `.container` est alors divisé en trois colonnes.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count.html", '100%', 550)}}

Dans l'exemple qui précède, le contenu est intégré dans des paragraphes avec une mise en forme par défaut. Aussi, il y a une marge au dessus de chaque paragraphe. On peut voir comment cette marge décale la première ligne de texte vers le bas. Cela se produit car un conteneur multi-colonnes crée un nouveau contexte de formatage de bloc, ce qui signifie que les marges des éléments fils ne [fusionnent](/fr/docs/Web/CSS/Modèle_de_boîte_CSS/Fusion_des_marges) pas avec les marges du conteneur.

### La propriété `column-width`

La propriété `column-width` est utilisé afin de définir la largeur optimale pour chaque boîte de colonne. Si on déclare une valeur pour `column-width`, le navigateur calculera combien de colonnes de cette taille peuvent être intégrées puis répartira l'espace supplémentaire équitablement entre les colonnes. Aussi mieux vaut-il voir `column-width` comme une largeur minimale plutôt que comme une largeur exacte, l'espace restant étant rajouté ensuite.

Il existe un seul cas où la boîte de colonne peut être plus petite que `column-width` : lorsqu'il n'y a qu'une seule colonne et que l'espace disponible est inférieur à `column-width`.

Dans l'exemple qui suit, on utilise la propriété `column-width` avec une valeur de 200px et on obtient donc autant de colonnes de 200 pixels que possible avec l'espace restant partagé équitablement entre les différentes colonnes.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-width.html", '100%', 550)}}

### Utiliser `column-count` et `column-width`

Si on définit les deux propriétés pour un conteneur multi-colonnes, `column-count` agira comme un maximum pour le nombre de colonnes. Le comportement décrit avant pour `column-width` aura bien lieu, jusqu'à ce que le nombre de colonnes décrit par `column-count` soit atteint. Ensuite, aucune autre colonne ne sera ajoutée et l'espace restant sera réparti entre les colonnes existantes (et ce même si l'espace restant permettrait de rajouter une ou plusieurs colonnes de largeur `column-width`).

Lorsqu'on utilise les deux propriétés ensemble, on peut obtenir un nombre de colonnes réel inférieur à la valeur fournie avec `column-count`.

Dans l'exemple suivant, on utilise `column-width` avec une valeur de 200px et `column-count` avec une valeur de 2. S'il y a de l'espace pour plus de deux colonnes, on aura uniquement deux colonnes. S'il n'y a pas assez d'espace pour deux colonnes de 200 pixels, il n'y en aura qu'une.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count-width.html", '100%', 550)}}

### La propriété raccourcie `columns`

La [propriété raccourcie](/fr/docs/Web/CSS/Propriétés_raccourcies) `columns` peut être utilisée afin de définir à la fois `column-count` et `column-width`. Si on utilise une unité de longueur, la valeur sera utilisée pour `column-width`, si on utilise un entier, la valeur sera utilisée pour `column-count`. Les deux peuvent être définies simultanément en étant séparées d'un espace.

Ce fragment de code CSS donnera donc le même résultat que pour le premier exemple où `column-count` vaut 3.

    .container {
      columns: 3;
    }

Ce fragment de code CSS donnera le même résultat que pour le deuxième exemple où `column-width` vaut `200px`.

    .container {
      columns: 200px;
    }

Enfin, ce fragment de code CSS donnera le même résultat que le troisième exemple où les deux propriétés `column-count` et `column-width` sont définies.

    .container {
      columns: 2 200px;
    }

## Prochaines étapes

Dans ce guide, nous avons vu des cas d'utilisation simples avec une disposition multi-colonnes. Dans le prochain article, nous verrons [comment mettre en forme chacune des colonnes](/fr/docs/Web/CSS/CSS_Columns/Styling_Columns).
