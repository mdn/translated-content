---
title: grid-row
slug: Web/CSS/grid-row
---

{{CSSRef}}

La propriété **`grid-row`** est une propriété raccourcie pour {{cssxref("grid-row-start")}} et {{cssxref("grid-row-end")}}. Elle permet de définir la taille et l'emplacement d'un élément sur la grille en indiquant l'emplacement du début, de la fin et/ou sa taille.

{{EmbedInteractiveExample("pages/css/grid-row.html")}}

Si deux valeurs **\<grid-line>** sont utilisées pour la propriété, la valeur de **`grid-row-start`** sera définie avec la première valeur avant la barre oblique et la valeur de **`grid-row-end`** sera définie avec celle qui est située après la barre oblique.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
grid-row: auto;
grid-row: auto / auto;

/* Valeurs <custom-ident> */
grid-row: unezonedegrille;
grid-row: unezonedegrille / unezonedegrille;

/* Valeurs <integer> + <custom-ident> */
grid-row: unezonedegrille 4;
grid-row: 4 unezonedegrille / 6;

/* Valeurs span + <integer> + <custom-ident> */
grid-row: span 3;
grid-row: span unezonedegrille;
grid-row: 5 unezonedegrille span;
grid-row: span 3 / 6;
grid-row: span unezonedegrille / span unezonedegrille;
grid-row: 5 unezonedegrille span / 2 span;

/* Valeurs globales */
grid-row: inherit;
grid-row: initial;
grid-row: unset;
```

### Valeurs

- `auto`
  - : Un mot-clé qui indique que la propriété ne contribue pas au placement de l'élément sur la grille. Cela indique un placement automatique, une taille de fragment (_span_) automatique ou une taille par défaut de `1`.
- `<custom-ident>`

  - : S'il existe une ligne nommée avec '\<custom-ident>-start'/'\<custom-ident>-end', la première ligne correspondante contribue au placement de l'élément sur la grille.

    > **Note :** Les noms des zones de grille sont générés implicitement. Ainsi, en utilisant `grid-row-start: foo;` cela sélectionnera le début de la grille nommée correspondante (sauf si une autre ligne `foo-start`/`foo-end` a été explicitement déclarée).

    Sinon, la valeur est traitée comme si on avait utilisé `<custom-ident>` et la valeur `1`.

- `<integer> && <custom-ident>?`

  - : La n-ième ligne de la grille contribue au placement de l'élément sur la grille. Si un entier négatif est utilisé, le comptage sera fait depuis la fin de la grille explicite.

    Si un nom est fourni pour \<custom-ident>, seules les lignes ayant ce nom seront comptées. S'il n'y a pas suffisamment de lignes existant avec ce nom, toutes les lignes implicites seront comptées afin de trouver la position.

    Si la valeur entière utilisée est `0`, la règle est invalide.

- `span && [ <integer> || <custom-ident> ]`

  - : Un fragment de grille est utilisé pour le placement de l'élément sur la grille afin que le début de la ligne pour l'élément de la grille soit placé à n lignes du bord de fin.

    Si un nom fourni pour \<custom-ident>, seules les lignes ayant ce nom seront comptées. S'il n'y a pas suffisamment de lignes existantes avec ce nom, tout les lignes implicites du côté de la grille explicite et qui correspondent à la direction de la recherche seront comptées afin de placer ce fragment.

    Si l'entier n'est pas défini, la valeur par défaut qui sera utilisée sera `1`. Les entiers négatifs ou nuls sont invalides.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template-columns: 200px;
  grid-template-rows: repeat(6, 1fr);
}

#item1 {
  background-color: lime;
}

#item2 {
  background-color: yellow;
  grid-row: 2 / 4;
}

#item3 {
  background-color: blue;
  grid-row: span 2 / 7;
}
```

### HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", "200px", "200px")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- [Guide : Placer les éléments d'une grille sur les lignes](/fr/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- Tutoriel vidéo : [le placement des éléments d'une grille sur les lignes (en anglais)](https://gridbyexample.com/video/series-line-based-placement/)
