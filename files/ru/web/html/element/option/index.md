---
title: <option>
slug: Web/HTML/Element/option
tags:
  - опция
  - селект
translation_of: Web/HTML/Element/option
---
{{HTMLRef}}

**HTML-элемент `<option>`** используется для определения пункта списка контейнера {{HTMLElement("select")}}, элемента {{HTMLElement("optgroup")}}, или элемента {{HTMLElement("datalist")}}. Элемент `<option>` может представлять раздел меню всплывающих окон и других перечней или списков HTML документа.

| [Категория содержимого](/ru/docs/Web/HTML/Content_categories) | Нет.                                                                                                                                                                                                                          |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Разрешённое содержимое                                        | Текст, допускаются экранированные символы (например `&eacute;`).                                                                                                                                                              |
| Пропуск тега                                                  | Открывающий тег обязателен. Закрывающий тег опционален если за этим элементом следует другой элемент `<option>`, или элемент {{HTMLElement("optgroup")}}, или если родительский элемент не имеет больше содержимого. |
| Разрешённые родители                                          | Элемент {{HTMLElement("select")}}, элемент {{HTMLElement("optgroup")}} или элемент {{HTMLElement("datalist")}}.                                                                                      |
| Permitted ARIA roles                                          | None                                                                                                                                                                                                                          |
| DOM interface                                                 | {{domxref("HTMLOptionElement")}}                                                                                                                                                                                  |

## Атрибуты

Как и все HTML-элементы, этот элемент поддерживает [глобальные атрибуты](/ru/docs/HTML/Global_attributes "HTML/Global attributes").

- {{htmlattrdef("disabled")}} -- отключён(о)
  - : Если этот Boolean атрибут установлен, эта опция недоступна для выделения. Часто браузеры выделяют такой элемент управления серым цветом и ему недоступны любые события браузера, такие как клики мыши или события, связанные с фокусировкой. Если этот атрибут не установлен, этот элемент все ещё можно отключить (может не работать), если отключён внешний(one of its ancestors) элемент {{HTMLElement("optgroup")}}.
- {{htmlattrdef("label")}} -- метка, ярлык
  - : Этот атрибут - текст ярлыка, отображающий значение(смысл, описание) опции. Если `label` не указан (отсутствует), то его значение совпадает с текстовым содержанием элемента `<option>`.
- {{htmlattrdef("selected")}} -- выбран(о)
  - : (Если присутствует,) этот Boolean атрибут отображает то, что опция изначально выделена. Если элемент `<option>` принадлежит элементу {{HTMLElement("select")}}, чей атрибут {{htmlattrxref("multiple", "select")}} не установлен, только одна-единственная `<option>` элемента {{HTMLElement("select")}} может иметь атрибут `selected` .
- {{htmlattrdef("value")}} -- значение, величина
  - : Содержимое(содержание) этого атрибута отображает(представляет) значение, отправляемое формой, если выбрана(выделена) данная опция. Если (этот) атрибут value отсутствует, значение берётся из текстового содержания элемента `<option>`.

## Примеры

См. {{HTMLElement("select")}} for examples.

## Спецификации

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other form-related elements: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} and {{HTMLElement("meter")}}.
