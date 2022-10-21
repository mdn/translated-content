---
title: padding-top
slug: Web/CSS/padding-top
translation_of: Web/CSS/padding-top
---
{{CSSRef}}

## Sumario

La propiedad **`padding-top`** [CSS](/en/CSS "CSS") establece el espacio de relleno requerido en la parte superior del elemento. El [área de padding](/en/CSS/box_model#padding) es el espacio entre el contenido del elemento y su borde. Contrariamente de la propiedad **`margin-top`**, valores negativos no son válidos.

{{cssinfo}}

## Sintaxis

```css
/* <length> values (valores fijos) */
padding-top: 0.5em;
padding-top: 0;
padding-top: 2cm;

/* <percentage> value (valores porcentuales) */
padding-top: 10%;

/* Global values (valores globales) */
padding-top: inherit;
padding-top: initial;
padding-top: unset;
```

### Valores

- `<length>`
  - : Especifica un valor positivo fijo. Veáse {{cssxref("&lt;length&gt;")}} para más detalles.
- `<percentage>`
  - : Especifica un porcentaje con respecto al bloque que lo contiene.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

```css
.content { padding-top: 5%; }
.sidebox { padding-top: 10px; }
```

## Especificaciones

| Especificación                                                                               | Estado                                   | Comentarios                                                                                                  |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| {{ SpecName('CSS3 Box', '#the-padding', 'padding-top') }}                 | {{ Spec2('CSS3 Box') }}         | No change from {{ SpecName('CSS2.1', 'box.html#padding-properties', 'padding-top') }}. |
| {{ SpecName('CSS3 Transitions', '#animatable-css', 'padding-top') }} | {{ Spec2('CSS3 Transitions') }} | Defines `padding-top` as animatable.                                                                         |
| {{ SpecName('CSS2.1', 'box.html#padding-properties', 'padding-top') }} | {{ Spec2('CSS2.1') }}             | No change from {{ Specname('CSS1', '#padding-top', 'padding-top') }}.                     |
| {{ Specname('CSS1', '#padding-top', 'padding-top') }}                     | {{ Spec2('CSS1') }}                 | Initial definition                                                                                           |

## Compatibilidad en navegadores

{{Compat("css.properties.padding-top")}}
