---
title: ReferenceError
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError
---

{{JSRef}}

Объект **`ReferenceError`** представляет ошибку, возникающую при обращении к несуществующей переменной.

## Синтаксис

```
new ReferenceError([message[, fileName[, lineNumber]]])
```

### Параметры

- `message`
  - : Необязательный параметр. Человеко-читаемое описание ошибки
- `fileName` {{non-standard_inline}}
  - : Необязательный параметр. Имя файла, содержащего код, вызвавший исключение
- `lineNumber` {{non-standard_inline}}
  - : Необязательный параметр. Номер строки кода, вызвавшей исключение

## Описание

Исключение `ReferenceError` выбрасывается при попытке обратиться к переменной, которая не была объявлена.

## Свойства

- {{jsxref("ReferenceError.prototype")}}
  - : Позволяет добавлять свойства в объект `ReferenceError`.

## Методы

Глобальный объект `ReferenceError` не содержит собственных методов, однако, он наследует некоторые методы из цепочки прототипов.

## Экземпляры объекта `ReferenceError`

### Свойства

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError/prototype', 'Properties')}}

### Методы

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError/prototype', 'Methods')}}

## Примеры

### Перехват `ReferenceError`

```js
try {
  var a = undefinedVariable;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "undefinedVariable is not defined"
  console.log(e.name); // "ReferenceError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 6
  console.log(e.stack); // "@Scratchpad/2:2:7\n"
}
```

### Выбрасывание `ReferenceError`

```js
try {
  throw new ReferenceError("Привет", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "Привет"
  console.log(e.name); // "ReferenceError"
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
- {{jsxref("ReferenceError.prototype")}}
