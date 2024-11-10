---
title: "console: статический метод group()"
slug: Web/API/console/group_static
l10n:
  sourceCommit: c367939020b2cbd60da7bd56a14670659d5e9491
---

{{APIRef("Console API")}}

Статический метод **`console.group()`** создаёт новую группу сообщений в выводе [веб-консоли](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html). После вызова последующие сообщения, выводимые в консоль, будут иметь дополнительный отступ, до тех пор пока не будет вызван метод {{domxref("console/groupend_static", "console.groupEnd()")}}.

{{AvailableInWorkers}}

## Синтаксис

```js-nolint
group()
group(label)
```

## Параметры

- `label` {{optional_inline}}
  - : Заголовок группы.

### Возвращаемое значение

Нет ({{jsxref("undefined")}}).

## Примеры

Использование групп помогает упорядочить вывод в консоль благодаря визуальной компоновке связанных сообщений. Чтобы создать новый блок нужно вызвать `console.group()`. Метод `console.groupCollapsed()` работает аналогичным образом, но выведенная группа будет свёрнута до тех пор, пока не будет развёрнута по клику.

Чтобы прекратить вывод в группу, требуется вызвать `console.groupEnd()`. Например, следующий код:

```js
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");
```

выведет следующий результат:

![Скриншот вложенных сообщений в консоли.](nesting.png)

Для дополнительной информации смотрите [Использование групп в консоли](/ru/docs/Web/API/console#using_groups_in_the_console) в документации {{domxref("console")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("console/groupEnd_static", "console.groupEnd()")}}
- {{domxref("console/groupCollapsed_static", "console.groupCollapsed()")}}
- [Документация Microsoft Edge: `console.group()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#group)
- [Документация Node.JS: `console.group()`](https://nodejs.org/docs/latest/api/console.html#consolegrouplabel)
- [Документация Google Chrome: `console.group()`](https://developer.chrome.com/docs/devtools/console/api/#group)
