---
title: Event.defaultPrevented
slug: Web/API/Event/defaultPrevented
---

{{ APIRef("DOM") }}

## Описание

Возвращает boolean-значение, информирующее о том, был ли вызван {{ domxref("event.preventDefault()") }} в текущем обработчике события.

> [!NOTE]
> Используйте это свойство вместо `устаревшего метода getPreventDefault()` (смотри [Firefox bug 691151](https://bugzil.la/691151)).

## Синтаксис

```js
var defaultWasPrevented = event.defaultPrevented;
```

## Пример

```
 if (e.defaultPrevented) {
   /* по умолчанию не выполнится */
 }
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
