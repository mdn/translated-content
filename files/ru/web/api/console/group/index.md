---
title: Console.group()
slug: Web/API/console/group
---

{{APIRef("Console API")}}Создаёт новую группу сообщений в [веб-консоли](/ru/docs/Tools/Web_Console). После вызова последующие сообщения, выводимые в консоль, будут иметь дополнительный уровень отступа, до тех пор пока не будет вызван метод {{domxref("console.groupEnd()")}}.

{{AvailableInWorkers}}

## Синтаксис

```
console.group([label]);
```

## Аргументы

- `label`
  - : Опциональный заголовок группы. (Протестировано в Chrome 59). Не работает с `console.groupEnd()`.

### Использование в веб-консоли

Использование групп помогает упорядочить вывод в консоль благодаря визуальной группировке связанных сообщений. Чтобы начать новый блок нужно вызвать `console.group()`. Метод `console.groupCollapsed()` работает аналогичным образом, но выведенная группа будет свёрнута до тех пор, пока не будет развёрнута по клику.

**Примечание:** Начиная с 9 по 51 версию Gecko, метод `groupCollapsed()` работал как метод `group()`. Свёрнутые группы поддерживаются с версии Gecko 52. См. {{bug("1088360")}}.

Чтобы прекратить вывод в группу, требуется вызвать `console.groupEnd()`. К примеру, следующий код:

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

![A screenshot of messages nested in the console output.](/@api/deki/files/6082/=nesting.png)

Для дополнительной информации смотрите [Использование групп в консоли](/ru/docs/Web/API/console#Using_groups_in_the_console).

## Спецификация

{{Specifications}}

## Поддержка в браузерах

{{Compat}}

## Смотрите также

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
