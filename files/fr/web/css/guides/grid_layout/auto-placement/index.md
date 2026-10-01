---
title: Le placement automatique dans une disposition en grille
short-title: Utiliser le placement automatique
slug: Web/CSS/Guides/Grid_layout/Auto-placement
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [disposition en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout) contient des règles qui contrôlent ce qui se passe lorsque vous créez une grille et que vous ne placez pas explicitement certains ou tous les éléments enfants dans la grille. Lorsque vous n'avez pas besoin d'un contrôle explicite sur le placement du contenu, ce «&nbsp;placement automatique&nbsp;» est le moyen le plus simple de créer une grille pour un ensemble d'éléments.

## Placement par défaut

Si vous ne fournissez aucune information de placement aux éléments, ils se positionnent automatiquement sur la grille, plaçant un élément de la grille dans chaque cellule de la grille.

```css hidden
body {
  font: 1.2em sans-serif;
}
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
  gap: 10px;
}
```

```html
<div class="enveloppe">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
</div>
```

{{EmbedLiveSample("Placement par défaut")}}

## Les règles par défaut pour le placement automatique

Comme vous pouvez le voir dans l'exemple ci-dessus, si vous créez une grille sans placer d'éléments, les éléments enfants se disposent automatiquement, avec un élément de la grille dans chaque cellule de la grille dans l'ordre du code source. Le flux par défaut consiste à disposer les éléments par ligne. La grille place un élément dans chaque cellule de la première ligne. Si vous avez créé des lignes supplémentaires à l'aide de la propriété {{CSSxRef("grid-template-rows")}}, la grille continue à placer les éléments dans ces lignes. Si la grille ne possède pas suffisamment de lignes dans la [grille explicite](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#grille_implicite_et_grille_explicite) pour placer tous les éléments, de nouvelles lignes _implicites_ sont créées.

### Dimensionner les lignes de la grille implicite

La valeur par défaut pour les lignes créées automatiquement dans la grille implicite est qu'elles soient _dimensionnées automatiquement_. Cela signifie qu'elles s'ajustent pour contenir le contenu ajouté sans provoquer de débordement.

La taille de ces lignes peut être contrôlée à l'aide de la propriété {{CSSxRef("grid-auto-rows")}}. Par exemple, pour que toutes les lignes mesurent 100 pixels de haut, vous pouvez utiliser `grid-auto-rows: 100px;`&nbsp;:

```css hidden
body {
  font: 1.2em sans-serif;
}
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

```html
<div class="enveloppe">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
</div>
```

```css
.enveloppe {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: 100px;
}
```

{{EmbedLiveSample("Dimensionner les lignes de la grille implicite", 500, 230)}}

### Dimensionner les lignes avec `minmax()`

La fonction {{CSSxRef("minmax()")}} permet de créer des lignes qui ont une taille minimale, mais qui peuvent s'agrandir pour s'adapter au contenu si nécessaire lorsqu'elle est utilisée comme valeur de `grid-auto-rows`. En définissant `grid-auto-rows: minmax(100px, auto);`, nous définissons chaque ligne pour qu'elle ait au moins 100px de hauteur, tout en permettant à chaque ligne d'être aussi haute que nécessaire&nbsp;:

```css hidden
body {
  font: 1.2em sans-serif;
}
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

```html
<div class="enveloppe">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>
    Quatre <br />Cette cellule <br />a du contenu <br />supplémentaire <br />et
    max vaut auto <br />afin que la ligne <br />se développe.
  </div>
  <div>Cinq</div>
</div>
```

```css
.enveloppe {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
```

{{EmbedLiveSample("Dimensionner les lignes avec `minmax()`", 500, 320)}}

### Dimensionner les lignes avec une liste de pistes

Vous pouvez également passer une liste de pistes. Cela se répète. La liste de pistes suivante crée une piste de ligne implicite initiale de 100 pixels et une seconde de `200px`. Cela continue tant que du contenu est ajouté à la grille implicite.

```css hidden
body {
  font: 1.2em sans-serif;
}
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

```html
<div class="enveloppe">
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
.enveloppe {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: 100px 200px;
}
```

{{EmbedLiveSample("Dimensionner les lignes avec une liste de pistes", 500, 450)}}

### Le placement automatique avec les colonnes

Vous pouvez également demander à la grille de placer automatiquement les éléments par colonne. Pour ce faire, utilisez la propriété {{CSSxRef("grid-auto-flow")}} avec la valeur `column`. Dans ce cas, la grille ajoute les éléments dans les lignes que vous avez définies à l'aide de {{CSSxRef("grid-template-rows")}}. Lorsqu'une colonne est remplie, la grille passe à la colonne explicite suivante ou crée une nouvelle piste de colonne dans la grille implicite. Comme pour les pistes de ligne implicites, ces pistes de colonne sont dimensionnées automatiquement. Vous pouvez contrôler la taille des pistes de colonne implicites avec {{CSSxRef("grid-auto-columns")}}. Cela fonctionne de la même manière que {{CSSxRef("grid-auto-rows")}}.

Dans cet exemple, nous avons une grille avec trois pistes de ligne de 200 pixels de haut. Nous déclarons `grid-auto-flow: column;` pour que le placement automatique se fasse par colonne. Avec `grid-auto-columns: 300px 100px;`, les colonnes créées alternent entre une largeur de `300px` et `100px` jusqu'à ce qu'il y ait suffisamment de pistes de colonne pour contenir tous les éléments.

```css
.enveloppe {
  display: grid;
  grid-template-rows: repeat(3, 200px);
  gap: 10px;
  grid-auto-flow: column;
  grid-auto-columns: 300px 100px;
}
```

```css hidden
body {
  font: 1.2em sans-serif;
}
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

```html
<div class="enveloppe">
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

{{EmbedLiveSample("Le placement automatique avec les colonnes", 500, 640)}}

## L'ordre des éléments placés automatiquement

Une grille peut contenir un mélange d'éléments placés. Certains éléments peuvent avoir une position spécifiquement définie sur la grille, tandis que d'autres peuvent être placés automatiquement. Si l'ordre des éléments dans le document reflète l'ordre dans lequel ils doivent apparaître sur la grille, il n'est peut-être pas nécessaire d'écrire des règles CSS pour tout positionner. La spécification contient une longue section détaillant [l'algorithme de placement des éléments sur la grille <sup>(angl.)</sup>](https://drafts.csswg.org/css-grid/#auto-placement-algo)&nbsp;; cependant, pour la plupart d'entre nous, il suffit de se rappeler quelques règles pour nos éléments.

### Modification de l'ordre du document

Le placement des éléments qui n'ont pas eu d'ordre défini sont placés selon l'algorithme décrit dans la section «&nbsp;<i lang="en">order modified document order</i>&nbsp;». Cela signifie que si on utilise uniquement la propriété `order`, les éléments sont placés selon cet ordre plutôt que selon l'ordre indiqué par le DOM. Sinon, l'ordre des éléments est celui décrit par le document source.

### Les éléments avec des propriétés de placement

La première chose que fait la grille est de placer tous les éléments qui ont une position. Dans l'exemple ci-dessous, j'ai 12 éléments de grille. L'élément 2 et l'élément 5 ont été placés en utilisant le placement basé sur les lignes sur la grille. Vous pouvez voir comment ces éléments sont placés et comment les autres éléments se placent automatiquement dans les espaces restants. Les éléments placés automatiquement se placent avant les éléments placés dans l'ordre du DOM, ils ne commencent pas après la position d'un élément placé qui les précède.

```css hidden
body {
  font: 1.2em sans-serif;
}
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

```html
<div class="enveloppe">
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
.enveloppe {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  gap: 10px;
}
.enveloppe div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.enveloppe div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample("Les éléments avec des propriétés de placement", 500, 450)}}

### Gérer les éléments qui s'étalent sur plusieurs pistes

Vous pouvez utiliser les propriétés de placement tout en tirant parti du placement automatique. Dans le prochain exemple, on complète la disposition en indiquant que les éléments 1, 5 et 9 (4n+1) doivent occuper deux pistes, pour les colonnes et pour les lignes. Pour obtenir ce résultat, on utilise les propriétés {{CSSxRef("grid-column-end")}} et {{CSSxRef("grid-row-end")}} avec la valeur `span 2`. La ligne de début est déterminée automatiquement et la ligne de fin est deux pistes plus loin.

Vous pouvez voir comment cela laisse alors des espaces dans la grille, car pour les éléments placés automatiquement, si la grille rencontre un élément qui ne rentre pas dans une piste, elle passe à la ligne suivante jusqu'à ce qu'elle trouve un espace dans lequel l'élément peut s'insérer.

```css hidden
body {
  font: 1.2em sans-serif;
}
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

```html
<div class="enveloppe">
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
.enveloppe {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  gap: 10px;
}
.enveloppe div:nth-child(4n + 1) {
  grid-column-end: span 2;
  grid-row-end: span 2;
  background-color: #ffa94d;
}
.enveloppe div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.enveloppe div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample("Gérer les éléments qui s'étalent sur plusieurs pistes", 500, 770)}}

### Combler les espaces

De manière générale, à part les éléments que nous avons placés spécifiquement, la grille progresse toujours vers l'avant et conserve les éléments dans l'ordre du DOM. C'est généralement ce que vous voulez, si vous mettez en page un formulaire par exemple, vous ne voulez pas que les étiquettes et les champs soient mélangés pour combler un espace. Cependant, parfois, nous mettons en page des éléments qui n'ont pas d'ordre logique et nous aimerions créer une disposition qui n'a pas de vides.

Pour ce faire, ajoutez la propriété {{CSSxRef("grid-auto-flow")}} avec la valeur `dense` au conteneur. C'est la même propriété que vous utilisez pour changer l'ordre de flux en `column`, donc si vous travaillez en colonnes, vous ajoutez les deux valeurs `grid-auto-flow: column dense`.

Une fois cela fait, la grille rempli désormais les espaces vides. Au fur et à mesure qu'elle parcourt la grille, elle laisse des espaces comme auparavant, mais si elle trouve un élément qui peut s'insérer dans un espace précédent, elle le récupère et le déplace hors de l'ordre du DOM pour le placer dans l'espace. Comme pour tout autre réarrangement dans la grille, cela ne change pas l'ordre logique. L'ordre de tabulation, par exemple, suit toujours l'ordre du document. Nous examinons les problèmes potentiels d'accessibilité de la mise en page en grille dans le [guide sur la mise en page en grille et l'accessibilité](/fr/docs/Web/CSS/Guides/Grid_layout/Accessibility), mais vous devez faire attention lorsque vous créez cette déconnexion entre l'ordre visuel et l'ordre d'affichage.

```css hidden
body {
  font: 1.2em sans-serif;
}
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

```html
<div class="enveloppe">
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
.enveloppe div:nth-child(4n + 1) {
  grid-column-end: span 2;
  grid-row-end: span 2;
  background-color: #ffa94d;
}
.enveloppe div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.enveloppe div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
.enveloppe {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  gap: 10px;
  grid-auto-flow: dense;
}
```

{{EmbedLiveSample("Combler les espaces", 500, 680)}}

### Les éléments anonymes de la grille

Voici une mention dans la spécification des éléments anonymes de la grille. Ceux-ci sont créés si vous avez une chaîne de caractères à l'intérieur de votre conteneur de grille, qui n'est pas enveloppée dans un autre élément. Dans l'exemple ci-dessous, nous avons trois éléments de la grille, en supposant que vous avez défini le parent avec une classe `grille` à `display: grid`. Le premier est un élément anonyme, car il n'a pas de balisage englobant, cet élément est toujours traité par les règles de placement automatique. Les deux autres sont des éléments de la grille contenus dans une `div`, ils peuvent être placés automatiquement ou vous pouvez les placer avec une méthode de positionnement sur votre grille.

```html
<div class="grille">
  Je suis une chaîne de caractères et je suis placée automatiquement.
  <div>Un élément de la grille</div>
  <div>Un élément de la grille</div>
</div>
```

Les éléments anonymes sont toujours placés automatiquement, car on ne peut pas les cibler autrement. Aussi, si on a du texte sans balise dans la grille, il faut se rappeler que celui-ci peut être placé à un endroit imprévu du fait des règles de placement automatique.

### Cas d'utilisation pour le placement automatique

Le placement automatique peut être utile lorsqu'on a un ensemble d'objets qui se ressemblent. Ce peut être des éléments qui n'ont pas d'ordre logique particulier&nbsp;: une galerie de photos, une liste de produits. Dans ces cas de figure, on peut choisir d'utiliser une disposition dense afin de combler les trous de la grille. Dans l'exemple qui représente la galerie d'images, on a certaines images en paysage et d'autres en portrait (lorsqu'on utilise la classe `landscape` l'élément s'étend sur deux colonnes). On utilise ensuite `grid-auto-flow: dense` afin de créer une grille dense.

Essayez de retirer la ligne `grid-auto-flow: dense` pour voir la réorganisation du contenu et les espaces que cela crée.

```html live-sample___autoplacement
<ul class="enveloppe">
  <li>
    <img
      alt="Une montgolfière colorée contre un ciel dégagé"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </li>
  <li class="landscape">
    <img
      alt="Trois montgolfières contre un ciel dégagé, vues depuis le sol"
      src="https://mdn.github.io/shared-assets/images/examples/balloons-small.jpg" />
  </li>
  <li class="landscape">
    <img
      alt="Trois montgolfières contre un ciel dégagé, vues depuis le sol"
      src="https://mdn.github.io/shared-assets/images/examples/balloons-small.jpg" />
  </li>
  <li class="landscape">
    <img
      alt="Trois montgolfières contre un ciel dégagé, vues depuis le sol"
      src="https://mdn.github.io/shared-assets/images/examples/balloons-small.jpg" />
  </li>
  <li>
    <img
      alt="Une montgolfière colorée contre un ciel dégagé"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </li>
  <li>
    <img
      alt="Une montgolfière colorée contre un ciel dégagé"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </li>
</ul>
```

```css hidden live-sample___autoplacement
body {
  font: 1.2em sans-serif;
}
* {
  box-sizing: border-box;
}

.enveloppe {
  list-style: none;
  margin: 1em auto;
  padding: 0;
  max-width: 800px;
}
.enveloppe li {
  border: 1px solid #cccccc;
}

.enveloppe li img {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
```

```css live-sample___autoplacement
.enveloppe {
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 10px;
  grid-auto-flow: dense;
}

.enveloppe li.landscape {
  grid-column-end: span 2;
}
```

{{EmbedLiveSample("autoplacement", "", 500)}}

Le placement automatique peut également aider lorsqu'on dispose des éléments d'interface sans ordre logique. Dans l'exemple qui suit, on a une liste de définitions. Dans une telle liste, rien ne regroupe particulièrement plusieurs éléments `<dt>` et `<dd>`. Ici, on autorise le placement automatique tout en utilisant des classes pour que les `<dt>` soient dans la colonne 1 et les `<dd>` dans la colonne 2. On s'assure ainsi que les termes et leurs définitions sont bien l'un en face de l'autre, quel que soit le nombre de définitions pour un terme.

```css hidden live-sample___use-cases-for-auto-placement
body {
  font: 1.2em sans-serif;
}
* {
  box-sizing: border-box;
}

.enveloppe {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
```

```html live-sample___use-cases-for-auto-placement
<div class="enveloppe">
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

```css live-sample___use-cases-for-auto-placement
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

{{EmbedLiveSample("use-cases-for-auto-placement", 500, 250)}}

## Qu'est-ce que le placement automatique ne permet pas de réaliser (actuellement) ?

Certaines questions se posent encore. Actuellement on ne peut pas cibler toutes les autres cellules de la grille. On ne peut pas non plus définir une règle pour «&nbsp;placer tous les éléments automatiquement après la prochaine ligne intitulée `n`&nbsp;» (pour que certaines lignes soient sautées). Cette question [est décrite sur le dépôt GitHub du CSSWG <sup>(angl.)</sup>](https://github.com/w3c/csswg-drafts/issues/796), n'hésitez pas à ajouter vos exemples de scénarios.

Si vous rencontrez des cas d'utilisation problématiques avec le placement automatique et les grilles, vous pouvez consulter les problèmes existants et les compléter ou ajouter les vôtres. Cela permet que les prochaines versions de la spécification soient meilleures.
