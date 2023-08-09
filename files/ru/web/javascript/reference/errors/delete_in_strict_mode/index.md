---
title: "SyntaxError: applying the 'delete' operator to an unqualified name is deprecated (SyntaxError: применение оператора 'delete' к неполному имени не рекомендуется)"
slug: Web/JavaScript/Reference/Errors/Delete_in_strict_mode
---

{{jsSidebar("Errors")}}

## Сообщение

```
SyntaxError: вызов delete on expression запрещён в строгом режиме в (Edge)
SyntaxError: применение оператора 'delete' к неполному имени не рекомендуется в (Firefox)
SyntaxError: удаление неполного идентификатора в строгом режиме запрещено в (Chrome)
```

## Тип ошибки

{{jsxref("SyntaxError")}} только в строгом режиме.

## В чем ошибка?

Обычные переменные в JavaScript нельзя удалить с помощью оператора `delete`. В строгом режиме попытка удалить переменную вызовет ошибку и не будет разрешена.

Оператор `delete` может удалять только свойства объекта. Свойства объекта "квалифицированы", если они конфигурируемы.

В отличие от общепринятого мнения, оператор `delete` не имеет ничего общего с непосредственным освобождением памяти. Управление памятью осуществляется косвенным образом через нарушение ссылок см.[memory management](/ru/docs/Web/JavaScript/Memory_Management) . В разделе управление памятью и страницы оператора delete для более подробной информации.

Эта ошибка возникает только в коде строгого режима. В нестрогом коде операция просто возвращает false.

## Примеры

Попытка удалить простую переменную не работает в JavaScript и выдаёт ошибку в строгом режиме:

```js example-bad
"use strict";

var x;

// ...

delete x;

// SyntaxError: применение оператора 'delete' к неполному имени является устаревшим
```

Чтобы освободить содержимое переменной, задайте для неё значение {{jsxref("null")}}:

```js example-good
"use strict";

var x;

// ...

x = null;

// X может быть собран "мусор"
```

## Смотрите также

- [`delete`](/ru/docs/Web/JavaScript/Reference/Operators/delete)
- [Memory management](/ru/docs/Web/JavaScript/Memory_Management)
- [TypeError: property "x" is non-configurable and can't be deleted](/ru/docs/Web/JavaScript/Reference/Errors/Cant_delete)(TypeError: свойство "x" не настраивается и не может быть удалено)
