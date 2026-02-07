---
title: grid-template
slug: Web/CSS/Reference/Properties/grid-template
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`grid-template`** définit les {{Glossary("grid column", "colonnes de grille")}}, les {{Glossary("grid_row", "lignes de grille")}} et les {{Glossary("grid areas", "zones de grille")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: grid-template")}}

```css interactive-example-choice
grid-template:
  "a a a" 40px
  "b c c" 40px
  "b c c" 40px / 1fr 1fr 1fr;
```

```css interactive-example-choice
grid-template:
  "b b a" auto
  "b b c" 2ch
  "b b c" 1em / 20% 20px 1fr;
```

```css interactive-example-choice
grid-template:
  "a a ." minmax(50px, auto)
  "a a ." 80px
  "b b c" auto / 2em 3em auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>Un</div>
      <div>Deux</div>
      <div>Trois</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-gap: 10px;
  width: 200px;
}

#example-element :nth-child(1) {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  grid-area: a;
}

#example-element :nth-child(2) {
  background-color: rgb(255 0 200 / 0.2);
  border: 3px solid rebeccapurple;
  grid-area: b;
}

#example-element :nth-child(3) {
  background-color: rgb(94 255 0 / 0.2);
  border: 3px solid green;
  grid-area: c;
}
```

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}

## Syntaxe

```css
/* Valeur avec un mot-clé */
grid-template: none;

/* Valeurs utilisant grid-template-rows / grid-template-columns */
grid-template: 100px 1fr / 50px 1fr;
grid-template: auto 1fr / auto 1fr auto;
grid-template: [line-name] 100px / [column-name1] 30% [column-name2] 70%;
grid-template: fit-content(100px) / fit-content(40%);

/* Valeurs utilisant grid-template-areas grid-template-rows / grid-template-column */
grid-template:
  "a a a"
  "b b b";
grid-template:
  "a a a" 20%
  "b b b" auto;
grid-template:
  [header-top] "a a a" [header-bottom]
  [main-top] "b b b" 1fr [main-bottom]
  / auto 1fr auto;

/* Valeurs globales */
grid-template: inherit;
grid-template: initial;
grid-template: revert;
grid-template: revert-layer;
grid-template: unset;
```

### Valeurs

- `none`
  - : Définit les trois propriétés détaillées sur `none`, ce qui signifie qu'il n'y a pas de grille explicite. Il n'y a pas de zone de grille nommée. Les lignes et les colonnes seront générées de façon implicite&nbsp;; leur taille sera déterminée par les propriétés {{CSSxRef("grid-auto-rows")}} et {{CSSxRef("grid-auto-columns")}}. Il s'agit de la valeur par défaut.
- `<'grid-template-rows'> / <'grid-template-columns'>`
  - : Voir {{CSSxRef("grid-template-rows")}} et {{CSSxRef("grid-template-columns")}} pour les valeurs définies. {{CSSxRef("grid-template-areas")}} recevra la valeur `none`.
- `[ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <track-list> ]?`
  - : {{CSSxRef("grid-template-areas")}} est définie avec les chaînes listées, {{CSSxRef("grid-template-rows")}} est définie avec les tailles de piste suivant chaque chaîne (`auto` sera utilisé pour les tailles manquantes), les lignes seront découpées selon les noms avant et après chaque taille. {{CSSxRef("grid-template-columns")}} sera définie avec la valeur listée après la barre oblique (ou `none` sinon).

    > [!NOTE]
    > La fonction {{CSSxRef("repeat()")}} n'est pas autorisée parmi les listes de pistes car les pistes sont conçues pour correspondre à la disposition finale (à la façon d'un dessin en ASCII).

> [!NOTE]
> La propriété raccourcie {{CSSxRef("grid")}} accepte la même syntaxe mais réinitialise également les propriétés implicites avec leurs valeurs initiales. On pourra utiliser `grid` (plutôt que `grid-template`) pour empêcher les valeurs de suivre la cascade de façon séparée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir un modèle de grille

#### HTML

```html
<section id="page">
  <header>En-tête</header>
  <nav>Navigation</nav>
  <main>Zone principale</main>
  <footer>Bas de page</footer>
</section>
```

#### CSS

```css
#page {
  display: grid;
  width: 100%;
  height: 200px;
  grid-template:
    [header-left] "head head" 30px [header-right]
    [main-left] "nav  main" 1fr [main-right]
    [footer-left] "nav  foot" 30px [footer-right]
    / 120px 1fr;
}

header {
  background-color: lime;
  grid-area: head;
}

nav {
  background-color: lightblue;
  grid-area: nav;
}

main {
  background-color: yellow;
  grid-area: main;
}

footer {
  background-color: red;
  grid-area: foot;
}
```

#### Résultat

{{EmbedLiveSample("Définir un modèle de grille", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("grid-template-rows")}}
- La propriété {{CSSxRef("grid-template-columns")}}
- La propriété {{CSSxRef("grid-template-areas")}}
- [Placer les éléments d'une grille sur les lignes](/fr/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Les zones de grilles et les propriétés raccourcies](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#les_propriétés_raccourcies_pour_les_grilles_css)
- Vidéo&nbsp;: [les propriétés raccourcies pour les zones de grille <sup>(angl.)</sup>](https://gridbyexample.com/video/grid-template-shorthand/)
