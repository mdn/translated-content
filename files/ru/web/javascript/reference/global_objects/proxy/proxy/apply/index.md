---
title: handler.apply()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
---

{{JSRef}}

Метод **`handler.apply()`** является ловушкой для вызова функции.

{{InteractiveExample("JavaScript Demo: handler.apply()", "taller")}}

```js interactive-example
function sum(a, b) {
  return a + b;
}

const handler = {
  apply: function (target, thisArg, argumentsList) {
    console.log(`Calculate sum: ${argumentsList}`);
    // Expected output: "Calculate sum: 1,2"

    return target(argumentsList[0], argumentsList[1]) * 10;
  },
};

const proxy1 = new Proxy(sum, handler);

console.log(sum(1, 2));
// Expected output: 3
console.log(proxy1(1, 2));
// Expected output: 30
```

## Синтаксис

```
const p = new Proxy(target, {
  apply: function(target, thisArg, argumentsList) {
  }
});
```

### Параметры

Методу `apply()` передаются следующие параметры. `this` связан с объектом-обработчиком.

- `target`
  - : Исходный объект.
- `thisArg`
  - : Аргумент `this` для вызова.
- `argumentsList`
  - : Список аргументов для вызова.

### Возврат значения

Метод `apply()` может возвращать значение.

## Описание

Метод **`handler.apply()`** является ловушкой для вызова функции.

### Перехват

Ловушка может перехватывать следующие операции:

- `proxy(...args)`
- {{jsxref("Function.prototype.apply()")}} и {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}

### Инварианты

Если следующие инварианты нарушены, то прокси выбросит {{jsxref("TypeError")}}.

Исходный объект `target` должен быть самовызываемым. То есть, это должна быть функция-объект.

## Примеры

### Ловушка для вызова функции

Следующий код ловит вызов функции.

```js
const p = new Proxy(function () {}, {
  apply: function (target, thisArg, argumentsList) {
    console.log("called: " + argumentsList.join(", "));
    return argumentsList[0] + argumentsList[1] + argumentsList[2];
  },
});

console.log(p(1, 2, 3)); // "called: 1, 2, 3"
// 6
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}
