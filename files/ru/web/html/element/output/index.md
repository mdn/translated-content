---
title: "<output>: Элемент вывода"
slug: Web/HTML/Element/output
---

{{HTMLSidebar}}

**HTML-элемент вывода** (**`<output>`**) является контейнерным элементом, в котором сайт или приложение могут выводить результаты вычислений или действий пользователя.

| [Категории контента](/ru/docs/Web/HTML/Content_categories) | [Потоковый контент](/ru/docs/Web/HTML/Content_categories#Flow_content), [фразовый контент](/ru/docs/Web/HTML/Content_categories#Phrasing_content), [перечисляемые](/ru/docs/Web/HTML/Content_categories#Form_listed), [лэйбловые](/ru/docs/Web/HTML/Content_categories#Form_labelable), [сбрасываемые форма-ассоциированные элементы](/ru/docs/Web/HTML/Content_categories#Form_resettable), явный контент. |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимый контент                                         | [Фразовый контент](/ru/docs/Web/HTML/Content_categories#Phrasing_content).                                                                                                                                                                                                                                                                                                                                  |
| Пропуск тегов                                              | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                         |
| Допустимые родители                                        | Все элементы, которые принимают [фразовый контент](/ru/docs/Web/HTML/Content_categories#Phrasing_content).                                                                                                                                                                                                                                                                                                  |
| Допустимые ARIA-роли                                       | Любые                                                                                                                                                                                                                                                                                                                                                                                                       |
| DOM-интерфейс                                              | {{domxref("HTMLOutputElement")}}                                                                                                                                                                                                                                                                                                                                                                            |

## Атрибуты

Этот элемент включает [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("for")}}
  - : Пробело-разделяемый список [`id`](/ru/docs/Web/HTML/Global_attributes/id) других элементов, указывающий, что эти элементы предоставили входные значения для (или иным образом повлияли) вычисления.
- {{htmlattrdef("form")}}
  - : [Элемент формы](/ru/docs/Web/HTML/Element/form), с которым связан этот элемент ("владелец формы"). Значением атрибута должен быть `id` элемента {{HTMLElement("form")}} в том же документе. Этот атрибут не нужен, если элемент `<output>` является потомком элемента `<form>` (в этом случае эта форма является владельцем формы), или, если элемент `<output>` вообще не связан с формой.
- {{htmlattrdef("name")}}
  - : Имя элемента; используется для идентификации этого `<output>` при отправке формы.

## Пример

Эта форма содержит слайдер, значение которого находится в пределах от 0 до 100, и элемент {{HTMLElement("input")}}, в который можно ввести второе значение. Два числа складываются и результат отображается в элементе `<output>` каждый раз, когда значение любого управляющего элемента меняется.

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" name="b" value="50" /> +
  <input type="number" name="a" value="10" /> =
  <output name="result">60</output>
</form>
```

{{ EmbedLiveSample('Пример')}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Другие элементы, связанные с формой: {{HTMLElement("form")}}, {{HTMLElement("input")}}, {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("select")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("progress")}} and {{HTMLElement("meter")}}.
