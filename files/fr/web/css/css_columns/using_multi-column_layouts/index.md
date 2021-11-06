---
title: Utiliser une disposition multi-colonnes
slug: Web/CSS/CSS_Columns/Using_multi-column_layouts
tags:
  - Avancé
  - CSS
  - Guide
translation_of: Web/CSS/CSS_Columns/Using_multi-column_layouts
original_slug: Web/CSS/CSS_Columns/Utiliser_une_disposition_multi-colonnes
---
{{CSSRef}}

La **disposition multi-colonnes** étend _le mode de disposition en bloc_ et permet de définir simplement plusieurs colonnes de texte. Lorsqu'on lit un texte, si les lignes sont trop longues, il faudra trop de temps aux yeux pour revenir au début de la ligne et passer à la ligne suivante : on perdra alors la ligne sur laquelle on était. Ainsi, pour utiliser efficacement l'espace fourni par un grand écran, on préfèrera utiliser des colonnes de largeur fixe, disposée côte à côte, à la façon d'un journal.

## Utiliser les colonnes CSS

### Le nombre de colonnes et leur largeur

Deux propriétés CSS permettent de définir quand et comment les colonnes apparaissent : {{cssxref("column-count")}} et {{cssxref("column-width")}}.

On utilisera la propriété `column-count` pour définir le nombre de colonnes qu'on souhaite avoir.

#### Utilisation de `column-count`

##### CSS

```css
#col {
  column-count: 2;
}
```

##### HTML

```html
<div id="col">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.
  </p>
  <p>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat.
  </p>
  <p>
    Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur.
  </p>
  <p>
    Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>
```

##### Résultat

{{EmbedLiveSample('Utilisation_de_column-count','100%')}}

Si on utilise un navigateur qui permet d'utiliser ce module CSS, on aura un contenu affiché sur 2 colonnes.

La propriété `column-width` permet quant à elle de définir la largeur minimale d'une colonne. Si la propriété `column-count` n'est pas utilisée, le navigateur créera automatiquement autant de colonnes que le permet la largeur disponible.

#### Utilisation de `column-width`

##### CSS

```css
#wid {
  column-width: 100px;
}
```

##### HTML

```html
<div id="wid">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum
</div>
```

##### Résultat

{{EmbedLiveSample('Utilisation_de_column-width','100%')}}

En utilisant une disposition multi-colonnes, le contenu est automatiquement réparti entre les colonnes.

#### La propriété raccourcie `columns`

La plupart du temps, on souhaitera utiliser l'une de ces deux propriétés ({{cssxref("column-count")}} ou {{cssxref("column-width")}}). Comme les valeurs de ces deux propriétés ne se « chevauchent » pas, on pourra utiliser la propriété raccourcie {{cssxref("columns")}} qui synthétisent ces deux propriétés.

Ainsi, la déclaration `column-width:12em` pourra être remplacée de la façon suivante :

##### CSS

```css
#col_short {
  columns: 12em;
}
```

##### HTML

```html
<div id="col_short">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum
</div>
```

##### Résultat

{{EmbedLiveSample('La_propriété_raccourcie_columns','100%')}}

De même, on pourra remplacer la déclaration `column-count: 4` avec ce bloc :

```css
#columns_4{
  columns: 4;
}
```

Enfin, pour synthétiser les instructions `column-width:8em` et `column-count:12`, on pourra utiliser les instructions suivantes :

```css
#columns_12 {
  columns: 12 8em;
}
```

### Équilibrage de la hauteur

La spécification CSS pour ce module indique que la hauteur des colonnes doit être équilibrée. Autrement dit, le navigateur doit définir la hauteur des différentes colonnes afin que la hauteur du contenu dans chaque colonne soit environ égale.

Toutefois, dans certaines situations, on veut pouvoir définir la hauteur maximale des colonnes de façon explicite. Ainsi, lorsque la hauteur est contrainte, on peut utiliser les propriétés {{cssxref("height")}} ou {{cssxref("max-height")}} afin que chaque colonne mesure au plus la taille indiquée avant qu'une nouvelle colonne soit créée.

### L'espacement entre les colonnes

Entre chaque colonne, on aura un espace horizontal. La valeur recommandée (et souvent utilisée par défaut) est `1em`. Cette taille peut être ajustée si nécessaire en utilisant la propriété {{cssxref("column-gap")}} sur le bloc découpé en colonnes.

#### Utilisation de `column-gap`

##### CSS

```css
#column_gap {
  column-count: 5;
  column-gap: 2em;
}
```

##### HTML

```html
<div id="column_gap">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum
</div>
```

##### Résultat

{{EmbedLiveSample('Utilisation_de_column-gap','100%')}}

## Amélioration progressive

Les propriétés liées à la disposition multi-colonnes seront simplement ignorées par les navigateurs qui ne prennent pas en charge cette fonctionnalité. On peut donc simplement créer une disposition qui n'utilisera qu'une colonne pour les anciens navigateurs et qui tirera parti de cette fonctionnalité dans les navigateurs plus récents.

## Conclusion

Les colonnes CSS permettent aux développeurs web de mieux utiliser l'espace disponible à l'écran. Avec un peu d'imagination et en connaissant cette fonctionnalité d'équilibrage vertical automatique, on peut trouver de nombreux usages pour cette fonctionnalité.

## Voir aussi

- [https://weblogs.mozillazine.org/roc/a...18_for_we.html](https://weblogs.mozillazine.org/roc/archives/2005/03/gecko_18_for_we.html)
