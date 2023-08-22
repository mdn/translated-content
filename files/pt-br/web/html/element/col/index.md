---
title: <col>
slug: Web/HTML/Element/col
---

{{HTMLSidebar}}

O elemento **HTML `<col>`** define uma tabela contendo colunas e sendo utilizada para definições semanticas em todas as colunas comuns. É normalmente encontrada dentro do elemento("colgroup")}} .Este elemento permite a estilização de colunas utilizando-se do CSS, porém apenas um numero pequeno de atributos que terão efeito dentro das colunas ([veja as especificações do CSS 2.1](https://www.w3.org/TR/CSS21/tables.html#columns) a partir dessa lista).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/HTML/Content_categories">Content categories</a>
      </th>
      <td>None.</td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>None, it is an {{Glossary("empty element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The start tag is mandatory, but, as it is a void element, the use of an
        end tag is forbidden.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        {{HTMLElement("colgroup")}} only, though it can be implicitly
        defined as its start tag is not mandatory. The
        {{HTMLElement("colgroup")}} must not have a
        <a href="/pt-BR/docs/Web/HTML/Element/colgroup#span"><code>span</code></a> attribute.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLTableColElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

This element includes the [global attributes](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("align")}} {{Deprecated_inline}}

  - : This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are:

    - `left`, aligning the content to the left of the cell
    - `center`, centering the content in the cell
    - `right`, aligning the content to the right of the cell
    - `justify`, inserting spaces into the textual content so that the content is justified in the cell
    - `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](/pt-BR/docs/Web/HTML/Element/col#char) and [`charoff`](/pt-BR/docs/Web/HTML/Element/col#charoff) attributes {{unimplemented_inline(2212)}}.

    If this attribute is not set, its value is inherited from the [`align`](/pt-BR/docs/Web/HTML/Element/colgroup#align) of the {{HTMLElement("colgroup")}} element this `<col>` element belongs too. If there are none, the `left` value is assumed.

    > **Note:**Do not use this attribute as it is obsolete (not supported) in the latest standard.- To achieve the same effect as the `left`, `center`, `right` or `justify` values:
    >
    > - Do not try to set the {{cssxref("text-align")}} property on a selector giving a {{HTMLElement("col")}} element. Because {{HTMLElement("td")}} elements are not descendant of the {{HTMLElement("col")}} element, they won't inherit it.
    > - If the table doesn't use a [`colspan`](/pt-BR/docs/Web/HTML/Element/td#colspan) attribute, use the `td:nth-child(an+b)` CSS selector. Set `a` to zero and `b`to the position of the column in the table, e.g. `td:nth-child(2) { text-align: right; }` to right-align the second column.
    > - If the table does use a [`colspan`](/pt-BR/docs/Web/HTML/Element/td#colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.
    > - To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](/pt-BR/docs/Web/HTML/Element/col#char) as the value of the {{cssxref("text-align")}} property {{unimplemented_inline}}.

- {{htmlattrdef("bgcolor")}} {{Non-standard_inline}}

  - : This attribute defines the background color of each cell of the column. It is one of the 6-digit hexadecimal code as defined in [sRGB](https://www.w3.org/Graphics/Color/sRGB), prefixed by a '#'. One of the sixteen predefined color strings may be used:

    |     | `black` = "#000000"   |     | `green` = "#008000"  |
    | --- | --------------------- | --- | -------------------- |
    |     | `silver` = "#C0C0C0"  |     | `lime` = "#00FF00"   |
    |     | `gray` = "#808080"    |     | `olive` = "#808000"  |
    |     | `white` = "#FFFFFF"   |     | `yellow` = "#FFFF00" |
    |     | `maroon` = "#800000"  |     | `navy` = "#000080"   |
    |     | `red` = "#FF0000"     |     | `blue` = "#0000FF"   |
    |     | `purple` = "#800080"  |     | `teal` = "#008080"   |
    |     | `fuchsia` = "#FF00FF" |     | `aqua` = "#00FFFF"   |

    > **Note:** **Usage note:** Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: the {{HTMLElement("col")}} element should be styled using [CSS](/pt-BR/docs/CSS). To give a similar effect to the **bgcolor** attribute, use the [CSS](/pt-BR/docs/CSS) property {{cssxref("background-color")}}, on the relevant {{HTMLElement("td")}} elements.

- {{htmlattrdef("char")}} {{Deprecated_inline}}

  - : This attribute is used to set the character to align the cells in a column on. Typical values for this include a period (.) when attempting to align numbers or monetary values. If [`align`](/pt-BR/docs/Web/HTML/Element/col#align) is not set to `char`, this attribute is ignored.

    > **Note:**Do not use this attribute as it is obsolete (and not supported) in the latest standard. To achieve the same effect as the [`char`](/pt-BR/docs/Web/HTML/Element/col#char), in CSS3, you can use the character set using the [`char`](/pt-BR/docs/Web/HTML/Element/col#char) attribute as the value of the {{cssxref("text-align")}} property {{unimplemented_inline}}.

- {{htmlattrdef("charoff")}} {{Deprecated_inline}}

  - : This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the **char** attribute.

    > **Note:**Do not use this attribute as it is obsolete (and not supported) in the latest standard.

- {{htmlattrdef("span")}}

  - : This attribute contains a positive integer indicating the number of consecutive columns the `<col>` element spans. If not present, its default value is `1`.

- {{htmlattrdef("valign")}} {{Deprecated_inline}}

  - : This attribute specifies the vertical alignment of the text within each cell of the column. Possible values for this attribute are:

    - `baseline`, which will put the text as close to the bottom of the cell as it is possible, but align it on the [baseline](https://en.wikipedia.org/wiki/Baseline_%28typography%29) of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as `bottom`.
    - `bottom`, which will put the text as close to the bottom of the cell as it is possible;
    - `middle`, which will center the text in the cell;
    - and `top`, which will put the text as close to the top of the cell as it is possible.

    > **Note:**Do not use this attribute as it is obsolete (and not supported) in the latest standard:- Do not try to set the {{cssxref("vertical-align")}} property on a selector giving a {{HTMLElement("col")}} element. Because {{HTMLElement("td")}} elements are not descendant of the {{HTMLElement("col")}} element, they won't inherit it.
    >
    > - If the table doesn't use a [`colspan`](/pt-BR/docs/Web/HTML/Element/td#colspan) attribute, use the `td:nth-child(an+b)` CSS selector where a is the total number of the columns in the table and b is the ordinal position of the column in the table. Only after this selector the {{cssxref("vertical-align")}} property can be used.
    > - If the table does use a [`colspan`](/pt-BR/docs/Web/HTML/Element/td#colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.

- {{htmlattrdef("width")}}
  - : This attribute specifies a default width for each column in the current column group. In addition to the standard pixel and percentage values, this attribute might take the special form `0*`, which means that the width of each column in the group should be the minimum width necessary to hold the column's contents. Relative widths such as `0.5*` also can be used.

## Exemplo

Please see the {{HTMLElement("table")}} page for examples on `<col>`.

## Especificação

| Specification                                                                 | Status                   | Comment            |
| ----------------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('HTML WHATWG', 'tables.html#the-col-element', '&lt;col&gt;')}}     | {{Spec2('HTML WHATWG')}} |                    |
| {{SpecName('HTML5 W3C', 'tabular-data.html#the-col-element', '&lt;col&gt;')}} | {{Spec2('HTML5 W3C')}}   |                    |
| {{SpecName('HTML4.01', 'struct/tables.html#h-11.2.4.2', '&lt;col&gt;')}}      | {{Spec2('HTML4.01')}}    | Initial definition |

## Compatibilidade com navegadores

{{Compat("html.elements.col")}}

## Veja Também

- Other table-related HTML elements: {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}};
- CSS properties and pseudo-classes that may be specially useful to style the `<col>` element:

  - the {{cssxref("width")}} property to control the width of the column;
  - the {{cssxref(":nth-child")}} pseudo-class to set the alignment on the cells of the column;
  - the {{cssxref("text-align")}} property to align all cells content on the same character, like '.'.
