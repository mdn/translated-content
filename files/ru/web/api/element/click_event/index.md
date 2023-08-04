---
title: GlobalEventHandlers.onclick
slug: Web/API/Element/click_event
---

{{ ApiRef("HTML DOM") }}

Свойство **onclick** возвращает обработчик события `click` на текущем элементе.

> **Примечание:** При использовании обработчика события `click` для вызова любого действия, убедитесь, что событие `keydown` имеет такое же действие. Это нужно для того, чтобы пользователи, которые не используют мышь или тачскрин могли использовать то же действие.

## Синтаксис

```
element.onclick = functionRef;
```

где _functionRef_ это функция - зачастую это имя функции, которая объявлена где-то в другом месте или же _функциональное выражение_. См. "[JavaScript Guide:Functions](/ru/docs/JavaScript/Guide/Functions)".

Единственный аргумент, переданный в определённую функцию обработчик события это {{domxref("MouseEvent")}} объект. `this` внутри обработчика будет указывать на элемент, на котором было вызвано событие.

## Пример

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>onclick event example</title>
    <script>
      function initElement() {
        var p = document.getElementById("foo");
        // NOTE: showAlert(); или showAlert(param); так НЕ сработает.
        // Нужно использовать ссылку на функцию, но не вызов функции.
        p.onclick = showAlert;
      }

      function showAlert(event) {
        alert("onclick Event detected!");
      }
    </script>
    <style>
      #foo {
        border: solid blue 2px;
      }
    </style>
  </head>
  <body onload="initElement();">
    <span id="foo">My Event Element</span>
    <p>click on the above element.</p>
  </body>
</html>
```

Или же вы можете использовать анонимную функцию, как здесь:

```js
p.onclick = function (event) {
  alert("moot!");
};
```

## Примечания

Событие `click` возникает, когда пользователь кликает на элемент. Событие `click` возникнет после событий `mousedown` и `mouseup`.

С данным свойством только один обработчик события `click` может быть назначен объекту. Возможно, вместо данного метода, вам стоит обратить внимание на метод {{domxref("EventTarget.addEventListener()")}}, т.к. он более гибкий и является частью спецификации DOM Events.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{event("click")}} event
- Related event handlers

  - {{domxref("GlobalEventHandlers.onauxclick")}}
  - {{domxref("GlobalEventHandlers.ondblclick")}}
