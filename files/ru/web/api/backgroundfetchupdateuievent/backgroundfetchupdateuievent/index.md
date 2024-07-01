---
title: BackgroundFetchUpdateUIEvent()
slug: Web/API/BackgroundFetchUpdateUIEvent/BackgroundFetchUpdateUIEvent
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Конструктор **`BackgroundFetchUpdateUIEvent()`** создаёт новый объект {{domxref("BackgroundFetchUpdateUIEvent")}}. Этот конструктор обычно не используется, так как браузер сам создаёт эти объекты и предоставляет их для колбэков фонового запроса.

## Синтаксис

```js-nolint
new BackgroundFetchEvent(type, options)
```

### Параметры

- `type`
  - : Строка с именем события.
    Эта строка чувствительна к регистру и браузеры устанавливают её значение в `backgroundfetchsuccess` или `backgroundfetchfail`.
- `options`
  - : Объект, который , _в дополнение к свойствам, определённым в{{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}}_, имеет следующие свойства:
    - `registration`
      - : Объект {{domxref("BackgroundFetchRegistration")}}.

### Возвращаемое значение

Новый объект {{domxref("BackgroundFetchUpdateUIEvent")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
