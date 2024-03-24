---
title: Итераторы и  генераторы
slug: Web/JavaScript/Guide/Iterators_and_generators
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Details_of_the_Object_Model", "Web/JavaScript/Guide/Meta_programming")}}

Обработка каждого элемента коллекции является весьма распространённой операцией. JavaScript предоставляет несколько способов перебора коллекции, от простого цикла [`for`](/ru/docs/Web/JavaScript/Reference/Statements/for) до [`map()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`filter()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) и [array comprehensions](/ru/docs/Web/JavaScript/Reference/Operators/Array_comprehensions). Итераторы и генераторы внедряют концепцию перебора непосредственно в ядро языка и обеспечивают механизм настройки поведения [`for...of`](/ru/docs/Web/JavaScript/Reference/Statements/for...of) циклов.

Подробнее см. также:

- [Iteration protocols](/ru/docs/Web/JavaScript/Reference/Iteration_protocols)
- [`for...of`](/ru/docs/Web/JavaScript/Reference/Statements/for...of)
- [`function*`](/ru/docs/Web/JavaScript/Reference/Statements/function*) и {{jsxref("Generator")}}
- [`yield`](/ru/docs/Web/JavaScript/Reference/Operators/yield) и [`yield*`](/ru/docs/Web/JavaScript/Reference/Operators/yield*)
- [Generator comprehensions](/ru/docs/Web/JavaScript/Reference/Operators/Generator_comprehensions) {{experimental_inline}}

## Итераторы

Объект является итератором, если он умеет обращаться к элементам коллекции по одному за раз, при этом отслеживая своё текущее положение внутри этой последовательности. В JavaScript итератор - это объект, который предоставляет метод next(), возвращающий следующий элемент последовательности. Этот метод возвращает объект с двумя свойствами: done и value.

После создания, объект-итератор может быть явно использован, с помощью вызовов метода next().

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
```

После инициализации, метод next() может быть вызван для поочерёдного доступа к парам ключ-значение в объекте:

```js
var it = makeIterator(["yo", "ya"]);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true
```

## Генераторы

В то время как пользовательские итераторы могут быть весьма полезны, при их программировании требуется уделять серьёзное внимание поддержке внутреннего состояния. **{{jsxref("Global_Objects/Generator","Генераторы","","true")}}** предоставляют мощную альтернативу: они позволяют определить алгоритм перебора, написав единственную функцию, которая умеет поддерживать собственное состояние.

Генераторы - это специальный тип функции, который работает как фабрика итераторов. Функция становится генератором, если содержит один или более {{jsxref("Operators/yield","yield")}} операторов и использует {{jsxref("Statements/function*","function*")}} синтаксис.

```js
function* idMaker() {
  var index = 0;
  while (true) yield index++;
}

var it = idMaker();

console.log(it.next().value); // 0
console.log(it.next().value); // 1
console.log(it.next().value); // 2
// ...
```

## Итерируемые объекты

Объект является итерируемым, если в нем определён способ перебора значений, то есть, например, как значения перебираются в конструкции {{jsxref("Statements/for...of", "for..of")}}. Некоторые встроенные типы, такие как {{jsxref("Array")}} или {{jsxref("Map")}}, по умолчанию являются итерируемыми, в то время как другие типы, как, например, {{jsxref("Object")}}, таковыми не являются.

Чтобы быть итерируемым, объект обязан реализовать метод **@@iterator**, что означает, что он (или один из объектов выше по [цепочке прототипов](/ru/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) обязан иметь свойство с именем {{jsxref("Symbol.iterator")}}:

### Пользовательские итерируемые объекты

Мы можем создать свои собственные итерируемые объекты так:

```js
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable]; // [1, 2, 3]
```

### Встроенные итерируемые объекты

Объекты {{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} и {{jsxref("Set")}} являются итерируемыми, потому что их прототипы содержат метод {{jsxref("Symbol.iterator")}}.

### Синтаксис для итерируемых объектов

Некоторые выражения работают с итерируемыми объектами, например, [`for-of`](/ru/docs/Web/JavaScript/Reference/Statements/for...of) циклы, [spread operator](/ru/docs/Web/JavaScript/Reference/Operators/Spread_operator), [`yield*`](/ru/docs/Web/JavaScript/Reference/Operators/yield*), и [destructuring assignment](/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

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

## Продвинутые генераторы

Генераторы вычисляют результаты своих yield выражений по требованию, что позволяет им эффективно работать с последовательностями с высокой вычислительной сложностью, или даже с бесконечными последовательностями, как продемонстрировано выше.

`Метод` {{jsxref("Global_Objects/Generator/next","next()")}} также принимает значение, которое может использоваться для изменения внутреннего состояния генератора. Значение, переданное в next(), будет рассматриваться как результат последнего yield выражения, которое приостановило генератор.

Вот генератор чисел Фибоначчи, использующий `next(x)` для перезапуска последовательности:

```js
function* fibonacci() {
  var fn1 = 1;
  var fn2 = 1;
  while (true) {
    var current = fn2;
    fn2 = fn1;
    fn1 = fn1 + current;
    var reset = yield current;
    if (reset) {
      fn1 = 1;
      fn2 = 1;
    }
  }
}

var sequence = fibonacci();
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 5
console.log(sequence.next().value); // 8
console.log(sequence.next().value); // 13
console.log(sequence.next(true).value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
```

> **Примечание:** Интересно, что вызов `next(undefined)` равносилен вызову `next()`. При этом вызов next() для нового генератора с любым аргументом, кроме undefined, спровоцирует исключение `TypeError`.

Можно заставить генератор выбросить исключение, вызвав его метод {{jsxref("Global_Objects/Generator/throw","throw()")}} и передав в качестве параметра значение исключения, которое должно быть выброшено. Это исключение будет выброшено из текущего приостановленного контекста генератора так, будто текущий приостановленный `yield` оператор являлся `throw` оператором.

Если `yield` оператор не встречается во время обработки выброшенного исключения, то исключение передаётся выше через вызов `throw()`, и результатом последующих вызовов `next()` будет свойство `done` равное `true`.

У генераторов есть метод {{jsxref("Global_Objects/Generator/return","return(value)")}}, который возвращает заданное значение и останавливает работу генератора.

{{PreviousNext("Web/JavaScript/Guide/Details_of_the_Object_Model", "Web/JavaScript/Guide/Meta_programming")}}
