---
title: 逻辑与（&&）
slug: Web/JavaScript/Reference/Operators/Logical_AND
---

{{jsSidebar("Operators")}}

当且仅当所有操作数为 `true` 时，一组布尔操作数的**逻辑与**（**`&&`**，逻辑连接）运算结果为 `true`，否则为 `false`。

一般来说，当从左到右求值时，该操作符返回第一个{{Glossary("falsy","假值")}}操作数的值；如果它们都是{{Glossary("truthy","真值")}}，则返回最后一个操作数的值。

{{EmbedInteractiveExample("pages/js/expressions-logical-and.html", "shorter")}}

## 语法

```js-nolint
expr1 && expr2
```

## 描述

逻辑与（`&&`）运算符从左到右对操作数求值，遇到第一个{{Glossary("falsy","假值")}}操作数时立即返回；如果所有的操作数都是{{Glossary("truthy","真值")}}，则返回最后一个操作数的值。

能够转化为 `true` 的值叫做{{Glossary("truthy","真值")}}，能够转化为 `false` 的值叫做{{Glossary("falsy","假值")}}。

能够转化为 false 的表达式的示例如下：

- `false`；
- `null`；
- `NaN`；
- `0`；
- 空字符串（`""` 或 `''` 或 ` `` `）；
- `undefined`。

与运算符会保留所有非布尔值，并原样返回它们：

```js
result = "" && "foo"; // 结果被赋值为 ""（空字符串）
result = 2 && 0; // 结果被赋值为 0
result = "foo" && 4; // 结果被赋值为 4
```

尽管 `&&` 运算符可以与非布尔操作数一起使用，但它仍然被认为是一个布尔运算符，因为它的返回值总是可以被转换为[布尔基本类型](/zh-CN/docs/Web/JavaScript/Data_structures#boolean_类型)。要明确地将其返回值（或任何一般的表达式）转换为相应的布尔值，请使用双[`非运算符`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_NOT)或 {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}} 构造函数。

### 短路求值

逻辑与是一种短路运算符。当每个操作数被转换为布尔值时，如果发现一个转换的结果是 `false`，那么逻辑与运算符就会停止，并返回该假操作数的原始值；它**不会**对任何其余的操作数求值。

考虑如下伪代码。

```
(some falsy expression) && expr
```

`expr` 部分**永远不会被求值**，因为第一个操作数 `(some falsy expression)` 被求值为{{Glossary("falsy","假值")}}。如果 `expr` 是一个函数，它将不会被调用。查看如下示例：

```js
function A() {
  console.log("调用了 A");
  return false;
}
function B() {
  console.log("调用了 B");
  return true;
}
console.log(A() && B());
// 由于调用了 A 函数，故会输出 "called A" 到控制台，
// && 求值结果为 false（A 函数返回 false），然后输出 false 到控制台；
// 与运算符在这里短路，忽略了 B 函数
```

### 运算符优先级

与运算符的优先级高于或运算符，这意味着 `&&` 运算符在 `||` 运算符前执行（参见[运算符优先级](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence)）。

```js
true || (false && false); // true
true && (false || false); // false
2 === 3 || (4 < 0 && 1 === 1); // false
```

## 示例

### 使用与运算符

下列代码展示了 `&&`（逻辑与）运算符的用法。

```js
a1 = true && true; // t && t returns true
a2 = true && false; // t && f returns false
a3 = false && true; // f && t returns false
a4 = false && 3 === 4; // f && f returns false
a5 = "Cat" && "Dog"; // t && t returns "Dog"
a6 = false && "Cat"; // f && t returns false
a7 = "Cat" && false; // t && f returns false
a8 = "" && false; // f && f returns ""
a9 = false && ""; // f && f returns false
```

### 布尔值转化规则

#### 与运算符转化为或运算符

下述涉及到**布尔**运算符的运算：

```js-nolint
bCondition1 && bCondition2
```

总是与此表达式相同：

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### 或运算符转化为与运算符

下述涉及到**布尔**运算符的运算：

```js-nolint
bCondition1 || bCondition2
```

总是与此表达式相同：

```js-nolint
!(!bCondition1 && !bCondition2)
```

### 去除嵌套的括号

由于逻辑表达式是从左到右进行求值的，只要遵循一定的规则，总是可以从一个复杂的表达式中删除括号。

下述涉及到**布尔**运算符的复杂运算：

```js-nolint
bCondition1 || (bCondition2 && bCondition3)
```

总是与此表达式相同：

```js-nolint
bCondition1 || bCondition2 && bCondition3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Boolean")}}
- {{Glossary("Truthy","真值")}}
- {{Glossary("Falsy","假值")}}
