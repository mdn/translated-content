---
title: grid-auto-columns
slug: Web/CSS/grid-auto-columns
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/grid-auto-columns
---
{{CSSRef}}

La propriété **`grid-auto-columns`** définit la taille d'une colonne de grille créée de façon implicite.

{{EmbedInteractiveExample("pages/css/grid-auto-columns.html")}}

Si un élément de la grille est positionné sur une colonne dont la taille n'est pas explicitement définie avec {{cssxref("grid-template-columns")}}, une piste implicite est créée pour contenir l'élément. Cela peut se produire lorsqu'on positionne un élément sur une ligne inexistante ou lorsque l'algorithme de placement automatique ajoute des colonnes supplémentaires.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
grid-auto-columns: min-content;
grid-auto-columns: max-content;
grid-auto-columns: auto;

/* Valeurs de longueur */
/* Type <length>       */
grid-auto-columns: 100px;
grid-auto-columns: 20cm;
grid-auto-columns: 50vmax;

/* Valeurs proportionnelles */
/* Type <percentage>        */
grid-auto-columns: 10%;
grid-auto-columns: 33.3%;

/* Valeurs <flex> */
grid-auto-columns: 0.5fr;
grid-auto-columns: 3fr;

/* Valeurs minmax() */
grid-auto-columns: minmax(100px, auto);
grid-auto-columns: minmax(max-content, 2fr);
grid-auto-columns: minmax(20%, 80vmax);

/* Valeurs fit-content() */
grid-auto-columns: fit-content(400px);
grid-auto-columns: fit-content(5cm);
grid-auto-columns: fit-content(20%);

/* Gestion de plusieurs pistes */
grid-auto-columns: min-content max-content auto;
grid-auto-columns: 100px 150px 390px;
​​​​​​​grid-auto-columns: 10% 33.3%;
grid-auto-columns: 0.5fr 3fr 1fr;
​​​​​​​grid-auto-columns: minmax(100px, auto) minmax(max-content, 2fr) minmax(20%, 80vmax);
grid-auto-columns: 100px minmax(100px, auto) 10% 0.5fr fit-content(400px);

/* Valeurs globales */
grid-auto-columns: inherit;
grid-auto-columns: initial;
grid-auto-columns: unset;
```

### Valeurs

- `<length>`
  - : Une longueur positive (cf. type {{cssxref("&lt;length&gt;")}}.
- `<percentage>`
  - : Un pourcentage positif indiquant la taille de la ligne relativement à la taille du bloc qui contient la grille. Si la taille de ce bloc n'est pas définie, la valeur exprimée en pourcents est considérée comme `auto`.
- `<flex>`

  - : Une dimension positive dont l'unité `fr` indique le facteur de flexibilité de la piste. Chaque piste dimensionnée avec `<flex>` occupera une partie de l'espace restant en fonction de ce facteur.

    Lorsque cette valeur apparaît en dehors de la notation `minmax()`, la valeur minimale `auto` est implicite (la valeur signifie `minmax(auto, <flex>)`).

- `max-content`
  - : Un mot-clé qui représente la plus grande des contributions maximales de contenu aux objets de la grilles qui occupe la piste de la grille.
- `min-content`
  - : Un mot-clé qui représente la plus grande des contributions minimales de contenu aux objets de la grilles qui occupe la piste de la grille
- `minmax(min, max)`
  - : Une notation fonctionnelle qui définit un intervalle de taille entre `min` et `max`. Si `max` est inférieur à `min`, `max` est ignoré et la fonction est traitée comme un minimum. En tant que maximum, elle joue le rôle d'une valeur `<flex>` qui définit le facteur de flexibilité de la piste. En tant que minimum, elle est gérée comme zéro (ou comme le contenu minimal si le conteneur de la grille impose une contrainte de contenu minimal).
- `fit-content(argument)`
  - : Cette notation représente la formule `min(max-content, max(auto, argument))` qui est calculée de façon semblable à `auto`, sauf qu'ici, la taille de la piste est écrétée à _argument_ s'i elle est plus grande que le minimum `auto`.
- `auto`

  - : Un mot-clé qui est identique au contenu maximal si c'est un maximum. Si c'est un minimum, il représente la plus grande des plus petites tailles (définie par {{cssxref("min-width")}}/{{cssxref("min-height")}})) des objets de la grilles qui occupe cette piste de la grille.

    > **Note :** Les pistes de taille `auto` (et uniquement celles-ci) peuvent être étirées grâce aux propriétés {{cssxref("align-content")}} et {{cssxref("justify-content")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
#grid {
  width: 100px;
  display: grid;
  grid-template-areas: "a a";
  grid-gap: 10px;
  grid-auto-columns: 200px;
}

#grid > div {
  background-color: lime;
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

{{EmbedLiveSample("Exemples", "410px", "100px")}}

## Spécifications

| Spécification                                                                                        | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName("CSS3 Grid", "#propdef-grid-auto-columns", "grid-auto-columns")}} | {{Spec2("CSS3 Grid")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.grid-auto-columns")}}

## Voir aussi

- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- {{cssxref("grid")}}
- [Guide : le placement automatique sur la grille - dimensionner les lignes de la grille implicite](/fr/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout#dimensionner_les_lignes_de_la_grille_implicite)
- Tutoriel vidéo : [Introduction au placement automatique sur la grille et à l'ordre des éléments (en anglais)](https://gridbyexample.com/video/series-auto-placement-order/)
