---
title: 小于（<）
slug: Web/JavaScript/Reference/Operators/Less_than
---

**小于**（`<`）运算符在左操作数比右操作数小时返回 `true`，否则返回 `false`。

{{InteractiveExample("JavaScript Demo: Expressions - Less than operator")}}

```js interactive-example
console.log(5 < 3);
// Expected output: false

console.log(3 < 3);
// Expected output: false

// Compare bigint to number
console.log(3n < 5);
// Expected output: true

console.log("aa" < "ab");
// Expected output: true
```

## 语法

```js-nolint
x < y
```

## 描述

操作数经过多轮强制比较，可以总结为以下几点：

首先，通过依次调用其 [`[Symbol.toPrimitive]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)（以 `"number"` 作为提示）、[`valueOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) 和 [`toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 方法，将对象[转换为原始类型](/zh-CN/docs/Web/JavaScript/Guide/Data_structures#强制原始值转换)。左边的操作数总是在右边的操作数之前被强制转换。请注意，尽管 `[Symbol.toPrimitive]()` 被调用时带有 `"number"` 的提示（意味着有一点倾向于将对象变成数字），但返回值并没有[转换为数字](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)，因为字符串仍然被特别处理。

- 如果两个值都是字符串，则根据它们所包含的 Unicode 码位的值，将它们作为字符串进行比较。
- 否则，JavaScript 会尝试将非数值类型转化为数值类型：
  - 布尔值 `true` 和 `false` 分别转化为 1 和 0。
  - `null` 转化为 0。
  - `undefined` 转化为 `NaN`。
  - 字符串根据其包含的值进行转换，如果不包含数字值，则转换为 `NaN`。
- 如果任意一个值为 [`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)，则运算符返回 `false`。
- 否则，这些值将作为数值进行比较。BigInt 和数值可以一起比较。

其他运算符，包括 [`>`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Greater_than)、[`>=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal) 和 [`<=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal) 使用与 `<` 相同的算法。有两种情况，所有四个运算符都返回 `false`：

- 如果其中一个操作数被转换为 BigInt，而另一个被转换为无法转换为 BigInt 值的字符串（当传递给 [`BigInt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)时，它会抛出[语法错误](/zh-CN/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax)）。
- 如果其中一个操作数被转化为 `NaN`，如不能转化为数字的字符串，或 `undefined`。

对于所有其他情况，这四种运算符有以下关系：

```js
x < y === !(x >= y);
x <= y === !(x > y);
x > y === y < x;
x >= y === y <= x;
```

> [!NOTE]
> `<` 和 `>` 之间一个明显区别是强制的顺序，特别是当强制转化为原始值有副作用时。所有的比较操作符都是先强制转化左操作数再强制转化右操作数。

## 示例

### 字符串之间的比较

```js
"a" < "b"; // true
"a" < "a"; // false
"a" < "3"; // false
```

### 字符串与数值比较

```js
"5" < 3; // false
"3" < 3; // false
"3" < 5; // true

"hello" < 5; // false
5 < "hello"; // false

"5" < 3n; // false
"3" < 5n; // true
```

### 数值之间的比较

```js
5 < 3; // false
3 < 3; // false
3 < 5; // true
```

### 数值与 BigInt 之间的比较

```js
5n < 3; // false
3 < 5n; // true
```

### 比较布尔值、null、undefined 和 NaN

```js
true < false; // false
false < true; // true

0 < true; // true
true < 1; // false

null < 0; // false
null < 1; // true

undefined < 3; // false
3 < undefined; // false

3 < NaN; // false
NaN < 3; // false
```

### 含有副作用的比较

比较总是将其操作数强制转化为原始值。这意味着同一个对象在一个比较表达式中可能最终会有不同的值。例如，你可能有两个既大于又小于对方的值。

```js
class Mystery {
  static #coercionCount = -1;
  valueOf() {
    Mystery.#coercionCount++;
    // 左侧操作数先强制转化，所以对右操作数会先返回 0 再返回 1
    return Mystery.#coercionCount % 2;
  }
}
const l = new Mystery();
const r = new Mystery();
console.log(l < r && r < l);
// true
```

> [!WARNING]
> 这可能是混乱的根源。如果你的对象提供了自定义的原始值转换逻辑，请确保它是*幂等的*：多次强制转化应该返回相同的值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [大于运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [大于等于运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [小于等于运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
