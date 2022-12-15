---
title: Window.console
slug: Web/API/Window/console
translation_of: Web/API/Window/console
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

Примеры можно посмотреть по ссылке: {{SectionOnPage("/ru/docs/Web/API/Console", "Usage")}}

## Specifications

| Specification                        | Status                           | Comment             |
| ------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('Console API')}} | {{Spec2('Console API')}} | Initial definition. |

> **Примечание:** Currently there are many implementation differences among browsers, but work is being done to bring them together and make them more consistent with one another.
