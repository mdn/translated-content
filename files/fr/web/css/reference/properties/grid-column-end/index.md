---
title: grid-column-end
slug: Web/CSS/Reference/Properties/grid-column-end
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`grid-column-end`** définit la position de fin d'un élément de la grille sur la colonne de la grille en ajoutant une ligne, un fragment (<i lang="en">span</i> en anglais) ou rien (automatique) à son placement sur la grille, définissant ainsi le bord de fin en bloc de sa {{Glossary("grid areas", "zone de grille")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: grid-column-end")}}

```css interactive-example-choice
grid-column-end: auto;
```

```css interactive-example-choice
grid-column-end: 3;
```

```css interactive-example-choice
grid-column-end: -1;
```

```css interactive-example-choice
grid-column-end: span 3;
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
grid-column-end: auto;

/* Valeurs de type <custom-ident> */
grid-column-end: somegridarea;

/* Valeurs de type <integer> + <custom-ident> */
grid-column-end: 2;
grid-column-end: somegridarea 4;

/* Valeurs span + <integer> + <custom-ident> */
grid-column-end: span 3;
grid-column-end: span somegridarea;
grid-column-end: 5 somegridarea span;

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
    > Les noms de zones génèrent automatiquement les noms de colonnes sous cette forme. Ainsi, `grid-column-end: toto;` permettra de désigner l'extrêmité (à la fin) de la zone nommée (sauf si une autre colonne a explicitement été nommée avec `toto-end`).

    Si aucune zone ne correspond, la valeur est traitée comme la combinaison de l'entier 1 et de `<custom-ident>` (cf. définition suivante).

- `<integer> && <custom-ident>?`
  - : Contribue à la n-ieme ligne de la grille pour le placement de l'élément. Si un entier négatif est fourni, le comptage se fait en sens inverse, en partant du bord de fin de la grille explicite.

    Si un nom est donné comme `<custom-ident>`, seules les lignes portant ce nom sont comptées. S'il n'y a pas assez de lignes avec ce nom, toutes les lignes implicites sont considérées comme ayant ce nom pour déterminer cette position.

    Une valeur {{CSSxRef("&lt;integer&gt;")}} de `0` est invalide.

- `span && [ <integer> || <custom-ident> ]`
  - : Ajoute un fragment de grille au placement de l'élément de sorte que le bord de fin de colonne de la zone de grille de l'élément soit à n lignes du bord de début.

    Si un nom est donné comme `<custom-ident>`, seules les lignes portant ce nom sont comptées. S'il n'y a pas assez de lignes avec ce nom, toutes les lignes implicites du côté de la grille explicite correspondant à la direction de recherche sont considérées comme ayant ce nom pour le comptage de ce fragment.

    Si {{CSSxRef("&lt;integer&gt;")}} est omis, la valeur par défaut est `1`. Les entiers négatifs ou nuls sont invalides.

    Le `<custom-ident>` ne peut pas prendre les valeurs `span` et `auto`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la colonne de fin pour un élément de la grille

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

#### Résultat

{{EmbedLiveSample("Définir la colonne de fin pour un élément de la grille", 230, 420)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("grid-column-start")}}
- La propriété raccourcie {{CSSxRef("grid-column")}}
- La propriété {{CSSxRef("grid-row-start")}}
- La propriété {{CSSxRef("grid-row-end")}}
- La propriété raccourcie {{CSSxRef("grid-row")}}
- [Le placement sur les lignes d'une grille](/fr/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- Vidéo&nbsp;: [le placement sur les lignes <sup>(angl.)</sup>](https://gridbyexample.com/video/series-line-based-placement/)
