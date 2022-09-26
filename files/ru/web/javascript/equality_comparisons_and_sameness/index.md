---
title: Операторы сравнения
slug: Web/JavaScript/Equality_comparisons_and_sameness
tags:
  - Равенство
  - Сравнение
  - Средний
translation_of: Web/JavaScript/Equality_comparisons_and_sameness
---
{{jsSidebar("Intermediate")}}

JavaScript предоставляет три оператора сравнения величин:

- равенство ("двойное равно") использует [==](/ru/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality),
- строгое равенство (или "тройное равно" или "идентично") использует [===](/ru/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity),
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
Object.defineProperty(Number, "NEGATIVE_ZERO",
                      { value: -0, writable: false, configurable: false, enumerable: false });

function attemptMutation(v)
{
  Object.defineProperty(Number, "NEGATIVE_ZERO", { value: v });
}
```

При попытке изменения неизменяемого свойства, вызов `Object.defineProperty выбросит` исключение, однако, если новое свойство равняется старому, изменений не произойдёт и исключение не будет выброшено. Если `v` содержит `-0`, изменений не произойдёт, а значит, код отработает без выброса исключений. Однако, если же `v` содержит `+0`, `Number.NEGATIVE_ZERO` утратит свою неизменяемую величину. Именно для сравнения нового и текущего неизменяемых свойств используется сравнение одинаковых величин, представленное методом [`Object.is`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is").

## Спецификации для равенства, строгого равенства и равенства одинаковых величин

В стандарте ES5, сравнение выполняемое оператором [==](/ru/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) описывается в секции [11.9.3, The Abstract Equality Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-11.9.3). Описание оператора [===](/ru/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) находится в секции [11.9.6, The Strict Equality Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-11.9.6). В секции [9.12, The SameValue Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-9.12) ES5 описывает операцию сравнение одинаковых величин для внутреннего движка JS. Строгое равенство и равенство одинаковых величин, практически одинаковы, за исключением обработки [числовых типов](/ru/docs/Web/JavaScript/Reference/Global_Objects/Number). ES6 предлагает использовать алгоритм сравнения одинаковых величин через вызов [`Object.is`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is "/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is").

## `Как понимать все эти способы сравнения?`

До выхода редакции ES6 считалось, что оператор строгого равенства просто "улучшенная" версия оператора нестрогого равенства. Например, некоторые считали, что == просто улучшенная версия === потому, что первый оператор делает всё то же, что и второй, плюс приведение типов своих операндов. То есть 6 == "6". (Или же наоборот: оператор нестрогого равенства базовый, а оператор строгого равенства просто его улучшенная версия, ведь он добавляет ещё одно условие - требует, чтобы оба операнда были одного и того же типа. Какой вариант ближе вам, зависит только от вашей точки зрения на вещи.)

Но эти точки зрения уже нельзя применить к новому методу сравнения [Object.is](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/is) из новой редакции ES6. Нельзя сказать, что [Object.is](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/is) более или менее строг относительно существующих способов сравнения, или что это нечто среднее между ними. Ниже в таблице показаны основные различия операторов сравнения. [Object.is](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/is) интересен тем, что различает -0 и +0, а также умеет сравнивать два не числа [NaN](/ru/docs/Web/JavaScript/Reference/Global_Objects/NaN).

| `x`                 | `y`                 | `==`    | `===`   | `Object.is` |
| ------------------- | ------------------- | ------- | ------- | ----------- |
| `undefined`         | `undefined`         | `true`  | `true`  | `true`      |
| `null`              | `null`              | `true`  | `true`  | `true`      |
| `true`              | `true`              | `true`  | `true`  | `true`      |
| `false`             | `false`             | `true`  | `true`  | `true`      |
| `"foo"`             | `"foo"`             | `true`  | `true`  | `true`      |
| `{ foo: "bar" }`    | `x`                 | `true`  | `true`  | `true`      |
| `0`                 | `0`                 | `true`  | `true`  | `true`      |
| `+0`                | `-0`                | `true`  | `true`  | `false`     |
| `0`                 | `false`             | `true`  | `false` | `false`     |
| `""`                | `false`             | `true`  | `false` | `false`     |
| `""`                | `0`                 | `true`  | `false` | `false`     |
| `"0"`               | `0`                 | `true`  | `false` | `false`     |
| `"17"`              | `17`                | `true`  | `false` | `false`     |
| `[1,2]`             | `"1,2"`             | `true`  | `false` | `false`     |
| `new String("foo")` | `"foo"`             | `true`  | `false` | `false`     |
| `null`              | `undefined`         | `true`  | `false` | `false`     |
| `null`              | `false`             | `false` | `false` | `false`     |
| `undefined`         | `false`             | `false` | `false` | `false`     |
| `{ foo: "bar" }`    | `{ foo: "bar" }`    | `false` | `false` | `false`     |
| `new String("foo")` | `new String("foo")` | `false` | `false` | `false`     |
| `0`                 | `null`              | `false` | `false` | `false`     |
| `0`                 | `NaN`               | `false` | `false` | `false`     |
| `"foo"`             | `NaN`               | `false` | `false` | `false`     |
| `NaN`               | `NaN`               | `false` | `false` | `true`      |

## `Когда же использовать Object.is ?`

`Особенность обработки Object.is нулей будет полезна в метапрограммировании, когда необходимо присвоить противоположное значение свойству через дескриптор Object.defineProperty. Если ваши задачи этого не требуют, то лучше воздержаться от использования Object.is, отдав предпочтение ===. Даже если в коде необходимо сравнивать два NaN, обычно проще всего использовать существующий метод isNaN, чтобы последующие вычисления не влияли на сравнение нулей с разными знаками.

Вот примеры операторов и методов, которые могут сделать различия между -0 и +0 более явными, что непременно отразиться в вашем коде:

- (унарный минус)

Очевидно, что применение унарного минуса к нулю даст -0. Но, иногда, это происходит совершенно незаметно. К примеру:

let stoppingForce = obj.mass \* -obj.velocity

Если значением obj.velocity будет 0, то результатом выражения будет -0, что в итоге отразится в переменной stoppingForce.

Math.atan2Math.ceilMath.powMath.roundЕсть вероятность, что данные методы могут возвратить -0, даже если его не передавали явно одним из параметров. Например, если методом Math.pow возвести -Infinity в любую отрицательную степень. Ознакомьтесь с подробным описанием данных методов.Math.floorMath.maxMath.minMath.sinMath.sqrtMath.tanВ некоторых случаях можно получить результат, равный -0, если вышеперечисленным методам одним из параметров передать -0. Например, Math.min(-0, +0) вернёт -0. Ознакомьтесь с подробным описанием данных методов.~<<>>Каждый из этих операторов использует внутренний алгоритм ToInt32. В нём нет места для отрицательного нуля, потому значение -0 не переживёт подобной операции. То есть и Object.is(~~(-0), -0), и Object.is(-0 << 2 >> 2, -0) возвратят false.

Из вышеперечисленного ясно, что использование Object.is иногда может быть проблемным. Естественно, если вам необходимо чётко различать -0 и +0, то этот метод именно то, что нужно.

Смотрите такжеТаблица сравнений Javascript`
