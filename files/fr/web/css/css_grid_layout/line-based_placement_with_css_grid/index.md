---
title: Placer les éléments sur les lignes d'une grille CSS
slug: Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid
tags:
  - CSS
  - CSS Grids
  - Grilles CSS
  - Guides
  - Intermédiaire
translation_of: Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid
original_slug: Web/CSS/CSS_Grid_Layout/Placer_les_éléments_sur_les_lignes_d_une_grille_CSS
---
{{CSSRef}}

{{PreviousMenuNext("Web/CSS/CSS_Grid_Layout/Les_concepts_de_base", "Web/CSS/CSS_Grid_Layout/D%C3%A9finir_des_zones_sur_une_grille","Web/CSS/CSS_Grid_Layout")}}

Dans [l'article sur les concepts de base](/fr/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout), nous avons vu comment positionner des éléments en utilisant des numéros de lignes. Nous allons désormais étudier cette fonctionnalité de positionnement plus en détail.

Commencer par utiliser les lignes numérotées est plutôt logique car toutes les grilles possèdent des lignes numérotées. Ces lignes forment les colonnes et les lignes horizontales de la grille, elles sont numérotées à partir de 1. On notera aussi que la numérotation des lignes varie selon le mode d'écriture du document. Dans un document écrit de gauche à droite comme le français, la ligne numéro 1 est située à l'extrêmité gauche de la grille. Si l'écriture va de droite à gauche, la ligne numéro 1 sera celle qui est située le plus à droite. Nous explorerons ces notions sur les modes d'écriture dans [un prochain guide](/fr/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes).

## Un exemple simple

Dans cet exemple simple, on a une grille avec trois pistes pour les colonnes et trois pistes pour les lignes, on a donc 4 lignes pour chaque dimension.

Dans le conteneur, on a quatre éléments fils. Si aucune autre règle de placement n'est indiquée, ces éléments seront placés automatiquement et la grille remplira les quatre premières cellules. Si vous utilisez [l'outil de mise en évidence des grilles de Firefox](/fr/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts), vous pouvez voir les colonnes et les lignes horizontales formées par la grille.

![Our Grid highlighted in DevTools](3_hilighted_grid.png)

```css hidden
* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}
```

```html
<div class="wrapper">
  <div class="box1">Un</div>
  <div class="box2">Deux</div>
  <div class="box3">Trois</div>
  <div class="box4">Quatre</div>
</div>
```

{{EmbedLiveSample('Un_exemple_simple', '300', '330')}}

## Positionner les éléments d'une grille grâce au numéro de ligne

On peut placer les éléments d'une grille en utilisant les numéros de lignes qui définissent la zone allouée à l'élément. Si on souhaite que le premier élément commence tout à gauche et occupe une colonne, qu'il commence sur la première ligne et s'étale sur quatre lignes, on pourra utiliser les règles suivantes :

```css
.box1 {
   grid-column-start: 1;
   grid-column-end: 2;
   grid-row-start: 1;
   grid-row-end: 4;
}
```

Lorsqu'on positionne des objets sur la grille, les autres continueront d'être placés selon les règles de placement automatique. Nous verrons ces règles dans [un prochain guide](/fr/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout) mais grâce à cet exemple, on peut voir que les cellules vides sont remplies au fur et à mesure par les objets qui ne sont pas placés explicitement.

On peut placer chacun des éléments individuellement et on peut également choisir de laisser certaines cellules vides. Un des avantages de la grille CSS est qu'on peut créer des espaces sans avoir à utiliser des marges ou d'autres méthodes de contournement.

```css hidden
* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
   <div class="box1">Un</div>
   <div class="box2">Deux</div>
   <div class="box3">Trois</div>
   <div class="box4">Quatre</div>
</div>
```

```css
.box2 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.box4 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
}
```

{{EmbedLiveSample("Positionner_les_éléments_d'une_grille_grâce_au_numéro_de_ligne", '300', '330')}}

## Les propriétés raccourcies `grid-column` et `grid-row`

On a écrit beaucoup de règles pour positionner chaque élément. Heureusement, il existe des propriétés raccourcies qui permettent d'avoir une syntaxe plus concise. Les propriétés {{cssxref("grid-column-start")}} et {{cssxref("grid-column-end")}} peuvent être combinées pour former la propriété raccourcie {{cssxref("grid-column")}} et de la même façon, {{cssxref("grid-row-start")}} et  {{cssxref("grid-row-end")}} peuvent être synthétisées avec {{cssxref("grid-row")}}.

```css hidden
* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">Un</div>
  <div class="box2">Deux</div>
  <div class="box3">Trois</div>
  <div class="box4">Quatre</div>
</div>
```

```css
.box1 {
  grid-column: 1 / 2;
  grid-row: 1 / 4;
}
.box2 {
  grid-column: 3 / 4;
  grid-row: 1 / 3;
}
.box3 {
  grid-column: 2 / 3;
  grid-row: 1 /  2;
}
.box4 {
  grid-column: 2 / 4;
  grid-row: 3 / 4;
}
```

{{EmbedLiveSample('Les_propriétés_raccourcies_grid-column_et_grid-row', '300', '330')}}

## La taille par défaut

Dans les exemples précédents, on a défini chaque ligne et colonne de fin pour chaque élément. Mais si en pratique, on souhaite qu'un élément n'occupe qu'une seule piste, on peut omettre `grid-column-end` ou `grid-row-end`. Par défaut, les éléments occupent une seule piste. Notre exemple initial, avec les propriétés détaillées peut donc être réécrit de cette façon :

```css hidden
* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">Un</div>
  <div class="box2">Deux</div>
  <div class="box3">Trois</div>
  <div class="box4">Quatre</div>
</div>
```

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: 4;
}
.box2 {
  grid-column-start: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
.box3 {
  grid-column-start: 2;
  grid-row-start: 1;
}
.box4 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
}
```

{{EmbedLiveSample('La_taille_par_défaut', '300', '330')}}

### Tailles par défaut avec les propriétés raccourcies

Avec les propriétés raccourcies, on obtient le code suivant (sans aucune barre oblique ni seconde valeur pour les éléments qui n'occupent qu'une seule piste).

```css hidden
* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">Un</div>
  <div class="box2">Deux</div>
  <div class="box3">Trois</div>
  <div class="box4">Quatre</div>
</div>
```

```css
.box1 {
  grid-column: 1 ;
  grid-row: 1 / 4;
}
.box2 {
  grid-column: 3 ;
  grid-row: 1 / 3;
}
.box3 {
  grid-column: 2 ;
  grid-row: 1 ;
}
.box4 {
  grid-column: 2 / 4;
  grid-row: 3 ;
}
```

{{EmbedLiveSample('Tailles_par_défaut_avec_les_propriétés_raccourcies', '300', '330')}}

## La propriété `grid-area`

On peut aller plus loin et définir une zone pour chaque élément grâce à une seule propriété : {{cssxref("grid-area")}}. Cette propriété raccourcie permet d'utiliser les valeurs des propriétés suivantes (dans cet ordre) :

- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

```css hidden
* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">Un</div>
  <div class="box2">Deux</div>
  <div class="box3">Trois</div>
  <div class="box4">Quatre</div>
</div>
```

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
.box2 {
  grid-area: 1 / 3 / 3 / 4;
}
.box3 {
  grid-area: 1 / 2 / 2 / 3;
}
.box4 {
  grid-area: 3 / 2 / 4 / 4;
}
```

{{EmbedLiveSample('La_propriété_grid-area', '300', '330')}}

L'ordre des valeurs utilisé pour `grid-area` peut sembler un peu étrange quand on connaît celui utilisé par les propriétés raccourcies pour les marges (_margin_) et le remplissage (_padding_). Cet ordre s'explique car les grilles CSS fonctionnent avec les différents modes d'écriture et on utilise des propriétés et des valeurs _logiques_ plutôt que des propriétés et des valeurs _physiques_. Nous aborderons ce point dans [un prochain article](/fr/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes) mais il faut retenir ici que l'ordre des valeurs correspond aux directions logiques suivantes :

- `block-start`
- `block-end`
- `inline-start`
- `inline-end`

On travaille ici en anglais ou en français, une langue qui s'écrit de gauche à droite. La ligne physique correspondant à la ligne logique `block-start` est donc la ligne en haut du conteneur, `block-end` correspond à la ligne en bas du conteneur, `inline-start` correspond à la colonne la plus à gauche (le point de départ de l'écriture pour une ligne) et `inline-end` correspond à la dernière colonne, celle qui est située à l'extrémité droite de la grille.

Lorsqu'on définit une zone d'une grille grâce à la propriété `grid-area`, on commence par définir les lignes de « début » : `block-start` et `inline-start` puis les lignes de « fin » avec `block-end` et `inline-end`. Cela peut paraître étrange quand on est habitué à manipuler des propriétés physiques qui progressent dans le sens horaire : haut, droit, bas, gauche mais cet ordre paraît plus pertinent quand on considère que les sites web peuvent être multi-directionnels selon le mode d'écriture.

## Compter à rebours

On peut également compter à l'envers, à partir des lignes de fin. Pour un document écrit en français, cela correspond à la colonne la plus à droite et à la ligne la plus basse. Pour faire référence à la dernière ligne, on peut utiliser la valeur `-1` et on peut compter à rebours au fur et à mesure de cette façon (ainsi, `-2` fait référence à l'avant-dernière ligne). Attention, ici, la dernière ligne correspond à la dernière ligne _explicite_ de la grille, telle qu'elle est définie par `grid-template-columns` et `grid-template-rows`. Ce comptage ne prend pas en compte les lignes ou les colonnes qui sont ajoutées implicitement dans la grille.

Dans le prochain exemple, on renverse la disposition de la grille en travaillant à partir du bas et de la droite.

```css hidden
* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
   <div class="box1">Un</div>
   <div class="box2">Deux</div>
   <div class="box3">Trois</div>
   <div class="box4">Quatre</div>
</div>
```

```css
.box1 {
  grid-column-start: -1;
  grid-column-end: -2;
  grid-row-start: -1;
  grid-row-end: -4;
}
.box2 {
  grid-column-start: -3;
  grid-column-end: -4;
  grid-row-start: -1;
  grid-row-end: -3;
}
.box3 {
  grid-column-start: -2;
  grid-column-end: -3;
  grid-row-start: -1;
  grid-row-end: -2;
}
.box4 {
  grid-column-start: -2;
  grid-column-end: -4;
  grid-row-start: -3;
  grid-row-end: -4;
}
```

{{EmbedLiveSample('Compter_à_rebours', '300', '330')}}

### Étirer un élément sur la grille

Étant donné qu'on peut utiliser les numéros de lignes pour la première et la dernière, on peut facilement étirer un élément pour que celui-ci occupe toute la largeur et/ou toute la hauteur de la grille avec :

```css
.item {
  grid-column: 1 / -1;
}
```

## Les gouttières

La spécification pour les grilles CSS permet également d'ajouter des espaces (« gouttières ») entre les colonnes et entre les lignes grâce aux propriétés {{cssxref("grid-column-gap")}} et {{cssxref("row-gap")}}. Celles-ci permettent de définir un espace, de la même façon que la propriété {{cssxref("column-gap")}} permet d'obtenir un espace pour un mode de disposition avec plusieurs colonnes.

> **Note :** Les anciens navigateurs utilisent {{cssxref("column-gap")}}, {{cssxref("row-gap")}}, {{cssxref("gap")}} avec le préfixe `grid-` soit : {{cssxref("grid-column-gap")}}, {{cssxref("row-gap")}} et {{cssxref("gap")}}.
>
> Les navigateurs actuels retirent progressivement ce préfixe (la version préfixée sera maintenue sous forme d'alias). À l'heure actuelle, certains navigateurs ne prennent pas encore la version sans préfixe et c'est pourquoi certains exemples de ce guide continuent d'utiliser les versions préfixées avec `grid-`.

Les gouttières apparaissent uniquement entre les pistes de la grille, elles n'ajoutent pas d'espace en haut, en bas, à gauche ou à droite du conteneur. Voyons comment ajouter des espaces sur l'exemple précédent grâce à ces propriétés :

```css hidden
* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">Un</div>
  <div class="box2">Deux</div>
  <div class="box3">Trois</div>
  <div class="box4">Quatre</div>
</div>
```

```css
.box1 {
  grid-column: 1 ;
  grid-row: 1 / 4;
}
.box2 {
  grid-column: 3 ;
  grid-row: 1 / 3;
}
.box3 {
  grid-column: 2 ;
  grid-row: 1 ;
}
.box4 {
  grid-column: 2 / 4;
  grid-row: 3 ;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-column-gap: 20px;
  grid-row-gap: 1em;
}
```

{{EmbedLiveSample('Les_gouttières', '300', '350') }}

### Les propriétés raccourcies pour les gouttières

Les deux propriétés que nous venons de voir peuvent être synthétisées grâce à la propriété raccourcie {{cssxref("gap")}}. Si on fournit une seule valeur, celle-ci s'appliquera pour les espaces entre les colonnes et entre les lignes. Avec deux valeurs, la première sera utilisée pour `grid-row-gap` et la seconde pour `grid-column-gap`.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-gap: 1em 20px;
}
```

Par rapport au positionnement sur les lignes, les gouttières agissent comme si la ligne avait gagné en largeur ou en hauteur. Tout ce qui commence sur une ligne commencera après cet espace et on ne peut placer aucun élément dans cette gouttière. Aussi, si on veut qu'une gouttière agisse comme une piste classique dans laquelle on peut placer des objets, il suffira de définir une nouvelle piste plutôt qu'une gouttière.

## Utiliser le mot-clé `span`

On a vu comment indiquer la ligne de début et la ligne de fin avec des numéros. Il est aussi possible de définir la taille d'un élément en indiquant le numéro de la ligne de départ et le nombre de pistes sur lequel s'étale l'élément.

```css hidden
* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">Un</div>
  <div class="box2">Deux</div>
  <div class="box3">Trois</div>
  <div class="box4">Quatre</div>
</div>
```

```css
.box1 {
  grid-column: 1;
  grid-row: 1 / span 3;
}
.box2 {
  grid-column: 3;
  grid-row: 1 / span 2;
}
.box3 {
  grid-column: 2;
  grid-row: 1;
}
.box4 {
  grid-column: 2 / span 2;
  grid-row: 3;
}
```

{{EmbedLiveSample('Utiliser_le_mot-clé_span', '300', '330')}}

Le mot-clé `span` peut également être utilisé dans les valeurs des propriétés `grid-row-start`/`grid-row-end` et `grid-column-start`/`grid-column-end`. Les deux fragments de code qui suivent créeront la même zone. Dans le premier, on indique la ligne de début puis la ligne de fin en indiquant que l'élément occupe trois lignes. La zone commencera donc sur la première ligne et occupera 3 lignes, jusqu'à la ligne 4.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 3;
}
```

Dans le deuxième exemple, on indique la ligne de fin et le nombre de lignes occupées par l'élément avec `span 3`. Cela signifie que l'élément partira de la ligne 4 et occupera 3 lignes jusqu'à la ligne 1.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: span 3;
  grid-row-end: 4;
}
```

Pour vous familiariser avec le positionnement des éléments d'une grille en utilisant les lignes, vous pouvez essayer de construire certaines dispositions fréquemment utilisées en plaçant des éléments sur des grilles avec plus ou moins de pistes. Il faut garder à l'esprit que, lorsqu'on ne place pas explicitement tous les éléments, les éléments restants seront positionnés automatiquement. Cela peut tout à fait être l'objectif recherché mais si ce n'est pas le cas et que vous voyez un élément à un endroit inapproprié, vérifiez que vous lui avez affecté une position au sein de la grille.

Il faut aussi se rappeler que lorsqu'on place les éléments explicitement sur la grille, ceux-ci peuvent se chevaucher. Cela permet d'obtenir certains effets mais attention aux erreurs lorsque c'est la mauvaise ligne de début ou de fin qui est indiquée. Pour régler ce problème, on peut utiliser [l'outil de mise en évidence de la grille CSS dans Firefox](/fr/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts) pour analyser une grille compliquée.

{{PreviousMenuNext("Web/CSS/CSS_Grid_Layout/Les_concepts_de_base", "Web/CSS/CSS_Grid_Layout/D%C3%A9finir_des_zones_sur_une_grille","Web/CSS/CSS_Grid_Layout")}}
