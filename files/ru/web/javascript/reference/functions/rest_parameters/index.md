---
title: Остаточные параметры (rest parameters)
slug: Web/JavaScript/Reference/Functions/rest_parameters
---

{{jsSidebar("Functions")}}

Синтаксис **остаточных параметров** функции позволяет представлять неограниченное множество аргументов в виде массива.

{{EmbedInteractiveExample("pages/js/functions-restparameters.html")}}

## Синтаксис

```js
function(a, b, ...theArgs) {
  // ...
}
```

## Описание

Если последний именованный аргумент функции имеет префикс `...`, он автоматически становится массивом с элементами от `0` до `theArgs.length-1` в соответствии с актуальным количеством аргументов, переданных в функцию.

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("один", "два", "три", "четыре", "пять", "шесть");

// Console Output:
// a, один
// b, два
// manyMoreArgs, [три, четыре, пять, шесть]
```

### Отличия остаточных параметров от объекта `arguments`

Существует три основных отличия остаточных параметров от объекта [`arguments`](/ru/docs/Web/JavaScript/Reference/Functions/arguments):

- остаточные параметры включают только те, которым не задано отдельное имя, в то время как объект `arguments` содержит все аргументы, передаваемые в функцию;
- объект `arguments` не является массивом, в то время как остаточные параметры являются экземпляром [`Array`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array) и методы [`sort`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), [`map`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`forEach`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) или [`pop`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) могут непосредственно у них использоваться;
- объект `arguments` имеет дополнительную функциональность, специфичную только для него (например, свойство `callee`).

### Из аргументов в массив

Остаточные параметры были введены для уменьшения количества шаблонного кода:

```js
// До появления остаточных параметров "arguments" конвертировали в обычный массив используя:

function f(a, b) {
  var normalArray = Array.prototype.slice.call(arguments);
  // -- или --
  var normalArray = [].slice.call(arguments);
  // -- или --
  var normalArray = Array.from(arguments);

  var first = normalArray.shift(); // OK, даёт первый аргумент
  var first = arguments.shift(); // ERROR (arguments не является обычным массивом)
}

// Теперь мы можем легко получить остаточные параметры как обычный массив

function f(...args) {
  var normalArray = args;
  var first = normalArray.shift(); // OK, даёт первый аргумент
}
```

### Деструктуризация остаточных параметров

Остаточные параметры могут быть деструктурированы (только массивы). Это означает, что их данные могут быть заданы как отдельные значения. Смотрите [Деструктурирующее присваивание](/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

```
function f(...[a, b, c]) {
  return a + b + c;
}

f(1)          // NaN (b и c равны undefined)
f(1, 2, 3)    // 6
f(1, 2, 3, 4) // 6 (четвёртый параметр не деструктурирован)
```

## Примеры

В этом примере первый аргумент задан как `"a"`, второй как `"b"`, так что эти аргументы используются как обычно. Однако третий аргумент `"manyMoreArgs"` будет массивом, который содержит 3-й, 4-й, 5-й, 6-й ... n-й аргументы, которые передаст пользователь.

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("один", "два", "три", "четыре", "пять", "шесть");

// a, один
// b, два
// manyMoreArgs, [три, четыре, пять, шесть]
```

Ниже... даже если передано одно значение последним аргументом, оно всё равно помещается в массив.

```js
// использование той же функции, что и в примере выше

myFun("один", "два", "три");

// a, один
// b, два
// manyMoreArgs, [три]
```

Ниже... третий аргумент не был передан, но "manyMoreArgs" всё ещё массив (хотя и пустой).

```js
// использование той же функции, что и в примере выше

myFun("один", "два");

// a, один
// b, два
// manyMoreArgs, []
```

Поскольку `theArgs` является массивом, количество элементов в нём определяется свойством `length`:

```js
function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
```

В следующем примере, остаточные параметры используются для сбора всех аргументов после первого в массив. Каждый из них умножается на первый параметр и возвращается массив:

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

Методы `Array` могут быть использованы на остаточных параметрах, но не на объекте `arguments`:

```js
function sortRestArgs(...theArgs) {
  var sortedArgs = theArgs.sort();
  return sortedArgs;
}

console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7

function sortArguments() {
  var sortedArgs = arguments.sort();
  return sortedArgs; // это никогда не выполнится
}

console.log(sortArguments(5, 3, 7, 1)); // TypeError (arguments.sort is not a function)
```

Чтобы использовать методы `Array` на объекте `arguments`, нужно преобразовать его в настоящий массив.

```js
function sortArguments() {
  var args = Array.from(arguments);
  var sortedArgs = args.sort();
  return sortedArgs;
}
console.log(sortArguments(5, 3, 7, 1)); // 1, 3, 5, 7
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Объект arguments](/ru/docs/Web/JavaScript/Reference/Functions/arguments)
- [Array](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Функции](/ru/docs/Web/JavaScript/Reference/Functions)
- [Оператор распространения](/ru/docs/Web/JavaScript/Reference/Operators/Spread_operator)
- [Оригинальное предложение на ecmascript.org](http://wiki.ecmascript.org/doku.php?id=harmony:rest_parameters)
- [JavaScript arguments object and beyond](http://javascriptweblog.wordpress.com/2011/01/18/javascripts-arguments-object-and-beyond/)
