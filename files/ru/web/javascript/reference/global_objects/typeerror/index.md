---
title: TypeError
slug: Web/JavaScript/Reference/Global_Objects/TypeError
---

{{JSRef("Global_Objects", "Error", "EvalError,InternalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError")}}

## Сводка

Объект **`TypeError`** представляет ошибку, возникающую, когда значение имеет не ожидаемый тип.

## Синтаксис

```
new TypeError([message[, fileName[, lineNumber]]])
```

### Параметры

- `message`
  - : Необязательный параметр. Человеко-читаемое описание ошибки.
- `fileName` {{non-standard_inline}}
  - : Необязательный параметр. Имя файла, содержащего код, вызвавший исключение.
- `lineNumber` {{non-standard_inline}}
  - : Необязательный параметр. Номер строки кода, вызвавшей исключение.

## Описание

Исключение `TypeError` выбрасывается, когда операнд или аргумент, переданный в функцию, не совместим с типом, ожидаемым оператором или функцией.

## Свойства

- {{jsxref("TypeError.prototype")}}
  - : Позволяет добавлять свойства в объект `TypeError`.

## Методы

Глобальный объект `TypeError` не содержит собственных методов, однако, он наследует некоторые методы из цепочки прототипов.

## Экземпляры объекта `TypeError`

### Свойства

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/TypeError/prototype', 'Properties')}}

### Методы

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/TypeError/prototype', 'Methods')}}

## Примеры

### Пример: перехват исключения `TypeError`

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "null has no properties" - null не имеет свойств
  console.log(e.name); // "TypeError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 2
  console.log(e.stack); // "@Scratchpad/2:2:3\n"
}
```

### Пример: возбуждение исключения `TypeError`

```js
try {
  throw new TypeError("Привет", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "Привет"
  console.log(e.name); // "TypeError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error")}}
- {{jsxref("TypeError.prototype")}}
