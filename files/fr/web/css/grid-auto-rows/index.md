---
title: grid-auto-rows
slug: Web/CSS/grid-auto-rows
---

{{CSSRef}}

La propriété **`grid-auto-rows`** définit la taille d'une ligne de grille créée de façon implicite.

{{EmbedInteractiveExample("pages/css/grid-auto-rows.html")}}

Si un élément de la grille est positionné sur une ligne dont la taille n'est pas explicitement définie avec {{cssxref("grid-template-rows")}}, une piste implicite est créée pour contenir l'élément. Cela peut se produire lorsqu'on positionne un élément sur une ligne inexistante ou lorsque l'algorithme de placement automatique ajoute des lignes supplémentaires.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
grid-auto-rows: min-content;
grid-auto-rows: max-content;
grid-auto-rows: auto;

/* Valeurs de longueur */
/* Type <length>       */
grid-auto-rows: 100px;
grid-auto-rows: 20cm;
grid-auto-rows: 50vmax;

/* Valeurs proportionnelles */
/* Type <percentage>        */
grid-auto-rows: 10%;
grid-auto-rows: 33.3%;

/* Valeurs <flex> */
grid-auto-rows: 0.5fr;
grid-auto-rows: 3fr;

/* Valeurs minmax() */
grid-auto-rows: minmax(100px, auto);
grid-auto-rows: minmax(max-content, 2fr);
grid-auto-rows: minmax(20%, 80vmax);

/* Gestion de plusieurs pistes */
grid-auto-rows: min-content max-content auto;
grid-auto-rows: 100px 150px 390px;
grid-auto-rows: 10% 33.3%;
grid-auto-rows: 0.5fr 3fr 1fr;
grid-auto-rows: minmax(100px, auto) minmax(max-content, 2fr) minmax(20%, 80vmax);
grid-auto-rows: 100px minmax(100px, auto) 10% 0.5fr fit-content(400px);

/* Valeurs globales */
grid-auto-rows: inherit;
grid-auto-rows: initial;
grid-auto-rows: unset;
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
- `auto`

  - : Un mot-clé qui est identique au contenu maximal si c'est un maximum. Si c'est un minimum, il représente la plus grande des plus petites tailles (définie par {{cssxref("min-width")}}/{{cssxref("min-height")}})) des objets de la grilles qui occupe cette piste de la grille.

    > **Note :** Les pistes de taille `auto` (et uniquement celles-ci) peuvent être étirées grâce aux propriétés {{cssxref("align-content")}} et {{cssxref("justify-content")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
#grid {
  width: 200px;
  display: grid;
  grid-template-areas: "a a";
  grid-gap: 10px;
  grid-auto-rows: 100px;
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

{{EmbedLiveSample("Exemples", "210px", "210px")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-flow")}}
- {{cssxref("grid")}}
- [Guide : le placement automatique sur la grille - dimensionner les lignes de la grille implicite](/fr/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout#dimensionner_les_lignes_de_la_grille_implicite)
- Tutoriel vidéo : [Introduction au placement automatique sur la grille et à l'ordre des éléments (en anglais)](https://gridbyexample.com/video/series-auto-placement-order/)
