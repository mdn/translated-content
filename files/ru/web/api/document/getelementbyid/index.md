---
title: document.getElementById()
slug: Web/API/Document/getElementById
---

{{ ApiRef("DOM") }}

Возвращает ссылку на элемент по его идентификатору ([ID](/ru/docs/DOM/element.id)); идентификатор является строкой, которая может быть использована для идентификации элемента; она может быть определена при помощи атрибута `id` в HTML или из скрипта.

## Синтаксис

```
element = document.getElementById(id);
```

### Параметры

- **`id`**
  - : чувствительная к регистру строка, являющаяся уникальным идентификатором искомого элемента.

### Возвращаемое значение

ссылка на объект типа {{domxref("Element")}} соответствующий указанному ID или `null`, если элемент с указанным ID не найден в документе.

## Пример

```html
<!doctype html>
<html>
  <head>
    <title>getElementById example</title>
    <script>
      function changeColor(newColor) {
        var elem = document.getElementById("para1");
        elem.style.color = newColor;
      }
    </script>
  </head>
  <body>
    <p id="para1">Some text here</p>
    <button onclick="changeColor('blue');">blue</button>
    <button onclick="changeColor('red');">red</button>
  </body>
</html>
```

## Замечания

Начинающим следует знать, что верхний регистр в части имени метода 'Id' _должен_ быть точным для корректного вызова функции; "getElementByID" будет _не корректно_, как бы естественно это ни казалось.

`Если элементы с указанным id отсутствуют`, функция вернёт null. Заметьте, что параметр id чувствителен к регистру, так `document.getElementById("Main")` вернёт `null` вместо элемента `<div id="main">`, потому что "M" и "m" различны для этого метода.

**Элементы вне документа** не ищутся `getElementById()`. При создании элемента и назначении ему ID, вам следует вставить элемент в дерево документа с помощью {{domxref("Node.insertBefore()")}} или подобным методом, до того как вы сможете получить к нему доступ при помощи `getElementById()`:

```js
var element = document.createElement("div");
element.id = "testqq";
var el = document.getElementById("testqq"); // el will be null!
```

**Не-HTML документы**. Релизация DOM должна содержать информацию, сообщающую о том, какие атрибуты являются идентификаторами. Атрибуты с именем "id" не являются идентификаторами только если это не указано в описании типа документа (DTD). Атрибут "id" определён в качестве идентификатора в общих случаях [XHTML](/ru/docs/XHTML), [XUL](/ru/docs/XUL), и других. От реализаций, которые не знают, какой атрибут является идентификатором, ожидается возврат null.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Document")}} ссылка для иных методов и свойств которые вы можете использовать для получения ссылок на иные элементы.
- {{domxref("Document.querySelector()")}} для выборки по таким запросам, как `'div.myclass'`
- [xml:id](/ru/docs/xml/xml:id) - имеет метод, позволяющий getElementById() получать «xml: id» в XML-документах (например, возвращаемые вызовами Ajax)
