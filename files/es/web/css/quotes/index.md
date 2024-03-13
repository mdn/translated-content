---
title: quotes
slug: Web/CSS/quotes
---

{{CSSRef}}

## Sumario

La propiedad [CSS](/es/docs/CSS) `quotes` indica cómo debe renderizar las citas el navegador.

{{cssinfo}}

## Sintaxis

```css
/* Valor con palabras clave */
quotes: none;

/* Valor <string> */
quotes: "«" "»"; /* Especifica open-quote y close-quote a las marcas de cita francesas */
quotes: "«" "»" "‹" "›"; /* Especifica dos niveles de marcas de cita */

/* Valores globales */
quotes: inherit;
quotes: initial;
quotes: unset;
```

### Valores

- `none`
  - : Los valores `open-quote` y `close-quote` de la propiedad {{cssxref("content")}} no renderiza marcas de cita.
- `[<string> <string>]+`
  - : Uno o más pares de valores {{cssxref("&lt;string&gt;")}} para `open-quote` y `close-quote`. El primer par representa el nivel más externo de citación, el segundo par es para el primer nivel anidado, el siguiente par para el siguiente nivel, y así sucesivamente.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

```css
q {
  quotes: '"' '"' "'" "'";
}
q:before {
  content: open-quote;
}
q:after {
  content: close-quote;
}
```

## Notas

Desde Firefox 3.5, el valor inicial de la propiedad de las citas se puede leer usando `-moz-initial`. Esto no es posible en versiones anteriores de Firefox.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{ Cssxref("content") }}
