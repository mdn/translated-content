---
title: Les concepts de base pour flexbox
short-title: Concepts de base
slug: Web/CSS/Guides/Flexible_box_layout/Basic_concepts
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Le module [des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout) (aussi appelé «&nbsp;<i lang="en">flexbox</i>&nbsp;» en anglais), a été conçu comme un modèle de disposition unidimensionnel et comme une méthode permettant de distribuer l'espace entre des objets d'une interface ainsi que de les aligner. Dans cet article, nous verrons les fonctionnalités principales des <i lang="en">flexbox</i> que nous approfondirons ensuite dans d'autres articles.

Lorsqu'on décrit les boîtes flexibles comme une méthode de disposition unidimensionnelle, on indique en fait que les <i lang="en">flexbox</i> gèrent une seule dimension à la fois — une ligne ou une colonne. Ce modèle est à comparer au modèle bidimensionnel de [la disposition en grille (CSS Grid)](/fr/docs/Web/CSS/Guides/Grid_layout) qui contrôle à la fois les colonnes et les lignes.

## Les deux axes des boîtes flexibles

Lorsqu'on travaille avec les boîtes flexibles, deux axes interviennent — [l'axe principal](#laxe_principal) (<i lang="en">main axis</i> en anglais) et l'axe secondaire (_cross axis_ en anglais). L'axe principal est défini par la propriété {{CSSxRef("flex-direction")}} et l'axe secondaire est l'axe qui lui est perpendiculaire. Tout ce que nous manipulons avec les boîtes flexibles fera référence à ces axes.

### L'axe principal

L'{{Glossary("main axis", "axe principal")}} est défini par la propriété `flex-direction` qui peut prendre quatre valeurs&nbsp;:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Si on choisit la valeur `row` ou `row-reverse`, l'axe principal sera aligné avec la **direction en ligne** (<i lang="en">inline direction</i> en anglais).

![Si flex-direction est réglé sur row, l'axe principal suit la ligne dans la direction en ligne.](basics1.svg)

Si on choisit la valeur `column` ou `column-reverse`, l'axe principal suivra la **direction de bloc** (<i lang="en">block direction</i> en anglais) et progressera le long de l'axe perpendiculaire au sens d'écriture.

![Si flex-direction est réglé sur column, l'axe principal suit la direction de bloc.](basics2.svg)

### L'axe secondaire (_cross axis_)

L'axe secondaire est perpendiculaire à l'axe principal. Ainsi, si `flex-direction` vaut `row` ou `row-reverse`, l'axe secondaire suivra l'axe des colonnes.

![Si flex-direction est réglé sur row, l'axe secondaire suit la direction de bloc.](basics3.svg)

Si l'axe principal est `column` ou `column-reverse`, l'axe secondaire suivra celui des lignes (horizontales).

![Si flex-direction est réglé sur column, l'axe secondaire suit la direction en ligne.](basics4.svg)

## Les lignes de début et de fin

Un autre point essentiel à comprendre est que <i lang="en">flexbox</i> ne fait aucune supposition sur le mode d'écriture du document. <i lang="en">Flexbox</i> ne part pas du principe que toutes les lignes de texte commencent en haut à gauche d'un document et se dirigent vers la droite, avec de nouvelles lignes apparaissant les unes sous les autres. Au contraire, il prend en charge tous les modes d'écriture, comme les autres [propriétés et valeurs logiques](/fr/docs/Web/CSS/Guides/Logical_properties_and_values).

Vous pouvez [en savoir plus sur la relation entre les boîtes flexibles et les modes d'écriture](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods#les_modes_décritures_writing_modes) dans un article ultérieur&nbsp;; cependant, la description suivante devrait aider à comprendre pourquoi nous ne parlons pas de gauche et de droite ni de haut et de bas lorsque nous décrivons la direction dans laquelle nos éléments flexibles s'organisent.

Si `flex-direction` vaut `row` et que nous travaillons sur un document écrit en français, la ligne de début de l'axe principal sera située à gauche et la ligne de fin sera située à droite.

![Travailler en français, la ligne de début est à gauche.](basics5.svg)

Si on travaille sur un document écrit dans une langue arabe, la ligne de début de l'axe principal sera à droite et la ligne de fin à gauche.

![La ligne de début dans une langue RTL est à droite.](basics6.svg)

Dans les deux cas, la ligne de début de l'axe secondaire est située en haut et la ligne de fin de cet axe est située en bas, car ces deux langues sont écrites horizontalement.

Nous verrons qu'au fur et à mesure, il devient naturel de parler de début et de fin plutôt que de gauche et de droite. De plus, ce niveau d'abstraction sera utile pour comprendre d'autres méthodes de disposition comme les grilles CSS, car il y est également utilisé.

## Le conteneur flexible

Une zone d'un document qui est disposée à l'aide de <i lang="en">flexbox</i> est appelée un **conteneur flexible**. Pour créer un {{Glossary("flex container", "conteneur flexible")}}, définissez la propriété {{CSSxRef("display")}} de la zone à `flex`. Lorsque nous faisons cela, les enfants directs de ce conteneur deviennent des **éléments flexibles**. Vous pouvez contrôler explicitement si le conteneur lui-même est affiché en contexte en ligne ou en contexte de formatage en bloc en utilisant `inline flex` ou `inline-flex` pour les conteneurs flexibles en ligne ou `block flex` ou `flex` pour les conteneurs flexibles de niveau bloc.

### Valeurs initiales

Comme pour toutes les propriétés en CSS, certaines valeurs initiales sont définies, donc le contenu d'un nouveau conteneur flexible se comportera de la façon suivante&nbsp;:

- Les éléments s'affichent en ligne (la valeur par défaut de la propriété {{CSSxRef("flex-direction")}} est `row`).
- Les éléments commencent à partir du bord de début de l'axe principal.
- Les éléments ne s'étirent pas sur la dimension principale mais peuvent rétrécir (la valeur par défaut de la propriété {{CSSxRef("flex-grow")}} d'un élément flexible est `0` et celle de {{CSSxRef("flex-shrink")}} est `1`).
- Les éléments s'étirent pour remplir la taille de l'axe secondaire (la valeur par défaut de la propriété {{CSSxRef("align-items")}} est `stretch`).
- La valeur par défaut de la propriété {{CSSxRef("flex-basis")}} d'un élément flexible est `auto`. Cela signifie que, dans chaque cas, elle sera égale à la propriété {{CSSxRef("width")}} de l'élément flexible en mode d'écriture horizontal, et à la propriété {{CSSxRef("height")}} de l'élément flexible en mode d'écriture vertical. Si la propriété `width`/`height` correspondante est également définie sur `auto`, la valeur `content` de `flex-basis` est utilisée à la place.
- Tous les éléments seront sur une seule ligne (la valeur par défaut de la propriété {{CSSxRef("flex-wrap")}} est `nowrap`), débordant de leur conteneur si la somme de leur `width`/`height` dépasse la `width`/`height` de l'élément contenant.

Autrement dit, tous les éléments formeront une ligne en utilisant la taille de leur contenu. S'il y a plus d'éléments que le conteneur peut en contenir, ils ne formeront pas une nouvelle ligne mais dépasseront du conteneur. Si certains éléments sont plus grands (selon l'axe secondaire) que d'autres, tous les éléments s'étireront sur l'axe secondaire afin d'avoir la plus grande taille.

Vous pouvez voir dans l'exemple interactif ci-dessous à quoi cela ressemble. Cliquez sur «&nbsp;Exécuter&nbsp;» pour ouvrir l'exemple dans le MDN Playground et modifier les éléments ou en ajouter de nouveaux pour tester le comportement initial de <i lang="en">flexbox</i>&nbsp;:

```html live-sample___the-flex-container
<div class="box">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois <br />a <br />du <br />texte <br />supplémentaire</div>
</div>
```

```css live-sample___the-flex-container
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
}
```

{{EmbedLiveSample("the-flex-container")}}

### Modifier `flex-direction`

L'ajout de la propriété {{CSSxRef("flex-direction")}} au conteneur flexible nous permet de changer la direction dans laquelle nos éléments flexibles s'affichent. Définir `flex-direction: row-reverse` maintiendra les éléments affichés le long de la ligne, cependant les lignes de début et de fin sont inversées.

Si nous changeons `flex-direction` en `column`, l'axe principal change et nos éléments s'affichent maintenant en colonne. Définissez `column-reverse` et les lignes de début et de fin sont à nouveau inversées.

L'exemple interactif ci-dessous a `flex-direction` défini sur `row-reverse`. Essayez les autres valeurs — `row`, `column` et `column-reverse` — pour voir ce qui arrive au contenu.

```html live-sample___flex-direction
<div class="box">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
</div>
```

```css live-sample___flex-direction
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-direction: row-reverse;
}
```

{{EmbedLiveSample("flex-direction")}}

## Créer un conteneur flexible sur plusieurs lignes avec `flex-wrap`

Bien que <i lang="en">flexbox</i> soit un modèle unidimensionnel, il est possible de faire passer les éléments flexibles sur plusieurs lignes. Si vous faites cela, vous devez considérer chaque ligne comme un nouveau conteneur flexible. Toute distribution d'espace se produira sur chaque ligne, sans référence aux lignes précédentes ou suivantes.

Pour obtenir ce comportement de passage à la ligne, ajoutez la propriété {{CSSxRef("flex-wrap")}} avec la valeur `wrap`. Désormais, si vos éléments sont trop grands pour être tous affichés sur une seule ligne, ils passeront à la ligne suivante. L'exemple interactif ci-dessous contient des éléments auxquels une `width` a été attribuée. La largeur totale des éléments est trop grande pour le conteneur flexible. Comme `flex-wrap` est défini sur `wrap`, les éléments passent sur plusieurs lignes. Si vous le définissez sur `nowrap`, qui est la valeur initiale, ils rétréciront pour s'adapter au conteneur. Ils rétrécissent, car ils utilisent les valeurs initiales de <i lang="en">flexbox</i>, y compris `flex-shrink: 1`, qui permet aux éléments de rétrécir. Utiliser `nowrap` provoquerait un [dépassement](/fr/docs/Learn_web_development/Core/Styling_basics/Overflow) si les éléments ne pouvaient pas rétrécir, ou ne pouvaient pas rétrécir suffisamment pour tenir.

```html live-sample___flex-wrap
<div class="box">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
</div>
```

```css live-sample___flex-wrap
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  width: 200px;
}

.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
}
```

{{EmbedLiveSample("flex-wrap")}}

Pour approfondir ces notions, vous pouvez consulter l'article [Maîtriser le passage à la ligne des éléments flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items).

## La propriété raccourcie `flex-flow`

Vous pouvez combiner les deux propriétés `flex-direction` et `flex-wrap` dans la propriété raccourcie {{CSSxRef("flex-flow")}}.

Dans l'exemple interactif ci-dessous, essayez de changer la première valeur pour l'une des valeurs autorisées pour `flex-direction` — `row`, `row-reverse`, `column` ou `column-reverse`, et changez aussi la seconde pour `wrap` et `nowrap`.

```html live-sample___flex-flow
<div class="box">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
</div>
```

```css live-sample___flex-flow
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  width: 200px;
}

.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-flow: row wrap;
}
```

{{EmbedLiveSample("flex-flow")}}

## Les propriétés appliquées aux éléments flexibles

Pour mieux contrôler les éléments flexibles, on peut les cibler directement avec trois propriétés&nbsp;:

- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
- {{CSSxRef("flex-basis")}}

Nous verrons ici un rapide aperçu de ces propriétés que nous approfondirons dans l'article [Contrôler les proportions des éléments flexibles le long de l'axe principal](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios).

Avant de revenir à ces propriétés, il nous faut définir le concept d'**espace disponible**. Lorsque nous modifierons l'une de ces propriétés, cela modifiera la façon dont l'espace disponible est distribué parmi les éléments. Ce concept est également important lorsqu'on aligne les éléments.

Prenons un conteneur de 500 pixels de large et qui contient trois éléments de 100 pixels de large. Il faut donc 300 pixels pour disposer ces éléments et il reste ainsi 200 pixels d'espace disponible. Si on ne modifie pas les valeurs initiales, l'espace disponible sera placé après le dernier élément.

![Ce conteneur flexible a de l'espace disponible après avoir disposé les éléments.](basics7.svg)

Si on préfère que les éléments s'étirent pour occuper l'espace restant, il nous faut une méthode pour distribuer cet espace parmi les éléments. C'est le rôle des propriétés `flex-` qui s'appliquent aux éléments.

### La propriété `flex-basis`

La propriété `flex-basis` définit la taille de l'élément en termes d'espace occupé. La valeur initiale de cette propriété est `auto` — dans ce cas, le navigateur analyse si les éléments ont une taille. Dans l'exemple précédent, les éléments mesurent 100 pixels de large et c'est donc cette mesure qui est utilisée pour `flex-basis`.

Si les éléments n'ont pas de taille définie, c'est la taille du contenu qui est utilisée comme base. C'est pour ça que nous avons simplement déclaré `display: flex` sur l'élément parent afin de créer des éléments flexibles (qui prennent alors tout l'espace nécessaire à leur contenu).

### La propriété `flex-grow`

Lorsque la propriété `flex-grow` est définie sur un entier positif, s'il y a de l'espace disponible, l'élément flexible peut grandir le long de l'axe principal à partir de sa valeur `flex-basis`. Le fait que l'élément s'étire pour occuper tout l'espace disponible sur cet axe, ou seulement une partie de l'espace disponible, dépend si les autres éléments sont également autorisés à grandir et de la valeur de leur propriété `flex-grow`.

Chaque élément avec une valeur positive consomme une portion de l'espace disponible en fonction de sa valeur `flex-grow`. Si nous donnons à tous nos éléments dans l'exemple ci-dessus une valeur `flex-grow` de 1, alors l'espace disponible dans le conteneur flexible serait partagé également entre nos éléments et ils s'étireraient pour remplir le conteneur sur l'axe principal. Si nous donnons à notre premier élément une valeur `flex-grow` de 2, et aux autres éléments une valeur de 1 chacun, il y a un total de 4 parts&nbsp;; 2 parts de l'espace disponible seront données au premier élément (100px sur 200px dans le cas de l'exemple ci-dessus) et 1 part à chacun des deux autres (50px chacun sur les 200px au total).

### La propriété `flex-shrink`

Alors que la propriété `flex-grow` gère l'ajout d'espace sur l'axe principal, la propriété `flex-shrink` contrôle la façon dont il est retiré. Si nous n'avons pas assez d'espace dans le conteneur pour disposer nos éléments, et que `flex-shrink` est défini sur un entier positif, alors l'élément peut devenir plus petit que le `flex-basis`. Comme pour `flex-grow`, différentes valeurs peuvent être attribuées afin de faire rétrécir un élément plus rapidement que d'autres — un élément avec une valeur plus élevée pour `flex-shrink` rétrécira plus vite que ses frères et sœurs ayant des valeurs plus faibles.

Un élément peut rétrécir jusqu'à sa taille {{CSSxRef("min-content")}}. Cette taille minimale est prise en compte lors du calcul de la quantité réelle de rétrécissement qui aura lieu, ce qui signifie que `flex-shrink` peut sembler moins cohérent que `flex-grow` dans son comportement. Nous examinerons donc plus en détail le fonctionnement de cet algorithme dans l'article [Contrôler les proportions des éléments le long de l'axe principal](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios).

> [!NOTE]
> Ces valeurs pour `flex-grow` et `flex-shrink` sont des proportions. Typiquement, si nous avions tous nos éléments définis sur `flex: 1 1 200px` et que nous voulions qu'un élément grandisse deux fois plus vite, nous définirions cet élément sur `flex: 2 1 200px`. Cependant, vous pourriez aussi utiliser `flex: 10 1 200px` et `flex: 20 1 200px` si vous le souhaitiez.

### La propriété raccourcie `flex` et les valeurs synthétiques

On voit rarement `flex-grow`, `flex-shrink` et `flex-basis` utilisées individuellement&nbsp;; mais plutôt combinées avec la propriété raccourcie {{CSSxRef("flex")}}. La propriété raccourcie `flex` permet de définir les valeurs de cette propriété dans cet ordre — `flex-grow`, `flex-shrink`, `flex-basis`.

L'exemple interactif ci-dessous vous permet de tester les différentes valeurs de la propriété raccourcie flex&nbsp;; rappelez-vous que la première valeur est `flex-grow`. Lui donner une valeur positive signifie que l'élément peut grandir. La seconde est `flex-shrink` — avec une valeur positive, les éléments peuvent rétrécir, mais seulement si leurs valeurs totales dépassent l'axe principal. La dernière valeur est `flex-basis`&nbsp;; c'est la valeur que les éléments utilisent comme valeur de base pour grandir et rétrécir.

```html live-sample___flex-properties
<div class="box">
  <div class="one">Un</div>
  <div class="two">Deux</div>
  <div class="three">Trois</div>
</div>
```

```css live-sample___flex-properties
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
}

.one {
  flex: 1 1 auto;
}

.two {
  flex: 1 1 auto;
}

.three {
  flex: 1 1 auto;
}
```

{{EmbedLiveSample("flex-properties")}}

Cette propriété permet également d'utiliser des valeurs synthétiques qui couvrent la majorité des scénarios. Vous verrez souvent ces valeurs utilisées dans les tutoriels et, dans de nombreux cas, celles-ci suffiront&nbsp;:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

La valeur `initial` est un [mot-clé global CSS](/fr/docs/Web/CSS/Reference/Values/Data_types#mots-clés_globaux_css) qui représente la valeur initiale d'une propriété. Définir `flex: initial` réinitialise l'élément aux [valeurs initiales](#valeurs_initiales) des trois propriétés longues, ce qui est équivalent à `flex: 0 1 auto`. La valeur initiale de `flex-grow` est `0`, donc les éléments ne grandiront pas au-delà de leur taille `flex-basis`. La valeur initiale de `flex-shrink` est `1`, donc les éléments peuvent rétrécir si besoin plutôt que de dépasser. La valeur initiale de `flex-basis` est `auto`. Les éléments utiliseront soit toute taille définie sur l'élément dans la dimension principale, soit ils obtiendront leur taille à partir de la taille du contenu.

Utiliser `flex: auto` revient à utiliser `flex: 1 1 auto`&nbsp;; c'est similaire à `flex: initial`, sauf que les éléments peuvent grandir et remplir le conteneur ainsi que rétrécir si besoin.

Utiliser `flex: none` créera des éléments flexibles totalement inflexibles. C'est comme si vous écriviez `flex: 0 0 auto`. Les éléments ne peuvent ni grandir ni rétrécir et seront disposés avec <i lang="en">flexbox</i> avec un `flex-basis` de `auto`.

La propriété raccourcie que vous voyez souvent dans les tutoriels est `flex: 1` ou `flex: 2`, etc. Cela revient à écrire respectivement `flex: 1 1 0` ou `flex: 2 1 0`, etc. Les éléments obtiennent une taille minimale grâce à `flex-basis: 0` puis grandissent proportionnellement pour occuper l'espace disponible. Dans ce cas, la valeur `flex-shrink` de `1` est redondante car les éléments commencent avec une taille minimale — aucune taille ne leur est attribuée qui pourrait les faire dépasser du conteneur flexible.

Essayez ces valeurs raccourcies dans l'exemple interactif ci-dessous.

```html live-sample___flex-shorthands
<div class="box">
  <div class="one">Un</div>
  <div class="two">Deux</div>
  <div class="three">Trois</div>
</div>
```

```css live-sample___flex-shorthands
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
}

.one {
  flex: 1;
}

.two {
  flex: 1;
}

.three {
  flex: 1;
}
```

{{EmbedLiveSample("flex-shorthands")}}

## Alignement, justification et distribution de l'espace disponible entre les éléments

Une fonctionnalité majeure des boîtes flexibles est de permettre l'alignement et la justification des éléments le long des axes principal et secondaire tout en distribuant l'espace entre les éléments flexibles.

### `align-items`

La propriété {{CSSxRef("align-items")}} permet d'aligner les éléments le long de l'axe secondaire.

La valeur initiale de cette propriété est `stretch`, ce qui explique pourquoi, par défaut, les éléments flexibles sont étirés à la hauteur du conteneur flexible (ou à la largeur si `flex-direction` est défini sur `column` ou `column-reverse`). Cette hauteur peut provenir de l'élément le plus haut du conteneur ou de la taille définie sur le conteneur flexible lui-même.

Vous pouvez à la place définir `align-items` sur `flex-start`, ou simplement `start`, afin d'aligner les éléments au début du conteneur flexible, `flex-end`, ou simplement `end`, pour les aligner à la fin, ou `center` pour les aligner au centre. Essayez cela dans l'exemple interactif — j'ai donné une hauteur au conteneur flexible afin que vous puissiez voir comment les éléments peuvent être déplacés à l'intérieur du conteneur. Voyez ce qui se passe si vous définissez la valeur de `align-items` sur&nbsp;:

- `stretch`
- `flex-start`
- `flex-end`
- `start`
- `end`
- `center`
- `baseline`
- `last baseline`

```html live-sample___align-items
<div class="box">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois <br />a <br />du <br />texte <br />supplémentaire</div>
</div>
```

```css live-sample___align-items
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  width: 500px;
  height: 130px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: flex-start;
}
```

{{EmbedLiveSample("align-items")}}

La propriété `align-items` est définie sur le conteneur flexible et impacte tous les éléments flexibles. Si vous souhaitez aligner un élément flexible différemment des autres, vous pouvez définir la propriété {{CSSxRef("align-self")}} sur l'élément flexible.

### `justify-content`

La propriété {{CSSxRef("justify-content")}} est utilisée pour aligner les éléments sur l'axe principal, la direction dans laquelle `flex-direction` a défini le flux. La valeur initiale est `flex-start`, ce qui aligne les éléments sur le bord de début du conteneur, mais vous pouvez aussi définir la valeur sur `flex-end` pour les aligner à la fin, ou `center` pour les aligner au centre.

Vous pouvez aussi utiliser la valeur `space-between` pour répartir tout l'espace restant après la disposition des éléments, et le partager également entre les éléments afin qu'il y ait un espace égal entre chaque élément. Pour obtenir un espace égal à droite et à gauche (ou en haut et en bas pour les colonnes) de chaque élément, utilisez la valeur `space-around`. Avec `space-around`, les éléments ont un espace de demi-taille à chaque extrémité. Ou, pour que les éléments aient un espace égal autour d'eux, utilisez la valeur `space-evenly`. Avec `space-evenly`, les éléments ont un espace de taille entière à chaque extrémité.

Essayez les valeurs suivantes de `justify-content` dans l'exemple interactif&nbsp;:

- `start`
- `end`
- `left`
- `right`
- `normal`
- `flex-start`
- `flex-end`
- `center`
- `space-around`
- `space-between`
- `space-evenly`
- `stretch`

```html live-sample___justify-content
<div class="box">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
</div>
```

```css live-sample___justify-content
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  justify-content: flex-start;
}
```

{{EmbedLiveSample("justify-content")}}

Dans l'article [Aligner des éléments dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items), nous verrons plus en détails comment ces propriétés fonctionnent. Ces premiers exemples permettent toutefois de comprendre comment utiliser ces propriétés sur une majorité de cas.

### `place-items` et `place-content`

La propriété {{CSSxRef("place-items")}} est une propriété raccourcie pour `align-items` et `justify-items`. Si elle est définie sur un conteneur flexible, elle définira l'alignement mais pas la justification, car `justify-items` est ignorée dans <i lang="en">flexbox</i>.

Il existe une autre propriété raccourcie, {{CSSxRef("place-content")}}, qui définit les propriétés {{CSSxRef("align-content")}} et `justify-content`. La propriété `align-content` n'affecte que les conteneurs flexibles qui passent à la ligne, et elle est abordée dans [Aligner des éléments dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items).

## Prochaines étapes

Avec cet article, vous devriez comprendre les différentes fonctionnalités et concepts relatifs aux <i lang="en">flexbox</i>. Dans le prochain article, nous verrons [comment cette spécification s'articule avec les autres modules CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods).
