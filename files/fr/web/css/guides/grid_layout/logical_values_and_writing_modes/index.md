---
title: Les grilles CSS, les valeurs logiques et les modes d'écriture
slug: Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes
original_slug: Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes
l10n:
  sourceCommit: f224dbe80c60289cd8b7d2bf92871d091e0f5d0d
---

{{CSSRef}}

Dans les articles précédents, nous avons évoqué un aspect important de la disposition en grille&nbsp;: la prise en charge des différents modes d'écriture. Dans ce guide, nous nous intéresserons plus particulièrement à cette fonctionnalité ainsi qu'aux autres méthodes modernes de disposition. Cela sera également l'occasion d'en apprendre plus sur les modes d'écritures et la notion de propriété logique/physique.

## Les propriétés logiques, les propriétés physiques et les valeurs

CSS possède de nombreux mots-clés qui permettent de positionner **physiquement** les éléments&nbsp;: `left`, `right`, `top`, `bottom`… Si on positionne un élément de façon absolue, on utilisera ces mots-clés physiques comme valeurs pour indiquer le décalage de l'élément. Dans le fragment de code suivant, l'élément est décalé de 20 pixels depuis le haut du conteneur et de 30 pixels depuis le bord gauche du conteneur.

```css
.container {
  position: relative;
}
.item {
  position: absolute;
  top: 20px;
  left: 30px;
}
```

```html
<div class="container">
  <div class="item">Item</div>
</div>
```

On rencontre également ces mots-clés physiques avec `text-align: right` afin d'aligner le texte à droite. Il existe aussi des propriétés **physiques** en CSS. On ajoute des marges, du remplissage, des bordures grâces à cs propriétés physiques comme [`margin-left`](/fr/docs/Web/CSS/Reference/Properties/margin-left), [`padding-left`](/fr/docs/Web/CSS/Reference/Properties/padding-left), etc.

On qualifie ces propriétés de physiques, car elles concernent l'écran qu'on regarde&nbsp;: la gauche sera toujours la gauche, quelle que soit la direction du texte.

### Les problèmes des propriétés physiques

Cela peut devenir un problème lorsqu'on développe un site qui doit fonctionner avec plusieurs langues dont certaines sont écrites de droite à gauche et non de gauche à droite. Les navigateurs savent plutôt bien gérer les différentes directions d'écriture. Dans l'exemple qui suit, on a deux paragraphes. Pour le deuxième, aucune propriété [`text-align`](/fr/docs/Web/CSS/Reference/Properties/text-align) n'est utilisée, alors que pour le second, on utilise `text-align` avec `left` et on ajoute `dir="rtl"` sur l'élément HTML ce qui a pour effet de changer la direction d'écriture. On peut voir que, dans le second paragraphe, la direction change et le texte est écrit de droite à gauche. Dans le premier cependant, avec `text-align value: left`, l'alignement reste à gauche.

```html hidden
<p class="left">
  Pour ce paragraphe, on a <code>text-align: left</code>, il sera donc toujours
  aligné à gauche, même si le sens d'écriture du document va de droite à gauche
  (rtl).
</p>

<p>
  Aucun alignement imposé sur ce paragraphe, il suit la direction du document.
</p>
```

```css hidden
body {
  direction: rtl;
}

p {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  margin: 1em;
  color: #d9480f;
}

.left {
  text-align: left;
}
```

{{EmbedLiveSample("","",200)}}

Cela illustre un problème fréquent avec les propriétés et valeurs physiques en CSS&nbsp;: en supposant que le texte est toujours écrit de gauche à droite et de bas en haut, elles empêchent le navigateur de passer correctement d'un mode d'écriture à l'autre.

### Les propriétés et valeurs logiques

Les propriétés et les valeurs logiques n'émettent pas d'hypothèse quant à la direction du texte. C'est pour cette raison, qu'avec les grilles CSS, on utilise le mot-clé `start` lorsqu'on souhaite aligner quelque chose au début du conteneur. Quand on travaille en français ou en anglais, `start` correspondra à la gauche mais ce n'est pas nécessairement toujours le cas, `start` ne correspond pas à une position physique.

## L'axe de bloc et l'axe en ligne

Lorsqu'on commence à travailler avec les propriétés logiques plutôt qu'avec les propriétés physiques, on cesse de voir le monde comme un espace qui va de gauche à droite et de haut en bas. Il faut de nouveaux axes de références&nbsp;: l'axe de bloc (<i lang="en">block axis</i> en anglais) et l'axe en ligne (<i lang="en">inline axis</i> en anglais). Le premier est l'axe orthogonal au sens d'écriture et le second est l'axe dans lequel on écrit. Ces axes _logiques_ sont très utiles et on comprend mieux leurs rôles sur la grille.

![Une image illustrant la direction par défaut pour l'axe de bloc et l'axe en ligne.](8-horizontal-tb.png)

## Les modes d'écriture CSS

Nous allons ici aborder une autre spécification que nous allons utiliser dans nos exemples&nbsp;: la spécification CSS sur les modes d'écriture (<i lang="en">CSS Writing Modes</i>). Cette spécification régit comment les différents modes d'écriture peuvent être utilisés en CSS, pas seulement pour prendre en charge différentes langues mais aussi pour créer des effets artistiques. Nous allons utiliser la propriété [`writing-mode`](/fr/docs/Web/CSS/Reference/Properties/writing-mode) afin de modifier le mode d'écriture appliqué à la grille pour observer comment fonctionnent les valeurs logiques. Si vous souhaitez approfondir ces notions autour des modes d'écriture, vous pouvez consulter [l'article <i lang="en">CSS Writing Modes</i> (en anglais), écrit par Jen Simmons](https://24ways.org/2016/css-writing-modes/).

### `writing-mode`

Les modes d'écriture ne se limitent pas à l'écriture de droite à gauche ou de gauche à droite, la propriété `writing-mode` nous permet d'afficher du texte dans plusieurs directions. La propriété [`writing-mode`](/fr/docs/Web/CSS/Reference/Properties/writing-mode) peut prendre les valeurs suivantes&nbsp;:

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

Sur le Web, c'est la valeur `horizontal-tb` qui est la valeur par défaut pour le texte. C'est dans cette direction que vous lisez cet article. Les autres valeurs changeront la façon dont le texte est écrit sur le document et correspondent aux modes d'écriture utilisés dans d'autres langues. Dans l'exemple qui suit, on a deux paragraphes, le premier utilise la valeur par défaut `horizontal-tb` et le second utilise la valeur `vertical-rl`. Dans ce deuxième mode, le texte est toujours écrit de gauche à droite mais la direction du texte est verticale. Dans ce deuxième paragraphe, l'axe en ligne est donc l'axe vertical.

```css hidden
.wrapper > p {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  margin: 1em;
  color: #d9480f;
  max-width: 300px;
}
```

```html
<div class="wrapper">
  <p style="writing-mode: horizontal-tb">
    Mon mode d'écriture est celui par défaut <code>horizontal-tb</code>
  </p>
  <p style="writing-mode: vertical-rl">
    Moi je suis écrit avec <code>vertical-rl</code>
  </p>
</div>
```

{{EmbedLiveSample("", '500', '420')}}

## La gestion des modes d'écriture avec une grille

Si on reprend l'exemple avec la grille, on comprend mieux l'effet du changement du mode d'écriture qui change les axes logiques.

### Mode d'écriture par défaut

Dans le prochain exemple, la grille possède trois colonnes et deux pistes. Cela signifie qu'il y a trois pistes qui traversent l'axe de bloc. Avec le mode d'écriture par défaut, la grille commence par placer les objets en haut à gauche en remplissant les trois cellules sur la première ligne avant de passer à la suivante, en formant une nouvelle ligne, etc.

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
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  grid-gap: 10px;
}
```

```html
<div class="wrapper">
  <div class="item1">Objet 1</div>
  <div class="item2">Objet 2</div>
  <div class="item3">Objet 3</div>
  <div class="item4">Objet 4</div>
  <div class="item5">Objet 5</div>
</div>
```

{{EmbedLiveSample("", '500', '230')}}

### Définir le mode d'écriture

Si on ajoute `writing-mode: vertical-lr` au conteneur de la grille, on peut voir que les axes logiques s'appliquent désormais dans une autre direction. L'axe de bloc (aussi appelé l'axe des colonnes pour la grille) s'étend maintenant de gauche à droite et l'axe en ligne court verticalement, de haut en bas.

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
  writing-mode: vertical-lr;
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  grid-gap: 10px;
}
```

```html
<div class="wrapper">
  <div class="item1">Objet 1</div>
  <div class="item2">Objet 2</div>
  <div class="item3">Objet 3</div>
  <div class="item4">Objet 4</div>
  <div class="item5">Objet 5</div>
</div>
```

{{EmbedLiveSample("", '500', '330')}}

## L'utilisation de valeurs logiques pour l'alignement

Dans les exemples précédents, on a vu comment les axes de bloc et en ligne pouvaient changer de direction, nous allons voir maintenant comment tirer partir des valeurs logiques des propriétés d'alignement.

Dans le prochain exemple, on aligne des objets dans une grille pour laquelle `writing-mode: vertical-lr`. Les valeurs `start` et `end` fonctionnent de la même façon qu'avec le mode d'écriture par défaut mais, parce qu'elles sont logiques, on voit que la grille est bien renversée.

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
  writing-mode: vertical-lr;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-gap: 10px;
}

.item1 {
  grid-column: 1 / 4;
  align-self: start;
}

.item2 {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
  align-self: start;
}

.item3 {
  grid-column: 3;
  grid-row: 2 / 4;
  align-self: end;
  justify-self: end;
}
```

```html
<div class="wrapper">
  <div class="item1">Objet 1</div>
  <div class="item2">Objet 2</div>
  <div class="item3">Objet 3</div>
</div>
```

{{EmbedLiveSample("", '500', '240')}}

Si vous souhaitez voir l'effet obtenu avec une écriture verticale de haut en bas et de droite à gauche, il suffit de passer de `vertical-lr` à `vertical-rl` pour changer de mode d'écriture.

## Le placement automatique et les modes d'écriture

On a vu dans l'exemple précédent que lorsqu'on changeait de mode d'écriture, cela changeait également la direction selon laquelle les éléments étaient placés sur la grille. Par défaut, les éléments sont placés en progressant sur l'axe en ligne, jusqu'à la fin de la ligne, une nouvelle ligne est ensuite créée si besoin, mais cette ligne ne progresse pas nécessairement de gauche à droite.

## Le placement sur les lignes et les modes d'écriture

Il faut garder à l'esprit que lorsqu'on place des objets sur les lignes, la ligne 1 sera toujours la ligne de départ, quel que soit le mode d'écriture et la ligne -1 sera toujours la ligne de fin.

### Placement sur les lignes pour du texte de gauche à droite

Dans l'exemple suivant, on a une grille avec la direction `ltr` et on positionne trois objets en utilisant le placement sur les lignes.

- L'objet 1 commence à la ligne verticale 1 et occupe une piste
- L'objet 2 commence à la ligne verticale -1 (le bord tout à droite) et s'étend jusqu'à la ligne verticale -3
- L'objet 3 commence à la ligne verticale 1 et s'étend jusqu'à la troisième ligne verticale.

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
  grid-template-rows: repeat(2, 100px);
  grid-gap: 10px;
}
.item1 {
  grid-column: 1;
}
.item2 {
  grid-column: -1 / -3;
}
.item3 {
  grid-column: 1 / 3;
  grid-row: 2;
}
```

```html
<div class="wrapper">
  <div class="item1">Objet 1</div>
  <div class="item2">Objet 2</div>
  <div class="item3">Objet 3</div>
</div>
```

{{EmbedLiveSample("", '500', '240')}}

### Placement sur les lignes pour du texte de droite à gauche

Si on ajoute alors la propriété [`direction`](/fr/docs/Web/CSS/Reference/Properties/direction) avec la valeur `rtl` pour le conteneur de la grille, la colonne 1 sera la plus à droite et la colonne -1 sera à gauche.

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
  direction: rtl;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  grid-gap: 10px;
}
.item1 {
  grid-column: 1;
}
.item2 {
  grid-column: -1 / -3;
}
.item3 {
  grid-column: 1 / 3;
  grid-row: 2;
}
```

```html
<div class="wrapper">
  <div class="item1">Objet 1</div>
  <div class="item2">Objet 2</div>
  <div class="item3">Objet 3</div>
</div>
```

{{EmbedLiveSample("", '500', '240')}}

On voit ici que si on change la direction du texte pour la page ou pour une partie de la page, la disposition change selon les numéros de lignes. Si on ne veut pas que les lignes bougent, on pourra utiliser des lignes nommées pour éviter cet effet.

### L'étrange ordre des valeurs pour `grid-area`

La propriété [`grid-area`](/fr/docs/Web/CSS/Reference/Properties/grid-area) permet d'indiquer les quatre lignes qui définissent une zone. Lorsqu'on apprend à utiliser cette propriété, on se surprend à voir que les quatre valeurs ne suivent pas le même ordre que celui utilisé par les propriétés raccourcies pour les marges (pour celles-ci, les valeurs suivent le sens horaire&nbsp;: haut, droit, bas, gauche).

Pour les valeurs de `grid-area`, l'ordre est le suivant&nbsp;:

- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

Si on transpose ces valeurs à un système d'écriture de gauche à droite, cela correspond aux valeurs physiques suivantes&nbsp;:

- `top`
- `left`
- `bottom`
- `right`

Ce qui correspond… au sens anti-horaire&nbsp;! L'ordre est l'inverse de celui utilisé pour les marges et le remplissage (<i lang="en">padding</i>). Pour comprendre, mieux vaut voir la propriété `grid-area` comme une propriété logique qui fonctionne selon les axes de bloc et en ligne&nbsp;: on commence donc avec les deux lignes de départ puis les deux lignes d'arrivée. Cet ordre est plus «&nbsp;logique&nbsp;»&nbsp;!

## Utiliser des modes d'écriture hybrides et les grilles CSS

Les modes d'écritures permettent d'afficher les documents en respectant les règles d'affichage de la langue utilisé. On peut également les utiliser afin de créer des effets stylistiques. Dans l'exemple ci-après, on a une grille avec du texte et des liens qui seront affichés verticalement, à côté du texte.

```css
.wrapper {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr auto;
  font:
    1em Helvetica,
    Arial,
    sans-serif;
}
.wrapper nav {
  writing-mode: vertical-lr;
}
.wrapper ul {
  list-style: none;
  margin: 0;
  padding: 1em;
  display: flex;
  justify-content: space-between;
}
.wrapper a {
  text-decoration: none;
}
```

```html
<div class="wrapper">
  <div class="content">
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo
      shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.
      Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi
      beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki
      bean chickweed potato bell pepper artichoke.
    </p>
    <p>
      Nori grape silver beet broccoli kombu beet greens fava bean potato
      quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
      turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter
      purslane fennel azuki bean earthnut pea sierra leone bologi leek soko
      chicory celtuce parsley jícama salsify.
    </p>
  </div>
  <nav>
    <ul>
      <li><a href="">Lien 1</a></li>
      <li><a href="">Lien 2</a></li>
      <li><a href="">Lien 3</a></li>
    </ul>
  </nav>
</div>
```

{{EmbedLiveSample("", '500', '280')}}

## Les valeurs physiques et les grilles CSS

On rencontre souvent les propriétés physiques lorsqu'on construit un site web et, bien que la grille et les propriétés logiques permettent de respecter les modes d'écriture, il existe certains effets qui ne peuvent être obtenus qu'avec des propriétés et des valeurs physiques. Dans le guide sur [l'alignement des boîtes et les grilles](/fr/docs/Web/CSS/Guides/Grid_layout/Box_alignment), nous avons vu comment utiliser les marges automatiques sur les zones d'une grille. Utiliser les marges automatiques pour contraindre le placement d'un élément est une astuce qu'on rencontre aussi avec les boîtes flexibles mais cela couple la disposition avec l'espace physique.

Si on utilise le positionnement absolu dans une zone d'une grille, là encore, on utilisera des décalages physiques pour décaler l'élément au sein de la zone. Dans ces cas, il faut être conscient du couplage qu'on ajoute avec l'espace physique et comprendre qu'il faudra adapter la feuille de style si on veut par exemple passer d'un mode `ltr` à un mode `rtl`.

### Utiliser les propriétés logiques partout

Les nouvelles méthodes de disposition, comme les grilles, permettent d'employer les valeurs logiques afin de placer les éléments. Cependant, dès qu'on combine ces valeurs avec des propriétés physiques, il faut maintenir ces dernières lorsque le mode d'écriture change.

La [spécification sur les propriétés logiques en CSS](https://drafts.csswg.org/css-logical-props/) vise à résoudre ce problème en fournissant [des équivalents logiques](/fr/docs/Web/CSS/Guides/Logical_properties_and_values) pour chacune des propriétés physiques telles que [`margin-left`](/fr/docs/Web/CSS/Reference/Properties/margin-left) et [`margin-right`](/fr/docs/Web/CSS/Reference/Properties/margin-right). Ces propriétés et valeurs sont bien prises en charge par les navigateurs récents. En utilisant les grilles et en manipulant l'axe de bloc et l'axe de ligne, cela vous aidera à comprendre le fonctionnement de ces propriétés logiques.
