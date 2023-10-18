---
title: 'ReferenceError: reference to undefined property "x"'
slug: Web/JavaScript/Reference/Errors/Undefined_prop
---

{{jsSidebar("Errors")}}

## Сообщение

```
ReferenceError: reference to undefined property "x" (Firefox)
```

## Тип ошибки

(только в Firefox) Предупреждение {{jsxref("ReferenceError")}}, возникает, только если значение настройки `javascript.options.strict` равно `true`.

## Что пошло не так?

Совершена попытка обращения к свойству объекта, которое не определено. Существует два способа обращения к свойствам: обратитесь к странице справочника {{jsxref("Operators/Property_Accessors", "property accessors", 0, 1)}} для более подробной информации.

## Примеры

### Случаи возникновения ошибки

В данном примере свойство `bar` не определено, поэтому возникнет ошибка `ReferenceError`.

```js example-bad
var foo = {};
foo.bar; // ReferenceError: reference to undefined property "bar"
```

### Правильный код

Чтобы избежать ошибки, потребуется либо задать для объекта свойство `bar`, либо проверить существование данного свойства, прежде чем обращаться к нему. Одним из способов это сделать является использование метода {{jsxref("Object.prototype.hasOwnProperty()")}}:

```js example-good
var foo = {};

// Задать свойство bar

foo.bar = "moon";
console.log(foo.bar); // "moon"

// Убедиться, что свойство bar существует, прежде чем обращаться к нему

if (foo.hasOwnProperty("bar")) {
  console.log(foo.bar);
}
```

## Смотрите также

- {{jsxref("Operators/Property_Accessors", "property accessors", 0, 1)}}
