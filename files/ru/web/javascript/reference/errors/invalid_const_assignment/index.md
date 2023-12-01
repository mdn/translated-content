---
title: 'TypeError: invalid assignment to const "x"(недопустимое назначение const "x")'
slug: Web/JavaScript/Reference/Errors/Invalid_const_assignment
---

{{jsSidebar("Errors")}}

## Сообщение

```
TypeError: недопустимое назначение const "x" (Firefox)
TypeError: присвоение переменной константы. (Chrome)
TypeError: присвоение const (Edge)
TypeError: повторное объявление const 'x' (IE)
```

## Тип ошибки

{{jsxref("TypeError")}}

## Что пошло не так?

Константа-это значение, которое не может быть изменено программой в обычном исполнении. Он не может быть изменён путём повторного назначения и не может быть повторно объявлен. В JavaScript, константы объявляются с помощью ключевого слова const.

## Примеры

### Недопустимое повторное объявление

Assigning a value to the same constant name in the same block-scope will throw.

```js example-bad
const COLUMNS = 80;

// ...

COLUMNS = 120; // TypeError: invalid assignment to const `COLUMNS'
```

### Решение проблемы

Есть несколько вариантов, чтобы исправить эту ошибку. Проверьте, что должно было быть достигнуто с рассматриваемой константой.

#### Переназовите

Если вы хотели объявить другую константу, выберите другое имя и переименовать. Это имя константы уже используется в этой области.

```js example-good
const COLUMNS = 80;
const WIDE_COLUMNS = 120;
```

#### `const`, `let` или `var`?

Не используйте const, если вы не хотели объявлять константу. Возможно, вы хотели объявить переменную в области блока с let или глобальную переменную с var.

```js example-good
let columns = 80;

// ...

let columns = 120;
```

#### Обзор

Проверить, если вы находитесь в правильной области. Должна ли эта константа появиться в этой области или она должна была появиться в функции, например?

```js example-good
const COLUMNS = 80;

function setupBigScreenEnvironment() {
  const COLUMNS = 120;
}
```

### `const` и неизменность

Объявление const создаёт ссылку только для чтения на значение. Это не означает, что значение, которое он содержит, является неизменяемым, просто идентификатор переменной не может быть переназначен. Например, если содержимое является объектом, это означает, что сам объект все ещё может быть изменён. Это означает, что нельзя изменить значение, хранящееся в переменной:

```js example-bad
const obj = { foo: "bar" };
obj = { foo: "baz" }; // TypeError: invalid assignment to const `obj'
```

Но можно изменить свойства в переменной:

```js example-good
obj.foo = "baz";
obj; // Object { foo: "baz" }
```

## Смотрите также

- [`const`](/ru/docs/Web/JavaScript/Reference/Statements/const)
- [`let`](/ru/docs/Web/JavaScript/Reference/Statements/let)
- [`var`](/ru/docs/Web/JavaScript/Reference/Statements/var)
