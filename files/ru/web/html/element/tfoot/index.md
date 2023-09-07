---
title: <tfoot>
slug: Web/HTML/Element/tfoot
---

_HTML_ элемент подвала таблицы (`<tfoot>`) определяющий набор строк суммирующих столбцы таблицы.

## Используемый контекст

| [Content categories](/en/HTML/Content_categories) | None.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержание                             | Ноль или более {{ HTMLElement("tr") }} элементов.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Tag omission                                      | The start tag is mandatory. The end tag may be omitted if the {{ HTMLElement("tbody") }} element is immediately followed by an, eventually implicitly-defined, {{ HTMLElement("tbody") }}, or if there is no more content in the parent {{ HTMLElement("table") }} element.                                                                                                                                                                                                                               |
| Разрешённые родительские элементы                 | A {{ HTMLElement("table") }} element. The {{ HTMLElement("tfoot") }} must appear after any {{ HTMLElement("caption") }}, {{ HTMLElement("colgroup") }} or {{ HTMLElement("thead") }} element. It can be before or after all {{ HTMLElement("tbody") }} and {{ HTMLElement("tr") }} elements, but not intermixed with them. The {{ HTMLElement("tfoot") }} element cannot be placed after any {{ HTMLElement("tbody") }} and {{ HTMLElement("tr") }} element. This restriction has been softened in HTML5. |
| Нормативные документы                             | [HTML5, section 4.9.7](http://www.whatwg.org/specs/web-apps/current-work/multipage/tabular-data.html#the-tfoot-element) ([HTML4.01, section 11.2.3](http://www.w3.org/TR/REC-html40/struct/tables.html#h-11.2.3))                                                                                                                                                                                                                                                                                         |

## Атрибуты

Этот элемент включает в себя [глобальные атрибуты](/ru/docs/HTML/Global_attributes).

- {{ htmlattrdef("align") }} {{ Deprecated_inline() }}

  - : Этот атрибут определяет горизонтальное выравнивание содержимого каждой ячейки. Возможные значения:
    - left, выравнивание содержимого по левому краю ячейки
    - center, выравнивание содержимого по центру ячейки
    - right, выравнивание содержимого по правому краю ячейки
    - justify, выравнивание по ширине ячейки: добавление пробелов к тексту содержимого ячейки до тех пор, пока содержимое не выровняется от одного края ячейки до другого
    - char, выравнивание текстового содержимого по специальному символу с минимальным смещением, определённым [`char`](/ru/docs/Web/HTML/Element/tbody#char) и [`charoff`](/ru/docs/Web/HTML/Element/tbody#charoff) атрибутами {{ unimplemented_inline("2212") }}.Если этот атрибут не задан, то значением по умолчанию является left.
      > **Примечание:**Do not use this attribute as it is obsolete (not supported) in the latest standard.\* To achieve the same effect as the left, center, right or justify values, use the CSS {{ cssxref("text-align") }} property on it.
      >
      > - To achieve the same effect as the char value, in CSS3, you can use the value of the [`char`](/ru/docs/Web/HTML/Element/tfoot#char) as the value of the {{ cssxref("text-align") }} property {{ unimplemented_inline() }}.

- {{ htmlattrdef("bgcolor") }} {{ Non-standard_inline() }}
  - | : Этот атрибут определяет цвет фона каждой ячейки столбца. Это один из 6-ти значного шестнадцатеричного кода определённого в [sRGB](http://www.w3.org/Graphics/Color/sRGB), предваряется '#'. Может быть использован один из шестнадцати предопределённых строк: |                     | black = "#000000" |                    | green = "#008000"                                                                                                                                                                                                                                                                                                                                                                                                          |
    | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ----------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    |                                                                                                                                                                                                                                                                  | silver = "#C0C0C0"  |                   | lime = "#00FF00"   |
    |                                                                                                                                                                                                                                                                  | gray = "#808080"    |                   | olive = "#808000"  |
    |                                                                                                                                                                                                                                                                  | white = "#FFFFFF"   |                   | yellow = "#FFFF00" |
    |                                                                                                                                                                                                                                                                  | maroon = "#800000"  |                   | navy = "#000080"   |
    |                                                                                                                                                                                                                                                                  | red = "#FF0000"     |                   | blue = "#0000FF"   |
    |                                                                                                                                                                                                                                                                  | purple = "#800080"  |                   | teal = "#008080"   |
    |                                                                                                                                                                                                                                                                  | fuchsia = "#FF00FF" |                   | aqua = "#00FFFF"   | > **Примечание:** Do not use this attribute, as it is non-standard and only implemented some versions of Microsoft Internet Explorer: the {{ HTMLElement("tfoot") }} element should be styled using [CSS](/en/CSS). To give a similar effect to the **bgcolor** attribute, use the [CSS](/en/CSS) property {{ cssxref("background-color") }}, on the relevant {{ HTMLElement("td") }} or {{ HTMLElement("th") }} elements. |
- {{ htmlattrdef("char") }} {{ Deprecated_inline() }}
  - : This attribute is used to set the character to align the cells in a column on. Typical values for this include a period (.) when attempting to align numbers or monetary values. If [`align`](/ru/docs/Web/HTML/Element/tfoot#align) is not set to char, this attribute is ignored.
    > **Примечание:**Do not use this attribute as it is obsolete (and not supported) in the latest standard. To achieve the same effect as the [`char`](/ru/docs/Web/HTML/Element/tbtfootody#char), in CSS3, you can use the character set using the [`char`](/ru/docs/Web/HTML/Element/tfoot#char) attribute as the value of the {{ cssxref("text-align") }} property {{ unimplemented_inline() }}.
- {{ htmlattrdef("charoff") }} {{ Deprecated_inline() }}
  - : This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the **char** attribute.
    > **Примечание:**Do not use this attribute as it is obsolete (and not supported) in the latest standard.
- {{ htmlattrdef("valign") }} {{ Deprecated_inline() }}
  - : Этот атрибут задаёт вертикальное выравнивание текста в каждой строке ячеек заголовка таблицы. Возможные значения для этого атрибута:
    - baseline, which will put the text as close to the bottom of the cell as it is possible, but align it on the [baseline](http://en.wikipedia.org/wiki/Baseline_%28typography%29) of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as bottom.
    - bottom, which will put the text as close to the bottom of the cell as it is possible;
    - middle, which will center the text in the cell;
    - and top, which will put the text as close to the top of the cell as it is possible.
      > **Примечание:** Do not use this attribute as it is obsolete (and not supported) in the latest standard: instead set the CSS {{ cssxref("vertical-align") }} property on it.

## DOM интерфейс

Этот элемент реализует интерфейс [`HTMLTableSectionElement`](/en/docs/Web/API/HTMLTableSectionElement).

## Примеры

Пожалуйста обратитесь к странице {{ HTMLElement("table") }} для примера `<tfoot>`.

## Совместимость браузеров

{{Compat}}

## Смотрите также

- Other table-related HTML Elements: {{ HTMLElement("caption") }}, {{ HTMLElement("col") }}, {{ HTMLElement("colgroup") }}, {{ HTMLElement("table") }}, {{ HTMLElement("tbody") }}, {{ HTMLElement("td") }}, {{ HTMLElement("th") }}, {{ HTMLElement("thead") }}, {{ HTMLElement("tr") }};
- CSS properties and pseudo-classes that may be specially useful to style the \<tfoot> element:

  - the {{ cssxref(":nth-child") }} pseudo-class to set the alignment on the cells of the column;
  - the {{ cssxref("text-align") }} property to align all cells content on the same character, like '.'.

{{HTMLSidebar}}
