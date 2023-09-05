---
title: AbortSignal.aborted
slug: Web/API/AbortSignal/aborted
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Свойство **`aborted`** только для чтения, оно возвращает {{domxref("Boolean")}}, который указывает прерван(`true`) DOM запрос(ы), с которым связан сигнал, или нет(`false`).

## Синтаксис

```js
var isAborted = abortSignal.aborted;
```

### Значение

{{domxref("Boolean")}}

## Примеры

В следующем фрагменте мы создаём новый объект {{domxref("AbortController")}}, и получаем его {{domxref("AbortSignal")}} (доступно в свойстве `signal`). Позже мы проверяем, был ли прерван сигнал, используя свойство `aborted`, и выводим соответствующее сообщение в консоль.

```js
var controller = new AbortController();
var signal = controller.signal;

// ...

signal.aborted
  ? console.log("Запрос был отменён")
  : console.log("Запрос не отменён");
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Fetch API](/ru/docs/Web/API/Fetch_API)
