---
title: Disposition de grille avec un placement basé sur les lignes
short-title: Utiliser le placement basé sur les lignes
slug: Web/CSS/Guides/Grid_layout/Line-based_placement
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dans le guide [sur les concepts de base de la disposition de grille](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts), nous avons vu comment positionner des éléments en utilisant des numéros de lignes. Nous allons désormais étudier cette fonctionnalité de placement plus en détail.

Commencer par explorer la grille à l'aide des lignes numérotées est la démarche la plus logique, car lorsque vous utilisez une disposition en grille, vous avez toujours des lignes numérotées. Les lignes sont numérotées pour les colonnes et les rangées, et sont indexées à partir de `1`. Notez que la grille est indexée en fonction du mode d'écriture du document. Dans une langue s'écrivant de gauche à droite, comme le français, la ligne 1 se trouve sur le côté gauche de la grille. Si vous travaillez dans une langue s'écrivant de droite à gauche, comme l'arabe, la ligne 1 se trouve alors à droite de la grille. Nous approfondissons l'interaction entre les modes d'écriture et les grilles dans le guide [grilles, valeurs logiques et modes d'écriture](/fr/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes).

## Un exemple simple

Dans cet exemple simple, on a une grille avec 3 pistes pour les colonnes et 3 pistes pour les rangées, on a donc 4 lignes pour chaque dimension.

```css hidden
* {
  box-sizing: border-box;
}

.enveloppe {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.enveloppe > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.enveloppe {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}
```

À l'intérieur de notre conteneur de grille, nous incluons quatre éléments enfants.

```html
<div class="enveloppe">
  <div class="boite1">Un</div>
  <div class="boite2">Deux</div>
  <div class="boite3">Trois</div>
  <div class="boite4">Quatre</div>
</div>
```

{{EmbedLiveSample("Un exemple simple", 300, 305)}}

Si nous ne plaçons pas ces éléments sur la grille d'une quelconque manière, ils sont disposés selon les règles de placement automatique, un élément dans chacune des quatre premières cellules. Vous pouvez inspecter la grille avec les outils de développement de votre navigateur pour voir comment la grille définit les colonnes et les lignes.

![L'exemple de grille mis en évidence dans les outils de développement](highlighted_grid.png)

## Positionner les éléments d'une grille grâce au numéro de ligne

Nous pouvons utiliser le placement basé sur les lignes pour contrôler où ces éléments se trouvent sur la grille. Nous pouvons utiliser les propriétés {{CSSxRef("grid-column-start")}} et {{CSSxRef("grid-column-end")}} pour que le premier élément commence tout à gauche de la grille et occupe une seule piste de colonne. Avec {{CSSxRef("grid-row-start")}} et {{CSSxRef("grid-row-end")}}, nous faisons en sorte que l'élément commence sur la première ligne en haut de la grille et s'étende jusqu'à la quatrième ligne.

```css
.boite1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
```

À mesure que vous positionnez certains éléments, les autres éléments de la grille continuent à être disposés selon les règles de placement automatique. Ce comportement est expliqué dans le guide [placement automatique dans la disposition en grille](/fr/docs/Web/CSS/Guides/Grid_layout/Auto-placement). Pour l'instant, observez comment la grille dispose les éléments non positionnés dans les cellules vides de la grille.

Adressez chaque élément individuellement en utilisant les mêmes propriétés mais avec des valeurs différentes, nous plaçons les quatre éléments, en occupant les pistes de lignes et de colonnes.

```css hidden
* {
  box-sizing: border-box;
}

.enveloppe {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.enveloppe > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="enveloppe">
  <div class="boite1">Un</div>
  <div class="boite2">Deux</div>
  <div class="boite3">Trois</div>
  <div class="boite4">Quatre</div>
</div>
```

```css
.boite1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
.boite2 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
.boite3 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.boite4 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
}
```

{{EmbedLiveSample("Positionner les éléments d'une grille grâce au numéro de ligne", 300, 305)}}

Notez que nous pouvons laisser des cellules vides si nous le souhaitons. L'un des aspects très intéressants de la disposition en grille est la possibilité d'avoir de l'espace blanc dans nos designs sans aucun artifice.

## Les propriétés raccourcies `grid-column` et `grid-row`

L'exemple précédent contient beaucoup de code pour positionner chaque élément. Il n'est donc pas surprenant d'apprendre qu'il existe une [syntaxe raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties). Les propriétés {{CSSxRef("grid-column-start")}} et {{CSSxRef("grid-column-end")}} peuvent être combinées en {{CSSxRef("grid-column")}}, {{CSSxRef("grid-row-start")}} et {{CSSxRef("grid-row-end")}} dans {{CSSxRef("grid-row")}}. Dans cet exemple, nous reproduisons l'exemple ci-dessus en utilisant ces propriétés raccourcies&nbsp;:

```css hidden
* {
  box-sizing: border-box;
}

.enveloppe {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.enveloppe > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="enveloppe">
  <div class="boite1">Un</div>
  <div class="boite2">Deux</div>
  <div class="boite3">Trois</div>
  <div class="boite4">Quatre</div>
</div>
```

```css
.boite1 {
  grid-column: 1 / 2;
  grid-row: 1 / 4;
}
.boite2 {
  grid-column: 3 / 4;
  grid-row: 1 / 3;
}
.boite3 {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}
.boite4 {
  grid-column: 2 / 4;
  grid-row: 3 / 4;
}
```

{{EmbedLiveSample("Les propriétés raccourcies `grid-column` et `grid-row`", 300, 305)}}

## Taille par défaut

Dans les exemples ci-dessous, nous définissons chaque fin de rangée et de colonne, afin de montrer les propriétés, cependant, en pratique si un élément s'étend seulement sur une piste, vous pouvez omettre les valeurs `grid-column-end` ou `grid-row-end`. La grille s'étend par défaut sur une piste.

### Taille par défaut avec les propriétés longues de placement

Cela signifie que notre exemple initial, avec les propriétés détaillées, ressemble à ceci&nbsp;:

```css hidden
* {
  box-sizing: border-box;
}

.enveloppe {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.enveloppe > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="enveloppe">
  <div class="boite1">Un</div>
  <div class="boite2">Deux</div>
  <div class="boite3">Trois</div>
  <div class="boite4">Quatre</div>
</div>
```

```css
.boite1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: 4;
}
.boite2 {
  grid-column-start: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
.boite3 {
  grid-column-start: 2;
  grid-row-start: 1;
}
.boite4 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
}
```

{{EmbedLiveSample("Taille par défaut avec les propriétés longues de placement", 300, 305)}}

### Tailles par défaut avec les propriétés raccourcies

Notre raccourci ressemble au code suivant, sans barre oblique et avec une deuxième valeur pour les éléments ne couvrant qu'une seule piste.

```css hidden
* {
  box-sizing: border-box;
}

.enveloppe {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.enveloppe > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="enveloppe">
  <div class="boite1">Un</div>
  <div class="boite2">Deux</div>
  <div class="boite3">Trois</div>
  <div class="boite4">Quatre</div>
</div>
```

```css
.boite1 {
  grid-column: 1;
  grid-row: 1 / 4;
}
.boite2 {
  grid-column: 3;
  grid-row: 1 / 3;
}
.boite3 {
  grid-column: 2;
  grid-row: 1;
}
.boite4 {
  grid-column: 2 / 4;
  grid-row: 3;
}
```

{{EmbedLiveSample("Tailles par défaut avec les propriétés raccourcies", 300, 305)}}

## La propriété `grid-area`

Nous pouvons aller plus loin et définir chaque zone à l'aide d'une seule propriété — {{CSSxRef("grid-area")}}. L'ordre des valeurs de `grid-area` est le suivant.

- {{CSSxRef("grid-row-start")}}
- {{CSSxRef("grid-column-start")}}
- {{CSSxRef("grid-row-end")}}
- {{CSSxRef("grid-column-end")}}

```css hidden
* {
  box-sizing: border-box;
}

.enveloppe {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.enveloppe > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="enveloppe">
  <div class="boite1">Un</div>
  <div class="boite2">Deux</div>
  <div class="boite3">Trois</div>
  <div class="boite4">Quatre</div>
</div>
```

```css
.boite1 {
  grid-area: 1 / 1 / 4 / 2;
}
.boite2 {
  grid-area: 1 / 3 / 3 / 4;
}
.boite3 {
  grid-area: 1 / 2 / 2 / 3;
}
.boite4 {
  grid-area: 3 / 2 / 4 / 4;
}
```

{{EmbedLiveSample("La propriété `grid-area`", 300, 305)}}

Cet ordre des valeurs pour `grid-area` peut paraître un peu étrange — il est en effet inverse de la direction dans laquelle on définit les marges et les remplissages sous forme raccourcie, par exemple. Il peut être utile de comprendre que cela s'explique par le fait que la disposition en grille CSS utilise les directions relatives au flux définies dans les [modes d'écriture CSS](/fr/docs/Web/CSS/Guides/Writing_modes). Nous explorons le fonctionnement des grilles avec les modes d'écriture dans [grilles, valeurs logiques et modes d'écriture](/fr/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes). Pour l'instant, considérons le concept des quatre directions {{Glossary("Flow relative values", "relatives au flux")}}&nbsp;:

- `block-start`
- `block-end`
- `inline-start`
- `inline-end`

Nous travaillons en français, une langue qui s'écrit de gauche à droite. La ligne physique correspondant à la ligne logique `block-start` est donc la ligne en haut du conteneur, `block-end` correspond à la ligne en bas du conteneur, `inline-start` correspond à la colonne la plus à gauche (le point de départ de l'écriture pour une ligne) et `inline-end` correspond à la dernière colonne, celle qui est située à l'extrémité droite de la grille.

Lorsque nous définissons notre zone de grille à l'aide de la propriété `grid-area`, nous commençons par définir les lignes de début `block-start` et `inline-start`, puis les lignes de fin `block-end` et `inline-end`. Cela peut sembler étrange au premier abord, car nous sommes habitués aux {{Glossary("physical properties", "propriétés physiques")}} `top`, `right`, `bottom` et `left`, mais cela devient plus logique si l'on considère que les sites web peuvent être multi-directionnels selon les différents modes d'écriture.

## Compter à rebours

Nous pouvons également compter à rebours à partir des lignes de fin de bloc et de ligne de la grille. Pour l'anglais, cela correspond à la ligne de colonne de droite et à la ligne de rangée finale. Les dernières lignes de la grille explicite peuvent être adressées comme `-1`, et vous pouvez compter à rebours à partir de là — donc l'avant-dernière ligne est `-2`.

Notez que les valeurs négatives ne sont pertinentes que pour la grille explicite. La dernière ligne est la dernière ligne de la grille définie par `grid-template-columns` et `grid-template-rows`, et ne tient pas compte des lignes ou colonnes ajoutées dans la _grille implicite_ en dehors de celle-ci.

Dans l'exemple suivant, nous avons inversé la disposition sur laquelle nous travaillions en partant de la droite et du bas de notre grille pour placer les éléments.

```css hidden
* {
  box-sizing: border-box;
}

.enveloppe {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.enveloppe > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="enveloppe">
  <div class="boite1">Un</div>
  <div class="boite2">Deux</div>
  <div class="boite3">Trois</div>
  <div class="boite4">Quatre</div>
</div>
```

```css
.boite1 {
  grid-column-start: -1;
  grid-column-end: -2;
  grid-row-start: -1;
  grid-row-end: -4;
}
.boite2 {
  grid-column-start: -3;
  grid-column-end: -4;
  grid-row-start: -1;
  grid-row-end: -3;
}
.boite3 {
  grid-column-start: -2;
  grid-column-end: -3;
  grid-row-start: -1;
  grid-row-end: -2;
}
.boite4 {
  grid-column-start: -2;
  grid-column-end: -4;
  grid-row-start: -3;
  grid-row-end: -4;
}
```

{{EmbedLiveSample("Compter à rebours", 300, 305)}}

### Étirer un élément sur la grille

Il est utile de pouvoir accéder aux lignes de début et de fin de la grille, car cela permet d'étirer un élément sur toute la largeur de la grille à l'aide de&nbsp;:

```css
.item {
  grid-column: 1 / -1;
}
```

## Gouttières ou allées

La grille CSS permet d'ajouter des gouttières entre les pistes de colonnes et de lignes à l'aide des propriétés {{CSSxRef("column-gap")}} et {{CSSxRef("row-gap")}}, ou de la syntaxe raccourcie {{CSSxRef("gap")}}.

Les gouttières n'apparaissent qu'entre les pistes de la grille, ils n'ajoutent pas d'espace en haut, en bas, à gauche ou à droite du conteneur. Nous pouvons ajouter des gouttières à notre exemple précédent en utilisant ces propriétés sur le conteneur de la grille.

```css hidden
* {
  box-sizing: border-box;
}

.enveloppe {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.enveloppe > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="enveloppe">
  <div class="boite1">Un</div>
  <div class="boite2">Deux</div>
  <div class="boite3">Trois</div>
  <div class="boite4">Quatre</div>
</div>
```

```css
.boite1 {
  grid-column: 1;
  grid-row: 1 / 4;
}
.boite2 {
  grid-column: 3;
  grid-row: 1 / 3;
}
.boite3 {
  grid-column: 2;
  grid-row: 1;
}
.boite4 {
  grid-column: 2 / 4;
  grid-row: 3;
}
.enveloppe {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  column-gap: 20px;
  row-gap: 1em;
}
```

{{EmbedLiveSample("Gouttières ou allées", 300, 335)}}

### Propriétés raccourcies pour les gouttières

Les deux propriétés que nous venons de voir peuvent être synthétisées grâce à la propriété raccourcie {{CSSxRef("gap")}}. Si on fournit une seule valeur, celle-ci s'applique pour les gouttières entre les colonnes et entre les rangées. Avec deux valeurs, la première est utilisée pour `row-gap` et la seconde pour `column-gap`.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 1em 20px;
}
```

En termes de positionnement des éléments par ligne, la gouttière vide donne l'impression que la ligne a gagné en largeur. Tout élément commençant sur cette ligne débute après la gouttière vide et vous ne pouvez ni sélectionner cet gouttière ni y insérer quoi que ce soit. Si vous souhaitez que les gouttières vides se comportent davantage comme des pistes classiques, vous pouvez définir une piste à cet effet.

## Utiliser le mot-clé `span`

En plus d'indiquer la ligne de début et la ligne de fin par leur numéro, vous pouvez définir une ligne de début puis le nombre de pistes que vous souhaitez que la zone occupe en utilisant le mot-clé `span`.

```css hidden
* {
  box-sizing: border-box;
}

.enveloppe {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.enveloppe > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="enveloppe">
  <div class="boite1">Un</div>
  <div class="boite2">Deux</div>
  <div class="boite3">Trois</div>
  <div class="boite4">Quatre</div>
</div>
```

```css
.boite1 {
  grid-column: 1;
  grid-row: 1 / span 3;
}
.boite2 {
  grid-column: 3;
  grid-row: 1 / span 2;
}
.boite3 {
  grid-column: 2;
  grid-row: 1;
}
.boite4 {
  grid-column: 2 / span 2;
  grid-row: 3;
}
```

{{EmbedLiveSample("Utiliser le mot-clé `span`", 300, 305)}}

Vous pouvez également utiliser le mot-clé `span` dans les valeurs des propriétés `grid-row-start`/`grid-row-end` et `grid-column-start`/`grid-column-end`. Les deux exemples suivants créent la même zone de grille. Dans le premier, nous définissons la ligne de début, puis la ligne de fin en définissant que nous voulons que la zone couvre 3 pistes. La zone commence à la ligne 1 et se termine 3 lignes après la ligne 1&nbsp;; c'est-à-dire que la zone se termine à la ligne 4.

```css
.boite1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 3;
}
```

Dans le deuxième exemple, nous définissons la ligne de fin que nous voulons que l'élément atteigne, puis nous définissons la ligne de début comme `span 3`. Cela signifie que l'élément doit s'étendre vers le haut à partir de la ligne de la grille définie. La zone commence à la ligne 4 et s'étend sur 3 lignes jusqu'à la ligne 1.

```css
.boite1 {
  grid-column-start: 1;
  grid-row-start: span 3;
  grid-row-end: 4;
}
```

Pour se familiariser avec le positionnement basé sur les lignes dans une grille, essayez de construire quelques mises en page courantes en plaçant des éléments sur des grilles avec un nombre variable de colonnes. N'oubliez pas que si vous ne placez pas tous les éléments, les éléments restants sont placés selon les règles de placement automatique. Cela peut donner le résultat souhaité, mais si quelque chose apparaît à un endroit inattendu, vérifiez que vous avez défini une position pour celui-ci.

De plus, rappelez-vous que les éléments sur la grille peuvent se chevaucher lorsque vous les placez explicitement de cette manière. Les éléments qui se chevauchent peuvent créer de jolis effets, mais vous pouvez également vous retrouver avec un chevauchement incorrect si vous définissez la mauvaise ligne de début ou de fin. L'inspection des grilles avec les outils de développement de votre navigateur peut être très utile pour identifier de tels problèmes au fur et à mesure que vous apprenez, surtout si votre grille est assez compliquée.
