---
title: Le modèle de grille et les autres modèles de disposition
slug: Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods
---

{{CSSRef}}

Le mode de disposition en grille a été conçu afin de pouvoir fonctionner avec les autres composantes de CSS pour construire un système complet de disposition. Dans ce guide, nous expliquerons comment intégrer une grille CSS parmi d'autres techniques que vous pourriez déjà utiliser.

## Les grilles et les boîtes flexibles (_flexbox_)

La différence fondamentale, entre les grilles et [les boîtes flexibles CSS](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout), est que les boîtes flexibles permettent d'organiser du contenu sur une dimension (sur une ligne ou sur une colonne). Les grilles ont été conçues pour une organisation bi-dimensionnelle. Les deux spécifications partagent cependant quelques points communs et si vous savez utiliser les boîtes flexibles, vous retrouverez quelques concepts qui vous aideront à appréhender les grilles CSS.

### Disposition sur une dimension ou sur deux dimensions

Voyons un exemple simple pour illustrer la différence entre une disposition sur un seul axe et une disposition sur deux axes.

Dans le premier exemple, on utilise un boîte flexible pour organiser un ensemble de boîte. Le conteneur contient 5 objets fils et on utilise des propriétés afin qu'ils puissent être agrandis/rétrécis avec une base (`flex-basis`) de 150 pixels.

On utilise aussi la propriété {{cssxref("flex-wrap")}} avec la valeur `wrap`, afin de créer une nouvelle ligne si le conteneur devient trop étroit pour conserver `flex-basis`.

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
  width: 500px;
  display: flex;
  flex-wrap: wrap;
}
.wrapper > div {
  flex: 1 1 150px;
}
```

{{EmbedLiveSample('Disposition_sur_une_dimension_ou_sur_deux_dimensions', '500', '230')}}

On peut voir ici que deux objets sont passés sur une nouvelle ligne. Ces objets partagent l'espace disponible sur cette nouvelle ligne et ne s'alignent pas par rapport aux objets de la ligne au-dessus. En effet, lorsque des éléments flexibles passent sur une nouvelle ligne (ou colonne), celle-ci forme un nouveau conteneur et l'espace de ce conteneur est distribué entre les objets.

On se demande alors comment faire pour aligner ces éléments… C'est là qu'intervient la disposition en deux dimensions, pour contrôler l'alignement des lignes et des colonnes : voici la grille.

### La même disposition avec une grille CSS

Dans cet exemple, on crée la même disposition en utilisant la grille CSS. Ici, on a trois pistes `1fr`. Il n'est pas nécessaire de paramétrer quoi que ce soit sur les objets, ils se disposeront eux-mêmes dans chaque cellule formée par la grille. On peut alors voir que les objets restent dans une grille stricte, avec les lignes et les colonnes qui sont alignées. Avec cinq éléments, on a donc un espace restant à la fin de la deuxième ligne.

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
}
```

{{EmbedLiveSample('La_même_disposition_avec_une_grille_CSS', '300', '170')}}

Lorsqu'il s'agit de choisir entre les grilles ou les boîtes flexibles, vous pouvez vous poser les questions suivantes :

- Ai-je uniquement besoin de contrôler la disposition selon des colonnes **ou** selon des lignes ? Si oui, mieux vaudra utiliser des boîtes flexibles.
- Ai-je besoin de contrôler la disposition selon des colonnes **et** selon des lignes ? Si oui, mieux vaudra utiliser une grille CSS.

### Organiser l'espace ou organiser le contenu ?

En plus de la distinction sur le nombre de dimensions, on peut prendre un autre angle de vue pour choisir entre les boîtes flexibles et les grilles. Les boîtes flexibles permettent de répartir l'espace de façon équitable autour des éléments d'un conteneur. C'est la taille du contenu qui détermine l'espace occupé par chacun des éléments. Si les objets passent sur une nouvelle ligne, leur espacement sera calculé en fonction de leurs tailles et de l'espace disponible sur cette ligne.

En revanche, les grilles organisent le contenu dans l'espace. Lorsqu'on utilise les grilles CSS, on crée un « plan » et on place les éléments sur ce plan (ou on indique un placement automatique, strict, sur cette grille). Il est possible de créer des pistes (_tracks_) qui réagissent à la taille du contenu mais cela modifierait alors l'ensemble de la piste.

Si vous utilisez les boîtes flexibles et souhaitez bloquer certains des aspects autour de la flexibilité, vous aurez probablement besoin d'une grille CSS. Par exemple, si vous définissez un objet flexible avec un pourcentage en largeur pour aligner l'objet avec les éléments du dessus, une grille pourrait être plus adaptée.

### L'alignement des boîtes

Une des fonctionnalités les plus attendues pour les boîtes flexibles était celle qui permettait enfin de contrôler l'alignement correctement. On pouvait simplement centrer une boîte sur une page. Les éléments flexibles pouvaient être étirés en hauteur dans leurs conteneurs et on pouvait donc obtenir des colonnes avec des hauteurs égales. Il était désormais possible d'éviter des contournements pour obtenir ce résultat.

Les propriétés d'alignement ont été ajoutées à la spécification pour les boîtes flexibles dans une nouvelle spécification intitulée _[Box Alignment Level 3](https://drafts.csswg.org/css-align/)_. Cela signifie qu'elles peuvent être utilisées dans d'autres modules, y compris dans les grilles CSS. À l'avenir, elles pourront éventuellement s'appliquer aux autres méthodes de disposition.

Dans un autre article de cette série, nous verrons comment utiliser l'alignement des boîtes dans une disposition en grille. Pour le moment, voici un exemple simple qui permet de comparer les boîtes flexibles et les grilles.

Dans le premier exemple, on utilise les boîtes flexibles avec un conteneur qui dispose de trois objets. La propriété {{cssxref("min-height")}} est définie et paramètre la hauteur du conteneur flexible. {{cssxref("align-items")}} vaut `flex-end` pour le conteneur flexible et les objets s'empileront donc jusqu'à l'extrémité du conteneur flexible. On utilise également la propriété {{cssxref("align-self")}} sur `box1` afin de surcharger la valeur par défaut et d'étirer jusqu'à la hauteur du conteneur et jusqu'à `box2` afin que `box1` soit alignée avec le début du conteneur flexible.

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
  <div class="box1">Un</div>
  <div class="box2">Deux</div>
  <div class="box3">Trois</div>
</div>
```

```css
.wrapper {
  display: flex;
  align-items: flex-end;
  min-height: 200px;
}
.box1 {
  align-self: stretch;
}
.box2 {
  align-self: flex-start;
}
```

{{EmbedLiveSample('Lalignement_des_boîtes', '300', '230')}}

### L'alignement sur les grilles CSS

Dans cet exemple, on utilise une grille pour créer la même disposition. Cette fois on utilise les propriétés d'alignement des boîtes. On aligne donc par rapport à `start` et `end` plutôt que par rapport à `flex-start` et `flex-end`. Dans le cas d'une disposition en grille, on aligne les éléments à l'intérieur de leur zone de grille. Dans ce cas, il s'agit d'une seule cellule mais on pourrait très bien construire une zone composée de plusieurs cellules.

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
  <div class="box1">Un</div>
  <div class="box2">Deux</div>
  <div class="box3">Trois</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
  grid-auto-rows: 200px;
}
.box1 {
  align-self: stretch;
}
.box2 {
  align-self: start;
}
```

{{EmbedLiveSample('Lalignement_sur_les_grilles_CSS', '200', '310')}}

### L'unité `fr` et `flex-basis`

On a vu avant l'unité `fr` qui permet d'affecter aux pistes de la grille une portion de l'espace disponible dans le conteneur. L'unité `fr`, lorsqu'elle est combinée avec la fonction {{cssxref("minmax()", "minmax()")}} permet d'obtenir un comportement proche des propriétés `flex` utilisées pour les boîtes flexibles, tout en permettant de créer une disposition sur deux dimensions.

Si on revient sur l'exemple illustrant la différence entre une disposition à une dimension et une disposition à deux dimensions. On voit qu'il y a une différence sur la façon dont les deux dispositions fonctionnent en mode _responsive_ (lorsque les dimensions de la zone d'affichage varient). Avec la disposition flexible, si on redimensionne la disposition ajustera le nombre d'éléments sur chaque ligne en fonction de l'espace disponible. S'il y a beaucoup d'espace, les cinq éléments pourront tenir sur une seule ligne et si l'espace est réduit, on pourra avoir jusqu'à un seul élément par ligne.

En revanche, avec la grille, on a toujours trois pistes qui forment trois colonnes. Les pistes s'élargiront ou se rétrécieront mais il y en aura toujours trois car c'est le nombre de pistes déclaré à la définition de la grille.

#### Des pistes qui se remplissent automatiquement

On peut créer un effet semblable aux boîtes flexibles tout en gardant l'arrangement en lignes et colonnes grâce à la notation `repeat` et aux propriétés `auto-fill` et `auto-fit`.

Dans l'exemple qui suit, on utilise le mot-clé `auto-fill` à la place d'un entier dans la fonction `repeat` et on définit la taille d'une piste à 200 pixels. Cela signifie que la grille créera autant de pistes de 200 pixels en colonnes qu'il est possible d'en placer dans le conteneur.

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
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
}
```

{{EmbedLiveSample('Des_pistes_qui_se_remplissent_automatiquement', '500', '170')}}

### Avoir un nombre de pistes flexible

L'exemple précédent ne se comporte pas comme celui avec les boîtes flexibles. Dans l'exemple avec les boîtes flexibles, les objets qui sont plus larges que la base de 200 pixels avant de passer à la ligne. On peut obtenir le même effet sur une grille en combinant le mot-clé `auto-fill` et la fonction {{cssxref("minmax()", "minmax()")}}.

Dans l'exemple qui suit, on crée des pistes qui sont remplies automatiquement avec `minmax`. On souhaite que les pistes mesurent au moins 200 pixels, avec un maximum de `1fr`. Lorsque le navigateur a calculé la quantité de colonnes qui tiendraient dans le conteneur (en tenant compte des espaces), il utilisera le maximum `1fr` afin de répartir l'espace restant entre les objets.

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
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

{{EmbedLiveSample('Avoir_un_nombre_de_pistes_flexible', '500', '170')}}

On peut désormais créer une grille qui dispose d'un nombre flexible de pistes, elles-mêmes flexibles tout en ayant des éléments qui sont disposés sur la grille par rapport à des lignes et à des colonnes.

## Les grilles et les éléments positionnés de façon absolue

La grille peut interagir avec les éléments positionnés de façon absolue. Cela peut s'avérer utile si on souhaite positionner un élément dans une grille ou dans une zone donnée de la grille. La spécification définit le comportement lorsqu'une grille est un bloc englobant et que la grille est le parent d'un élément positionné de façon absolue.

### Avoir une grille comme bloc englobant

Pour qu'une grille soit un bloc englobant, il faut utiliser la propriété `position` avec la valeur `relative` (comme on ferait pour un bloc classique). Une fois que c'est fait, si on utilise `position:` `absolute` sur un objet de la grille, son bloc englobant sera la grille. Si l'élément a une position donnée sur la grille, le conteneur sera la zone de la grille sur laquelle il est placé.

Dans l'exemple ci-après, on a un conteneur avec quatre enfants. Le troisième élément est positionné en absolu et est placé sur la grille. La grille, le conteneur, a `position:` `relative` et devient donc le contexte de positionnement pour cet objet.

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
  <div class="box1">Un</div>
  <div class="box2">Deux</div>
  <div class="box3">
    Ce bloc est positionné de façon absolue. Dans cet exemple la grille est le
    bloc englobant et les valeurs de décalage pour la position sont calculées
    depuis les bords extérieurs de la zone dans laquelle a été placé l'élément.
  </div>
  <div class="box4">Quatre</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 20px;
  position: relative;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  position: absolute;
  top: 40px;
  left: 40px;
}
```

{{EmbedLiveSample('Avoir_une_grille_comme_bloc_englobant', '500', '330')}}

On peut voir que l'élément prend la zone de la grille entre les lignes 2 et 4, après la ligne 1. Ensuite, il est décalé dans cette zone grâce aux propriétés `top` et `left`. Toutefois, il a été retiré du flux, comme d'habitude pour les éléments positionnés en absolu et les règles de placement automatique placent des objets dans la même zone. L'objet n'entraîne pas non plus la création d'une ligne supplémentaire sur la ligne 3.

Si on retire `position:` `absolute` des règles sur `.box3`, on peut voir le résultat qu'on aurait obtenu sans ce positionnement absolu.

### Utiliser une grille comme parent

Si l'élément positionné de façon absolue est contenue dans une grille mais que celle-ci ne crée pas de nouveau contexte de positionnement, l'élément sera retiré du flux comme dans l'exemple précédent. Les contextes de positionnement sont créés comme avec les autres méthodes de disposition. Dans l'exemple, si on retire `position:` `relative` dans le code précédent, le contexte de positionnement est fourni par la zone d'affichage (le _viewport_) :

![Image of grid container as parent](2_abspos_example.png)

Là encore, l'élément ne participe plus à la disposition de la grille pour le dimensionnement ou pour le placement des autres éléments.

### Utiliser une zone de grille comme parent

Si l'élément positionné de façon absolu est imbriqué dans une zone de la grille, on peut créer un contexte de positionnement pour cette zone. Dans l'exemple qui suit, on utilise la même grille qu'avant sauf que l'élément est imbriqué dans la zone `.box3` de la grille.

On indique que `.box3` a une position relative puis on positionne l'élément avec des propriétés de décalage. Dans ce cas, le contexte de positionnement est la zone de la grille.

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
  <div class="box1">Un</div>
  <div class="box2">Deux</div>
  <div class="box3">
    Trois
    <div class="abspos">
      Ce bloc est positionné de façon absolue. Dans cet exemple la zone de la
      grille est le bloc englobant et le positionnement est calculé à partir des
      bords de la zone de la grille.
    </div>
  </div>
  <div class="box4">Quatre</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 20px;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  position: relative;
}
.abspos {
  position: absolute;
  top: 40px;
  left: 40px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #000;
  padding: 10px;
}
```

{{EmbedLiveSample('Utiliser_une_zone_de_grille_comme_parent', '500', '420')}}

## Utiliser une grille et `display:` `contents`

Une autre combinaison notable, en termes de disposition, peut être l'utilisation de `display:` `contents` avec les grilles CSS. La valeur `contents` de la propriété {{cssxref("display")}} est une nouvelle valeur, décrite comme suit dans la [spécification Display](https://drafts.csswg.org/css-display/#box-generation) :

> L'élément même ne génère aucune boîte mais ses éléments fils, ainsi que les pseudo-éléments, génèrent des boîtes normales. Afin de générer les boîtes et la disposition, l'élément doit être traité comme s'il avait été remplacé par ses éléments fils et ses pseudo-éléments dans l'arbre du document.

Si on utilise `display:` `contents` sur un élément, la boîte qu'il aurait normalement créé disparaîtra et les boîtes des éléments qui sont ses enfants apparaîtront comme si elles avaient grimpé d'un niveau. Cela signifie que les éléments fils d'un élément d'une grille peuvent, à leur tour, devenir des éléments de cette grille. Un peu perdu-e ? Voici un exemple. Dans le code qui suit, on a une grille dont le premier élément s'étend sur les trois pistes. Cet élément contient trois éléments imbriqués. Ces derniers n'étant pas des enfants directs de la grille, ils ne s'inscrivent pas dans la disposition en grille et sont affichés avec la disposition classique.

### Utiliser display contents avant

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

```html
<div class="wrapper">
  <div class="box box1">
    <div class="nested">a</div>
    <div class="nested">b</div>
    <div class="nested">c</div>
  </div>
  <div class="box box2">Deux</div>
  <div class="box box3">Trois</div>
  <div class="box box4">Quatre</div>
  <div class="box box5">Cinq</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
}
```

{{EmbedLiveSample('Utiliser_display_contents_avant', '400', '420')}}

### Utiliser display contents après

Si on ajoute `display:` `contents` aux règles qui ciblent `box1`, la boîte de cet élément disparaîtra et ses sous-éléments deviendront alors des éléments de la grille qui se placeront selon les règles de placement automatiques pour la grille.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

```html
<div class="wrapper">
  <div class="box box1">
    <div class="nested">a</div>
    <div class="nested">b</div>
    <div class="nested">c</div>
  </div>
  <div class="box box2">Deux</div>
  <div class="box box3">Trois</div>
  <div class="box box4">Quatre</div>
  <div class="box box5">Cinq</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  display: contents;
}
```

{{EmbedLiveSample('Utiliser_display_contents_après', '400', '330')}}

Cela permet que des éléments imbriqués agissent comme s'ils faisaient partie de la grille. C'est également une méthode de contournement pour certains problèmes qui seront résolus par les « sous-grilles » (_subgrids_) lorsqu'elles seront implémentées. Vous pouvez également utiliser `display:` `contents` de façon similaire avec les boîtes flexibles afin que les éléments imbriqués deviennent des éléments flexibles.

Comme on a pu le voir dans cet article, la disposition avec les grilles CSS n'est qu'un outil parmi d'autres. Il ne faut pas hésiter à combiner différentes méthodes de disposition afin d'obtenir les résultats souhaités.

## Voir aussi

- [Guides sur _Flexbox_](/fr/docs/Learn/CSS/CSS_layout/Flexbox)
- [Guides sur la disposition multi-colonnes](/fr/docs/Web/CSS/CSS_Columns)
