---
title: Funkcje strzałkowe
slug: Web/JavaScript/Reference/Functions/Arrow_functions
translation_of: Web/JavaScript/Reference/Functions/Arrow_functions
original_slug: Web/JavaScript/Reference/Functions/Funkcje_strzalkowe
---
{{jsSidebar("Functions")}}

**Funkcja strzałkowa** ma krótszą składnię niż [zwykłe wyrażenie funkcji](/pl/docs/Web/JavaScript/Reference/Operators/function) oraz nie posiada własnego [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this), [argumentów](/pl/docs/Web/JavaScript/Reference/Functions/arguments), [super](/pl/docs/Web/JavaScript/Reference/Operators/super), tudzież właściwości [new.target](/pl/docs/Web/JavaScript/Reference/Operators/new.target). Taki sposób wyrażenia funkcji najlepiej wykorzystać przy tworzeniu funkcji bez metod, ponadto nie mogą zostać one użyte jako konstruktory.

## Składnia

### Składnia podstawowa

    (param1, param2, …, paramN) => { statements }
    (param1, param2, …, paramN) => expression
    // inaczej mówiąc: (param1, param2, …, paramN) => { return expression; }

    // Nawiasy są opcjonalne jeżeli występuje wyłącznie jedna nazwa parametru:
    (singleParam) => { statements }
    singleParam => { statements }
    singleParam => expression


    // Lista parametrów dla funkcji bez parametrów powinna być zapisana przy użyciu pustego nawiasu.
    () => { statements }

### Zaawansowana składnia

    // Otoczenie ciała funkcji nawiasami pozwoli zwrócić tzw. object literal expression:
    params => ({foo: bar})

    // Parametry Rest (Rest parameters) i domyślne (default parameters) są wspierane
    (param1, param2, ...rest) => { statements }
    (param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }

    // Destrukturyzacja (Destructuring) w ramach listy parametrów jest również wspierana
    let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
    f();
    // 6

## Opis

Zobacz również ["ES6 In Depth: Arrow functions" na hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/).

Dwa czynniki, które wpłynęły na wprowadzenie funkcji strzałkowych: krótszy zapis funkcji i brak wiązania `this`.

### Krótsze funkcje

```js
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

materials.map(function(material) {
  return material.length;
}); // [8, 6, 7, 9]

materials.map((material) => {
  return material.length;
}); // [8, 6, 7, 9]

materials.map(material => material.length); // [8, 6, 7, 9]

materials.map(({ length }) => length); // [8, 6, 7, 9]
```

### Brak oddzielnego `this`

Przed wprowadzeniem funkcji strzałkowych każda nowa funkcja deniniowała swoją własną wartość [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) (nowy obiekt w przypadku konstruktora, undefined w wywołaniach funkcji [strict mode](/pl/docs/Web/JavaScript/Reference/Strict_mode), obiekt bazowy jeśli funkcja jest wywoływana jako "metoda obiektowa", itp.). Okazało się to niekorzystne przy obiektowym stylu programowania.

```js
function Person() {
  // Konstruktor Person() definiuje `this` jako instancję samego siebie.
  this.age = 0;

  setInterval(function growUp() {
    // Bez trybu non-strict, funkcja growUp() definuje `this`
    // jako obiekt globalny, który jest inny od `this`
    // zdefiniowanego przez konstruktor Person().
    this.age++;
  }, 1000);
}

var p = new Person();
```

W ECMAScript 3/5, problem z `this` można było rozwiązać przez przydzielenie wartości `this` do zmiennej, która wygląda bardzo podobnie.

```js
function Person() {
  var that = this;
  that.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `that` variable of which
    // the value is the expected object.
    that.age++;
  }, 1000);
}
```

Można było również stworzyć [funkcję bound](/pl/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), co pozwoliło nadać wstępnie przypisaną wartość `this` do powiązanej funkcji docelowej (funkcja `growUp()` w przykładzie powyżej).

Funkcja strzałkowa nie posiada własnego `this`; używana jest wartość `this` kontekstu wykonania. W związku z tym, w poniższym kodzie, `this` użyty w funkcji, który jest przekazywany do `setInterval`, ma taką samą wartość jak `this` w funkcji otaczającej:

```js
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // własność |this| właściwie odnosi się do obiektu Person()
  }, 1000);
}

var p = new Person();
```

#### Relation with strict mode

Given that `this` comes from the surrounding lexical context, [strict mode](/pl/docs/Web/JavaScript/Reference/Strict_mode) rules with regard to `this` are ignored.

```js
var f = () => { 'use strict'; return this; };
f() === window; // or the global object
```

All other strict mode rules apply normally.

#### Invoked through call or apply

Since arrow functions do not have their own `this`, the methods `call()` or `apply()` can only pass in parameters. `thisArg` is ignored.

```js
var adder = {
  base: 1,

  add: function(a) {
    var f = v => v + this.base;
    return f(a);
  },

  addThruCall: function(a) {
    var f = v => v + this.base;
    var b = {
      base: 2
    };

    return f.call(b, a);
  }
};

console.log(adder.add(1));         // This would log to 2
console.log(adder.addThruCall(1)); // This would log to 2 still
```

### No binding of `arguments`

Arrow functions do not have their own [`arguments` object](/pl/docs/Web/JavaScript/Reference/Functions/arguments). Thus, in this example, `arguments` is simply a reference to the the arguments of the enclosing scope:

```js
var arguments = [1, 2, 3];
var arr = () => arguments[0];

arr(); // 1

function foo(n) {
  var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f(10);
}

foo(1); // 2
```

In most cases, using [rest parameters](/pl/docs/Web/JavaScript/Reference/Functions/rest_parameters) is a good alternative to using an `arguments` object.

```js
function foo(n) {
  var f = (...args) => args[0] + n;
  return f(10);
}

foo(1); // 11
```

### Arrow functions used as methods

As stated previously, arrow function expressions are best suited for non-method functions. Let's see what happens when we try to use them as methods:

```js
'use strict';
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  }
}
obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}
```

Arrow functions do not have their own `this`. Another example involving {{jsxref("Object.defineProperty()")}}:

```js
'use strict';
var obj = {
  a: 10
};

Object.defineProperty(obj, 'b', {
  get: () => {
    console.log(this.a, typeof this.a, this);
    return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
  }
});
```

### Use of the `new` operator

Arrow functions cannot be used as constructors and will throw an error when used with `new`.

```js
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor
```

### Use of `prototype` property

Arrow functions do not have a `prototype` property.

```js
var Foo = () => {};
console.log(Foo.prototype); // undefined
```

### Use of the `yield` keyword

The [`yield`](/en-US/docs/Web/JavaScript/Reference/Operators/yield) keyword may not be used in an arrow function's body (except when permitted within functions further nested within it). As a consequence, arrow functions cannot be used as generators.

## Function body

Arrow functions can have either a "concise body" or the usual "block body".

In a concise body, only an expression is specified, which becomes the explicit return value. In a block body, you must use an explicit `return` statement.

```js
var func = x => x * x;
// concise body syntax, implied "return"

var func = (x, y) => { return x + y; };
// with block body, explicit "return" needed
```

## Returning object literals

Keep in mind that returning object literals using the concise body syntax `params => {object:literal}` will not work as expected.

```js
var func = () => { foo: 1 };
// Calling func() returns undefined!

var func = () => { foo: function() {} };
// SyntaxError: function statement requires a name
```

This is because the code inside braces ({}) is parsed as a sequence of statements (i.e. `foo` is treated like a label, not a key in an object literal).

Remember to wrap the object literal in parentheses.

```js
var func = () => ({foo: 1});
```

## Line breaks

An arrow function cannot contain a line break between its parameters and its arrow.

```js
var func = ()
           => 1;
// SyntaxError: expected expression, got '=>'
```

## Parsing order

Although the arrow in an arrow function is not an operator, arrow functions have special parsing rules that interact differently with [operator precedence](/pl/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) compared to regular functions.

```js
let callback;

callback = callback || function() {}; // ok

callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments

callback = callback || (() => {});    // ok
```

## More examples

```js
// An empty arrow function returns undefined
let empty = () => {};

(() => 'foobar')();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression
// see 'IIFE' in glossary)

var simple = a => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

let max = (a, b) => a > b ? a : b;

// Easy array filtering, mapping, ...

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);
// 66

var even = arr.filter(v => v % 2 == 0);
// [6, 0, 18]

var double = arr.map(v => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise.then(a => {
  // ...
}).then(b => {
  // ...
});

// Parameterless arrow functions that are visually easier to parse
setTimeout( () => {
  console.log('I happen sooner');
  setTimeout( () => {
    // deeper code
    console.log('I happen later');
  }, 1);
}, 1);
```

## Specifications

| Specification                                                                                                        | Status                       | Comment             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-arrow-function-definitions', 'Arrow Function Definitions')}} | {{Spec2('ES2015')}}     | Initial definition. |
| {{SpecName('ESDraft', '#sec-arrow-function-definitions', 'Arrow Function Definitions')}} | {{Spec2('ESDraft')}} |                     |

## Browser compatibility

{{Compat("javascript.functions.arrow_functions")}}

## See also

- ["ES6 In Depth: Arrow functions" on hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)
