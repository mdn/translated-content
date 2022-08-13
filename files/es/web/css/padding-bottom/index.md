---
title: padding-bottom
slug: Web/CSS/padding-bottom
translation_of: Web/CSS/padding-bottom
---
{{CSSRef}}

## Sumario

La propiedad **`padding-bottom`** [CSS](https://developer.mozilla.org/en/CSS "CSS") establece el espacio de relleno requerido en la parte inferior del elemento. El [área de padding](https://developer.mozilla.org/en/CSS/box_model#padding) es el espacio entre el contenido del elemento y su borde. Contrariamente de la propiedad **`margin-bottom`**, valores negativos no son válidos.

{{cssinfo}}

## Sintaxis

```css
/* <length> values (Valores fijos)*/
padding-bottom: 0.5em;
padding-bottom: 0;
padding-bottom: 2cm;

/* <percentage> value (Valores porcentuales)*/
padding-bottom: 10%;

/* Global values (Valores globales)*/
padding-bottom: inherit;
padding-bottom: initial;
padding-bottom: unset;
```

### Valores

- \<length>
  - : Especifica un valor positivo fijo. Veáse {{cssxref("&lt;length&gt;")}} para más detalles.
- \<percentage>
  - : Especifica un porcentaje con respecto al bloque que lo contiene.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

    .content { padding-bottom: 5%; }
    .sidebox { padding-bottom: 10px; }

## Especificaciones

| Especificación                                                                                   | Estado                                   | Comentarios                                                                                                      |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| {{ SpecName('CSS3 Box', '#the-padding', 'padding-bottom') }}                 | {{ Spec2('CSS3 Box') }}         | No change from {{ SpecName('CSS2.1', 'box.html#padding-properties', 'padding-bottom') }}. |
| {{ SpecName('CSS3 Transitions', '#animatable-css', 'padding-bottom') }} | {{ Spec2('CSS3 Transitions') }} | Defines `padding-bottom` as animatable.                                                                          |
| {{ SpecName('CSS2.1', 'box.html#padding-properties', 'padding-bottom') }} | {{ Spec2('CSS2.1') }}             | No change from {{ Specname('CSS1', '#padding-bottom', 'padding-bottom') }}.                 |
| {{ Specname('CSS1', '#padding-bottom', 'padding-bottom') }}                 | {{ Spec2('CSS1') }}                 | Initial definition                                                                                               |

## Compatibilidad en navegadores

{{Compat("css.properties.padding-bottom")}}
