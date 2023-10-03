---
title: Le placement automatique sur une grille CSS
slug: Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout
l10n:
  sourceCommit: b906098e63b1eb3512b4381fe7c105b67037aff1
---

{{CSSRef}}

En plus de pouvoir placer des objets de façon précise sur une grille, la spécification pour les grilles CSS définit le comportement obtenu lorsque certains (voire aucun) des objets ne sont pas placés sur la grille. Pour voir comment fonctionne le placement automatique, il suffit de créer une grille avec un ensemble d'objets.

## Placement automatique

Sans fournir aucune information de placement, ces objets se placeront chacun sur une cellule de la grille.

```css hidden
* {
  box-sizing: border-box;
}

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

{{EmbedLiveSample('', '500', '230')}}

## Les règles par défaut pour le placement automatique

Comme on peut le voir dans l'exemple précédent, si on crée une grille sans définir de placement, tous les objets se placeront chacun sur une cellule de la grille. Par défaut, les objets sont placés au fur et à mesure sur les lignes horizontales de la grille. Si on a créé des lignes supplémentaires avec `grid-template-rows`, les objets suivants seront placés sur ces lignes. En revanche, si la grille ne possède pas suffisamment de lignes sur la grille explicite, de nouvelles lignes, _implicites_, seront créées.

### Dimensionner les lignes de la grille implicite

Par défaut, les lignes implicites créées automatiquement ont une taille automatique. Autrement dit, elles seront dimensionnées pour contenir les éléments qu'elles doivent placer sans que ceux-ci dépassent.

Il est toutefois possible de contrôler la taille de ces lignes grâce à la propriété `grid-auto-rows`. Ainsi, si on veut que les lignes créées automatiquement mesurent 100 pixels de haut, on utilisera&nbsp;:

```css hidden
* {
  box-sizing: border-box;
}

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

{{EmbedLiveSample('', '500', '330')}}

### Dimensionner les lignes avec `minmax()`

On peut utiliser la fonction [`minmax()`](/fr/docs/Web/CSS/minmax) pour la valeur de [`grid-auto-rows`](/fr/docs/Web/CSS/grid-auto-rows) afin de créer des lignes avec une taille minimale mais qui puissent être plus grandes si le contenu est plus grand que cette taille minimale.

```css hidden
* {
  box-sizing: border-box;
}

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
  <div>
    Quatre <br />Cette cellule <br />a du contenu <br />supplémentaire <br />et
    max vaut auto <br />afin que la ligne <br />se développe.
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

{{EmbedLiveSample('', '500', '330')}}

### Dimensionner les lignes avec une liste de pistes

On peut aussi passer en argument une liste de pistes qui se répèteront. Dans l'exemple ci-après, on crée une piste implicite pour une ligne de 100 pixels et une seconde de 200 pixels. Ce motif sera utilisé tant que du contenu sera ajouté à la grille implicite.

```css hidden
* {
  box-sizing: border-box;
}

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

{{EmbedLiveSample('', '500', '480')}}

### Utiliser le placement automatique avec les colonnes

On peut également paramétrer la grille pour que les objets soient placés automatiquement en suivant les colonnes de la grille. Pour obtenir ce résultat, on utilisera la propriété [`grid-auto-flow`](/fr/docs/Web/CSS/grid-auto-flow) avec la valeur `column`. Dans ce cas, la grille ajoutera les objets dans les lignes verticales définies avec [`grid-template-rows`](/fr/docs/Web/CSS/grid-template-rows). Lorsqu'une colonne sera pleine, les prochains objets seront placés dans la colonne explicite suivante ou dans une colonne implicite créée automatiquement s'il n'y a plus assez de colonnes explicites. La taille des pistes pour les colonnes implicites peut être définie avec [`grid-auto-columns`](/fr/docs/Web/CSS/grid-auto-columns), cette dernière fonctionne de façon analogue à [`grid-auto-rows`](/fr/docs/Web/CSS/grid-auto-rows).

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
* {
  box-sizing: border-box;
}

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

{{EmbedLiveSample('', '500', '640')}}

## L'ordre des éléments placés automatiquement

Une grille peut contenir un mélange d'éléments. Certains éléments peuvent avoir une position définie et d'autres être placés automatiquement. Ce placement automatique peut s'avérer utile lorsque l'ordre des éléments dans le document est celui qu'on veut utiliser pour organiser la grille&nbsp;: il n'y a alors pas besoin d'écrire de règles CSS pour positionner les éléments un par un. La spécification détaille exhaustivement [l'algorithme de placement des objets sur la grille](https://drafts.csswg.org/css-grid/#auto-placement-algo), mais voyons ici les quelques règles simples qu'il faut principalement retenir.

### Modification de l'ordre du document

Le placement des éléments qui n'ont pas eu d'ordre défini sont placés selon l'algorithme décrit dans la section _«&nbsp;<i lang="en">order modified document order</i>&nbsp;»_. Cela signifie que si on utilise uniquement la propriété `order`, les éléments seront placés selon cet ordre plutôt que selon l'ordre indiqué par le DOM. Sinon, l'ordre des éléments sera celui décrit par le document source.

### Les éléments avec des propriétés de placement

La grille commencera par placer les éléments pour lesquels on a défini une position. Dans l'exemple qui suit, on a une grille avec 12 éléments, l'élément 2 et l'élément 5 sont placés en utilisant les lignes. On peut voir comment ces deux éléments sont placés et comment les autres sont placés automatiquement dans les espaces restants. Les objets placés automatiquement seront placés avant les éléments qui sont placés, dans l'ordre du DOM, ils ne commencent pas après la position d'un élément placé qui les précède.

```css hidden
* {
  box-sizing: border-box;
}

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

{{EmbedLiveSample('', '500', '450')}}

### Gérer les éléments qui s'étalent sur plusieurs pistes

On peut utiliser les propriétés de placement tout en tirant parti du placement automatique. Dans le prochain exemple, on complète la disposition en indiquant que les éléments 1, 5 et 9 (4n+1) doivent occuper deux pistes, pour les colonnes et pour les lignes. Pour obtenir ce résultat, on utilise les propriétés [`grid-column-end`](/fr/docs/Web/CSS/grid-column-end) et [`grid-row-end`](/fr/docs/Web/CSS/grid-row-end) avec la valeur `span 2`. La ligne de début sera déterminée automatiquement et la ligne de fin sera deux pistes plus loin.

On peut voir comment cela laisse des espaces dans la grille, car lorsqu'un élément placé automatiquement n'a pas suffisamment de place sur une piste, une nouvelle ligne sera créée jusqu'à ce que l'élément ait la place.

```css hidden
* {
  box-sizing: border-box;
}
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
.wrapper div:nth-child(4n + 1) {
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

{{EmbedLiveSample('', '500', '770')}}

### Combler les espaces

En dehors des éléments placés explicitement, la grille place les éléments automatiques en respectant l'ordre du DOM. C'est généralement le résultat qu'on souhaite lorsqu'on met en forme un document comme un formulaire (on ne voudrait pas que les libellés et les champs soient mélangés pour combler certains trous). Toutefois, on dispose parfois des éléments pour lesquels l'ordre logique n'a pas d'importance et où on veut obtenir une disposition plus dense, sans vide entre les différents éléments.

Pour cela, sur le conteneur, on ajoute la propriété [`grid-auto-flow`](/fr/docs/Web/CSS/grid-auto-flow) avec la valeur `dense`. C'est la même propriété qu'on utilise pour modifier l'ordre du flux avec `column`. On peut aussi obtenir une disposition dense, rangée par colonne en utilisant les deux valeurs pour la propriété&nbsp;: `grid-auto-flow: column dense`.

Avec cette valeur, la grille cherchera donc à combler les espaces qu'elle a laissés, quitte à ne pas respecter l'ordre du DOM. Cela ne modifiera pas l'ordre logique des éléments. Par exemple, l'ordre de la navigation au clavier suivra toujours l'ordre du document. Nous étudierons cet aspect plus en détails dans [un article sur l'accessibilité](/fr/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility). Pour résumer, il faut faire attention quand on détache l'ordre visuel de l'ordre d'affichage.

```css hidden
* {
  box-sizing: border-box;
}
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
.wrapper div:nth-child(4n + 1) {
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

{{EmbedLiveSample('', '500', '730')}}

### Les éléments anonymes de la grille

Dans la spécification, on utilise le concept d'élément anonyme. Ces éléments sont ceux qui sont créés lorsqu'on a une chaîne de caractères dans le conteneur de la grille et que celle-ci n'est pas contenue dans un autre élément. Dans l'exemple ci-après, on a trois éléments sur la grille&nbsp;:

- Le premier est un élément anonyme, car il n'est placé dans aucun élément, il sera alors placé automatiquement.
- Les deux éléments suivants sont placés dans des `div` et peuvent être placés automatiquement ou grâce à une autre méthode de positionnement.

```html
<div class="grid">
  Je suis une chaîne de caractères et je serai placée automatiquement.
  <div>Un élément de la grille</div>
  <div>Un élément de la grille</div>
</div>
```

Les éléments anonymes sont toujours placés automatiquement, car on ne peut pas les cibler autrement. Aussi, si on a du texte sans balise dans la grille, il faut se rappeler que celui-ci peut être placé à un endroit imprévu du fait des règles de placement automatique.

### Les cas d'utilisation pour le placement automatique

Le placement automatique peut être utile lorsqu'on a un ensemble d'objets qui se ressemblent. Ce peut être des éléments qui n'ont pas d'ordre logique particulier&nbsp;: une galerie de photos, une liste de produits. Dans ces cas de figure, on peut choisir d'utiliser une disposition dense afin de combler les trous de la grille. Dans l'exemple qui représente la galerie d'images, on a certaines images en paysage et d'autres en portrait (lorsqu'on utilise la classe `landscape` l'élément s'étend sur deux colonnes). On utilise ensuite `grid-auto-flow: dense` afin de créer une grille dense.

Dans l'exemple qui suit, retirez la ligne `grid-auto-flow: dense` pour voir la réorganisation du contenu et les espaces que cela crée.

{{EmbedGHLiveSample("css-examples/grid/docs/autoplacement.html", '100%', 1200)}}

Le placement automatique peut également aider lorsqu'on dispose des éléments d'interface sans ordre logique. Dans l'exemple qui suit, on a une liste de définitions. Dans une telle liste, rien ne regroupe particulièrement plusieurs éléments `<dt>` et `<dd>`. Ici, on autorise le placement automatique tout en utilisant des classes pour que les `<dt>` soient dans la colonne 1 et les `<dd>` dans la colonne 2. On s'assure ainsi que les termes et leurs définitions seront bien l'un en face de l'autre, quel que soit le nombre de définitions pour un terme.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
```

```html
<div class="wrapper">
  <dl>
    <dt>Mammifères</dt>
    <dd>Chat</dd>
    <dd>Chien</dd>
    <dd>Souris</dd>
    <dt>Poisson</dt>
    <dd>Poisson rouge</dd>
    <dt>Oiseaux</dt>
    <dd>Bergeronnette</dd>
    <dd>Hiboux</dd>
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

{{EmbedLiveSample('', '500', '230')}}

## Qu'est-ce que le placement automatique ne permet pas de réaliser (actuellement)&nbsp;?

Certaines questions se posent encore. Actuellement on ne peut pas cibler toutes les autres cellules de la grille. On ne peut pas non plus définir une règle pour «&nbsp;placer tous les éléments automatiquement après la prochaine ligne intitulée `n`&nbsp;» (pour que certaines lignes soient sautées). Cette question [est décrite sur le dépôt GitHub du CSSWG](https://github.com/w3c/csswg-drafts/issues/796), n'hésitez pas à ajouter vos exemples de scénarios.

Si vous rencontrez des cas d'utilisation problématiques avec le placement automatique et les grilles, vous pouvez consulter les <i lang="en">issues</i> existantes et les compléter ou ajouter les vôtres. Cela permettra que les prochaines versions de la spécification soient meilleures.
