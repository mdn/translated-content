---
title: GlobalEventHandlers.onload
slug: conflicting/Web/API/Window/load_event
original_slug: Web/API/GlobalEventHandlers/onload
---

{{ ApiRef("HTML DOM") }}

Обработчик для события загрузки объекта {{ domxref("window") }}.

## Синтаксис

```
window.onload = funcRef;
```

- `funcRef` функция обработчик события будет вызвана, когда произойдёт событие загрузки окна.

## Примеры

```js
window.onload = function() {
  init();
  doSomethingElse();
};
```

```html
<!doctype html>
<html>
  <head>
    <title>onload test</title>
    <script>
      function load() {
        alert("Событие загрузки поймано!");
      }
      window.onload = load;
    </script>
  </head>
  <body>
    <p>Событие загрузки произойдёт, когда документ будет загружен!</p>
  </body>
</html>
```

## Примечания

Событие загрузки возникают в конце процесса загрузки документа. В этот момент все объекты документа находятся в DOM, и все картинки, скрипты, фреймы, ссылки загружены.

Есть также [Gecko](/en/Gecko-Specific_DOM_Events "en/Gecko-Specific_DOM_Events") события как `DOMContentLoaded` и `DOMFrameContentLoaded` (которые могут быть навешены с помощью {{ domxref("EventTarget.addEventListener()") }}) которые возникают после того как DOM для страницы будет собран, но не ждут, когда другие ресурсы будут загружены.

## Спецификации

Этот обработчик события указан в стандарте [HTML](http://www.whatwg.org/html/#handler-window-onload).

## Смотрите также

- `DOMContentLoaded` событие в [Listening to events: Simple DOM events](/En/Listening_to_events#Simple_DOM.c2.a0events "En/Listening to events#Simple DOM.c2.a0events")
