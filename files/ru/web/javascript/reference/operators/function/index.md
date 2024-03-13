---
title: Функциональное выражение
slug: Web/JavaScript/Reference/Operators/function
---

{{jsSidebar("Operators")}}

Ключевое слово **`function`** может использоваться для определения функции внутри выражения.

Вы можете также определять функции используя конструктор {{jsxref("Function")}} и {{jsxref("Statements/function", "объявление функции")}}.

## Синтаксис

```
var myFunction = function [name]([param1[, param2[, ..., paramN]]]) {
   statements
};
```

С версии ES2015 можно также использовать [стрелочные функции](/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Параметры

- `name`
  - : Имя функции. Может быть опущено, в таком случае функция является _анонимной_. Имя функции является локальным для её тела.
- `paramN`
  - : Имя аргумента, передаваемого в функцию.
- `statements`
  - : Инструкции, составляющие тело функции.

## Описание

Функциональное выражение и [объявление функции](/ru/docs/Web/JavaScript/Reference/Statements/function) очень похожи и имеют почти одинаковый синтаксис. Главным отличием между ними является _имя функции,_ которое в случае функциональных выражений может быть опущено для создания _анонимных_ функций. Функциональное выражение может быть использовано для создания самовызывающейся функции {{Glossary("IIFE")}} (Immediately Invoked Function Expression), которая исполняется сразу же после того, как она была определена. Более подробная информация изложена в разделе о [функциях](/ru/docs/Web/JavaScript/Reference/Functions).

### Поднятие функциональных выражений

Функциональные выражения в JavaScript не {{Glossary("поднятие", "поднимаются (hoisting)")}}, в отличие от {{jsxref("Statements/function", "объявленных функций", "#Поднимание_объявленной_функции")}}. Вы не можете использовать функциональные выражения прежде, чем вы их определили.

```js
console.log(notHoisted); // undefined
//Хотя объявленная переменная и поднимается, определение переменной происходит позже
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

### Именованное функциональное выражение

Если вы хотите сослаться на текущую функцию внутри тела этой функции, вам необходимо создать именованное функциональное выражение. Данное имя будет локальным только для тела функции (её области видимости). Кроме того, это позволяет избежать использования нестандартного свойства {{jsxref("arguments.callee")}}.

```js
var math = {
  factit: function factorial(n) {
    console.log(n);
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  },
};

math.factit(3); //3;2;1;
```

Переменная, которой присвоено функциональное выражение, будет иметь свойство `name`, содержащее имя функции. Оно не изменится при переприсваивании другой переменной. Для анонимной функции, значением свойства `name` будет имя переменной (неявное имя). Если же имя задано, то будет использовано имя функции (явное имя). Это же касается стрелочных функций (в их случае там будет записано имя переменной, т.к. они всегда анонимные).

```js
var foo = function () {};
foo.name; // "foo"

var foo2 = foo;
foo2.name; // "foo"

var bar = function baz() {};
bar.name; // "baz"

console.log(foo === foo2); // true
console.log(typeof baz); // undefined
console.log(bar === baz); // false (errors because baz == undefined)
```

## Примеры

Следующий пример демонстрирует создание безымянной (анонимной) функции и присвоение её переменной `x`. Функция возвращает квадрат переданного значения:

```js
var x = function (y) {
  return y * y;
};
```

Преимущественно анонимные функции используются как {{Glossary("колбэк-функция", "колбэк-функции", 1)}}.

```js
button.addEventListener("click", function (event) {
  console.log("button is clicked!");
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Functions_and_function_scope", "Functions and function scope")}}
- {{jsxref("Function")}}
- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Statements/function*", "function* statement")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("GeneratorFunction")}}
