---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
---

{{JSRef}}

**`Object.entries()`** метод возвращает массив собственных перечисляемых свойств указанного объекта в формате `[key, value]`, в том же порядке, что и в цикле {{jsxref("Statements/for...in", "for...in")}} (разница в том, что for-in перечисляет свойства из цепочки прототипов). Порядок элементов в массиве который возвращается **`Object.entries()`** не зависит от того как объект объявлен. Если существует необходимость в определённом порядке, то массив должен быть отсортирован до вызова метода, например `Object.entries(obj).sort((a, b) => a[0] - b[0]);`.

{{EmbedInteractiveExample("pages/js/object-entries.html")}}

## Синтаксис

```
Object.entries(obj)
```

### Параметры

- `obj`
  - : Объект, чьи перечислимые свойства будут возвращены в виде массива `[key, value]`.

### Возвращаемое значение

Массив перечислений собственных свойств объекта с парами `[key, value]`.

## Описание

`Object.entries()` возвращает массив, элементами которого являются массивы, соответствующие перечисляемому свойству пары `[key, value],` найденной прямо в `object`. Порядок свойств тот же, что и при прохождении циклом по свойствам объекта вручную.

## Примеры

```js
var obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// массив как объект
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// массив как объект c random сортировкой ключей
var an_obj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(an_obj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable
var my_obj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
    },
  },
);
my_obj.foo = "bar";
console.log(Object.entries(my_obj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]
```

```
// returns an empty array for any primitive type, since primitives have no own properties
console.log(Object.entries(100)); // [ ]

// iterate through key-value gracefully
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```

### Преобразование `Object` в `Map`

Конструктор {{jsxref("Map", "new Map()")}} принимает повторение _значений_. С `Object.entries` вы легко можете преобразовать {{jsxref("Object")}} в {{jsxref("Map")}}:

```js
var obj = { foo: "bar", baz: 42 };
var map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }
```

### Итерация по `Object`

Используя [метод Разбора Массивов](/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%D0%A0%D0%B0%D0%B7%D0%B1%D0%BE%D1%80_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%BE%D0%B2) Вы можете легко итерировать объекты.

```
const obj = { foo: 'bar', baz: 42 };
Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"
```

## Полифил

Чтобы добавить поддержку `Object.entries` в более старых окружениях, которые не поддерживают его нативно, вы можете найти полифил в [tc39/proposal-object-values-entries](https://github.com/tc39/proposal-object-values-entries) или [es-shims/Object.entries](https://github.com/es-shims/Object.entries) репозиториях.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Enumerability and ownership of properties](/ru/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}} {{experimental_inline}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
