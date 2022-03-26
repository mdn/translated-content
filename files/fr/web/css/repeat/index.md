---
title: repeat()
slug: Web/CSS/repeat
translation_of: Web/CSS/repeat()
original_slug: Web/CSS/repeat()
---
{{CSSRef}}

La fonction CSS **`repeat()`** permet de répéter un fragment d'une liste de pistes. Autrement dit, lorsqu'on a une grille avec de nombreuses lignes/colonnes, cela permet de réutiliser un même motif sur la grille. On a alors des règles plus concises.

Cette fonction peut être utilisée par les propriétés CSS {{cssxref("grid-template-columns")}} et {{cssxref("grid-template-rows")}} relatives aux grilles.

```css
/* Valeurs de type <track-repeat> */
repeat(4, 1fr)
repeat(4, [col-start] 250px [col-end])
repeat(4, [col-start] 60% [col-end])
repeat(4, [col-start] 1fr [col-end])
repeat(4, [col-start] min-content [col-end])
repeat(4, [col-start] max-content [col-end])
repeat(4, [col-start] auto [col-end])
repeat(4, [col-start] minmax(100px, 1fr) [col-end])
repeat(4, [col-start] fit-content(200px) [col-end])
repeat(4, 10px [col-start] 30% [col-middle] auto [col-end])
repeat(4, [col-start] min-content [col-middle] max-content [col-end])

/* Valeurs de type <auto-repeat> */
repeat(auto-fill, 250px)
repeat(auto-fit, 250px)
repeat(auto-fill, [col-start] 250px [col-end])
repeat(auto-fit, [col-start] 250px [col-end])
repeat(auto-fill, [col-start] minmax(100px, 1fr) [col-end])
repeat(auto-fill, 10px [col-start] 30% [col-middle] 400px [col-end])

/* Valeurs de type <fixed-repeat> */
repeat(4, 250px)
repeat(4, [col-start] 250px [col-end])
repeat(4, [col-start] 60% [col-end])
repeat(4, [col-start] minmax(100px, 1fr) [col-end])
repeat(4, [col-start] fit-content(200px) [col-end])
repeat(4, 10px [col-start] 30% [col-middle] 400px [col-end])
```

## Syntaxe

### Valeurs

- `<length>`
  - : Une longueur positive (cf. le type {{cssxref("&lt;length&gt;")}}).
- `<percentage>`
  - : Un pourcentage (cf. le type {{cssxref("&lt;percentage&gt;")}}) positif qui indique la proportion par rapport à la taille en ligne (c'est-à-dire la dimension qui suit l'axe de lecture) pour les colonnes et par rapport à la taille en bloc (l'axe orthogonal) pour les lignes. Si la taille de la grille est calculée en fonction de la taille des pistes qu'elle contient, `<percentage>` devra être interprété comme `auto`. L'agent utilisateur peut ajuster les tailles intrinsèques des pistes pour qu'elles remplissent exactement le conteneur et acroître le moins possible la taille finale de la piste pour qu'elle se rapproche du pourcentage souhaité.
- `<flex>`
  - : Une dimension positive, exprimée en `fr`, qui indique le facteur de flexibilité de la piste (cf. le type {{cssxref("&lt;flex&gt;")}}). Chaque piste flexible partage l'espace de façon proportionnelle avec les autres pistes flexibles.
- `max-content`
  - : Cette valeur représente la contribution maximale des éléments qui occupent la piste.
- `min-content`
  - : Cette valeur représente la contribution minimale des éléments qui occupent la piste.
- `auto`
  - : Utilisée comme maximum, cette valeur se comporte comme `max-content`. Utilisée comme minimum, elle représente la plus grande taille minimale (définie par {{cssxref("min-width")}}/{{cssxref("min-height")}}) des éléments qui occupent la piste.
- `auto-fill`
  - : Si le conteneur de la grille possède une taille définie ou maximale sur cet axe, alors le moteur répètera autant que possible le motif pour ne pas déborder de la grille. Si répéter le motif implique de déborder de la grille, il n'est répété qu'une fois. Sinon, si le conteneur de la grille possède une taille minimale sur cet axe, on utilisera le moins de répétitions possible pour atteindre ce minimum. Sinon, la liste de piste n'est répétée qu'une seule fois.
- `auto-fit`

  - : Cette valeur se comporte comme `auto-fill` mais, une fois que les objets sont placés, toutes les pistes répétées qui sont vides sont repliées. Une piste vide est une piste qui ne contient aucun élément ou sur laquelle aucun élément n'intersecte. Toutes les pistes peuvent être repliées si elles sont toutes vides.

    Une piste repliée est traitée comme si elle avait une taille de piste de `0px` (les gouttières sont également repliées de chaque côté).

    Afin de calculer le nombre de pistes automatiquement répétées, l'agent utilisateur arrondit la taille de la piste à une valeur non nulle, propre à l'agent utilisateur (par exemple 1 px), afin d'éviter les divisions par zéros.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
#container {
  display: grid;
  grid-template-columns: repeat(2, 50px 1fr) 100px;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

### HTML

```html
<div id="container">
  <div>
    Un élément qui mesure 50 pixels de large.
  </div>
  <div>
    Un élément avec une largeur flexible.
  </div>
  <div>
    Un élément qui mesure 50 pixels de large.
  </div>
  <div>
    Un élément avec une largeur flexible.
  </div>
  <div>
    Un élément non-flexible qui mesure 100 pixels de large.
  </div>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 200)}}

## Spécifications

| Spécification                                                            | État                         | Commentaires         |
| ------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName("CSS Grid", "#funcdef-repeat", "repeat()")}} | {{Spec2("CSS Grid")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.properties.grid-template-columns.repeat")}}
