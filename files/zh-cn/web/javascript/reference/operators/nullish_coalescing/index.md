---
title: 空值合并运算符（??）
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{jsSidebar("Operators")}}

**空值合并运算符**（**`??`**）是一个逻辑运算符，当左侧的操作数为 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 或者 {{jsxref("undefined")}} 时，返回其右侧操作数，否则返回左侧操作数。

{{InteractiveExample("JavaScript Demo: Expressions - Nullish coalescing operator")}}

```js interactive-example
const foo = null ?? "default string";
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0
```

## 语法

```js-nolint
leftExpr ?? rightExpr
```

## 描述

空值合并运算符可以视为[逻辑或运算符（`||`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_OR)的特例。后者在左侧操作数为*任何*{{Glossary("Falsy", "假值")}}时返回右侧操作数，而不仅仅是 `null` 或 `undefined`。换句话说，如果你使用 `||` 为另一个变量 `foo` 提供某些默认值，而你将某些假值视为可用值（例如 `''` 或 `0`），则可能会遇到意外的行为。更多示例参见[下方](#为变量赋默认值)。

空值合并运算符的[运算符优先级](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence)是第五低的，直接低于 `||` 且直接高于[条件（三元）运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_operator)。

将 `??` 直接与逻辑与（`&&`）和逻辑或（`||`）运算符组合使用是不可取的。这种情况下会抛出[语法错误](/zh-CN/docs/Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized)。

```js-nolint example-bad
null || undefined ?? "foo"; // 抛出 SyntaxError
true && undefined ?? "foo"; // 抛出 SyntaxError
```

相反，请提供括号以明确表示优先级：

```js example-good
(null || undefined) ?? "foo"; // 返回“foo”
```

## 示例

### 使用空值合并运算符

在这个例子中，我们使用空值合并运算符为常量提供默认值，保证常量不为 `null` 或者 `undefined`。

```js
const nullValue = null;
const emptyText = ""; // 假值
const someNumber = 42;

const valA = nullValue ?? "valA 的默认值";
const valB = emptyText ?? "valB 的默认值";
const valC = someNumber ?? 0;

console.log(valA); // "valA 的默认值"
console.log(valB); // ""（空字符串虽然是假值，但不是 null 或者 undefined）
console.log(valC); // 42
```

### 为变量赋默认值

以前，如果想为一个变量赋默认值，通常的做法是使用逻辑或运算符（[`||`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_OR)）：

```js
let foo;

// foo 从未被赋予任何值，因此它仍然是未定义的
let someDummyText = foo || "Hello!";
```

然而，由于 `||` 是一个布尔逻辑运算符，左侧的操作数会被强制转换成布尔值用于求值。任何*假值*（`0`、`''`、`NaN`、`false`等等）都不会被返回。如果你使用 `0`、`''` 或 `NaN` 作为有效值，就会出现不可预料的后果。

```js
const count = 0;
const text = "";

const qty = count || 42;
const message = text || "hi!";
console.log(qty); // 42，而不是 0
console.log(message); // "hi!"，而不是 ""
```

空值合并运算符可以避免这种陷阱，其只在第一个操作数为 `null` 或 `undefined` 时（而不是其他假值）返回第二个操作数：

```js
const myText = ""; // 空字符串（其也是假值）

const notFalsyText = myText || "Hello world";
console.log(notFalsyText); // Hello world

const preservingFalsy = myText ?? "Hi neighborhood";
console.log(preservingFalsy); // ''（myText 既不是 undefined 也不是 null）
```

### 短路

与 OR 和 AND 逻辑运算符相似，当左表达式不为 `null` 或 `undefined` 时，不会对右表达式进行求值。

```js
function A() {
  console.log("函数 A 被调用了");
  return undefined;
}
function B() {
  console.log("函数 B 被调用了");
  return false;
}
function C() {
  console.log("函数 C 被调用了");
  return "foo";
}

console.log(A() ?? C());
// 依次打印 "函数 A 被调用了"、"函数 C 被调用了"、"foo"
// A() 返回了 undefined，所以运算符两边的表达式都被执行了

console.log(B() ?? C());
// 依次打印 "函数 B 被调用了"、"false"
// B() 返回了 false（既不是 null 也不是 undefined）
// 所以右侧表达式没有被执行
```

### 与可选链运算符（`?.`）的关系

空值合并运算符将 `undefined` 与 `null` 视为特殊值，[可选链运算符（`?.`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)也是如此。该运算符在访问可能为 `null` 或 `undefined` 的对象属性时非常有用。将这两者结合，可以安全地访问可能为空值的对象属性，并在其为空值时提供默认值。

```js
const foo = { someFooProp: "hi" };

console.log(foo.someFooProp?.toUpperCase() ?? "not available"); // "HI"
console.log(foo.someBarProp?.toUpperCase() ?? "not available"); // "not available"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [逻辑空赋值运算符（`??=`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
- [可选链运算符（`?.`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [逻辑或运算符（`||`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [默认参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)
