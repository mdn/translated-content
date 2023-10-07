---
title: <optgroup>
slug: Web/HTML/Element/optgroup
---

**HTML-элемент `<optgroup>`** позволяет группировать опции, находящиеся внутри элемента {{HTMLElement("select")}}.

| [Категории контента](/ru/docs/HTML/Content_categories) | Нет                                                                                                                                                                                |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимый контент                                     | Ноль или более {{HTMLElement("option")}} элементов.                                                                                                                                |
| Пропуск тегов                                          | Открывающий тег обязателен. Закрывающий тег может быть опущен, если сразу после элемента находится следующий элемент `<optgroup>`, или если это последний элемент внутри родителя. |
| Допустимые родители                                    | Элемент {{HTMLElement("select")}}                                                                                                                                                  |
| Допустимые ARIA-роли                                   | Нет                                                                                                                                                                                |
| DOM-интерфейс                                          | {{domxref("HTMLOptGroupElement")}}                                                                                                                                                 |

> **Примечание:** Элементы optgroup не могут быть вложенными друг в друга.

## Атрибуты

Элемент `<optgroup>` допускает использование [глобальных атрибутов](/ru/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("disabled")}}
  - : Если установить этот атрибут, опции, находящиеся внутри элемента станут недоступными для выбора. Часто браузеры отображают эти опции серым цветом и игнорируют срабатывающие на них события, такие как события мыши или события получения фокуса.
- {{htmlattrdef("label")}}
  - : Имя группы, которое будет отображено браузером в выпадающем списке. Этот атрибут обязателен.

## Пример

```html
<select>
  <optgroup label="Группа 1">
    <option>Опция 1.1</option>
  </optgroup>
  <optgroup label="Группа 2">
    <option>Опция 2.1</option>
    <option>Опция 2.2</option>
  </optgroup>
  <optgroup label="Группа 3" disabled>
    <option>Опция 3.1</option>
    <option>Опция 3.2</option>
    <option>Опция 3.3</option>
  </optgroup>
</select>
```

### Результат

{{EmbedLiveSample('Пример')}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Элементы, имеющие отношение к формам: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("option")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} и {{HTMLElement("meter")}}.

{{HTMLSidebar}}
