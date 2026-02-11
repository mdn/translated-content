---
title: margin-block-end
slug: Web/CSS/Reference/Properties/margin-block-end
l10n:
  sourceCommit: 12b2bba6348add286377d12f0806d43ddc72bdb7
---

La propriété [CSS](/fr/docs/Web/CSS) **`margin-block-end`** définit la marge logique de fin de bloc d'un élément, qui correspond à une marge physique selon le mode d'écriture, la direction et l'orientation du texte de l'élément.

{{InteractiveExample("Démonstration CSS&nbsp;: margin-block-end")}}

```css interactive-example-choice
margin-block-end: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-block-end: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-block-end: 20%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-block-end: auto;
writing-mode: vertical-lr;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="row">Un</div>
    <div class="row transition-all" id="example-element">Deux</div>
    <div class="row">Trois</div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.row {
  height: 33.33%;
  display: inline-block;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  color: white;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
}
```

## Syntaxe

```css
/* Valeurs de type <length> */
margin-block-end: 10px; /* Une longueur absolue */
margin-block-end: 1em; /* Une longueur relative à la taille du texte */
margin-block-end: 5%; /* Une largeur relative à la largeur du bloc englobant */
margin-block-end: anchor-size(inline);
margin-block-end: calc(anchor-size(--my-anchor block, 20px) / 4);

/* Valeurs avec un mot-clé */
margin-block-end: auto;

/* Valeurs globales */
margin-block-end: inherit;
margin-block-end: initial;
margin-block-end: revert;
margin-block-end: revert-layer;
margin-block-end: unset;
```

Elle correspond à la propriété {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}} ou {{CSSxRef("margin-left")}} selon les valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

Elle est liée à {{CSSxRef("margin-block-start")}}, {{CSSxRef("margin-inline-start")}} et {{CSSxRef("margin-inline-end")}}, qui définissent les autres marges de l'élément.

### Valeurs

La propriété `margin-block-end` peut prendre les mêmes valeurs que la propriété {{CSSxRef("margin-left")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la marge de fin de bloc

#### HTML

```html
<div>
  <p class="exempleTexte">Texte d'exemple</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exempleTexte {
  writing-mode: vertical-lr;
  margin-block-end: 20px;
  background-color: #c8c800;
}
```

#### Résultat

{{EmbedLiveSample("Définir la marge de fin de bloc", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- Les propriétés physiques associées&nbsp;: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}} et {{CSSxRef("margin-left")}}
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
