---
title: Object.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
---

{{JSRef("Global_Objects", "Object")}}

## Сводка

Метод **`Object.getOwnPropertyDescriptor()`** возвращает дескриптор свойства для _собственного свойства_ (то есть такого, которое находится непосредственно в объекте, а не получено через цепочку прототипов) переданного объекта.

## Синтаксис

```
Object.getOwnPropertyDescriptor(obj, prop)
```

### Параметры

- `obj`
  - : Объект, в котором ищется свойство.
- `prop`
  - : Имя свойства, чьё описание будет возвращено.

### Возвращаемое значение

Дескриптор переданного свойства, если оно присутствует в объекте, либо {{jsxref("undefined")}}, если его там нет.

## Описание

Этот метод позволяет просмотреть точное описание свойства. _Свойство_ в JavaScript состоит из строкового имени и дескриптора свойства. Подробная информация о типах дескрипторов свойств и их атрибутах может быть найдена в описании метода {{jsxref("Object.defineProperty()")}}.

_Дескриптор свойства_ — это запись с некоторыми из следующих атрибутов:

- `value`
  - : Значение, ассоциированное со свойством (только в дескрипторе данных).
- `writable`
  - : Значение `true`, если значение, ассоциированное со свойством, может быть изменено, иначе `false` (только в дескрипторе данных).
- `get`
  - : Функция, возвращающая значение свойства, либо {{jsxref("undefined")}}, если такая функция отсутствует (только в дескрипторе доступа).
- `set`
  - : Функция, изменяющая значение свойства, либо {{jsxref("undefined")}}, если такая функция отсутствует (только в дескрипторе доступа).
- `configurable`
  - : Значение `true`, если тип дескриптора этого свойства может быть изменён и если свойство может быть удалено из содержащего его объекта, иначе `false`.
- `enumerable`
  - : Значение `true`, если это свойство доступно при перечислении свойств содержащего его объекта, иначе `false`.

## Примеры

```js
var o, d;

o = {
  get foo() {
    return 17;
  },
};
d = Object.getOwnPropertyDescriptor(o, "foo");
// d равен { configurable: true, enumerable: true, get: /*функция геттера*/, set: undefined }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, "bar");
// d равен { configurable: true, enumerable: true, value: 42, writable: true }

o = {};
Object.defineProperty(o, "baz", {
  value: 8675309,
  writable: false,
  enumerable: false,
});
d = Object.getOwnPropertyDescriptor(o, "baz");
// d равен { value: 8675309, writable: false, enumerable: false, configurable: false }
```

## Примечания

В ES5, если первый аргумент метода не является объектом (является примитивным значением), будет выброшено исключение {{jsxref("Global_Objects/TypeError", "TypeError")}}. В ES6 такой аргумент будет сначала приведён к объекту.

```js
> Object.getOwnPropertyDescriptor('foo', 0)
TypeError: "foo" is not an object  // код ES5

> Object.getOwnPropertyDescriptor('foo', 0)
{ configurable: false, enumerable: true, value: 'f', writable: false }  // код ES6
```

## Спецификации

| Спецификация                                                                                   | Статус             | Комментарии                                              |
| ---------------------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.3', 'Object.getOwnPropertyDescriptor')}}                      | {{Spec2('ES5.1')}} | Изначальное определение. Реализована в JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-object.getownpropertydescriptor', 'Object.getOwnPropertyDescriptor')}} | {{Spec2('ES6')}}   |                                                          |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.defineProperty()")}}
