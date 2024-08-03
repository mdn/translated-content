---
title: Console.timeStamp()
slug: Web/API/console/timestamp_static
---

{{APIRef("Console API")}}{{Non-standard_header}}

Добавляет маркер в браузерные инструменты измерения производительности ([Firefox](https://profiler.firefox.com/docs/#/), [Chrome](https://developer.chrome.com/docs/devtools/performance/reference)). Это помогает соотнести точку в вашем коде с другими записанными событиями.

{{AvailableInWorkers}}

## Синтаксис

```
console.timeStamp(label);
```

## Параметры

- `label`
  - : Название метки. Необязательный параметр.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Console.time()")}}
- {{domxref("Console.timeEnd()")}}
- [Adding timestamps to the Waterfall](/ru/docs/Tools/Performance/Waterfall#Timestamp_markers)
