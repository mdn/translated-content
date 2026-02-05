---
title: flex-wrap
slug: Web/CSS/Reference/Properties/flex-wrap
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`flex-wrap`** définit si les éléments flexibles sont forcés sur une seule ligne ou peuvent passer à la ligne sur plusieurs lignes. Si le retour à la ligne est autorisé, elle définit la direction dans laquelle les lignes sont empilées.

{{InteractiveExample("Démonstration CSS&nbsp;: flex-wrap")}}

```css interactive-example-choice
flex-wrap: nowrap;
```

```css interactive-example-choice
flex-wrap: wrap;
```

```css interactive-example-choice
flex-wrap: wrap-reverse;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>Élément Un</div>
    <div>Élément Deux</div>
    <div>Élément Trois</div>
    <div>Élément Quatre</div>
    <div>Élément Cinq</div>
    <div>Élément Six</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  display: flex;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  width: 60px;
  margin: 10px;
}
```

La propriété raccourcie {{CSSxRef("flex-flow")}} permet de définir à la fois les propriétés {{CSSxRef("flex-direction")}} et `flex-wrap`, qui définissent respectivement les axes principal et transversal du conteneur flexible.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
flex-wrap: nowrap; /* Valeur par défaut */
flex-wrap: wrap;
flex-wrap: wrap-reverse;

/* Valeurs globales */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: revert;
flex-wrap: revert-layer;
flex-wrap: unset;
```

### Valeurs

La propriété `flex-wrap` peut être défini grâce à l'un des mots-clés suivants&nbsp;:

- `nowrap`
  - : Les éléments flexibles sont disposés sur une seule ligne. Cela peut entraîner un dépassement du conteneur. La ligne **cross-start** est équivalente à {{Glossary("Flow_relative_values", "inline-start ou block-start")}}, en fonction du [mode d'écriture](/fr/docs/Web/CSS/Guides/Writing_modes) actuel, et de la valeur de {{CSSxRef("flex-direction")}}. Cette valeur est la valeur par défaut.
- `wrap`
  - : Les éléments flexibles sont disposés sur plusieurs lignes. La ligne **cross-start** est équivalente à {{Glossary("Flow_relative_values", "inline-start ou block-start")}}, en fonction du [mode d'écriture](/fr/docs/Web/CSS/Guides/Writing_modes) actuel, et de la valeur de {{CSSxRef("flex-direction")}}.
- `wrap-reverse`
  - : Se comporte comme `wrap` mais **cross-start** et **cross-end** sont permutées.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir les valeurs de retour à la ligne du conteneur flexible

#### HTML

```html
<h4>Un exemple de <code>flex-wrap:wrap</code></h4>
<div class="contenu">
  <div class="rouge">1</div>
  <div class="vert">2</div>
  <div class="bleu">3</div>
</div>

<h4>Un exemple de <code>flex-wrap:nowrap</code></h4>
<div class="contenu1">
  <div class="rouge">1</div>
  <div class="vert">2</div>
  <div class="bleu">3</div>
</div>

<h4>Un exemple de <code>flex-wrap:wrap-reverse</code></h4>
<div class="contenu2">
  <div class="rouge">1</div>
  <div class="vert">2</div>
  <div class="bleu">3</div>
</div>
```

#### CSS

```css
/* Styles communs */
.contenu,
.contenu1,
.contenu2 {
  color: white;
  font: 100 24px/100px sans-serif;
  height: 150px;
  width: 897px;
  text-align: center;
}

.contenu div,
.contenu1 div,
.contenu2 div {
  height: 50%;
  width: 300px;
}
.rouge {
  background: orangered;
}
.vert {
  background: yellowgreen;
}
.bleu {
  background: steelblue;
}

/* Styles pour les boîtes flexibles*/
.contenu {
  display: flex;
  flex-wrap: wrap;
}
.contenu1 {
  display: flex;
  flex-wrap: nowrap;
}
.contenu2 {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

#### Résultat

{{EmbedLiveSample("Définir les valeurs de retour à la ligne du conteneur flexible", "", 700)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("flex-direction")}}
- La propriété raccourcie {{CSSxRef("flex-flow")}}
- [Concepts de base des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Maîtriser le retour à la ligne des éléments flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- Le module [du modèle de boîte flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
