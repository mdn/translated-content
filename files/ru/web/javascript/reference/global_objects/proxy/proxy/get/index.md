---
title: handler.get()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
---

{{JSRef}}

Метод **`handler.get()`** является ловушкой для получения значения свойства.

{{InteractiveExample("JavaScript Demo: handler.get()", "taller")}}

```js interactive-example
const monster1 = {
  secret: "easily scared",
  eyeCount: 4,
};

const handler1 = {
  get: function (target, prop, receiver) {
    if (prop === "secret") {
      return `${target.secret.substring(0, 4)} ... shhhh!`;
    }
    return Reflect.get(...arguments);
  },
};

const proxy1 = new Proxy(monster1, handler1);

console.log(proxy1.eyeCount);
// Expected output: 4

console.log(proxy1.secret);
// Expected output: "easi ... shhhh!"
```

## Syntax

```
const p = new Proxy(target, {
  get: function(target, property, receiver) {
  }
});
```

### Параметры

Следующие параметры передаются методу `get()`. `this` привязан к обработчику.

- `target`
  - : Исходный объект, который проксируется.
- `property`
  - : Наименование или {{jsxref("Symbol")}} получаемого свойства.
- `receiver`
  - : Прокси или объект, наследуемый от прокси..

### Возвращаемое значение

Метод `get()` может возвращать значение.

## Описание

Метод **`handler.get()`** является ловушкой для получения значения свойства.

### Перехват

Эта ловушка может перехватывать следующие операции:

- Доступ к свойству: `proxy[foo]` and `proxy.bar`
- Доступ к наследованному свойству: `Object.create(proxy)[foo]`
- {{jsxref("Reflect.get()")}}

### Инварианты

Если следующие инварианты нарушены, то прокси выбросит {{jsxref("TypeError")}}:

- Значение, сообщаемое для свойства, должно быть таким же, как значение соответствующего свойства целевого объекта, если свойство целевого объекта является неперезаписываемым, не настраиваемым свойством собственных данных.
- Значение, сообщаемое для свойства, должно быть undefined, если соответствующее свойство целевого объекта не является настраиваемым собственным свойством доступа, которое `undefined` как и его атрибут `[[Get]]` attribute.

## Примеры

### Ловушка для получения значения свойства

Следующий код перехватывает получение значения свойства.

```js
const p = new Proxy(
  {},
  {
    get: function (target, property, receiver) {
      console.log("called: " + property);
      return 10;
    },
  },
);

console.log(p.a); // "called: a"
// 10
```

Следующий код нарушает инвариант.

```js
const obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: false,
  value: 10,
  writable: false,
});

const p = new Proxy(obj, {
  get: function (target, property) {
    return 20;
  },
});

p.a; // TypeError is thrown
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Reflect.get()")}}
