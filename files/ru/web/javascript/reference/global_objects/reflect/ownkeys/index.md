---
title: Reflect.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
---

{{JSRef}}

Статический метод **`Reflect.ownKeys()`** возвращает массив имён, а также `Symbols` собственных полей объекта `target` .

{{EmbedInteractiveExample("pages/js/reflect-ownkeys.html")}}

## Синтаксис

```
Reflect.ownKeys(target)
```

### Параметры

- `target`
  - : Объект `target`, из которого получаем собственные ключи.

### Возвращаемое значение

Массив {{jsxref("Array")}} собственных полей объекта `target`.

### Исключения

Выбрасывает исключение {{jsxref("TypeError")}}, если `target` не является {{jsxref("Object")}}.

## Описание

Метод `Reflect.ownKeys` возвращает массив собственных ключей объекта `target`. Эквивалентом этого метода является `{{jsxref("Object.getOwnPropertyNames")}}(target).concat({{jsxref("Object.getOwnPropertySymbols")}}(target))`.

## Примеры

### Использование `Reflect.ownKeys()`

```js
Reflect.ownKeys({ z: 3, y: 2, x: 1 }); // [ "z", "y", "x" ]
Reflect.ownKeys([]); // ["length"]

var sym = Symbol.for("comet");
var sym2 = Symbol.for("meteor");
var obj = {
  [sym]: 0,
  str: 0,
  773: 0,
  0: 0,
  [sym2]: 0,
  "-1": 0,
  8: 0,
  "second str": 0,
};
Reflect.ownKeys(obj);
// [ "0", "8", "773", "str", "-1", "second str", Symbol(comet), Symbol(meteor) ]
// Индексы в порядке их перечисления,
// Строки в порядке их ввода,
// Symbols в порядке их ввода
```

## Спецификации

{{Specifications}}

## Browser compatibility

{{Compat}}

## Смотрите также

- {{jsxref("Reflect")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
