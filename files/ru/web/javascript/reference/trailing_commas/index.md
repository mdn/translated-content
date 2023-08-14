---
title: Висящие запятые
slug: Web/JavaScript/Reference/Trailing_commas
---

{{JsSidebar("More")}}

**Висящие запятые** (или "последние запятые") могут быть полезны при добавлении новых элементов, параметров или свойств в код JavaScript. Если вы хотите добавить новое свойство, вы просто добавляете новую строчку без изменения предыдущей, если в ней уже использована висящая запятая. Это делает различия в контроле версий чище и изменение кода может быть менее хлопотным.

JavaScript с самого начала допускает использовать висящих запятых в литералах массива, а затем добавлял их в литералы объекта (ECMAScript 5) и, совсем недавно (ECMAScript 2017), к параметрам функций.

{{Glossary("JSON")}}, однако, не допускает висящих запятых.

## Висящие запятые в литералах

### Массивы

JavaScript игнорирует висящие запятые в массивах:

```js-nolint
var arr = [1, 2, 3,];

arr; // [1, 2, 3]
arr.length; // 3
```

Если использовано больше одной висящей запятой, будут созданы "дырки". Массив с "дырками" называется _разреженным_ (_плотный_ массив не имеет "дырок"). При итерации массива при помощи, например, {{jsxref("Array.prototype.forEach()")}} или {{jsxref("Array.prototype.map()")}}, "дырки" будут пропущены.

```js
var arr = [1, 2, 3, , ,];
arr.length; // 5
```

### Объекты

Начиная с ECMAScript 5, висящие запятые в объектах также допустимы:

```js
var object = {
  foo: "bar",
  baz: "qwerty",
  age: 42,
};
```

## Висящие запятые в функциях

ECMAScript 2017 допускает висящие запятые в списке параметров функции.

### Определение параметров

Следующие определения параметров функций допустимы и равнозначны друг другу. Висящие запятые не влияют на свойство `length` функции или их объект `arguments`.

```js-nolint
function f(p) {}
function f(p,) {}

(p) => {};
(p,) => {};
```

Висящая запятая также работает с [определением методов](/ru/docs/Web/JavaScript/Reference/Functions/Определиние_методов) для классов или объектов:

```js
class C {
  one(a,) {},
  two(a, b,) {},
}

var obj = {
  one(a,) {},
  two(a, b,) {},
};
```

### Вызов функции

Следующие вызовов функций допустимы и равнозначны друг другу.

```js-nolint
f(p);
f(p,);

Math.max(10, 20);
Math.max(10, 20,);
```

### Недопустимые висящие запятые

Определение параметров функции или вызов функции, содержащих только запятую будет генерировать {{Jsxref("SyntaxError")}}. Кроме того, при использовании [остаточных параметров](/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters) не допускается использовать висящие запятые:

```js example-bad
function f(,) {} // SyntaxError: missing formal parameter
(,) => {};       // SyntaxError: expected expression, got ','
f(,)             // SyntaxError: expected expression, got ','

function f(...p,) {} // SyntaxError: parameter after rest parameter
(...p,) => {}        // SyntaxError: expected closing parenthesis, got ','
```

## Висящие запятые в деструктурировании

Висящие запятые так же можно использовать слева при использовании [деструктурирующего присваивания](/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):

```js-nolint
// массив деструктурируется с висящей запятой
[a, b,] = [1, 2];

// объект деструктурируется с висящей запятой
var o = {
  p: 42,
  q: true,
};
var { p, q } = o;
```

Ещё раз, при использовании оставшихся параметров будет сгенерирована {{jsxref("SyntaxError")}}:

```js-nolint example-bad
var [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma
```

## Висящие запятые в JSON

Висящие запятые в объекте допустимы только в ECMAScript 5. Так как JSON основан на синтаксисе JavaScript старше, чем ES5, **висящие запятые не допускаются в JSON**.

Обе строки генерируют `SyntaxError`:

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

Опустите висящие запятые, чтобы правильно проанализировать JSON:

```js example-good
JSON.parse("[1, 2, 3, 4 ]");
JSON.parse('{"foo" : 1 }');
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Initial ECMAScript proposal: [trailing function commas](https://github.com/tc39/proposal-trailing-function-commas) by Jeff Morrison
