---
title: grid-template-areas
slug: Web/CSS/Reference/Properties/grid-template-areas
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`grid-template-areas`** définit les {{Glossary("grid areas", "zones de grille")}} nommées, établit les cellules de la grille et leur attribue des noms.

{{InteractiveExample("Démonstration CSS&nbsp;: grid-template-areas")}}

```css interactive-example-choice
grid-template-areas:
  "a a a"
  "b c c"
  "b c c";
```

```css interactive-example-choice
grid-template-areas:
  "b b a"
  "b b c"
  "b b c";
```

```css interactive-example-choice
grid-template-areas:
  "a a ."
  "a a ."
  ". b c";
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>Un (a)</div>
      <div>Deux (b)</div>
      <div>Trois (c)</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, minmax(40px, auto));
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

Ces zones ne sont pas associées à un objet de la grille mais peuvent être utilisées avec les propriétés de placement : {{CSSxRef("grid-row-start")}}, {{CSSxRef("grid-row-end")}}, {{CSSxRef("grid-column-start")}}, {{CSSxRef("grid-column-end")}} et les méthodes de raccourci correspondantes {{CSSxRef("grid-row")}}, {{CSSxRef("grid-column")}} et {{CSSxRef("grid-area")}}.

## Syntaxe

```css
/* Valeur avec un mot-clé */
grid-template-areas: none;

/* Valeurs de type <string> */
grid-template-areas: "a b";
grid-template-areas:
  "a b ."
  "a c d";

/* Valeurs globales */
grid-template-areas: inherit;
grid-template-areas: initial;
grid-template-areas: revert;
grid-template-areas: revert-layer;
grid-template-areas: unset;
```

### Valeurs

- `none`
  - : Le conteneur de grille ne définit aucune zone de grille nommée.
- {{CSSxRef("&lt;string&gt;")}}
  - : Une ligne est créée pour chaque chaîne distincte listée, et une colonne est créée pour chaque cellule dans la chaîne. Plusieurs cellules portant le même nom, sur une ou plusieurs lignes, créent une seule zone de grille nommée qui s'étend sur les cellules correspondantes. Si ces cellules ne forment pas un rectangle, la déclaration est invalide.

    Toutes les zones non nommées restantes dans une grille peuvent être référencées à l'aide de _jetons de cellule nulle_. Un jeton de cellule nulle est une séquence d'un ou plusieurs caractères `.` (U+002E FULL STOP), par exemple `.`, `...` ou `.....` etc. Un jeton de cellule nulle peut être utilisé pour créer des espaces vides dans la grille.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemple

### Définir des zones de grille nommées

#### HTML

```html
<section id="page">
  <header>En-tête</header>
  <nav>Navigation</nav>
  <main>Zone principale</main>
  <footer>Pied de page</footer>
</section>
```

#### CSS

```css
#page {
  display: grid;
  width: 100%;
  height: 250px;
  grid-template-areas:
    "head head"
    "nav  main"
    ".  foot";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
}

#page > header {
  grid-area: head;
  background-color: #8ca0ff;
}

#page > nav {
  grid-area: nav;
  background-color: #ffa08c;
}

#page > main {
  grid-area: main;
  background-color: #ffff64;
}

#page > footer {
  grid-area: foot;
  background-color: #8cffa0;
}
```

Dans le code ci-dessus, un jeton de cellule nulle (`.`) a été utilisé pour créer une zone non nommée dans le conteneur de grille, ce qui a permis de créer un espace vide dans le coin inférieur gauche de la grille.

#### Résultat

{{EmbedLiveSample("Définir des zones de grille nommées", "100%", 285)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("grid-template-rows")}}
- La propriété {{CSSxRef("grid-template-columns")}}
- La propriété raccourcie {{CSSxRef("grid-template")}}
- [Les zones des grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- Vidéo&nbsp;: [les zones des grilles CSS <sup>(angl.)</sup>](https://gridbyexample.com/video/grid-template-areas/)
