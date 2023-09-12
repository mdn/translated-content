---
title: NavigatorID.taintEnabled()
slug: orphaned/Web/API/NavigatorID/taintEnabled
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Метод **`NavigatorID.taintEnabled()`** всегда возвращает `false`.

> **Примечание:** Taint был метод защиты используемый в JavaScript 1.2. Он давно был удалён; этот метод остаётся только для поддержания совместимости с очень старыми скриптами.

## Синтаксис

```
result = window.navigator.taintEnabled()
```

## Пример

```js
alert(window.navigator.taintEnabled());
// returns false
```

## Спецификации

| Спецификация                                                                                                                             | Статус                           | Комментарий          |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('HTML WHATWG', 'webappapis.html#dom-navigator-taintEnabled', 'NavigatorID.taintEnabled')}} | {{Spec2('HTML WHATWG')}} | Изначальное описание |

## Доступность в браузере

{{Compat("api.NavigatorID.taintEnabled")}}

## Смотрите также

- {{domxref("NavigatorID")}}
