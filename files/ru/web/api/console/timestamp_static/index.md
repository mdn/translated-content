---
title: "console: статический метод timeStamp()"
slug: Web/API/console/timeStamp_static
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

Статический метод **`console.timeStamp()`** добавляет в браузерные инструменты измерения производительности ([Firefox](https://profiler.firefox.com/docs/#/), [Chrome](https://developer.chrome.com/docs/devtools/performance/reference)). Это позволяет сопоставить точку в коде с другими событиями, записанными на временной шкале, такими как события компоновки и отрисовки.

Дополнительно можно передать аргумент для обозначения отметки времени, и эта метка будет отображаться рядом с маркером.

{{AvailableInWorkers}}

## Синтаксис

```js-nolint
timeStamp(label)
```

### Параметры

- `label` {{Optional_Inline}}
  - : Название метки.

### Возвращаемое значение

Нет ({{jsxref("undefined")}}).

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("console/time_static", "console.time()")}}
- {{domxref("console/timeLog_static", "console.timeLog()")}}
- {{domxref("console/timeEnd_static", "console.timeEnd()")}}
- [Adding markers with the console API](https://web.archive.org/web/20211207010020/https://firefox-source-docs.mozilla.org/devtools-user/performance/waterfall/index.html#adding-markers-with-the-console-api)
