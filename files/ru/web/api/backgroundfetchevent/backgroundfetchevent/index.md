---
title: BackgroundFetchEvent()
slug: Web/API/BackgroundFetchEvent/BackgroundFetchEvent
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

Конструктор **`BackgroundFetchEvent()`** создаёт новый объект {{domxref("BackgroundFetchEvent")}}. Этот конструктор обычно не используется, так как браузер создаёт такие объекты самостоятельно и, затем, передаёт их для колбэков событий фоновых запросов.

## Синтаксис

```js
new BackgroundFetchEvent(type, options);
```

### Параметры

- `type`
  - : Строка с именем события.
    Он чувствителен к регистру, и браузеры устанавливают его как `backgroundfetchabort` или `backgroundfetchclick`.
- `options`
  - : Объект, который, _в дополнение к свойствам, определённым в {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}}_, имеет следующие свойства:
    - `registration`
      - : Объект {{domxref("BackgroundFetchRegistration")}}.

### Возвращаемое значение

Новый объект {{domxref("BackgroundFetchEvent")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
