---
title: grid-template-areas
slug: Web/CSS/Reference/Properties/grid-template-areas
original_slug: Web/CSS/grid-template-areas
---

{{CSSRef}}

La propriété **`grid-template-areas`** permet de définir des zones de grille nommées.

{{InteractiveExample("CSS Demo: grid-template-areas")}}

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
      <div>One (a)</div>
      <div>Two (b)</div>
      <div>Three (c)</div>
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
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  grid-area: a;
}

#example-element :nth-child(2) {
  background-color: rgba(255, 0, 200, 0.2);
  border: 3px solid rebeccapurple;
  grid-area: b;
}

#example-element :nth-child(3) {
  background-color: rgba(94, 255, 0, 0.2);
  border: 3px solid green;
  grid-area: c;
}
```

Ces zones ne sont pas associées à un objet de la grille mais peuvent être utilisées avec les propriétés de placement : {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}} et les méthodes de raccourci correspondantes {{cssxref("grid-row")}}, {{cssxref("grid-column")}}, and {{cssxref("grid-area")}}.

## Syntaxe

```css
/* Valeur avec un mot-clé */
grid-template-areas: none;

/* Valeurs de chaînes */
/* Type <string>      */
grid-template-areas: "a b";
grid-template-areas:
  "a b b"
  "a c d";

/* Valeurs globales */
grid-template-areas: inherit;
grid-template-areas: initial;
grid-template-areas: unset;
```

### Valeurs

- `none`
  - : Le conteneur de grille ne définit aucune zone de grille nommée.
- `<string>+`
  - : Un ligne est créée pour chaque chaîne. Une colonne est créée pour chaque composant de la chaîne de caractères. Si on a un même composant réutilisé sur différentes lignes, cela créera une cellule sur les différentes lignes et colonnes. Il est nécessaire que ces cellules forment un rectangle, sinon, la déclaration est invalide. Voir {{cssxref("&lt;string&gt;")}} pour plus d'informations sur les valeurs de ce type.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemple

### HTML

```html
<section id="page">
  <header>En-tête</header>
  <nav>Navigation</nav>
  <main>Zone principale</main>
  <footer>Pied de page</footer>
</section>
```

### CSS

```css
#page {
  display: grid;
  width: 100%;
  height: 250px;
  grid-template-areas:
    "head head"
    "nav main"
    "nav foot";
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

### Résultat

{{EmbedLiveSample("Exemple", "100%", "250px")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template")}}
- [Guide : les zones des grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- Tutoriel vidéo : [les zones des grilles CSS (en anglais)](https://gridbyexample.com/video/grid-template-areas/)
