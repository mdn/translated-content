---
title: Console.trace()
slug: Web/API/console/trace_static
---

{{APIRef("Console API")}}

Выводит стэк трэйс в [Веб Консоль](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html).

{{AvailableInWorkers}}

Посмотрите [Стэк трэйсы](/ru/docs/Web/API/console#stack_traces) в документации {{domxref("console")}} с деталями и примерами.

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

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Документация Opera Dragonfly: Консоль](https://www.opera.com/dragonfly/documentation/console/)
