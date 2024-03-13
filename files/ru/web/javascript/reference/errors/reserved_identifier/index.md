---
title: 'SyntaxError: "x" is a reserved identifier'
slug: Web/JavaScript/Reference/Errors/Reserved_identifier
---

{{jsSidebar("Errors")}}

## Сообщение

```
SyntaxError: The use of a future reserved word for an identifier is invalid (Edge)
SyntaxError: "x" is a reserved identifier (Firefox)
SyntaxError: Unexpected reserved word (Chrome)
```

## Тип ошибки

{{jsxref("SyntaxError")}}

## Что пошло не так?

[Ключевые слова](/ru/docs/Web/JavaScript/Reference/Lexical_grammar#Ключевые_слова) используются в качестве идентификаторов. Ключевые слова зарезервированные и в строгом и обычном режиме:

- `enum`

Следующие ключевые слова резервируются для кода, который выполняется только в строгом режиме (strict mode):

- `implements`
- `interface`
- [`let`](/ru/docs/Web/JavaScript/Reference/Statements/let)
- `package`
- `private`
- `protected`
- `public`
- `static`

## Примеры

### Строгий и нестрогий режимы резервирования ключевых строк

Идентификатор `enum` зарезервирован.

```js example-bad
var enum = { RED: 0, GREEN: 1, BLUE: 2 };
// SyntaxError: enum is a reserved identifier
```

Резервирование большего количества идентификаторов с использованием строгого режима.

```js example-bad
"use strict";
var package = ["potatoes", "rice", "fries"];
// SyntaxError: package is a reserved identifier
```

Вам необходимо переименовать следующие переменные.

```js example-good
var colorEnum = { RED: 0, GREEN: 1, BLUE: 2 };
var list = ["potatoes", "rice", "fries"];
```

### Обновление старых браузеров

Например, если вы используете старый браузер, в котором ещё не реализована функция [`let`](/ru/docs/Web/JavaScript/Reference/Statements/let) или [`class`](/ru/docs/Web/JavaScript/Reference/Statements/class), вам следует перейти на более новую версию браузера, которая поддерживает данные языковые функции.

```js
"use strict";
class DocArchiver {}

// SyntaxError: class is a reserved identifier
// (появится только в старых браузерах, например, Firefox 44 и старше)
```

## Смотрите также

- [Правильные имена переменных](http://wiki.c2.com/?GoodVariableNames)
