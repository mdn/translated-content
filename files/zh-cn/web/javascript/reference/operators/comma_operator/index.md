---
title: 逗号操作符
slug: Web/JavaScript/Reference/Operators/Comma_Operator
---

{{jsSidebar("Operators")}}

**逗号操作符** 对它的每个操作数求值（从左到右），并返回最后一个操作数的值。

{{EmbedInteractiveExample("pages/js/expressions-commaoperators.html")}}

## 语法

```plain
expr1, expr2, expr3...
```

## 参数

- `expr1`, `expr2, expr3...`
  - : 任一表达式。

## 描述

当你想要在期望一个表达式的位置包含多个表达式时，可以使用逗号操作符。这个操作符最常用的一种情况是：`for` 循环中提供多个参数。

## 示例

假设 `a` 是一个二维数组，每一维度包含 10 个元素，则下面的代码使用逗号操作符一次递增/递减两个变量。需要注意的是，`var` 语句中的逗号**_不是_**逗号操作符，因为它不是存在于一个表达式中。尽管从实际效果来看，那个逗号同逗号运算符的表现很相似。但确切地说，它是 `var` 语句中的一个特殊符号，用于把多个变量声明结合成一个。下面的代码打印一个二维数组中斜线方向的元素：

```js
for (var i = 0, j = 9; i <= 9; i++, j--)
  document.writeln("a[" + i + "][" + j + "] = " + a[i][j]);
```

### 处理后返回

另一个使用逗号操作符的例子是在返回值前处理一些操作。如同下面的代码，只有最后一个表达式被返回，其他的都只是被求值。

```plain
function myFunc () {
  var x = 0;

  return (x += 1, x); // the same of return ++x;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [for loop](/zh-CN/docs/Web/JavaScript/Reference/Statements/for)
