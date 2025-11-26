---
title: font-size-adjust
slug: Web/CSS/font-size-adjust
---

{{ CSSRef() }}

## Resumen

La propiedad {{ Cssxref("font-size-adjust") }} especifica que el tamaño de la fuente debería escogerse basándose en el tamaño de las minúsculas en lugar las mayúsculas.

Esto resulta útil ya que la legibilidad de las fuentes, especialmente en el tamaño pequeño, está determinada por el tamaño de las letras minúsculas más que por las mayúsculas. Esto puede causar problemas cuando la primera opción en {{ Cssxref("font-family") }} no está disponible y su reemplazo tiene significativamente un aspecto distinto (el ratio entre las letras minúsculas y mayúsculas de la fuente).

Para hacer esto de forma que sea compatible con los navegadores que no soportan {{ Cssxref("font-size-adjust") }}, se ha especificado de forma que sea el número por el que está multiplicada la propiedad {{ Cssxref("font-size") }}. Esto quiere decir que el valor especificado para la propiedad debería ser el valor de*ratio* o relación de aspecto entre las minúsculas y las mayúsculas de la fuente escogida como primera opción. Por ejemplo, si especificamos una fuente `font-size: 16px; font-size-adjust: 0.5`, realmente estamos especificando que las letras minúsculas de la fuente deben tener `8px` de alto (16px multiplicado por 0.5).

{{cssinfo}}

## Sintaxis

`font-size-adjust:` \<número> | `none` | {{ Cssxref("inherit") }}

### Valores

- `none`
  - : Escoge el tamaño de la fuente basándose sólo en función de la propiedad {{ Cssxref("font-size") }}.
- \<número>
  - : Escoge el tamaño de la fuente de manera tal que su letra minúscula (determinada por la altura-x de la fuente) sea el*número* de veces el tamaño de {{ Cssxref("font-size") }}.

    El número especificado es generalmente la relación de aspecto de la fuente de primera elección en la propiedad {{ Cssxref("font-family") }}. Esto significa que la primera fuente, si está disponible, aparecerá con el mismo tamaño en los navegadores, soporten estos o no la propiedad {{ Cssxref("font-size-adjust") }}.

## Ejemplos

[Ver El Ejemplo Vivo](https://mdn.dev/archives/media/samples/cssref/font-size-adjust.html)

```
p{
  font: 12px Verdana, sans-serif;
  font-size-adjust: 0.58;
}
```

## Especificaciones

- [CSS 2](https://www.w3.org/TR/1998/REC-CSS2-19980512/fonts.html#propdef-font-size-adjust)
- [css3-fonts](https://www.w3.org/TR/css3-fonts/#font-size-adjust)

## Compatibilidades

Soportado en todas las plataformas a partir de Gecko 1.9 / Firefox 3, pero soportado sólo en Windows bastante antes.
