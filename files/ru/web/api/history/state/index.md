---
title: History.state
slug: Web/API/History/state
---

{{APIRef("History API")}}Свойство **`History.state`** возвращает значение последнего состояния стека истории (history stack). Этим способом можно проверить состояние не дожидаясь события {{event("popstate")}}.

## Синтаксис

```
const currentState = history.state
```

### Значение

Последнее состояние стека истории. Значение равно {{jsxref("null")}} до тех пор, пока не будет применён метод {{domxref("History.pushState","pushState()")}} или {{domxref("History.replaceState","replaceState()")}}.

## Примеры

Код, приведённый ниже, выводит в консоль значение `history.state` до и после применения метода {{domxref("History.pushState","pushState()")}}, который записывает значение в историю.

```js
// Выведет null потому что мы пока не изменяли стек истории
console.log(`History.state before pushState: ${history.state}`);

// Теперь запишем какое-нибудь значение в стек
history.pushState({ name: "Example" }, "pushState example", "page3.html");

// Выведет значение history.state, которое было записано в предыдущей строке
console.log(`History.state after pushState: ${history.state}`);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Working with the History API](/ru/docs/Web/API/History_API/Working_with_the_History_API)
