---
title: handler.apply()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
---

{{JSRef}}

Метод **`handler.apply()`** является ловушкой для вызова функции.

{{EmbedInteractiveExample("pages/js/proxyhandler-apply.html", "taller")}}

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

{{Compat("javascript.builtins.Proxy.handler.apply")}}

## Смотрите также

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}
