---
title: <td>
slug: Web/HTML/Element/td
---

{{HTMLSidebar}}

## Resumen

El elemento [HTML](/es/docs/Web/HTML) _Celda de tabla_ (**`<td>`**) define la celda de una tabla que contiene datos. Esta participa en el _modelo de tablas_.

## Contexto de uso

| [Categorías de contenido](/es/docs/Web/Guide/HTML/categorias_de_contenido) | Ninguna.                                                                                                                                                                                                               |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contenido permitido                                                        | Contenido dinámico.                                                                                                                                                                                                    |
| Omision de Etiquetas                                                       | La etiqueta de inicio es obligatoria. La etiqueta final puede ser omitida, si esta inmediatamente seguida por un elemento {{HTMLElement("th")}} o un {{HTMLElement("td")}} o si no hay más datos en el elemento padre. |
| Elementos padre permitidos                                                 | Un elemento {{HTMLElement("tr")}}.                                                                                                                                                                                     |
| Documento normativo                                                        | [HTML5, section 4.9.9](http://www.whatwg.org/specs/web-apps/current-work/multipage/tabular-data.html#the-td-element) ([HTML4.01, section 11.2.6](http://www.w3.org/TR/REC-html40/struct/tables.html#h-11.2.6))         |

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Atributos_Globales).

- `abbr` {{deprecated_inline}}

  - : Este atributo contiene un pequeña descripción abreviada del contenido de la celda. Algunos agentes de usuario, como los lectores de voz, pueden presentar esta descripción antes que el propio contenido.

    > **Nota:** No usar este atributo ya que esta obsoleto en la ultima version del estandar. Como alternativa, puedes poner una descripción abreviada dentro de la celda y colocar el contenido largo en el atributo **title**.

- `align` {{deprecated_inline}}

  - : Este atributo especifíca la posición horizontal del contenido de la celda, los valores de la misma pueden ser:

    - Izquierda, alínea el contenido de la celda a la izquierda
    - Centro, centra el contenido de una celda
    - Derecha, alínea el contenido de la celda a la derecha
    - Justificado, inserta espacios en el texto para que el contenido se ajuste a la celda
    - `char`, alinear el contenido a un caracter especial definido por los atributos [`char`](/es/docs/Web/HTML/Element/td#char) y [`charoff`](/es/docs/Web/HTML/Element/td#charoff) {{unimplemented_inline(2212)}}.

    Si este atributo no se define, se selecciona por defecto `left`

    > **Nota:** No usar este atributo ya que esta obsoleto en la ultima version.
    >
    > - Para lograr el mismo efecto de los valores `left`, `center`, `right`, o `justify` , usa la propiedad CSS {{cssxref("text-align")}} en el.
    > - Para lograr el mismo efecto que el valor `char` , en CSS3,puedes usar el valor de la [`char`](/es/docs/Web/HTML/Element/td#char) como el valor de la propiedad {{cssxref("text-align")}} {{unimplemented_inline}}.

- `axis` {{deprecated_inline}}

  - : Este atributo contiene una lista de cadenas separadas por espacios . Cada cadena es el ID de un grupo de celdas a las que esta cabecera se aplica.

    > **Nota:** No usar este atributo ya que esta obsoleto en la ultima version. En su lugar use el atributo [`scope`](/es/docs/Web/HTML/Element/td#scope) .

- `bgcolor` {{Non-standard_inline}}

  - : Este atributo define el color de fondo de cada celda de la columna. Es uno de los códigos de 6 dígitos hexadecimales como se definen en sRGB , prefijado por un '# ' . Una de las cadenas de color predefinidos dieciséis se pueden utilizar :

    |     | `Negro` = "#000000"   |     | Verde = "#008000"           |
    | --- | --------------------- | --- | --------------------------- |
    |     | Plata = "#C0C0C0"     |     | `Lima` = "#00FF00"          |
    |     | Gris = "#808080"      |     | Oliva = "#808000"           |
    |     | Blanco = "#FFFFFF"    |     | Amarillo = "#FFFF00"        |
    |     | `Marrón` = "#800000"  |     | Marino = "#000080"          |
    |     | `Rojo` = "#FF0000"    |     | `Azul` = "#0000FF"          |
    |     | `Purpura` = "#800080" |     | `Verde Azulado` = "#008080" |
    |     | `Fucsia` = "#FF00FF"  |     | `agua` = "#00FFFF"          |

    > **Nota:** Nota: No usar este atributo ya que esta obsoleto en la ultima version del estandar y solo implementado en algunas versiones de Microsoft Internet Explorer: El elemento {{HTMLElement("td")}} debe ser estilizado en CSS.
    > Para crear un efecto similar en CSS en su lugar use la propiedad {{cssxref("background-color")}}.

- `char` {{Deprecated_inline}} in HTML4.01 {{deprecated_inline}} in HTML5

  - : Este atributo se utiliza para establecer el carácter para alinear las celdas de una columna . Los valores típicos de esto incluyen un punto (. ) al intentar alinear los números o valores monetarios . Si [`align`](/es/docs/Web/HTML/Element/td#align) no está ajustado a char, este atributo se ignora.

    > **Nota:** No usar este atributo ya que está obsoleto (y no soportado) en las últimas versiones estándares). Para lograr el mismo que el [`char`](/es/docs/Web/HTML/Element/thead#char), en CSS3, puedes usar el character set usando el atributo [`char`](/es/docs/Web/HTML/Element/th#char) como el valor de la propiedad {{cssxref("text-align")}} {{unimplemented_inline}}.

- `charoff` {{Deprecated_inline}} in HTML4.01 {{deprecated_inline}} in HTML5

  - : Este atributo se utiliza para indicar el número de caracteres para compensar los datos de la columna de los personajes de alineación especificado por el atributo de carbón .

    > **Nota:** Nota: No usar este atributo ya que esta obsoleto en la ultima version del estandar,

- `colspan`

  - : Este atributo contiene un valor entero no negativo que indica por el número de columnas se extiende la célula. Su valor por defecto es 1 ; si su valor se establece en 0 , se extiende hasta el final de la {{ HTMLElement ( "colgroup" ) }} , aunque implícitamente definido , que la célula pertenece. Los valores superiores a 1000 serán consideradas como incorrectas y se establecen en el valor predeterminado ( 1 ) .

    > **Nota:** En HTML5 este atributo solo acepta valores mayores que 0 this attribute only accepts values greater than zero since it [must not be used to overlap cells](http://dev.w3.org/html5/spec/single-page.html#attr-tdth-colspan). Además, Firefox is the only browser to support the 0 value as defined in the HTML4.01 specification.

- `headers`
  - : Este atributo contiene una lista de cadenas separadas por espacios , cada uno correspondiente al atributo ID de la {{ HTMLElement ( "th" ) }} elementos que se aplican a este elemento.
- `rowspan`
  - : Este atributo contiene un valor entero no negativo que indica a cuántas filas se extiende la célula. Su valor por defecto es 1 ; si su valor se establece en 0 , se extiende hasta el final de la sección de la tabla ( {{ HTMLElement ( "thead" ) }} , {{ HTMLElement ( "tbody" ) }} , {{ HTMLElement ( "tfoot" ) }} , incluso si define implícitamente , que la célula pertenece. los valores superiores a 65534 se recortan hasta 65534 .
- `scope` {{deprecated_inline}} in HTML5
  - : Empty
- `valign` {{Deprecated_inline}} in HTML4.01, {{deprecated_inline}} in HTML5

  - : Este atributo especifica la alineación vertical del texto dentro de cada fila de células de la cabecera de la tabla . Los valores posibles para este atributo son :

    - `baseline`, pondrá el texto tan cerca del fondo de la celda , ya que es posible, pero alinearlo en la línea de base de los caracteres en lugar de la parte inferior de ellos. Si los caracteres son todos del mismo tamaño , esto tiene el mismo efecto que la parte inferior.
    - `bottom`, pondrá el texto tan cerca del fondo de la celda , ya que es posible
    - `middle`, centra el texto de la celda
    - and `top`, pone el texto como cerca de la parte superior de la celda como es posible .

    > **Nota:** Do not use this attribute as it is obsolete (and not supported) in the latest standard: instead set the CSS {{cssxref("vertical-align")}} property on it.

- `width` {{Deprecated_inline}} in HTML4.01

  - : Este atributo se utiliza para definir una anchura de celda recomendada. Propiedades CELLSPACING y cellpadding pueden añadir espacio adicional, y el elemento {{ HTMLElement ( "col" ) }} anchura pueden también tener algún efecto . En general, si el ancho de una columna es demasiado estrecha para mostrar una célula particular correctamente, y por lo tanto las células en el mismo, se puede ensanchar cuando se muestra .

    > **Nota:** Do not use this attribute in the latest standard: instead set the CSS {{cssxref("width")}} property.

## DOM interfaz

Este elemento implementa el interfaz {{domxref("HTMLTableDataCellElement")}}.

## Ejemplos

Por favor, ver la página {{HTMLElement("table")}} para ejemplos de `<td>`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
