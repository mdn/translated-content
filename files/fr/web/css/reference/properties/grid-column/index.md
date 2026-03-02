---
title: grid-column
slug: Web/CSS/Reference/Properties/grid-column
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`grid-column`** définit la taille et l'emplacement d'un élément de la grille dans une {{Glossary("grid column", "colonne de grille")}} en ajoutant une ligne, un fragment (<i lang="en">span</i>) ou rien (automatique) à son placement sur la grille, définissant ainsi les bords de début et de fin en ligne de sa {{Glossary("grid areas", "zone de grille")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: grid-column")}}

```css interactive-example-choice
grid-column: 1;
```

```css interactive-example-choice
grid-column: 1 / 3;
```

```css interactive-example-choice
grid-column: 2 / -1;
```

```css interactive-example-choice
grid-column: 1 / span 2;
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

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("grid-column-end")}}
- {{CSSxRef("grid-column-start")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
grid-column: auto;
grid-column: auto / auto;

/* Valeurs de type <custom-ident> */
grid-column: une-zone-de-grille;
grid-column: une-zone-de-grille / une-zone-de-grille;

/* Valeurs de type <integer> + <custom-ident> */
grid-column: une-zone-de-grille 4;
grid-column: 4 une-zone-de-grille / 6;

/* Valeurs span + <integer> + <custom-ident> */
grid-column: span 3;
grid-column: span une-zone-de-grille;
grid-column: 5 une-zone-de-grille span;
grid-column: span 3 / 6;
grid-column: span une-zone-de-grille / span une-zone-de-grille;
grid-column: 5 une-zone-de-grille span / 2 span;

/* Valeurs globales */
grid-column: inherit;
grid-column: initial;
grid-column: revert;
grid-column: revert-layer;
grid-column: unset;
```

Cette propriété est définie grâce à une ou deux valeurs `<grid-line>`.

Si deux valeurs `<grid-line>` sont fournies, elles sont séparées par une barre oblique (`/`).
La propriété longue `grid-column-start` est définie avec la valeur avant la barre oblique, et la propriété longue `grid-column-end` est définie avec la valeur après la barre oblique.

Une valeur `<grid-line>` peut être définie avec&nbsp;:

- le mot-clé `auto`.
- ou une valeur `<custom-ident>`.
- ou une valeur `<integer>`.
- ou une valeur `<custom-ident>` et un `<integer>` séparés par un espace.
- ou le mot-clé `span` avec une valeur `<custom-ident>` ou un `<integer>` ou les deux.

### Valeurs

- `auto`
  - : Un mot-clé qui indique que la propriété ne contribue pas au placement de l'élément sur la grille. Cela indique un placement automatique, une taille de fragment (<i lang="en">span</i>) automatique ou une taille par défaut de `1`.
- `<custom-ident>`
  - : S'il existe une ligne nommée avec `<custom-ident>-start`/`<custom-ident>-end`, la première colonne correspondante contribue au placement de l'élément sur la grille.

    > [!NOTE]
    > Les noms des zones de grille sont générés implicitement. Ainsi, en utilisant `grid-column-start: toto;` cela sélectionnera le début de la grille nommée correspondante (sauf si une autre colonne `toto-start`/`toto-end` a été explicitement déclarée).

    Sinon, la valeur est traitée comme si on avait utilisé `<custom-ident>` et la valeur `1`.

- `<integer> && <custom-ident>?`
  - : La n-ième ligne de la grille contribue au placement de l'élément sur la grille. Si un entier négatif est utilisé, le comptage sera fait depuis la fin de la grille explicite.

    Si un nom est fourni pour `<custom-ident>`, seules les lignes ayant ce nom seront comptées. S'il n'y a pas suffisamment de lignes existant avec ce nom, toutes les lignes implicites seront comptées afin de trouver la position.

    Si la valeur entière ({{CSSxRef("integer")}}) utilisée est `0`, la règle est invalide.

- `span && [ <integer> || <custom-ident> ]`
  - : Un fragment de grille est utilisé pour le placement de l'élément sur la grille afin que le début de la ligne pour l'élément de la grille soit placé à n lignes du bord de fin.

    Si un nom fourni pour `<custom-ident>`, seules les lignes ayant ce nom seront comptées. S'il n'y a pas suffisamment de lignes existantes avec ce nom, tout les lignes implicites du côté de la grille explicite et qui correspondent à la direction de la recherche seront comptées afin de placer ce fragment.

    Si l'entier ({{CSSxRef("integer")}}) n'est pas défini, la valeur par défaut qui sera utilisée sera `1`. Les entiers négatifs ou nuls sont invalides.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la taille et l'emplacement des colonnes de la grille

#### HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 100px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 100px;
}

#item1 {
  background-color: lime;
}

#item2 {
  background-color: yellow;
  grid-column: 2 / 4;
}

#item3 {
  background-color: blue;
  grid-column: span 2 / 7;
}
```

#### Résultat

{{EmbedLiveSample("Définir la taille et l'emplacement des colonnes de la grille", "100%", 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("grid-row")}}
- La propriété {{CSSxRef("grid-row-start")}}
- La propriété {{CSSxRef("grid-row-end")}}
- La propriété {{CSSxRef("grid-column-start")}}
- La propriété {{CSSxRef("grid-column-end")}}
- [Le placement sur les lignes d'une grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- Vidéo&nbsp;: [le placement sur les lignes <sup>(angl.)</sup>](https://gridbyexample.com/video/series-line-based-placement/)
