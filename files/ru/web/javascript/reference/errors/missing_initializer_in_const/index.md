---
title: "SyntaxError: missing = in const declaration"
slug: Web/JavaScript/Reference/Errors/Missing_initializer_in_const
---

{{jsSidebar("Errors")}}

## Сообщение

```
SyntaxError: missing = in const declaration (Firefox)
SyntaxError: Missing initializer in const declaration (Chrome)
```

## Тип ошибки

{{jsxref("SyntaxError")}}

## Что пошло не так?

Константа это значение, которое не может быть изменено программой в процессе своего выполнения. Оно не может меняться посредством повторного назначения, и не может быть переопределено. В JavaScript константы объявляются с использованием ключевого слова `const`. Инициализация для константы является обязательной; то есть вы должны указать значение сразу же при её объявлении (что имеет смысл, учитывая, что оно не может быть изменено позже).

## Примеры

### Отсутствие инициализатора константы

В отличие от `var` или `let`, вы должны указать значение при объявлении `const`. В противном случае возникнет ошибка:

```js example-bad
const COLUMNS;
// SyntaxError: missing = in const declaration
```

### Исправление ошибки

Существует несколько вариантов исправления этой ошибки. Проверьте, что должно быть достигнуто с помощью данной константы.

#### Добавление значения константы

Укажите значение константы при её объявлении.

```js example-good
const COLUMNS = 80;
```

#### `const`, `let` или `var`?

Не используйте `const`, если вы не хотели объявить константу. Возможно, вы подразумевали объявление переменную с блочной областью видимости с помощью `let` или глобальную переменную с помощью `var`. Оба варианта не требуют начального значения.

```js example-good
let columns;
```

## Смотрите также

- [`const`](/ru/docs/Web/JavaScript/Reference/Statements/const)
- [`let`](/ru/docs/Web/JavaScript/Reference/Statements/let)
- [`var`](/ru/docs/Web/JavaScript/Reference/Statements/var)
