---
title: Relation entre la disposition de grille et les autres méthodes de disposition
short-title: La grille et les autres dispositions
slug: Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods
l10n:
  sourceCommit: 98066c71788a31f0f8726f5bf3d4a2acf4a6ff88
---

La [disposition de grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout) est conçue pour fonctionner en complément d'autres éléments du CSS, dans le cadre d'un système complet de disposition. Ce guide explique comment la disposition de grille s'intègre aux autres techniques.

## Les grilles et les boîtes flexibles

La différence fondamentale entre la disposition de grille CSS et [la disposition de boîtes flexibles CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout) est que la disposition de boîtes flexibles a été conçue pour une disposition sur une dimension — soit une ligne _ou_ une colonne. La grille a été conçue pour une disposition sur deux dimensions — lignes et colonnes en même temps. Les deux spécifications utilisent les fonctionnalités [d'alignement des boîtes](/fr/docs/Web/CSS/Guides/Box_alignment). Si vous avez déjà appris à utiliser la disposition de boîtes flexibles, les similitudes doivent vous aider à comprendre la grille.

### Disposition sur une dimension ou sur deux dimensions

Un exemple simple peut illustrer la différence entre une disposition sur une dimension et une disposition sur deux dimensions.

Dans ce premier exemple, nous utilisons la disposition de boîtes flexibles pour disposer un ensemble de boîtes. Nous avons cinq éléments fils dans notre conteneur, et nous avons donné aux propriétés flexibles de ces éléments une valeur de base de 150 pixels afin qu'ils puissent grandir et rétrécir.

Nous avons également défini la propriété {{CSSxRef("flex-wrap")}} à `wrap`, afin que si l'espace dans le conteneur devient trop étroit pour maintenir la base flexible, les éléments s'enroulent sur une nouvelle ligne.

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
  width: 500px;
  display: flex;
  flex-wrap: wrap;
}
.enveloppe > div {
  flex: 1 1 150px;
}
```

{{EmbedLiveSample("Disposition sur une dimension ou sur deux dimensions", 500, 115)}}

Dans l'image, vous pouvez voir que deux éléments ont été enroulés sur une nouvelle ligne. Ces éléments partagent l'espace disponible et ne sont pas alignés sous les éléments ci-dessus. C'est parce que lorsque vous enroulez des éléments flexibles, chaque nouvelle ligne (ou colonne lorsque vous travaillez par colonne) est une ligne flexible indépendante dans le conteneur flexible. La distribution de l'espace se produit sur la ligne flexible.

Une question courante est alors de savoir comment aligner ces éléments. C'est là que vous souhaitez une méthode de disposition en deux dimensions&nbsp;: vous souhaitez contrôler l'alignement par ligne et colonne, et c'est là que la grille intervient.

### La même disposition avec une grille CSS

Dans cet exemple, on crée la même disposition en utilisant la grille CSS. Ici, on a trois pistes `1fr`. Il n'est pas nécessaire de paramétrer quoi que ce soit sur les objets, ils se disposent eux-mêmes dans chaque cellule formée par la grille. On peut alors voir que les objets restent dans une grille stricte, avec les lignes et les colonnes qui sont alignées. Avec cinq éléments, on a donc un espace restant à la fin de la deuxième ligne.

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
}
```

{{EmbedLiveSample("La même disposition avec une grille CSS", 300, 115)}}

Une question importante à se poser lorsqu'on choisit entre la grille et les boîtes flexibles est&nbsp;:

- Avons-nous besoin de contrôler la disposition par ligne _ou_ par colonne&nbsp;? Si oui, utilisez la disposition de boîtes flexibles.
- Avons-nous besoin de contrôler la disposition par ligne _et_ par colonne&nbsp;? Si oui, utilisez la disposition en grille.

### Organiser l'espace ou organiser le contenu ?

Outre la distinction entre unidimensionnel et bidimensionnel, il existe une autre façon de déterminer s'il vaut mieux utiliser les boîtes flexibles ou la grille pour une disposition. Les boîtes flexibles fonctionnent à partir du contenu. Le cas d'utilisation idéal pour les boîtes flexibles est celui où vous disposez d'un ensemble d'éléments et que vous souhaitez les espacer de manière uniforme dans un conteneur. Vous laissez la taille du contenu déterminer l'espace individuel occupé par chaque élément. Si les éléments passent à la ligne suivante, leur espacement est déterminé en fonction de leur taille et de l'espace disponible _sur cette ligne_.

La grille fonctionne en partant de la disposition. Lorsque vous utilisez la disposition de grille CSS, vous créez une grille, puis vous y placez des éléments, ou vous laissez les règles de placement automatique placer les éléments dans les cellules de la grille selon cette structure rigide. Il est possible de créer des pistes qui s'adaptent à la taille du contenu, mais cela modifie également l'ensemble de la piste.

Si vous utilisez les boîtes flexibles et que vous vous retrouvez à désactiver une partie de cette flexibilité, vous devez probablement utiliser la disposition de grille CSS. Par exemple, si vous définissez une largeur sur un élément flexible pour l'aligner avec d'autres éléments d'une ligne supérieure, une grille est sans doute un meilleur choix.

### Alignement des boîtes

La plupart des fonctionnalités d'alignement des grilles ont été définies dans la [disposition de boîtes flexibles CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout). Ces fonctionnalités permettent un contrôle d'alignement correct pour la première fois et permettent de centrer une boîte sur la page. Les éléments flexibles peuvent s'étendre à la hauteur du conteneur flexible, ce qui signifie que des colonnes de hauteur égale sont possibles. Ces propriétés sont définies dans le module [d'alignement de boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment) et sont utilisées dans plusieurs modes de disposition, y compris la disposition en grille.

Nous prenons un bon coup d'œil à [Aligner les éléments dans la disposition en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Box_alignment) plus tard. Pour l'instant, voici une comparaison entre les exemples de boîte flexible et de grille.

Dans le premier exemple, qui utilise la disposition de boîtes flexibles, nous avons un conteneur avec trois éléments à l'intérieur. La propriété {{CSSxRef("min-height")}} du conteneur est définie, ce qui définit la hauteur du conteneur flexible. Nous avons défini la propriété {{CSSxRef("align-items")}} sur le conteneur flexible à `flex-end` afin que les éléments soient alignés à la fin du conteneur flexible. Nous avons également défini la propriété {{CSSxRef("align-self")}} sur `boite1` afin qu'elle remplace la valeur par défaut et s'étende à la hauteur du conteneur et sur `boite2` afin qu'elle soit alignée au début du conteneur flexible.

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

```html
<div class="enveloppe">
  <div class="boite1">Un</div>
  <div class="boite2">Deux</div>
  <div class="boite3">Trois</div>
</div>
```

```css
.enveloppe {
  display: flex;
  align-items: flex-end;
  min-height: 200px;
}
.boite1 {
  align-self: stretch;
}
.boite2 {
  align-self: flex-start;
}
```

{{EmbedLiveSample("Alignement des boîtes", 300, 200)}}

### Alignement sur les grilles CSS

Cet exemple utilise une grille pour créer la même disposition. On utilise les propriétés d'alignement des boîtes comme elles s'appliquent à une disposition en grille. On aligne par rapport à `start` et `end`. (On peut utiliser les synonymes {{CSSxRef("content-position")}} `flex-start` et `flex-end`.) Dans le cas d'une disposition en grille, on aligne les éléments à l'intérieur de leur zone de grille. Dans ce cas, il s'agit d'une seule cellule mais on peut très bien construire une zone composée de plusieurs cellules.

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

```html
<div class="enveloppe">
  <div class="boite1">Un</div>
  <div class="boite2">Deux</div>
  <div class="boite3">Trois</div>
</div>
```

```css
.enveloppe {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
  grid-auto-rows: 200px;
}
.boite1 {
  align-self: stretch;
}
.boite2 {
  align-self: start;
}
```

{{EmbedLiveSample("Alignement sur les grilles CSS", 200, 205)}}

### L'unité `fr` et `flex-basis`

Nous avons déjà vu comment l'unité `fr` fonctionne pour attribuer une proportion de l'espace disponible dans le conteneur de grille à nos pistes de grille. L'unité `fr`, lorsqu'elle est combinée avec la fonction {{CSSxRef("minmax()")}} peut nous offrir un comportement très similaire à celui des propriétés `flex` dans les boîtes flexibles, tout en permettant la création d'une disposition en deux dimensions.

Si l'on revient à l'exemple où nous avons illustré la différence entre les dispositions à une et à deux dimensions, on constate une différence dans la manière dont ces deux dispositions s'adaptent aux différentes tailles d'écran. Avec la disposition flexible, lorsque l'on agrandit ou réduit la fenêtre, la boîte flexible s'adapte parfaitement en ajustant le nombre d'éléments dans chaque ligne en fonction de l'espace disponible. Si l'espace est important, les cinq éléments peuvent tenir sur une seule ligne. Si le conteneur est très étroit, il se peut qu'il n'y ait de la place que pour un seul élément.

En comparaison, la version grille comporte toujours trois pistes de colonnes. Les pistes elles-mêmes s'étendent/rétrécissent, mais elles sont toujours au nombre de trois puisque c'est ce que nous avons demandé lors de la définition de notre grille.

#### Pistes de grille remplies automatiquement

Nous pouvons utiliser la grille pour créer un effet similaire à celui de boîtes flexibles, tout en conservant le contenu organisé en rangées et colonnes strictes, en définissant la disposition des pistes à l'aide de la notation de répétition et des propriétés `auto-fill` et `auto-fit`.

Dans l'exemple suivant, nous avons utilisé le mot-clé `auto-fill` à la place d'un nombre entier dans la notation de répétition et défini la liste des pistes à 200 pixels. Cela signifie que la grille crée autant de pistes de 200 pixels de large que le conteneur peut en contenir.

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

```html
<div class="enveloppe">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
</div>
```

```css
.enveloppe {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
}
```

{{EmbedLiveSample("Pistes de grille remplies automatiquement", 500, 60)}}

### Avoir un nombre de pistes flexible

L'exemple précédent ne se comporte pas comme celui avec les boîtes flexibles. Dans l'exemple avec les boîtes flexibles, les objets qui sont plus larges que la base de 200 pixels avant de passer à la ligne. On peut obtenir le même effet sur une grille en combinant le mot-clé `auto-fill` et la fonction {{CSSxRef("minmax()")}}.

Dans cet exemple, nous créons des pistes à remplissage automatique à l'aide de `minmax`. Nous souhaitons que nos pistes aient une largeur minimale de 200 pixels, alors nous définissons la valeur maximale à `1fr`. Une fois que le navigateur a déterminé combien de fois 200 pixels peuvent tenir dans le conteneur — en tenant également compte des espaces de la grille — il considère la valeur maximale `1fr` comme une instruction visant à répartir l'espace restant entre les éléments.

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

```html
<div class="enveloppe">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
</div>
```

```css
.enveloppe {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

{{EmbedLiveSample("Avoir un nombre de pistes flexible", 500, 60)}}

Grâce à la disposition en grille, nous pouvons créer une grille comportant un nombre dynamique de pistes flexibles et disposer les éléments sur cette grille en les alignant par rangées et par colonnes.

## Les grilles et les éléments positionnés de façon absolue

La grille interagit avec les éléments [positionnés de façon absolue](/fr/docs/Web/CSS/Reference/Properties/position#positionnement_absolu), ce qui peut être utile si vous souhaitez positionner un élément dans une grille ou une zone de grille. La spécification définit le comportement lorsqu'un conteneur de grille est un bloc englobant et un parent de l'élément positionné de façon absolue.

### Avoir une grille comme bloc englobant

Pour faire du conteneur de grille un [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block), vous devez ajouter la propriété {{CSSxRef("position")}} au conteneur avec la valeur `relative`, comme vous le faites pour créer un bloc englobant pour tout autre élément positionné de façon absolue. Une fois cette opération effectuée, si vous donnez à un élément de grille la valeur `position: absolute`, son bloc englobant est le conteneur de grille ou, si l'élément possède également une position dans la grille, la zone de la grille dans laquelle vous le placez.

Dans l'exemple ci-dessous, une enveloppe contient quatre éléments enfants. Le troisième élément est positionné de façon absolue et placé dans la grille à l'aide d'un placement fondé sur les lignes. Le conteneur de grille possède `position: relative` et devient donc le contexte de positionnement de cet élément.

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

```html
<div class="enveloppe">
  <div class="boite1">Un</div>
  <div class="boite2">Deux</div>
  <div class="boite3">
    Ce bloc est positionné de façon absolue. Dans cet exemple la grille est le
    bloc englobant et les valeurs de décalage pour la position sont calculées
    depuis les bords extérieurs de la zone dans laquelle a été placé l'élément.
  </div>
  <div class="boite4">Quatre</div>
</div>
```

```css
.enveloppe {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 20px;
  position: relative;
}
.boite3 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  position: absolute;
  top: 40px;
  left: 40px;
}
```

{{EmbedLiveSample("Avoir une grille comme bloc englobant", 500, 330)}}

Vous voyez que l'élément occupe la zone allant de la ligne de colonne 2 à la ligne 4 et commence après la ligne 1. Ensuite, vous le décalez dans cette zone à l'aide des propriétés du haut et de gauche. Cependant, comme c'est habituel pour les éléments positionnés de façon absolue, il est retiré du flux et les règles de placement automatique placent alors des éléments dans le même espace. L'élément ne provoque pas non plus la création d'une ligne supplémentaire jusqu'à la ligne 3.

Si vous retirez `position: absolute` des règles de `.boite3`, vous voyez comment l'élément s'affiche sans ce positionnement.

### Utiliser une grille comme parent

Si l'élément enfant positionné de façon absolue a un conteneur de grille comme parent, mais que ce conteneur ne crée pas de nouveau contexte de positionnement, il est retiré du flux comme dans l'exemple précédent. Le _contexte de positionnement_ désigne l'élément par rapport auquel l'élément positionné de façon absolue calcule sa position. Le contexte de positionnement correspond à l'élément qui crée un contexte de positionnement, comme dans les autres méthodes de disposition. Dans notre cas, si nous retirons `position: relative` de l'enveloppe ci-dessus, le contexte de positionnement est la zone d'affichage, comme le montre cette image.

![Image du conteneur de grille en tant que parent](2_abspos_example.png)

Là encore, l'élément ne participe plus à la disposition de la grille pour le dimensionnement ou pour le placement des autres éléments.

### Une zone de grille comme parent

Si l'élément positionné de façon absolue est imbriqué dans une zone de grille, vous pouvez créer un contexte de positionnement sur cette zone. Dans cet exemple, nous reprenons la même grille, mais cette fois, nous imbriquons un élément dans `.boite3` de la grille.

Nous donnons un positionnement relatif à `.boite3`, puis nous positionnons le sous-élément à l'aide des propriétés de décalage. Dans ce cas, le contexte de positionnement est la zone de grille.

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

```html
<div class="enveloppe">
  <div class="boite1">Un</div>
  <div class="boite2">Deux</div>
  <div class="boite3">
    Trois
    <div class="abspos">
      Ce bloc est positionné de façon absolue. Dans cet exemple la zone de la
      grille est le bloc englobant et le positionnement est calculé à partir des
      bords de la zone de la grille.
    </div>
  </div>
  <div class="boite4">Quatre</div>
</div>
```

```css
.enveloppe {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 20px;
}
.boite3 {
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
  background-color: rgb(255 255 255 / 50%);
  border: 1px solid rgb(0 0 0 / 50%);
  color: black;
  padding: 10px;
}
```

{{EmbedLiveSample("Une zone de grille comme parent", 500, 420)}}

## Les grilles et `display: contents`

Une dernière interaction mérite d'être mentionnée&nbsp;: celle entre la disposition de grille CSS et `display: contents`, définie dans le module [d'affichage CSS](/fr/docs/Web/CSS/Guides/Display). Lorsque la propriété {{CSSxRef("display")}} prend la valeur `contents`, l'élément lui-même ne génère aucune boîte, mais ses éléments enfants et ses pseudo-éléments continuent d'en générer normalement. Ainsi, pour la génération des boîtes et la disposition, l'élément est traité comme un élément remplacé par ses éléments enfants et ses pseudo-éléments dans l'arbre du document.

Si vous définissez `display: contents` pour un élément, la boîte qu'il crée normalement disparaît et les boîtes des éléments enfants apparaissent comme si elles remontent d'un niveau. Ainsi, les éléments enfants d'un élément de grille peuvent devenir des éléments de grille. Cela semble étrange&nbsp;? Voici un exemple.

### Disposition de grille avec des éléments enfants imbriqués

Dans cet exemple, le premier élément de la grille s'étend sur les trois pistes de colonnes. Il contient trois éléments imbriqués. Comme ces éléments ne sont pas des enfants directs, ils ne font pas partie de la disposition de grille et s'affichent donc selon une disposition en blocs classique.

```css hidden
* {
  box-sizing: border-box;
}

.enveloppe {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.boite {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.imprique {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

```html
<div class="enveloppe">
  <div class="boite boite1">
    <div class="imprique">a</div>
    <div class="imprique">b</div>
    <div class="imprique">c</div>
  </div>
  <div class="boite boite2">Deux</div>
  <div class="boite boite3">Trois</div>
  <div class="boite boite4">Quatre</div>
  <div class="boite boite5">Cinq</div>
</div>
```

```css
.enveloppe {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
.boite1 {
  grid-column-start: 1;
  grid-column-end: 4;
}
```

{{EmbedLiveSample("Disposition de grille avec des éléments enfants imbriqués", 400, 420)}}

### Utiliser `display: contents`

Si vous ajoutez maintenant `display: contents` aux règles de `boite1`, la boîte de cet élément disparaît et les sous-éléments deviennent des éléments de grille qu'organisent les règles de placement automatique.

```css hidden
* {
  box-sizing: border-box;
}

.enveloppe {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.boite {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.imprique {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

```html
<div class="enveloppe">
  <div class="boite boite1">
    <div class="imprique">a</div>
    <div class="imprique">b</div>
    <div class="imprique">c</div>
  </div>
  <div class="boite boite2">Deux</div>
  <div class="boite boite3">Trois</div>
  <div class="boite boite4">Quatre</div>
  <div class="boite boite5">Cinq</div>
</div>
```

```css
.enveloppe {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
.boite1 {
  grid-column-start: 1;
  grid-column-end: 4;
  display: contents;
}
```

{{EmbedLiveSample("Utiliser `display: contents`", 400, 330)}}

Cette méthode permet aux éléments imbriqués dans la grille de fonctionner comme des éléments de la grille. Vous pouvez également utiliser `display: contents` de la même manière avec les boîtes flexibles pour que les éléments imbriqués deviennent des éléments flexibles.

Comme vous le voyez dans ce guide, la disposition de grille CSS n'est qu'un outil parmi d'autres. N'hésitez pas à la combiner avec d'autres méthodes de disposition pour obtenir les effets souhaités.

## Voir aussi

- [Les guides des boîtes flexibles](/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [Les guides sur la disposition multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout)
