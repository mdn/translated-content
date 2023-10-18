---
title: 'SyntaxError: "use strict" not allowed in function with non-simple parameters'
slug: Web/JavaScript/Reference/Errors/Strict_non_simple_params
---

{{jsSidebar("Errors")}}

## Сообщение

```
Edge:
Cannot apply strict mode on functions with non-simple parameter list

Firefox:
SyntaxError: "use strict" not allowed in function with default parameter
SyntaxError: "use strict" not allowed in function with rest parameter
SyntaxError: "use strict" not allowed in function with destructuring parameter

Chrome:
SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
```

Перевод:

```
Edge:
Не удаётся применить строгий режим к функциям со списком, содержащим сложные параметры

Firefox:
Ошибка синтаксиса: "use strict" не допускается в функции с параметром по умолчанию
Ошибка синтаксиса: "use strict" не допускается в функции с rest параметром
Ошибка синтаксиса: "use strict" не допускается в функции с параметром, использующим деструктуризацию

Chrome:
Ошибка синтаксиса: недопустимая директива 'use strict' в функции со списком, содержащим сложные параметры
```

## Тип ошибки

{{jsxref("SyntaxError")}}.

## Что пошло не так?

Директива `"use strict"` была использована в верхней части функции, которая имеет один из следующих параметров:

- {{jsxref("функции/Default_parameters", "параметры по умолчанию", "", 1)}}
- {{jsxref("функции/rest_parameters", "остальные параметры", "", 1)}}
- {{jsxref("операторы/Destructuring_assignment", "деконструкция параметров", "", 1)}}

Директива "use strict" не допускается в верхней части таких функций согласно спецификации ECMAScript.

## Примеры

### Функция заявления

В этом случае функция sum имеет параметры по умолчанию a=1 и b=2:

```js example-bad
function sum(a = 1, b = 2) {
  //SyntaxError: использовать "use strict" не разрешено в функции с параметром по умолчанию
  'use strict';
  return a + b;
}
```

Если функция должна находиться в строгом режиме, и весь скрипт или заключающая функция также в порядке, чтобы быть в строгом режиме, вы можете переместить директиву "use strict" за пределы функции:

```js example-good
"use strict";
function sum(a = 1, b = 2) {
  return a + b;
}
```

### Функция выражения

Выражение функции может использовать ещё один обходной путь:

```js example-bad
var sum = function sum([a, b]) {
  // SyntaxError: "use strict" не допускается в функции с параметром деструктурирования
  'use strict';
  return a + b;
};
```

Это может быть преобразовано в следующее выражение:

```js example-good
var sum = (function () {
  "use strict";
  return function sum([a, b]) {
    return a + b;
  };
})();
```

### Указательная функция

Если функция со стрелкой должна получить доступ к переменной this, можно использовать функцию со стрелкой в качестве функции включения:

```js example-bad
var callback = (...args) => {
  // SyntaxError: "use strict" не допускается в функции с параметром rest
  'use strict';
  return this.run(args);
};
```

Это может быть преобразовано в следующее выражение:

```js example-good
var callback = (() => {
  "use strict";
  return (...args) => {
    return this.run(args);
  };
})();
```

## Смотрите также

- {{jsxref("Strict_mode", "строгий режим", "", 1)}}
- {{jsxref("Ведомости/функция", "оператор function", "", 1)}}
- {{jsxref("операторы/функции", "свободное выражение функции", "", 1)}}
- {{jsxref("функции/Default_parameters", "параметры по умолчанию", "", 1)}}
- {{jsxref("функции/rest_parameters", "остальные параметры", "", 1)}}
- {{jsxref("операторы/Destructuring_assignment", "деконструкция параметры", "", 1)}}
