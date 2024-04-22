---
title: 'TypeError: "x" is not a non-null object(Тип ошибки: "x" не является ненулевым объектом)'
slug: Web/JavaScript/Reference/Errors/No_non-null_object
---

{{JSSidebar("Errors")}}

## Сообщения

```
TypeError: недопустимый дескриптор свойства {x} (Edge)
TypeError: "x" не является ненулевым объектом (Firefox)
TypeError: описание свойства должно быть объектом: "x" (Chrome)
TypeError: недопустимое значение, используемое в слабом наборе (Chrome)
```

## Тип ошибки

{{jsxref("TypeError")}}

## Что пошло не так?

Объект где-то ожидался и не был предоставлен. {{jsxref("null")}} не является объектом и не будет работать. Вы должны обеспечить надлежащий объект в данной ситуации.

## Примеры

### Ожидается дескриптор свойства

Когда такие методы, как {{jsxref("Object.create()")}} или {{jsxref("object.defineProperty()")}} и {{jsxref("object.defineProperties()")}} используются, дополнительный параметр дескриптора ожидает объект дескриптора свойства. Если не указать объект (например, просто число), возникнет ошибка:

```js example-bad
Object.defineProperty({}, "key", 1);
// TypeError: 1 is not a non-null object

Object.defineProperty({}, "key", null);
// TypeError: null is not a non-null object
```

Допустимый объект дескриптора свойства может выглядеть следующим образом:

```js example-good
Object.defineProperty({}, "key", { value: "foo", writable: false });
```

### `СлабаяКарта` и `СлабыйСет` объектов требуют ключей объектов

{{jsxref("WeakMap")}} and {{jsxref("WeakSet")}} объекты хранят ключи объектов. Вы не можете использовать другие типы ключей.

```js example-bad
var ws = new WeakSet();
ws.add("foo");
// TypeError: "foo" is not a non-null object
```

Создание объекта вместо:

```js example-good
ws.add({ foo: "bar" });
ws.add(window);
```

## Смотрите также

- {{jsxref("Object.create()")}}
- {{jsxref("Object.defineProperty()")}}, {{jsxref("Object.defineProperties()")}}
- {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}
