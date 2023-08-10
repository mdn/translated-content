---
title: <col>
slug: Web/HTML/Element/col
---

{{HTMLSidebar}}
**HTML-элемент** **`<col>`** определяет столбец в таблице и используется для определения общей семантики на всех ячейках. Обычно он находится в элементе {{HTMLElement("colgroup")}}.

Этот элемент позволяет стилизировать столбцы с использованием CSS, но только несколько атрибутов будут иметь эффект на столбец ([смотри спецификацию CSS 2.1](https://www.w3.org/TR/CSS21/tables.html#columns)).

| [Категория контента](/ru/docs/HTML/Content_categories) | Нет                                                                                                                                                                                                                                    |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                  | Нет, это {{Glossary("пустой элемент")}}.                                                                                                                                                                                               |
| Пропуск тегов                                          | Начальный тег обязательный, но, поскольку это элемент без контента, использование концевого тега запрещено.                                                                                                                            |
| Допустимые родители                                    | Только {{HTMLElement("colgroup")}}, хотя он может быть определён неявно, т. к. его стартовый тег не является обязательным. Тег {{HTMLElement("colgroup")}} обязан не иметь атрибута [`span`](/ru/docs/Web/HTML/Element/colgroup#span). |
| Допустимые ARIA-роли                                   | нет                                                                                                                                                                                                                                    |
| DOM-интерфейс                                          | {{domxref("HTMLTableColElement")}}                                                                                                                                                                                                     |

## Атрибуты

Этот элемент включает [общие атрибуты](/ru/docs/Web/HTML/%D0%9E%D0%B1%D1%89%D0%B8%D0%B5_%D0%B0%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%D1%8B).

- {{htmlattrdef("align")}} {{deprecated_inline}},

  - : Этот перечисляемый атрибут указывает, как будет обрабатываться горизонтальное выравнивание контента каждой ячейки столбца. Возможные значения:

    - `left`, выравнивает контент к левой стороне ячейки
    - `center`, центрирует контент ячейки
    - `right`, выравнивает контент к правой стороне ячейки
    - `justify`, вставляет пробелы в текстовый контент так, чтобы контент был выравнен по ширине
    - `char`, выравнивает текстовый контент по специальному символу с минимальным смещением, определяемым атрибутами [`char`](/ru/docs/Web/HTML/Element/col#char) и [`charoff`](/ru/docs/Web/HTML/Element/col#charoff) {{unimplemented_inline(2212)}}.Если этот атрибут не установлен, его значение будет переопределено от [`align`](/ru/docs/Web/HTML/Element/colgroup#align) элемента {{HTMLElement("colgroup")}}, к которому этот элемент принадлежит. Если его также нет, предполагается значение `left`.

      > **Примечание:**Не используйте этот атрибут, поскольку он устарел (не поддерживается) в последнем стандарте.
      > To achieve the same effect as the `left`, `center`, `right` or `justify` values:
      >
      > - Do not try to set the {{cssxref("text-align")}} property on a selector giving a {{HTMLElement("col")}} element. Because {{HTMLElement("td")}} elements are not descendant of the {{HTMLElement("col")}} element, they won't inherit it.
      > - If the table doesn't use a [`colspan`](/ru/docs/Web/HTML/Element/td#colspan) attribute, use the `td:nth-child(an+b)` CSS selector. Set `a` to zero and `b` to the position of the column in the table, e.g. `td:nth-child(2) { text-align: right; }` to right-align the second column.
      > - If the table does use a [`colspan`](/ru/docs/Web/HTML/Element/td#colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.
      > - To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](/ru/docs/Web/HTML/Element/col#char) as the value of the {{cssxref("text-align")}} property {{unimplemented_inline}}.

- {{htmlattrdef("bgcolor")}} {{Non-standard_inline}}
  - | : Этот атрибут определяет цвет фона каждой ячейки столбца. Это один из 6-и значных кодов в шестнадцатеричной системе счисления, определённый как [sRGB](https://www.w3.org/Graphics/Color/sRGB) с префиксом '#'. Можно использовать одну из шестнадцати предопределённых строк: |                       | `black` = "#000000" |                      | `green` = "#008000"                                                                                                                                                                                                                                                                                                                                                                                    |
    | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    |                                                                                                                                                                                                                                                                                 | `silver` = "#C0C0C0"  |                     | `lime` = "#00FF00"   |
    |                                                                                                                                                                                                                                                                                 | `gray` = "#808080"    |                     | `olive` = "#808000"  |
    |                                                                                                                                                                                                                                                                                 | `white` = "#FFFFFF"   |                     | `yellow` = "#FFFF00" |
    |                                                                                                                                                                                                                                                                                 | `maroon` = "#800000"  |                     | `navy` = "#000080"   |
    |                                                                                                                                                                                                                                                                                 | `red` = "#FF0000"     |                     | `blue` = "#0000FF"   |
    |                                                                                                                                                                                                                                                                                 | `purple` = "#800080"  |                     | `teal` = "#008080"   |
    |                                                                                                                                                                                                                                                                                 | `fuchsia` = "#FF00FF" |                     | `aqua` = "#00FFFF"   | > **Примечание:** Не используй этот атрибут, поскольку он нестандартный и реализован только в некоторых версиях Microsoft Internet Explorer: элемент {{HTMLElement("col")}} должно быть стилизован с использованием [CSS](/ru/docs/CSS). Для получения подобного эффекта, используй свойство [CSS](/ru/docs/CSS) {{cssxref("background-color")}}, для соответствующих элементов {{HTMLElement("td")}}. |
- {{htmlattrdef("char")}} {{deprecated_inline}},
  - : This attribute is used to set the character to align the cells in a column on. Typical values for this include a period (.) when attempting to align numbers or monetary values. If [`align`](/ru/docs/Web/HTML/Element/col#align) is not set to `char`, this attribute is ignored.
    > **Примечание:** Do not use this attribute as it is obsolete (and not supported) in the latest standard. To achieve the same effect as the [`char`](/ru/docs/Web/HTML/Element/col#char), in CSS3, you can use the character set using the [`char`](/ru/docs/Web/HTML/Element/col#char) attribute as the value of the {{cssxref("text-align")}} property {{unimplemented_inline}}.
- {{htmlattrdef("charoff")}} {{deprecated_inline}},
  - : This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the **char** attribute.
    > **Примечание:**Do not use this attribute as it is obsolete (and not supported) in the latest standard.
- {{htmlattrdef("span")}}
  - : This attribute contains a positive integer indicating the number of consecutive columns the `<col>` element spans. If not present, its default value is `1`.
- {{htmlattrdef("valign")}} {{deprecated_inline}},

  - : This attribute specifies the vertical alignment of the text within each cell of the column. Possible values for this attribute are:
    - `baseline`, which will put the text as close to the bottom of the cell as it is possible, but align it on the [baseline](https://en.wikipedia.org/wiki/Baseline_%28typography%29) of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as `bottom`.
    - `bottom`, which will put the text as close to the bottom of the cell as it is possible;
    - `middle`, which will center the text in the cell;
    - and `top`, which will put the text as close to the top of the cell as it is possible.
      > **Примечание:** Do not use this attribute as it is obsolete (and not supported) in the latest standard:
      >
      > - Do not try to set the {{cssxref("vertical-align")}} property on a selector giving a {{HTMLElement("col")}} element. Because {{HTMLElement("td")}} elements are not descendant of the {{HTMLElement("col")}} element, they won't inherit it.
      > - If the table doesn't use a [`colspan`](/ru/docs/Web/HTML/Element/td#colspan) attribute, use the `td:nth-child(an+b)` CSS selector where a is the total number of the columns in the table and b is the ordinal position of the column in the table. Only after this selector the {{cssxref("vertical-align")}} property can be used.
      > - If the table does use a [`colspan`](/ru/docs/Web/HTML/Element/td#colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.

- {{htmlattrdef("width")}}
  - : This attribute specifies a default width for each column in the current column group. In addition to the standard pixel and percentage values, this attribute might take the special form `0*`, which means that the width of each column in the group should be the minimum width necessary to hold the column's contents. Relative widths such as `0.5*` also can be used.

## Пример

Please see the {{HTMLElement("table")}} page for examples on `<col>`.

## Спецификации

{{Specifications}}

## Совместимость с браузером

{{Compat}}

## Смотрите также

- Other table-related HTML elements: {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}};
- CSS properties and pseudo-classes that may be specially useful to style the `<col>` element:

  - the {{cssxref("width")}} property to control the width of the column;
  - the {{cssxref(":nth-child")}} pseudo-class to set the alignment on the cells of the column;
  - the {{cssxref("text-align")}} property to align all cells content on the same character, like '.'.
