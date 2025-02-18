---
title: handler.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty
---

{{JSRef}}

Метод **`handler.deleteProperty()`** является "ловушкой" (функция-перехватчик) для оператора {{jsxref("Operators/delete", "delete")}}.

{{InteractiveExample("JavaScript Demo: handler.deleteProperty()", "taller")}}

```js interactive-example
const monster1 = {
  texture: "scaly",
};

const handler1 = {
  deleteProperty(target, prop) {
    if (prop in target) {
      delete target[prop];
      console.log(`property removed: ${prop}`);
      // Expected output: "property removed: texture"
    }
  },
};

console.log(monster1.texture);
// Expected output: "scaly"

const proxy1 = new Proxy(monster1, handler1);
delete proxy1.texture;

console.log(monster1.texture);
// Expected output: undefined
```

## Синтаксис

```js
var p = new Proxy(target, {
  deleteProperty: function (target, property) {},
});
```

### Параметры

Следующие параметры передаются в метод `deleteProperty`.

- `target`
  - : Целевой объект.
- `property`
  - : Имя или {{jsxref("Symbol")}} свойства, которое нужно удалить.

`this` в момент вызова ссылается на объект handler.

### Возвращаемое значение

Метод `deleteProperty` должен возвращать {{jsxref("Boolean")}}. Значение `true`, если свойство было успешно удалено, в противном случае `false`.

## Описание

Метод **`handler.deleteProperty()`** является "ловушкой" для оператора {{jsxref("Operators/delete", "delete")}}.

### Перехваты

Данная "ловушка" может перехватывать следующие операции:

- Удаление свойства: `delete proxy[foo]` and `delete proxy.foo`
- {{jsxref("Reflect.deleteProperty()")}}

### Инварианты

Если следующие инварианты нарушены, то прокси выдаст ошибку {{jsxref("TypeError")}}:

- Свойство не может быть удалено, если оно неконфигурируемое собственное свойство целевого объекта.

## Примеры

Следующий код перехватывает действие оператора {{jsxref("Operators/delete", "delete")}}.

```js
var p = new Proxy(
  {},
  {
    deleteProperty: function (target, prop) {
      if (prop in target) {
        delete target[prop];
        console.log("property removed: " + prop);
        return true;
      } else {
        console.log("property not found: " + prop);
        return false;
      }
    },
  },
);

var result;

p.a = 10;
console.log("a" in p); // true

result = delete p.a; // "property removed: a"
console.log(result); // true
console.log("a" in p); // false

result = delete p.a; // "property not found: a"
console.log(result); // false
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Operators/delete", "delete")}} operator
- {{jsxref("Reflect.deleteProperty()")}}
