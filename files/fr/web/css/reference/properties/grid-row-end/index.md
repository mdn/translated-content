---
title: grid-row-end
slug: Web/CSS/Reference/Properties/grid-row-end
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`grid-row-end`** définit la position de fin d'un élément de la grille sur la ligne de la grille en ajoutant une ligne, un fragment (<i lang="en">span</i> en anglais) ou rien (automatique) à son placement sur la grille, définissant ainsi le bord de fin en ligne de sa {{Glossary("grid areas", "zone de grille")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: grid-row-end")}}

```css interactive-example-choice
grid-row-end: auto;
```

```css interactive-example-choice
grid-row-end: 3;
```

```css interactive-example-choice
grid-row-end: -1;
```

```css interactive-example-choice
grid-row-end: span 3;
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
grid-row-end: auto;

/* Valeurs de type <custom-ident> */
grid-row-end: une-zone-de-grille;

/* Valeurs de type <integer> + <custom-ident> */
grid-row-end: 2;
grid-row-end: une-zone-de-grille 4;

/* Valeurs span + <integer> + <custom-ident> */
grid-row-end: span 3;
grid-row-end: span une-zone-de-grille;
grid-row-end: 5 une-zone-de-grille span;

/* Valeurs globales */
grid-row-end: inherit;
grid-row-end: initial;
grid-row-end: revert;
grid-row-end: revert-layer;
grid-row-end: unset;
```

### Valeurs

- `auto`
  - : Un mot-clé qui indique que la propriété ne contribue pas au placement de l'objet sur la grille. Par défaut, la taille du fragment allouée vaut `1` s'il n'y a pas d'autres contraintes.
- `<custom-ident>`
  - : S'il existe une ligne nommée `<custom-ident>-end`, cela placera l'élément sur la première ligne correspondante..

    > [!NOTE]
    > Les noms de zones génèrent automatiquement les noms de lignes sous cette forme. Ainsi, `grid-row-end: toto;` permettra de désigner l'extrêmité (à la fin) de la zone nommée (sauf si une autre ligne a explicitement été nommée avec `toto-end`).

    Si aucune zone ne correspond, la valeur est traitée comme la combinaison de l'entier 1 et de `<custom-ident>` (cf. définition suivante).

    `<custom-ident>` ne peut pas prendre les valeurs `span` et `auto`.

- `<integer> && <custom-ident>?`
  - : Contribue au placement de l'élément sur la n-ième ligne. Si une valeur négative est fournie, les lignes correspondantes sont comptées depuis la dernière.

    Si un nom est fourni pour `<custom-ident>`, seules les lignes avec ce nom sont comptées. S'il n'y a pas suffisamment de lignes avec ce nom, on considère que toutes les lignes sont intitulées avec ce nom afin de trouver une position.

    Un entier ({{CSSxRef("&lt;integer&gt;")}}) de valeur `0` ne peut pas être utilisé (la règle est invalide).

- `span && [ <integer> || <custom-ident> ]`
  - : Un fragment de grille est utilisé pour le placement de l'élément sur la grille afin que le début de la ligne pour l'élément de la grille soit placé à n lignes du bord situé au début.

    Si un nom fourni pour `<custom-ident>`, seules les lignes ayant ce nom seront comptées. S'il n'y a pas suffisamment de lignes existantes avec ce nom, tout les lignes implicites du côté de la grille explicite et qui correspondent à la direction de la recherche seront comptées afin de placer ce fragment.

    Si l'entier ({{CSSxRef("&lt;integer&gt;")}}) est absent, la valeur par défaut sera `1`. Les entiers négatifs ou `0` ne sont pas autorisés.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la fin de ligne pour un élément de la grille

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
  grid-column-start: 1;
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

## Résultat

{{EmbedLiveSample("Définir la fin de ligne pour un élément de la grille", 230, 420)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("grid-row-start")}}
- La propriété raccourcie {{CSSxRef("grid-row")}}
- La propriété {{CSSxRef("grid-column-start")}}
- La propriété {{CSSxRef("grid-column-end")}}
- La propriété raccourcie {{CSSxRef("grid-column")}}
- [Placer les éléments d'une grille sur les lignes](/fr/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- Vidéo&nbsp;: [le placement des éléments d'une grille sur les lignes <sup>(angl.)</sup>](https://gridbyexample.com/video/series-line-based-placement/)
