---
title: yield*
slug: Web/JavaScript/Reference/Operators/yield*
---

{{jsSidebar("Operators")}}

**Выражение `yield*` **используется для того, чтобы "передать управление" функцией-генератором другому {{jsxref("Statements/function*", "генератору")}} или итерируемому объекту.

## Синтаксис

```
 yield* [[expression]];
```

- `expression`
  - : Итерируемый объект

## Описание

Выражение `yield*` в функции-генераторе принимает итерируемый объект и возвращает его значения по очереди, как если бы эта функция-генератор возвращала их сама.

Значение выражения `yield*` само по себе равно последнему значению итерируемого объекта (т.е., того когда `done` равно true).

## Примеры

### Передача другому генератору

В следующем примере, значения полученные из `g1()` возвращаются из `g2` вызовами `next`, как будто бы она вычислила их сама.

```js
function* g1() {
  yield 2;
  yield 3;
  yield 4;
}

function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}

var iterator = g2();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### Другие итерируемые объекты

Помимо объектов генераторов, `yield*` может перебирать другие виды итерируемых объектов, т.е. массивы, строки, объекты аргументов и др.

```js
function* g3() {
  yield* [1, 2];
  yield* "34";
  yield* Array.from(arguments);
  // Определение этого итератора ниже
  yield* new PowesOfTwo(4);
}

var iterator = g3(5, 6);

// Значения из массива
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
// Из строки
console.log(iterator.next()); // { value: "3", done: false }
console.log(iterator.next()); // { value: "4", done: false }
// Из аргументов
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: 6, done: false }
// Из специального итератора
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 4, done: false }

console.log(iterator.next()); // { value: undefined, done: true }

// Итератор, который возвращает все степени двойки
// до maximum включительно
class PowersOfTwo {
  constructor(maximum) {
    this.maximum = maximum;
    this.value = 1;
  }
  [Symbol.iterator]() {
    const self = this;
    return {
      next() {
        if (self.value > self.maximum) return { done: true };

        const value = self.value;
        self.value *= 2;
        return { done: false, value };
      },
    };
  }
}
```

### Собственное значение выражения `yield*`

`yield*` - это выражение, а не оператор, поэтому оно имеет значение, равное последнему значению итератора

```js
function* g4() {
  yield* [1, 2, 3];
  return "foo";
}

var result;

function* g5() {
  result = yield* g4();
}

var iterator = g5();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true },
// g4() в этой точке вернёт { value: "foo", done: true }

console.log(result); // "foo"
```

## Спецификации

| Specification                         | Status               | Comment             |
| ------------------------------------- | -------------------- | ------------------- |
| {{SpecName('ES6', '#', 'Yield')}}     | {{Spec2('ES6')}}     | Initial definition. |
| {{SpecName('ESDraft', '#', 'Yield')}} | {{Spec2('ESDraft')}} |                     |

## Поддержка браузерами

{{Compat}}

## Специфичные для Firefox примечания

- Начиная с Gecko 33, разбор выражений yield было приведено к соответствию с последними спецификациями ES6 ({{bug(981599)}}):

  - Реализована корректная обработка разрыва строки. Разрыва строки между "yield" и "\*" быть не может. Такой код вызовет {{jsxref("SyntaxError")}}:

    ```js
    function* foo() {
      yield
      *[];
    }
    ```

## See also

- [The Iterator protocol](/ru/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Operators/yield", "yield")}}
