---
title: "Document: свойство currentScript"
slug: Web/API/Document/currentScript
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("DOM")}}

Свойство **`Document.currentScript`** возвращает элементе {{HTMLElement("script")}} скрипт которого в данный момент обрабатывается и [не является модулем JavaScript](https://github.com/whatwg/html/issues/997).
Для модулей необходимо использовать [`import.meta`](/ru/docs/Web/JavaScript/Reference/Operators/import.meta).

Важно отметить, что это свойство не будет содержать ссылку на элемент {{HTMLElement("script")}}, если код в скрипте вызывается как обратный вызов или обработчик событий. Ссылка на элемент будет только во время его первоначальной обработки.

## Значение

{{domxref("HTMLScriptElement")}} или null.

## Примеры

Этот пример проверяет, выполняется ли скрипт асинхронно:

```js
if (document.currentScript.async) {
  console.log("Выполняется асинхронно");
} else {
  console.log("Выполняется синхронно");
}
```

[Посмотреть живые примеры](https://mdn.dev/archives/media/samples/html/currentScript.html)

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [`import.meta`](/ru/docs/Web/JavaScript/Reference/Operators/import.meta)
- {{HTMLElement("script")}}
- Событие {{DOMxRef("document.afterscriptexecute_event", "afterscriptexecute")}} интерфейса `Document`
- Событие {{DOMxRef("document.beforescriptexecute_event", "beforescriptexecute")}} интерфейса `Document`
