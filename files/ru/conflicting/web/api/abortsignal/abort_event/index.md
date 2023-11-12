---
title: AbortSignal.onabort
slug: conflicting/Web/API/AbortSignal/abort_event
original_slug: Web/API/AbortSignal/onabort
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Свойство **`onabort`** интерфейса {{domxref("AbortSignal")}} является обработчиком события {{event("abort_(cancellable_fetch)", "abort")}} и вызывается при его срабатывании, т.е. когда fetch запрос(ы), с которым связан сигнал, был отменён.

## Синтаксис

```js
abortSignal.onabort = function() { ... };
```

## Примеры

В следующем фрагменте мы создаём новый объект {{domxref("AbortController")}}, и получаем его {{domxref("AbortSignal")}} (доступно в свойстве `signal`). Позже с помощью свойства onabort мы проверяем, был ли прерван сигнал, и выводим соответствующее сообщение в консоль.

```js
var controller = new AbortController();
var signal = controller.signal;

signal.onabort = function() {
  console.log('Запрос прерван');
};
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Fetch API](/ru/docs/Web/API/Fetch_API)
