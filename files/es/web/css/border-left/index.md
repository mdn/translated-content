---
title: border-left
slug: Web/CSS/border-left
translation_of: Web/CSS/border-left
---
{{CSSRef}}

## Resumen

El `borde_izquierdo` es una propiedad rápida para poner el ancho, estilo y color del borde izquierdo de un elemento. Esta propiedad puede ser usada para poner los valores de uno o mas de : {{ Cssxref("border-left-width") }}, {{ Cssxref("border-left-style") }}, {{ Cssxref("border-left-color") }}. Valores omitidos son puestos a su valor inicial.

{{cssinfo}}

## Sintaxis

    border-left: [border-width || border-style || border-color | inherit] ;

### Valores

- border-width
  - : See {{ Cssxref("border-width") }}.
- border-style
  - : See {{ Cssxref("border-style") }}.
- border-color
  - : See {{ Cssxref("border-color") }}.

## Ejemplos

element {

        border-left: 1px solid #000;

}

## Notas

Si las reglas no especifican un color de borde, el borde tendrá la propiedad {{ Cssxref("color") }}

## Specifications

| Specification                                                                                    | Status                                   | Comment                                                                                                                   |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| {{ SpecName('CSS3 Backgrounds', '#border-left', 'border-left') }}         | {{ Spec2('CSS3 Backgrounds') }} | No direct changes, though the modification of values for the {{ cssxref("border-left-color") }} do apply to it. |
| {{ SpecName('CSS2.1', 'box.html#propdef-border-left', 'border-left') }} | {{ Spec2('CSS2.1') }}             | No significant changes                                                                                                    |
| {{ SpecName('CSS1', '#border-left', 'border-left') }}                         | {{ Spec2('CSS1') }}                 | Initial definition                                                                                                        |

## Browser compatibility

{{Compat("css.properties.border-left")}}
