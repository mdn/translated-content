---
title: Document.currentScript
slug: Web/API/Document/currentScript
---

{{ApiRef("DOM")}}

Возвращает элемент {{HTMLElement("script")}}, который выполняется в данный момент.

## Синтаксис

```
var curScriptElement = document.currentScript;
```

## Пример

Этот пример проверяет, выполняется ли текущий скрипт асинхронно:

```js
if (document.currentScript.async) {
  console.log("Executing asynchronously");
} else {
  console.log("Executing synchronously");
}
```

[Посмотреть живые примеры](/samples/html/currentScript.html)

## Notes

Важно заметить, что элемент {{HTMLElement("script")}} не будет соответствовать текущему, если он выполняется внутри callback'a или event handler'a; он будет соответствовать элементу только при начальном выполнении скрипта.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTMLElement("script")}}
- {{domxref("element.onafterscriptexecute")}}
- {{domxref("element.onbeforescriptexecute")}}
