---
title: RangeError
slug: Web/JavaScript/Reference/Global_Objects/RangeError
---

{{JSRef("Global_Objects", "Error", "EvalError,InternalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError")}}

## Сводка

Объект **`RangeError`** представляет ошибку, возникающую, когда значение не входит в множество или выходит за диапазон допустимых значений.

## Синтаксис

```
new RangeError([message[, fileName[, lineNumber]]])
```

### Параметры

- `message`
  - : Необязательный параметр. Человеко-читаемое описание ошибки.
- `fileName` {{non-standard_inline}}
  - : Необязательный параметр. Имя файла, содержащего код, вызвавший исключение.
- `lineNumber` {{non-standard_inline}}
  - : Необязательный параметр. Номер строки кода, вызвавшей исключение.

## Описание

Исключение `RangeError` выбрасывается при попытке передать аргументом в функцию число, которое не входит в допустимый диапазон значений аргумента этой функции. Оно может возникать при создании массива с неправильной длиной через конструктор {{jsxref("Array")}}, или при передаче плохих значений в методы числа {{jsxref("Number.toExponential()")}}, {{jsxref("Number.toFixed()")}} или {{jsxref("Number.toPrecision()")}}.

## Свойства

- {{jsxref("RangeError.prototype")}}
  - : Позволяет добавлять свойства в объект `RangeError`.

## Методы

Глобальный объект `RangeError` не содержит собственных методов, однако, он наследует некоторые методы из цепочки прототипов.

## Экземпляры объекта `RangeError`

### Свойства

{{page('/ru/Web/JavaScript/Reference/Global_Objects/RangeError/prototype', 'Properties')}}

### Методы

{{page('/ru/Web/JavaScript/Reference/Global_Objects/RangeError/prototype', 'Methods')}}

## Примеры

### Пример: использование `RangeError`

```js
var check = function (num) {
  if (num < MIN || num > MAX) {
    throw new RangeError("Параметр должен быть между " + MIN + " и " + MAX);
  }
};

try {
  check(500);
} catch (e) {
  if (e instanceof RangeError) {
    // Обработка ошибки диапазона
  }
}
```

## Спецификации

| Спецификация                                                                                  | Статус             | Комментарии              |
| --------------------------------------------------------------------------------------------- | ------------------ | ------------------------ |
| ECMAScript 3-е издание.                                                                       | Стандарт           | Изначальное определение. |
| {{SpecName('ES5.1', '#sec-15.11.6.2', 'RangeError')}}                                         | {{Spec2('ES5.1')}} |                          |
| {{SpecName('ES6', '#sec-native-error-types-used-in-this-standard-rangeerror', 'RangeError')}} | {{Spec2('ES6')}}   |                          |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error")}}
- {{jsxref("RangeError.prototype")}}
- {{jsxref("Array")}}
- {{jsxref("Number.toExponential()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("Number.toPrecision()")}}
