---
title: 逻辑与赋值（&&=）
slug: Web/JavaScript/Reference/Operators/Logical_AND_assignment
---

{{jsSidebar("Operators")}}

**逻辑与赋值**（`x &&= y`）运算仅在 `x` 为{{Glossary("truthy","真")}}值时为其赋值。

{{EmbedInteractiveExample("pages/js/expressions-logical-and-assignment.html")}}

## 语法

```js-nolint
expr1 &&= expr2
```

## 描述

逻辑与的[_短路运算_](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence#短路运算)意味着 `x &&= y` 与下式等价：

```js
x && (x = y);
```

如果左操作数不为真值，则由于[逻辑与](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_AND)运算符的短路运算，不进行赋值操作。例如，由于 `x` 为 `const`（常量），以下式子不会抛出错误：

```js
const x = 0;
x &&= 2;
```

也不会触发 setter 函数：

```js
const x = {
  get value() {
    return 0;
  },
  set value(v) {
    console.log("调用了 setter");
  },
};
x.value &&= 2;
```

实际上，如果 `x` 不为真值，则根本不会对 `y` 求值。

```js
const x = 0;
x &&= console.log("y 进行了求值");
// 什么都不会输出
```

## 示例

### 使用逻辑与赋值

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

- [逻辑与（&&）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [空值合并运算符（`??`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [按位与赋值（`&=`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
- {{Glossary("Truthy","真值")}}
- {{Glossary("Falsy","假值")}}
