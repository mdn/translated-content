---
title: <tfoot>
slug: Web/HTML/Reference/Elements/tfoot
---

{{HTMLSidebar}}

HTML-элемент **`<tfoot>`** определяющий набор строк суммирующих столбцы таблицы.

## Используемый контекст

| [Content categories](/ru/docs/Web/HTML/Guides/Content_categories) | None.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержание                                             | Ноль или более {{ HTMLElement("tr") }} элементов.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Tag omission                                                      | The start tag is mandatory. The end tag may be omitted if the {{ HTMLElement("tbody") }} element is immediately followed by an, eventually implicitly-defined, {{ HTMLElement("tbody") }}, or if there is no more content in the parent {{ HTMLElement("table") }} element.                                                                                                                                                                                                                               |
| Разрешённые родительские элементы                                 | A {{ HTMLElement("table") }} element. The {{ HTMLElement("tfoot") }} must appear after any {{ HTMLElement("caption") }}, {{ HTMLElement("colgroup") }} or {{ HTMLElement("thead") }} element. It can be before or after all {{ HTMLElement("tbody") }} and {{ HTMLElement("tr") }} elements, but not intermixed with them. The {{ HTMLElement("tfoot") }} element cannot be placed after any {{ HTMLElement("tbody") }} and {{ HTMLElement("tr") }} element. This restriction has been softened in HTML5. |
| Нормативные документы                                             | [HTML5, section 4.9.7](https://www.whatwg.org/specs/web-apps/current-work/multipage/tabular-data.html#the-tfoot-element) ([HTML4.01, section 11.2.3](https://www.w3.org/TR/REC-html40/struct/tables.html#h-11.2.3))                                                                                                                                                                                                                                                                                       |

## Атрибуты

Этот элемент включает в себя [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).

- `align` {{ Deprecated_inline() }}
  - : Этот атрибут определяет горизонтальное выравнивание содержимого каждой ячейки. Возможные значения: `left`, `center`, `right`, `justify` и `char` (выравнивание текстового содержимого по специальному символу с минимальным смещением, определённым атрибутами [`char`](#char) и [`charoff`](#charoff)).

- `bgcolor` {{ Non-standard_inline() }}
  - : Этот атрибут определяет цвет фона каждой ячейки столбца. Это один из 6-ти значного шестнадцатеричного кода определённого в [sRGB](https://www.w3.org/Graphics/Color/sRGB), предваряется '#'. Может быть использован один из шестнадцати предопределённых строк.

- `char` {{ Deprecated_inline() }}
  - : This attribute is used to set the character to align the cells in a column on. Typical values for this include a period (.) when attempting to align numbers or monetary values. If [`align`](#align) is not set to char, this attribute is ignored.

- `charoff` {{ Deprecated_inline() }}
  - : This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the **char** attribute.

- `valign` {{ Deprecated_inline() }}
  - : Этот атрибут задаёт вертикальное выравнивание текста в каждой строке ячеек заголовка таблицы. Возможные значения для этого атрибута: `baseline`, `bottom`, `middle` и `top`.

## DOM интерфейс

Этот элемент реализует интерфейс [`HTMLTableSectionElement`](/ru/docs/Web/API/HTMLTableSectionElement).

## Примеры

Пожалуйста обратитесь к странице {{ HTMLElement("table") }} для примера `<tfoot>`.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Other table-related HTML Elements: {{ HTMLElement("caption") }}, {{ HTMLElement("col") }}, {{ HTMLElement("colgroup") }}, {{ HTMLElement("table") }}, {{ HTMLElement("tbody") }}, {{ HTMLElement("td") }}, {{ HTMLElement("th") }}, {{ HTMLElement("thead") }}, {{ HTMLElement("tr") }};
- CSS properties and pseudo-classes that may be specially useful to style the \<tfoot> element:
  - the {{ cssxref(":nth-child") }} pseudo-class to set the alignment on the cells of the column;
  - the {{ cssxref("text-align") }} property to align all cells content on the same character, like '.'.
