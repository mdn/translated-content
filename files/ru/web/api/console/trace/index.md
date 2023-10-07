---
title: Console.trace()
slug: Web/API/console/trace
---

{{APIRef("Console API")}}

Выводит стэк трэйс в [Веб Консоль](/ru/docs/Tools/Web_Console).

{{AvailableInWorkers}}

Посмотрите [Стэк трэйсы](/ru/docs/Web/API/console#Stack_traces) в документации {{domxref("console")}} с деталями и примерами.

## Синтаксис

```
console.trace();
```

## Пример

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

В консоли следующий трэйс будет отображён так:

```
bar
foo
<anonymous>
```

## Спецификация

{{Specifications}}

## Браузерная совместимость

{{Compat}}

## Смотрите также

- [Документация Opera Dragonfly: Консоль](http://www.opera.com/dragonfly/documentation/console/)
