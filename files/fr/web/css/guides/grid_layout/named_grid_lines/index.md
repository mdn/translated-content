---
title: Disposition avec des lignes de grille nommées
short-title: Utiliser les lignes de grille nommées
slug: Web/CSS/Guides/Grid_layout/Named_grid_lines
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dans les articles précédents, on a vu comment placer des objets sur les lignes définies par les pistes de la grille en utilisant [la définition des pistes de la grille](/fr/docs/Web/CSS/Guides/Grid_layout/Line-based_placement) et également comment placer des objets [en utilisant des zones de modèle nommées](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas). Dans ce guide, nous allons examiner comment ces deux concepts fonctionnent ensemble lorsque nous utilisons des lignes nommées.

Le nommage des lignes est extrêmement utile, mais une partie de la syntaxe de la grille qui peut prêter à confusion provient de cette combinaison de noms et de tailles de pistes. Une fois que vous travaillez sur quelques exemples, cela devient plus clair et plus facile à utiliser.

## Nommer des lignes lorsqu'on définit une grille

Vous pouvez donner un nom à certaines ou à toutes les lignes de votre grille lorsque vous définissez votre grille avec les propriétés {{CSSxRef("grid-template-rows")}} et {{CSSxRef("grid-template-columns")}}. Pour illustrer ce point, nous allons utiliser la disposition de base créée dans le guide sur [le placement sur les lignes](/fr/docs/Web/CSS/Guides/Grid_layout/Line-based_placement). Cette fois, nous allons créer la grille en utilisant des lignes nommées.

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

Lorsqu'on définit la grille, on nomme nos lignes entre crochets (`[]`). Ces noms peuvent être n'importe quelle valeur. On définit un nom pour le début et la fin du conteneur, à la fois pour les lignes et pour les colonnes. Dans ce cas, les lignes de début et de fin du bloc central de la grille sont respectivement nommées `content-start` et `content-end`.

```css
.enveloppe {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
```

Nous n'avons pas besoin de nommer toutes les lignes de nos grilles&nbsp;; vous pouvez choisir de ne nommer que les lignes clés de votre disposition.

Une fois que les lignes ont des noms, nous pouvons utiliser le nom que nous avons défini, plutôt que le numéro de ligne, pour placer les éléments de la grille.

```css
.boite1 {
  grid-column-start: main-start;
  grid-row-start: main-start;
  grid-row-end: main-end;
}

.boite2 {
  grid-column-start: content-end;
  grid-row-start: main-start;
  grid-row-end: content-end;
}

.boite3 {
  grid-column-start: content-start;
  grid-row-start: main-start;
}

.boite4 {
  grid-column-start: content-start;
  grid-column-end: main-end;
  grid-row-start: content-end;
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

{{EmbedLiveSample("Nommer des lignes lorsqu'on définit une grille", 500, 305)}}

Tout le reste du placement sur les lignes fonctionne de la même manière. Dans notre disposition en grille, nous avons donné un nom d'alias à chaque ligne numérotée. Dans les éléments de notre grille, nous faisons référence à un nom plutôt qu'à un numéro. Nommer les lignes de cette manière est utile — lorsque nous créons une disposition adaptative, nous pouvons mettre à jour les propriétés de grille du conteneur plutôt que les éléments de la grille dans chaque [requête de média](/fr/docs/Web/CSS/Guides/Media_queries/Using).

### Donner plusieurs noms à une ligne

On peut donner plusieurs noms à une ligne (par exemple une ligne qui décrit la fin de la barre latérale et le début du contenu principal). Pour cela, à l'intérieur des crochets, on déclare les différents noms, séparés par un espace&nbsp;: `[sidebar-end main-start]`. On peut ensuite désigner la ligne par l'un de ces noms.

## Définir des zones de grilles implicites à l'aide de lignes nommées

Lorsque nous nommons les lignes, nous indiquons que vous pouvez leur donner le nom de votre choix. Le nom est un {{CSSxRef("custom-ident")}}, un nom défini par l'auteur·ice. Lorsque vous choisissez le nom, vous devez éviter les mots qui peuvent apparaître dans la spécification et prêter à confusion, comme `span`. Les identifiants ne sont pas entre guillemets.

Vous pouvez choisir n'importe quel nom, mais si vous ajoutez `-start` et `-end` aux lignes qui entourent une zone, comme dans l'exemple ci-dessus, la grille crée une zone nommée à partir du nom principal utilisé. Dans l'exemple ci-dessus, nous avons `content-start` et `content-end` pour les lignes et pour les colonnes. Cela signifie que nous obtenons une zone de grille nommée `content`, dans laquelle nous pouvons placer un élément si nous le souhaitons.

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

On utilise les mêmes définitions qu'avant mais cette fois, nous allons placer un objet dans la zone intitulée `content`.

```css
.enveloppe {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
.chose {
  grid-area: content;
}
```

```html
<div class="enveloppe">
  <div class="chose">Je suis dans une zone nommée content.</div>
</div>
```

{{EmbedLiveSample("Définir des zones de grilles implicites à l'aide de lignes nommées", 500, 305)}}

Nous n'avons pas besoin de définir où les zones sont avec {{CSSxRef("grid-template-areas")}} puisque nos lignes nommées ont créé une zone pour nous.

## Définir des lignes implicites à l'aide de zones nommées

Nous avons vu comment les lignes nommées créent une zone nommée, et cela fonctionne également dans l'autre sens. Les zones de modèle nommées créent des lignes nommées que vous pouvez utiliser pour positionner vos éléments. Si nous prenons la disposition créée dans le guide sur les [zones de modèle de grille](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas), nous pouvons utiliser les lignes créées par nos zones pour voir comment cela fonctionne.

Dans cet exemple, nous avons ajouté un élément `<div>` supplémentaire avec la classe `superposition`. Nous avons créé des zones nommées à l'aide de la propriété {{CSSxRef("grid-area")}}, puis une disposition créée dans `grid-template-areas`. Les noms des zones sont les suivants&nbsp;:

- `hd`
- `ft`
- `main`
- `sd`

Cela crée implicitement les lignes et colonnes suivantes&nbsp;:

- `hd-start`
- `hd-end`
- `sd-start`
- `sd-end`
- `main-start`
- `main-end`
- `ft-start`
- `ft-end`

Vous pouvez voir les lignes nommées sur l'image. Notez que certaines lignes portent deux noms — par exemple, `sd-end` et `main-start` désignent la même ligne de colonne.

![Une image montrant les noms de lignes implicites créés par nos zones de grille.](5_multiple_lines_from_areas.png)

Le positionnement d'un `superposition` à l'aide de ces lignes implicites nommées revient à positionner un élément à l'aide de lignes nommées.

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
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd sd sd main main main main main main"
    "ft ft ft ft   ft   ft   ft   ft   ft";
}

.en-tete {
  grid-area: hd;
}

.pied-page {
  grid-area: ft;
}

.contenu {
  grid-area: main;
}

.barre-laterale {
  grid-area: sd;
}

.enveloppe > div.superposition {
  z-index: 10;
  grid-column: main-start / main-end;
  grid-row: hd-start / ft-end;
  border: 4px solid rgb(92 148 13);
  background-color: rgb(92 148 13 / 40%);
  color: rgb(92 148 13);
  font-size: 150%;
}
```

```html
<div class="enveloppe">
  <div class="en-tete">En-tête</div>
  <div class="barre-laterale">Barre latérale</div>
  <div class="contenu">Contenu</div>
  <div class="pied-page">Pied de page</div>
  <div class="superposition">Masque</div>
</div>
```

{{EmbedLiveSample("Définir des lignes implicites à l'aide de zones nommées", 500, 305)}}

Étant donné que nous avons la possibilité de positionner des lignes créées à partir de zones nommées et des zones à partir de lignes nommées, il vaut la peine de consacrer un peu de temps à la planification de votre stratégie de nommage dès le début de la création de votre mise en page en grille. Choisir des noms qui ont du sens pour vous et votre équipe rend vos dispositions plus intuitives.

## Définir plusieurs lignes qui ont le même nom avec `repeat()`

Si vous souhaitez attribuer un nom unique à toutes vos lignes de grille, vous devez définir la piste à l'aide de propriétés explicites plutôt que d'utiliser la syntaxe de répétition, car les noms doivent être ajoutés entre crochets lors de la définition des pistes. Si vous utilisez la syntaxe de répétition, vous obtenez plusieurs lignes portant le même nom, ce qui peut s'avérer utile ou prêter à confusion, selon les exigences de votre disposition.

### Une grille à 12 colonnes avec `repeat()`

Dans cet exemple, nous créons une grille composée de 12 colonnes de largeur égale. Avant de définir la largeur `1fr` de la piste de colonne, nous définissons une ligne nommée `[col-start]`. Cela signifie que nous avons une grille comportant 12 lignes de colonne, toutes nommées `col-start`, avant une colonne d'une largeur de `1fr`.

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
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

Une fois que vous avez créé la grille, vous pouvez y placer des éléments. Comme nous avons plusieurs lignes nommées `col-start`, si vous placez un élément qui commence après une ligne `col-start`, c'est la première ligne nommée `col-start` qui est utilisée. Dans notre cas, il s'agit de la ligne située complètement à gauche. Pour cibler une autre ligne, utilisez le nom suivi du numéro correspondant à cette ligne.

Pour placer un élément s'étendant de la première ligne nommée `col-start` à la 5e ligne portant ce nom, nous pouvons utiliser&nbsp;:

```css
.element1a5 {
  grid-column: col-start / col-start 5;
}
```

Vous pouvez également utiliser le mot-clé `span`. Cet élément s'étend sur 3 lignes à partir de la 7e ligne, nommée `col-start`&nbsp;:

```css
.element7a9 {
  grid-column: col-start 7 / span 3;
}
```

```html
<div class="enveloppe">
  <div class="element1a5">Je vais de col-start 1 à col-start 5</div>
  <div class="element7a9">
    Je vais de col-start 7 et je m'étends sur 3 lignes
  </div>
</div>
```

{{EmbedLiveSample("Une grille à 12 colonnes avec `repeat()`", 500, 100)}}

Si vous examinez cette disposition dans les outils de développement de votre navigateur, vous voyez comment s'affichent les lignes de colonnes et comment nos éléments sont positionnés par rapport à ces lignes.

![La grille à 12 colonnes avec les éléments positionnés. L'outil de mise en évidence de la grille de Firefox indique la position des lignes.](5_named_lines1.png)

### Définir des lignes nommées avec une liste de piste

La syntaxe `repeat()` peut également prendre en paramètre une liste de pistes&nbsp;; il n'y a pas que les pistes individuelles qui peuvent être répétées.

Ce code CSS crée une grille à huit pistes, avec une colonne plus étroite d'une largeur de `1fr` nommée `col1-start`, suivie d'une colonne plus large de `3fr` nommée `col2-start`.

```css
.enveloppe {
  grid-template-columns: repeat(4, [col1-start] 1fr [col2-start] 3fr);
}
```

Si votre syntaxe de répétition place deux lignes l'une à côté de l'autre, celles-ci sont fusionnées et produisent le même résultat que si vous attribuez plusieurs noms à une même ligne dans une définition de piste sans répétition. La définition suivante crée quatre pistes `1fr`, chacune comportant une ligne de début et une ligne de fin.

```css
.enveloppe {
  grid-template-columns: repeat(4, [col-start] 1fr [col-end]);
}
```

Si l'on écrit cette déclaration sans utiliser la notation de répétition, elle se présente comme suit&nbsp;:

```css
.enveloppe {
  grid-template-columns: [col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end];
}
```

À l'aide d'une liste de pistes, on peut utiliser le mot-clé `span` pour couvrir un certain nombre de lignes, y compris des lignes portant un nom donné&nbsp;:

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
  grid-template-columns: repeat(6, [col1-start] 1fr [col2-start] 3fr);
}

.element1 {
  grid-column: col1-start / col2-start 2;
}

.element2 {
  grid-row: 2;
  grid-column: col1-start 2 / span 2 col1-start;
}
```

```html
<div class="enveloppe">
  <div class="element1">
    Je suis placé à partir de la première col1-start et jusqu'à la deuxième
    col2-start.
  </div>
  <div class="element2">
    Je suis placé à partir de la deuxième col1-start et je m'étend sur deux
    lignes nommées col1-start
  </div>
</div>
```

{{EmbedLiveSample("Définir des lignes nommées avec une liste de piste", 500, 255)}}

### Cadre d'une grille à 12 colonnes

Après avoir découvert le positionnement numérique et par nom basé sur les lignes, ainsi que les [zones de modèle de grille](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas), nous savons désormais qu'il existe plusieurs façons de positionner des éléments à l'aide de la disposition en grille CSS. Cela peut sembler trop complexe, mais vous n'avez pas besoin de toutes les utiliser. En pratique, l'utilisation des zones de modèle nommées fonctionne bien pour les dispositions simples, car cette méthode offre une bonne représentation visuelle de votre disposition et rend le déplacement des éléments sur la grille plus intuitif. Par exemple, lorsque vous travaillez avec une disposition stricte à plusieurs colonnes, la démonstration sur les lignes nommées présentée dans la dernière partie de ce guide s'avère très utile.

Les systèmes de grille traditionnels tels que Foundation ou Bootstrap reposent sur une grille à 12 colonnes. Ces cadriciels (<i lang="en">frameworks</i> en anglais) importent du code permettant d'effectuer des calculs qui garantissent que la somme des largeurs des colonnes est égale à 100%. Les cadriciels ne sont pas indispensables&nbsp;! Le seul code CSS dont nous avons besoin pour un «&nbsp;cadriciel&nbsp;» de grille à 12 colonnes est le suivant&nbsp;:

```css
.enveloppe {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

Nous pouvons ensuite utiliser ce «&nbsp;cadriciel&nbsp;» pour mettre en page notre page.

Par exemple, pour créer une mise en page à trois colonnes avec un en-tête et un pied de page, nous pouvons utiliser le code suivant.

```css hidden
* {
  box-sizing: border-box;
}

.enveloppe {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.enveloppe > * {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="enveloppe">
  <header class="en-tete-principal">Je suis l'en-tête</header>
  <aside class="lateral1">Je suis la barre latérale 1</aside>
  <article class="contenu">Je suis l'article</article>
  <aside class="lateral2">Je suis la barre latérale 2</aside>
  <footer class="pied-page-principal">Je suis le pied de page</footer>
</div>
```

Pour placer ces éléments, on utilise la grille de la façon suivante&nbsp;:

```css
.en-tete-principal,
.pied-page-principal {
  grid-column: col-start / span 12;
}

.lateral1 {
  grid-column: col-start / span 3;
  grid-row: 2;
}

.contenu {
  grid-column: col-start 4 / span 6;
  grid-row: 2;
}

.lateral2 {
  grid-column: col-start 10 / span 3;
  grid-row: 2;
}
```

{{EmbedLiveSample("Cadre d'une grille à 12 colonnes", 500, 205)}}

Une fois encore, l'outil de mise en évidence de la grille dans les outils de développement nous aide à comprendre le fonctionnement de la grille sur laquelle nous avons placé nos éléments.

![La disposition avec la grille mise en évidence.](5_named_lines2.png)

C'est tout ce dont nous avons besoin. Nous n'avons pas besoin de faire de calculs&nbsp;! La disposition de grille CSS a automatiquement supprimé notre piste de marge de 10 pixels avant d'attribuer l'espace aux pistes de colonne `1fr`.

Dans la suite, nous voyons comment la disposition de grille CSS peut positionner les éléments à notre place sans nécessiter aucune propriété de placement, dans le guide [Placement automatique dans la disposition de grille](/fr/docs/Web/CSS/Guides/Grid_layout/Auto-placement).
