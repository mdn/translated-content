---
title: document.createElement
slug: Web/API/Document/createElement
---

{{ ApiRef() }}

### Общая информация

В HTML-документах создаёт элемент c тем тегом, что указан в аргументе или `HTMLUnknownElement`, если имя тега не распознаётся.

В XUL-документах создаёт указанный в аргументе элемент XUL.

В остальных случаях создаёт элемент с нулевым _NamespaceURI_.

### Параметры

```
var element = document.createElement(tagName, [options]);
```

- `element` — созданный объект [элемента](/ru/docs/Web/API/Element).
- `tagName` — строка, указывающая элемент какого типа должен быть создан. [nodeName](/ru/DOM/element.nodeName) создаётся и инициализируется со значением `tagName`.
- `options` — необязательный параметр, объект `ElementCreationOptions`, который может содержать только поле `is`, указывающее имя пользовательского элемента, созданного с помощью `customElements.define()` (см. [Веб-компоненты](/ru/docs/Web/Web_Components)).

### Пример

Данный пример создаёт новый элемент `<div>` и вставляет его перед элементом с идентификатором `org_div1`:

```html
<div><h1>Привет!</h1></div>
<div id="org_div1">Текст выше сгенерирован автоматически.</div>
```

```js
document.body.onload = addElement;
var my_div = (newDiv = null);

function addElement() {
  // Создаём новый элемент div
  // и добавляем в него немного контента

  var newDiv = document.createElement("div");
  newDiv.innerHTML = "<h1>Привет!</h1>";

  // Добавляем только что созданный элемент в дерево DOM

  my_div = document.getElementById("org_div1");
  document.body.insertBefore(newDiv, my_div);
}
```

### Примечания

Если существуют атрибуты со значениями по умолчанию, атрибуты узлов предоставляющие их создаются автоматически и применяются к элементу.

Для создания элементов с заданным пространством имён используйте метод [createElementNS](/ru/DOM/document.createElementNS).

Реализация `createElement` в Gecko не соответствует DOM спецификации для XUL и XHTML документов: `localName` и `namespaceURI` не устанавливаются в `null` в созданном документе. Смотрите {{ Bug(280692) }} для подробностей.

Для обратной совместимости с предыдущими версиями спецификации пользовательских элементов некоторые браузеры позволяют передавать здесь строку вместо объекта, где значением строки является имя тега пользовательского элемента.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
