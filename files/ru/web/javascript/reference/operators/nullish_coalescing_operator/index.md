---
title: Оператор нулевого слияния (??)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
  - nullish coalescing
browser-compat: javascript.operators.nullish_coalescing
---
{{JSSidebar("Operators")}}

**Оператор нулевого слияния (`??`)** — это логический оператор, возвращающий значение правого операнда, если значение левого операнда содержит {{jsxref("null")}} или {{jsxref("undefined")}}, в противном случае возвращается значение левого операнда.

Этот оператор можно рассматривать как частный случай [логического оператора ИЛИ
(`||`)](/ru/docs/Web/JavaScript/Reference/Operators/Logical_OR), который возвращает правый операнд, если в левом операнде хранится _любое_ {{Glossary("falsy", "ложноподобное")}} значение, а не только `null` или `undefined`. Другими словами, если вы используете оператор `||` для присваивания значения по умолчанию другой переменной `foo`, вы можете столкнуться с неожиданным поведением, если считаете некоторые ложноподобные значения пригодными для использования (например, `''` или `0`). Ниже вы увидите примеры.

Оператор нулевого слияния вместе с `||` находится на [четвёртом по приоритетности месте](/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence), непосредственно перед ним следует [условный (тернарный) оператор](/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).

{{EmbedInteractiveExample("pages/js/expressions-nullishcoalescingoperator.html")}}

## Синтаксис

```js
leftExpr ?? rightExpr
```

## Примеры

### Использование оператора нулевого слияния

В этом примере показано как устанавливать значения по умолчанию, отличные от
`null` или `undefined`.

```js
const nullValue = null;
const emptyText = ""; // ложноподобное
const someNumber = 42;

const valA = nullValue ?? "значение для A";
const valB = emptyText ?? "значение для B";
const valC = someNumber ?? 0;

console.log(valA); // "значение для A"
console.log(valB); // "" (поскольку пустая строка не приравнивается к null или undefined)
console.log(valC); // 42
```

### Присваивание переменной значения по умолчанию

Ранее, когда нужно было присвоить переменной значение по умолчанию, часто использовался оператор ИЛИ ([`||`](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)):

```js
let foo;

// foo ещё не было присвоено значение, поэтому оно undefined
let someDummyText = foo || 'Hello!';
```

Однако поскольку `||` является логическим оператором, левый операнд был принудительно приведен к булеву значению, игнорируя любое _ложноподобное_ значение (`0`, `''`, `NaN`, `null`, `undefined`). Это может привести к некорректной работе кода, если нужно учитывать такие значения, как `0`, `''`, или `NaN`.

```js
let count = 0;
let text = "";

let qty = count || 42;
let message = text || "hi!";
console.log(qty);     // 42, но не 0
console.log(message); // "hi!", но не ""
```

Оператор нулевого слияния предотвращает попадание в такую ловушку, возвращая второй операнд, только если первый равен `null` или `undefined` (и не любым другим ложноподобным значением):

```js
let myText = ''; // Пустая строка (ложноподобное значение)

let notFalsyText = myText || 'Привет, мир';
console.log(notFalsyText); // Привет, мир

let preservingFalsy = myText ?? 'Привет, сосед';
console.log(preservingFalsy); // '' (т.к. myText не ни undefined, ни null)
```

### Сокращённое вычисление

Так же как при использовании операторов логического И и ИЛИ, правое выражение не вычисляется, если значение в левом выражении не равняется `null` или `undefined`

```js
function A() { console.log('вызвана A'); return undefined;}
function B() { console.log('вызвана B'); return false;}
function C() { console.log('вызвана C'); return "foo";}

console.log( A() ?? C() );
// в консоли будет будет выведено "вызвана A", после "вызвана C", и затем "foo",
// т.к. A() возвращает undefined, поэтому оба выражения были вычислены

console.log( B() ?? C() );
// в консоли будет выведено "вызвана B", затем "false",
// так B() возвращает false (не null или undefined), то
// правое выражение не вычисляется
```

### Использование вместе с операторами И или ИЛИ

Не получится использовать оператор И (`&&`) и ИЛИ (`||`) вместе с оператором `??` в одном выражении. В таких случаях будет вызвана ошибка [`SyntaxError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError).

```js example-bad
null || undefined ?? "foo"; // вызывает SyntaxError
true || undefined ?? "foo"; // вызывает SyntaxError
```

Но если явно указать приоритет, создав подвыражение через круглые скобки, то всё заработает:

```js example-good
(null || undefined) ?? "foo"; // вернёт "foo"
```

### Использование совместно с оператором опциональной последовательности (`?.`)

Оператор нулевого слияния учитывает значения `undefined` и `null`, по аналогии как и оператор опциональной последовательности (`?.`)(/ru/docs/Web/JavaScript/Reference/Operators/Optional_chaining), который позволяет избежать ошибок при обращении к свойству объекта, которое может быть `null` или `undefined`.

```js
let foo = { someFooProp: "привет" };

console.log(foo.someFooProp?.toUpperCase() ?? "нет значения"); // "ПРИВЕТ"
console.log(foo.someBarProp?.toUpperCase() ?? "нет значения"); // "нет значения"
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Оператор опциональной последовательности](/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Оператор логического ИЛИ (`||`)](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Параметры по умолчанию функций](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
