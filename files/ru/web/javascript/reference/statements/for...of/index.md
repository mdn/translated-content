---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
---

{{jsSidebar("Statements")}}

## Сводка

Оператор `for...of` выполняет цикл обхода [итерируемых объектов](/ru/docs/Web/JavaScript/Guide/iterable) (включая {{jsxref("Array")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, объект [аргументов](/ru/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments) и подобных), вызывая на каждом шаге итерации операторы для каждого значения из различных свойств объекта.

## Синтаксис

```
for (variable of iterable) {
  statement
}
```

- `variable`
  - : На каждом шаге итерации `variable` присваивается значение нового свойства объекта _`iterable`_. Переменная _`variable`_ может быть также объявлена с помощью `const`, `let` или `var`.
- `iterable`
  - : Объект, перечисляемые свойства которого обходятся во время выполнения цикла.

## Примеры

### Обход {{jsxref("Array")}}

```
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31
```

Можно также использовать [`const`](/ru/docs/Web/JavaScript/Reference/Statements/const) вместо [`let`](/ru/docs/Web/JavaScript/Reference/Statements/let), если не нужно переназначать переменные внутри блока.

```
let iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

### Обход {{jsxref("String")}}

```
let iterable = 'boo';

for (let value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```

### Обход {{jsxref("TypedArray")}}

```
let iterable = new Uint8Array([0x00, 0xff]);

for (let value of iterable) {
  console.log(value);
}
// 0
// 255
```

### Обход {{jsxref("Map")}}

```
let iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (let entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### Обход {{jsxref("Set")}}

```
let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### Обход объекта {{jsxref("arguments")}}

```
(function() {
  for (let argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3);

// 1
// 2
// 3
```

### Обход DOM коллекций

Обход DOM коллекций наподобие {{domxref("NodeList")}}: следующий пример добавляет класс `read` параграфам, являющимся непосредственными потомками статей:

```
// Примечание: работает только на платформах, где
// реализован NodeList.prototype[Symbol.iterator]
let articleParagraphs = document.querySelectorAll('article > p');

for (let paragraph of articleParagraphs) {
  paragraph.classList.add('read');
}
```

### Закрытие итераторов

В циклах `for...of` аварийный выход осуществляется через `break`, `throw` или `return`. Во всех вариантах итератор завершается.

```
function* foo(){
  yield 1;
  yield 2;
  yield 3;
};

for (let o of foo()) {
  console.log(o);
  break; //  итератор закрывается, возврат
}
```

### Обход генераторов

Вы можете выполнять обход [генераторов](/ru/docs/Web/JavaScript/Reference/Statements/function*), вот пример:

```js
function* fibonacci() {
  // функция-генератор
  let [prev, curr] = [0, 1];
  for (;;) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  // ограничивает последовательность на 1000
  if (n > 1000) break;
  console.log(n);
}
```

#### Не пытайтесь повторно использовать генератор

Генераторы нельзя использовать дважды, даже если цикл `for...of` завершится аварийно, например, через оператор {{jsxref("Statements/break", "break")}} . При выходе из цикла генератор завершается, и любые попытки получить из него значение обречены.

```js example-bad
var gen = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();
for (let o of gen) {
  console.log(o);
  break; // Завешение обхода
}

// Генератор нельзя повторно обойти, следующее не имеет смысла!
for (let o of gen) {
  console.log(o); // Не будет вызван
}
```

### Обход итерируемых объектов

Кроме того, можно сделать обход объекта, явно реализующего [iterable](/ru/docs/Web/JavaScript/Reference/Iteration_protocols#iterable):

```
var iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (var value of iterable) {
  console.log(value);
}
// 0
// 1
// 2
```

### Различия между `for...of` и `for...in`

Оба оператора, и `for...in` и `for...of` производят обход объектов . Разница в том, как они это делают.

Для {{jsxref("Statements/for...in", "for...in")}} обход [перечисляемых свойств](/ru/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) объекта осуществляется в произвольном порядке.

Для `for...of` обход происходит в соответствии с тем, какой порядок определён в [итерируемом объекте](/ru/docs/Web/JavaScript/Guide/iterable).

Следующий пример показывает различия в работе циклов `for...of` и `for...in` при обходе {{jsxref("Array")}}.

```
Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
  console.log(i); // выведет 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // выведет 0, 1, 2, "foo"
  }
}

for (let i of iterable) {
  console.log(i); // выведет 3, 5, 7
}
```

Разберёмся шаг за шагом в вышеописанном коде.

```
Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';
```

Каждый объект унаследует метод `objCustom` и каждый массив {{jsxref("Array")}} унаследует метод `arrCustom` благодаря созданию их в {{jsxref("Object.prototype")}} и {{jsxref("Array.prototype")}}. Объект `iterable` унаследует методы `objCustom` и `arrCustom` из-за [наследования через прототип](/ru/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

```
for (let i in iterable) {
  console.log(i); // выведет 0, 1, 2, "foo", "arrCustom", "objCustom"
}
```

Цикл выводит только [перечисляемые свойства](/ru/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) объекта `iterable`, в порядке их создания. Он не выводит **значения** `3`, `5`, `7` и `hello` поскольку они **не являются** перечисляемыми, фактически они вообще не являются свойствами, они являются **значениями**. Выводятся же **имена свойств и методов**, например `arrCustom` и `objCustom`. Если вы ещё не совсем поняли, по каким свойствам осуществляется обход, вот дополнительное объяснение того, как работает {{jsxref("Statements/for...in", "array iteration and for...in", "#Array_iteration_and_for...in")}} .

```
for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // выведет 0, 1, 2, "foo"
  }
}
```

Цикл аналогичен предыдущему, но использует {{jsxref("Object.prototype.hasOwnProperty()", "hasOwnProperty()")}} для проверки того, собственное ли это свойство объекта или унаследованное. Выводятся только собственные свойства. Имена `0`, `1`, `2` и `foo` принадлежат только экземпляру объекта (**не унаследованы**). Методы `arrCustom` и `objCustom` не выводятся, поскольку они **унаследованы**.

```
for (let i of iterable) {
  console.log(i); // выведет 3, 5, 7
}
```

Этот цикл обходит `iterable` и выводит те значения [итерируемого объекта](/ru/docs/Web/JavaScript/Guide/Iterators_and_Generators#%D0%98%D1%82%D0%B5%D1%80%D0%B8%D1%80%D1%83%D0%B5%D0%BC%D1%8B%D0%B5_%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B), которые определены в способе его перебора, т.е. не свойства объекта, а значения массива `3`, `5`, `7` .

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Object.entries()")}}
