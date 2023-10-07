---
title: Set() конструктор
slug: Web/JavaScript/Reference/Global_Objects/Set/Set
---

{{JSRef}}

**Конструктор Set** позволяет создавать объекты Set, в которых хранятся уникальные значения любого типа, будь то [примитивные значения](/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/Primitive) или ссылки на объекты.

{{EmbedInteractiveExample("pages/js/set-prototype-constructor.html")}}

## Синтаксис

```
new Set([iterable])
```

### Параметры

- `iterable` {{optional_inline}}

  - : Если передаётся [итеративный объект](/ru/docs/Web/JavaScript/Reference/Statements/for...of), все его элементы будут добавлены в новый Set.

    Если вы не укажете этот параметр или его значение равно нулю, новый набор будет пустым.

### Возвращаемое значение

Новый объект Set.

## Примеры

### Использование объекта Set

```js
let mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("какой-то текст"); // Set [ 1, 5, 'какой-то текст' ]
let o = { a: 1, b: 2 };
mySet.add(o);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

<!---->

- [Set](/ru/docs/Web/JavaScript/Reference/Global_Objects/Set)
