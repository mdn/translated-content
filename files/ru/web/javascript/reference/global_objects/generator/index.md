---
title: Generator
slug: Web/JavaScript/Reference/Global_Objects/Generator
---

{{JSRef}}

**`Генератор`** - это объект, возвращаемый {{jsxref("Statements/function*", "функцией-генератором", "", 1)}} и соответствующий как ["Итерируемому" протоколу](/ru/docs/Web/JavaScript/Reference/Iteration_protocols#iterable), так и [протоколу "Итератор"](/ru/docs/Web/JavaScript/Reference/Iteration_protocols#iterator).

## Конструктор

Этот объект не может быть инстанциирован напрямую. Вместо этого, экземпляр `Generator` может быть возвращён из [функции-генератора](/ru/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction):

```js
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"

console.log(gen.next().value); // 1
console.log(generator().next().value); // 1
console.log(generator().next().value); // 1
```

## Методы экземпляра

- {{jsxref("Generator.prototype.next()")}}
  - : Возвращает значение, полученное выражением {{jsxref("Operators/yield", "yield")}}.
- {{jsxref("Generator.prototype.return()")}}
  - : Возвращает заданное значение и заканчивает генератор.
- {{jsxref("Generator.prototype.throw()")}}
  - : Выдаёт ошибку генератора.

## Пример

### Бесконечный Итератор

```js
function* idMaker() {
  var index = 0;
  while (true) yield index++;
}

var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...
```

## Спецификации

{{Specifications}}

## Совместимость

{{Compat}}

## See also

### Legacy generators

- [The legacy Iterator protocol](/ru/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol)

### ES2015 generators

- {{jsxref("Functions", "Functions", "", 1)}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("GeneratorFunction")}}
- [The Iterator protocol](/ru/docs/Web/JavaScript/Guide/The_Iterator_protocol)
