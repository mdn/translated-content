---
title: WorkerGlobalScope.importScripts()
slug: Web/API/WorkerGlobalScope/importScripts
---

{{APIRef("Web Workers API")}}

Метод **`importScripts()`** интерфейса {{domxref("WorkerGlobalScope")}} синхронно импортирует один или несколько скриптов, добавляя их в область видимости сервис-воркера.

## Синтаксис

```js
self.importScripts('foo.js');
self.importScripts('foo.js', 'bar.js', ...);
```

### Параметры

Разделённый запятыми объект {{domxref("DOMString")}} скриптов, которые должны быть импортированы. Пути к скриптам указываются относительно URL HTML документа.

### Возвращаемое значение

_Нет._

### Выбрасываемые исключения

| Исключение     | Описание                                                                    |
| -------------- | --------------------------------------------------------------------------- |
| `NetworkError` | Добавленные скрипты имеют неверные MIME тип (то есть не `text/javascript`). |

## Пример

Если вы хотите использовать некоторую функциональность, определённую файлом `foo.js`, необходимо сделать следующее:

```js
importScripts("foo.js");
```

`importScripts()` и `self.importScripts()` по сути эквивалентны — и то и другое вызывает функцию `importScripts()` в области видимости воркера.

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите Также

{{domxref("WorkerGlobalScope")}}
