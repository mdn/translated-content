---
title: Error.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
---

{{JSRef("Global_Objects", "Error", "EvalError,InternalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError")}}

## Сводка

Метод **`toString()`** возвращает строку, представляющую указанный объект {{jsxref("Error")}}.

## Синтаксис

```
e.toString()
```

## Описание

Объект {{jsxref("Error")}} переопределяет метод {{jsxref("Object.prototype.toString()")}}, унаследованный всеми объектами. Его семантика следующая (предполагается, что объекты {{jsxref("Object")}} и {{jsxref("String")}} имеют свои изначальные значения):

```js
Error.prototype.toString = function () {
  "use strict";

  var obj = Object(this);
  if (obj !== this) {
    throw new TypeError();
  }

  var name = this.name;
  name = name === undefined ? "Error" : String(name);

  var msg = this.message;
  msg = msg === undefined ? "" : String(msg);

  if (name === "") {
    return msg;
  }
  if (msg === "") {
    return name;
  }

  return name + ": " + msg;
};
```

## Примеры

```js
var e = new Error("непоправимая ошибка");
print(e.toString()); // 'Error: непоправимая ошибка'

e.name = undefined;
print(e.toString()); // 'Error: непоправимая ошибка'

e.name = "";
print(e.toString()); // 'непоправимая ошибка'

e.message = undefined;
print(e.toString()); // 'Error'

e.name = "привет";
print(e.toString()); // 'привет'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error.prototype.toSource()")}}
