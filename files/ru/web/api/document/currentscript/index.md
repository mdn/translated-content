---
title: "Document: свойство currentScript"
slug: Web/API/Document/currentScript
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("DOM")}}

Свойство **`Document.currentScript`** возвращает элемент {{HTMLElement("script")}}, код которого в данный момент выполняется и [не является модулем JavaScript](https://github.com/whatwg/html/issues/997).
Для модулей необходимо использовать [`import.meta`](/ru/docs/Web/JavaScript/Reference/Operators/import.meta).

Важно отметить, что ссылка на элемент {{HTMLElement("script")}} будет присутствовать только во время первоначального исполнения скрипта. Иными словами, если код в скрипте вызывается как функция обратного вызова или обработчик события, то `Document.currentScript` будет равен `null`.

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
