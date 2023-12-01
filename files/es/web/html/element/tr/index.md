---
title: "<tr>: El elemento Fila de la tabla"
slug: Web/HTML/Element/tr
---

## Resumen

El elemento HTML _fila de tabla_ (_table row_) `<tr>` define una fila de celdas en una tabla. Estas pueden ser una mezcla de elementos {{HTMLElement("td")}} y {{HTMLElement("th")}}.

## Contexto de uso

| [Content categories](/es/docs/HTML/Content_categories) | Ninguno                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contenido permitido                                    | Cero o más {{HTMLElement("td")}} o elementos {{HTMLElement("th")}}, o una mezcla de ellos                                                                                                                                                                                                                                          |
| Omisión de Etiqueta                                    | La etiqueta de inicio es obligatoria. La etiqueta final puede ser omitida si el elemento {{HTMLElement("tr")}} va inmediatamente seguido por un elemento {{HTMLElement("tr")}}, o si el grupo de tabla pariente ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}} o el elemento {{HTMLElement("tfoot")}}) no tiene mas contenido |
| Elementos padres permitidos                            | {{HTMLElement("table")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} o el elemento {{HTMLElement("tfoot")}}                                                                                                                                                                                                                |
| Documento de normativa                                 | [HTML, "The `tr` element"](http://www.whatwg.org/html/#the-tr-element)                                                                                                                                                                                                                                                             |

## Atributos

Este elemento incluye los [global attributes](/es/docs/HTML/Global_attributes).

- `align` {{deprecated_inline}}

  - : Este atributo enumerado especifica como será gestionado el alineamiento horizontal del contenido de cada celda. Hay varios valores:

    - `left`, alinea el contenidoa la izquierda de las celdas
    - `center`, centra el contenido en las celdas
    - `right`, alinea el contenido a la derecha de las celdas
    - `justify`, amplia los espacios en el contenido textual de hecho el contenido es justificado in las celdas
    - `char`, alinea el contenido textual en un carácter especial con una mínima inclinación definida por el [`char`](/es/docs/Web/HTML/Element/tr#char) y [`charoff`](/es/docs/Web/HTML/Element/tr#charoff) atributos {{unimplemented_inline("2212")}}

    Si este atributo no está establecido, se hereda el valor del nodo principal.

    > **Nota:** **No utilice este atributo, ya que es obsoleta (no soportado) en el último estándar**.
    >
    > - Para lograr el mismo efecto que los valores `left`, `center`, `right` o `justify`, utilice la propiedad CSS {{cssxref("text-align")}}.
    > - Para lograr el mismo efecto que el valor char, en CSS3, puede utilizar el valor de la [`char`](/es/docs/Web/HTML/Element/tr#char) como el valor de la {{cssxref("text-align")}} propiedad {{unimplemented_inline}}.

- `bgcolor` {{deprecated_inline}}

  - : Este atributo define el color de fondo de cada celda de la fila. Puede ser un código de #RRGGBB o una palabra clave de color de SVG.
    > **Nota:** el elemento {{HTMLElement("tr")}} debe ser de estilo con CSS. Para dar un efecto similar al atributo bgcolor, utilice la propiedad CSS {{cssxref("background-color")}}.

- `char` {{deprecated_inline}}

  - : Este atributo es utilizado para establecer el caracter para alinear las celdas de una columna. Los valores típicos para éste incluyen un punto (.) al intentar alinear los números o valores monetarios. Si [`align`](/es/docs/Web/HTML/Element/tr#align) no se ha ajustado a char, este atributo se ignora.
    > **Nota:** No utilice este atributo, ya que es obsoleta (y no es compatible) en el último estándar. Para lograr el mismo efecto que el [`char`](/es/docs/Web/HTML/Element/tr#char), en CSS3, puedes utilizar el juego de carácteres utilizando el atributo [`char`](/es/docs/Web/HTML/Element/tr#char) como el valor de la referencia externa {{cssxref("text-align")}} propiedad {{unimplemented_inline}}.

- `charoff` {{deprecated_inline}}

  - : Este atributo se utiliza para indicar el número de caracteres para compensar los datos de la columna de los carácteres de alineación especificado por el atributo char.
    > **Nota:** No utilice este atributo, ya que está obsoleto (y no es compatible) en el último estándar.

- `valign` {{deprecated_inline}}
  - : Este atributo especifica la alineación vertical del texto dentro de cada fila de las celdas de la cabecera de la tabla. Los valores posibles para este atributo son:
    - `baseline`, que pondrá el texto tan cerca del fondo de la celda, ya que es posible, pero corresponda con el [baseline](http://en.wikipedia.org/wiki/Baseline_%28typography%29) de los caráctere en lugar de la parte inferior de ellos. Si los carácteres son todos del tamaño, esto tiene el mismo efecto que la parte inferior.
    - `bottom`,que pondrá el texto tan cerca de la parte inferior de la célula como sae posible;
    - `middle`,que centrará el texto en la celda;
    - y `top`, que pondrá el texto como cerca de la parte superior de la célula como es posible.
      > **Nota:** No utilice este atributo, ya que está obsoleto (y no es compatible) en el último estándar: {{cssxref("vertical-align")}} en su lugar establecer la propiedad CSS en él.

## Interfaz DOM

Este elemento implementa el interfaz{{domxref("HTMLTableRowElement")}}.

## Ejemplos

Ver {{HTMLElement("table")}} para ejemplos de `<tr>`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Otros elementos relacionados con tablas HTML: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}};
- Las propiedades CSS y pseudo-clases que pueden ser especialmente útiles para el estilo del elemento \<tr>:

  - El {{cssxref(":nth-child")}} pseudo-clase para establecer la alineación en las células de la columna;
  - El {{cssxref("text-align")}} propiedad para alinear todas las células contenidos en el mismo carácter, como '.'. <

{{HTMLSidebar}}
