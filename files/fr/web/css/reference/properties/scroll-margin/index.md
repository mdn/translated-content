---
title: scroll-margin
slug: Web/CSS/Reference/Properties/scroll-margin
original_slug: Web/CSS/scroll-margin
---

{{CSSRef}}

La propriété `scroll-margin` est une propriété raccourcie qui permet de définir l'ensemble des propriétés `scroll-margin-top`, `scroll-margin-left`, `scroll-margin-bottom` et `scroll-margin-right` (de la même façon que la propriété `margin` définit les différents côtés des marges).

{{InteractiveExample("CSS Demo: scroll-margin")}}

```css interactive-example-choice
scroll-margin: 0;
```

```css interactive-example-choice
scroll-margin: 20px;
```

```css interactive-example-choice
scroll-margin: 2em;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller">
    <div>1</div>
    <div id="example-element">2</div>
    <div>3</div>
  </div>
  <div class="info">Scroll »</div>
</section>
```

```css interactive-example
.default-example .info {
  inline-size: 100%;
  padding: 0.5em 0;
  font-size: 90%;
  writing-mode: vertical-rl;
}

.scroller {
  text-align: left;
  height: 250px;
  width: 270px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: y mandatory;
}

.scroller > div {
  flex: 0 0 250px;
  background-color: rebeccapurple;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.scroller > div:nth-child(even) {
  background-color: #fff;
  color: rebeccapurple;
}
```

Les valeurs de `scroll-margin` correspondent aux décalages entre la zone qui est utilisée pour définir les limites du défilement de la boîtes et la zone de défilement normale (_snapport_). La zone de défilement est déterminée en prenant la boîte de bordure modifiée, en prenant le rectangle englobant puis en ajoutant les décalages indiqués.

## Syntaxe

```css
/* Valeur de longueur */
/* Type <length> */
scroll-margin: 10px;
scroll-margin: 1em 0.5em 1em 1em;

/* Valeurs globales */
scroll-margin: inherit;
scroll-margin: initial;
scroll-margin: unset;
```

### Valeurs

- `<length>`
  - : Un décalage par rapport au côté correspondant pour le conteneur de défilement. Voir {{cssxref("&lt;length&gt;")}} pour les valeurs possibles.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
