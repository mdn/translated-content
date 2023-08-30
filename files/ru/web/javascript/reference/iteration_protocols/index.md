---
title: The Iterator protocol
slug: Web/JavaScript/Reference/Iteration_protocols
---

{{jsSidebar("More")}}

Одно из нововведений стандарта ECMAScript 2015 - протоколы перебора, которые могут реализованы любым объектом, соблюдая при этом определённые правила.

## Протоколы перебора

Протоколы перебора включают [the "iterable" protocol](#The_.22iterable.22_protocol) и [the "iterator" protocol](#The_.22iterator.22_protocol).

### Протокол "Итерируемый"

Протокол "**Итерируемый**" позволяет JavaScript объектам определять или настраивать поведение перебора, например, то какие значения перебираются в конструкции {{jsxref("Statements/for...of", "for..of")}}. Некоторые встроенные типы, такие как {{jsxref("Array")}} или {{jsxref("Map")}}, имеют поведение перебора по умолчанию, в то время как другие типы (такие как {{jsxref("Object")}}) его не имеют

Для того, чтобы объект был **итерируемым**, в нем должен быть реализован метод **@@iterator**, т.е. этот объект (или любой из объектов из его [prototype chain](/ru/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) должен иметь свойство с именем {{jsxref("Symbol")}}`.iterator`:

| Свойство            | Значение                                                                                                        |
| ------------------- | --------------------------------------------------------------------------------------------------------------- |
| `[Symbol.iterator]` | Функция без аргументов, возвращающая объект, соответствующий [iterator protocol](#The_.22iterator.22_protocol). |

Всякий раз, когда объект подлежит перебору (например, когда в коде встречается цикл `for..of`), вызывается его метод `@@iterator` без аргументов, и возвращаемый **iterator** используется для получения перебираемых значений.

### Протокол "Итератор"

Протокол "**Итератор**" определяет стандартный способ получения последовательности значений (конечной или бесконечной).

Объект является итератором, если в нем определён метод **next()** , реализующий следующую логику:

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Свойство</th>
      <th scope="col">Значение</th>
    </tr>
    <tr>
      <td><code>next</code></td>
      <td>
        <p>Функция без аргументов, возвращающая объект с двумя свойствами:</p>
        <ul>
          <li>
            <code>done</code> (boolean)
            <ul>
              <li>
                Принимает значение <code>true</code> если итератор достиг конца
                итерируемой последовательности. В этом случае свойство
                <code>value</code> может определять
                <em>возвращаемое значение</em> итератора. Возвращаемые значения
                объясняются более подробно
                <a
                  href="http://www.2ality.com/2013/06/iterators-generators.html#generators-as-threads"
                  >here</a
                >.
              </li>
              <li>
                Принимает значение <code>false</code> если итератор может
                генерировать следующее значение последовательности. Это
                эквивалентно не указанному done.
              </li>
            </ul>
          </li>
          <li>
            <code>value</code> - любое JavaScript значение, возвращаемое
            итератором. Может быть опущено, если
            <code>done имеет значение</code> <code>true</code>.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Некоторые итераторы, в свою очередь, итерабельны:

```js
var someArray = [1, 5, 7];
var someArrayEntries = someArray.entries();

someArrayEntries.toString(); // "[object Array Iterator]"
someArrayEntries === someArrayEntries[Symbol.iterator](); // true
```

## Примеры использования протокола "итератора"

{{jsxref("String")}} является примером встроенного итерабельного объекта:

```js
var someString = "hi";
typeof someString[Symbol.iterator]; // "function"
```

По умолчанию итератор строки возвращает символы строки друг за другом:

```js
var iterator = someString[Symbol.iterator]();
iterator + ""; // "[object String Iterator]"

iterator.next(); // { value: "h", done: false }
iterator.next(); // { value: "i", done: false }
iterator.next(); // { value: undefined, done: true }
```

Некоторые встроенные конструкции языка, например, [spread operator](/ru/docs/Web/JavaScript/Reference/Operators/Spread_operator), используют в своей внутренней реализации тот же протокол итерации:

```js
[...someString]; // ["h", "i"]
```

Поведение итератора можно переопределить применив собственный `@@iterator`:

```js
var someString = new String("hi"); // need to construct a String object explicitly to avoid auto-boxing

someString[Symbol.iterator] = function () {
  return {
    // this is the iterator object, returning a single element, the string "bye"
    next: function () {
      if (this._first) {
        this._first = false;
        return { value: "bye", done: false };
      } else {
        return { done: true };
      }
    },
    _first: true,
  };
};
```

Notice how redefining `@@iterator` affects the behavior of built-in constructs, that use the iteration protocol:

```js
[...someString]; // ["bye"]
someString + ""; // "hi"
```

## Встроенная итерируемость

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} и {{jsxref("Set")}} итерируемы, так как их прототипы содержат `@@iterator` метод, а {{jsxref("Object")}} нет, так как прототип {{jsxref("Object")}} не содержит метода `@@iterator`

## Итерируемость определённая пользователем

Мы можем создать итерируемый объект сами:

```js
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable]; // [1, 2, 3]
```

## Builtin APIs need iterables

{{jsxref("Map", "Map([iterable])")}}, {{jsxref("WeakMap", "WeakMap([iterable])")}}, {{jsxref("Set", "Set([iterable])")}} and {{jsxref("WeakSet", "WeakSet([iterable])")}}:

```js
var myObj = {};
new Map([
  [1, "a"],
  [2, "b"],
  [3, "c"],
]).get(2); // "b"
new WeakMap([
  [{}, "a"],
  [myObj, "b"],
  [{}, "c"],
]).get(myObj); // "b"
new Set([1, 2, 3]).has(3); // true
new Set("123").has("2"); // true
new WeakSet(
  (function* () {
    yield {};
    yield myObj;
    yield {};
  })(),
).has(myObj); // true
```

and {{jsxref("Promise.all", "Promise.all(iterable)")}}, {{jsxref("Promise.race", "Promise.race(iterable)")}}, {{jsxref("Array.from", "Array.from()")}}

## Синтаксис предполагающий итерируемость

[for-of](/ru/docs/Web/JavaScript/Reference/Statements/for...of), [spread](/ru/docs/Web/JavaScript/Reference/Operators/Spread_operator), yield\*, destructing - использование данного синтаксиса возможно только если типы данных, к которым он применяется, итерируемы:

```js
for (let value of ["a", "b", "c"]) {
  console.log(value);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

gen().next()[(a, b, c)] = // { value:"a", done:false }
  new Set(["a", "b", "c"]);
a; // "a"
```

## Non-well-formed iterables

If an iterable's `@@iterator` method doesn't return an iterator object, then it's a non-well-formed iterable, using it as such is likely to result in runtime exceptions or buggy behavior:

```js
var nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () => 1
[...nonWellFormedIterable] // TypeError: [] is not a function
```

## Объект-генератор является итератором или итерируемым

И тем и другим

```js
var aGeneratorObject = function*(){
    yield 1;
    yield 2;
    yield 3;
}()
typeof aGeneratorObject.next
// "function", because it has a next method, so it's an iterator
typeof aGeneratorObject[Symbol.iterator]
// "function", because it has an @@iterator method, so it's an iterable
aGeneratorObject[Symbol.iterator]() === aGeneratorObject
// true, because its @@iterator method return its self (an iterator), so it's an well-formed iterable
[...aGeneratorObject]
// [1, 2, 3]
```

## Примеры

### Простой итератор

```js
function makeIterator(array) {
  var nextIndex = 0;

  return {
    next: function () {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { done: true };
    },
  };
}

var it = makeIterator(["yo", "ya"]);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true
```

### Бесконечный итератор

```js
function idMaker() {
  var index = 0;

  return {
    next: function () {
      return { value: index++, done: false };
    },
  };
}

var it = idMaker();

console.log(it.next().value); // '0'
console.log(it.next().value); // '1'
console.log(it.next().value); // '2'
// ...
```

### С генератором

```js
function* makeSimpleGenerator(array) {
  var nextIndex = 0;

  while (nextIndex < array.length) {
    yield array[nextIndex++];
  }
}

var gen = makeSimpleGenerator(["yo", "ya"]);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done); // true

function* idMaker() {
  var index = 0;
  while (true) yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // '0'
console.log(gen.next().value); // '1'
console.log(gen.next().value); // '2'
// ...
```

## Спецификация

| Спецификация                                           | Статус               | Комментарии              |
| ------------------------------------------------------ | -------------------- | ------------------------ |
| {{SpecName('ES2015', '#sec-iteration', 'Iteration')}}  | {{Spec2('ES2015')}}  | Изначальное определение. |
| {{SpecName('ESDraft', '#sec-iteration', 'Iteration')}} | {{Spec2('ESDraft')}} |                          |

## Смотрите также

- Дополнительную информацию о генераторах ES 2015 смотри [на отдельной странице.](/ru/docs/Web/JavaScript/Reference/Statements/function*)
