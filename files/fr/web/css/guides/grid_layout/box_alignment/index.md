---
title: Aligner les éléments dans une disposition de grille CSS
short-title: Aligner les éléments
slug: Web/CSS/Guides/Grid_layout/Box_alignment
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [disposition en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout) implémente [l'alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment), qui est la même norme que [les boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout) utilise pour aligner les éléments dans son conteneur flexible. Le module d'alignement détaille comment l'alignement doit fonctionner dans toutes les méthodes de disposition.

Dans ce guide, nous examinons comment les propriétés d'alignement des boîtes sont utilisées pour aligner les éléments dans une disposition de grille.

Vous pouvez remarquer des similitudes avec la façon dont ces propriétés et valeurs fonctionnent dans les boîtes flexibles. Comme la grille est bidimensionnelle et que la boîte flexible est unidimensionnelle, il existe quelques petites différences auxquelles vous devez faire attention. Pour cette raison, nous commençons par examiner les deux axes que nous utilisons pour aligner les éléments dans une grille.

## Les deux axes d'une grille

Lorsque vous travaillez avec une disposition en grille, vous disposez de deux axes sur lesquels aligner les éléments — _l'axe de bloc_ et _l'axe en incise_. [L'axe de bloc](/fr/docs/Glossary/Flow_relative_values#direction_de_bloc) est l'axe selon lequel les blocs sont disposés dans une disposition en bloc. Si vous avez deux paragraphes sur votre page, ils s'affichent l'un en dessous de l'autre, c'est donc cette direction que nous décrivons comme l'axe de bloc.

![L'axe de bloc est vertical.](block_axis.png)

[L'axe en incise](/fr/docs/Glossary/Flow_relative_values#direction_en_incise) est perpendiculaire à l'axe de bloc, c'est la direction selon laquelle le texte s'écoule dans un flux en incise régulier.

![Les axes en incise / rangée sont horizontaux.](7_inline_axis.png)

Nous pouvons aligner le contenu à l'intérieur des zones de grille, ainsi que les pistes de la grille elles-mêmes sur ces deux axes.

## Aligner des objets sur l'axe de bloc

Les propriétés {{CSSxRef("align-self")}} et {{CSSxRef("align-items")}} permettent de contrôler l'alignement selon l'axe de bloc. Lorsqu'on utilise ces propriétés, on modifie l'alignement de l'objet au sein de la zone de grille sur laquelle il est placé.

### Utiliser `align-items`

Dans l'exemple suivant, nous avons quatre {{Glossary("grid areas", "zones de grille")}} dans notre grille. Nous pouvons utiliser la propriété {{CSSxRef("align-items")}} sur le {{Glossary("grid container", "conteneur de grille")}} pour aligner les éléments en utilisant les valeurs `normal`, `stretch`, ou {{CSSxRef("self-position")}} ou {{CSSxRef("baseline-position")}}&nbsp;:

- `normal`
- `stretch`
- `start`
- `end`
- `center`
- `baseline`
- `first baseline`
- `last baseline`
- `auto` (seulement `align-self`)

La valeur par défaut est `normal`, qui se résout en `stretch` pour les conteneurs de grille.

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
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  grid-auto-rows: 100px;
  grid-template-areas:
    "a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
  align-items: start;
}
.element1 {
  grid-area: a;
}
.element2 {
  grid-area: b;
}
.element3 {
  grid-area: c;
}
.element4 {
  grid-area: d;
}
```

```html
<div class="enveloppe">
  <div class="element1">Élément 1</div>
  <div class="element2">Élément 2</div>
  <div class="element3">Élément 3</div>
  <div class="element4">Élément 4</div>
</div>
```

{{EmbedLiveSample("Utiliser `align-items`", 500, 450)}}

Gardez à l'esprit qu'une fois que vous définissez `align-items: start`, la hauteur de chaque élément enfant `<div>` est déterminée par le contenu de `<div>`. Cela contraste avec l'omission complète de {{CSSxRef("align-items")}}, auquel cas la hauteur de chaque `<div>` s'étire pour remplir sa zone de grille.

La propriété `align-items` définit la valeur de la propriété {{CSSxRef("align-self")}} pour tous les éléments fils de la grille. Cela signifie qu'on peut avoir un réglage plus fin sur chacun des objets de la grille en utilisant `align-self` pour les objets.

### Utiliser `align-self`

Dans l'exemple suivant, nous utilisons la propriété `align-self`, pour illustrer les différentes valeurs d'alignement. La première zone montre le comportement par défaut de `align-self`, qui dans ce cas se résout en `stretch`. Le deuxième élément, possède une valeur `align-self` de `start`, le troisième `end` et le quatrième `center`.

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
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  grid-auto-rows: 100px;
  grid-template-areas:
    "a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
}
.element1 {
  grid-area: a;
}
.element2 {
  grid-area: b;
  align-self: start;
}
.element3 {
  grid-area: c;
  align-self: end;
}
.element4 {
  grid-area: d;
  align-self: center;
}
```

```html
<div class="enveloppe">
  <div class="element1">Élément 1</div>
  <div class="element2">Élément 2</div>
  <div class="element3">Élément 3</div>
  <div class="element4">Élément 4</div>
</div>
```

{{EmbedLiveSample("Utiliser `align-self`", 500, 450)}}

### Gestion des objets avec un rapport intrinsèque

Le comportement par défaut de {{CSSxRef("align-self")}} consiste à hériter de la propriété `align-items` du conteneur de grille, pour laquelle la valeur par défaut `normal` consiste à étirer les éléments, sauf ceux qui possèdent un {{Glossary("aspect ratio", "rapport d'aspect")}} intrinsèque, auquel cas ils se comportent comme `start`. La raison de ce choix, est que si les éléments avec un rapport d'aspect sont étirés, ils se déforment.

## Justifier les objets sur l'axe en incise

Alors que les propriétés `align-items` et `align-self` alignent les éléments sur l'axe de bloc, {{CSSxRef("justify-items")}} et {{CSSxRef("justify-self")}} alignent les éléments sur l'axe incise. Les valeurs disponibles sont similaires à celles de la propriété `align-self` (à savoir `normal`, `stretch`, {{CSSxRef("&lt;self-position&gt;")}} et {{CSSxRef("&lt;baseline-position&gt;")}}), auxquelles s'ajoutent `left` et `right`. Les valeurs incluent&nbsp;:

- `normal`
- `start`
- `end`
- `left`
- `right`
- `center`
- `stretch`
- `baseline`
- `first baseline`
- `last baseline`
- `auto` (`justify-self` only)

Vous pouvez voir le même exemple qu'avec {{CSSxRef("align-items")}}, ci-dessous. Cette fois, nous appliquons la propriété {{CSSxRef("justify-self")}}.

Là encore, la valeur par défaut est `stretch` sauf pour les éléments avec un rapport d'aspect intrinsèque. Cela signifie que, par défaut, les éléments de la grille couvrent leur zone de grille, sauf si vous modifiez l'alignement. Dans cet exemple, le premier élément illustre la valeur d'alignement par défaut `stretch`&nbsp;:

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
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  grid-auto-rows: 100px;
  grid-template-areas:
    "a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
}
.element1 {
  grid-area: a;
}
.element2 {
  grid-area: b;
  justify-self: start;
}
.element3 {
  grid-area: c;
  justify-self: end;
}
.element4 {
  grid-area: d;
  justify-self: center;
}
```

```html
<div class="enveloppe">
  <div class="element1">Élément 1</div>
  <div class="element2">Élément 2</div>
  <div class="element3">Élément 3</div>
  <div class="element4">Élément 4</div>
</div>
```

{{EmbedLiveSample("Justifier les objets sur l'axe en incise", 500, 450)}}

Comme pour `align-self` et `align-items`, vous pouvez appliquer `justify-items` au conteneur de grille pour définir une valeur `justify-self` pour tous les éléments de grille du conteneur.

> [!NOTE]
> Les propriétés `justify-self` et `justify-items` ne sont pas implémentées avec les boîtes flexibles. Cela est dû à la nature unidimensionnelle des [boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout), ainsi qu'au fait que plusieurs éléments peuvent se trouver sur l'axe, ce qui rend impossible la justification d'un seul élément. Pour aligner les éléments sur l'axe principal, l'axe en incise, avec les boîtes flexibles, vous utilisez la propriété {{CSSxRef("justify-content")}}.

### Propriétés raccourcies

La propriété {{CSSxRef("place-items")}} est le raccourci pour `align-items` et `justify-items`.

La propriété {{CSSxRef("place-self")}} est le raccourci pour `align-self` et `justify-self`.

## Centrer un élément dans une zone

En combinant les propriétés `align-*` et `justify-*`, on peut facilement centrer un élément sur sa zone de grille.

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
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-auto-rows: 200px;
  grid-template-areas:
    ". a a ."
    ". a a .";
}
.element1 {
  grid-area: a;
  align-self: center;
  justify-self: center;
}
```

```html
<div class="enveloppe">
  <div class="element1">Élément 1</div>
</div>
```

{{EmbedLiveSample("Centrer un élément dans une zone", 500, 430)}}

## Aligner les pistes d'une grille sur l'axe de bloc

Si vous avez une situation où vos pistes de grille utilisent une zone plus petite que le conteneur de la grille, vous pouvez aligner les pistes de grille elles-mêmes à l'intérieur de ce conteneur. La propriété {{CSSxRef("align-content")}} aligne les pistes sur l'axe de bloc et {{CSSxRef("justify-content")}} aligne sur l'axe en incise. Comme pour les propriétés `*-items` et `*-item`, la propriété {{CSSxRef("place-content")}} est un raccourci pour `align-content` et `justify-content`.

Les valeurs pour `align-content`, `justify-content` et `place-content` incluent toutes les valeurs {{CSSxRef("content-distribution")}} et {{CSSxRef("content-position")}}. La propriété `align-content` accepte également les valeurs {{CSSxRef("baseline-position")}} et, comme les autres propriétés `justify-*`, `justify-content` accepte également `left` et `right`.

Les mots-clés valides pour `place-content` incluent&nbsp;:

- `normal`
- `start`
- `end`
- `center`
- `stretch`
- `space-around`
- `space-between`
- `space-evenly`
- `baseline`
- `first baseline`
- `last baseline`
- `left`
- `right`

La propriété `align-content` s'applique sur le conteneur de la grille, car elle porte sur l'ensemble de la grille.

### Alignement par défaut

Dans cet exemple, le conteneur de grille de 500px sur 500px a trois pistes de lignes et trois pistes de colonnes de 100px avec une gouttière de 10px. Cela signifie qu'il y a de l'espace à l'intérieur du conteneur de la grille dans les directions de bloc et en incise.

Par défaut, nos pistes de grille se trouvent dans le coin supérieur gauche de la grille, alignées sur les lignes de grille de départ, car le comportement par défaut dans la disposition en grille est `start`&nbsp;:

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
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
}
.element1 {
  grid-area: a;
}
.element2 {
  grid-area: b;
}
.element3 {
  grid-area: c;
}
.element4 {
  grid-area: d;
}
```

```html
<div class="enveloppe">
  <div class="element1">Élément 1</div>
  <div class="element2">Élément 2</div>
  <div class="element3">Élément 3</div>
  <div class="element4">Élément 4</div>
</div>
```

{{EmbedLiveSample("Alignement par défaut", 500, 500)}}

### Définir `align-content: end`

Utiliser le même CSS et HTML, dans cet exemple nous ajoutons `align-content` avec une valeur de `end` au conteneur, de sorte que toutes les pistes se déplacent vers la ligne de fin du conteneur de la grille dans la dimension de bloc&nbsp;:

```css
.enveloppe {
  align-content: end;
}
```

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

.enveloppe {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
}
.element1 {
  grid-area: a;
}
.element2 {
  grid-area: b;
}
.element3 {
  grid-area: c;
}
.element4 {
  grid-area: d;
}
```

```html
<div class="enveloppe">
  <div class="element1">Élément 1</div>
  <div class="element2">Élément 2</div>
  <div class="element3">Élément 3</div>
  <div class="element4">Élément 4</div>
</div>
```

{{EmbedLiveSample("Définir `align-content: end`", 500, 500)}}

### Définir `align-content: space-between`

Nous pouvons également appliquer les valeurs de distribution de l'espace {{CSSxRef("content-distribution")}} `space-between`, `space-around`, `space-evenly` et `stretch`. Dans cet exemple, nous définissons {{CSSxRef("align-content")}}, qui aligne les pistes sur l'axe de bloc, sur `space-between`, ce qui espace les pistes&nbsp;:

```css
.enveloppe {
  align-content: space-between;
}
```

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

.enveloppe {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
}
.element1 {
  grid-area: a;
}
.element2 {
  grid-area: b;
}
.element3 {
  grid-area: c;
}
.element4 {
  grid-area: d;
}
```

```html
<div class="enveloppe">
  <div class="element1">Élément 1</div>
  <div class="element2">Élément 2</div>
  <div class="element3">Élément 3</div>
  <div class="element4">Élément 4</div>
</div>
```

{{EmbedLiveSample("Définir `align-content: space-between`", 500, 500)}}

Si un élément s'étend sur plusieurs pistes de la grille, l'utilisation d'une valeur de distribution de l'espace entraîne probablement un agrandissement des éléments de votre grille, car l'espace ajouté entre les pistes est ajouté à l'élément qui s'étend. Par conséquent, si vous utilisez ces valeurs, assurez-vous que le contenu des pistes peut absorber l'espace supplémentaire ou que vous avez utilisé des propriétés d'alignement sur les éléments, afin qu'ils se déplacent vers le début ou la fin plutôt que de s'étirer.

Dans l'image ci-dessous, nous avons placé la grille avec deux valeurs différentes de `align-content` pour comparer `start` et `space-between`. Vous pouvez voir comment les deux premiers éléments, qui s'étendent sur deux pistes de lignes, ont pris de la hauteur supplémentaire dans l'exemple `space-between`, car ils gagnent l'espace qui existe en raison de l'espace libre qui a été distribué _entre_ les trois lignes&nbsp;:

![Démonstration de la façon dont les éléments deviennent plus grands si nous utilisons space-between.](7_space-between.png)

## Justifier les pistes sur l'axe en incise

Nous pouvons utiliser `justify-content` pour effectuer le même type d'alignement sur l'axe en incise que nous avons utilisé `align-content` pour l'axe en bloc.

En utilisant le même exemple, nous définissons {{CSSxRef("justify-content")}} sur `space-around`. Cela provoque une fois de plus que les pistes qui s'étendent sur plus d'une piste de colonne gagnent de l'espace supplémentaire&nbsp;:

```css
.enveloppe {
  align-content: space-between;
  justify-content: space-around;
}
```

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

.enveloppe {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
}
.element1 {
  grid-area: a;
}
.element2 {
  grid-area: b;
}
.element3 {
  grid-area: c;
}
.element4 {
  grid-area: d;
}
```

```html
<div class="enveloppe">
  <div class="element1">Élément 1</div>
  <div class="element2">Élément 2</div>
  <div class="element3">Élément 3</div>
  <div class="element4">Élément 4</div>
</div>
```

{{EmbedLiveSample("Justifier les pistes sur l'axe en incise", 500, 500)}}

## Alignement et marges automatiques

Une autre façon d'aligner les éléments dans leur zone consiste à utiliser des marges automatiques. Si vous avez déjà centré une disposition dans la zone d'affichage, ou tout élément de niveau bloc dans son conteneur, vous l'avez peut-être fait en définissant sur `auto` les marges droite et gauche de l'élément que vous voulez centrer. La marge automatique absorbe tout l'espace disponible. Définir la marge sur `auto` des deux côtés pousse l'élément de niveau bloc au centre, car les deux marges tentent de prendre tout l'espace.

Dans l'exemple suivant, la propriété {{CSSxRef("margin-left")}} de l'élément 1 est définie sur `auto`. Le contenu est ainsi poussé vers le côté droit de la zone, car la marge automatique occupe l'espace disponible restant après l'attribution de l'espace nécessaire au contenu&nbsp;:

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
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
}
.element1 {
  grid-area: a;
  margin-left: auto;
}
.element2 {
  grid-area: b;
}
.element3 {
  grid-area: c;
}
.element4 {
  grid-area: d;
}
```

```html
<div class="enveloppe">
  <div class="element1">Élément 1</div>
  <div class="element2">Élément 2</div>
  <div class="element3">Élément 3</div>
  <div class="element4">Élément 4</div>
</div>
```

{{EmbedLiveSample("Alignement et marges automatiques", 500, 500)}}

Utilisez l'inspecteur de grilles dans les outils de développement de votre navigateur pour voir comment l'élément est aligné&nbsp;:

![Une image montrant les marges automatiques en utilisant le surligneur de grille de Firefox.](7_auto_margins.png)

## L'alignement et les modes d'écriture

Tous ces exemples sont en français, une langue qui s'écrit de gauche à droite. Cela signifie que nos lignes de départ se trouvent en haut et à gauche de notre grille lorsque nous raisonnons en directions physiques.

La disposition en grille CSS et l'alignement des boîtes CSS fonctionnent avec les modes d'écriture en CSS. Lorsqu'une langue qui s'écrit de droite à gauche, comme l'arabe, s'affiche, le début de la grille se trouve en haut à droite, de sorte que la valeur par défaut `justify-content: start` fait commencer les pistes de la grille sur le côté droit de la grille.

Définir des {{Glossary("physical properties", "propriétés physiques")}}, par exemple en définissant des marges automatiques avec {{CSSxRef("margin-right")}} ou {{CSSxRef("margin-left")}}, ou en positionnant des éléments de manière absolue avec les décalages {{CSSxRef("top")}}, {{CSSxRef("right")}}, {{CSSxRef("bottom")}} et {{CSSxRef("left")}}, ne respecte pas les modes d'écriture. Dans le guide [grilles, valeurs logiques et modes d'écriture](/fr/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes), nous examinons plus en détail cette interaction entre la disposition en grille CSS, l'alignement des boîtes et les modes d'écriture. Il est important de la comprendre si vous développez des sites qui s'affichent ensuite dans plusieurs langues ou si vous voulez mélanger des langues ou des modes d'écriture dans une même conception.

## Voir aussi

- [Concepts de base de la disposition en grille](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Relation de la disposition en grille avec les autres méthodes de disposition](/fr/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
- [Disposition en grille fondée sur les lignes](/fr/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Zones de modèle de grille](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- [Disposition en grille utilisant des lignes de grille nommées](/fr/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
- [Placement automatique dans une disposition en grille](/fr/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
- [Alignement des boîtes dans une disposition en grille CSS](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
