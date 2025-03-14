---
title: X.prototype.y called on incompatible type
slug: Web/JavaScript/Reference/Errors/Called_on_incompatible_type
---

{{jsSidebar("Errors")}}

## Сообщение

```
TypeError: 'this' не является  Set объектом (EdgE)
TypeError: Function.prototype.toString вызывается несовместимый объект (Firefox)
TypeError: Function.prototype.bind вызывается несовместимая цель (Firefox)
TypeError: Метод Set.prototype.add called вызывается несовместимый приёмник undefined (Chrome)
TypeError: Bind должен вызываться для функции(Chrome)
```

## Тип ошибки

{{jsxref("TypeError")}}

## Что пошло не так?

При возникновении этой ошибки вызывается функция (для данного объекта) с типом this, не соответствующим типу, ожидаемому функцией.

Эта проблема может возникнуть при использовании {{jsxref("Function.prototype.call()")}} ил {{jsxref("Function.prototype.apply()")}} методы и предоставление аргумента this, который не имеет ожидаемого типа.

Эта проблема также может возникнуть при предоставлении функции (хранящейся в объекте) в качестве аргумента другой функции. В этом случае объект не будет целью this функции. Чтобы обойти эту проблему, необходимо либо предоставить лямбда-код, который выполняет вызов, либо использовать{{jsxref("Function.prototype.bind()")}} функция для принудительной передачи аргумента this ожидаемому объекту.

## Примеры

### Неправильные

```js example-bad
var mySet = new Set();
["bar", "baz"].forEach(mySet.add);
// mySet.add is a function, but "mySet" is not captured as this.

var myFun = function () {
  console.log(this);
};
["bar", "baz"].forEach(myFun.bind);
// myFun.bind is a function, but "myFun" is not captured as this.
```

### Правильные

```js example-good
var mySet = new Set();
["bar", "baz"].forEach(mySet.add.bind(mySet));
// This works due to binding "mySet" as this.

var myFun = function () {
  console.log(this);
};
["bar", "baz"].forEach((x) => myFun.bind(x));
// This works using the "bind" function. It creates a lambda forwarding the argument.
```

## Смотрите также

- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.bind()")}}
