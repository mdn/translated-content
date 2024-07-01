---
title: "::-moz-list-bullet"
slug: Web/CSS/::-moz-list-bullet
---

{{CSSRef}}{{Non-standard_header}}

El [pseudoelemento](/es/docs/Web/CSS/Pseudo-elements) [CSS](/es/docs/Web/CSS) **`::-moz-list-bullet`** es una [extensión de Mozilla](/es/docs/Web/CSS/Mozilla_Extensions) que representa el marcador (normalmente una viñeta) de un elemento de lista ({{htmlelement("li")}}) en una lista desordenada ({{htmlelement ("ul")}}).

## Sintaxis

```css
li::-moz-list-bullet
```

## Ejemplos

### Dar estilo a los marcadores de elementos de la lista

#### HTML

```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>
```

#### CSS

```css
::-moz-list-bullet {
  color: red;
  font-size: 1.5em;
}
```

#### Resultado

{{ EmbedLiveSample('Dar estilo a los marcadores de elementos de la lista') }}

## Especificaciones

No forma parte de ningún estándar.

## Véase también

- {{cssxref(":-moz-list-number")}}
- {{cssxref("::marker")}}
