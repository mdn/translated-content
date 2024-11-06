---
title: border-style
slug: Web/CSS/border-style
---

{{CSSRef}}

La propiedad **`border-style`** [CSS](/en/CSS) es una [shorthand property](/es/docs/Web/CSS/Shorthand_properties) (Propiedad abreviada) que establece el estilo de línea para los cuatro lados del borde de un elemento.

{{EmbedInteractiveExample("pages/css/border-style.html")}}

## Syntax

```css
/* Keyword values */
border-top-style: none;
border-top-style: hidden;
border-top-style: dotted;
border-top-style: dashed;
border-top-style: solid;
border-top-style: double;
border-top-style: groove;
border-top-style: ridge;
border-top-style: inset;
border-top-style: outset;

/* vertical | horizontal */
border-style: dotted solid;

/* top | horizontal | bottom */
border-style: hidden double dashed;

/* top | right | bottom | left */
border-style: none solid dotted dashed;

/* Global values */
border-style: inherit;
border-style: initial;
border-style: unset;
```

La propiedad `border-style` se puede especificar usando uno, dos, tres o cuatro valores.

- Cuando se especifica **un** valor, se aplica el mismo estilo a los **cuatro lados**.
- Cuando se especifican **dos** valores, el primer estilo se aplica a la parte **superior e inferior**, el segundo a la **izquierda y a la derecha**
- Cuando se especifican **tres** valores, el primer estilo se aplica a la **parte superior**, el segundo a la **izquierda y derecha**, el tercero a la **parte inferior**.
- Cuando se especifican **cuatro** valores, los estilos se aplican a la parte **superior**, **derecha**, **inferior** e **izquierda** en ese orden (en el sentido de las agujas del reloj).

Cada valor es una palabra clave elegida de la siguiente lista.

### Values

- `<br-style>`

  - : Describe el estilo del borde. Puede tener los siguientes valores:

    | `none`   |     | Like the `hidden` keyword, displays no border. Unless a {{cssxref("background-image")}} is set, the calculated value of {{ cssxref("border-top-width") }} will be `0`, even if the specified value is something else. In the case of table cell and border collapsing, the `none` value has the _lowest_ priority: if any other conflicting border is set, it will be displayed.   |
    | -------- | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `hidden` |     | Like the `none` keyword, displays no border. Unless a {{cssxref("background-image")}} is set, the calculated value of {{ cssxref("border-top-width") }} will be `0`, even if the specified value is something else. In the case of table cell and border collapsing, the `hidden` value has the _highest_ priority: if any other conflicting border is set, it won't be displayed. |
    | `dotted` |     | Displays a series of rounded dots. The spacing of the dots is not defined by the specification and is implementation-specific. The radius of the dots is half the calculated {{ cssxref("border-top-width") }}.                                                                                                                                                                    |
    | `dashed` |     | Displays a series of short square-ended dashes or line segments. The exact size and length of the segments are not defined by the specification and are implementation-specific.                                                                                                                                                                                                   |
    | `solid`  |     | Displays a single, straight, solid line.                                                                                                                                                                                                                                                                                                                                           |
    | `double` |     | Displays two straight lines that add up to the pixel size defined by {{ cssxref("border-width") }} or {{ cssxref("border-top-width") }}.                                                                                                                                                                                                                                           |
    | `groove` |     | Displays a border with a carved appearance. It is the opposite of `ridge`.                                                                                                                                                                                                                                                                                                         |
    | `ridge`  |     | Displays a border with an extruded appearance. It is the opposite of `groove`.                                                                                                                                                                                                                                                                                                     |
    | `inset`  |     | Displays a border that makes the element appear embedded. It is the opposite of `outset`. When applied to a table cell with {{ cssxref("border-collapse") }} set to `collapsed`, this value behaves like `groove`.                                                                                                                                                                 |
    | `outset` |     | Displays a border that makes the element appear embossed. It is the opposite of `inset`. When applied to a table cell with {{ cssxref("border-collapse") }} set to `collapsed`, this value behaves like `ridge`.                                                                                                                                                                   |

### Formal syntax

{{csssyntax}}

## Ejemplos

### Tabla con todos los valores de propiedad

A continuación, se muestra un ejemplo de todos los valores de propiedad.

#### HTML

```html
<table>
  <tr>
    <td class="b1">none</td>
    <td class="b2">hidden</td>
    <td class="b3">dotted</td>
    <td class="b4">dashed</td>
  </tr>
  <tr>
    <td class="b5">solid</td>
    <td class="b6">double</td>
    <td class="b7">groove</td>
    <td class="b8">ridge</td>
  </tr>
  <tr>
    <td class="b9">inset</td>
    <td class="b10">outset</td>
  </tr>
</table>
```

#### CSS

```css
/* Define look of the table */
table {
  border-width: 3px;
  background-color: #52e396;
}
tr,
td {
  padding: 2px;
}

/* border-style example classes */
.b1 {
  border-style: none;
}
.b2 {
  border-style: hidden;
}
.b3 {
  border-style: dotted;
}
.b4 {
  border-style: dashed;
}
.b5 {
  border-style: solid;
}
.b6 {
  border-style: double;
}
.b7 {
  border-style: groove;
}
.b8 {
  border-style: ridge;
}
.b9 {
  border-style: inset;
}
.b10 {
  border-style: outset;
}
```

#### Output

{{ EmbedLiveSample('Table_with_all_property_values', 300, 200) }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- The border-related shorthand CSS properties: {{ Cssxref("border") }}, {{ Cssxref("border-width") }}, {{ Cssxref("border-color") }}, {{ Cssxref("border-radius") }}
