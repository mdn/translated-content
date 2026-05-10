---
title: Fonction CSS `repeat()`
short-title: repeat()
slug: Web/CSS/Reference/Values/repeat
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`repeat()`** permet de répéter un fragment d'une [liste de pistes](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts), ce qui permet d'écrire de manière plus compacte un grand nombre de colonnes ou de lignes présentant un motif récurrent.

{{InteractiveExample("Démonstration CSS&nbsp;: repeat()")}}

```css interactive-example-choice
grid-template-columns: repeat(2, 60px);
```

```css interactive-example-choice
grid-template-columns: 1fr repeat(2, 60px);
```

```css interactive-example-choice
grid-template-columns: repeat(2, 20px 1fr);
```

```css interactive-example-choice
grid-template-columns: repeat(auto-fill, 40px);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-auto-rows: 40px;
  grid-gap: 10px;
  width: 220px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

Cette fonction peut être utilisée par les propriétés CSS {{CSSxRef("grid-template-columns")}} et {{CSSxRef("grid-template-rows")}} relatives aux grilles.

## Syntaxe

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

La fonction `repeat()` prend deux arguments&nbsp;:

- **compte de répétition**: le premier argument définit le nombre de fois que la liste de pistes doit être répétée. Il est défini avec une valeur entière de 1 ou plus, ou avec les valeurs de mot-clé [`auto-fill`](#auto-fill) ou [`auto-fit`](#auto-fit). Ces valeurs de mot-clé répètent l'ensemble des pistes autant de fois que nécessaire pour remplir le conteneur de la grille.
- **pistes**: le deuxième argument définit l'ensemble des pistes qui sont répétées. Fondamentalement, cela consiste en une ou plusieurs valeurs, chaque valeur représentant la taille de cette piste. Chaque taille est définie en utilisant soit une valeur [`<track-size>`](#track-size), soit une valeur [`<fixed-size>`](#fixed-size). Vous pouvez également définir un ou plusieurs [noms de lignes](/fr/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) avant ou après chaque piste, en fournissant des valeurs [`<line-names>`](#line-names) avant et/ou après la taille de la piste.

Si vous utilisez [`auto-fill`](#auto-fill) ou [`auto-fit`](#auto-fit) pour définir le compte de répétition, vous ne pouvez définir les tailles de piste qu'en utilisant le type [`<fixed-size>`](#fixed-size), et non le type [`<track-size>`](#track-size). Cela nous donne trois formes principales de syntaxe pour `repeat()`&nbsp;:

- `<track-repeat>`, qui utilise&nbsp;:
  - un entier pour définir le compte de répétition
  - des valeurs [`<track-size>`](#track-size) pour définir les tailles de piste.
- `<auto-repeat>`, qui utilise
  - [`auto-fill`](#auto-fill) ou [`auto-fit`](#auto-fit) pour définir le compte de répétition
  - [`<fixed-size>`](#fixed-size) pour définir les tailles de piste.
- `<fixed-repeat>`, qui utilise&nbsp;:
  - un entier pour définir le compte de répétition
  - des valeurs [`<fixed-size>`](#fixed-size) pour définir les tailles de piste.

Ensuite, si une déclaration de propriété utilise `<auto-repeat>`, il n'est autorisé à utiliser `<fixed-repeat>` que pour les appels `repeat()` supplémentaires. Par exemple, ceci est invalide, car il combine la forme `<auto-repeat>` avec la forme `<track-repeat>`&nbsp;:

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

Il existe une quatrième forme, `<name-repeat>`, qui est utilisée pour ajouter des noms de lignes aux sous-grilles. Elle n'est utilisée qu'avec le mot-clé [`subgrid`](/fr/docs/Web/CSS/Guides/Grid_layout/Subgrid) et ne définit que des noms de lignes, pas des tailles de piste.

### Valeurs

- `<fixed-size>`
  - : L'une des formes suivantes&nbsp;:
    - une valeur {{CSSxRef("&lt;length-percentage&gt;")}}
    - une fonction {{CSSxRef("minmax()")}} avec&nbsp;:
      - `min` donné comme une valeur {{CSSxRef("&lt;length-percentage&gt;")}}
      - `max` donné comme l'une des valeurs suivantes&nbsp;: une valeur {{CSSxRef("&lt;length-percentage&gt;")}}, une valeur {{CSSxRef("&lt;flex&gt;")}}, ou l'un des mots-clés suivants&nbsp;: [`min-content`](#min-content), [`max-content`](#max-content) ou [`auto`](#auto)
    - une fonction {{CSSxRef("minmax()")}} avec&nbsp;:
      - `min` donné comme une valeur {{CSSxRef("&lt;length-percentage&gt;")}} ou l'un des mots-clés suivants&nbsp;: [`min-content`](#min-content), [`max-content`](#max-content) ou [`auto`](#auto)
      - `max` donné comme une valeur {{CSSxRef("&lt;length-percentage&gt;")}}.
- {{CSSxRef("&lt;flex&gt;")}}
  - : Une dimension non négative avec l'unité `fr` définissant le facteur de flexion de la piste. Chaque piste dimensionnée en `<flex>` prend une part de l'espace restant en proportion de son facteur de flexion.
- {{CSSxRef("&lt;length&gt;")}}
  - : Une longueur entière positive.
- `<line-names>`
  - : Zéro ou plusieurs valeurs {{CSSxRef("&lt;custom-ident&gt;")}}, séparées par des espaces et entourées de crochets, comme ceci&nbsp;: `[first header-start]`.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Un pourcentage non négatif relatif à la taille en ligne du conteneur de grille pour les pistes de grille en colonne, et à la taille en bloc du conteneur de grille pour les pistes de grille en ligne. Si la taille du conteneur de grille dépend de la taille de ses pistes, alors le `<percentage>` doit être traité comme `auto`. L'agent utilisateur peut ajuster les contributions de taille intrinsèque de la piste à la taille du conteneur de grille et augmenter la taille finale de la piste du minimum nécessaire pour respecter le pourcentage.
- `<track-size>`
  - : L'une des formes suivantes&nbsp;:
    - une valeur {{CSSxRef("&lt;length-percentage&gt;")}}, une valeur {{CSSxRef("&lt;flex&gt;")}}, ou l'un des mots-clés suivants&nbsp;: [`min-content`](#min-content), [`max-content`](#max-content) ou [`auto`](#auto)
    - une fonction {{CSSxRef("minmax()")}} avec&nbsp;:
      - `min` donné comme une valeur {{CSSxRef("&lt;length-percentage&gt;")}} ou l'un des mots-clés suivants&nbsp;: [`min-content`](#min-content), [`max-content`](#max-content), ou [`auto`](#auto)
      - `max` donné comme une valeur {{CSSxRef("&lt;length-percentage&gt;")}}, une valeur {{CSSxRef("&lt;flex&gt;")}}, ou l'un des mots-clés suivants&nbsp;: [`min-content`](#min-content), [`max-content`](#max-content), ou [`auto`](#auto)
    - une fonction {{CSSxRef("fit-content()")}} , passée une valeur {{CSSxRef("&lt;length-percentage&gt;")}}.
- `auto`
  - : Comme maximum, identique à `max-content`. Comme minimum, il représente la plus grande taille minimale (comme défini par {{CSSxRef("min-width")}}/{{CSSxRef("min-height")}}) des éléments de la grille occupant la piste de la grille.
- `auto-fill`
  - : Si le conteneur de grille a une taille définie ou maximale dans l'axe pertinent, alors le nombre de répétitions est le plus grand entier positif possible qui ne fait pas déborder la grille de son conteneur. En traitant chaque piste comme sa fonction de dimensionnement maximale (chaque valeur indépendante utilisée pour définir `grid-template-rows` ou `grid-template-columns`), si cela est défini. Sinon, comme sa fonction de dimensionnement minimale, et en tenant compte de l'espacement de la grille. Si un nombre quelconque de répétitions provoquerait un débordement, alors la répétition est `1`. Sinon, si le conteneur de grille a une taille minimale définie dans l'axe pertinent, le nombre de répétitions est le plus petit entier positif possible qui satisfait cette exigence minimale. Sinon, la liste de pistes définie ne se répète qu'une seule fois.
- `auto-fit`
  - : Se comporte de la même manière que `auto-fill`, sauf qu'après avoir placé les éléments de la grille, toutes les pistes répétées vides sont effondrées. Une piste vide est une piste dans laquelle aucun élément de la grille en flux n'est placé ou ne s'étend à travers elle. (Cela peut entraîner l'effondrement de toutes les pistes, si elles sont toutes vides.)

    Une piste effondrée est traitée comme ayant une seule fonction de dimensionnement de piste fixe de `0px`, et les gouttières de chaque côté s'effondrent.

    Pour déterminer le nombre de pistes répétées automatiquement, l'agent utilisateur arrondit la taille de la piste à une valeur définie par l'agent utilisateur (par exemple, `1px`), afin d'éviter une division par zéro.

- {{CSSxRef("max-content")}}
  - : Représente la plus grande contribution de type max-content des éléments de la grille occupant la piste de la grille.
- {{CSSxRef("min-content")}}
  - : Représente la plus grande contribution de type min-content des éléments de la grille occupant la piste de la grille.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir des colonnes de grille en utilisant `repeat()`

#### HTML

```html
<div id="container">
  <div>Un élément qui mesure 50 pixels de large.</div>
  <div>Un élément avec une largeur flexible.</div>
  <div>Un élément qui mesure 50 pixels de large.</div>
  <div>Un élément avec une largeur flexible.</div>
  <div>Un élément non-flexible qui mesure 100 pixels de large.</div>
</div>
```

#### CSS

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

#### Résultat

{{EmbedLiveSample("Définir des colonnes de grille en utilisant `repeat()`", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("grid-template")}}
- La propriété {{CSSxRef("grid-template-rows")}}
- La propriété {{CSSxRef("grid-template-columns")}}
- La propriété {{CSSxRef("grid-template-areas")}}
- La propriété {{CSSxRef("grid-auto-columns")}}
- La propriété {{CSSxRef("grid-auto-rows")}}
- La propriété {{CSSxRef("grid-auto-flow")}}
- [Placement basé sur les lignes avec CSS Grid](/fr/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Zones de modèle de grille&nbsp;: raccourcis de définition de grille](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#les_propriétés_raccourcies_pour_les_grilles_css)
