---
title: "console: статический метод dir()"
slug: Web/API/console/dir_static
l10n:
  sourceCommit: ca4eca184b32202ce9fd80b29e1c2a68763b7f92
---

{{APIRef("Console API")}}

Статический метод **`console.dir()`** отображает интерактивный список свойств указанного JavaScript объекта. Вывод представлен в виде иерархического списка с возможностью просмотра содержимого дочерних объектов.

Другими словами, `console.dir()` предоставляет возможность увидеть в консоли все свойства JavaScript объекта.

{{AvailableInWorkers}}

![](console-dir.png)

## Синтаксис

```js-nolint
dir(object)
```

## Параметры

- `object`
  - : JavaScript-объект, свойства которого нужно вывести.

### Возвращаемое значение

Нет ({{jsxref("undefined")}}).

### Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Документация Microsoft Edge: `console.dir()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#dir)
- [Документация Node.JS: `console.dir()`](https://nodejs.org/docs/latest/api/console.html#consoledirobj-options)
- [Документация Google Chrome: `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
