---
title: Valor calculado
slug: conflicting/Web/CSS/CSS_cascade/Value_processing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d
original_slug: Web/CSS/CSS_cascade/computed_value
---

{{ CSSRef() }}

### Sumario

El valor **computed value** de una propiedad CSS es computado a partir de [specified value](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_8a702f25e61d14d8bd6ee6f7e88ca236512427b92b01a92c1d11f9edbb8f5fe1) de la siguiente forma:

- Mediante los valores especiales [`inherit`](/es/docs/Web/CSS/inherit) y [`initial`](/es/docs/Web/CSS/initial), y
- Realizando el cómputo necesario para alcanzar el valor descrito en la línea de "Computed value" del sumario de la propiedad.

El cálculo necesario para el "Computed value" de una propiedad, normalmente implica convertir valores relativos (como los expresados en unidades 'em' o en porcentajes) a valores absolutos.

Por ejemplo: si un elemento tiene un valor especificado de `font-size: 16px` y `padding-top: 2em`, el valor computado de `padding-top` es `32px` (el doble del tamaño de la fuente).

Sin embargo, para algunas propiedades (aquellas con porcentajes relativos a algo que necesita un formato para ser determinados, tales como [width](/es/docs/Web/CSS/width), [margin-right](/es/docs/Web/CSS/margin-right), [text-indent](/es/docs/Web/CSS/text-indent), y [top](/es/docs/Web/CSS/top)) los valores especificados en porcentajes se tornan valores computados. Ademas,los números especificados sin unidades en la propiedad [line-height](/es/docs/Web/CSS/line-height) se convierten en valores computados, según se especifica. Estos valores relativos que quedan tras realizar el cómputo, se hacen absolutos cuando se determina el [used value](/es/docs/Web/CSS/used_value).

El uso principal de [computed value](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d) (ademas de ser un paso de transición entre [specified value](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_8a702f25e61d14d8bd6ee6f7e88ca236512427b92b01a92c1d11f9edbb8f5fe1) y [used value](/es/docs/Web/CSS/used_value)) es [inheritance](/es/docs/Web/CSS/CSS_cascade/Inheritance), incluyendo la palabra clave [inherit](/es/docs/Web/CSS/inherit).

### Notas

La API DOM [getComputedStyle](/es/docs/Web/API/Window/getComputedStyle) devuelve [used value](/es/docs/Web/CSS/used_value), en lugar de [computed value](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d).

### Ver también

[specified value](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_8a702f25e61d14d8bd6ee6f7e88ca236512427b92b01a92c1d11f9edbb8f5fe1), [used value](/es/docs/Web/CSS/used_value), [actual value](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing)
