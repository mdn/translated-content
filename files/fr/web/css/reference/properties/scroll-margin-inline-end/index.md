---
title: scroll-margin-inline-end
slug: Web/CSS/Reference/Properties/scroll-margin-inline-end
original_slug: Web/CSS/scroll-margin-inline-end
---

{{CSSRef}}

La propriété **`scroll-margin-inline-end`** définit la marge de défilement de l'élément sur la fin de l'axe en ligne. La zone de défilement est déterminée en prenant la boîte de bordure modifiée, en prenant le rectangle englobant puis en ajoutant les décalages indiqués.

{{InteractiveExample("CSS Demo: scroll-margin-inline-end")}}

```css interactive-example-choice
scroll-margin-inline-end: 0;
```

```css interactive-example-choice
scroll-margin-inline-end: 20px;
```

```css interactive-example-choice
scroll-margin-inline-end: 2em;
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
.default-example {
  flex-wrap: wrap;
}

.default-example .info {
  width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

.scroller {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: x mandatory;
}

.scroller > div {
  flex: 0 0 250px;
  width: 250px;
  background-color: rebeccapurple;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: end;
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
scroll-margin-inline-end: 10px;
scroll-margin-inline-end: 1em;

/* Valeurs globales */
scroll-margin-inline-end: inherit;
scroll-margin-inline-end: initial;
scroll-margin-inline-end: unset;
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
