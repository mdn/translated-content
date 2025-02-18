---
title: 相等（==）
slug: Web/JavaScript/Reference/Operators/Equality
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

**相等**（**`==`**）运算符检查其两个操作数是否相等，返回一个布尔值结果。与[严格相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)运算符不同，它会尝试转换不同类型的操作数，并进行比较。

{{InteractiveExample("JavaScript Demo: Expressions - Equality operator")}}

```js interactive-example
console.log(1 == 1);
// Expected output: true

console.log("hello" == "hello");
// Expected output: true

console.log("1" == 1);
// Expected output: true

console.log(0 == false);
// Expected output: true
```

## 语法

```js-nolint
x == y
```

## 描述

相等运算符（`==` 和 `!=`）提供[非严格相等](/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness#使用_进行宽松相等比较)语义。这可以大致总结如下：

1. 如果操作数具有相同的类型，则按如下方式进行比较：
   - 对象（Object）：仅当两个操作数引用同一个对象时返回 `true`。
   - 字符串（String）：仅当两个操作数具有相同的字符且顺序相同时返回 `true`。
   - 数字（Number）：如果两个操作数的值相同，则返回 `true`。`+0` 和 `-0` 被视为相同的值。如果任何一个操作数是 `NaN`，返回 `false`；所以，`NaN` 永远不等于 `NaN`。
   - 布尔值（Boolean）：仅当操作数都为 `true` 或都为 `false` 时返回 `true`。
   - 大整型（BigInt）：仅当两个操作数的值相同时返回 `true`。
   - 符号（Symbol）：仅当两个操作数引用相同的符号时返回 `true`。
2. 如果其中一个操作数为 `null` 或 `undefined`，另一个操作数也必须为 `null` 或 `undefined` 以返回 `true`。否则返回 `false`。
3. 如果其中一个操作数是对象，另一个是原始值，则[将对象转换为原始值](/zh-CN/docs/Web/JavaScript/Data_structures#原始值强制转换)。
4. 在这一步，两个操作数都被转换为原始值（字符串、数字、布尔值、符号和大整型中的一个）。剩余的转换将分情况完成。
   - 如果是相同的类型，使用步骤 1 进行比较。
   - 如果其中一个操作数是符号而另一个不是，返回 `false`。
   - 如果其中一个操作数是布尔值而另一个不是，则[将布尔值转换为数字](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)：`true` 转换为 1，`false` 转换为 0。然后再次对两个操作数进行宽松比较。
   - 数字与字符串：[将字符串转换为数字](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)。转换失败将导致 `NaN`，这将保证相等比较为 `false`。
   - 数字与大整型：按数值进行比较。如果数字的值为 ±∞ 或 `NaN`，返回 `false`。
   - 字符串与大整型：使用与 [`BigInt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) 构造函数相同的算法将字符串转换为大整型数。如果转换失败，返回 `false`。

宽松相等是*对称的*：`A == B` 对于 `A` 和 `B` 的任何值总是具有与 `B == A` 相同的语义（应用转换的顺序除外）。

该运算符与[严格相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)（`===`）运算符之间最显著的区别是，严格相等运算符不尝试类型转换。相反，严格相等运算符总是认为不同类型的操作数是不同的。严格相等运算符本质上只执行第 1 步，然后对所有其他情况返回 `false`。

上面的算法有一个“故意违反”：如果其中一个操作数是 [`document.all`](/zh-CN/docs/Web/API/Document/all)，则它被视为 `undefined`。这意味着 `document.all == null` 是 `true`，但 `document.all === undefined && document.all === null` 是 `false`。

## 示例

### 没有类型转换的比较

```js
1 == 1; // true
"hello" == "hello"; // true
```

### 有类型转换的比较

```js
"1" == 1; // true
1 == "1"; // true
0 == false; // true
0 == null; // false
0 == undefined; // false
0 == !!null; // true，看看逻辑非运算符
0 == !!undefined; // true，看看逻辑非运算符
null == undefined; // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3; // true
number1 == number2; // false
```

### 比较对象

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 == object2); // false
console.log(object1 == object1); // true
```

### 比较字符串和 String 对象

请注意，使用 `new String()` 构造的字符串是对象。如果将其中之一与字符串字面量进行比较，则该 `String` 对象将被转换为字符串字面量并对其内容进行比较。但是，如果两个操作数都是 `String` 对象，则将它们作为对象进行比较，并且必须引用相同的对象才会相等：

```js
const string1 = "hello";
const string2 = String("hello");
const string3 = new String("hello");
const string4 = new String("hello");

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true
```

### 比较日期和字符串

```js
const d = new Date("December 17, 1995 03:24:00");
const s = d.toString(); // 例如：“Sun Dec 17 1995 03:24:00 GMT+0800 (中国标准时间)”
console.log(d == s); // true
```

### 比较数组和字符串

```js
const a = [1, 2, 3];
const b = "1,2,3";
a == b; // true，`a` 转换为字符串

const c = [true, 0.5, "hey"];
const d = c.toString(); // "true,0.5,hey"
c == d; // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [不相等（`!=`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Inequality)
- [严格相等（`===`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [严格不相等（`!==`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
