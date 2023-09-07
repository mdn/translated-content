---
title: Стрелочные функции
slug: Web/JavaScript/Reference/Functions/Arrow_functions
---

{{jsSidebar("Functions")}}

## Сводка

**Выражения стрелочных функций** имеют более короткий синтаксис по сравнению с [функциональными выражениями](/ru/docs/Web/JavaScript/Reference/Operators/function) и лексически привязаны к значению [this](/ru/docs/Web/JavaScript/Reference/Operators/this) (но не привязаны к собственному [this](/ru/docs/Web/JavaScript/Reference/Operators/this), [arguments](/ru/docs/Web/JavaScript/Reference/Functions/arguments), [super](/ru/docs/Web/JavaScript/Reference/Operators/super), или [new.target](/ru/docs/Web/JavaScript/Reference/Operators/new.target)). Выражение стрелочных функций не позволяют задавать имя, поэтому стрелочные функции [анонимны](/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/name), если их ни к чему не присвоить.

## Синтаксис

### Базовый синтаксис

```js
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// эквивалентно: (param1, param2, …, paramN) => { return expression; }

// Круглые скобки не обязательны для единственного параметра:
(singleParam) => { statements }
singleParam => { statements }

// Функция без параметров нуждается в круглых скобках:
() => { statements }
() => expression
// Эквивалентно: () => { return expression; }
```

### Расширенный синтаксис

```js
// Когда возвращаете литеральное выражение объекта, заключите тело в скобки
params => ({foo: bar})

// Остаточные параметры и параметры по умолчанию поддерживаются
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }

// Деструктуризация тоже поддерживается
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f();  // 6
```

## Описание

Смотрите также ["ES6 In Depth: Arrow functions" on hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/).

Два фактора повлияли на появление стрелочных функции: более короткий синтаксис и лексика `this`.

### Короткие функции

В некоторых функциональных шаблонах приветствуются более короткие функции. Сравните:

```js
var elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

elements.map(function (element) {
  return element.length;
}); // Это выражение вернёт массив [8, 6, 7, 9]

// Функцию выше можно записать как стрелочную функцию:
elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]

// Если единственным оператором в выражении стрелочной функции является return,
// можно удалить return и окружающие фигурные скобки

elements.map((element) => element.length); // [8, 6, 7, 9]

// В данном случае, поскольку нам нужно только свойство length, мы можем использовать деструктуризированный параметр:
// Обратите внимание, что строка `"length"` соответствует свойству, которое мы хотим получить,
// в то время как `lengthFooBArX` это просто имя переменной, которую можно назвать как вы хотите
elements.map(({ length: lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]

// Это задание деструктуризированного параметра может быть записано, как показано ниже. Тем не менее, обратите внимание,
// что нет строки `"length"`, чтобы выбрать, какое свойство мы хотим получить. Вместо этого в качестве свойства,
// которое мы хотим извлечь из объекта, используется само литеральное имя переменной `length`
elements.map(({ length }) => length); // [8, 6, 7, 9]
```

### Отсутствие связывания с `this`

До появления стрелочных функций, каждая новая функция имела своё значение [`this`](/ru/docs/Web/JavaScript/Reference/Operators/this) (новый объект в случае конструктора, undefined в [strict](/ru/docs/Web/JavaScript/Reference/Strict_mode) режиме вызова функции, контекст объекта при вызове функции как "метода объекта" и т.д.). Это очень раздражало при использовании объектно-ориентированного стиля программирования.

```js
function Person() {
  // В конструкторе Person() `this` указывает на себя.
  this.age = 0;

  setInterval(function growUp() {
    // В нестрогом режиме, в функции growUp() `this` указывает
    // на глобальный объект, который отличается от `this`,
    // определяемом в конструкторе Person().
    this.age++;
  }, 1000);
}

var p = new Person();
```

В ECMAScript 3/5, данная проблема решалась присваиванием значения `this` переменной:

```js
function Person() {
  var that = this;
  that.age = 0;

  setInterval(function growUp() {
    // Функция с обратным вызовом(callback) содержит переменную that, которая
    // ссылается на требуемый объект this.
    that.age++;
  }, 1000);
}
```

Кроме этого, может быть создана [привязанная функция](/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), в которую передаётся требуемое значение [`this`](/ru/docs/Web/JavaScript/Reference/Operators/this) для функции (функция `growUp()` в примере выше).

Стрелочные функции не содержат собственный контекст [`this`](/ru/docs/Web/JavaScript/Reference/Operators/this), а используют значение [`this`](/ru/docs/Web/JavaScript/Reference/Operators/this) окружающего контекста. Поэтому нижеприведённый код работает как предполагалось:

```js
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` указывает на объект Person
  }, 1000);
}

var p = new Person();
```

#### Строгий режим исполнения

Поскольку значение `this` определяется лексикой, правила строгого режима ([strict mode](/ru/docs/Web/JavaScript/Reference/Strict_mode)) относительно `this` игнорируются:

```js
var f = () => {
  "use strict";
  return this;
};
f() === window; // или глобальный объект
```

Все остальные правила строгого режима применяются как обычно.

#### Вызов с помощью call или apply

Так как значение `this` определяется лексикой, вызов стрелочных функций с помощью методов `call()` или `apply()`, даже если передать аргументы в эти методы, не влияет на значение `this`:

```js
var adder = {
  base: 1,

  add: function (a) {
    var f = (v) => v + this.base;
    return f(a);
  },

  addThruCall: function (a) {
    var f = (v) => v + this.base;
    var b = {
      base: 2,
    };

    return f.call(b, a);
  },
};

console.log(adder.add(1)); // Выводит 2
console.log(adder.addThruCall(1)); // Всё равно выводит 2
```

### Не имеет собственного объекта arguments

Стрелочные функции не имеют собственного объекта arguments, поэтому в теле стрелочных функций arguments будет ссылаться на переменную в окружающей области.

```js
var arguments = 42;
var arr = () => arguments;

arr(); // 42

function foo() {
  var f = (i) => arguments[0] + i; // Неявное связывание ссылки arguments
  // стрелочной функции f
  // c объектом arguments функции foo
  return f(2);
}

foo(1); // 3
```

В большинстве случаев лучшей заменой объекта arguments в стрелочных функциях являются [остаточные параметры](/ru/docs/Web/JavaScript/Reference/Functions/rest_parameters):

```js
function foo() {
  var f = (...args) => args[0];
  return f(2);
}

foo(1); // 2
```

### Использование стрелочных функций как методов

Как показано ранее, стрелочные функции лучше всего подходят для функций без методов. Посмотрим, что будет, когда мы попробуем их использовать как методы:

```js
"use strict";
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function () {
    console.log(this.i, this);
  },
};
obj.b(); // prints undefined, Window {...} (или глобальный объект)
obj.c(); // prints 10, Object {...}
```

Стрелочные функции не объявляют привязку ("bind") их контекста `this`. Другой пример включает {{jsxref("Object.defineProperty()")}}:

```js
"use strict";
var obj = {
  a: 10,
};

Object.defineProperty(obj, "b", {
  get: () => {
    console.log(this.a, typeof this.a, this);
    return this.a + 10;
    // представляет глобальный объект 'Window', но 'this.a' возвращает 'undefined'
  },
});
```

### Использование оператора `new`

Стрелочные функции не могут быть использованы как конструктор и вызовут ошибку при использовании с `new`:

```js
var a = new (function () {})();
// переменной "a" будет присвоено значение экземпляра анонимной функции

var b = new (() => {})();
// будет выброшено исключение
// Uncaught TypeError: (intermediate value) is not a constructor
```

### Использование ключевого слова `yield`

Ключевое слово [`yield`](/ru/docs/Web/JavaScript/Reference/Operators/yield) не может быть использовано в теле стрелочной функции (за исключением случаев, когда разрешается использовать в функциях, вложенных в тело стрелочной функции). Как следствие стрелочные функции не могут быть использованы как генераторы.

## Тело функции

Тело стрелочной функции может иметь краткую (concise body) или блочную (block body) форму.

Блочная форма не возвращает значение, необходимо явно вернуть значение.

```js
var func = (x) => x * x; // краткий синтаксис,
// неявно возвращает результат
var func = (x, y) => {
  return x + y;
}; // блочный синтаксис,
// явно возвращает результат
```

## Возвращаемые объектные строки (литералы)

Помните о том, что возвращаемые [объектные строки](/ru/docs/Web/JavaScript/Guide/Grammar_and_types#Литерал_объекта/) используют сокращённый синтаксис: `params => {object:literal}` будет работать не так, как ожидается.

```js
var func = () => { foo: 1 };
// Вызов func() возвращает undefined!

var func = () => { foo: function() {} };
// SyntaxError: function statement requires a name
```

Это происходит потому что код в скобках ({}) распознаётся как цепочка выражений (т.е. `foo` трактуется как наименование, а не как ключ в объектной строке).

Не забывайте оборачивать скобками объектные строки.

```js
var func = () => ({ foo: 1 });
```

## Разрывы строк

Стрелочная функция не может содержать разрывы строк между параметрами и стрелкой.

```js
var func = ()
           => 1;
// SyntaxError: expected expression, got '=>'
```

## Разбор порядка следования

Поскольку стрелка в стрелочной функции не является оператором, то стрелочные функции имеют специальные правила разбора (парсинга), которые взаимодействуют с [приоритетами операторов](/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence/) иначе, чем в обычных функциях.

```js
let callback;

callback = callback || function() {}; // ok

callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments

callback = callback || (() => {});    // ok
```

## Больше примеров

```js
// Пустая стрелочная функция возвращает undefined
let empty = () => {};

(() => "foobar")();
// Вернёт "foobar"
// (Это Immediately Invoked Function Expression
// смотри 'IIFE' в справочнике)

var simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

let max = (a, b) => (a > b ? a : b);

// Удобные операции над массивами: filter, map, ...

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);
// 66

var even = arr.filter((v) => v % 2 == 0);
// [6, 0, 18]

var double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// Более короткие цепочки promise-ов
promise
  .then((a) => {
    // ...
  })
  .then((b) => {
    // ...
  });

// Стрелочные функции без параметров, которые визуально легче разбирать
setTimeout(() => {
  console.log("Я буду раньше");
  setTimeout(() => {
    // deeper code
    console.log("Я буду позже");
  }, 1);
}, 1);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

### Замечания для Firefox

- Первоначальная реализация стрелочных функций в Firefox автоматически переводила их в строгий режим. Это поведение было изменено в [Firefox 24](/ru/docs/Mozilla/Firefox/Releases/24). Использование `"use strict";` стало обязательным.
- Стрелочные функции семантически отличаются от нестандартных [Expression Closures](/ru/docs/Web/JavaScript/Reference/Operators/Expression_closures), добавленных в [Firefox 3](/en-US/Firefox/Releases/3) (подробности в [Javascript 1.8](/ru/docs/Web/JavaScript/New_in_JavaScript/1.8)); в Expression Closures значение `this` не привязано лексически.
- До [Firefox 39](/en-US/Firefox/Releases/39), перенос строки (`\n`) был ошибочно разрешён после аргументов стрелочной функции. Это было исправлено для соблюдения спецификации ES2015, и код вроде: `() \n => {}` теперь вызывает {{jsxref("SyntaxError")}} в этой и более поздних версиях.

## See also

- ["ES6 In Depth: Arrow functions" on hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)
