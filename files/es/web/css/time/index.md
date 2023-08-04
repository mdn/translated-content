---
title: <time>
slug: Web/CSS/time
---

{{CSSRef}}

El [tipo de dato](/es/docs/Web/CSS/CSS_Types) **`<time>`** de [CSS](/es/docs/Web/CSS) representa un valor de tiempo expresado en segundos o milisegundos. Se usa en {{cssxref("animation")}}, {{cssxref("transition")}} y propiedades relacionadas.

## Sintaxis

El tipo de datos `<time>` consta de un {{cssxref("&lt;number&gt;")}} seguido de una de las unidades enumeradas a continuación. Opcionalmente, puede estar precedido por un solo signo `+` o `-` . Al igual que con todas las dimensiones, no hay espacio entre la unidad literal y el número.

> **Nota:** Aunque el número `0` es siempre el mismo independientemente de la unidad, la unidad no se puede omitir. En otras palabras, `0` no es válido y no representa `0s` o `0ms`.

### Unidades

- **`s`**
  - : Representa un tiempo en segundos. Ejemplos: `0s`, `1.5s`, `-60s`.
- **`ms`**
  - : Representa un tiempo en milisegundos. Ejemplos: `0ms`, `150.25ms`, `-60000ms`.

> **Nota:** Nota: La conversión entre `s` y `ms` sigue la lógica `1s` = `1000ms`.

## Ejemplos

### Tiempos válidos

```
12s         Entero positivo
-456ms      Entero negativo
4.3ms       No entero
14mS        La unidad no distingue entre mayúsculas y minúsculas, aunque no se recomiendan letras mayúsculas.
+0s         Cero con un signo + y una unidad
-0ms        Cero con un signo - y una unidad
```

### Tiempos inválidos

```plain example-bad
0           Aunque el cero sin unidades está permitido para <length>, no es válido para <time>.
12.0        Este es un <number>, no un <time>, porque le falta una unidad.
7 ms        No se permite espacio entre el número y la unidad.
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
