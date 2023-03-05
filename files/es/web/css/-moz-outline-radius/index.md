---
title: '-moz-outline-radius'
slug: Web/CSS/-moz-outline-radius
---

{{Non-standard_header}}{{CSSRef}}

## Resumen

En aplicaciones de Mozilla como Firefox, la propiedad CSS `-moz-outline-radius` puede ser usada para a los contornos de esquinas redondeadas. Un {{cssxref("outline")}} es una línea que es dibujada alrededor de los elementos, fuera del límite del borde, para hacer que el elemento destaque.

`-moz-outline-radius` es un atajo para establecer las cuatro propiedades{{cssxref("-moz-outline-radius-topleft")}}, {{cssxref("-moz-outline-radius-topright")}}, {{cssxref("-moz-outline-radius-bottomright")}} y {{cssxref("-moz-outline-radius-bottomleft")}}.

{{cssinfo}}

## Síntaxis

```css
/* Un valor */
-moz-outline-radius: 25px;

/* Dos valores */
-moz-outline-radius: 25px 1em;

/* Tres valores */
-moz-outline-radius: 25px 1em 12%;

/* Cuator valores */
-moz-outline-radius: 25px 1em 12% 4mm;

/* valores globales */
-moz-outline-radius: inherit;
-moz-outline-radius: initial;
-moz-outline-radius: unset;
```

### Valores

> **Nota:** Los contornos elípticos y los valores `<porcentaje>` se expresan de acuerdo a la síntaxis descrita en {{cssxref("border-radius")}}.

Uno, dos,tres o cuatro valores `<outline-radius>` , representan uno de los siguientes casos:

- {{cssxref("&lt;length&gt;")}}
  - : Ver {{cssxref("&lt;length&gt;")}} para ver los posibles valores.1234567
- {{cssxref("&lt;percentage&gt;")}}
  - : Un {{cssxref("&lt;percentage&gt;")}}; ver {{cssxref("border-radius")}} para más detalles.
    - Si se establece un único valor se aplica a las cuatro esquinas-
    - Si se establecen dos valores, el primero se aplica a la esquina superior-izquierda e inferior-derecha y el segundo a las esquinas superior-derecha e inferior-izquierda
    - Si se establecen tres valores el primero se aplica a la esquina superior-izquierda, el segundo a las esquinas superior-derecha e inferior-izquierda y el tercero a la esquina inferior-derecha.
    - Si se establecen cautro valores el primero se aplica a la esquina superior-izquierda, el segundo a la esquina superior-derecha, el tercero la esquina inferior-derecha y el cuarto a la esquina inferior-izquierda.

### Síntaxis Formal

{{csssyntax}}

## Ejemplo

### HTML

```html
<style>
p {
border: 1px solid black;
outline: dotted red; -moz-outline-radius: 12% 1em 25px;
}
</style> </head>

<body> <p>La propiedad  outline-style usando -moz-outline-radius</p> </body>

<head> <style>
p1 {
border: 1px solid black; outline: dotted red;
-moz-outline-radius-topleft: 12%;
-moz-outline-radius-topright: 1em;
-moz-outline-radius-bottomright: 35px;
-moz-outline-radius-bottomleft: 1em; }
</style> </head>

<body> <p1>La propiedad outline-style usando un -moz-outline-radius-xxx más complicado</p1> </body>
```

### Result

{{EmbedLiveSample('', '', '')}}

## Notas

- `Las esquinas con radio dotted` o `dashed` se muestran como solid, {{bug("382721")}}
- Existe la posibilidad de que futuras versiones del motor Gecko/Firefox eliminen esta propiedad completamente. Ver {{bug("593717")}}.

## Especificaciones

Esta propiedad no se define es ningún estándar CSS.

## Compatibilidad con navegadores

{{Compat}}
