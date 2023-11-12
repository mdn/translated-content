---
title: 'TypeError: "x" is read-only(Ошибка Типа: "x" только для чтения)'
slug: Web/JavaScript/Reference/Errors/Read-only
---

{{jsSidebar("Errors")}}

## Сообщения

```
TypeError: назначение свойств только для чтения не допускается в строгом режиме (Edge)
TypeError: "x" доступен только для чтения (Firefox)
TypeError: 0 доступен только для чтения (Firefox)
TypeError: не удаётся назначить только для чтения свойство "x" из #<объект> (Chrome)
TypeError: не удаётся назначить только для чтения свойство '0' [массив объектов] (Chrome)
```

## Тип ошибки

{{jsxref("TypeError")}}

## Что пошло не так?

Назначенное свойство глобальной переменной или объекта является свойством только для чтения. (Технически это свойство данных, недоступное для записи.)

Эта ошибка возникает только в коде строгого режима. В нестрогом коде назначение игнорируется.

## Примеры

### недействительные кейсы

Свойства только для чтения не очень распространены, но их можно создать с помощью {{jsxref("Object.defineProperty()")}} или {{jsxref("Object.freeze()")}}.

```js example-bad
"use strict";
var obj = Object.freeze({ name: "Elsa", score: 157 });
obj.score = 0; // TypeError

("use strict");
Object.defineProperty(this, "LUNG_COUNT", { value: 2, writable: false });
LUNG_COUNT = 3; // TypeError

("use strict");
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray[0]++; // TypeError
```

В JavaScript также встроено несколько свойств, доступных только для чтения. Возможно, вы пытались переопределить математическую константу.

```js example-bad
"use strict";
Math.PI = 4; // TypeError
```

Прости, ты не можешь этого сделать.

Глобальная переменная undefined также доступна только для чтения, поэтому вы не можете заставить замолчать печально известную ошибку "undefined is not a function:

```js example-bad
"use strict";
undefined = function () {}; // TypeError: "undefined" доступен только для чтения
```

### Правильные кейсы

```js example-good
"use strict";
var obj = Object.freeze({ name: "Score", points: 157 });
obj = { name: obj.name, points: 0 }; // замена его на новый работающий объект

("use strict");
var LUNG_COUNT = 2; // "var` работает, потому что он не только для чтения
LUNG_COUNT = 3; // ok (анатомически маловероятно, хотя)
```

## Смотрите также

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.freeze()")}}
