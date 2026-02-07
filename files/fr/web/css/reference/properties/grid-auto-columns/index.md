---
title: grid-auto-columns
slug: Web/CSS/Reference/Properties/grid-auto-columns
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`grid-auto-columns`** définit la taille d'une colonne de grille créée implicitement, d'une {{Glossary("grid tracks", "piste")}} ou d'un motif de pistes.

{{InteractiveExample("Démonstration CSS&nbsp;: grid-auto-columns")}}

```css interactive-example-choice
grid-auto-columns: auto;
```

```css interactive-example-choice
grid-auto-columns: 1fr;
```

```css interactive-example-choice
grid-auto-columns: min-content;
```

```css interactive-example-choice
grid-auto-columns: minmax(10px, auto);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>Un</div>
      <div>Deux</div>
      <div>Trois</div>
      <div>Quatre</div>
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

#example-element > div:nth-child(1) {
  grid-column: 1 / 3;
}

#example-element > div:nth-child(2) {
  grid-column: 2;
}
```

Si un élément de la grille est positionné sur une colonne dont la taille n'est pas explicitement définie avec {{CSSxRef("grid-template-columns")}}, une piste implicite de la {{Glossary("grid", "grille")}} est créée pour le contenir. Cela peut se produire soit en positionnant explicitement un élément sur une colonne hors plage, soit lorsque l'algorithme de placement automatique crée des colonnes supplémentaires.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
grid-auto-columns: min-content;
grid-auto-columns: max-content;
grid-auto-columns: auto;

/* Valeurs de type <length> */
grid-auto-columns: 100px;
grid-auto-columns: 20cm;
grid-auto-columns: 50vmax;

/* Valeurs de type <percentage> */
grid-auto-columns: 10%;
grid-auto-columns: 33.3%;

/* Valeurs de type <flex> */
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
grid-auto-columns: 10% 33.3%;
grid-auto-columns: 0.5fr 3fr 1fr;
grid-auto-columns: minmax(100px, auto) minmax(max-content, 2fr)
  minmax(20%, 80vmax);
grid-auto-columns: 100px minmax(100px, auto) 10% 0.5fr fit-content(400px);

/* Valeurs globales */
grid-auto-columns: inherit;
grid-auto-columns: initial;
grid-auto-columns: revert;
grid-auto-columns: revert-layer;
grid-auto-columns: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : Une longueur positive.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) positif indiquant la taille de la ligne relativement à la taille du bloc qui contient la grille. Si la taille de ce bloc n'est pas définie, la valeur exprimée en pourcents est considérée comme `auto`.
- {{CSSxRef("&lt;flex&gt;")}}
  - : Une dimension positive dont l'unité `fr` indique le facteur de flexibilité de la piste. Chaque piste dimensionnée avec `<flex>` occupera une partie de l'espace restant en fonction de ce facteur.

    Lorsque cette valeur apparaît en dehors de la notation `minmax()`, la valeur minimale `auto` est implicite (la valeur signifie `minmax(auto, <flex>)`).

- {{CSSxRef("max-content")}}
  - : Un mot-clé qui représente la plus grande des contributions maximales de contenu aux objets de la grilles qui occupe la piste de la grille.
- {{CSSxRef("min-content")}}
  - : Un mot-clé qui représente la plus grande des contributions minimales de contenu aux objets de la grilles qui occupe la piste de la grille.
- {{CSSxRef("minmax", "minmax(min, max)")}}
  - : Une notation fonctionnelle qui définit un intervalle de taille entre `min` et `max`. Si `max` est inférieur à `min`, `max` est ignoré et la fonction est traitée comme un minimum. En tant que maximum, elle joue le rôle d'une valeur `<flex>` qui définit le facteur de flexibilité de la piste. En tant que minimum, elle est gérée comme zéro (ou comme le contenu minimal si le conteneur de la grille impose une contrainte de contenu minimal).
- {{CSSxRef("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Cette notation représente la formule `min(max-content, max(auto, argument))` qui est calculée de façon semblable à `auto`, sauf qu'ici, la taille de la piste est écrétée à _argument_ s'i elle est plus grande que le minimum `auto`.
- `auto`
  - : Comme maximum, cela représente la plus grande taille {{CSSxRef("max-content")}} des éléments sur cette piste.

    Comme minimum, cela représente la plus grande des tailles minimales des éléments sur cette piste (définie par {{CSSxRef("min-width")}}/{{CSSxRef("min-height")}} des éléments). Il s'agit souvent, mais pas toujours, de la taille {{CSSxRef("min-content")}}.

    Si utilisé en dehors de la notation {{CSSxRef("minmax()")}}, `auto` représente l'intervalle entre le minimum et le maximum décrit ci-dessus. Cela se comporte de façon similaire à `minmax(min-content,max-content)` dans la plupart des cas.

    > [!NOTE]
    > Les pistes de taille `auto` (et uniquement celles-ci) peuvent être étirées grâce aux propriétés {{CSSxRef("align-content")}} et {{CSSxRef("justify-content")}}. Par défaut, une piste dimensionnée en `auto` occupera tout l'espace restant dans le conteneur de la grille.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la taille des colonnes de la grille

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
  height: 100px;
  display: grid;
  grid-template-areas: "a a";
  grid-gap: 10px;
  grid-auto-columns: 200px;
}

#grid > div {
  background-color: lime;
}
```

#### Résultat

{{EmbedLiveSample("Définir la taille des colonnes de la grille", 410, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("grid-auto-rows")}}
- La propriété {{CSSxRef("grid-auto-flow")}}
- La propriété {{CSSxRef("grid")}}
- [Le placement automatique sur la grille - dimensionner les lignes de la grille implicite](/fr/docs/Web/CSS/Guides/Grid_layout/Auto-placement#dimensionner_les_lignes_de_la_grille_implicite)
- Vidéo&nbsp;: [Introduction au placement automatique sur la grille et à l'ordre des éléments <sup>(angl.)</sup>](https://gridbyexample.com/video/series-auto-placement-order/)
