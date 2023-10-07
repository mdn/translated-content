---
title: Операторы сравнения
slug: Web/JavaScript/Equality_comparisons_and_sameness
---

{{jsSidebar("Intermediate")}}

JavaScript предоставляет три оператора сравнения величин:

- равенство ("двойное равно") использует [==](/ru/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality),
- строгое равенство ("тройное равно" или "идентично") использует [===](/ru/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity),
- и [`Object.is`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/is) (новшество из ECMAScript 6).

Выбор оператора зависит от типа сравнения, которое необходимо произвести.

В общих чертах, двойное равно перед сравнением величин производит приведение типов; тройное равно сравнивает величины без приведения (если величины разных типов, вернёт `false`, даже не сравнивая); ну и `Object.is` ведёт себя так же, как и тройное равно, но со специальной обработкой для `NaN`, `-0` и `+0`, возвращая `false` при сравнении `-0` и `+0`, и `true` для операции `Object.is(NaN, NaN)`. (В то время как двойное или тройное равенство вернут `false` согласно стандарту IEEE 754.) Следует отметить, что все эти различия в сравнениях применимы лишь для примитивов. Для любых не примитивных объектов `x` и `y`, которые имеют одинаковые структуры, но представляют собой два отдельных объекта (переменные `x` и `y` не ссылаются на один и тот же объект), все операторы сравнения вернут `false`.

## Сравнение с использованием `==`

Перед сравнением оператор равенства _приводит_ обе величины к общему типу. После приведений (одного или обоих операндов), конечное сравнение выполняется также как и для `===`. Операция сравнения _симметрична_: `A == B` возвращает то же значение, что и `B == A` для любых значений `A` и `B`.

В следующей таблице приведены результаты сравнения оператора равенства для различных значений:

<table class="standard-table" style="height: 438px; width: 825px">
  <thead>
    <tr>
      <th scope="row"><code></code></th>
      <th colspan="7" scope="col" style="text-align: center">
        <code>Операнд B</code>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code></code></th>
      <th><code></code></th>
      <th style="text-align: center"><code>Undefined</code></th>
      <th style="text-align: center"><code>Null</code></th>
      <th style="text-align: center"><code>Number</code></th>
      <th style="text-align: center"><code>String</code></th>
      <th style="text-align: center"><code>Boolean</code></th>
      <th style="text-align: center"><code>Object</code></th>
    </tr>
    <tr>
      <th colspan="1" rowspan="6" scope="row"><code>Операнд A</code></th>
      <th>
        <p><code>Undefined</code></p>
      </th>
      <td style="text-align: center"><code>true</code></td>
      <td style="text-align: center"><code>true</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
    </tr>
    <tr>
      <th><code>Null</code></th>
      <td style="text-align: center"><code>true</code></td>
      <td style="text-align: center"><code>true</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
    </tr>
    <tr>
      <th><code>Number</code></th>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>A === B</code></td>
      <td style="text-align: center"><code>A === ToNumber(B)</code></td>
      <td style="text-align: center"><code>A === ToNumber(B)</code></td>
      <td style="text-align: center"><code>A == ToPrimitive(B)</code></td>
    </tr>
    <tr>
      <th><code>String</code></th>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>ToNumber(A) === B</code></td>
      <td style="text-align: center"><code>A === B</code></td>
      <td style="text-align: center">
        <code>ToNumber(A) === ToNumber(B)</code>
      </td>
      <td style="text-align: center"><code>A == ToPrimitive(B)</code></td>
    </tr>
    <tr>
      <th><code>Boolean</code></th>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>ToNumber(A) === B</code></td>
      <td style="text-align: center">
        <code>ToNumber(A) === ToNumber(B)</code>
      </td>
      <td style="text-align: center"><code>A === B</code></td>
      <td style="text-align: center">
        <code>ToNumber(A) == ToPrimitive(B)</code>
      </td>
    </tr>
    <tr>
      <th><code>Object</code></th>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>ToPrimitive(A) == B</code></td>
      <td style="text-align: center"><code>ToPrimitive(A) == B</code></td>
      <td style="text-align: center">
        <code>ToPrimitive(A) == ToNumber(B)</code>
      </td>
      <td style="text-align: center"><code>A === B</code></td>
    </tr>
  </tbody>
</table>

В таблице выше, ToNumber(A) пытается перед сравнением привести свой аргумент к числу. Такое поведение эквивалентно `+A` (унарный оператор `+`). Если ToPrimitive(A) получает _объект_ в качестве аргумента, то производятся попытки привести его к примитиву, вызывая на нем методы `A.toString` и `A.valueOf`.

Традиционно (и в соответствии с ECMAScript), ни один из объектов не равен `undefined` или `null`. Но большинство браузеров позволяет определённому классу объектов (в частности, объектам `document.all` для любой страницы) _эмулировать_ значение `undefined.` Оператор равенства вернёт значение true для `null == A` и `undefined == A`, тогда, и только тогда, когда объект эмулирует значение `undefined`. Во всех остальных случаях объект не может быть равен `undefined` или `null`.

```js
var num = 0;
var obj = new String("0");
var str = "0";
var b = false;

console.log(num == num); // true
console.log(obj == obj); // true
console.log(str == str); // true

console.log(num == obj); // true
console.log(num == str); // true
console.log(obj == str); // true
console.log(null == undefined); // true

// оба false, кроме очень редких случаев
console.log(obj == null);
console.log(obj == undefined);
```

Некоторые разработчики считают, что лучше всегда употреблять оператор _строго_ равенства, вместо сравнения с приведением типов. Результат строгого равенства легче предугадать, да и сравнивая значения, без их приведения, можно получить выигрыш в скорости`.`

## Строгое равенство с использованием `===`

Строгое равно проверяет на равенство две величины, при этом тип каждой из величин перед сравнением не изменяется (не приводится). Если значения имеют различающиеся типы, то они не могут быть равными. С другой стороны все не числовые переменные, принадлежащие одному типу, считаются равными между собой, если содержат одинаковые величины. Ну и, наконец, числовые переменные считаются равными, если они имеют одинаковые значения, либо одна из них `+0`, а вторая `-0`. В то же время, если хотя бы одна из числовых переменных содержит значение `NaN`, выражение вернёт `false`.

```js
var num = 0;
var obj = new String("0");
var str = "0";
var b = false;

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
```

Практически всегда для сравнения следует использовать оператор строгого равенства. Для всех значений, за исключением числовых используется очевидная семантика: величина равна только сама себе. Как было сказано выше для числовых типов можно выделить два особых случая. Во-первых, сравнение `+0` и `-0`. Знак для нуля введён для упрощения некоторых вычислений с плавающей запятой, однако, с точки зрения математики, разницы между `+0` и `-0` не существует, поэтому оператор строгого равенства считает их равными. Во-вторых, сравнение величин `NaN`. `NaN` (Not a number) представляет из себя значение не определённой величины, которое применяется для не чётко определённых математических задач (например `+∞ + -∞`). Для оператора строго равенства `NaN` не равен ни одной из величин, в том числе и самому себе (единственный случай, когда `(x!==x)` вернёт true).

## Равенство одинаковых величин

Равенство одинаковых величин определяет _функциональную идентичность_ во всех контекстах сравниваемых величин. (Данный способ сравнения основывается на [принципе подстановки Барбары Лисков](https://ru.wikipedia.org/wiki/Принцип_подстановки_Барбары_Лисков).) Рассмотрим пример попытки изменения неизменяемого (immutable) свойства`:`

```js
// Добавление неизменяемого свойства NEGATIVE_ZERO (отрицательный ноль) в конструктор Number.
Object.defineProperty(Number, "NEGATIVE_ZERO", {
  value: -0,
  writable: false,
  configurable: false,
  enumerable: false,
});

function attemptMutation(v) {
  Object.defineProperty(Number, "NEGATIVE_ZERO", { value: v });
}
```

При попытке изменения неизменяемого свойства, вызов `Object.defineProperty` выбросит исключение, однако, если новое свойство равняется старому, изменений не произойдёт и исключение не будет выброшено. Если `v` содержит `-0`, изменений не произойдёт, а значит, код отработает без выброса исключений. Однако, если же `v` содержит `+0`, `Number.NEGATIVE_ZERO` утратит свою неизменяемую величину.

Именно для сравнения нового и текущего неизменяемых свойств используется сравнение одинаковых величин, представленное методом {{jsxref("Object.is")}}.

## Равенство одинаковых величин и нулей

Аналогично равенству одинаковых величин, но +0 и -0 считаются равными.

Равенство одинаковых величин и нулей не предоставляется как JavaScript API, но может быть реализовано с помощью пользовательского кода:

```js
function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x и y равны (могут быть -0 и 0) или они оба равны NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
```

_Равенство одинаковых величин и нулей_ отличается от _строгого равенства_ тем, что принимает каждое значение `NaN` равным любому другому значению `NaN`, а от _равенства одинаковых величин_ тем, что принимает `-0` равным `0`. Подобное поведение обычно оказывается самым уместным при поиске в списках, особенно при работе с `NaN`. Данная стратегия сравнения используется в методах [`Array.prototype.includes()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [`TypedArray.prototype.includes()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes), а так же в [`Map`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Map) и [`Set`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Set) для оценки равенства ключей.

## Спецификации для равенства, строгого равенства и равенства одинаковых величин

В стандарте ES5, сравнение выполняемое оператором [==](/ru/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) описывается в секции [11.9.3, The Abstract Equality Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-11.9.3). Описание оператора [===](/ru/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) находится в секции [11.9.6, The Strict Equality Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-11.9.6). В секции [9.12, The SameValue Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-9.12) ES5 описывает операцию сравнение одинаковых величин для внутреннего движка JS. Строгое равенство и равенство одинаковых величин, практически одинаковы, за исключением обработки [числовых типов](/ru/docs/Web/JavaScript/Reference/Global_Objects/Number). ES6 предлагает использовать алгоритм сравнения одинаковых величин через вызов [`Object.is`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/is).

### Как понимать все эти способы сравнения?

До выхода редакции ES6 считалось, что оператор строгого равенства просто "улучшенная" версия оператора нестрогого равенства. Например, некоторые считали, что == просто улучшенная версия === потому, что первый оператор делает всё то же, что и второй, плюс приведение типов своих операндов. То есть 6 == "6". (Или же наоборот: оператор нестрогого равенства базовый, а оператор строгого равенства просто его улучшенная версия, ведь он добавляет ещё одно условие - требует, чтобы оба операнда были одного и того же типа. Какой вариант ближе вам, зависит только от вашей точки зрения на вещи.)

Но эти точки зрения уже нельзя применить к новому методу сравнения [Object.is](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/is) из новой редакции ES6. Нельзя сказать, что [Object.is](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/is) более или менее строг относительно существующих способов сравнения, или что это нечто среднее между ними. Ниже в таблице показаны основные различия операторов сравнения. [Object.is](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/is) интересен тем, что различает -0 и +0, а также умеет сравнивать два не числа [NaN](/ru/docs/Web/JavaScript/Reference/Global_Objects/NaN).

| x                   | y                   | `==`       | `===`      | `Object.is` | `SameValueZero` |
| ------------------- | ------------------- | ---------- | ---------- | ----------- | --------------- |
| `undefined`         | `undefined`         | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `null`              | `null`              | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `true`              | `true`              | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `false`             | `false`             | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `'foo'`             | `'foo'`             | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `0`                 | `0`                 | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `+0`                | `-0`                | `✅ true`  | `✅ true`  | `❌ false`  | `✅ true`       |
| `+0`                | `0`                 | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `-0`                | `0`                 | `✅ true`  | `✅ true`  | `❌ false`  | `✅ true`       |
| `0n`                | `-0n`               | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `0`                 | `false`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `""`                | `false`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `""`                | `0`                 | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `'0'`               | `0`                 | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `'17'`              | `17`                | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `[1, 2]`            | `'1,2'`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `new String('foo')` | `'foo'`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `null`              | `undefined`         | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `null`              | `false`             | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `undefined`         | `false`             | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `{ foo: 'bar' }`    | `{ foo: 'bar' }`    | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `new String('foo')` | `new String('foo')` | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `0`                 | `null`              | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `0`                 | `NaN`               | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `'foo'`             | `NaN`               | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `NaN`               | `NaN`               | `❌ false` | `❌ false` | `✅ true`   | `✅ true`       |

### Когда использовать Object.is(), а когда ===

Особое поведение {{jsxref("Object.is")}} по отношению к нулям, вероятно, будет представлять интерес при реализации определенных схем метапрограммирования, особенно в отношении дескрипторов свойств, когда желательно, чтобы ваш алгоритм имел такое же поведение, как {{jsxref("Object.defineProperty")}}. В случае, если вам этого не требуется, рекомендуется избегать {{jsxref("Object.is")}} и вместо этого использовать [`===`](/ru/docs/Web/JavaScript/Reference/Operators). Как правило, даже при необходимости сравнения {{jsxref("NaN")}}-значений, эффективнее выполнить проверку таких значений отдельно, при помощи метода {{jsxref("isNaN")}}, чем выяснять, как окружающие вычисления могут повлиять на знаки нулей и как это отразится на вашем алгоритме.

Вот неполный список встроенных методов и операторов, при использовании которых, различие между `-0` и `+0` может оказаться важным для вашего кода:

- [`-` (unary negation)](/ru/docs/Web/JavaScript/Reference/Operators/Unary_negation)

  - : Рассмотрим следующий пример:

    ```js
    const stoppingForce = obj.mass * -obj.velocity;
    ```

    Если `obj.velocity` равно `0` (или вычисляется как `0`), в этом месте возникает `-0` и присваивается в `stoppingForce`.

- {{jsxref("Math.atan2")}}, {{jsxref("Math.ceil")}}, {{jsxref("Math.pow")}}, {{jsxref("Math.round")}}
  - : In some cases, it's possible for a `-0` to be introduced into an expression as a return value of these methods even when no `-0` exists as one of the parameters. For example, using {{jsxref("Math.pow")}} to raise {{jsxref("Infinity", "-Infinity")}} to the power of any negative, odd exponent evaluates to `-0`. Refer to the documentation for the individual methods.
- {{jsxref("Math.floor")}}, {{jsxref("Math.max")}}, {{jsxref("Math.min")}}, {{jsxref("Math.sin")}}, {{jsxref("Math.sqrt")}}, {{jsxref("Math.tan")}}
  - : It's possible to get a `-0` return value out of these methods in some cases where a `-0` exists as one of the parameters. E.g., `Math.min(-0, +0)` evaluates to `-0`. Refer to the documentation for the individual methods.
- [`~`](/ru/docs/Web/JavaScript/Reference/Operators), [`<<`](/ru/docs/Web/JavaScript/Reference/Operators), [`>>`](/ru/docs/Web/JavaScript/Reference/Operators)
  - : Each of these operators uses the ToInt32 algorithm internally. Since there is only one representation for 0 in the internal 32-bit integer type, `-0` will not survive a round trip after an inverse operation. E.g., both `Object.is(~~(-0), -0)` and `Object.is(-0 << 2 >> 2, -0)` evaluate to `false`.

Relying on {{jsxref("Object.is")}} when the signedness of zeros is not taken into account can be hazardous. Of course, when the intent is to distinguish between `-0` and `+0`, it does exactly what's desired.

### Caveat: Object.is() and NaN

The {{jsxref("Object.is")}} specification treats all instances of {{jsxref("NaN")}} as the same object. However, since [typed arrays](/ru/docs/Web/JavaScript/Typed_arrays) are available, we can have distinct floating point representations of `NaN` which don't behave identically in all contexts. For example:

```js
const f2b = (x) => new Uint8Array(new Float64Array([x]).buffer);
const b2f = (x) => new Float64Array(x.buffer)[0];
// Get a byte representation of NaN
const n = f2b(NaN);
// Change the first bit, which is the sign bit and doesn't matter for NaN
n[0] = 1;
const nan2 = b2f(n);
console.log(nan2); // NaN
console.log(Object.is(nan2, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan2)); // Uint8Array(8) [1, 0, 0, 0, 0, 0, 248, 127]
```

## Смотрите также

- [JS Comparison Table](https://dorey.github.io/JavaScript-Equality-Table/)
