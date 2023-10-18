---
title: "<template>: элемент шаблона контента"
slug: Web/HTML/Element/template
---

{{HTMLSidebar}}

[HTML](/ru/docs/Web/HTML)-элемент шаблона контента **`<template>`** — это механизм для отложенного создания клиентского контента, который не отображается во время загрузки страницы, но может быть инициализирован при помощи JavaScript.

Шаблон можно представить себе как фрагмент контента страницы, сохранённый для последующего использования в документе. Хотя парсер и обрабатывает содержимое элемента **`<template>`** во время загрузки страницы, он делает это, только чтобы убедиться в валидности содержимого, само содержимое при этом не отображается.

| [Категории контента](/ru/docs/Web/Guide/HTML/Content_categories) | [Метаданные](/ru/docs/Web/Guide/HTML/Content_categories#метаданные), [основной поток](/ru/docs/Web/Guide/HTML/Content_categories#основной_поток), [фразовый контент](/ru/docs/Web/Guide/HTML/Content_categories#phrasing_content), [элементы поддержки скриптов](/ru/docs/Web/Guide/HTML/Content_categories#элементы_поддержки_скриптов)                                                                                                                  |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимый контент                                               | Нет ограничений                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Пропуск тегов                                                    | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Допустимые родители                                              | Любые элементы, которые могут содержать [метаданные](/ru/docs/Web/Guide/HTML/Content_categories#метаданные), [фразовый контент](/ru/docs/Web/Guide/HTML/Content_categories#phrasing_content) или [элементы поддержки скриптов](/ru/docs/Web/Guide/HTML/Content_categories#элементы_поддержки_скриптов). Допускается вкладывать элемент в {{HTMLElement("colgroup")}}, у которого _отсутствует_ атрибут [`span`](/ru/docs/Web/HTML/Element/colgroup#span). |
| Неявные ARIA-роли                                                | [Нет соответствующей роли](https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role)                                                                                                                                                                                                                                                                                                                                                                    |
| Допустимые ARIA-роли                                             | Нет                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| DOM-интерфейс                                                    | {{domxref("HTMLTemplateElement")}}                                                                                                                                                                                                                                                                                                                                                                                                                        |

## Атрибуты

Элемент может иметь [общие атрибуты](/ru/docs/Web/HTML/Global_attributes).

Однако у `{{domxref("HTMLTemplateElement")}}` есть свойство `{{domxref("HTMLTemplateElement.content", "content")}}`, которое возвращает доступный только для чтения `{{domxref("DocumentFragment")}}`, содержащий DOM-поддерево шаблона. Обратите внимание, что прямое использование значения `{{domxref("HTMLTemplateElement.content", "content")}}` может привести к непредсказуемому поведению, см. раздел [ловушка `DocumentFragment`](#avoiding_documentfragment_pitfall) ниже.

## Примеры

Начнём с HTML.

```html
<table id="producttable">
  <thead>
    <tr>
      <td>UPC_Code</td>
      <td>Product_Name</td>
    </tr>
  </thead>
  <tbody>
    <!-- данные будут вставлены сюда -->
  </tbody>
</table>

<template id="productrow">
  <tr>
    <td class="record"></td>
    <td></td>
  </tr>
</template>
```

Для начала у нас есть таблица, в которую мы собираемся вставить контент с помощью Javascript. За таблицей следует шаблон, который описывает структуру HTML-фрагмента — строку таблицы.

Теперь, когда таблица была создана, а шаблон определён, используем JavaScript, чтобы вставить строки в таблицу. Каждая строка будет строиться по шаблону.

```js
// Убеждаемся, что браузер поддерживает тег <template>,
// проверив наличие атрибута content у элемента template.
if ("content" in document.createElement("template")) {
  // Находим элемент tbody таблицы
  // и шаблон строки
  var tbody = document.querySelector("tbody");
  var template = document.querySelector("#productrow");

  // Клонируем новую строку и вставляем её в таблицу
  var clone = template.content.cloneNode(true);
  var td = clone.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  tbody.appendChild(clone);

  // Клонируем новую строку ещё раз и вставляем её в таблицу
  var clone2 = template.content.cloneNode(true);
  td = clone2.querySelectorAll("td");
  td[0].textContent = "0384928528";
  td[1].textContent = "Acme Kidney Beans 2";

  tbody.appendChild(clone2);
} else {
  // Иной способ заполнить таблицу, потому что
  // HTML-элемент template не поддерживается.
}
```

Как результат имеем HTML-таблицу с двумя новыми строками, добавленными с помощью JavaScript:

```css hidden
table {
  background: #000;
}
table td {
  background: #fff;
}
```

{{EmbedLiveSample("Examples", 500, 120)}}

## Ловушка `DocumentFragment`

{{domxref("DocumentFragment")}} не подходит в качестве целевого объекта для многих событий, поэтому предпочтительнее клонировать или ссылаться на элементы внутри него.

Рассмотрим следующие HTML-разметку и JavaScript-код:

### HTML

```html
<div id="container"></div>

<template id="template">
  <div>Click me</div>
</template>
```

### JavaScript

```js
const container = document.getElementById("container");
const template = document.getElementById("template");

function clickHandler(event) {
  event.target.append(" — Clicked this div");
}

const firstClone = template.content.cloneNode(true);
firstClone.addEventListener("click", clickHandler);
container.appendChild(firstClone);

const secondClone = template.content.firstElementChild.cloneNode(true);
secondClone.addEventListener("click", clickHandler);
container.appendChild(secondClone);
```

### Результат

В переменной `firstClone` у нас экземпляр (клон) `DocumentFragment`, и хотя у нас получилось отрисовать его внутри контейнера, клик по нему не срабатывает. В переменной `secondClone` у нас экземпляр (клон) `{{domxref("HTMLDivElement")}}`, клик по которому работает как ожидается.

{{EmbedLiveSample('Avoiding_DocumentFragment_pitfall')}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Веб-компоненты: {{HTMLElement("slot")}} (и устаревший: {{HTMLElement("shadow")}})
- [Использование шаблонов и слотов](/ru/docs/Web/Web_Components/Using_templates_and_slots)
