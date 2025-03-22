---
title: "SyntaxError: applying the 'delete' operator to an unqualified name is deprecated"
slug: Web/JavaScript/Reference/Errors/Delete_in_strict_mode
---

{{jsSidebar("Errors")}}

Исключение "applying the 'delete' operator to an unqualified name is deprecated" возникает только [в строгом режиме](/ru/docs/Web/JavaScript/Reference/Strict_mode) при попытке удалить переменную с помощью оператора [`delete`](/ru/docs/Web/JavaScript/Reference/Operators/delete).

## Сообщение

```plain
SyntaxError: Delete of an unqualified identifier in strict mode. (V8-based)
SyntaxError: applying the 'delete' operator to an unqualified name is deprecated (Firefox)
SyntaxError: Cannot delete unqualified property 'a' in strict mode. (Safari)
```

## Тип ошибки

{{jsxref("SyntaxError")}} только [в строгом режиме](/ru/docs/Web/JavaScript/Reference/Strict_mode).

## Что не так?

Обычные переменные в JavaScript нельзя удалить с помощью оператора `delete`. В строгом режиме попытка удалить переменную вызовет ошибку и не будет разрешена.

Оператор `delete` может удалять только свойства объекта. Свойства объекта "квалифицированы", если они конфигурируемы.

В отличие от общепринятого мнения, оператор `delete` не имеет ничего общего с непосредственным освобождением памяти. Управление памятью осуществляется косвенным образом через удаление ссылок, читайте подробнее в разделе [про управление памятью](/ru/docs/Web/JavaScript/Guide/Memory_management), а также на странице оператора [`delete`](/ru/docs/Web/JavaScript/Reference/Operators/delete).

Эта ошибка возникает только [в строгом режиме](/ru/docs/Web/JavaScript/Reference/Strict_mode). В нестрогом режиме операция просто возвращает `false`.

## Примеры

Попытка удалить простую переменную не работает в JavaScript и выдаёт ошибку в строгом режиме:

```js-nolint example-bad
"use strict";

var x;

// ...

delete x;

// SyntaxError: применение оператора 'delete' к неполному имени является устаревшим
```

Чтобы освободить содержимое переменной, задайте для неё значение `{{jsxref("null")}}`:

```js example-good
"use strict";

var x;

// ...

x = null;

// X может быть собран "мусор"
```

## Смотрите также

- [Оператор `delete`](/ru/docs/Web/JavaScript/Reference/Operators/delete)
- [Управление памятью](/ru/docs/Web/JavaScript/Guide/Memory_management)
- [TypeError: property "x" is non-configurable and can't be deleted](/ru/docs/Web/JavaScript/Reference/Errors/Cant_delete)
