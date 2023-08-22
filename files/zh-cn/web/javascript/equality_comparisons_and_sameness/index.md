---
title: JavaScript 中的相等性判断
slug: Web/JavaScript/Equality_comparisons_and_sameness
---

{{jsSidebar("Intermediate")}}

JavaScript 提供三种不同的值比较运算：

- [`===`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)——严格相等（三个等号）
- [`==`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)——宽松相等（两个等号）
- [`Object.is()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

选择哪个运算取决于你需要什么样的比较。简单来说：

- 在比较两个操作数时，双等号（`==`）将执行类型转换，并且会按照 IEEE 754 标准对 `NaN`、`-0` 和 `+0` 进行特殊处理（故 `NaN != NaN`，且 `-0 == +0`）；
- 三等号（`===`）做的比较与双等号相同（包括对 `NaN`、`-0` 和 `+0` 的特殊处理）但不进行类型转换；如果类型不同，则返回 `false`；
- `Object.is()` 既不进行类型转换，也不对 `NaN`、`-0` 和 `+0` 进行特殊处理（这使它和 `===` 在除了那些特殊数字值之外的情况具有相同的表现）。

上述三个操作分别与 JavaScript 四个相等算法中的三个相对应：

- [IsLooselyEqual](https://tc39.es/ecma262/#sec-islooselyequal)：`==`
- [IsStrictlyEqual](https://tc39.es/ecma262/#sec-isstrictlyequal)：`===`
- [SameValue](https://tc39.es/ecma262/#sec-samevalue)：`Object.is()`
- [SameValueZero](https://tc39.es/ecma262/#sec-samevaluezero)：被许多内置运算使用

请注意，这些算法的区别都与它们对原始类型值的处理有关；它们都不会比较参数是否具有理论上相似的结构。对于任何具有相同的结构，但不是同一对象本身的非原始类型对象 `x` 和 `y` ，上述所有形式都将计算为 `false`。

## 使用 === 进行严格相等比较

严格相等比较两个值是否相等。两个被比较的值在比较前都不进行隐式转换。如果两个被比较的值具有不同的类型，这两个值是不相等的。否则，如果两个被比较的值类型相同，值也相同，并且都不是 number 类型时，两个值相等。最后，如果两个值都是 number 类型，当两个都不是 `NaN`，并且数值相同，或是两个值分别为 `+0` 和 `-0` 时，两个值被认为是相等的。

```js
const num = 0;
const obj = new String("0");
const str = "0";

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

在日常中使用严格相等几乎总是正确的选择。对于除了数值之外的值，严格相等使用明确的语义进行比较：一个值只与自身严格相等。对于数值，严格相等使用略加修改的语义来处理两个特殊情况：第一个情况是，浮点数 0 是不分正负的。区分 `+0` 和 `-0` 在解决一些特定的数学问题时是必要的，但是大部分情况下我们并不用关心。严格相等认为这两个值是全等的。第二个情况是，浮点数包含了 `NaN` 值，用来表示某些定义不明确的数学问题的解，例如：正无穷加负无穷。严格相等认为 `NaN` 与其他任何值都不全等，包括它自己。（等式 `(x !== x)` 成立的唯一情况是 `x` 的值为 `NaN`）

除了 `===` 之外，数组索引查找方法也使用严格相等，包括 [`Array.prototype.indexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)、[`Array.prototype.lastIndexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)、[`TypedArray.prototype.index()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf)、[`TypedArray.prototype.lastIndexOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf) 和 [`case`](/zh-CN/docs/Web/JavaScript/Reference/Statements/switch) 匹配。这意味着你不能使用 `indexOf(NaN)` 查找数组中 `NaN` 值的索引，也不能将 `NaN` 用作 `case` 值在 `switch` 语句中匹配任何内容。

```js
console.log([NaN].indexOf(NaN)); // -1
switch (NaN) {
  case NaN:
    console.log("Surprise"); // 没有任何输出
}
```

## 使用 == 进行宽松相等比较

宽松相等是*对称的*：对于任何 `A` 和 `B` 的值，`A == B` 总是与 `B == A` 具有相同的语义（除了转换应用的顺序）。使用 `==` 执行宽松相等的行为如下：

1. 如果操作数具有相同的类型，则按以下方式进行比较：
   - Object：仅当两个操作数引用相同的对象时，才返回 `true`。
   - String：仅当两个操作数具有相同的字符并且顺序相同，才返回 `true`。
   - Number：仅当两个操作数具有相同的值时，才返回 `true`。`+0` 和 `-0` 被视为相同的值。如果任一操作数为 `NaN`，则返回 `false`；因此 `NaN` 永远不等于 `NaN`。
   - Boolean：仅当操作数都是 `true` 或 `false` 时，才返回 `true`。
   - BigInt：仅当两个操作数具有相同的值时，才返回 `true`。
   - Symbol：仅当两个操作数引用相同的 symbol 时，才返回 `true`。
2. 如果操作数之一为 `null` 或 `undefined`，则另一个操作数必须为 `null` 或 `undefined` 才返回 `true`。否则返回 `false`。
3. 如果操作数之一是对象，而另一个是原始值，[则将对象转换为原始值](/zh-CN/docs/Web/JavaScript/Data_structures#强制原始值转换)。
4. 在这一步骤中，两个操作数都被转换为原始值（String、Number、Boolean、Symbol 和 BigInt 之一）。剩余的转换将分情况完成。
   - 如果它们是相同类型的，则使用步骤 1 进行比较。
   - 如果操作数中有一个是 Symbol，但另一个不是，则返回 `false`。
   - 如果操作数之一是 Boolean，而另一个不是，[则将 Boolean 转换为 Number](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)：`true` 转换为 1，`false` 转换为 0。然后再次对两个操作数进行宽松比较。
   - Number 转 String：[将 String 转换为 Number](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)。转换失败会得到 `NaN`，这将确保相等性为 `false`。
   - Number 转 BigInt：按照其数值进行比较。如果 Number 是 `±Infinity` 或 `NaN`，返回 `false`。
   - String 转 BigInt: 使用与 [`BigInt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) 构造函数相同的算法将字符串转换为 BigInt。如果转换失败，则返回 `false`。

一般而言，根据 ECMAScript 规范，所有原始类型和对象都不与 `undefined` 和 `null` 宽松相等。但是大部分浏览器允许非常有限的一类对象（即，所有页面中的 `document.all` 对象）在某些情况下表现出*模拟* `undefined` 值特性。宽松相等就是这些情况之一：当且仅当 A 是一个*模拟* `undefined` 的对象时，`null == A` 和 `undefined == A` 将会计算得到 `true`。在其他所有情况下，一个对象都不会与 `undefined` 或 `null` 宽松相等。

在大多数情况下，不建议使用宽松相等。使用严格相等进行比较的结果更容易预测，并且由于缺少类型强制转换可以更快地执行。

下面的例子演示了宽松比较，其中涉及 number 原始值 `0`、bigint 原始值 `0n`、string 原始值 `'0'` 和一个 `toString()` 值为 `'0'` 的对象。

```js
const num = 0;
const big = 0n;
const str = "0";
const obj = new String("0");

console.log(num == str); // true
console.log(big == num); // true
console.log(str == big); // true

console.log(num == obj); // true
console.log(big == obj); // true
console.log(str == obj); // true
```

宽松相等仅由 `==` 运算符使用。

## 使用 Object.is() 进行同值相等比较

同值相等决定了两个值在所有上下文中是否在功能上相同。（这个用例演示了[里氏替换原则](https://zh.wikipedia.org/wiki/里氏替换原则)的一种情况。）这一情况会在尝试修改一个不可变属性时发生。

```js
// 向 Nmuber 构造函数添加一个不可变的属性 NEGATIVE_ZERO
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

当尝试更改不可变属性时，`Object.defineProperty` 会抛出异常，但如果没有请求实际更改，则不会执行任何操作。如果 `v` 是 `-0`，则没有请求更改，也不会抛出错误。在内部，重新定义不可变属性时，使用同值相等将新指定的值与当前值进行比较。

同值相等由 [`Object.is`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 方法提供。语言内部期望一个值等于另一个时，几乎所有地方都使用同值相等。

## 零值相等

类似于同值相等，但 +0 和 -0 被视为相等。

零值相等不作为 JavaScript API 公开，但可以通过自定义代码实现：

```js
function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x 和 y 相等（可能是 -0 和 0）或它们都是 NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
```

零值相等与严格相等的区别在于其将 `NaN` 视作是相等的，与同值相等的区别在于其将 `-0` 和 `0` 视作相等的。这使得它在搜索期间通常具有最实用的行为，特别是在与 `NaN` 一起使用时。它被用于 [`Array.prototype.includes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)、[`TypedArray.prototype.includes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes) 及 [`Map`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) 和 [`Set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set) 方法用来比较键的相等性。

## 相等性方法比较

在比较双等号和三等号时，人们通常说一个时另一个的“增强”版本。例如，双等号可以被称为三等号的扩展版本，因为前者可以执行后者的所有操作，但是会对其操作数进行类型转换——例如 `6 == "6"`。或者，也可以说双等号是基础，而三等号是增强版本，因为它要求两个操作数是相同的类型，因此增加了额外的约束。

然而，这种思维方式意味着相等比较形成了一个一维的“光谱”，其中“完全严格”位于一端，“完全宽松”位于另一端。这个模型在 {{jsxref("Object.is")}} 方面存在缺陷，因为它既不比双等号“宽松”，也不比三等号“严格”，也不处于两者之间（可以说既比双等号严格，又比三等号宽松）。从下面的相同比较表中，我们可以看出这是由于 {{jsxref("Object.is")}} 处理 {{jsxref("NaN")}} 的方式。请注意，如果 `Object.is(NaN, NaN)` 求值得到 `false`，我们*可以*说它适合宽松/严格光谱，作为三等号的更严格形式，可以区分 `-0` 和 `+0` 。然而，{{jsxref("NaN")}} 的处理意味着这是不正确的。不幸的是，{{jsxref("Object.is")}} 必须根据其特定特征来考虑，而不是根据其相等运算符的宽松度或严格度来考虑。

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

### 何时使用 Object.is() 而不是三等号

通常情况下，唯一需要关注 {{jsxref("Object.is")}} 对零的特殊行为的时机是在实施特定的元编程范式时，特别是涉及属性描述符时，当你的工作需要镜像 {{jsxref("Object.defineProperty")}} 的某些特性时。如果你的用例不需要这样做，建议避免使用 {{jsxref("Object.is")}}，而改用 [`===`](/zh-CN/docs/Web/JavaScript/Reference/Operators)。即使你的要求涉及将两个 {{jsxref("NaN")}} 值之间的比较计算为 `true`，通常特殊处理 {{jsxref("NaN")}} 检查（使用先前版本的 ECMAScript 中提供的 {{jsxref("isNaN")}} 方法）比解决相关计算如何影响零的符号更为简单。

这是一个不全面的列表，其中包含可能导致你的代码中出现 `-0` 和 `+0` 之间差异的内置方法和运算符：

- [`-`（一元减）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_negation)

  - : 考虑以下例子：

    ```js
    const stoppingForce = obj.mass * -obj.velocity;
    ```

    如果 `obj.velocity` 是 `0`（或计算为 `0`），则在该位置引入 `-0` 并向 `stoppingForce` 传播。

- {{jsxref("Math.atan2")}}、{{jsxref("Math.ceil")}}、{{jsxref("Math.pow")}}、{{jsxref("Math.round")}}

  - : 在某些情况下，即使没有 `-0` 作为参数之一，这些方法的返回值仍可能作为表达式中的 `-0` 被引入。例如，使用 `Math.pow` 将 {{jsxref("Infinity", "-Infinity")}} 的任何负奇数次幂求值为 `-0`。请参阅各个方法的文档。

- {{jsxref("Math.floor")}}、{{jsxref("Math.max")}}、{{jsxref("Math.min")}}、{{jsxref("Math.sin")}}、{{jsxref("Math.sqrt")}}、{{jsxref("Math.tan")}}

  - : 在某些情况下，当参数中存在 `-0` 时，这些方法可能会返回一个 `-0` 值。例如，`Math.min(-0, +0)` 的计算结果为 `-0`。请参考各个方法的文档。

- [`~`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)、[`<<`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Left_shift)、[`>>`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Right_shift)

  - : 这些运算符中的每一个都在内部使用 ToInt32 算法。由于在内部 32 位整数类型中只有一个表示 0 的表示形式，`-0` 在反向操作后将不会存在。例如，`Object.is(~~(-0), -0)` 和 `Object.is(-0 << 2 >> 2, -0)` 都会计算为 `false`。

如果不考虑零的符号，依赖于 {{jsxref("Object.is")}} 可能会很危险。当意图区分 `-0` 和 `+0` 时，它当然会做到期望的效果。

### 注意：Object.is() 和 NaN

{{jsxref("Object.is")}} 规范将所有 {{jsxref("NaN")}} 的实例视为同一对象。然而，由于可以使用[类型化数组](/zh-CN/docs/Web/JavaScript/Typed_arrays)，我们可以拥有 `NaN` 的不同浮点表示，这些表示在所有上下文中的行为不完全相同。例如：

```js
const f2b = (x) => new Uint8Array(new Float64Array([x]).buffer);
const b2f = (x) => new Float64Array(x.buffer)[0];
// 得到 NaN 的字节表示
const n = f2b(NaN);
// 改变第一位，该位表示符号且与 NaN 无关
n[0] = 1;
const nan2 = b2f(n);
console.log(nan2); // NaN
console.log(Object.is(nan2, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan2)); // Uint8Array(8) [1, 0, 0, 0, 0, 0, 248, 127]
```

## 参见

- [JS 比较表](https://dorey.github.io/JavaScript-Equality-Table/)
