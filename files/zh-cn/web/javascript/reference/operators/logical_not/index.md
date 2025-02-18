---
title: 逻辑非（!）
slug: Web/JavaScript/Reference/Operators/Logical_NOT
---

{{jsSidebar("Operators")}}

**逻辑非**（`!`，逻辑连接取反）运算符将真值或假值转换为对应的相反值，经常用于布尔（逻辑）值。当与非布尔值使用时，如果其操作数可以转化为 `true`，则返回 `false`，否则返回 `true`。

{{InteractiveExample("JavaScript Demo: Expressions - Logical NOT", "shorter")}}

```js interactive-example
const a = 3;
const b = -2;

console.log(!(a > 0 || b > 0));
// Expected output: false
```

## 语法

```js-nolint
!expr
```

## 描述

如果其操作数可以转化为 `true`，则返回 `false`，否则返回 `true`。

能够转化为 `true` 的值叫做{{Glossary("truthy","真值")}}，能够转化为 `false` 的值叫做{{Glossary("falsy","假值")}}。

能够转化为 false 的表达式的示例如下：

- `null`；
- `NaN`；
- `0`；
- 空字符串（`""` 或 `''` 或 ` `` `）；
- `undefined`。

尽管 `!` 运算符可以与非布尔操作数一起使用，但它仍然被认为是一个布尔运算符，因为它的返回值总是可以被转换为[布尔基本类型](/zh-CN/docs/Web/JavaScript/Data_structures#boolean_类型)。要明确地将其返回值（或任何一般的表达式）转换为相应的布尔值，请使用双非运算符（`!!`）或 {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}} 构造函数。

## 示例

### 使用非运算符

下列代码展示了 `!`（逻辑非）运算符的用法。

```js
!true; // !t returns false
!false; // !f returns true
!""; // !f returns true
!"Cat"; // !t returns false
```

### 双非运算符（`!!`）

可以使用几个非运算符串联起来，明确地强制将任何值转换为相应的[布尔基本类型](/zh-CN/docs/Web/JavaScript/Data_structures#boolean_类型)。这种转换是基于值的“真实性”或“虚假性”（详见{{Glossary("truthy","真值")}}和{{Glossary("falsy","假值")}}）。

也可以使用 {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}} 函数完成转换。

```js
!!true; // !!truthy returns true
!!{}; // !!truthy returns true: any object is truthy...
!!new Boolean(false); // ...even Boolean objects with a false .valueOf()!
!!false; // !!falsy returns false
!!""; // !!falsy returns false
!!Boolean(false); // !!falsy returns false
```

### 非运算符转换

下述涉及到**布尔值**的运算：

```js-nolint
!!bCondition
```

总是与此表达式相同：

```js-nolint
bCondition
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Boolean")}}
- {{Glossary("Truthy","真值")}}
- {{Glossary("Falsy","假值")}}
