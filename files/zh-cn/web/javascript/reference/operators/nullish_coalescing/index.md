---
title: 空值合并运算符（??）
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing
---

{{JSSidebar("Operators")}}

**空值合并运算符**（**`??`**）是一个逻辑运算符，当左侧的操作数为 {{jsxref("null")}} 或者 {{jsxref("undefined")}} 时，返回其右侧操作数，否则返回左侧操作数。

与[逻辑或运算符（`||`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_OR)不同，逻辑或运算符会在左侧操作数为{{Glossary("Falsy", "假值")}}时返回右侧操作数。也就是说，如果使用 `||` 来为某些变量设置默认值，可能会遇到意料之外的行为。比如为假值（例如，`''` 或 `0`）时。见下面的例子。

{{EmbedInteractiveExample("pages/js/expressions-nullishcoalescingoperator.html")}}

## 语法

```js-nolint
leftExpr ?? rightExpr
```

## 示例

### 使用空值合并运算符

在这个例子中，我们使用空值合并运算符为常量提供默认值，保证常量不为 `null` 或者 `undefined`。

```js
const nullValue = null;
const emptyText = ""; // 空字符串，是一个假值，Boolean("") === false
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

//  foo is never assigned any value so it is still undefined
let someDummyText = foo || "Hello!";
```

然而，由于 `||` 是一个布尔逻辑运算符，左侧的操作数会被强制转换成布尔值用于求值。任何假值（`0`， `''`， `NaN`， `null`， `undefined`）都不会被返回。这导致如果你使用`0`，`''`或`NaN`作为有效值，就会出现不可预料的后果。

```js
let count = 0;
let text = "";

let qty = count || 42;
let message = text || "hi!";
console.log(qty); // 42，而不是 0
console.log(message); // "hi!"，而不是 ""
```

空值合并运算符可以避免这种陷阱，其只在第一个操作数为`null` 或 `undefined` 时（而不是其他假值）返回第二个操作数：

```js
let myText = ""; // An empty string (which is also a falsy value)

let notFalsyText = myText || "Hello world";
console.log(notFalsyText); // Hello world

let preservingFalsy = myText ?? "Hi neighborhood";
console.log(preservingFalsy); // '' (as myText is neither undefined nor null)
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

### 不能与 AND 或 OR 运算符共用

将 `??` 直接与 AND（`&&`）和 OR（`||`）运算符组合使用是不可取的。（译者注：应当是因为空值合并运算符和其他逻辑运算符之间的运算优先级/运算顺序是未定义的）这种情况下会抛出 [`SyntaxError`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) 。

```js example-bad
null || undefined ?? "foo"; // 抛出 SyntaxError
true || undefined ?? "foo"; // 抛出 SyntaxError
```

但是，如果使用括号来显式表明运算优先级，是没有问题的：

```js example-good
(null || undefined) ?? "foo"; // 返回 "foo"
```

### 与可选链式运算符（`?.`）的关系

空值合并运算符针对 `undefined` 与 `null` 这两个值，[可选链式运算符（`?.`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining) 也是如此。在这访问属性可能为 `undefined` 与 `null` 的对象时，可选链式运算符非常有用。

```js
let foo = { someFooProp: "hi" };

console.log(foo.someFooProp?.toUpperCase()); // "HI"
console.log(foo.someBarProp?.toUpperCase()); // undefined
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [逻辑空赋值运算符（`??=`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment)
- [可选链运算符（`?.`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [逻辑或运算符（`||`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [函数中的默认参数值](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)
