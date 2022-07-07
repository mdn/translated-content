---
title: grid-column
slug: Web/CSS/grid-column
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/grid-column
---
{{CSSRef}}

La propriété **`grid-column`** est une [propriété raccourcie](/fr/docs/Web/CSS/Propri%C3%A9t%C3%A9s_raccourcies) pour {{cssxref("grid-column-start")}} et {{cssxref("grid-column-end")}}. Elle permet de définir la taille et l'emplacement d'un élément sur la grille en indiquant l'emplacement du début, de la fin et/ou sa taille.

{{EmbedInteractiveExample("pages/css/grid-column.html")}}

Si deux valeurs **`<grid-line>`** sont utilisées pour la propriété, la valeur de **`grid-column-start`** sera définie avec la première valeur avant la barre oblique et la valeur de **`grid-column-end`** sera définie avec celle qui est située après la barre oblique.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
grid-column: auto;
grid-column: auto / auto;

/* Valeurs <custom-ident> */
grid-column: unezonedegrille;
grid-column: unezonedegrille / unezonedegrille;

/* Valeurs <integer> + <custom-ident> */
grid-column: unezonedegrille 4;
grid-column: 4 unezonedegrille / 6;

/* Valeurs span + <integer> + <custom-ident> */
grid-column: span 3;
grid-column: span unezonedegrille;
grid-column: 5 unezonedegrille span;
grid-column: span 3 / 6;
grid-column: span unezonedegrille / span unezonedegrille;
grid-column: 5 unezonedegrille span / 2 span;

/* Valeurs globales */
grid-column: inherit;
grid-column: initial;
grid-column: unset;
```

Cette propriété est définie grâce à une ou deux valeurs `<grid-line>`. Si deux valeurs `<grid-line>` sont fournies, elles doivent être séparées par une barre oblique (/)

Une valeur `<grid-line>` peut être définie avec :

- le mot-clé `auto`
- ou une valeur `<custom-ident>`
- ou une valeur `<integer>`
- ou une valeur `<custom-ident>` et un `<integer>` séparés par un espace
- ou le mot-clé `span` avec une valeur `<custom-ident>` ou un `<integer>` ou les deux.

### Valeurs

- `auto`
  - : Un mot-clé qui indique que la propriété ne contribue pas au placement de l'élément sur la grille. Cela indique un placement automatique, une taille de fragment (_span_) automatique ou une taille par défaut de `1`.
- `<custom-ident>`

  - : S'il existe une ligne nommée avec '\<custom-ident>-start'/'\<custom-ident>-end', la première colonne correspondante contribue au placement de l'élément sur la grille.

    > **Note :** Les noms des zones de grille sont générés implicitement. Ainsi, en utilisant `grid-column-start: foo;` cela sélectionnera le début de la grille nommée correspondante (sauf si une autre colonne `foo-start`/`foo-end` a été explicitement déclarée).

    Sinon, la valeur est traitée comme si on avait utilisé `<custom-ident>` et la valeur `1`.

- `<integer> && <custom-ident>?`

  - : La n-ième ligne de la grille contribue au placement de l'élément sur la grille. Si un entier négatif est utilisé, le comptage sera fait depuis la fin de la grille explicite.

    Si un nom est fourni pour \<custom-ident>, seules les lignes ayant ce nom seront comptées. S'il n'y a pas suffisamment de lignes existant avec ce nom, toutes les lignes implicites seront comptées afin de trouver la position.

    Si la valeur entière utilisée est `0`, la règle est invalide.

- `span && [ <integer> || <custom-ident> ]`

  - : Un fragment de grille est utilisé pour le placement de l'élément sur la grille afin que le début de la ligne pour l'élément de la grille soit placé à n lignes du bord de fin.

    Si un nom fourni pour \<custom-ident>, seules les lignes ayant ce nom seront comptées. S'il n'y a pas suffisamment de lignes existantes avec ce nom, tout les lignes implicites du côté de la grille explicite et qui correspondent à la direction de la recherche seront comptées afin de placer ce fragment.

    Si l'entier n'est pas défini, la valeur par défaut qui sera utilisée sera `1`. Les entiers négatifs ou nuls sont invalides.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

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

### HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", "100px")}}

## Prothèse d'émulation (_polyfill_)

IE11 ne prend pas en charge le placement automatique des objets sur la grille.Tous les objets finiront sur la première colonne / ligne si ceux-ci ne sont pas marqués avec les propriétés `-ms-`{{cssxref("grid-column")}} et `-ms-`{{cssxref("grid-row")}}. Pour effectuer cette annotation automatiquement, on peut utiliser du JavaScript (cf. [ce dépôt](https://github.com/motine/css_grid_annotator)).

## Spécifications

| Spécification                                                                        | État                         | Commentaires         |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName("CSS3 Grid", "#propdef-grid-column", "grid-column")}} | {{Spec2("CSS3 Grid")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.grid-column")}}

## Voir aussi

- {{cssxref("grid-row")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- [Guide : le placement sur les lignes d'une grille CSS](/fr/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- Tutoriel vidéo : [le placement sur les lignes (en anglais)](https://gridbyexample.com/video/series-line-based-placement/)
