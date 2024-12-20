---
title: "<caption>: The Table Caption element"
slug: Web/HTML/Element/caption
---

{{HTMLSidebar}}

**HTML** элемент заголовка таблицы (**`<caption>`**) определяет название (заголовок) таблицы. Если этот элемент используется, он _всегда_ должен быть первым вложенным элементом тэга {{HTMLElement("table")}}. Внешний вид и расположение заголовка по отношению к самой таблице может быть изменено с помощью стилей CSS {{cssxref("caption-side")}} and {{cssxref("text-align")}}.

| [Категории контента](/ru/docs/Web/HTML/Content_categories) | Нет                                                                                                 |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                      | [Потоковый контент](/ru/docs/Web/HTML/Content_categories#flow_content).                             |
| Пропуск тегов                                              | Конечный тег может быть пропущен, если элемент не следует сразу за ASCII пробелом или комментарием. |
| Допустимые родители                                        | Элемент {{HTMLElement("table")}} как его первый потомок                                             |
| Допустимые ARIA-роли                                       | Нет                                                                                                 |
| DOM-интерфейс                                              | {{domxref("HTMLTableCaptionElement")}}                                                              |

## Атрибуты

Этот элемент включает [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes).

### Устаревшие атрибуты

Следующие атрибуты устаревшие и не должны использоваться. Они описаны ниже для справки при обновлении кода и для общего сведения.

- `align`
  - : Этот пронумерованный атрибут указывает как заголовок должен быть выравнен по отношению к таблице. Он может иметь одно или несколько следующих значений :
    - `left`
      - : Заголовок отображается слева от таблицы.
    - `top`
      - : Заголовок отображается над таблицей.
    - `right`
      - : Заголовок отображается справа от таблицы.
    - `bottom`
      - : Заголовок отображается под таблицей.

## Примечания по использованию

Когда элемент {{HTMLElement("table")}}, содержащий `<caption>` является единственным потомком элемента {{HTMLElement("figure")}}, вам следует использовать элемент {{HTMLElement("figcaption")}} вместо `<caption>`.

## Пример

Просто пример, представляющий таблицу, которая содержит заголовок.

```html
<table>
  <caption>
    Example Caption
  </caption>
  <tr>
    <th>Login</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>user1</td>
    <td>user1@sample.com</td>
  </tr>
  <tr>
    <td>user2</td>
    <td>user2@sample.com</td>
  </tr>
</table>
```

```css hidden
caption {
  caption-side: top;
  align: right;
}
table {
  border-collapse: collapse;
  border-spacing: 0px;
}
table,
th,
td {
  border: 1px solid black;
}
```

{{EmbedLiveSample('Пример', 650, 100)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Другие связанные с таблицей HTML-элементы: {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}};
- CSS-свойства, которые могут быть применены для стилизации элемента {{HTMLElement("caption")}}:

  - {{cssxref("text-align")}}, {{cssxref("caption-side")}}.
