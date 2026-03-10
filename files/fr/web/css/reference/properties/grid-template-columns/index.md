---
title: grid-template-columns
slug: Web/CSS/Reference/Properties/grid-template-columns
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`grid-template-columns`** définit les noms de lignes et les fonctions de dimensionnement des pistes des {{Glossary("grid column", "colonnes de grille")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: grid-template-columns")}}

```css interactive-example-choice
grid-template-columns: 60px 60px;
```

```css interactive-example-choice
grid-template-columns: 1fr 60px;
```

```css interactive-example-choice
grid-template-columns: 1fr 2fr;
```

```css interactive-example-choice
grid-template-columns: 8ch auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>Un</div>
      <div>Deux</div>
      <div>Trois</div>
      <div>Quatre</div>
      <div>Cinq</div>
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
  width: 200px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Syntaxe

```css
/* Valeur avec un mot-clé */
grid-template-columns: none;

/* Valeurs de type <track-list> */
grid-template-columns: 100px 1fr;
grid-template-columns: [line-name] 100px;
grid-template-columns: [line-name1] 100px [line-name2 line-name3];
grid-template-columns: minmax(100px, 1fr);
grid-template-columns: fit-content(40%);
grid-template-columns: repeat(3, 200px);
grid-template-columns: subgrid;
grid-template-columns: masonry;

/* Valeurs de type <auto-track-list> */
grid-template-columns: 200px repeat(auto-fill, 100px) 300px;
grid-template-columns:
  minmax(100px, max-content)
  repeat(auto-fill, 200px) 20%;
grid-template-columns:
  [line-name1] 100px [line-name2]
  repeat(auto-fit, [line-name3 line-name4] 300px)
  100px;
grid-template-columns:
  [line-name1 line-name2] 100px
  repeat(auto-fit, [line-name1] 300px) [line-name3];

/* Valeurs globales */
grid-template-columns: inherit;
grid-template-columns: initial;
grid-template-columns: revert;
grid-template-columns: revert-layer;
grid-template-columns: unset;
```

### Valeurs

- `none`
  - : Un mot-clé qui indique qu'il n'y a pas de grille explicite. N'importe quelle colonne sera générée implicitement et sa taille sera déterminée grâce à la propriété {{CSSxRef("grid-auto-columns")}}.
- {{CSSxRef("&lt;length&gt;")}}
  - : Une longueur positive, indiquant la largeur de la colonne.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Un pourcentage positif ({{CSSxRef("&lt;percentage&gt;")}}) relatif à la taille du bloc du conteneur de la grille. Si cette taille n'est pas définie, la valeur est traitée comme `auto`.
- {{CSSxRef("&lt;flex&gt;")}}
  - : Une dimension positive dont l'unité `fr` indique le facteur de flexibilité de la piste. Chaque piste dimensionnée avec `<flex>` occupera une partie de l'espace restant en fonction de ce facteur.

    Lorsque cette valeur apparaît en dehors de la notation `minmax()`, la valeur minimale `auto` est implicite (la valeur signifie `minmax(auto, <flex>)`).

- {{CSSxRef("max-content")}}
  - : Un mot-clé qui représente la plus grande des contributions maximales de contenu aux objets de la grilles qui occupe la piste de la grille.
- {{CSSxRef("min-content")}}
  - : Un mot-clé qui représente la plus grande des contributions minimales de contenu aux objets de la grilles qui occupe la piste de la grille.
- {{CSSxRef("minmax()", "minmax(min, max)")}}
  - : Une notation fonctionnelle qui définit un intervalle de taille entre `min` et `max`. Si `max` est inférieur à `min`, `max` est ignoré et la fonction est traitée comme un minimum. En tant que maximum, elle joue le rôle d'une valeur `<flex>` qui définit le facteur de flexibilité de la piste. Cette valeur est invalide en tant que minimum.
- `auto`
  - : En tant que valeur maximale, cela représente la plus grande taille {{CSSxRef("max-content")}} des éléments de cette piste.

    En tant que valeur minimale, cela représente la plus grande taille minimale des éléments de cette piste (définie par les propriétés {{CSSxRef("min-width")}}/{{CSSxRef("min-height")}} des éléments). Cela correspond souvent à la taille {{CSSxRef("min-content")}}, mais pas toujours.

    Si utilisé en dehors de la notation {{CSSxRef("minmax()")}}, `auto` représente l'intervalle entre les valeurs minimale et maximale décrites ci-dessus. Dans la plupart des cas, cela se comporte comme `minmax(min-content,max-content)`.

    > [!NOTE]
    > Les tailles de piste `auto` (et uniquement celles-ci) peuvent être étirées grâce aux propriétés {{CSSxRef("align-content")}} et {{CSSxRef("justify-content")}}. Par conséquent, par défaut, une piste dimensionnée en `auto` occupera tout l'espace restant dans le conteneur de grille.

- {{CSSxRef("fit-content", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Représente la formule `max(minimum, min(limit, max-content))`, où _minimum_ représente un minimum `auto` (qui est souvent, mais pas toujours, égal à un minimum {{CSSxRef("min-content")}}), et _limit_ est la fonction de dimensionnement de piste passée en argument à fit-content(). Cela est essentiellement calculé comme la plus petite valeur entre `minmax(auto, max-content)` et `minmax(auto, limit)`.
- {{CSSxRef("repeat()","repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ], &lt;track-list&gt; )")}}
  - : Représente un fragment répété d'une liste de pistes, cela permet de gérer des grilles avec de nombreuses colonnes pour lesquelles on réutilise un motif.
- [`masonry`](/fr/docs/Web/CSS/Guides/Grid_layout/Masonry_layout) {{Experimental_Inline}}
  - : La valeur `masonry` indique que cet axe doit être mis en page selon l'algorithme de compartimentation.
- [`subgrid`](/fr/docs/Web/CSS/Guides/Grid_layout/Subgrid)
  - : La valeur `subgrid` indique que la grille adoptera la portion englobante de la grille parente sur cet axe. Plutôt que d'être définies explicitement, les tailles des lignes/colonnes de la grille seront reprises de la définition de la grille parente.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la taille des colonnes de grille

#### HTML

```html
<div id="grid">
  <div id="areaA">A</div>
  <div id="areaB">B</div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  width: 100%;
  grid-template-columns: 50px 1fr;
}

#areaA {
  background-color: lime;
}

#areaB {
  background-color: yellow;
}
```

#### Résultat

{{EmbedLiveSample("Définir la taille des colonnes de grille", "100%", 20)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("grid-template-rows")}}
- La propriété {{CSSxRef("grid-template-areas")}}
- La propriété raccourcie {{CSSxRef("grid-template")}}
- [Les concepts de base pour les grilles CSS&nbsp;: les pistes](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#les_pistes)
- Vidéo&nbsp;: [définir une grille <sup>(angl.)</sup>](https://gridbyexample.com/video/series-define-a-grid/)
- [Les sous-grilles](/fr/docs/Web/CSS/Guides/Grid_layout/Subgrid)
