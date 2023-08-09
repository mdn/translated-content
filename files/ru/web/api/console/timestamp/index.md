---
title: Console.timeStamp()
slug: Web/API/console/timeStamp
---

{{APIRef("Console API")}}{{Non-standard_header}}

Добавляет маркер в браузерные инструменты [Performance](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference) или [Waterfall](/ru/docs/Tools/Performance/Waterfall). Это помогает соотнести точку в вашем коде с другими записанными событиями.

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
