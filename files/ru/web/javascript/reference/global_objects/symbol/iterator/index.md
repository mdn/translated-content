---
title: Symbol.iterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/iterator
---

{{JSRef}}

**`Symbol.iterator`** — известный символ, задающий итератор объекта, используемый по умолчанию. Применяется в конструкции [`for...of`](/ru/docs/Web/JavaScript/Reference/Statements/for...of).

{{js_property_attributes(0, 0, 0)}}

## Описание

Каждый раз, когда объект должен быть проитерирован (как, например, в начале цикла `for..of`), метод `@@iterator` вызывается без аргументов, а возвращённый итератор используется непосредственно для получения значений.

Некоторые встроенные типы имеют стандартное итерационное поведение, в то время как другие типы (как {{jsxref("Object")}}) таким свойством не обладают. Метод `@@iterator` имеют следующие встроенные типы:

- {{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}
- {{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}
- {{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}
- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
- {{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}

Смотрите также [Протоколы перебора](/ru/docs/Web/JavaScript/Reference/Iteration_protocols) для получения дополнительных сведений.

## Примеры

### Пользовательские итерируемые объекты

Мы можем создавать собственные итерируемые объекты, подобно следующему коду:

```js
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable]; // [1, 2, 3]
```

### Плохо оформленные итераторы

Если метод `@@iterator` объекта не возвращает итератор, то это плохо оформленный итерируемый объект, его использование, скорее всего, приведёт к возникновению исключений или неправильному поведению:

```js
var nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () => 1
[...nonWellFormedIterable] // TypeError: [] is not a function
```

## Спецификации

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Протоколы перебора](/ru/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}
- {{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}
- {{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}
- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
- {{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}
