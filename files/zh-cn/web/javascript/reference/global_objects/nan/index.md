---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
---

{{jsSidebar("Objects")}}

全局属性 **`NaN`** 是一个表示非数字的值。

{{js_property_attributes(0, 0, 0)}}

{{EmbedInteractiveExample("pages/js/globalprops-nan.html")}}

## 描述

`NaN`是*全局对象*的一个属性。换句话说，它是全局作用域中的一个变量。

`NaN` 的初始值不是数字——与 {{jsxref("Number.NaN")}} 的值相同。在现代浏览器中，`NaN` 是一个不可配置、不可写的属性。即使不是这样，也要避免重写它。在程序中很少使用 `NaN`。

有五种不同类型的操作返回 `NaN`：

- 失败的数字转换（例如，显式转换，如 `parseInt("blabla")`、`Number(undefined)`，或隐式转换，如 `Math.abs(undefined)`）
- 计算结果不是实数的数学运算（例如，`Math.sqrt(-1)`）
- 不定式（例如，`0 * Infinity`、`1 ** Infinity`、`Infinity / Infinity`、`Infinity - Infinity`）
- 一个操作数被强制转换为 `NaN` 的方法或表达式（例如，`7 ** NaN`、`7 * "blabla"`）——这意味着 `NaN` 具有传染性
- 将无效值表示为数字的其他情况（例如，无效的 [Date](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) `new Date("blabla").getTime()`、`"".charCodeAt(1)`）

`NaN` 及其行为不是 JavaScript 发明的。它在浮点运算中的语义（包括 `NaN !== NaN`）是由 [IEEE 754](https://zh.wikipedia.org/wiki/雙精度浮點數) 指定的。`NaN` 的行为包括：

- 如果 `NaN` 涉及数学运算（但不涉及[位运算](/zh-CN/docs/Web/JavaScript/Reference/Operators#位移运算符)），结果通常也是 `NaN`。（参见下面的[反例](#默默逃离_nan)。）
- 当 `NaN` 是任何关系比较（`>`, `<`, `>=`, `<=`）的操作数之一时，结果总是 `false`。
- `NaN` 不等于（通过 [`==`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)、[`!=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Inequality)、[`===`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality) 和 [`!==`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_inequality)）任何其他值——包括与另一个 `NaN` 值。

`NaN` 也是 JavaScript 中的[假](/zh-CN/docs/Glossary/Falsy)值之一。

## 示例

### 针对 NaN 的测试

要判断一个值是否为 `NaN`，可以使用 {{jsxref("Number.isNaN()")}} 或 {{jsxref("Global_Objects/isNaN", "isNaN()")}} 来最清楚地确定一个值是否为 `NaN` ——或者，因为 `NaN` 是唯一与自身不相等的值，所以你可以执行类似 `x !== x` 这样的自我比较。

```js
NaN === NaN; // false
Number.NaN === NaN; // false
isNaN(NaN); // true
isNaN(Number.NaN); // true
Number.isNaN(NaN); // true

function valueIsNaN(v) {
  return v !== v;
}
valueIsNaN(1); // false
valueIsNaN(NaN); // true
valueIsNaN(Number.NaN); // true
```

但是，请注意 `isNaN()` 和 `Number.isNaN()` 之间的区别：如果当前值是 `NaN`，或者将其强制转换为数字后将是 `NaN`，则前者将返回 `true`。而后者仅当值当前为 `NaN` 时才为 `true`：

```js
isNaN("hello world"); // true
Number.isNaN("hello world"); // false
```

出于同样的原因，使用 BigInt 值时 `isNaN()` 会抛出错误，而 `Number.isNaN()` 不会：

```js
isNaN(1n); // TypeError: Conversion from 'BigInt' to 'number' is not allowed.
Number.isNaN(1n); // false
```

此外，一些数组方法不能找到 `NaN`，而另一些可以。也就是说，查找索引的（{{jsxref("Array/indexOf", "indexOf()")}}、{{jsxref("Array/lastIndexOf", "lastIndexOf()")}}）不能找到 `NaN`，而查找值的（{{jsxref("Array/includes", "includes()")}}）可以：

```js
const arr = [2, 4, NaN, 12];
arr.indexOf(NaN); // -1
arr.includes(NaN); // true

// Methods accepting a properly defined predicate can always find NaN
arr.findIndex((n) => Number.isNaN(n)); // 2
```

有关 `NaN` 及其比较的更多信息，请参阅[相等性判断](/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)。

### 明显不同的 NaN 值

这是 `NaN` 与自身不平等的动机。可以用不同的二进制表示生成两个都是 `NaN` 的浮点数，因为在 [IEEE 754 编码](https://zh.wikipedia.org/wiki/NaN#浮点数)中，任何指数为 `0x7ff` 且尾数非零的浮点数都是 `NaN`。在 JavaScript 中，你可以使用[类型化数组](/zh-CN/docs/Web/JavaScript/Typed_arrays)来进行位操作。

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

### 默默逃离 NaN

`NaN` 通过数学运算进行传播，因此通常在计算结束时测试 `NaN` 一次就足以检测错误条件。`NaN` 被静默转义的唯一情况是使用指数为 `0` [求幂](/zh-CN/docs/Web/JavaScript/Reference/Operators/Exponentiation)时，它立即返回 `1` 而不测试基数的值。

```js
NaN ** 0 === 1; // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Number.NaN")}}
- {{jsxref("Number.isNaN()")}}
- {{jsxref("isNaN", "isNaN()")}}
