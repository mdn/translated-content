---
title: font-size
slug: Web/CSS/font-size
---

{{CSSRef}}

## Resumen

La propiedad `font-size` especifica la dimensión de la letra. Este tamaño puede, a su vez, alterar el aspecto de alguna otra cosa, ya que se usa para calcular la longitud de las unidades `em` y `ex`.

{{cssinfo}}

## Sintaxis

`font-size:` `xx-small` | `x-small` | `small` | `medium` | `large` | `x-large` | `xx-large`

`font-size:` `smaller` | `larger`

`font-size:` \<longitud> | \<porcentaje> | {{ Cssxref("inherit") }}

### Valores

- xx-small, x-small, small, medium, large, x-large, xx-large
  - : un grupo de palabras clave de dimensión absoluta en relación al que determina el usuario como tamaño por defecto (que es `medium`). De forma parecida a las sentencias HTML `<font size="1">` hasta `<font size="7">` donde el tamaño por defecto es `<font size="3">`.
- larger, smaller
  - : más grande o más pequeño que el tamaño de letra del elemento padre, con aproximadamente el mismo ratio que el mencionado anteriormente.
- [\<longitud>](/es/docs/Web/CSS/length)
  - : una unidad positiva de [longitud](/es/docs/Web/CSS/length).

<!---->

- \<Porcentaje>
  - : un porcentaje positivo del cuerpo de letra del elemento padre.

Es aconsejable evitar el uso de valores que no sean relativos al tamaño por defecto definido por el usuario, tales como `longitud` absoluta en unidades distintas a `em` o `ex`. Sin embargo, si hay que usar ese tipo de valores, es preferible utilizar unidades `px` (píxel), ya que su significado no varía en función de las características del sistema operativo (casi siempre erróneas) como la resolución del monitor.

## Ejemplos

[Ver El Ejemplo Vivo](https://mdn.dev/archives/media/samples/cssref/font-size.html)

```
/* Ajusta el texto del párrafo a un cuerpo de letra muy grande. */
p { font-size: xx-large }

/* Ajusta la cabecera de nivel 1 (h1) a 2,5 veces del tamaño
 * del texto. */
h1 { font-size: 250% }

/* Ajusta el texto incluido en span a 16px */
span { font-size: 16px; }
```

## Notas

Las unidades `em` y `ex` en la propiedad {{ Cssxref("font-size") }} son relativas al tamaño de letra del elemento padre (al contrario que todas las demás propiedades, en las que estas unidades son relativas al tamaño de letra del elemento). Esto quiere decir que las unidades `em` y los porcentajes se comportan de igual forma cuando hablamos de {{ Cssxref("font-size") }}.

## Especificaciones

- [CSS 1](https://www.w3.org/TR/CSS1#font-size)
- [CSS 2.1](https://www.w3.org/TR/CSS21/fonts.html#propdef-font-size)
- [css3-fonts](https://www.w3.org/TR/css3-fonts/#font-size)
