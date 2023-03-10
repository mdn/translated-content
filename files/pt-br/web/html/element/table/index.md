---
title: <table>
slug: Web/HTML/Element/table
---

## Resumo

O elemento HTML _Table_ (`<table>`) representa dados em duas dimensões ou mais.

> **Nota:** Antes da criação do [CSS](/pt-BR/docs/CSS), os elementos HTML eram muitas vezes utilizados para alterar o layout da página. Esta prática tem sido desencorajada desde o HTML 4 e o elemento _Table_ não deve ser utilizado para fins de layout.

## Contexto de uso

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <a
          href="/pt-BR/docs/HTML/Content_categories"
          >Categoria de conteúdo</a
        >
      </td>
      <td>
        <a
          href="/pt-BR/docs/HTML/Content_categories#Flow_content"
          >Fluxo de conteúdo</a
        >
      </td>
    </tr>
    <tr>
      <td>Conteúdo permitido</td>
      <td>
        Nesta ordem:
        <ul>
          <li>um elemento {{HTMLElement("caption")}} opcional,</li>
          <li>zero ou mais {{HTMLElement("colgroup")}} elementos,</li>
          <li>um elemento {{HTMLElement("thead")}} opcional,</li>
          <li>
            uma das duas alternativas:
            <ul>
              <li>
                um elemento {{HTMLElement("tfoot")}}, seguido por:
                <ul>
                  <li>
                    zero ou mais elementos {{HTMLElement("tbody")}},
                  </li>
                  <li>ou um ou mais elementos {{HTMLElement("tr")}},</li>
                </ul>
              </li>
              <li>
                uma segunda alternativa seguida por um elemento
                {{HTMLElement("tfoot")}} opcional:
                <ul>
                  <li>
                    zero ou mais elementos {{HTMLElement("tbody")}},
                  </li>
                  <li>ou um ou mais elementos {{HTMLElement("tr")}}</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Omissão de tag</td>
      <td>Nenhuma, ambas as tags de início e fim são obrigatórias</td>
    </tr>
    <tr>
      <td>Elementos pais permitidos</td>
      <td>Qualquer elemento que aceite fluxo de conteúdo</td>
    </tr>
    <tr>
      <td>Documento normativo</td>
      <td>
        <a
          class="external"
          href="http://www.whatwg.org/specs/web-apps/current-work/multipage/tabular-data.html#the-table-element"
          rel="external nofollow"
          >HTML5, section 4.9.1</a
        >
        (<a
          class="external"
          href="https://www.w3.org/TR/REC-html40/struct/tables.html#edef-TABLE"
          >HTML4.01, section 11.2.1</a
        >)
      </td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("align")}} {{Deprecated_inline}}

  - : Este atributo enumerado indica como a tabela deve ser alinhada considerando o conteúdo do documento. Que pode ter os seguintes valores:

    - left, significando que a tabela deve ser exibida à esquerda do documento;
    - center, significando que a tabela deve ser exibida centralizada no documento;
    - right, significando que a tabela deve ser exibida à direita do documento.

    > **Note:**- **Não use estes atributos**, pois foram depreciados: o elemento {{HTMLElement("table")}} deve ser estilizado utilizando [CSS](/pt-BR/docs/CSS). Para dar um efeito similar ao atributo align, a propriedade [CSS](/pt-BR/docs/CSS) "text-align" e "vertical-align" devem ser usadas.
    >
    > - Antes do Firefox 4, Firefox também suportava, somente em quirks mode, `os valores middle`, `absmiddle`, and `abscenter` `como sinônimos de center`_._

- {{htmlattrdef("bgcolor")}} {{Deprecated_inline}}

  - : Este atributo define a cor de fundo da tabela e seu conteúdo. É um dos códigos hexadecimais de 6 dígitos como definido em [sRGB](https://www.w3.org/Graphics/Color/sRGB), prefixado por um '#'. Um dos textos das dezesseis cores predefinidas podem também ser utilizados:

    |     | black = "#000000"   |     | green = "#008000"  |
    | --- | ------------------- | --- | ------------------ |
    |     | silver = "#C0C0C0"  |     | lime = "#00FF00"   |
    |     | gray = "#808080"    |     | olive = "#808000"  |
    |     | white = "#FFFFFF"   |     | yellow = "#FFFF00" |
    |     | maroon = "#800000"  |     | navy = "#000080"   |
    |     | red = "#FF0000"     |     | blue = "#0000FF"   |
    |     | purple = "#800080"  |     | teal = "#008080"   |
    |     | fuchsia = "#FF00FF" |     | aqua = "#00FFFF"   |

    > **Note:** **Usage note:** Do not use this attribute, as it has been deprecated: the {{HTMLElement("table")}} element should be styled using [CSS](/pt-BR/docs/CSS). To give a similar effect than the bgcolor attribute, the [CSS](/pt-BR/docs/CSS) property {{cssxref("background-color")}} should be used.

- {{htmlattrdef("border")}} {{Deprecated_inline}}

  - : This integer attribute defines, in pixels, the size of the frame surrounding the table. If set to 0, it implies that the {{htmlattrxref("frame", "table")}} attribute is set to void.

    > **Note:** **Usage note:** Do not use this attribute, as it has been deprecated: the {{HTMLElement("table")}} element should be styled using [CSS](/pt-BR/docs/CSS). To give a similar effect than the border attribute, the [CSS](/pt-BR/docs/CSS) properties {{cssxref("border")}}, {{cssxref("border-color")}}, {{cssxref("border-width")}} and {{cssxref("border-style")}} should be used.

- {{htmlattrdef("cellpadding")}} {{Deprecated_inline}}

  - : This attribute defines the space between the content of a cell and the border, displayed or not, of it. If it is a pixel length, this pixel-sized space will be applied on all four sides; if it is a percentage length, the content will be centered and the total vertical space (top and bottom) will represent this percentage. The same is true for the total horizontal space (left and right).

    > **Note:** **Usage note:** Do not use this attribute, as it has been deprecated: the {{HTMLElement("table")}} element should be styled using [CSS](/pt-BR/docs/CSS). To give a similar effect than the border attribute, use the [CSS](/pt-BR/docs/CSS) property {{cssxref("border-collapse")}} with the value collapse on the {{HTMLElement("table")}} element itself, and the property {{cssxref("padding")}} on the {{HTMLElement("td")}}.

- {{htmlattrdef("cellspacing")}} {{Deprecated_inline}}

  - : This attribute defines the size, in percentage or in pixels, of the space between two cells (both horizontally and vertically), between the top of the table and the cells of the first row, the left of the table and the first column, the right of the table and the last column and the bottom of the table and the last row.

    > **Note:** **Usage note:** Do not use this attribute, as it has been deprecated: the {{HTMLElement("table")}} element should be styled using [CSS](/pt-BR/docs/CSS). To give a similar effect than the border attribute, use the [CSS](/pt-BR/docs/CSS) property {{cssxref("border-collapse")}} with the value collapse on the {{HTMLElement("table")}} element itself, and the property {{cssxref("margin")}} on the {{HTMLElement("td")}} element.

- {{htmlattrdef("frame")}} {{Deprecated_inline}}

  - : This enumerated attribute defines which side of the frame surrounding the table must be displayed. It may have the following values:

    |     | above  |     | below  |
    | --- | ------ | --- | ------ |
    |     | hsides |     | vsides |
    |     | lhs    |     | rhs    |
    |     | border |     | box    |
    |     | void   |     |        |

    > **Note:** **Usage note:** Do not use this attribute, as it has been deprecated: the {{HTMLElement("table")}} element should be styled using [CSS](/pt-BR/docs/CSS). To give a similar effect than the frame attribute, use the [CSS](/pt-BR/docs/CSS) properties {{cssxref("border-style")}} and {{cssxref("border-width")}}.

- {{htmlattrdef("rules")}} {{Deprecated_inline()}}

  - : This enumerated attribute defines where rules, i.e. lines, should appear in a table. It can have the following values:

    - none, which indicates the no rules will be displayed; it is the default value;
    - groups, which will make the rules to be displayed between row groups (defined by the {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} and {{HTMLElement("tfoot")}} elements) and between column groups (defined by the {{HTMLElement("col")}} and {{HTMLElement("colgroup")}} elements) only;
    - rows, which will make the rules to be displayed between rows;
    - columns, which will make the rules to be displayed between columns;
    - all, which wil make the rules to be displayed between rows and columns.

    > **Note:** :- The styling of the rules is browser-dependant and cannot be modified.
    >
    > - Do not use this attribute, as it has been deprecated: the rules should be defined and styled using [CSS](/pt-BR/docs/CSS). use the [CSS](/pt-BR/docs/CSS) property {{cssxref("border")}} on the adequate {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("col")}} or {{HTMLElement("colgroup")}} elements.

- {{htmlattrdef("summary")}} {{Deprecated_inline}}

  - : This attribute defines an alternative text use to describe the table in user-agent unable to display it. Typically, it contents a description of it to allow visually impaired people, like blind people browsing the web using Braille screen, to get the information in it. If the information added in this attribute may also be useful for non-visually impaired people, consider using the {{HTMLElement("caption")}} instead. The summary attribute is not mandatory and may be omitted when a {{HTMLElement("caption")}} element fulfills its role.

    > **Note:** **Usage Note:** Do not use this attribute, as it has been deprecated. Instead, use one of these way of describing a table:- In prose, surrounding the table (this is the less semantic-conveying way of doing it).
    >
    > - In the table's {{HTMLElement("caption")}} element.
    > - In a {{HTMLElement("details")}} element, inside the table's {{HTMLElement("caption")}} element.
    > - Include the {{HTMLElement("table")}} element in a {{HTMLElement("figure")}} element and add the description in prose next to it.
    > - Include the {{HTMLElement("table")}} element in a {{HTMLElement("figure")}} element and add the description in prose inside a {{HTMLElement("figcaption")}} element.
    > - Adjust the table so that such description is no more needed, by using {{HTMLElement("th")}} and {{HTMLElement("thead")}} elements for example.

- {{htmlattrdef("width")}} {{Deprecated_inline}}

  - : This attribute defines the width of the table. It may either be a pixel length or a percentage value, representing the percentage of the width of its container that the table should use.

    > **Note:** **Usage Note:** Do not use this attribute, as it has been deprecated: the rules should be defined and styled using [CSS](/pt-BR/docs/CSS). use the [CSS](/pt-BR/docs/CSS) property {{cssxref("width")}} instead.

## DOM interface

This element implements the [`HTMLTableElement`](/pt-BR/docs/DOM/HTMLTableElement) interface.

## Examples

### Simple Table

```html
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
```

{{ EmbedLiveSample('Examples:Simple_Table', '100%', '800') }}

### More Examples

```html
<p>Simple table with header</p>
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

<p>Table with thead, tfoot, and tbody</p>
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

<p>Table with colgroup</p>
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

<p>Table with colgroup and col</p>
<table>
  <colgroup>
    <col class="column1">
    <col class="columns2plus3" span="2">
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

<p>Simple table with caption</p>
<table>
  <caption>Awesome caption</caption>
  <tr>
    <td>Awesome data</td>
  </tr>
</table>
```

```css hidden
table
{
border-collapse: collapse;
border-spacing: 0px;
}
table, th, td
{
padding: 5px;
border: 1px solid black;
}
```

{{ EmbedLiveSample('Examples', '100%', '800') }}

## Compatibilidade com navegadores

{{Compat("html.elements.table")}}

## See also

- Other table-related HTML Elements: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}};
- CSS properties that may be specially useful to style the \<table> element:

  - {{cssxref("width")}} to control the width of the table;
  - {{cssxref("border")}}, {{cssxref("border-style")}}, {{cssxref("border-color")}}, {{cssxref("border-width")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}} to control the aspect of cell borders, rules and frame;
  - {{cssxref("margin")}} and {{cssxref("padding")}} to style the individual cell content;
  - {{cssxref("text-align")}} and {{cssxref("vertical-align")}} to define alignment of text and cell content.

{{HTMLSidebar}}
