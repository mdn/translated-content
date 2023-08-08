---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
---

{{JSRef()}}

Объект **`WeakSet`** - коллекция, элементами которой могут быть только _объекты._ Ссылки на эти объекты в WeakSet являются слабыми. Каждый объект может быть добавлен в WeakSet только один раз.

## Синтаксис

```
 new WeakSet([iterable]);
```

### Параметры

- iterable
  - : При передаче [итерируемого объекта](/ru/docs/Web/JavaScript/Reference/Statements/for...of), все его элементы будут добавлены в новый WeakSet. `Null` обрабатывается как `undefined`.

## Описание

Объекты `WeakSet` представляют собой коллекции объектов. Каждый объект в WeakSet встречается только один раз, что обеспечивает его уникальность в рамках коллекции WeakSet.

Главным отличия от объекта {{jsxref("Set")}}:

- WeakSet **содержит только объекты**, тогда как Set - значения любого типа.
- Ссылки на объекты в WeakSet являются слабыми: если на объект, хранимый в WeakSet нет ни одной внешней ссылки, то сборщик мусора удалит этот объект. Также это означает, что WeakSet **не итерируем,** так как нет возможности получить список текущих хранимых в WeakSet объектов.

## Свойства

- `WeakSet.length`
  - : Значение свойства `length` всегда равно 0.
- {{jsxref("WeakSet.prototype")}}
  - : Представляет прототип конструктора Weak`Set`. Позволяет добавлять свойства всем объектам типа `WeakSet`.

## `Экземпляры WeakSet`

Все экземпляры класса `WeakSet` унаследованы от {{jsxref("WeakSet.prototype")}}.

### Свойства

{{page('ru/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/prototype','Properties')}}

### Методы

{{page('ru/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/prototype','Methods')}}

## Примеры

### Использование объекта `WeakSet`

```js
var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo); // false, foo не добавлен в WeakSet

ws.delete(window); // удаляет window из WeakSet
ws.has(window); // false, window был удалён
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
