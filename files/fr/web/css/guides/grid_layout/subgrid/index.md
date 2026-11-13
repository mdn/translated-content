---
title: Sous-grille avec `subgrid`
short-title: Sous-grille
slug: Web/CSS/Guides/Grid_layout/Subgrid
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le module [de disposition de grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout) inclut une valeur `subgrid` pour {{CSSxRef("grid-template-columns")}} et {{CSSxRef("grid-template-rows")}}. Ce guide détaille ce que fait la sous-grille et donne quelques cas d'utilisation ainsi que des modèles de conception auxquels la fonctionnalité répond.

## Introduction aux sous-grilles

Lorsque vous ajoutez [`display: grid`](/fr/docs/Web/CSS/Reference/Properties/display) à un conteneur de grille, seuls les enfants directs deviennent des éléments de grille, qui peuvent ensuite être placés sur la grille que vous avez créée. Les enfants de ces éléments s'affichent dans le flux normal.

Vous pouvez «&nbsp;imbriquer&nbsp;» des grilles en faisant d'un élément de grille un conteneur de grille. Ces grilles restent toutefois indépendantes de la grille parente et les unes des autres, ce qui signifie qu'elles ne reprennent pas la dimension de leurs pistes depuis la grille parente. Cela rend difficile l'alignement des éléments de grille imbriqués sur la grille principale.

Si vous définissez la valeur `subgrid` sur `grid-template-columns`, `grid-template-rows` ou les deux, la grille imbriquée utilise les pistes définies sur la grille parente au lieu de créer une nouvelle liste de pistes.

Par exemple, si vous utilisez `grid-template-columns: subgrid` et que la grille imbriquée couvre trois pistes de colonnes de la grille parente, la grille imbriquée possède trois pistes de colonnes de la même taille que celles de la grille parente. Les [espacements](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters) sont hérités, mais peuvent être remplacés par une autre valeur de {{CSSxRef("gap")}}. Les [noms de lignes](/fr/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) peuvent être transmis de la grille parente à la sous-grille, et la sous-grille peut également déclarer ses propres noms de lignes.

## Sous-grilles pour les colonnes

Dans l'exemple ci-dessous, la disposition de grille possède neuf pistes de colonnes `1fr` et quatre lignes d'une hauteur minimale de `100px`.

`.element` est placé entre les lignes de colonnes 2 et 7 et les lignes 2 et 4. Cet élément de grille est lui-même défini comme une grille avec `display: grid`, puis défini comme une sous-grille en lui donnant des pistes de colonnes qui sont une sous-grille (`grid-template-columns: subgrid`) et des lignes définies normalement. La sous-grille possède cinq pistes de colonnes, car elle couvre cinq pistes de colonnes.

Comme `.element` est une sous-grille, même si `.sous-element` n'est pas un enfant direct de la `.grille` externe, il peut être placé sur cette grille externe, avec ses colonnes alignées sur les colonnes de la grille externe. Les lignes ne sont pas une sous-grille et se comportent donc comme le fait normalement une grille imbriquée. La zone de grille de la grille parente s'agrandit pour être suffisamment grande pour cette grille imbriquée.

```html live-sample___columns
<div class="grille">
  <div class="element">
    <div class="sous-element"></div>
  </div>
</div>
```

```css hidden live-sample___columns
* {
  box-sizing: border-box;
}

.grille {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.element {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}

.sous-element {
  background-color: rgb(40 240 83);
}
```

```css live-sample___columns
.grille {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.element {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: repeat(3, 80px);
}

.sous-element {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}
```

Notez que la numérotation des lignes recommence dans la sous-grille — la ligne de colonne 1 est la première ligne de la sous-grille lorsqu'elle se trouve dans la sous-grille. L'élément utilisant la sous-grille n'hérite pas de la numérotation des lignes de la grille parente. Cela signifie que vous pouvez disposer sans risque un composant susceptible d'être placé à différentes positions sur la grille principale, en sachant que les numéros de ligne du composant restent toujours identiques.

{{EmbedLiveSample("columns", "", 450)}}

## Sous-grilles pour les lignes

Cet exemple utilise le même HTML que ci-dessus, mais ici `subgrid` est appliqué comme valeur de `grid-template-rows`, avec des pistes de colonnes définies explicitement. Dans ce cas, les pistes de colonnes se comportent comme une grille imbriquée ordinaire, mais les lignes sont liées aux deux pistes que `.element` couvre.

```html live-sample___rows hidden
<div class="grille">
  <div class="element">
    <div class="sous-element"></div>
  </div>
</div>
```

```css hidden live-sample___rows
* {
  box-sizing: border-box;
}

.grille {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.element {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}

.sous-element {
  background-color: rgb(40 240 83);
}
```

```css live-sample___rows
.grille {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.element {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: subgrid;
}

.sous-element {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample("rows", "", 405)}}

## Les sous-grilles dans les deux dimensions

Dans cet exemple, les lignes et les colonnes sont définies comme une sous-grille, ce qui lie la sous-grille aux pistes de la grille parente dans les deux dimensions.

```html live-sample___both hidden
<div class="grille">
  <div class="element">
    <div class="sous-element"></div>
  </div>
</div>
```

```css hidden live-sample___both
* {
  box-sizing: border-box;
}

.grille {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.element {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}

.sous-element {
  background-color: rgb(40 240 83);
}
```

```css live-sample___both
.grille {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.element {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}

.sous-element {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample("both", "", 405)}}

### Aucune grille implicite dans une dimension utilisant une sous-grille

Si vous devez placer automatiquement des éléments et ne savez pas combien d'éléments vous en avez, faites attention lors de la création d'une sous-grille, car elle empêche la création de lignes supplémentaires pour contenir ces éléments.

Regardez l'exemple suivant — il utilise la même grille parente et enfant que dans l'exemple précédent. Douze éléments à l'intérieur de la sous-grille essaient de se placer automatiquement dans dix cellules de grille. Comme la sous-grille est dans les deux dimensions, les deux éléments supplémentaires ne peuvent aller nulle part et vont donc dans la dernière piste de la grille. C'est le comportement défini dans la spécification.

```html live-sample___no-implicit
<div class="grille">
  <div class="element">
    <div class="sous-element">1</div>
    <div class="sous-element">2</div>
    <div class="sous-element">3</div>
    <div class="sous-element">4</div>
    <div class="sous-element">5</div>
    <div class="sous-element">6</div>
    <div class="sous-element">7</div>
    <div class="sous-element">8</div>
    <div class="sous-element">9</div>
    <div class="sous-element">10</div>
    <div class="sous-element">11</div>
    <div class="sous-element">12</div>
  </div>
</div>
```

```css hidden live-sample___no-implicit
* {
  box-sizing: border-box;
}
body {
  font: 1.2em sans-serif;
}

.grille {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.element {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  color: #d9480f;
}

.sous-element {
  background-color: #d9480f;
  color: white;
  border-radius: 5px;
}
```

```css live-sample___no-implicit
.grille {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.element {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}
```

{{EmbedLiveSample("no-implicit", "", 405)}}

La suppression de la valeur `grid-template-rows` active la création normale de pistes implicites et crée autant de lignes que nécessaire. Elles ne s'alignent pas sur les pistes de la grille parente.

```html live-sample___implicit
<div class="grille">
  <div class="element">
    <div class="sous-element">1</div>
    <div class="sous-element">2</div>
    <div class="sous-element">3</div>
    <div class="sous-element">4</div>
    <div class="sous-element">5</div>
    <div class="sous-element">6</div>
    <div class="sous-element">7</div>
    <div class="sous-element">8</div>
    <div class="sous-element">9</div>
    <div class="sous-element">10</div>
    <div class="sous-element">11</div>
    <div class="sous-element">12</div>
  </div>
</div>
```

```css hidden live-sample___implicit
* {
  box-sizing: border-box;
}
body {
  font: 1.2em sans-serif;
}

.grille {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.element {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  color: #d9480f;
}

.sous-element {
  background-color: #d9480f;
  color: white;
  border-radius: 5px;
}
```

```css live-sample___implicit
.grille {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.element {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-auto-rows: minmax(100px, auto);
}
```

{{EmbedLiveSample("implicit", "", 510)}}

## Les propriétés d'espacement et la sous-grille

Toutes les valeurs de {{CSSxRef("gap")}}, {{CSSxRef("column-gap")}} ou {{CSSxRef("row-gap")}} définies sur la grille parente sont transmises à la sous-grille, ce qui crée le même espacement entre les pistes que dans la grille parente. Ce comportement par défaut peut être remplacé en appliquant les propriétés `gap-*` au conteneur de la sous-grille.

Dans cet exemple, la grille parente possède une gouttière de `20px` pour les lignes et les colonnes et la sous-grille définit `row-gap` à `0`.

```html live-sample___gap
<div class="grille">
  <div class="element">
    <div class="sous-element"></div>
    <div class="sous-element2"></div>
  </div>
</div>
```

```css hidden live-sample___gap
* {
  box-sizing: border-box;
}

.grille {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.element {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}

.sous-element {
  background-color: rgb(40 240 83);
}
```

```css live-sample___gap
.grille {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
  gap: 20px;
}

.element {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
  row-gap: 0;
}

.sous-element {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}

.sous-element2 {
  background-color: rgb(0 0 0 / 0.5);
  grid-column: 2;
  grid-row: 1;
}
```

{{EmbedLiveSample("gap", "", 465)}}

Si vous inspectez ceci dans l'inspecteur de grille de vos outils de développement, vous notez que la ligne de la sous-grille se trouve au centre de la gouttière. Définir la gouttière à `0` agit de manière similaire à l'application d'une marge négative à un élément, en redonnant l'espace de la gouttière à l'élément.

![L'élément plus petit s'affiche dans l'espacement lorsque row-gap vaut 0 sur la sous-grille, comme le montre l'inspecteur de grille des outils de développement de Firefox.](gap.png)

## Lignes de grille nommées

Lors de l'utilisation d'une grille CSS, vous pouvez [nommer les lignes de votre grille](/fr/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines), puis positionner les éléments selon ces noms plutôt que selon le numéro de ligne. Les noms de lignes de la grille parente sont transmis à la sous-grille et vous pouvez les utiliser pour placer les éléments. Dans l'exemple ci-dessous, les lignes nommées `col-start` et `col-end` de la grille parente servent à placer le sous-élément.

```html live-sample___line-names
<div class="grille">
  <div class="element">
    <div class="sous-element"></div>
  </div>
</div>
```

```css hidden live-sample___line-names
* {
  box-sizing: border-box;
}

.grille {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.element {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}

.sous-element {
  background-color: rgb(40 240 83);
}
```

```css live-sample___line-names
.grille {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr [col-start] 1fr 1fr 1fr [col-end] 1fr 1fr 1fr;
  grid-template-rows: repeat(4, minmax(100px, auto));
  gap: 20px;
}

.element {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}

.sous-element {
  grid-column: col-start / col-end;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample("line-names", "", 465)}}

Vous pouvez également définir des noms de lignes sur la sous-grille. Pour cela, ajoutez une liste de noms de lignes entre crochets après le mot-clé `subgrid`. Par exemple, si vous avez quatre lignes dans votre sous-grille et que vous voulez toutes les nommer, vous pouvez utiliser la syntaxe `grid-template-columns: subgrid [line1] [line2] [line3] [line4]`

Les lignes définies sur la sous-grille sont ajoutées aux lignes définies sur la grille parente, vous pouvez donc utiliser les unes, les autres ou les deux. Dans cet exemple, un élément est placé en dessous à l'aide des lignes parentes et un autre à l'aide des lignes de la sous-grille.

```html live-sample___adding-line-names
<div class="grille">
  <div class="element">
    <div class="sous-element"></div>
    <div class="sous-element2"></div>
  </div>
</div>
```

```css hidden live-sample___adding-line-names
* {
  box-sizing: border-box;
}

.grille {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.element {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}

.sous-element {
  background-color: rgb(40 240 83);
}
```

```css live-sample___adding-line-names
.grille {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr [col-start] 1fr 1fr 1fr [col-end] 1fr 1fr 1fr;
  grid-template-rows: repeat(4, minmax(100px, auto));
  gap: 20px;
}

.element {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid [sub-a] [sub-b] [sub-c] [sub-d] [sub-e] [sub-f];
  grid-template-rows: subgrid;
}

.sous-element {
  grid-column: col-start / col-end;
  grid-row: 1 / 3;
}

.sous-element2 {
  background-color: rgb(0 0 0 / 0.5);
  grid-column: sub-b / sub-d;
  grid-row: 1;
}
```

{{EmbedLiveSample("adding-line-names", "", 465)}}

## Utiliser les sous-grilles

Une sous-grille fonctionne de manière très similaire à n'importe quelle grille imbriquée&nbsp;; la seule différence est que la dimension des pistes de la sous-grille est définie sur la grille parente. Toutefois, comme pour toute grille imbriquée, la taille du contenu de la sous-grille peut modifier la dimension des pistes, en supposant qu'une méthode de dimensionnement des pistes est utilisée et permet au contenu d'influencer la taille. Dans ce cas, les pistes de lignes dont la taille est automatique s'agrandissent pour contenir le contenu de la grille principale et celui de la sous-grille.

Comme la valeur sous-grille agit presque de la même manière qu'une grille imbriquée ordinaire, il est facile de passer de l'une à l'autre. Par exemple, si vous constatez que vous avez besoin d'une grille implicite pour les lignes, vous devez supprimer la valeur `subgrid` de `grid-template-rows` et éventuellement donner une valeur à `grid-auto-rows` pour contrôler le dimensionnement des pistes implicites.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Vidéo&nbsp;: Mettre en page des formulaires avec subgrid <sup>(angl.)</sup>](https://www.youtube.com/watch?v=gmQlK3kRft4) (2019)
- [Vidéo&nbsp;: N'attendez pas pour utiliser subgrid afin d'améliorer la disposition des cartes <sup>(angl.)</sup>](https://www.youtube.com/watch?v=lLnFtK1LNu4) (2019)
- [Vidéo&nbsp;: Bonjour subgrid&nbsp;! <sup>(angl.)</sup>](https://www.youtube.com/watch?v=vxOj7CaWiPU) présentation de CSSConf.eu (2019)
