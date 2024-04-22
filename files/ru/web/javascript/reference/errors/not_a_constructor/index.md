---
title: 'TypeError: "x" is not a constructor'
slug: Web/JavaScript/Reference/Errors/Not_a_constructor
---

{{jsSidebar("Errors")}}

## Сообщение

```
TypeError: Object doesn't support this action (Edge)
TypeError: "x" is not a constructor

TypeError: Math is not a constructor
TypeError: JSON is not a constructor
TypeError: Symbol is not a constructor
TypeError: Reflect is not a constructor
TypeError: Intl is not a constructor
TypeError: SIMD is not a constructor
TypeError: Atomics is not a constructor
```

## Тип ошибки

{{jsxref("TypeError")}}

## Что пошло не так?

Была попытка использовать объект или переменную как конструктор, однако этот объект или переменная - не конструктор. Смотрите {{Glossary("constructor")}} или [`new` operator](/ru/docs/Web/JavaScript/Reference/Operators/new), чтобы получить больше информации о том, что такое конструктор.

Существует множество глобальных объектов, таких как {{jsxref("String")}} или {{jsxref("Array")}}, которые можно построить с использованием `new`. Однако, некоторые глобальные объекты - нельзя, т.к. их свойства и методы статичны. Следующие стандартные встроенные объекты JavaScript - не конструкторы: {{jsxref("Math")}}, {{jsxref("JSON")}}, {{jsxref("Symbol")}}, {{jsxref("Reflect")}}, {{jsxref("Intl")}}, {{jsxref("SIMD")}}, {{jsxref("Atomics")}}.

[Функции-генераторы](/ru/docs/Web/JavaScript/Reference/Statements/function*) также не могут быть использованы как конструкторы.

## Примеры

### Неправильное использование

```js example-bad
var Car = 1;
new Car();
// TypeError: Car is not a constructor

new Math();
// TypeError: Math is not a constructor

new Symbol();
// TypeError: Symbol is not a constructor

function* f() {}
var obj = new f();
// TypeError: f is not a constructor
```

### Конструктор "car" (автомобиль)

Представьте, что вы хотите создать тип объекта для автомобилей. Вы хотите, чтобы этот тип объектов назывался `car`, и вы хотите, чтобы были свойства для производителя, модели и года выпуска. Чтобы сделать это, вы должны написать следующую функцию:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Теперь вы можете создать объект, который называется `mycar` (мой автомобиль) следующим образом:

```js
var mycar = new Car("Лада", "Самара", 1993);
```

### В Промисах

В случае, когда возвращается незамедлительно разрешённый или незамедлительно отклонённый промис, вам не нужно создавать новый промис _new Promise(...)_ и работать с ним.

Это неправильно ([конструктор Promise](/ru/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Promise#Constructor) вызывается неправильно) и будет вызывать исключение `TypeError: this is not a constructor`:

```js example-bad
return new Promise.resolve(true);
```

Вместо этого используйте [статические методы](<https://en.wikipedia.org/wiki/Method_(computer_programming)#Static_methods>) - [Promise.resolve()](/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) или [Promise.reject()](/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject) :

```js
// Это допустимо, но слишком длинно, в этом нет необходимости:
return new Promise((resolve, reject) => {
  resolve(true);
});

// Вместо этого, возвращайте статический метод:
return Promise.resolve(true);
return Promise.reject(false);
```

## Смотрите также

- {{Glossary("constructor")}}
- [`new` operator](/ru/docs/Web/JavaScript/Reference/Operators/new)
