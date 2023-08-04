---
title: Spread syntax
slug: Web/JavaScript/Reference/Operators/Spread_syntax
---

{{jsSidebar("Operators")}}**Spread syntax** позволяет расширить доступные для итерации элементы (например, массивы или строки) в местах

- для функций: где ожидаемое количество аргументов для вызовов функций равно нулю или больше нуля
- для элементов (литералов массива)
- для выражений объектов: в местах, где количество пар "ключ-значение" должно быть равно нулю или больше (для объектных литералов)

{{EmbedInteractiveExample("pages/js/expressions-spreadsyntax.html")}}

## Синтаксис

Для вызовов функций:

```
myFunction(...iterableObj);
```

Для литералов массива или строк:

```
[...iterableObj, '4', 'five', 6];
```

Для литералов объекта (новое в ECMAScript 2018):

```
let objClone = { ...obj };
```

## Примеры

### Spread в вызовах функций

#### Замена apply

Обычно используют {{jsxref( "Function.prototype.apply")}} в случаях, когда хотят использовать элементы массива в качестве аргументов функции.

```js
function myFunction(x, y, z) {}
var args = [0, 1, 2];
myFunction.apply(null, args);
```

С **spread syntax** вышеприведённое можно записать как:

```js
function myFunction(x, y, z) {}
var args = [0, 1, 2];
myFunction(...args);
```

Любой аргумент в списке аргументов может использовать **spread syntax**, и его можно использовать несколько раз.

```js
function myFunction(v, w, x, y, z) {}
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

#### Apply для new

Вызывая конструктор через ключевое слово `new`, невозможно использовать массив и `apply` **напрямую** (`apply` выполняет `[[Call]]`, а не `[[Construct]]`).Однако благодаря spread syntax, массив может быть с лёгкостью использован со словом `new:`

```js
var dateFields = [1970, 0, 1]; // 1 Jan 1970
var d = new Date(...dateFields);
```

Чтобы использовать `new` с массивом параметров без spread syntax, вам потребуется использование частичного применения:

```js
function applyAndNew(constructor, args) {
  function partial() {
    return constructor.apply(this, args);
  }
  if (typeof constructor.prototype === "object") {
    partial.prototype = Object.create(constructor.prototype);
  }
  return partial;
}

function myConstructor() {
  console.log("arguments.length: " + arguments.length);
  console.log(arguments);
  this.prop1 = "val1";
  this.prop2 = "val2";
}

var myArguments = ["hi", "how", "are", "you", "mr", null];
var myConstructorWithArguments = applyAndNew(myConstructor, myArguments);

console.log(new myConstructorWithArguments());
// (internal log of myConstructor):           arguments.length: 6
// (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null]
// (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}
```

### Spread в литералах массива

#### Более мощный литерал массива

Без spread syntax, применение синтаксиса литерала массива для создания нового массива на основе существующего недостаточно и требуется императивный код вместо комбинации методов `push`, `splice`, `concat` и т.д. С spread syntax реализация становится гораздо более лаконичной:

```js
var parts = ["shoulders", "knees"];
var lyrics = ["head", ...parts, "and", "toes"];
// ["head", "shoulders", "knees", "and", "toes"]
```

Аналогично развёртыванию в массиве аргументов, `...` может быть использован повсеместно и многократно в литерале массива.

#### Копирование массива

```js
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4);

// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
```

**Примечание:** Spread syntax на самом деле переходит лишь на один уровень глубже при копировании массива. Таким образом, он может не подходить для копирования многоразмерных массивов, как показывает следующий пример: (также как и c {{jsxref("Object.assign()")}}) и синтаксис spred

```js
const a = [[1], [2], [3]];
const b = [...a];
b.shift().shift(); // 1
// О нет. Теперь на массив "а" относятся также: а
//[[], [2], [3]]
```

#### Лучший способ конкатенации массивов

Для конкатенации массива часто используется {{jsxref("Array.concat")}}:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
```

С использованием spread syntax:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
```

{{jsxref("Array.unshift")}} часто используется для вставки массива значений в начало существующего массива. Без spread syntax:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2); // arr1 is now [3, 4, 5, 0, 1, 2]
```

С использованием spread syntax \[Следует отметить, что такой способ создаёт новый массив `arr1`. В отличие от {{jsxref("Array.unshift")}}, исходный массив не мутируется]:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr2, ...arr1]; // arr1 is now [3, 4, 5, 0, 1, 2]
```

### Spread в литералах объекта

Предложение [Rest/Spread Properties for ECMAScript](https://github.com/tc39/proposal-object-rest-spread) (стадия 4) добавляет свойства spread в [литералы объекта](/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer). Оно копирует собственные перечисляемые свойства данного объекта в новый объект.

Поверхностное копирование (без прототипа) или объединение объектов теперь возможно с использованием более короткого, чем {{jsxref("Object.assign()")}}, синтаксиса.

```js
var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

Обратите внимание, что {{jsxref("Object.assign()")}} запускает [setters](/ru/docs/Web/JavaScript/Reference/Functions/set), а **spread syntax** нет.

Обратите внимание, что вы не можете заменить или имитировать функцию {{jsxref("Object.assign()")}}:

```js
var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });

var mergedObj = merge(obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

var mergedObj = merge({}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

В приведённом выше примере оператор распространения не работает так, как можно было бы ожидать: он распространяет _массив_ аргументов в литерал _объекта_ благодаря параметру rest.

### Только для итерируемых объектов

Spread syntax ( кроме случаев spread properties) может быть применён только к итерируемым объектам ([iterable](/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) objects) :

```js
var obj = { key1: "value1" };
var array = [...obj]; // TypeError: obj is not iterable
```

### Spread с большим количеством значений

При использовании spread оператора в вызовах функций необходимо быть внимательным к возможному переполнению в ядре JavaScript. Существует ограничение по максимально возможному количеству аргументов функции. См. [`apply()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) для уточнения.

## Rest синтаксис (параметры)

Синтаксис для rest оператора выглядит таким же как и для spread оператора, однако он используется для деструктуризации массивов и объектов. Фактически, rest оператор противоположен spread оператору: последний раскладывает массив на элементы, тогда как первый собирает много элементов в один. См. [rest parameters.](/ru/docs/Web/JavaScript/Reference/Functions_and_function_scope/rest_parameters)

## Specifications

| Specification                                      | Status               | Comment                                                                                                                                                                                                                            |
| -------------------------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES2015', '#sec-array-initializer')}}   | {{Spec2('ES2015')}}  | Defined in several sections of the specification: [Array Initializer](http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer), [Argument Lists](http://www.ecma-international.org/ecma-262/6.0/#sec-argument-lists) |
| {{SpecName('ES2018', '#sec-object-initializer')}}  | {{Spec2('ES2018')}}  | Defined in [Object Initializer](http://www.ecma-international.org/ecma-262/9.0/#sec-object-initializer)                                                                                                                            |
| {{SpecName('ESDraft', '#sec-array-initializer')}}  | {{Spec2('ESDraft')}} | Без изменений.                                                                                                                                                                                                                     |
| {{SpecName('ESDraft', '#sec-object-initializer')}} | {{Spec2('ESDraft')}} | Без изменений.                                                                                                                                                                                                                     |

## Browser compatibility

{{Compat}}

## See also

- [Rest parameters](/ru/docs/Web/JavaScript/Reference/Functions_and_function_scope/rest_parameters) (also '`...`')
- [fn.apply](/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) (also '`...`')
