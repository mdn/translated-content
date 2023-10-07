---
title: InternalError
slug: Web/JavaScript/Reference/Global_Objects/InternalError
---

{{JSRef("Global_Objects", "Error", "EvalError,InternalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError")}} {{non-standard_header}}

## Сводка

Объект **`InternalError`** представляет ошибку, возникающую внутри движка JavaScript. Например: "InternalError: too much recursion".

## Синтаксис

```
new InternalError([message[, fileName[, lineNumber]]])
```

### Параметры

- `message`
  - : Необязательный параметр. Человеко-читаемое описание ошибки.
- `fileName` {{non-standard_inline}}
  - : Необязательный параметр. Имя файла, содержащего код, вызвавший исключение.
- `lineNumber` {{non-standard_inline}}
  - : Необязательный параметр. Номер строки кода, вызвавшей исключение.

## Описание

Исключение `InternalError` выбрасывается при возникновении внутренней ошибки в движке JavaScript.

Как правило, эти ошибки связаны с тем, что что-то стало слишком большим, либо чего-то стало слишком много, например:

- "too many switch cases" — слишком много веток `case` в операторе `switch`;
- "too many parentheses in regular expression" — слишком много круглых скобок в регулярном выражении;
- "array initializer too large" — инициализатор массива слишком большой;
- "too much recursion" — слишком глубокая рекурсия.

## Свойства

- {{jsxref("InternalError.prototype")}}
  - : Позволяет добавлять свойства в объект `InternalError`.

## Методы

Глобальный объект `InternalError` не содержит собственных методов, однако, он наследует некоторые методы из цепочки прототипов.

## Экземпляры объекта `InternalError`

### Свойства

{{page('/ru/Web/JavaScript/Reference/Global_Objects/InternalError/prototype', 'Properties')}}

### Методы

{{page('/ru/Web/JavaScript/Reference/Global_Objects/InternalError/prototype', 'Methods')}}

## Спецификации

Не является частью какой-либо спецификации.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Error")}}
- {{jsxref("InternalError.prototype")}}
