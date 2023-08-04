---
title: tabla
slug: Web/HTML/Element/table
---

## Resumen

El _Elemento de Tabla HTML_ (`<table>`) representa datos en dos o mas dimensiones.

> **Nota:** Antes de la creación de [CSS](/es/docs/CSS), los elementos HTML {{HTMLElement("table")}} eran frecuentemente utilizados para la disposición (posicionamiento) de una página. Este uso ha sido desalentado desde HTML 4, y el elemento no debe ser usado para dichos fines.

## Contexto de uso

<table class="standard-table">
    <tbody>
      <tr>
        <td><a href="/es/docs/HTML/Content_categories" title="HTML/Content categories">Categoria del contenido</a></td>
        <td><a href="/es/docs/HTML/Content_categories#Flow_content" title="HTML/Content categories#Flow content">Flujo del contenido</a></td>
      </tr>
      <tr>
        <td>Contenido permitido</td>
        <td>
          <div class="">
            <div id="table-mdls">
              En este orden:
              <ul>
                <li>un elemento opcional {{HTMLElement("caption")}},</li>
                <li>cero o mas elementos {{HTMLElement("colgroup")}},</li>
                <li>un elemento opcional {{HTMLElement("thead")}},</li>
                <li>una de las dos alternativas:
                  <ul>
                    <li>un elemento {{HTMLElement("tfoot")}}, seguido por:
                      <ul>
                        <li>cero o mas elementos {{HTMLElement("tbody")}},</li>
                        <li>o uno o mas elementos {{HTMLElement("tr")}},</li>
                      </ul>
                    </li>
                    <li>una segunda alternativa seguida por un elemento opcional {{HTMLElement("tfoot")}}:
                      <ul>
                        <li>cualquier cero o mas elementos {{HTMLElement("tbody")}},</li>
                        <li>uno o mas elementos {{HTMLElement("tr")}}</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>Omisión de etiqueta</td>
        <td>Ninguna, ambas la etiqueta de inicio y de fin son obligatorias</td>
      </tr>
      <tr>
        <td>Elementos padre permitidos</td>
        <td>cualquier elemento que acepte elementos de flujo</td>
      </tr>
      <tr>
        <td>Documento normativo</td>
        <td><a class="external" href="http://www.whatwg.org/specs/web-apps/current-work/multipage/tabular-data.html#the-table-element" rel="external nofollow">HTML5, section 4.9.1</a> (<a class="external" href="http://www.w3.org/TR/REC-html40/struct/tables.html#edef-TABLE">HTML4.01, section 11.2.1</a>)</td>
      </tr>
    </tbody>
  </table>

### Atributos

Al igual que otros elementos HTML, este elemento también soporta [atributos globales](/es/docs/HTML/Global_attributes).

- `align` {{Deprecated_inline}}

  - : Este atributo enumerativo indica como va a encontrarse alineada la tabla respecto al contenido del documento en cuestión, pudiendo tener los siguientes valores:

    - left,significa que la tabla será mostrada a la izquierda del documento;
    - center, significa que la tabla será mostrada al centro del documento;
    - right, significa que la tabla será mostrada a la derecha del documento.

    > **Nota:**
    >
    > - **No usar este atributo**, ya que ha sido declarado obsoleto: el elemento {{HTMLElement("table")}} debe ser estilizado usando [CSS](/es/docs/CSS). A fin de dar un efecto similar al atributo align, las propiedades {{cssxref("text-align")}} y {{cssxref("vertical-align")}} deben ser usadas.
    > - Antes de la version 4 de Firefox, este ya soportaba sólo en el modo quirks (compatibilidad con navegadores antiguos) los valores `middle`, `absmiddle`, and `abscenter` como sinónimos de `center`_._

<!---->

- `bgcolor` {{Deprecated_inline}}

  - : Este atributo define el color de fondo de la tabla . Es un código hexadecimal como el dado en el formato [sRGB](http://www.w3.org/Graphics/Color/sRGB) (bajo el prefijo '#'). Uno de los 16 colores predefinidos podía ser usado:

    |     | black (negro) = "#000000"    |     | green (verde) = "#008000"          |
    | --- | ---------------------------- | --- | ---------------------------------- |
    |     | silver (plata) = "#C0C0C0"   |     | lime (lima) = "#00FF00"            |
    |     | gray (gris) = "#808080"      |     | olive (oliva) = "#808000"          |
    |     | white (blanco) = "#FFFFFF"   |     | yellow (amarillo) = "#FFFF00"      |
    |     | maroon (marrón) = "#800000"  |     | navy (azul marino) = "#000080"     |
    |     | red (rojo) = "#FF0000"       |     | blue (azul) = "#0000FF"            |
    |     | purple (púrpura) = "#800080" |     | teal (verde esmeralda) = "#008080" |
    |     | fuchsia (fucsia) = "#FF00FF" |     | aqua (verde agua) = "#00FFFF"      |

    > **Nota:** No usar este atributo, dado que ha sido declarado obsoleto. El elemento {{HTMLElement("table")}} debe ser estilizado utilizando [CSS](/es/docs/CSS). A fin de dar un efecto similar al atributo bgcolor, la propiedad [CSS](/es/docs/CSS) {{cssxref("background-color")}} debe ser usada.

<!---->

- `border` {{Deprecated_inline}}

  - : Este atributo entero define el tamaño del cuadro alrededor de la tabla . Si estuviese puesta en 0, implicaría que dicho atributo sería nulo.

    > **Nota:** No usar este atributo en CSS dado que es obsoleto: el elemento {{HTMLElement("table")}} debe ser estilizado usando [CSS](/es/docs/CSS). A fin de dar un efecto similar al atributo, las propiedades CSS nativas {{cssxref("border")}}, {{cssxref("border-color")}}, {{cssxref("border-width")}} y {{cssxref("border-style")}} deben ser usadas.

<!---->

- `cellpadding` {{Deprecated_inline}}

  - : Este atributo define el espacio entre el contenido de una celda y su borde (mostrado o no), si fuese la longitud de un pixel, dicho espacio será aplicado en los 4 costados, caso que fuese un porcentaje, el contenido será centrado y todo el espacio vertical representará a este porcentaje. Lo mismo será válido para todo el espacio horizontal

    > **Nota:** No usar este atributo en CSS dado que es obsoleto: el elemento {{HTMLElement("table")}} debe ser estilizado usando [CSS](/es/docs/CSS). Para dar un efecto similar al atributo border, use la propiedad CSS {{cssxref("border-collapse")}} con el valor collapse en el mismo elemento {{HTMLElement("table")}}, y la propiedad {{cssxref("padding")}} en el elemento {{HTMLElement("td")}}.

<!---->

- `cellspacing` {{Deprecated_inline}}

  - : Este atributo define el espacio entre el contenido de una celda y su borde (mostrado o no), si fuese la longitud de un pixel, dicho espacio será aplicado en los 4 costados, caso que fuese un porcentaje, el contenido será centrado y todo el espacio vertical representará a este porcentaje. Lo mismo será válido para todo el espacio horizontal.

    > **Nota:** No usar este atributo en CSS dado que es obsoleto: el elemento {{HTMLElement("table")}} debe ser estilizado usando [CSS](/es/docs/CSS). Para dar un efecto similar al atributo border, use la propiedad {{cssxref("border-collapse")}} con el valor collapse en el mismo elemento {{HTMLElement("table")}}, y la propiedad {{cssxref("margin")}} en el elemento {{HTMLElement("td")}}.

<!---->

- `frame` {{Deprecated_inline}}

  - : Este atributo enumerativo define cual lado del cuadro alrededor de la tabla será mostrada. Puede tener los siguientes valores:

    |     | above  |     | below  |
    | --- | ------ | --- | ------ |
    |     | hsides |     | vsides |
    |     | lhs    |     | rhs    |
    |     | border |     | box    |
    |     | void   |     |        |

    > **Nota:** No usar este atributo en CSS dado que es obsoleto: el elemento {{HTMLElement("table")}} debe ser estilizado usando [CSS](/es/docs/CSS). Para dar un efecto similar al atributo frame use las propiedades CSS {{cssxref("border-style")}} y {{cssxref("border-width")}}.

<!---->

- `rules` {{Deprecated_inline}}

  - : Este atributo enumerativo define donde aparecen las reglas en la tabla, por ejemplo líneas. Puede tener los siguientes valores:

    - none, indica que ninguna regla se mostrará, es el valor por defecto;
    - groups, mostrará el número de reglas a mostrarse entre grupos de filas (defined by the {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} y {{HTMLElement("tfoot")}} elements) y entre grupos de columnas (defined by the {{HTMLElement("col")}} y {{HTMLElement("colgroup")}} elements) solamente;
    - rows, que mostrará las reglas entre filas;
    - columns, que mostrará las reglas entre columnas;
    - all, que mostrará las reglas entre filas y columnas.

    > **Nota:**
    >
    > - El estilo de las reglas depende del navegador usado y no puede ser modificado.
    > - Nota de uso: No usar este atributo en CSS dado que es obsoleto: el elemento {{HTMLElement("table")}} debe ser estilizado usando [CSS](/es/docs/CSS). Use la propiedad {{cssxref("border")}} en los elementos adecuados {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("col")}} o {{HTMLElement("colgroup")}}.

<!---->

- `summary` {{Deprecated_inline}}

  - : Este atributo define un texto alternativo para describir una tabla en un usuario incapaz de mostrarlo, corrientemente contiene una descripcion de él que posibilita a discapacitaos visulaes (como invidentes navegando en pantallas braile) a obtener la información que necesitan.Si la información añadida en este atributo puede ser útil a otras personas, considere el utilizar el elemento {{HTMLElement("caption")}} en vez de este. instead. El atributo de resumen no es obligatorio usuarlo, pudiendo ser omitido si un elemento {{HTMLElement("caption")}} realiza similar labor.

    > **Nota:** No use este atributo, dado que ha sido declarado obsoleto. En su lugar, use alguna de estas formas de describir una tabla:
    >
    > - En prosa, rodeando la tabla (esta es la forma menos semántica de lograrlo).
    > - En el elemento {{HTMLElement("caption")}} de la tabla.
    > - En un elemento {{HTMLElement("details")}}, dentro del elemento {{HTMLElement("caption")}} de la tabla.
    > - Incluye el elemento {{HTMLElement("table")}} en un elemento {{HTMLElement("figure")}} y añada la descripción en prosa al lado de él.
    > - Incluya el elemento {{HTMLElement("table")}} en un elemento {{HTMLElement("figure")}} y añada la descripción en prosa dentro de un elemento {{HTMLElement("figcaption")}}.
    > - Ajuste la tabla de manera que la descripción no sea necesaria, usando los elementos {{HTMLElement("th")}} y {{HTMLElement("thead")}} por ejemplo.

<!---->

- `width` {{Deprecated_inline}}

  - : Este atributo define el ancho de una tabla, pudiendo contener una longitud de píxeles o un porcentaje, que representa un porcentaje de anchura del contenedor que la tabla debiera usar.

    > **Nota:** No usar este atributo en CSS dado que es obsoleto: el elemento {{HTMLElement("table")}} debe ser estilizado usando [CSS](/es/docs/CSS). Para dar un efecto similar al atributo frame use la propiedad CSS {{cssxref("width")}} en su lugar.

### Interfaz DOM

Este elemento implementa la interfaz [`HTMLTableElement`](/es/docs/DOM/HTMLTableElement).

### Ejemplos

```html
<!-- Simple table -->
<table>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>

<!-- Simple table with header -->
<table>
  <tr>
    <th>First name</th>
    <th>Last name</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>

<!-- Table with thead, tfoot, and tbody -->
<table>
  <thead>
    <tr>
      <th>Header content 1</th>
      <th>Header content 2</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>Footer content 1</td>
      <td>Footer content 2</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Body content 1</td>
      <td>Body content 2</td>
    </tr>
  </tbody>
</table>

<!-- Table with colgroup -->
<table>
  <colgroup span="4" class="columns"></colgroup>
  <tr>
    <th>Countries</th>
    <th>Capitals</th>
    <th>Population</th>
    <th>Language</th>
  </tr>
  <tr>
    <td>USA</td>
    <td>Washington D.C.</td>
    <td>309 million</td>
    <td>English</td>
  </tr>
  <tr>
    <td>Sweden</td>
    <td>Stockholm</td>
    <td>9 million</td>
    <td>Swedish</td>
  </tr>
</table>

<!-- Table with colgroup and col -->
<table>
  <colgroup>
    <col class="column1" />
    <col class="columns2plus3" span="2" />
  </colgroup>
  <tr>
    <th>Lime</th>
    <th>Lemon</th>
    <th>Orange</th>
  </tr>
  <tr>
    <td>Green</td>
    <td>Yellow</td>
    <td>Orange</td>
  </tr>
</table>

<!-- Simple table with caption -->
<table>
  <caption>
    Awesome caption
  </caption>
  <tr>
    <td>Awesome data</td>
  </tr>
</table>
```

```css hidden
* {
  border-collapse: collapse;
}
table {
  width: 100%;
  margin-top: 1rem;
}
td,
th {
  border: 1px solid black;
}
```

{{EmbedLiveSample("",500,500)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
