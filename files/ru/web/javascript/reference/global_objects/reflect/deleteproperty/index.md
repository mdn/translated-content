---
title: Reflect.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
---

{{JSRef}}

Статический метод **`Reflect.deleteProperty()`** позволяет удалять свойства из объекта. Реализация данной функции схожа с оператором [`delete`](/ru/docs/Web/JavaScript/Reference/Operators/delete).

{{EmbedInteractiveExample("pages/js/reflect-deleteproperty.html", "taller")}}

## Синтаксис

```
Reflect.deleteProperty(target, propertyKey)
```

### Параметры

- `target`
  - : Целевой объект в котором будет удалено свойство.
- `propertyKey`
  - : Имя удаляемого свойства.

### Возвращаемое значение

{{jsxref("Boolean")}} указывающий, было ли свойство успешно удалено.

### Исключения

Исключение {{jsxref("TypeError")}}, если `target` не является {{jsxref("Object")}}.

## Описание

Метод `Reflect.deleteProperty` позволяет вам удалить свойство объекта. Он возвращает {{jsxref("Boolean")}} указывающий, было ли свойство успешно удалено. Он так же идентичен оператору [`delete`](/ru/docs/Web/JavaScript/Reference/Operators/delete) без использования строгого режима.

## Примеры

### Использования `Reflect.deleteProperty()`

```js
var obj = { x: 1, y: 2 };
Reflect.deleteProperty(obj, "x"); // true
obj; // { y: 2 }

var arr = [1, 2, 3, 4, 5];
Reflect.deleteProperty(arr, "3"); // true
arr; // [1, 2, 3, , 5]

// Возвращает true даже если такого свойства не существует
Reflect.deleteProperty({}, "foo"); // true

// Возвращает false если такое свойство ненастраиваемое
Reflect.deleteProperty(Object.freeze({ foo: 1 }), "foo"); // false
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Reflect")}}
- [`delete` operator](/ru/docs/Web/JavaScript/Reference/Operators/delete)
