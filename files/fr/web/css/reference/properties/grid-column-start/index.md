---
title: grid-column-start
slug: Web/CSS/Reference/Properties/grid-column-start
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`grid-column-start`** définit la position de début d'un élément de la grille sur la colonne de la grille en ajoutant une ligne, un fragment (<i lang="en">span</i> en anglais) ou rien (automatique) à son placement sur la grille. Cette position de début définit le bord de début en bloc de la {{Glossary("grid areas", "zone de grille")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: grid-column-start")}}

```css interactive-example-choice
grid-column-start: auto;
```

```css interactive-example-choice
grid-column-start: 2;
```

```css interactive-example-choice
grid-column-start: -1;
```

```css interactive-example-choice
grid-column-start: span 2;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">Un</div>
    <div>Deux</div>
    <div>Trois</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  grid-template-rows: repeat(3, minmax(40px, auto));
  grid-gap: 10px;
  width: 200px;
}

.example-container > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}

#example-element {
  background-color: rgb(255 0 200 / 0.2);
  border: 3px solid rebeccapurple;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
grid-column-start: auto;

/* Valeurs de type <custom-ident> */
grid-column-start: unezonedegrille;

/* Valeurs de type <integer> + <custom-ident> */
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

- le mot-clé `auto`.
- un identifiant `<custom-ident>`.
- ou une valeur entière (`<integer>`)
- ou un identifiant (`<custom-ident>`) et un entier (`<integer>`) séparés par un espace
- ou le mot-clé `span` avec un identifiant (`<custom-ident>`) ou un entier (`<integer>`) ou les deux.

### Valeurs

- `auto`
  - : Un mot-clé qui indique que la propriété ne contribue pas au placement de l'élément sur la grille. Cela indique un placement automatique, une taille de fragment (<i lang="en">span</i> en anglais) automatique ou une taille par défaut de `1`.
- `<custom-ident>`
  - : S'il existe une ligne nommée avec `<custom-ident>-start`, le début de l'élément coincide avec la première ligne correspondante.

    > [!NOTE]
    > Les noms des zones de grille sont générés implicitement. Ainsi, en utilisant `grid-column-start: toto;` cela sélectionnera le bord de la zone de grille nommée correspondante (sauf si une autre ligne `toto-start` a explicitement été déclarée).

    Sinon, la valeur est traitée comme si on avait utilisé `<custom-ident>` et la valeur `1`.

- `<integer> && <custom-ident>?`
  - : Le début de l'élément est placé sur la n-ième ligne de la grille. Si un entier négatif est utilisé, le comptage sera fait depuis la fin de la grille explicite.

    Si un nom est fourni pour `<custom-ident>`, seules les lignes ayant ce nom seront comptées. S'il n'y a pas suffisamment de lignes existant avec ce nom, toutes les lignes implicites seront considérées afin de trouver la position.

    Une valeur entière ({{CSSxRef("integer")}}) de `0` sera considérée comme invalide.

- `span && [ <integer> || <custom-ident> ]`
  - : Le début de l'élément est placé relativement au bord de fin pour occuper n colonnes.

    Si un nom fourni pour `<custom-ident>`, seules les lignes ayant ce nom seront comptées. S'il n'y a pas suffisamment de lignes existantes avec ce nom, toutes les lignes implicites du côté de la grille explicite et qui correspondent à la direction de la recherche seront comptées pour l'étendue de l'élément.

    Si l'entier ({{CSSxRef("integer")}}) n'est pas défini, la valeur par défaut sera `1`. Les entiers négatifs ou nuls sont invalides.

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

{{EmbedLiveSample("Définir la colonne de début pour un élément de grille", 230, 420)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("grid-column-end")}}
- La propriété raccourcie {{CSSxRef("grid-column")}}
- La propriété {{CSSxRef("grid-row-start")}}
- La propriété {{CSSxRef("grid-row-end")}}
- La propriété raccourcie {{CSSxRef("grid-row")}}
- [Le placement sur les lignes d'une grille](/fr/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- Vidéo&nbsp;: [sur le placement sur les lignes <sup>(angl.)</sup>](https://gridbyexample.com/video/series-line-based-placement/)
