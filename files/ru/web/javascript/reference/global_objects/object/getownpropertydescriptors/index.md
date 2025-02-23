---
title: Object.getOwnPropertyDescriptors()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
---

{{JSRef}}

Метод **`Object.getOwnPropertyDescriptors()`** возвращает все собственные дескрипторы свойств данного объекта.

{{InteractiveExample("JavaScript Demo: Object.getOwnPropertyDescriptors()")}}

```js interactive-example
const object1 = {
  property1: 42,
};

const descriptors1 = Object.getOwnPropertyDescriptors(object1);

console.log(descriptors1.property1.writable);
// Expected output: true

console.log(descriptors1.property1.value);
// Expected output: 42
```

## Синтаксис

```
Object.getOwnPropertyDescriptors(obj)
```

### Параметры

- `obj`
  - : Объект, для которого нужно получить все собственные дескрипторы свойств.

### Возвращаемое значение

Объект, содержащий все собственные дескрипторы свойств объекта. Может быть пустой объект, если нет свойств.

## Описание

Этот метод позволяет изучить точное описание всех собственных свойств объекта. Свойство в JavaScript состоит из строкового имени или {{jsxref("Symbol")}} и свойства дескриптора. Дополнительную информацию о типах свойств дескрипторов и их атрибутах можно найти в {{jsxref("Object.defineProperty()")}}.

Свойство дескриптора это запись с некоторыми из следующих атрибутов:

- `value`
  - : Значение, связанное со свойством (только дескрипторы данных).
- **`writable`**
  - : `true` тогда и только тогда когда значение, связанное со свойством, может быть изменено (только дескрипторы данных).
- `get`
  - : Функция, которая служит в качестве получателя для свойства, или {{jsxref("undefined")}} если нет получателя (только дескрипторы доступа).
- `set`
  - : Функция, которая служит установщиком для свойства, или {{jsxref("undefined")}} если установщика нет (только дескрипторы доступа).
- `configurable`
  - : `true` тогда и только тогда, когда тип этого свойства дескриптора может быть изменён, и если свойство может быть удалено из соответствующего объекта.
- `enumerable`
  - : `true` тогда и только тогда, когда это свойство отображается при перечислении свойств соответствующего объекта.

## Примеры

### Создание поверхностного клона

В то время как метод {{jsxref("Object.assign()")}} будет только копировать перечисляемые и собственные свойства из исходного объекта в целевой объект, вы можете использовать этот метод и {{jsxref("Object.create()")}} для поверхностного копирования между двумя неизвестными объектами:

```js
Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj),
);
```

### Создание подкласса

Типичный способ создания подкласса это определить подкласс, определить свойства этого экземпляра. Это может быть неудобно особенно для получателей и установщиков. Вместо этого, вы можете использовать этот код для установки прототипа:

```js
function superclass() {}
superclass.prototype = {
  // Определите ваши методы и свойства здесь
};
function subclass() {}
subclass.prototype = Object.create(superclass.prototype, {
  // Определите ваши методы и свойства здесь
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Object.defineProperty()")}}
- [Polyfill](https://github.com/tc39/proposal-object-getownpropertydescriptors)
