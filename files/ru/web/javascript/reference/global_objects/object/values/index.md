---
title: Object.values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
---

{{JSRef}}

Метод **`Object.values()`** возвращает массив значений перечисляемых свойств объекта в том же порядке что и цикл {{jsxref("Statements/for...in", "for...in")}}. Разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов.

{{EmbedInteractiveExample("pages/js/object-values.html")}}

## Синтаксис

```
Object.values(obj)
```

### Параметры

- `obj`
  - : Объект, чьи значения перечисляемых свойств будут возвращены.

### Возвращаемое значение

Массив содержащий значения перечисляемых свойств объекта.

## Описание

`Object.values()` возвращает массив, чьи элементы это значения перечисляемых свойств найденных в объекте. Порядок такой же как если пройтись по объекту циклом вручную.

## Примеры

```js
var obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// Массив как объект
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// Массив как объект со случайным порядком ключей
// Когда мы используем нумерованные ключ, значения возвращаются в порядке возрастания
var an_obj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo неперечисляемое свойство
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
console.log(Object.values(my_obj)); // ['bar']

// Аргумент, не являющийся объектом, будет приведён к объекту
console.log(Object.values("foo")); // ['f', 'o', 'o']
```

## Полифил

Для добавления совместимости `Object.values` со старым окружением, которое не поддерживает нативно его, вы можете найти полифил здесь [tc39/proposal-object-values-entries](https://github.com/tc39/proposal-object-values-entries) или в [es-shims/Object.values](https://github.com/es-shims/Object.values) репозитории.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Перечисляемость и принадлежность свойств](/ru/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.entries()")}} {{experimental_inline}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
