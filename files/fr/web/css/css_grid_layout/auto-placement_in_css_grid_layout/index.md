---
title: Le placement automatique sur une grille CSS
slug: Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout
tags:
  - CSS
  - CSS Grids
  - Grilles CSS
  - Guide
  - Intermédiaire
translation_of: Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout
original_slug: Web/CSS/CSS_Grid_Layout/Placement_automatique_sur_une_grille_CSS
---
{{CSSRef}}

{{PreviousMenuNext("Web/CSS/CSS_Grid_Layout/Utiliser_des_lignes_nommées_sur_une_grille", "Web/CSS/CSS_Grid_Layout/Alignement_des_boîtes_avec_les_grilles_CSS","Web/CSS/CSS_Grid_Layout")}}

En plus de pouvoir placer des objets de façon précise sur une grille, la spécification pour les grilles CSS définit le comportement obtenu lorsque certains des objets ne sont pas placés sur la grille (voire aucun). Pour voir comment fonctionne le placement automatique, il suffit de créer une grille avec un ensemble d'objets. Sans fournir aucune information de placement, ces objets se placeront chacun sur une cellule de la grille.

## Placement automatique

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
  grid-gap: 10px;
}
```

```html
<div class="wrapper">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
</div>
```

{{EmbedLiveSample('Placement_automatique', '500', '230')}}

## Définir des règles pour le placement automatique

Comme on peut le voir dans l'exemple précédent, si on crée une grille sans définir de placement, tous les objets occuperont chacun une cellule de la grille. Par défaut, les objets sont placés au fur et à mesure sur les lignes horizontales de la grille. Si on a créé des lignes supplémentaires avec `grid-template-rows`, les objets suivants seront placés sur ces lignes. En revanche, si la grille ne possède pas suffisamment de lignes sur la grille explicite, de nouvelles lignes, implicites, seront créées.

### Dimensionner les lignes de la grille implicite

Par défaut, les lignes implicites créées automatiquement ont une taille automatique. Autrement dit, elles seront dimensionnées pour contenir les éléments qu'elles doivent placer sans que ceux-ci dépassent.

Il est toutefois possible de contrôler la taille de ces lignes grâce à la propriété `grid-auto-rows`. Ainsi, si on veut que les lignes créées automatiquement mesurent 100 pixels de haut, on utilisera :

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

```html
<div class="wrapper">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: 100px;
}
```

{{EmbedLiveSample('Dimensionner_les_lignes_de_la_grille_implicite', '500', '330')}}

### Dimensionner les lignes avec minmax()

On peut utiliser la fonction {{cssxref("minmax","minmax()")}} pour la valeur de {{cssxref("grid-auto-rows")}} afin de créer des lignes avec une taille minimale mais qui puissent être plus grandes si le contenu est plus grand que cette taille minimale.

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

```html
<div class="wrapper">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre
    <br>Cette cellule
    <br>a du contenu
    <br>supplémentaire
    <br>et max vaut auto
    <br>afin que la ligne
    <br>se développe.
  </div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
```

{{EmbedLiveSample('Dimensionner_les_lignes_avec_minmax', '500', '330')}}

### Dimensionner les lignes avec une liste de pistes

On peut aussi passer en argument une liste de pistes qui se répèteront. Dans l'exemple ci-après, on crée une piste implicite pour une ligne de 100 pixels et une seconde de `200px`. Ce motif sera utilisé tant que du contenu sera ajouté à la grille implicite.

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

```html
<div class="wrapper">
   <div>Un</div>
   <div>Deux</div>
   <div>Trois</div>
   <div>Quatre</div>
   <div>Cinq</div>
   <div>Six</div>
   <div>Sept</div>
   <div>Huit</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: 100px 200px;
}
```

{{EmbedLiveSample('Dimensionner_les_lignes_avec_une_liste_de_pistes', '500', '330')}}

### Utiliser le placement automatique pour les colonnes

On peut également paramétrer la grille pour que les objets soient placés automatiquement en suivant les colonnes de la grille. Pour obtenir ce résultat, on utilisera la propriété {{cssxref("grid-auto-flow")}} avec la valeur `column`. Dans ce cas, la grille ajoutera les objets dans les lignes verticales définies avec {{cssxref("grid-template-rows")}}. Lorsqu'une colonne sera pleine, les prochains objets seront placés dans la colonne explicite suivante ou dans une colonne implicite créée automatiquement s'il n'y a plus assez de colonnes explicites. La taille des pistes pour les colonnes implicites peut être définie avec {{cssxref("grid-auto-columns")}}, cette dernière fonctionne de façon analogue à {{cssxref("grid-auto-rows")}}.

Dans le prochain exemple, on crée une grille avec trois lignes qui mesurent chacune 200 pixels de haut. On utilise le placement automatique en colonne. La première colonne qui sera créée mesurera 300 pixels de large, ensuite on aura une colonne de 100 pixels de large et ainsi de suite jusqu'à ce que tous les éléments puissent être placés.

```css
.wrapper {
  display: grid;
  grid-template-rows: repeat(3, 200px);
  grid-gap: 10px;
  grid-auto-flow: column;
  grid-auto-columns: 300px 100px;
}
```

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

```html
<div class="wrapper">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
  <div>Six</div>
  <div>Sept</div>
  <div>Huit</div>
</div>
```

{{EmbedLiveSample('Utiliser_le_placement_automatique_pour_les_colonnes', '500', '640')}}

## L'ordre des éléments placés automatiquement

Une grille peut contenir un mélange d'éléments. Certains éléments peuvent avoir une position définie et d'autres être placés automatiquement. Ce placement automatique peut s'avérer utile lorsque l'ordre des éléments dans le document est celui qu'on veut utiliser pour organiser la grille : il n'y a alors pas besoin d'écrire de règles CSS pour positionner les éléments un par un. La spécification détaille exhaustivement [l'algorithme de placement des objets sur la grille](https://drafts.csswg.org/css-grid/#auto-placement-algo), mais voyons ici les quelques règles simples qu'il faut principalement retenir.

### Modification de l'ordre du document

Le placement des éléments qui n'ont pas eu d'ordre défini sont placés selon l'algorithme décrit dans la section  _“order modified document order”_. Cela signifie que si on utilise uniquement la propriété `order`, les éléments seront placés selon cet ordre plutôt que selon l'ordre indiqué par le DOM. Sinon, l'ordre des éléments sera celui décrit par le document source.

### Les éléments avec des propriétés de placement

La grille commencera par placer les éléments pour lesquels on a défini une position. Dans l'exemple qui suit, on a une grille avec 12 éléments, l'élément 2 et l'élément 5 sont placés en utilisant les lignes. On put voir comment ces deux éléments sont placés et comment les autres sont placés automatiquement dans les espaces restants. Les objets placés automatiquement seront placés avant les éléments qui sont placés, dans l'ordre du DOM.

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

```html
<div class="wrapper">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
  <div>Six</div>
  <div>Sept</div>
  <div>Huit</div>
  <div>Neuf</div>
  <div>Dix</div>
  <div>Onze</div>
  <div>Douze</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 10px;
}
.wrapper div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.wrapper div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample('Les_éléments_avec_des_propriétés_de_placement', '500', '450')}}

### Gérer les éléments qui s'étalent sur plusieurs pistes

On peut utiliser les propriétés de placement tout en tirant parti du placement automatique. Dans le prochain exemple, on complète la disposition en indiquant que les éléments 1, 4 et 9 (4n+1) doivent occuper deux pistes, pour les colonnes et pour les lignes. Pour obtenir ce résultat, on utilise les propriétés {{cssxref("grid-column-end")}} et {{cssxref("grid-row-end")}} avec la valeur `span 2`. La ligne de début sera déterminée automatiquement et la ligne de fin sera deux pistes plus loin.

On peut voir coment cela laisse des espaces dans la grille car lorsqu'un élément placé automatiquement n'a pas suffisamment de place sur une piste, une nouvelle ligne sera créée jusqu'à ce que l'élément ait la place.

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

```html
<div class="wrapper">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
  <div>Six</div>
  <div>Sept</div>
  <div>Huit</div>
  <div>Neuf</div>
  <div>Dix</div>
  <div>Onze</div>
  <div>Douze</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 10px;
}
.wrapper div:nth-child(4n+1) {
  grid-column-end: span 2;
  grid-row-end: span 2;
  background-color: #ffa94d;
}
.wrapper div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.wrapper div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample('Gérer_les_éléments_qui_sétalent_sur_plusieurs_pistes', '500', '770')}}

### Combler les espaces

En dehors des éléments placés explicitement, la grille place les éléments automatiques en respectant l'ordre du DOM. C'est généralement le résultat qu'on souhaite lorsqu'on met en forme un document comme un formulaire. Toutefois on veut parfois obtenir une disposition plus dense, sans vide entre les différents éléments.

Pour cela, sur le conteneur, on ajoute la propriété {{cssxref("grid-auto-flow")}} avec la valeur `dense`. C'est la même propriété qu'on utilise pour modifier l'ordre du flux avec `column`. On peut aussi obtenir une disposition dense, rangée par colonne en utilisant les deux valeurs pour la propriété : `grid-auto-flow: column dense`.

Avec cette valeur, la grille cherchera donc à combler les espaces qu'elle a laissés quitte à ne pas respecter l'ordre du DOM. En revanche, l'ordre de la navigation au clavier (_tab order_) suivra toujours l'ordre du document. Nous étudierons cet aspect plus en détails dans [un article sur l'accessibilité](/fr/docs/Web/CSS/CSS_Grid_Layout/Les_grilles_CSS_et_l_accessibilit%C3%A9).

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

```html
<div class="wrapper">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
  <div>Six</div>
  <div>Sept</div>
  <div>Huit</div>
  <div>Neuf</div>
  <div>Dix</div>
  <div>Onze</div>
  <div>Douze</div>
</div>
```

```css
.wrapper div:nth-child(4n+1) {
  grid-column-end: span 2;
  grid-row-end: span 2;
  background-color: #ffa94d;
}
.wrapper div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.wrapper div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 10px;
  grid-auto-flow: dense;
}
```

{{EmbedLiveSample('Combler_les_espaces', '500', '730')}}

### Les éléments anonymes de la grille

Dans la spécification, on utilise le concept d'élément anonyme. Ces éléments sont ceux qui sont créés lorsqu'on a une chaîne de caractères dans le conteneur de la grille et que celle-ci n'est pas contenue dans un autre élément. Dans l'exemple ci-après, on a trois éléments sur la grille : le premier est un élément anonyme car il n'est placé dans aucun élément, il sera alors placé automatiquement. Les deux éléments suivants sont placés dans des `div` et peuvent être placés automatiquement ou grâce à une autre méthode de positionnement.

```css
<div class="grid">
  Je suis une chaîne de caractères et je serai placé
  automatiquement.
  <div>Un élément de la grille</div>
  <div>Un élément de la grille</div>
</div>
```

Les éléments anonymes sont toujours placés automatiquement car on ne peut pas les cibler autrement. Aussi, si on a du texte sans balise dans la grille, il faut se rappeler que celui-ci peut être placé à un endroit imprévu du fait des règles de placement automatique.

### Les cas d'utilisation pour le placement automatique

Le placement automatique peut être utile lorsqu'on a un ensemble d'objets qui se ressemblent. Ce peut être des éléments qui n'ont pas d'ordre logique particulier : une galerie de photos, une liste de produits. Dans ces cas de figure, on peut choisir d'utiliser une disposition dense afin de combler les trous de la grille. Dans l'exemple qui représente la galerie d'images, on a certaines images en paysage et d'autres en portrait (lorsqu'on utilise la classe `landscape` l'élément s'étend sur deux colonnes). On utilise ensuite `grid-auto-flow: dense` afin de créer une grille dense.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 10px;
  grid-auto-flow: dense;
  list-style: none;
  margin: 1em auto;
  padding: 0;
  max-width: 800px;
}
.wrapper li {
  border: 1px solid #ccc;
}
.wrapper li.landscape {
  grid-column-end: span 2;
}
.wrapper li img {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
```

```html
<ul class="wrapper">
  <li><img src="http://placehold.it/200x300" alt="placeholder"></li>
  <li class="landscape"><img src="http://placehold.it/350x200" alt="placeholder"></li>
  <li class="landscape"><img src="http://placehold.it/350x200" alt="placeholder"></li>
  <li class="landscape"><img src="http://placehold.it/350x200" alt="placeholder"></li>
  <li><img src="http://placehold.it/200x300" alt="placeholder"></li>
  <li><img src="http://placehold.it/200x300" alt="placeholder"></li>
  <li class="landscape"><img src="http://placehold.it/350x200" alt="placeholder"></li>
  <li><img src="http://placehold.it/200x300" alt="placeholder"></li>
  <li><img src="http://placehold.it/200x300" alt="placeholder"></li>
  <li><img src="http://placehold.it/200x300" alt="placeholder"></li>
</ul>
```

{{EmbedLiveSample('Les_cas_dutilisation_pour_le_placement_automatique', '500', '1300')}}

Le placement automatique peut également aider à disposer des éléments d'interface utilisateur qui ont un ordre logique. Dans l'exemple suivant, on voit comment manipuler les listes de définition. Les listes de définition sont intéressantes car il n'y a pas de niveau de regroupement pour regrouper un terme et ses définitions. Dans cet exemple, on autorise le placement automatique mais on a une classe pour qu'un élément `dt` démarre sur la première ligne et que l'élément  `dd` sur la  ligne 2. On s'assure ainsi que les termes sont bien en face de chaque définition, peu importe le nombre de définitions qu'on a pour un terme.

### Autre exemple

```css hidden
* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
```

```html
<div class="wrapper">
  <dl>
    <dt>Mammals</dt>
    <dd>Cat</dd>
    <dd>Dog</dd>
    <dd>Mouse</dd>
    <dt>Fish</dt>
    <dd>Guppy</dd>
    <dt>Birds</dt>
    <dd>Pied Wagtail</dd>
    <dd>Owl</dd>
  <dl>
</div>
```

```css
dl {
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 300px;
  margin: 1em;
  line-height: 1.4;
}
dt {
  grid-column: 1;
  font-weight: bold;
}
dd {
  grid-column: 2;
}
```

{{EmbedLiveSample('Autre_exemple', '500', '230')}}

> **Note :** Voir [cet article de SitePoint](https://www.sitepoint.com/understanding-masonry-layout/) à propos de la disposition en briques pour d'autres cas d'utilisation.

## Qu'est-ce que le placement automatique ne permet pas de réaliser (actuellement) ?

Certaines questions se posent encore. Actuellement on ne peut pas cibler toutes les autres cellules de la grille. On ne peut pas non plus définir une règle pour « placer tous les éléments automatiquement après la prochaine ligne intitulée `n` » (pour que certaines lignes soient sautées). Cette question [est décrite sur le dépôt GitHub du CSSWG](https://github.com/w3c/csswg-drafts/issues/796), n'hésitez pas à ajouter vos exemples de scénarios.

Si vous rencontrez des cas d'utilisation problématiques avec le placement automatique et les grilles, vous pouvez consulter les _issues_ existantes et les compléter ou ajouter les vôtres. Cela permettra que les prochaines versions de la spécification soient meilleures.

{{PreviousMenuNext("Web/CSS/CSS_Grid_Layout/Utiliser_des_lignes_nommées_sur_une_grille", "Web/CSS/CSS_Grid_Layout/Alignement_des_boîtes_avec_les_grilles_CSS","Web/CSS/CSS_Grid_Layout")}}
