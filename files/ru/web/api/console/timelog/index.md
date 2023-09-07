---
title: Console.timeLog()
slug: Web/API/console/timeLog
---

{{APIRef("Console API")}}Выводит в консоль текущее значение таймера, запущенного вызовом {{domxref("console.time()")}}.

Подробности и примеры смотрите в документации [Timers](/ru/docs/Web/API/console#Timers).

{{AvailableInWorkers}}

## Синтаксис

```
console.timeLog(label);
```

### Параметры

- `label`
  - : Имя таймера для вывода в консоль.

### Результат

Если параметр `label` опущен, выводит значение таймера по умолчанию:

```
default: 1042ms
```

Если в параметре `label` указано имя существующего таймера:

```
timer name: 1242ms
```

### Исключения

При отсутствии запущенного таймера по умолчанию `timeLog()` выводит предупреждение:

```
Timer “default” doesn’t exist.
```

При указании имени несуществующего таймера:

```
 Timer “timer name” doesn’t exist.
```

## Примеры

```js
console.time("answer time");
alert("Нажмите для продолжения");
console.timeLog("answer time");
alert("Делаем кучу другой работы...");
console.timeEnd("answer time");
```

Отчёт таймера начинается с момента вызова `console.time()`. Сначала выводится время от начала отсчёта до закрытия первого уведомления. Затем выводится время с начала отсчёта до закрытия второго уведомления:

![timerresult.png](console-timelog.png)

Обратите внимание, имя таймера печатается как при вызовах `timeLog()` , так и при завершении таймера.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
