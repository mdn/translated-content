---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
---

{{JSRef("Global_Objects", "Error", "EvalError,InternalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError")}}

## Сводка

Объект **`EvalError`** представляет ошибку, возникающую в глобальной функции {{jsxref("Global_objects/eval()", "eval()")}}.

## Синтаксис

```
new EvalError([message[, fileName[, lineNumber]]])
```

### Параметры

- `message`
  - : Необязательный параметр. Человеко-читаемое описание ошибки.
- `fileName` {{non-standard_inline}}
  - : Необязательный параметр. Имя файла, содержащего код, вызвавший исключение.
- `lineNumber` {{non-standard_inline}}
  - : Необязательный параметр. Номер строки кода, вызвавшей исключение.

## Описание

Исключение `EvalError` выбрасывается при неправильном использовании глобальной функции {{jsxref("Global_objects/eval()", "eval()")}}.

## Свойства

- {{jsxref("EvalError.prototype")}}
  - : Позволяет добавлять свойства в объект `EvalError`.

## Методы

Глобальный объект `EvalError` не содержит собственных методов, однако, он наследует некоторые методы из цепочки прототипов.

## Экземпляры объекта `EvalError`

### Свойства

{{page('/ru/Web/JavaScript/Reference/Global_Objects/EvalError/prototype', 'Properties')}}

### Методы

{{page('/ru/Web/JavaScript/Reference/Global_Objects/EvalError/prototype', 'Methods')}}

## Примеры

Объект `EvalError` в настоящий момент не используется и он никогда не выбрасывается в процессе выполнения.

### Пример: создание экземпляра объекта `EvalError`

```js
try {
  throw new EvalError("Привет", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Привет"
  console.log(e.name); // "EvalError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## Спецификации

| Спецификация                                                                                | Статус             | Комментарии                                                                   |
| ------------------------------------------------------------------------------------------- | ------------------ | ----------------------------------------------------------------------------- |
| ECMAScript 3-е издание.                                                                     | Стандарт           | Изначальное определение.                                                      |
| {{SpecName('ES5.1', '#sec-15.11.6.1', 'EvalError')}}                                        | {{Spec2('ES5.1')}} | Не используется в этой спецификации. Присутствует для обратной совместимости. |
| {{SpecName('ES6', '#sec-native-error-types-used-in-this-standard-evalerror', 'EvalError')}} | {{Spec2('ES6')}}   | Не используется в этой спецификации. Присутствует для обратной совместимости. |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error")}}
- {{jsxref("EvalError.prototype")}}
- {{jsxref("Global_objects/eval", "eval()")}}
