---
title: grid-template-rows
slug: Web/CSS/grid-template-rows
---

{{CSSRef}}

La propriété **`grid-template-rows`** définit les noms des lignes et les fonctions de taille (_track sizing_) pour les lignes de la grille.

{{EmbedInteractiveExample("pages/css/grid-template-rows.html")}}

## Syntaxe

```css
/* Valeur avec un mot-clé */
grid-template-rows: none;

/* Valeurs avec une liste de pistes */
/* Type <track-list>                */
grid-template-rows: 100px 1fr;
grid-template-rows: [linename] 100px;
grid-template-rows: [linename1] 100px [linename2 linename3];
grid-template-rows: minmax(100px, 1fr);
grid-template-rows: fit-content(40%);
grid-template-rows: repeat(3, 200px);

/* Valeurs <auto-track-list> */
grid-template-rows: 200px repeat(auto-fill, 100px) 300px;
grid-template-rows:
  minmax(100px, max-content)
  repeat(auto-fill, 200px) 20%;
grid-template-rows:
  [linename1] 100px [linename2]
  repeat(auto-fit, [linename3 linename4] 300px)
  100px;
grid-template-rows:
  [linename1 linename2] 100px
  repeat(auto-fit, [linename1] 300px) [linename3];

/* Valeurs globales */
grid-template-rows: inherit;
grid-template-rows: initial;
grid-template-rows: unset;
```

Cette propriété peut être définie avec le mot-clé `none` ou avec une valeur de type `<track-list>` ou avec une valeur de type `<auto-track-list>`.

### Valeurs

- `none`
  - : Un mot-clé qui indique qu'il n'y a pas de grille explicite. N'importe quelle ligne sera générée implicitement et sa taille sera déterminée grâce à la propriété {{cssxref("grid-auto-rows")}}.
- `<length>`
  - : Un longueur positive (type {{cssxref("&lt;length&gt;")}}).
- `<percentage>`
  - : Un pourcentage positif (type {{cssxref("&lt;percentage&gt;")}}) relatif à la taille du bloc du conteneur de la grille. Si cette taille n'est pas définie, la valeur est traitée comme `auto`.
- `<flex>`

  - : Une dimension positive dont l'unité `fr` indique le facteur de flexibilité de la piste. Chaque piste dimensionnée avec `<flex>` occupera une partie de l'espace restant en fonction de ce facteur.

    Lorsque cette valeur apparaît en dehors de la notation `minmax()`, la valeur minimale `auto` est implicite (la valeur signifie `minmax(auto, <flex>)`). Voir {{cssxref("&lt;flex_value&gt;")}}.

- `max-content`
  - : Un mot-clé qui représente la plus grande des contributions maximales de contenu aux objets de la grilles qui occupe la piste de la grille.
- `min-content`
  - : Un mot-clé qui représente la plus grande des contributions minimales de contenu aux objets de la grilles qui occupe la piste de la grille.
- {{cssxref("minmax()", "minmax(min, max)")}}
  - : Une notation fonctionnelle qui définit un intervalle de taille entre `min` et `max`. Si `max` est inférieur à `min`, `max` est ignoré et la fonction est traitée comme un minimum. En tant que maximum, elle joue le rôle d'une valeur `<flex>` qui définit le facteur de flexibilité de la piste. Cette notation est invalide en tant que minimum.
- `auto`

  - : Un mot-clé qui est identique au contenu maximal si c'est un maximum. Si c'est un minimum, il représente la plus grande des plus petites tailles (définie par {{cssxref("min-width")}}/{{cssxref("min-height")}})) des objets de la grilles qui occupe cette piste de la grille.

    > [!NOTE]
    > Les pistes de taille `auto` (et uniquement celles-ci) peuvent être étirées grâce aux propriétés {{cssxref("align-content")}} et {{cssxref("justify-content")}}.

- {{cssxref("fit-content", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Cette notation représente la formule `min(max-content, max(auto, argument))` qui est calculée comme pour `auto` (i.e. `minmax(auto, max-content)`) sauf que la taille de la piste est ramenée à _argument_ si elle est plus grande que le minimum fourni par `auto`.
- {{cssxref("repeat()","repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ], &lt;track-list&gt; )")}}
  - : Représente un fragment répété d'une liste de pistes, cela permet de gérer des grilles avec de nombreuses lignes pour lesquelles on réutilise un motif.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
#grid {
  display: grid;
  height: 100px;
  grid-template-rows: 30px 1fr;
}

#areaA {
  background-color: lime;
}

#areaB {
  background-color: yellow;
}
```

### HTML

```html
<div id="grid">
  <div id="areaA">A</div>
  <div id="areaB">B</div>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", "40px", "100px")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-template")}}
- [Guide : les concepts de base pour les grilles CSS : les pistes](/fr/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#les_pistes)
- Tutoriel vidéo : [définir une grille (en anglais)](https://gridbyexample.com/video/series-define-a-grid/)
