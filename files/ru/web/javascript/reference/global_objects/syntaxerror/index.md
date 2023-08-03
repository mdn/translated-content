---
title: SyntaxError
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError
---

{{JSRef("Global_Objects", "Error", "EvalError,InternalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError")}}

## Сводка

Объект **`SyntaxError`** представляет ошибку, возникающую при попытке интерпретировать синтаксически неправильный код.

## Синтаксис

```
new SyntaxError([message[, fileName[, lineNumber]]])
```

### Параметры

- `message`
  - : Необязательный параметр. Человеко-читаемое описание ошибки.
- `fileName` {{non-standard_inline}}
  - : Необязательный параметр. Имя файла, содержащего код, вызвавший исключение.
- `lineNumber` {{non-standard_inline}}
  - : Необязательный параметр. Номер строки кода, вызвавшей исключение.

## Описание

Исключение `SyntaxError` выбрасывается, когда движок JavaScript при разборе кода обнаруживает токены или токен, которые, согласно синтаксису, не должны здесь находиться.

## Свойства

- {{jsxref("SyntaxError.prototype")}}
  - : Позволяет добавлять свойства в объект `SyntaxError`.

## Методы

Глобальный объект `SyntaxError` не содержит собственных методов, однако, он наследует некоторые методы из цепочки прототипов.

## Экземпляры объекта `SyntaxError`

### Свойства

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError/prototype', 'Properties')}}

### Методы

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError/prototype', 'Methods')}}

## Примеры

### Пример: перехват исключения `SyntaxError`

```js
try {
  eval("hoo bar");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message); // "missing ; before statement" - перед инструкцией отсутствует символ ;
  console.log(e.name); // "SyntaxError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 1
  console.log(e.columnNumber); // 4
  console.log(e.stack); // "@Scratchpad/1:2:3\n"
}
```

### Пример: возбуждение исключения `SyntaxError`

```js
try {
  throw new SyntaxError("Привет", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message); // "Привет"
  console.log(e.name); // "SyntaxError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:11:9\n"
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error")}}
- {{jsxref("SyntaxError.prototype")}}
