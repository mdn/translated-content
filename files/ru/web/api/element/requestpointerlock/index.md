---
title: Element.requestPointerLock()
slug: Web/API/Element/requestPointerLock
---

{{ APIRef("DOM") }}{{ seeCompatTable }}

Метод **`Element.requestPointerLock()`** позволяет асинхронно запросить блокировку курсора для заданного элемента.

Чтобы отследить успех или ошибку запроса, необходимо обрабатывать события {{event("pointerlockchange")}} и {{event("pointerlockerror")}} на уровне {{domxref("Document")}}.

## Синтаксис

```
instanceOfElement.requestPointerLock();
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## See also

- {{ domxref("Document.pointerLockElement") }}
- {{ domxref("Document.exitPointerLock()") }}
- [Pointer Lock](/ru/docs/Web/API/Pointer_Lock_API)
