---
title: performance.now()
slug: Web/API/Performance/now
---

{{APIRef("Navigation Timing")}}

## Краткое описание

Метод **`performance.now()`** возвращает временную метку {{domxref("DOMHighResTimeStamp")}}, измеряемую в миллисекундах, с точностью до одной тысячной миллисекунды.

Значение, представленное типом {{domxref("DOMHighResTimeStamp")}}, изменяется в зависимости от контекста. Стоит иметь ввиду следующее:

- в разделяемых или выделенных потоках выполнения, началом эпохи считается момент начала работы потока.
- вне потоков выполнения, или в выделенных потоках, созданных в контексте {{domxref("Window")}}, началом эпохи считается значение свойства {{domxref("PerformanceTiming.navigationStart")}}.
- в выделенных потоках выполнения, созданных из другого потока, началом эпохи устанавливается начало эпохи этого самого потока.

## Синтаксис

```
t = performance.now();
```

## Пример

```js
var t0 = performance.now();
doSomething();
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
```

В отличие от других временны́х типов данных, доступных в JavaScript (таких как [`Date.now`](/ru/docs/JavaScript/Reference/Global_Objects/Date/now)), метки времени, возвращённые из `performance.now(),` не ограничены кратностью в одну миллисекунду, а представляют значение времени как число с плавающей запятой, с точностью до микросекунд.

Также, в противоположность `Date.now`, значение, возвращаемое из `performance.now()`, всегда возрастает с постоянной скоростью, независимо от системного времени (которое может быть установлено вручную или изменено программами наподобие NTP).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [When milliseconds are not enough: performance.now()](http://updates.html5rocks.com/2012/08/When-milliseconds-are-not-enough-performance-now) от HTML5 Rocks.
