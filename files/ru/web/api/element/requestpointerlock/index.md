---
title: Element.requestPointerLock()
slug: Web/API/Element/requestPointerLock
---

{{ APIRef("DOM") }}{{ seeCompatTable }}

Метод **`Element.requestPointerLock()`** позволяет асинхронно запросить блокировку курсора для заданного элемента.

Чтобы отследить успех или ошибку запроса, необходимо обрабатывать события [`pointerlockchange`](/ru/docs/Web/API/Document/pointerlockchange_event) и [`pointerlockerror`](/ru/docs/Web/API/Document/pointerlockerror_event) на уровне {{domxref("Document")}}.

## Синтаксис

```
instanceOfElement.requestPointerLock();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{ domxref("Document.pointerLockElement") }}
- {{ domxref("Document.exitPointerLock()") }}
- [Pointer Lock](/ru/docs/Web/API/Pointer_Lock_API)
