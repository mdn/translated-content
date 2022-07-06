---
title: grid-row-end
slug: Web/CSS/grid-row-end
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/grid-row-end
---
{{CSSRef}}

La propriété **`grid-row-end`** définit la position de la fin d'un élément de la grille dans une zone donnée ou sur un fragment de ligne donné.

{{EmbedInteractiveExample("pages/css/grid-row-end.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
grid-row-end: auto;

/* Valeurs <custom-ident> */
grid-row-end: somegridarea;

/* Valeurs <integer> + <custom-ident> */
grid-row-end: 2;
grid-row-end: somegridarea 4;

/* Valeurs span + <integer> + <custom-ident> */
grid-row-end: span 3;
grid-row-end: span somegridarea;
grid-row-end: 5 somegridarea span;

/* Valeurs globales */
grid-row-end: inherit;
grid-row-end: initial;
grid-row-end: unset;
```

### Valeurs

- `auto`
  - : Un mot-clé qui indique que la propriété ne contribue pas au placement de l'objet sur la grille. Par défaut, la taille du fragment allouée vaut `1` s'il n'y a pas d'autres contraintes.
- `<custom-ident>`

  - : S'il existe une ligne nommée '\<custom-ident>-end', cela placera l'élément sur la première ligne correspondante..

    > **Note :** Les noms de zones génèrent automatiquement les noms de lignes sous cette forme. Ainsi, `grid-row-end: foo;` permettra de désigner l'extrêmité (à la fin) de la zone nommée (sauf si une autre ligne a explicitement été nommée avec `foo-end`).

    Si aucune zone ne correspond, la valeur est traitée comme la combinaison de l'entier 1 et de `<custom-ident>` (cf. définition suivante).

    ` <custom-ident``> ` ne peut pas prendre la valeur `span`.

- `<integer> && <custom-ident>?`

  - : Contribue au placement de l'élément sur la n-ième ligne. Si une valeur négative est fournie, les lignes correspondantes sont comptées depuis la dernière. Si un nom est fourni pour \<custom-ident>, seules les lignes avec ce nom sont comptées. S'il n'y a pas suffisamment de lignes avec ce nom, on considère que toutes les lignes sont intitulées avec ce nom afin de trouver une position.

    Un entier nul ne peut pas être utilisé (la règle est invalide).

- `span && [ <integer> || <custom-ident> ]`

  - : Un fragment de grille est utilisé pour le placement de l'élément sur la grille afin que le début de la ligne pour l'élément de la grille soit placé à n lignes du bord situé au début.

    Si un nom fourni pour \<custom-ident>, seules les lignes ayant ce nom seront comptées. S'il n'y a pas suffisamment de lignes existantes avec ce nom, tout les lignes implicites du côté de la grille explicite et qui correspondent à la direction de la recherche seront comptées afin de placer ce fragment.

    Si \<integer> est absent, la valeur par défaut sera 1. Les entiers négatifs ou nuls ne sont pas autorisés.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
  <div class="box5">Five</div>
</div>
```

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
* {box-sizing: border-box;}

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

{{EmbedLiveSample('Exemples', '230', '420')}}

## Spécifications

| Spécification                                                                            | État                         | Commentaires        |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName("CSS3 Grid", "#propdef-grid-row-end", "grid-row-end")}} | {{Spec2("CSS3 Grid")}} | Définition initiale |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.grid-row-end")}}

## Voir aussi

- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-column")}}
- [Guide : Placer les éléments d'une grille sur les lignes](/fr/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- Tutoriel vidéo : [le placement des éléments d'une grille sur les lignes (en anglais)](https://gridbyexample.com/video/series-line-based-placement/)
