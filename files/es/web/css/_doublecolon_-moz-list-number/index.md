---
title: "::-moz-list-number"
slug: Web/CSS/::-moz-list-number
---

{{Non-standard_header}}{{CSSRef}}

## Resumen

El [pseudo-elemento](/es/docs/Web/CSS/Pseudo-elements) [CSS](/es/docs/Web/CSS) `::-moz-list-number` te permite personalizar la apariencia de los números de los elementos de lista ({{HTMLElement("li")}}) en listas que sean listas ordenadas ({{HTMLElement("ol")}}).

## Síntaxis

```
li::-moz-list-number { style properties }
```

## Ejemplo

### CSS

```css
li::-moz-list-number {
  font-style: italic;
  font-weight: bold;
}
```

### HTML

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

### Resultado

![moz-list-number.png](moz-list-number.png)
{{EmbedLiveSample("Example")}}
