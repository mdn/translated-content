---
title: <angle>
slug: Web/CSS/angle
---

{{ CSSRef() }}

## Summary

El tipo de dato `<angle>` de [CSS](/es/docs/Web/CSS) representa valores de ángulo. Los valores positivos representan ángulos en sentido de las agujas del reloj, mientras los valores negativos representan ángulos en sentido opuesto. Su sintáxis es un valor de tipo numérico ({{cssxref("&lt;number&gt;")}}) seguido inmediatamente por la unidad (`deg`, `grad`, `rad` o `turn`). Al igual que cualquier otra dimensión en CSS, no debe haber espacio entre la unidad y el número.

Para propiedades estáticas y una unidad dada, un ángulo puede ser representado por muchos valores: `90deg` y `-270deg`, o `1turn` y `4turn` representan la misma posición final. Sin embargo, para posiciones dinámicas, como aplicar una transición ({{ cssxref("transition") }}) en la propiedad {{ cssxref("transform") }}, el efecto será diferente.

Se deben usar las siguientes unidades:

- [`deg`](), que representa un ángulo en [grados](https://es.wikipedia.org/wiki/Grado_sexagesimal). Un círculo completo equivale a `360deg`. Ejemplos: `0deg`, `90deg`, `360deg`.
- [`grad`](), que representa un ángulo en [grado centesimal](https://es.wikipedia.org/wiki/Grado_centesimal). Un circulo completo equivale a `400grad`. Ejemplos: `0grad`, `100grad`, `400grad`.
- [`rad`](), que representa un ángulo en [radianes](https://es.wikipedia.org/wiki/Radi%C3%A1n). Un círculo completo equivale a 2π radianes, que se aproxima a `6.2832rad`. `1rad` es 180/π grados. Ejemplos: `0rad`, `1.0708rad`, `6.2832rad`.
- [`turn`](), que representa el número de vueltas del ángulo. Un círculo completo equivale a `1turn`. Ejemplos: `0turn`, `0.25turn`, `1turn`.

Aun cuando todas las unidades representan lo mismo para el valor `0`, la unidad no debe ser omitida en ese caso, puesto que no es un valor de tipo {{cssxref("&lt;length&gt;")}}: `0` es inválido, y no representa `0deg`, `0grad`, `0rad` o `0turn`.

## Ejemplos

| ![Angle90.png](angle90.png)           | Ángulo recto: `90deg = 100grad = 0.25turn ≈ 1.5708rad`                                         |
| ------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ![Angle180.png](angle180.png)         | Ángulo llano: `180deg = 200grad = 0.5turn ≈ 3.1416rad`                                         |
| ![AngleMinus90.png](angleminus90.png) | Ángulo recto (hacia la izquierda): `-90deg = -100grad = -0.25turn ≈ -1.5708rad`                |
| ![Angle0.png](angle0.png)             | Ángulo nulo: `0deg = 0grad = 0turn = 0rad` <br><br> Nota: `0` no es un valor de ángulo válido. |

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
