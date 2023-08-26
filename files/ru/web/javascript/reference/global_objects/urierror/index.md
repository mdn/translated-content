---
title: URIError
slug: Web/JavaScript/Reference/Global_Objects/URIError
---

{{JSRef("Global_Objects", "Error", "EvalError,InternalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError")}}

## Сводка

Объект **`URIError`** представляет ошибку, возникающую при неправильном использовании глобальных функций обработки URI.

## Синтаксис

```
new URIError([message[, fileName[, lineNumber]]])
```

### Параметры

- `message`
  - : Необязательный параметр. Человеко-читаемое описание ошибки.
- `fileName` {{non-standard_inline}}
  - : Необязательный параметр. Имя файла, содержащего код, вызвавший исключение.
- `lineNumber` {{non-standard_inline}}
  - : Необязательный параметр. Номер строки кода, вызвавшей исключение.

## Описание

Исключение `URIError` выбрасывается при передаче некорректного URI в глобальные функции обработки URI.

## Свойства

- {{jsxref("URIError.prototype")}}
  - : Позволяет добавлять свойства в объект `URIError`.

## Методы

Глобальный объект `URIError` не содержит собственных методов, однако, он наследует некоторые методы из цепочки прототипов.

## Экземпляры объекта `URIError`

### Свойства

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/URIError/prototype', 'Properties')}}

### Методы

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/URIError/prototype', 'Methods')}}

## Примеры

### Пример: перехват исключения `URIError`

```js
try {
  decodeURIComponent("%");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "malformed URI sequence" - неверный формат последовательности URI
  console.log(e.name); // "URIError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 2
  console.log(e.stack); // "@Scratchpad/2:2:3\n"
}
```

### Пример: возбуждение исключения `URIError`

```js
try {
  throw new URIError("Привет", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "Привет"
  console.log(e.name); // "URIError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## Спецификации

| Спецификация                                                                              | Статус             | Комментарии              |
| ----------------------------------------------------------------------------------------- | ------------------ | ------------------------ |
| ECMAScript 3-е издание.                                                                   | Стандарт           | Изначальное определение. |
| {{SpecName('ES5.1', '#sec-15.11.6.6', 'URIError')}}                                       | {{Spec2('ES5.1')}} |                          |
| {{SpecName('ES6', '#sec-native-error-types-used-in-this-standard-urierror', 'URIError')}} | {{Spec2('ES6')}}   |                          |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error")}}
- {{jsxref("URIError.prototype")}}
- {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}
- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}
- {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
