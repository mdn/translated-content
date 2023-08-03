---
title: Primitive
slug: Glossary/Primitive
---

**Примитив** (значение примитивного типа, примитивный тип данных) это данные, которые не являются {{glossary("object", "объектом")}} и не имеют {{glossary("method","методов")}}. В {{Glossary("JavaScript")}} 7 простых типов данных: {{Glossary("string")}}, {{Glossary("number")}}, {{Glossary("boolean")}}, {{Glossary("null")}}, {{Glossary("undefined")}}, {{Glossary("symbol")}} (новое в {{Glossary("ECMAScript")}} 2015), {{Glossary("bigint")}}.

Чаще всего значение примитивного типа представлено в низкоуровневой реализации языка.

Все **примитивы** неизменяемы (immutable), то есть они не могут быть изменены. Важно не путать сам примитив с переменной, которой присвоено значение примитивного типа. Переменной может быть переприсвоено новое значение, но существующее значение примитивного типа не может быть изменено подобно объектам, массивам и функциям.

## Пример

Этот пример поможет понять, что значения примитивных типов неизменяемы **(immutable)**.

### JavaScript

```js
// Using a string method doesn't mutate the string
var bar = "baz";
console.log(bar); // baz
bar.toUpperCase();
console.log(bar); // baz

// Using an array method mutates the array
var foo = [];
console.log(foo); // []
foo.push("plugh");
console.log(foo); // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase(); // BAZ
```

Примитив может быть заменён, но он не может быть напрямую изменён.

## Другой пример \[ Step-by-step ]

Следующий пример поможет разобраться как JavaScript работает с примитивами.

### JavaScript

```js
// The Primitive
let foo = 5;

// Defining a function that should change the Primitive value
function addTwo(num) {
  num += 2;
}
// Another function trying to do the same thing
function addTwo_v2(foo) {
  foo += 2;
}

// Calling our first function while passing our Primitive as an argument
addTwo(foo);
// Getting the current Primitive value
console.log(foo); // 5

// Trying again with our second function...
addTwo_v2(foo);
console.log(foo); // 5
```

Вы ожидали, что будет 7 вместо 5? Если так, тогда прочитайте, как работает этот код:

- При вызове обеих функций `addTwo` `и addTwo_v2`, JavaScript ищет значение для идентификатора `foo`. JavaScript правильно определяет нашу переменную, созданную с помощью первого оператора
- После этого JavaScript передаёт найденный аргумент в функцию в качестве параметра
- Перед выполнением операторов в теле функции, **JavaScript берёт исходный переданный аргумент** (который является примитивом) и создаёт его локальную копию. Эти копии, существующие только внутри областей функций, доступны через идентификаторы, указанные в определениях функций (`num` для `addTwo`, foo для `addTwo_v2`)
- Затем выполняются операторы функций:

  - В первой функции был создан локальный аргумент `num`. Мы увеличиваем его значение на 2 (а не значение исходной переменной `foo`).
  - Во второй функции был создан локальный аргумент `foo`. Мы увеличиваем его значение на 2 (а не значение исходной (внешней) переменной `foo`). Кроме того, в этой ситуации, внешняя переменная `foo` является недоступной **никаким** способом. Это связано с лексическими областями JavaScript и, как следствие, с затенением переменных. Локальная переменная `foo` скрывает внешнюю переменную `foo`. Чтобы получить больше информации, смотри [Closures](/ru/docs/Web/JavaScript/Closures).

- Таким образом, никакие изменения внутри наших функций **не будут** влиять на ИСХОДНУЮ `foo` вообще, так как мы работаем с её **копиями**

Вот почему примитивы неизменяемы **(immutable)**. Потому что мы не работаем над ними напрямую. Мы создаём копию и продолжаем работать с ней, не касаясь исходных значений.

## Обёртки примитивных типов в JavaScript

За исключением `null` и `undefined`, все примитивные значения имеют объектный аналог, который оборачивает значение примитивного типа:

- {{jsxref("String")}} для string примитива.
- {{jsxref("Number")}} для number примитива.
- {{jsxref("BigInt")}} для bigint примитива.
- {{jsxref("Boolean")}} для boolean примитива.
- {{jsxref("Symbol")}} для symbol примитива.

Метод [`valueOf()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) типа обёртки возвращает значение примитивного типа.

## Смотрите также

### Общие сведения

- [Введение в типы данных JavaScript](/ru/docs/Web/JavaScript/Data_structures)
- [Примитивный тип](https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%BC%D0%B8%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9_%D1%82%D0%B8%D0%BF) на Wikipedia
