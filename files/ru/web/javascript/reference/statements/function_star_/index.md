---
title: function*
slug: Web/JavaScript/Reference/Statements/function*
---

{{jsSidebar("Statements")}}

## Сводка

**`function*`** (ключевое слово `function` со звёздочкой) определяет _функцию-генератор_.

## Синтаксис

```
function* name([param[, param[, ... param]]]) { statements }
```

- `name`
  - : Имя функции.
- `param`
  - : Именованные аргументы функции (параметры). Функция-генератор может иметь 255 аргументов.
- `statements`
  - : Инструкции составляющие тело функции.

## Описание

Генераторы являются функциями с возможностью выхода и последующего входа. Их контекст исполнения (значения переменных) сохраняется при последующих входах.

Когда вызывается функция-генератор, её тело исполняется не сразу; вместо этого возвращается объект-[итератор](/ru/docs/Web/JavaScript/Guide/The_Iterator_protocol). При вызове метода `next()` итератора тело функции-генератора исполняется до первого встреченного оператора [**`yield`**](/ru/docs/Web/JavaScript/Reference/Operators/yield), который определяет возвращаемое значение или делегирует дальнейшее выполнение другому генератору при помощи `yield* anotherGenerator()`. Метод `next()` возвращает объект со свойством `value`, содержащим отданное значение, и свойством `done`, которое указывает, что генератор уже отдал своё последнее значение. Вызов метода `next()` с аргументом прекращает выполнение функции-генератора, и заменяет инструкцию yield на которой было приостановлено выполнение на аргумент переданный в `next()`.

## Примеры

### Простой пример

```js
function* idMaker() {
  var index = 0;
  while (index < 3) yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
// ...
```

### Пример с yield\*

```js
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```

### Передача аргументов в генератор

```js
function* logGenerator() {
  console.log(yield);
  console.log(yield);
  console.log(yield);
}

var gen = logGenerator();

// первый вызов next выполняется от начала функции
// и до первого оператора yield
gen.next();
gen.next("pretzel"); // pretzel
gen.next("california"); // california
gen.next("mayonnaise"); // mayonnaise
```

### Инструкция return в генераторе

```js
function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

var gen = yieldAndReturn();
console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
console.log(gen.next()); // { value: undefined, done: true }
```

### Генераторы не могут быть инстанцированы (not constructable)

```js example-bad
function* f() {}
var obj = new f(); // throws "TypeError: f is not a constructor"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Протокол итераторов](/ru/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- Оператор [yield](/ru/docs/Web/JavaScript/Reference/Operators/yield)
- Оператор [function](/ru/docs/Web/JavaScript/Reference/Statements/function)
- Другие ресурсы:

  - Компилятор [Regenerator](http://facebook.github.io/regenerator/) из ES2015 в ES5
  - [Forbes Lindesay: Promises and Generators: control flow utopia — JSConf EU 2013](http://www.youtube.com/watch?v=qbKWsbJ76-s)
  - [Task.js](http://taskjs.org/)
