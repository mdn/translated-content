---
title: 'TypeError: can''t access property "x" of "y"(Тип ошибки: не удаётся получить доступ к свойству "x" из "y")'
slug: conflicting/Web/JavaScript/Reference/Errors/Unexpected_type
original_slug: Web/JavaScript/Reference/Errors/Cant_access_property
---
{{jsSidebar("Errors")}}

## Message

```
TypeError: не удаётся получить свойство {x} неопределённой или нулевой ссылки (Edge)
TypeError: не удаётся получить доступ к свойству {x} of {y} (Firefox)
TypeError: {y} не определён, не может получить доступ к свойству {x} (Firefox)
TypeError: {y} имеет значение null, не может получить доступ к свойству {x} (Firefox)

Образцы:
TypeError: x не определён, не может получить доступ к свойству "prop"
TypeError: x имеет значение null, не может получить доступ к свойству "prop"
TypeError: не удаётся получить доступ к свойству "prop" неопределённого
TypeError: не удаётся получить доступ к свойству "prop" значения null
```

## Тип ошибки

{{jsxref("TypeError")}}.

## Что не так?

Доступ к собственности осуществлялся {{jsxref("undefined")}} или {{jsxref("null")}} переменными

## Примеры

### Неправильные примеры

```js example-bad
// undefined and null cases on which the substring method won't work
var foo = undefined;
foo.substring(1); // TypeError: x не определён, не может получить доступ к свойству substring

var foo = null;
foo.substring(1); // TypeError: x имеет значение null, не может получить доступ к свойству substring
```

### Исправление проблемы

Чтобы исправить указатель null на неопределённые или нулевые значения, можно использовать оператор typeof, например.

```js
if (typeof foo !== 'undefined') {
  // Теперь мы знаем, что foo определён.
}
```

## Смотрите также

- {{jsxref("undefined")}}
- {{jsxref("null")}}
