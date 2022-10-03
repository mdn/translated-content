---
title: Logical AND assignment (&&=)
slug: Web/JavaScript/Reference/Operators/Logical_AND_assignment
---

{{jsSidebar("Operators")}}

The logical AND assignment (`x &&= y`) operator only assigns if `x` is {{Glossary("truthy")}}.

{{EmbedInteractiveExample("pages/js/expressions-logical-and-assignment.html")}}

## 语法

```plain
expr1 &&= expr2
```

## 描述

### Short-circuit evaluation

The [logical AND](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_AND) operator is evaluated left to right, it is tested for possible short-circuit evaluation using the following rule:

`(some falsy expression) && expr` is short-circuit evaluated to the falsy expression;

Short circuit means that the `expr` part above is **not evaluated**, hence any side effects of doing so do not take effect (e.g., if `expr` is a function call, the calling never takes place).

Logical AND assignment short-circuits as well meaning that `x &&= y` is equivalent to:

```js
x && (x = y);
```

And not equivalent to the following which would always perform an assignment:

```js example-bad
x = x && y;
```

## 例子

### Using logical AND assignment

```js
let x = 0;
let y = 1;

x &&= 0; // 0
x &&= 1; // 0
y &&= 1; // 1
y &&= 0; // 0
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Logical AND (&&)](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [The nullish coalescing operator (`??`)](/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- [Bitwise AND assignment (`&=`)](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
- {{jsxref("Boolean")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
