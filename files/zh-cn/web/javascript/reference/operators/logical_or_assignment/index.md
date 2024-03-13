---
title: 逻辑或赋值（||=）
slug: Web/JavaScript/Reference/Operators/Logical_OR_assignment
---

{{jsSidebar("Operators")}}

逻辑或赋值（`x ||= y`）运算仅在 `x` 为{{Glossary("falsy", "假")}}值时为其赋值。

{{EmbedInteractiveExample("pages/js/expressions-logical-or-assignment.html")}}

## 语法

```js-nolint
expr1 ||= expr2
```

## 描述

逻辑或的[_短路运算_](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence#短路运算)意味着 `x ||= y` 与下式等价：

```js
x || (x = y);
```

如果左操作数不为假值，则由于[逻辑或](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_OR)运算符的短路运算，不进行赋值操作。例如，由于 `x` 为 `const`（常量），以下式子不会抛出错误：

```js
const x = 1;
x ||= 2;
```

也不会触发 setter 函数：

```js
const x = {
  get value() {
    return 1;
  },
  set value(v) {
    console.log("调用了 setter");
  },
};

x.value ||= 2;
```

实际上，如果 `x` 为真值，则根本不会对 `y` 求值。

```js
const x = 1;
x ||= console.log("y 进行了求值");
// 什么都不会输出
```

## 示例

### 设定默认内容

当“lyrics”元素为空时，则显示默认值：

```js
document.getElementById("lyrics").textContent ||= "没有歌词。";
```

在这里，短路运算特别有用，因为元素不会产生不必要的更新，也不会引起诸如额外的解析、渲染、失去焦点等副作用。

注意：请注意检查 API 返回的值。如果返回的是空字符串（是{{Glossary("falsy", "假")}}值），则必须使用 `||=`，以显示“没有歌词。”而不是空内容。然而，如果接口返回 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 或 {{jsxref("undefined")}}，则应该使用 [`??=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)（空值合并赋值）运算符代替空白内容。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [逻辑或（||）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [空值合并运算符（`??`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [按位或赋值（`|=`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
- {{Glossary("Truthy","真值")}}
- {{Glossary("Falsy","假值")}}
