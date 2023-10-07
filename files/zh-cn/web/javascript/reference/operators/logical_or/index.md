---
title: 逻辑或（||）
slug: Web/JavaScript/Reference/Operators/Logical_OR
---

{{jsSidebar("Operators")}}

对于一组操作数的**逻辑或**（`||`，逻辑析取）运算符，当且仅当其一个或多个操作数为真，其运算结果为真。它通常与布尔（逻辑）值一起使用。当它是布尔值时，返回一个布尔值。然而，`||` 运算符实际上是返回一个指定的操作数的值，所以如果这个运算符被用于非布尔值，它将返回一个非布尔值。

{{EmbedInteractiveExample("pages/js/expressions-logical-or.html", "shorter")}}

## 语法

```js-nolint
expr1 || expr2
```

## 描述

如果 `expr1` 能转化为 `true`，返回 `expr1`；否则返回 `expr2`。

能够转化为 `true` 的值叫做{{Glossary("truthy","真值")}}，能够转化为 `false` 的值叫做{{Glossary("falsy","假值")}}。

能够转化为 false 的表达式的示例如下：

- `null`；
- `NaN`；
- `0`；
- 空字符串（`""` 或 `''` 或 ` `` `）；
- `undefined`。

尽管 `||` 运算符可以与非布尔操作数一起使用，但它仍然被认为是一个布尔运算符，因为它的返回值总是可以被转换为[布尔基本类型](/zh-CN/docs/Web/JavaScript/Data_structures#boolean_类型)。要明确地将其返回值（或任何一般的表达式）转换为相应的布尔值，请使用双{{JSxRef("Operators/Logical_NOT", "非运算符", "", 1)}}或 {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}} 构造函数。

### 短路求值

逻辑或从左到右进行求值，它使用如下规则进行“短路”测试：

`(some truthy expression) || expr` 被短路评估为真值。

短路意味着上面的 `expr` 部分**不被求值**，因此不会发生任何副作用（例如，如果 `expr` 是一个函数调用，调用就不会发生）。这是因为在对第一个操作数进行评估后，操作数的值已经确定。参见下述示例：

```js
function A() {
  console.log("调用了 A");
  return false;
}
function B() {
  console.log("调用了 B");
  return true;
}

console.log(B() || A());
// 由于调用了 B 函数，故会输出 "called B" 到控制台，
// 然后输出 true（运算符的运算结果）
```

### 运算符优先级

以下表达式看起来等价，但实际上不是，因为 `&&` 运算符比 `||` 运算符先执行（参见[运算符优先级](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence)）。

```js-nolint
true || false && false; // 返回 true，因为 && 先执行
(true || false) && false; // 返回 false，因为分组运算符优先级更高
```

## 示例

### 使用或运算符

下列代码展示了 `||`（逻辑或）运算符的用法。

```js
true || true; // t || t returns true
false || true; // f || t returns true
true || false; // t || f returns true
false || 3 === 4; // f || f returns false
"Cat" || "Dog"; // t || t returns "Cat"
false || "Cat"; // f || t returns "Cat"
"Cat" || false; // t || f returns "Cat"
"" || false; // f || f returns false
false || ""; // f || f returns ""
false || varObject; // f || object returns varObject
```

> **备注：** 如果你使用这个操作符为某些变量提供默认值，要注意任何*假*值都不会被使用。如果你只需要过滤掉 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 或 {{jsxref("undefined")}}，可以考虑使用[空值合并运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)。

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
bCondition1 && (bCondition2 || bCondition3)
```

总是与此表达式相同：

```js-nolint
!(!bCondition1 || !bCondition2 && !bCondition3)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [空值合并运算符（`??`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- {{jsxref("Boolean")}}
- {{Glossary("Truthy","真值")}}
- {{Glossary("Falsy","假值")}}
