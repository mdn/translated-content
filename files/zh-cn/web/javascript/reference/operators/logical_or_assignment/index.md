---
title: Logical OR assignment (||=)
slug: Web/JavaScript/Reference/Operators/Logical_OR_assignment
tags:
  - JavaScript
  - Language feature
  - Logical Operator
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Logical_OR_assignment
---
{{jsSidebar("Operators")}}

逻辑或赋值（`x ||= y`）运算仅在 `x` 为{{Glossary("falsy", "虚")}}值时赋值。

{{EmbedInteractiveExample("pages/js/expressions-logical-or-assignment.html")}}

## 语法

```js
expr1 ||= expr2
```

## 描述

### 短路运算

[逻辑或](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_OR)的运算方法如下所示：

```js
x || y;
// 当 x 为真值时，返回 x
// 当 y 为真值时，返回 y
```

逻辑或运算的短路逻辑：当且仅当第一个操作数尚未确定结果（不是真值）时，才会评估第二个操作数。

逻辑或赋值运算有短路逻辑，这意味着，它仅在左侧为虚值时执行赋值。换句话说，`x ||= y` 等同于：

```js
x || (x = y);
```

但不等同于以下总是执行赋值的语句：

```js example-bad
x = x || y;
```

请注意，这与数学逻辑和按位赋值运算不同。

## 示例

### 设定默认值

当“lyrics”元素为空时，则显示默认值：

```js
document.getElementById('lyrics').textContent ||= 'No lyrics.'
```

在这里，短路运算特别有用，因为元素不会产生不必要的更新，也不会引起诸如额外的解析、渲染、失去焦点等副作用。

注意：请注意检查 API 返回的值。如果返回的是空字符串（是{{Glossary("falsy", "虚")}}值），则必须使用 `||=`。在其他情况下（返回值是 {{jsxref("null")}} 或 {{jsxref("undefined")}}），你可以使用 `??=` 运算符。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [逻辑或（||）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [空值合并运算符（`??`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- [按位或赋值（`|=`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
