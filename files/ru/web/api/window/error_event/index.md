---
title: GlobalEventHandlers.onerror
slug: Web/API/Window/error_event
---

{{ ApiRef("HTML DOM") }}

Обработчик события для ошибок среды Javascript.

Обратите внимание, что некоторые/многие `error` не вызывают `window.onerror`, вы должны слушать их специально.

## Синтаксис

```
window.onerror = funcRef;
```

### Параметры

- `funcRef` ссылка на функцию. Когда функция возвращает `true`, блокируется вызов обработчика события по умолчанию. Параметры функции:

  - Сообщение ошибки (string)
  - Url, где произошла ошибка (string)
  - Номер строки, где произошла ошибка (number)
  - Номер столбца для строки, в которой произошла ошибка (number)
  - [Error Object](/ru/docs/Web/JavaScript/Reference/Global_Objects/Error) (object)

## Примеры

```js
// Пример 1:

// Предотвращает диалоги об ошибках, отображает какая это функция окна, это нормальное
// поведение - путём переопределения обработчика событий по умолчанию для событий об ошибках, которые
// переходят окну.
window.onerror = null;

// Пример 2:

var gOldOnError = window.onerror;
// Переопределить прошлый обработчик события.
window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
  if (gOldOnError)
    // Вызвать прошлый обработчик события.
    return gOldOnError(errorMsg, url, lineNumber);

  // Просто запустить обработчик события по умолчанию.
  return false;
};
```

## Спецификации

{{Specifications}}
