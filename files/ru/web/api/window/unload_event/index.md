---
title: WindowEventHandlers.onunload
slug: Web/API/Window/unload_event
---

{{APIRef("HTML DOM")}}

## Описание

Событие `unload` возникает когда window выгружает своё содержимое и ресурсы. Удаление ресурсов происходит _после_ возникновения события `unload`.

## Синтаксис

```
window.onunload = funcRef;
```

- `funcRef` ссылка на функцию.

## Примечание

Using this event handler in your page prevents Firefox 1.5 from caching the page in the in-memory bfcache. Смотрите [Использование кеширования в Firefox 1.5](/En/Using_Firefox_1.5_caching) для получения более детальной информации.

Браузеры, оснащённые блокировщиками всплывающих окон будут игнорировать все вызовы метода `window.open()` внутри функции обработчика события `onunload`.

You _can_ and _should_ handle this event through {{domxref("EventTarget.addEventListener","window.addEventListener()")}} and the {{event("unload")}} event. More documentation is available there.

## Спецификации

{{Specifications}}

### Поддержка браузерами

{{Compat}}
