---
title: Объект arguments
slug: Web/JavaScript/Reference/Functions/arguments
---

{{jsSidebar("Functions")}}

Объект **`arguments`** — это подобный массиву объект, который содержит аргументы, переданные в функцию.

> **Примечание:** Если вы пишете ES6-совместимый код, то лучше использовать [остаточные параметры](/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters).

> **Примечание:** "Подобный массиву" означает, что `arguments` имеет свойство {{jsxref("Functions/arguments/length", "length")}}, а элементы индексируются начиная с нуля. Но при этом он не может обращаться к встроенным методам {{JSxRef("Array")}}, таким как {{jsxref("Array.forEach", "forEach()")}} или {{jsxref("Array.map", "map()")}}. Подробнее об этом в [§Описании](/ru/docs/Web/JavaScript/Reference/Functions/arguments#Описание).

{{EmbedInteractiveExample("pages/js/functions-arguments.html")}}

## Синтаксис

```
arguments
```

## Описание

Объект `arguments` - это локальная переменная, доступная внутри любой (нестрелочной) функции. Объект `arguments` позволяет ссылаться на аргументы функции внутри неё. Он состоит из переданных в функцию аргументов, индексация начинается с 0. Например, если в функцию было передано 3 аргумента, обратиться к ним можно следующим образом:

```js
arguments[0];
arguments[1];
arguments[2];
```

Аргументам может быть присвоено значение:

```js
arguments[1] = "new value";
```

Объект `arguments` не является {{jsxref("Array")}}. Он похож на массив, но не обладает ни одним из его свойств, кроме [`length`](/ru/docs/Web/JavaScript/Reference/Functions/arguments/length). Например, у него нет метода [`pop`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/pop). Однако, он может быть преобразован в обычный массив:

```js
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

// ES2015
const args = Array.from(arguments);
const args = [...arguments];
```

> **Предупреждение:** Использование `slice` на объекте `arguments` не позволяет сделать оптимизации в некоторых JavaScript движках (например, V8 — [подробнее](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments)). Если они важны, можно попробовать вместо этого создать новый массив с аналогичной длиной и заполнить его элементами объекта `arguments.` Альтернативный вариант — использовать конструктор `Array` как функцию:
>
> ```js
> var args =
>   arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
> ```

Объект `arguments` можно использовать при вызове функции с бо́льшим количеством аргументов, чем было предусмотрено в её объявлении. Такой способ удобен для функций, в которые допустимо передавать переменное количество аргументов. Можно воспользоваться [`arguments.length`](/ru/docs/Web/JavaScript/Reference/Functions/arguments/length), чтобы определить количество переданных в функцию аргументов, а затем обработать каждый из них с помощью объекта `arguments`. Чтобы определить количество параметров функции, описанных в её [сигнатуре](/ru/docs/Glossary/Signature/Function), можно использовать свойство [`Function.length`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

### Использование `typeof` с объектом `arguments`

Применение оператора `typeof` к `arguments` вернёт 'object'.

```
console.log(typeof arguments); // 'object'
```

Определение типов аргументов может быть выполнено применением оператора `typeof` и индексацией.

```
// выведет тип первого аргумента
console.log(typeof arguments[0]);
```

### Использование оператора расширения для объекта `arguments`

Как и с обычными массива-подобными объектами, для преобразования объекта `arguments` в обычный массив можно использовать метод {{jsxref("Array.from()")}} или [оператор расширения:](/ru/docs/Web/JavaScript/Reference/Operators/Spread_operator)

```js
var args = Array.from(arguments);
var args = [...arguments];
```

## Свойства

- [`arguments.callee`](/ru/docs/Web/JavaScript/Reference/Functions/arguments/callee)
  - : Ссылка на функцию, которая выполняется в текущий момент.
- [`arguments.caller`](/ru/docs/Web/JavaScript/Reference/Functions/arguments/caller)
  - : Ссылка на функцию, которая вызвала функцию, выполняющуюся в текущий момент.
- [`arguments.length`](/ru/docs/Web/JavaScript/Reference/Functions/arguments/length)
  - : Количество переданных в функцию аргументов.
- [`arguments[@@iterator]`](/ru/docs/Web/JavaScript/Reference/Functions/arguments/@@iterator)
  - : Возвращает новый объект `Array Iterator`, содержащий значения для каждого индекса в массиве.

## Примеры

### Создание функции, соединяющей несколько строк

Данный пример описывает функцию, которая соединяет несколько строк. Для этой функции объявлен только один аргумент, определяющий символ-разделитель соединяемых элементов. Функция определена следующим образом:

```js
function myConcat(separator) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

Вы можете передать любое количество аргументов в эту функцию. Она создаёт строку, используя каждый аргумент:

```js
// возвращает "red, orange, blue"
myConcat(", ", "red", "orange", "blue");

// получает "elephant; giraffe; lion; cheetah"
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// выводит "sage. basil. oregano. pepper. parsley"
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
```

### Функция, создающая HTML списки

В данном примере приведена функция, которая создаёт строку с HTML-разметкой для списка. Единственный её аргумент — строка, определяющая вид списка: если его значение равно "u", формируется неупорядоченный (маркированный) список, а если "o" — то упорядоченный (нумерованный):

```js
function list(type) {
  var result = "<" + type + "l><li>";
  var args = Array.prototype.slice.call(arguments, 1);
  result += args.join("</li><li>");
  result += "</li></" + type + "l>"; // конец списка

  return result;
}
```

Вы можете использовать любое количество аргументов, а функция добавит каждый элемент в список заданного первым аргументом типа. Например:

```js
var listHTML = list("u", "One", "Two", "Three");

/* listHTML:

"<ul><li>One</li><li>Two</li><li>Three</li></ul>"

*/
```

### Остаточные, деструктурированные и параметры по умолчанию

Объект `arguments` может использоваться совместно с [остаточными параметрами](/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters), [параметрами по умолчанию](/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters) или [деструктурированными параметрами](/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

```js
function foo(...args) {
  return arguments;
}
foo(1, 2, 3); // { "0": 1, "1": 2, "2": 3 }
```

Тем не менее, в нестрогих функциях **соответствие между их аргументами и объектом `arguments`** существует только в том случае, если функция **не** содержит никаких [остаточных параметров](/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters), [параметров по умолчанию](/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters) или [деструктурированных параметров](/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). Например, в функции, приведённой ниже, используется параметр по умолчанию, и в данном случае возвращаемый результат будет равен 10, а не 100:

```js
function bar(a = 1) {
  arguments[0] = 100;
  return a;
}
bar(10); // 10
```

В следующем примере возвращается 100, поскольку здесь нет [остаточных параметров](/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters), [параметров по умолчанию](/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters) или [деструктурированных параметров](/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):

```js
function zoo(a) {
  arguments[0] = 100;
  return a;
}
zoo(10); // 100
```

На самом деле, если [остаточные параметры](/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters), [параметры по умолчанию](/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters) или [деструктурированные параметры](/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) не используются, формальные аргументы будут ссылаться на последние значения объекта **`arguments`**, при считывании значений формальных аргументов будут считаны последние данные из **`arguments`**, а при изменении значений формальных аргументов будет обновлён и объект **`arguments`**. Пример приведён в коде ниже:

```js
function func(a, b) {
  arguments[0] = 90;
  arguments[1] = 99;
  console.log(a + " " + b);
}

func(1, 2); //90, 99
```

или

```js
function func(a, b) {
  a = 9;
  b = 99;
  console.log(arguments[0] + " " + arguments[1]);
}

func(3, 4); //9, 99
```

Но в случае, когда применяются [остаточные параметры](/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters), [параметры по умолчанию](/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters) или [деструктурированные параметры](/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), будет обработано нормальное поведение, как в случае [параметров по умолчанию](/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters):

```js
function func(a, b, c = 9) {
  arguments[0] = 99;
  arguments[1] = 98;
  console.log(a + " " + b);
}

func(3, 4); //3, 4
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Function")}}
