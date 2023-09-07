---
title: "<fieldset>: The Field Set element"
slug: Web/HTML/Element/fieldset
---

{{HTMLSidebar}}

**HTML-элемент `<fieldset>`** используется для группировки нескольких элементов управления в веб-форме.

{{EmbedInteractiveExample("pages/tabbed/fieldset.html", "tabbed-standard")}}

Пример выше показывает, как элемент `<fieldset>` группирует части HTML-формы, а вложенный элемент {{htmlelement("legend")}} даёт заголовок для `<fieldset>`. Он может иметь несколько атрибутов, самый используемый из них `form`, который содержит `id` формы {{htmlelement("form")}} на этой же странице. Этот атрибут позволяет сделать `<fieldset>` частью формы `<form>` даже если он не находится внутри неё. Также вы можете отключить `<fieldset>` и всё его содержимое с помощью атрибута `disabled`.

## Атрибуты

Этот элемент включает в себя [глобальные атрибуты](/ru/docs/HTML/Global_attributes).

- {{htmlattrdef("disabled")}}
  - : Если этот логический атрибут установлен, все элементы управления формой, вложенные в `<fieldset>` будут отключены. Это значит, что их нельзя изменять, но можно отправить через форму `<form>`, в отличие от атрибута {{htmlattrdef("disabled")}} на элементах управления формой. Они не будут реагировать на браузерные события, такие как клики мышью или события focus. По умолчанию, браузер отображает такие элементы управления в сером цвете. Обратите внимание, что элементы формы внутри элемента {{HTMLElement("legend")}} не будут отключены.
- {{htmlattrdef("form")}}
  - : Этот атрибут принимает значение атрибута `id` элемента {{HTMLElement("form")}}, с которой вам нужно связать `<fieldset>`, даже если он находится вне формы.
- {{htmlattrdef("name")}}
  - : Имя, связанное с группой.
    > **Примечание:** Заголовок для \<fieldset> устанавливается первым {{HTMLElement("legend")}} внутри него.

## Стилизация с CSS

Есть несколько особенностей стилизации `<fieldset>`.

По умолчанию, значение свойства {{cssxref("display")}} равняется `block`, что создаёт блочный контекст форматирования. Если установить значение `display` как inline-элементу `<fieldset>`, это будет работать как `inline-block`, в ином случае, это будет работать как `block`. По умолчанию, имеется border 2px groobe вокруг содержимого и небольшой внутренний отступ. Элемент имеет `min-inline-size: min-content` по умолчанию.

Если задан \<legend>, он будет помещён поверх верхней границы. \<legend> сжимается и переносится, также имеет свой контекст форматирования. Значение `display` блочное (например, `display: inline` работает как `block`).

## Примеры

### Простой fieldset

Этот пример показывает простой `<fieldset>` с `<legend>` и единственным элементом управления внутри.

```html
<form action="#">
  <fieldset>
    <legend>Simple fieldset</legend>
    <input type="radio" id="radio" />
    <label for="radio">Spirit of radio</label>
  </fieldset>
</form>
```

{{ EmbedLiveSample('Простой_fieldset', '100%', '80') }}

### Отключённый fieldset

Этот пример показывает отключённый `<fieldset>` с двумя элементами управления внутри.

```html
<form action="#">
  <fieldset disabled>
    <legend>Disabled fieldset</legend>
    <div>
      <label for="name">Name: </label>
      <input type="text" id="name" value="Chris" />
    </div>
    <div>
      <label for="pwd">Archetype: </label>
      <input type="password" id="pwd" value="Wookie" />
    </div>
  </fieldset>
</form>
```

{{ EmbedLiveSample('Отключённый_fieldset', '100%', '110') }}

## Техническая сводка

| [Категории контента](/ru/docs/HTML/Content_categories) | [Основной поток](/ru/docs/Web/Guide/HTML/Content_categories#%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9_%D0%BF%D0%BE%D1%82%D0%BE%D0%BA), [корневой раздел](/ru/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document), [listed](/ru/docs/HTML/Content_categories#form_listed), [контент форм](/ru/docs/Web/Guide/HTML/Content_categories#%D0%9A%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D1%82_%D1%84%D0%BE%D1%80%D0%BC), явный контент. |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                  | Необязательный элемент {{HTMLElement("legend")}}, следующий в основном потоке.                                                                                                                                                                                                                                                                                                                                                              |
| Пропуск тегов                                          | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Допустимые родители                                    | Любой элемент основного потока                                                                                                                                                                                                                                                                                                                                                                                                              |
| Допустимые ARIA-роли                                   | <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/group_role">group</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code>                                                                                                                                                                                                                                                          |
| DOM-интерфейс                                          | {{domxref("HTMLFieldSetElement")}}                                                                                                                                                                                                                                                                                                                                                                                                          |

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- Другие связанные элементы:

  - {{HTMLElement("form")}}
  - {{HTMLElement("legend")}}
  - {{HTMLElement("label")}}
  - {{HTMLElement("button")}}
  - {{HTMLElement("select")}}
  - {{HTMLElement("datalist")}}
  - {{HTMLElement("optgroup")}}
  - {{HTMLElement("option")}}
  - {{HTMLElement("textarea")}}
  - {{HTMLElement("keygen")}}
  - {{HTMLElement("input")}}
  - {{HTMLElement("output")}}
  - {{HTMLElement("progress")}}
  - {{HTMLElement("meter")}}
