---
title: Valor calculado
slug: Web/CSS/computed_value
---

{{ CSSRef() }}

### Sumario

El valor **computed value** de una propiedad CSS es computado a partir de [specified value](/es/CSS/specified_value) de la siguiente forma:

- Mediante los valores especiales [`inherit`](/es/CSS/inherit) y [`initial`](/es/CSS/initial), y
- Realizando el cómputo necesario para alcanzar el valor descrito en la línea de "Computed value" del sumario de la propiedad.

El cálculo necesario para el "Computed value" de una propiedad, normalmente implica convertir valores relativos (como los expresados en unidades 'em' o en porcentajes) a valores absolutos.

Por ejemplo: si un elemento tiene un valor especificado de `font-size: 16px` y `padding-top: 2em`, el valor computado de `padding-top` es `32px` (el doble del tamaño de la fuente).

Sin embargo, para algunas propiedades (aquellas con porcentajes relativos a algo que necesita un formato para ser determinados, tales como [width](/es/CSS/width), [margin-right](/es/CSS/margin-right), [text-indent](/es/CSS/text-indent), y [top](/es/CSS/top)) los valores especificados en porcentajes se tornan valores computados. Ademas,los números especificados sin unidades en la propiedad [line-height](/es/CSS/line-height) se convierten en valores computados, según se especifica. Estos valores relativos que quedan tras realizar el cómputo, se hacen absolutos cuando se determina el [used value](/es/CSS/used_value).

El uso principal de [computed value](/es/CSS/computed_value) (ademas de ser un paso de transición entre [specified value](/es/CSS/specified_value) y [used value](/es/CSS/used_value)) es [inheritance](/es/CSS/inherited_and_non-inherited_properties), incluyendo la palabra clave [inherit](/es/CSS/inherit).

### Notas

La API DOM [getComputedStyle](/es/DOM/window.getComputedStyle) devuelve [used value](/es/CSS/used_value), en lugar de [computed value](/es/CSS/computed_value).

### Ver también

[specified value](/es/CSS/specified_value), [used value](/es/CSS/used_value), [actual value](/es/CSS/actual_value)
