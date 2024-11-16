---
title: grid-column-start
slug: Web/CSS/grid-column-start
l10n:
  sourceCommit: 84b1729de4f527c8d81e44a38fca70ea4db97922
---

{{CSSRef}}

La propriété **`grid-column-start`** définit la position du début d'un élément au sein de la grille de façon automatique, absolue ou relative par rapport à la fin de l'élément. La position de début définit le bord de la [zone de grille](/fr/docs/Glossary/Grid_Areas) selon l'axe logique de bloc (celui orthogonal au sens de lecteur).

{{EmbedInteractiveExample("pages/css/grid-column-start.html")}}

## Syntaxe

```css
/* Valeur avec un mot-clé */
grid-column-start: auto;

/* Valeur <custom-ident> */
grid-column-start: unezonedegrille;

/* Valeurs <integer> + <custom-ident> */
grid-column-start: 2;
grid-column-start: unezonedegrille 4;

/* Valeurs span + <integer> + <custom-ident> */
grid-column-start: span 3;
grid-column-start: span unezonedegrille;
grid-column-start: span unezonedegrille 5;

/* Valeurs globales */
grid-column-start: inherit;
grid-column-start: initial;
grid-column-start: revert;
grid-column-start: revert-layer;
grid-column-start: unset;
```

La valeur de cette propriété prend la forme d'une seule valeur `<grid-line>`. Une telle valeur peut être définie avec&nbsp;:

- le mot-clé `auto`
- un identifiant ([`<custom-ident>`](/fr/docs/Web/CSS/custom-ident))
- ou une valeur entière ([`<integer>`](/fr/docs/Web/CSS/integer))
- ou un identifiant et un entier séparés par un espace
- ou le mot-clé `span` avec un identifiant ou un entier ou les deux.

### Valeurs

- `auto`

  - : Un mot-clé qui indique que la propriété ne contribue pas au placement de l'élément sur la grille. Cela indique un placement automatique, une taille de fragment (<i lang="en">span</i>) automatique ou une taille par défaut de `1`.

- [`<custom-ident>`](/fr/docs/Web/CSS/custom-ident)

  - : S'il existe une ligne nommée avec '\<custom-ident>-start', le début de l'élément coincide avec la première ligne correspondante.

    > [!NOTE]
    > Les noms des zones de grille sont générés implicitement. Ainsi, en utilisant `grid-column-start: toto;` cela sélectionnera le bord de la zone de grille nommée correspondante (sauf si une autre ligne `toto-start` a explicitement été déclarée).

    Sinon, la valeur est traitée comme si on avait utilisé `<custom-ident>` et la valeur `1`.

- `<integer> && <custom-ident>?`

  - : Le début de l'élément est placé sur la n-ième ligne de la grille. Si un entier négatif est utilisé, le comptage sera fait depuis la fin de la grille explicite.

    Si un nom est fourni pour `<custom-ident>`, seules les lignes ayant ce nom seront comptées. S'il n'y a pas suffisamment de lignes existant avec ce nom, toutes les lignes implicites seront considérées afin de trouver la position.

    Une valeur entière de `0` sera considérée comme invalide.

- `span && [ <integer> || <custom-ident> ]`

  - : Le début de l'élément est placé relativement au bord de fin pour occuper n colonnes.

    Si un nom fourni pour `<custom-ident>`, seules les lignes ayant ce nom seront comptées. S'il n'y a pas suffisamment de lignes existantes avec ce nom, toutes les lignes implicites du côté de la grille explicite et qui correspondent à la direction de la recherche seront comptées pour l'étendue de l'élément.

    Si l'entier n'est pas défini, la valeur par défaut sera `1`. Les entiers négatifs ou nuls sont invalides.

    `<custom-ident>` ne peut pas prendre la valeur `span`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la colonne de début pour un élément de grille

#### HTML

```html
<div class="wrapper">
  <div class="box1">Un</div>
  <div class="box2">Deux</div>
  <div class="box3">Trois</div>
  <div class="box4">Quatre</div>
  <div class="box5">Cinq</div>
</div>
```

#### CSS

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: span 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 5;
}
```

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

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

#### Résultat

{{EmbedLiveSample('définir_la_colonne_de_début_pour_un_élément_de_grille', '230', '420')}}

### Placement relatif aux lignes

#### HTML

```html
<div class="wrapper">
  <div class="box1">Un</div>
  <div class="box2">Deux</div>
  <div class="box3">Trois</div>
  <div class="box4">Quatre</div>
  <div class="box5">Cinq</div>
</div>
```

#### CSS

```css
.wrapper {
  display: grid;
  grid-template-columns: [main-start] 2fr [main] 1fr [main] 1fr [inter] 1fr [main];
}

.box1 {
  grid-column-start: span 2 main;
  grid-column-end: 5;
}

.box2 {
  grid-column-start: span 2 main;
  grid-column-end: inter;
}

.box3 {
  grid-column-start: span 2 main;
  grid-column-end: main;
}
```

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

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

#### Résultat

{{EmbedLiveSample('placement_relatif_aux_lignes', '230', '220')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`grid-column-end`](/fr/docs/Web/CSS/grid-column-end)
- [`grid-column`](/fr/docs/Web/CSS/grid-column)
- [`grid-row-start`](/fr/docs/Web/CSS/grid-row-start)
- [`grid-row-end`](/fr/docs/Web/CSS/grid-row-end)
- [`grid-row`](/fr/docs/Web/CSS/grid-row)
- [Guide&nbsp;: le placement sur les lignes d'une grille](/fr/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Tutoriel vidéo en anglais sur le placement sur les lignes](https://gridbyexample.com/video/series-line-based-placement/)
