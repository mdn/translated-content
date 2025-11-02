---
title: scroll-margin-block-start
slug: Web/CSS/Reference/Properties/scroll-margin-block-start
original_slug: Web/CSS/scroll-margin-block-start
---

{{CSSRef}}

La propriété **`scroll-margin-block-start`** définit la marge de défilement de l'élément sur le début de l'axe de bloc. La zone de défilement est déterminée en prenant la boîte de bordure modifiée, en prenant le rectangle englobant puis en ajoutant les décalages indiqués.

{{InteractiveExample("CSS Demo: scroll-margin-block-start")}}

```css interactive-example-choice
scroll-margin-block-start: 0;
```

```css interactive-example-choice
scroll-margin-block-start: 20px;
```

```css interactive-example-choice
scroll-margin-block-start: 2em;
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

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length> */
scroll-margin-block-start: 10px;
scroll-margin-block-start: 1em;

/* Valeurs globales */
scroll-margin-block-start: inherit;
scroll-margin-block-start: initial;
scroll-margin-block-start: unset;
```

### Valeurs

- `<length>`
  - : Un décalage par rapport au côté correspondant du conteneur de défilement.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
