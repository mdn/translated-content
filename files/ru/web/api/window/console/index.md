---
title: Window.console
slug: Web/API/Window/console
---

{{ APIRef }}

Свойство **`window.console`** даёт доступ к интерфейсу {{domxref("Console")}}, предоставляющий методы для вывода информации в консоль браузера. Данные методы предназначены для отладки приложения, и не должны использоваться конечными пользователями.

## Синтаксис

```
var consoleObj = window.console;
```

## Примеры

### Вывод текста в консоль

Первый пример просто выведет текст в консоль:

```js
console.log("An error occurred while loading the content");
```

Следующий пример выведет объект в консоль, с возможностью раскрытия отдельных полей:

```js
console.dir(someObject);
```

Примеры можно посмотреть по ссылке: [Usage](/ru/docs/Web/API/console#использование)

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
