---
title: JavaScript 中的相等性判断
slug: Web/JavaScript/Equality_comparisons_and_sameness
---

{{jsSidebar("Intermediate")}}

ES2015 中有四种相等算法：

- 抽象（非严格）相等比较 (`==`)
- 严格相等比较 (`===`): 用于 `Array.prototype.indexOf`, `Array.prototype.lastIndexOf`, 和 `case`-matching
- 同值零：用于 `%TypedArray%` 和 `ArrayBuffer` 构造函数、以及`Map`和`Set`操作，并将用于 ES2016/ES7 中的`String.prototype.includes`
- 同值：用于所有其他地方

JavaScript 提供三种不同的值比较操作：

- 严格相等比较 (也被称作"strict equality", "identity", "triple equals")，使用 [===](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity) ,
- 抽象相等比较 ("loose equality"，"double equals") ，使用 [==](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality)
- 以及 [`Object.is`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) （ECMAScript 2015/ ES6 新特性）

选择使用哪个操作取决于你需要什么样的比较。

简而言之，在比较两件事情时，双等号将执行类型转换; 三等号将进行相同的比较，而不进行类型转换 (如果类型不同，只是总会返回 false ); 而 Object.is 的行为方式与三等号相同，但是对于 NaN 和 -0 和 +0 进行特殊处理，所以最后两个不相同，而 Object.is（NaN，NaN）将为 `true`。(通常使用双等号或三等号将 NaN 与 NaN 进行比较，结果为 false，因为 IEEE 754 如是说.) 请注意，所有这些之间的区别都与其处理原语有关; 这三个运算符的原语中，没有一个会比较两个变量是否结构上概念类似。对于任意两个不同的非原始对象，即便他们有相同的结构，以上三个运算符都会计算得到 false。

## 严格相等 `===`

全等操作符比较两个值是否相等，两个被比较的值在比较前都不进行隐式转换。如果两个被比较的值具有不同的类型，这两个值是不全等的。否则，如果两个被比较的值类型相同，值也相同，并且都不是 number 类型时，两个值全等。最后，如果两个值都是 number 类型，当两个都不是 NaN，并且数值相同，或是两个值分别为 +0 和 -0 时，两个值被认为是全等的。

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

在日常中使用全等操作符几乎总是正确的选择。对于除了数值之外的值，全等操作符使用明确的语义进行比较：一个值只与自身全等。对于数值，全等操作符使用略加修改的语义来处理两个特殊情况：第一个情况是，浮点数 0 是不分正负的。区分 +0 和 -0 在解决一些特定的数学问题时是必要的，但是大部分情况下我们并不用关心。全等操作符认为这两个值是全等的。第二个情况是，浮点数包含了 NaN 值，用来表示某些定义不明确的数学问题的解，例如：正无穷加负无穷。全等操作符认为 NaN 与其他任何值都不全等，包括它自己。（等式 `(x !== x)` 成立的唯一情况是 x 的值为 NaN）

## 非严格相等 `==`

相等操作符比较两个值是否相等，在比较前将两个被比较的值转换为相同类型。在转换后（等式的一边或两边都可能被转换），最终的比较方式等同于全等操作符 === 的比较方式。相等操作符满足交换律。

相等操作符对于不同类型的值，进行的比较如下图所示：

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th colspan="7" scope="col">被比较值 B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td>Undefined</td>
      <td>Null</td>
      <td>Number</td>
      <td>String</td>
      <td>Boolean</td>
      <td>Object</td>
    </tr>
    <tr>
      <th colspan="1" rowspan="6" scope="row">被比较值 A</th>
      <td>Undefined</td>
      <td><code>true</code></td>
      <td><code>true</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>IsFalsy(B)</code></td>
    </tr>
    <tr>
      <td>Null</td>
      <td><code>true</code></td>
      <td><code>true</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>IsFalsy(B)</code></td>
    </tr>
    <tr>
      <td>Number</td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>A === B</code></td>
      <td><code>A === ToNumber(B)</code></td>
      <td><code>A=== ToNumber(B)</code></td>
      <td><code>A== ToPrimitive(B)</code></td>
    </tr>
    <tr>
      <td>String</td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>ToNumber(A) === B</code></td>
      <td><code>A === B</code></td>
      <td><code>ToNumber(A) === ToNumber(B)</code></td>
      <td><code>ToPrimitive(B) == A</code></td>
    </tr>
    <tr>
      <td>Boolean</td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>ToNumber(A) === B</code></td>
      <td><code>ToNumber(A) === ToNumber(B)</code></td>
      <td><code>A === B</code></td>
      <td><code>ToNumber(A) == ToPrimitive(B)</code></td>
    </tr>
    <tr>
      <td>Object</td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>ToPrimitive(A) == B</code></td>
      <td><code>ToPrimitive(A) == B</code></td>
      <td><code>ToPrimitive(A) == ToNumber(B)</code></td>
      <td>
        <p><code>A === B</code></p>
      </td>
    </tr>
  </tbody>
</table>

在上面的表格中，`ToNumber(A)` 尝试在比较前将参数 A 转换为数字，这与 +A（单目运算符 +）的效果相同。`ToPrimitive(A)`通过尝试调用 A 的`A.toString()` 和 `A.valueOf()` 方法，将参数 A 转换为原始值（Primitive）。

一般而言，根据 ECMAScript 规范，所有的对象都与 `undefined` 和 `null` 不相等。但是大部分浏览器允许非常窄的一类对象（即，所有页面中的 `document.all` 对象），在某些情况下，充当效仿 `undefined` 的角色。相等操作符就是在这样的一个背景下。因此，`IsFalsy(A)` 方法的值为 `true`，当且仅当 `A` 效仿 `undefined`。在其他所有情况下，一个对象都不会等于 `undefined`或 `null`。

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

// both false, except in rare cases
console.log(obj == null);
console.log(obj == undefined);
```

有些开发者认为，最好永远都不要使用相等操作符。全等操作符的结果更容易预测，并且因为没有隐式转换，全等比较的操作会更快。

## 同值相等

同值相等解决了最后一个用例：确定两个值是否在任何情况下功能上是相同的。（这个用例演示了[里氏替换原则](http://zh.wikipedia.org/zh-cn/%E9%87%8C%E6%B0%8F%E6%9B%BF%E6%8D%A2%E5%8E%9F%E5%88%99)的实例。）当试图对不可变（immutable）属性修改时发生出现的情况：

```js
// 向 Nmuber 构造函数添加一个不可变的属性 NEGATIVE_ZERO
Object.defineProperty(Number, "NEGATIVE_ZERO",
                      { value: -0, writable: false, configurable: false, enumerable: false });

function attemptMutation(v)
{
  Object.defineProperty(Number, "NEGATIVE_ZERO", { value: v });
}
```

`Object.defineProperty` 在试图修改不可变属性时，如果这个属性确实被修改了则会抛出异常，反之什么都不会发生。例如如果 v 是 -0，那么没有发生任何变化，所以也不会抛出任何异常。但如果 v 是 +0，则会抛出异常。不可变属性和新设定的值使用 same-value 相等比较。

同值相等由 [`Object.is`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 方法提供。

## 零值相等

与同值相等类似，不过会认为 +0 与 -0 相等。

## 规范中的相等、严格相等以及同值相等

在 ES5 中， [`==`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) 相等在 [Section 11.9.3, The Abstract Equality Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-11.9.3)； [`===`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) 相等在 [11.9.6, The Strict Equality Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-11.9.6)。（请参考这两个链接，他们很简洁易懂。提示：请先阅读严格相等的算法）ES5 也提供了 same-value 相等， [Section 9.12, The SameValue Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-9.12) ，用在 JS 引擎内部。除了 11.9.6.4 和 9.12.4 在处理数字上的不同外，它基本和严格相等算法相同。ES6 简单地通过 [`Object.is`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 暴露了这个算法。

我们可以看到，使用双等或三等时，除了 11.9.6.1 类型检查，严格相等算法是相等算法的子集因为 11.9.6.2–7 对应 11.9.3.1.a–f。

## 理解相等比较的模型

在 ES2015 以前，你可能会说双等和三等是“扩展”的关系。比如有人会说双等是三等的扩展版，因为他处理三等所做的，还做了类型转换。例如 6 == "6" 。反之另一些人可能会说三等是双等的扩展，因为他还要求两个参数的类型相同，所以增加了更多的限制。怎样理解取决于你怎样看待这个问题。

但是这种比较的方式没办法把 ES2015 的 [`Object.is`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 排列到其中。因为 [`Object.is`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 并不比双等更宽松，也并不比三等更严格，当然也不是在他们中间。从下表中可以看出，这是由于 [`Object.is`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 处理 [`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN) 的不同。注意假如 `Object.is(NaN, NaN)` 被计算成 `false` ，我们就可以说他比三等更为严格，因为他可以区分 `-0` 和 `+0` 。但是对 [`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN) 的处理表明，这是不对的。 [`Object.is`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 应该被认为是有其特殊的用途，而不应说他和其他的相等更宽松或严格。

| x                   | y                   | `==`    | `===`   | `Object.is` |
| ------------------- | ------------------- | ------- | ------- | ----------- |
| `undefined`         | `undefined`         | `true`  | `true`  | `true`      |
| `null`              | `null`              | `true`  | `true`  | `true`      |
| `true`              | `true`              | `true`  | `true`  | `true`      |
| `false`             | `false`             | `true`  | `true`  | `true`      |
| `"foo"`             | `"foo"`             | `true`  | `true`  | `true`      |
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

## 什么时候使用 [`Object.is`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 或是三等

总的来说，除了对待[`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)的方式，[`Object.is`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is)唯一让人感兴趣的，是当你需要一些元编程方案时，它对待 0 的特殊方式，特别是关于属性描述器，即你的工作需要去镜像[`Object.defineProperty`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)的一些特性时。如果你的工作不需要这些，那你应该避免使用[`Object.is`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is)，使用[`===`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)来代替。即使你需要比较两个[`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)使其结果为`true`，总的来说编写使用[`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN) 检查的特例函数 (用旧版本 ECMAScript 的[`isNaN 方法`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN)) 也会比想出一些计算方法让[`Object.is`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is)不影响不同符号的 0 的比较更容易些。

这里是一个会区别对待 -0 和 +0 的内置方法和操作符不完全列表：

- [`- (一元负)`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#-_.28Unary_Negation.29)
  - : 显而易见，对 `0` 一元负操作得到 `-0`。但表达式的抽象化可能在你没有意识到得情况下导致 `-0` 延续传播。例如当考虑下例时：`js let stoppingForce = obj.mass * -obj.velocity` 如果 `obj.velocity` 是 `0` (或计算结果为 `0`), 一个 `-0` 就在上处产生并被赋值为 `stoppingForce` 的值。
- [`Math.atan2`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2),
  [`Math.ceil`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil),
  [`Math.pow`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/pow),
  [`Math.round`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
  - : 即使传入的参数中没有 -0，这些方法的返回值都有可能是 -0。例如当用 [`Math.pow`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)计算`-Infinity`的任何负奇指数的幂都会得到`-0`。详情请参见这些方法各自的文档。
- [`Math.floor`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/floor),
  [`Math.max`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/max),
  [`Math.min`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/min),
  [`Math.sin`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sin),
  [`Math.sqrt`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt),
  [`Math.tan`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/tan)
  - : 当传入参数中有 -0 时，这些方法也可能返回 -0。例如， `Math.min(-0, +0)` 得出 `-0`。详情请参见这些方法各自的文档。
- [`~`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators),
  [`<<`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators),
  [`>>`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
  - : 这些操作符内部都使用了 ToInt32 算法。因为内部 32 位整数类型只有一个 0（没有符号区别），-0 的符号在反操作后并不会保留下来。例如 `Object.is(~~(-0), -0)` 和 `Object.is(-0 << 2 >> 2, -0)` 都会得到 `false`.

在未考虑 0 的符号的情况下依赖于 [`Object.is`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 是危险的。当然，如果本意就是区分 -0 和 +0 的话，[`Object.is`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 能按照期望完成工作。

## 参考

- [JS 比较表](http://dorey.github.io/JavaScript-Equality-Table/)
