---
title: <resolution>
slug: Web/CSS/resolution
---

{{CSSRef}}

## Resumen

El tipo de dato [CSS](/es/docs/Web/CSS) `<resolution>`, usado en [media queries](/es/docs/Web/Guide/CSS/Media_queries), define la densidad de píxeles de un dispositivo de salida, su resolución. Es un {{cssxref("&lt;number&gt;")}} inmediatamente seguido por una unidad de resolución (`dpi`, `dpcm`, ...). Como para cualquier dimensión CSS, no hay espacio entre la unidad literal y el número.

En pantallas, la longitud está relacionada a centímetros, pulgadas o píxeles CSS, no en valores físicos.

Incluso si todas las unidades representan la misma resolución para el valor 0, la unidad no se puede omitir en este caso, ya que no es un {{cssxref("&lt;length&gt;")}}: `0` es inválida y no representa `0dpi`, `0dpcm`, ni `0dppx`.

## Unidades

- [`dpi`]()
  - : Esta unidad representa el número de [dots per inch](http://en.wikipedia.org/wiki/Dots_per_inch) (ppp en español), puntos por pulgada . A screen typically contains 72 or 96 dpi; a printed document usually reach much greater dpi. As 1 inch is 2.54 cm, `1dpi ≈ 0.39dpcm`.
- [`dpcm`]()
  - : Esta unidad representa el número de [dots per centimeter](http://en.wikipedia.org/wiki/Dots_per_centimetre) (ppc en español), puntos por cm. 1 inch(pulgada) son 2.54 cm, `1dpcm ≈ 2.54dpi`.
- [`dppx`]()
  - : Esta unidad representa el número de puntos por unidad px. Debido a la relación fija de 1:96 CSS para CSS px, 1 px es equivalente a 96 dpi, que corresponde a la resolución predeterminada de las imágenes mostradas en CSS como se define por {{cssxref("image-resolution")}}.

## Ejemplos

Éstos son algunos de los usos correctos de valores `<resolution>`:

```
96dpi                                              Uso correcto: a {{cssxref("&lt;number&gt;")}} (here an {{cssxref("&lt;integer&gt;")}}) followed by the unit.
@media print and (min-resolution: 300dpi) { ... }  El uso correcto en el contexto de una media query.
```

Here are some incorrect uses:

```
72 dpi                                             Incorecto: no hay espacios entre {{ cssxref("&lt;number&gt;") }} y la unidad.
ten dpi                                            Incorecto: sólo deben ser utilizados dígitos.
0                                                  Incorecto: la unidad se puede omitir por 0 sólo para valores {{ cssxref("&lt;length&gt;") }}.
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [CSS Media Queries](/es/docs/Web/Guide/CSS/Media_queries)
