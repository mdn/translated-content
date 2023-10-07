---
title: Console.timeEnd
slug: Web/API/console/timeEnd
---

{{APIRef("Console API")}}

Останавливает таймер, который был запущен до этого через функцию {{domxref("console.time()")}}.

Более подробная документация и примеры есть в разделе [Таймеры](/ru/docs/DOM/console#Timers) документации к {{domxref("console")}}.

{{AvailableInWorkers}}

## Синтаксис

```js
console.timeEnd(label);
```

### Параметры

- `label`
  - : Метка таймера, который будет остановлен. Останавливается один раз. После остановки время отображается в [Веб-консоли](/ru/docs/Tools/Web_Console).

## Примеры

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff...");
console.timeEnd("answer time");
```

В примере выше мы получим время, которое потребовалось пользователю, чтобы закрыть первое диалоговое окно, а затем время, которое потребовалось пользователю, чтобы закрыть второе диалоговое окно:

![timerresult.png](timer_output.png)

Обратите внимание, что метка таймера отображается как при вызове `timeLog()`, так и завершении таймера. Кроме того, вызов timeEnd() выводит дополнительную информацию "timer ended", чтобы очевидно показать, что таймер больше не отслеживается.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Console.time")}}
- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
