---
title: Utiliser des lignes nommées sur une grille
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines
---

{{CSSRef}}

{{PreviousMenuNext("Web/CSS/CSS_Grid_Layout/Définir_des_zones_sur_une_grille", "Web/CSS/CSS_Grid_Layout/Placement_automatique_sur_une_grille_CSS","Web/CSS/CSS_Grid_Layout")}}

Dans les articles précédents, on a vu comment placer des objets sur les lignes définies par les pistes de la grilles. On a également vu comment placer des objets sur des zones nommées. Dans ce guide, nous allons combiner ces deux concepts et apprendre à placer les objets sur des lignes avec des noms. Le nommage des lignes peut s'avérer très utile mais un aspect encore plus intéressant consiste à combiner les noms et les tailles de pistes. Cela sera plus clair lorsque nous aurons vu les différents exemples.

## Nommer des lignes lorsqu'on définit une grille

Lorsqu'on définit une grille avec `grid-template-rows` et `grid-template-columns`, on peut donner des noms aux lignes (toutes ou seulement quelques unes). Pour illustrer ce point, nous allons reprendre la disposition utilisée dans l'article sur le placement sur les lignes. Cette fois, nous allons utiliser des lignes avec des noms.

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

Lorsqu'on définit la grille, on nomme les lignes entre crochets. Ces noms peuvent être n'importe quelle valeur. Ici, on définit un nom pour le début et la fin du conteneur, pour les lignes et pour les colonnes. On définit les blocs du centres (ici `content-start` et `content-end`), à la fois pour les lignes et pour les colonnes. Il n'est pas nécessaire de nommer toutes les lignes de la grille, on peut très bien uniquement nommer celles qui sont importantes.

```css
.wrapper {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
```

Une fois que les lignes sont nommées, on peut utiliser ce nom plutôt que le numéro de ligne afin de placer les éléments.

```css
.box1 {
  grid-column-start: main-start;
  grid-row-start: main-start;
  grid-row-end: main-end;
}
.box2 {
  grid-column-start: content-end;
  grid-row-start: main-start;
  grid-row-end: content-end;
}
.box3 {
  grid-column-start: content-start;
  grid-row-start: main-start;
}
.box4 {
  grid-column-start: content-start;
  grid-column-end: main-end;
  grid-row-start: content-end;
}
```

```html
<div class="wrapper">
  <div class="box1">Un</div>
  <div class="box2">Deux</div>
  <div class="box3">Trois</div>
  <div class="box4">Quatre</div>
</div>
```

{{EmbedLiveSample("Nommer_des_lignes_lorsqu'on_définit_une_grille", '500', '330')}}

Tout le reste continue de fonctionner de la même façon. Vous pouvez aussi utiliser des noms et des numéros. Le nommage des lignes est utile lorsqu'on souhaite créer une disposition _responsive_ où on redéfinit la grille plutôt que d'avoir à redéfinir la position du contenu en changeant les numéros de lignes dans les _media queries_.

### Donner plusieurs noms à une ligne

On peut donner plusieurs noms à une ligne (par exemple une ligne qui décrirait la fin de la barre latérale et le début du contenu principal). Pour cela, à l'intérieur des crochets, on déclare les différents noms, séparés par un espace : `[sidebar-end main-start]`. On peut ensuite désigner la ligne par l'un de ces noms.

## Définir des zones de grilles implicites à l'aide de lignes nommées

Plus haut, nous avons vu qu'il était possible de donner n'importe quel nom à une ligne. D'un point de vue technique, ce nom est un [identifiant personnalisé (ou _custom ident_)](https://drafts.csswg.org/css-values-4/#custom-idents), c'est-à-dire un nom défini par l'auteur de la feuille de style. Pour être plus précis, ce nom ne doit pas reprendre les mots-clés qui apparaissent dans la spécification et ne doit pas être source de confusion (on évitera ainsi d'utiliser `span`). Les identifiants ne sont pas mis entre quotes.

Bien qu'on puisse choisir n'importe quel nom (avec les contraintes qu'on vient d'énoncer), si on utilise les suffixes `-start` et `-end` pour désigner les lignes qui entourent une zone (comme dans l'exemple ci-avant), la grille créera automatiquement une zone nommée avec le nom utilisé devant ces suffixes. Si on reprend l'exemple précédent où on utilise `content-start` et `content-end` pour les lignes et pour les colonnes, cela signifie qu'on a, implicitement, une zone de grille intitulée `content` qu'on peut également manipuler

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

On utilise les mêmes définitions qu'avant mais cette fois, nous allons placer un objet dans la zone intitulée `content`.

```css
.wrapper {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
.thing {
  grid-area: content;
}
```

```html
<div class="wrapper">
  <div class="thing">Je suis dans une zone nommée content.</div>
</div>
```

{{EmbedLiveSample("Définir_des_zones_de_grilles_implicites_à_l'aide_de_lignes_nommées", '500', '330')}}

Il n'est pas nécessaire de définir l'emplacement de cette zone avec `grid-template-areas` car les lignes suffisent à créer la zone et à la placer.

## Définir des lignes implicites à l'aide de zones nommées

Nous avons vu comment des lignes nommées permettaient de créer des zones nommées. Cela fonctionne également dans l'autre sens. Les zones nommées créent aussi des lignes nommées qui peuvent ensuite être utilisées pour placer les objets. Si on reprend l'exemple utilisé dans le guide sur les zones nommées, on peut utiliser les lignes créées implicitement pour voir comment cela fonctionne.

Dans cet exemple, on ajoute un élément `div` supplémentaire et on lui ajoute la classe `overlay`. On déclare des zones nommées à l'aide de `grid-area` puis on indique la disposition via la propriété `grid-template-areas`. Les noms utilisés pour les zones sont :

- `hd`
- `ft`
- `main`
- `sd`

Cela crée implicitement les lignes et colonnes suivantes :

- `hd-start`
- `hd-end`
- `sd-start`
- `sd-end`
- `main-start`
- `main-end`
- `ft-start`
- `ft-end`

Dans l'image qui suit, on peut voir l'emplacement de ces lignes. Certaines lignes peuvent avoir deux noms (par exemple, `sd-end` et `main-start` font référence à la même ligne verticale).

![An image showing the implicit line names created by our grid areas.](5_multiple_lines_from_areas.png)

On peut positionner `overlay` grâce à ces lignes implicites, de la même façon qu'on aurait positionner un objet avec des lignes créées explicitement :

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
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd sd sd main main main main main main"
    "ft ft ft ft   ft   ft   ft   ft   ft";
}
.header {
  grid-area: hd;
}
.footer {
  grid-area: ft;
}
.content {
  grid-area: main;
}
.sidebar {
  grid-area: sd;
}
.wrapper > div.overlay {
  z-index: 10;
  grid-column: main-start / main-end;
  grid-row: hd-start / ft-end;
  border: 4px solid rgb(92, 148, 13);
  background-color: rgba(92, 148, 13, 0.4);
  color: rgb(92, 148, 13);
  font-size: 150%;
}
```

```html
<div class="wrapper">
  <div class="header">En-tête</div>
  <div class="sidebar">Barre latérale</div>
  <div class="content">Contenu</div>
  <div class="footer">Pied de page</div>
  <div class="overlay">Masque</div>
</div>
```

{{EmbedLiveSample("Définir_des_lignes_implicites_à_l'aide_de_zones_nommées", '500', '330')}}

Grâce à tout ça, on voit qu'on peut créer des lignes à partir de zones nommées et créer des zones à partir de lignes nommées. Aussi, mieux vaut prendre le temps de réfléchir aux noms utilisés lorsqu'on définit un grille. En effet, plus les noms utilisés seront clairs, plus la maintenance et le travail d'équipe seront simplifiés.

## Utiliser plusieurs lignes avec le même nom : `repeat()`

Si vous souhaitez que chaque ligne ait un nom différent, il faudra alors définir la piste de façon détaillée et non utiliser la syntaxe avec `repeat()` car il faut préciser le nom de la ligne entre crochets lorsqu'on définit les pistes. Si vous utilisez la syntaxe avec `repeat()`, vous obtiendrez plusieurs lignes avec le même nom… ce qui peut également être utile.

### Une grille à 12 colonnes avec repeat()

Dans l'exemple qui suit, nous allons créer une grille avec douze colonnes de même largeur. Avant de définir la taille d'une piste pour la colonne (`1fr`), on définit un nom : `[col-start]`. Cela signifie qu'on aura une grille avec 12 colonnes, toutes intitulées `col-start` et qui mesureront chacune `1fr` de large.

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
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

Une fois la grille créée, on peut y placer les objets. On a alors plusieurs lignes avec le nom `col-start` et si on place un objet après la ligne `col-start`, la grille utilisera la première ligne intitulée `col-start` (dans notre cas, c'est la ligne la plus à gauche). Pour indiquer une autre ligne, on utilisera le nom, suivi du numéro de cette ligne. Ainsi, pour placer un objet à partir de la première ligne jusqu'à la cinquième, on pourra utiliser :

```css
.item1 {
  grid-column: col-start / col-start 5;
}
```

On peut également utiliser le mot-clé `span`. Avec la règle suivante, le deuxième objet sera placé à partir de la septième ligne et occupera 3 lignes :

```css
.item2 {
  grid-column: col-start 7 / span 3;
}
```

```html
<div class="wrapper">
  <div class="item1">Je vais de col-start 1 à col-start 5</div>
  <div class="item2">Je vais de col-start 7 et je m'étends sur 3 lignes</div>
</div>
```

{{EmbedLiveSample("Une_grille_à_12_colonnes_avec_repeat", '500', '330')}}

Si vous observez cette disposition grâce à l'outil de mise en évidence des grilles dans Firefox, vous verrez les différentes lignes et le placement des éléments sur ces lignes :

![The 12 column grid with items placed. The Grid Highlighter shows the position of the lines.](5_named_lines1.png)

### Définir des lignes nommées avec une liste de piste

La syntaxe `repeat()` permet également d'utiliser une liste de plusieurs pistes et pas uniquement une seule piste. Dans la règle qui suit, on crée une grille composée de huit pistes qui commence par une colonne plus étroite (`1fr`), intitulée `col1-start`, et qui est suivie par une colonne plus large (`3fr`), intitulée `col2-start`.

```css
.wrapper {
  grid-template-columns: repeat(4, [col1-start] 1fr [col2-start] 3fr);
}
```

Si on utilise `repeat()` et qu'on place deux lignes l'une à la suite de l'autre, ces lignes seront fusionnées et on aura le même résultat que si on avait donné plusieurs noms à un même ligne. La règle suivante permet de créer quatre pistes dont la largeur est `1fr`, chacune avec un début et une fin.

```css
.wrapper {
  grid-template-columns: repeat(4, [col-start] 1fr [col-end]);
}
```

Si on écrivait la même définition sans utiliser `repeat()`, on aurait la forme suivante :

```css
.wrapper {
  grid-template-columns: [col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end];
}
```

Si vous utilisez une liste de pistes, vous pouvez utiliser le mot-clé `span` pour indiquer le nombre de lignes à occuper mais aussi pour indiquer le nombre de lignes à occuper qui ont un nom donné.

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
  grid-template-columns: repeat(6, [col1-start] 1fr [col2-start] 3fr);
}
.item1 {
  grid-column: col1-start / col2-start 2;
}
.item2 {
  grid-row: 2;
  grid-column: col1-start 2 / span 2 col1-start;
}
```

```html
<div class="wrapper">
  <div class="item1">
    Je suis placé à partir de la première col1-start et jusqu'à la deuxième
    col2-start.
  </div>
  <div class="item2">
    Je suis placé à partir de la deuxième col1-start et je m'étend sur deux
    lignes nommées col1-start
  </div>
</div>
```

{{EmbedLiveSample('Définir_des_lignes_nommées_avec_une_liste_de_piste', '500', '330')}}

### Cadre d'une grille à 12 colonnes

Avec ces trois derniers articles, nous avons vu de nombreuses façons qui permettaient de placer des objets sur une grille. Cela peut sembler un peu trop inutilement compliqué mais il faut garder à l'esprit que toutes ne sont pas obligatoirement nécessaires. Dans la pratique, utiliser des zones nommés pour des dispositions simples permet d'avoir une représentation visuelle simple et de déplacer les différents objets facilement sur la grille.

Si on travaille avec une disposition sur plusieurs colonnes (comme celles utilisées dans ces derniers exemples), les lignes nommées feront parfaitement l'affaire. Si vous prenez par exemple des _frameworks_ tels que Foundation ou Bootstrap, ceux-ci fonctionnent sur une grille avec 12 colonnes. Le _framework_ importe ensuite le code nécessaire aux différents calculs afin de s'assurer que l'ensemble des colonnes fasse 100%. En utilisant une grille CSS, le seule code nécessaire pour obtenir un tel _framework_ se résume à :

```css
.wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

On peut alors utiliser ce modèle pour mettre en forme notre page. Par exemple, on peut créer une disposition avec trois colonnes, un en-tête et un pied de page avec les règles suivantes :

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > * {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <header class="main-header">Je suis l'en-tête</header>
  <aside class="side1">Je suis la barre latérale 1</aside>
  <article class="content">Je suis l'article</article>
  <aside class="side2">Je suis la barre latérale 2</aside>
  <footer class="main-footer">Je suis le pied de page</footer>
</div>
```

Pour placer ces éléments, on utilise la grille de la façon suivante :

```css
.main-header,
.main-footer {
  grid-column: col-start / span 12;
}
.side1 {
  grid-column: col-start / span 3;
  grid-row: 2;
}
.content {
  grid-column: col-start 4 / span 6;
  grid-row: 2;
}
.side2 {
  grid-column: col-start 10 / span 3;
  grid-row: 2;
}
```

{{ EmbedLiveSample('Cadre_dune_grille_à_12_colonnes', '500', '330') }}

Là encore, l'outil de mise en évidence de la grille permet de voir comment le placement fonctionne :

![The layout with the grid highlighted.](5_named_lines2.png)

Et voilà tout ce dont on a besoin. Aucun calcul compliqué, la grille a automatiquement retiré la gouttière de 10 pixels avant d'affecter l'espace aux pistes qui mesurent `1fr`. Lorsque vous construirez vos propres disposition, vous serez plus à l'aise avec la syntaxe et utiliserez les techniques qui sont les plus pertinentes pour vos projets. Essayez de construire cetaines dispositions classiques avec des différentes méthodes, vous deviendrez plus efficaces pour manipuler les grilles CSS. Dans le prochain guide, nous verrons comment la grille peut placer des objets automatiquement, sans même avoir besoin d'utiliser les propriétés de placement !

{{PreviousMenuNext("Web/CSS/CSS_Grid_Layout/Définir_des_zones_sur_une_grille", "Web/CSS/CSS_Grid_Layout/Placement_automatique_sur_une_grille_CSS","Web/CSS/CSS_Grid_Layout")}}
