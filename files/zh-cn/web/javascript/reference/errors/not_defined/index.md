---
title: 'ReferenceError: "x" is not defined'
slug: Web/JavaScript/Reference/Errors/Not_defined
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

当某个地方引用了一个不存在的变量时，就会出现“_variable_ is not defined”JavaScript 异常。

## 错误信息

```plain
ReferenceError: "x" is not defined (V8-based & Firefox)
ReferenceError: Can't find variable: x (Safari)
```

## 错误类型

{{jsxref("ReferenceError")}}。

## 什么地方出错了？

在某处引用了一个不存在的变量。需要声明该变量，或确保它在当前脚本或[作用域](/zh-CN/docs/Glossary/Scope)中可用。

> [!NOTE]
> 在加载库（例如 jQuery）时，确保在访问库变量（例如“$”）之前先加载该库。将加载库的 {{HTMLElement("script")}} 元素放在使用该库的代码之前。

## 示例

### 未声明的变量

```js example-bad
foo.substring(1); // ReferenceError: foo is not defined
```

“foo”变量在任何地方都没有定义。它需要是一个字符串，以便 {{jsxref("String.prototype.substring()")}} 方法能够正常工作。

```js example-good
const foo = "bar";
foo.substring(1); // "ar"
```

### 错误的作用域

变量需要在当前执行上下文中可用。在[函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)内部定义的变量无法在函数外部访问，因为该变量只在函数的作用域内定义。

```js example-bad
function numbers() {
  const num1 = 2;
  const num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 is not defined.
```

然而，函数可以访问在其定义的作用域内定义的所有变量和函数。换句话说，定义在全局作用域中的函数可以访问在全局作用域中定义的所有变量。

```js example-good
const num1 = 2;
const num2 = 3;

function numbers() {
  return num1 + num2;
}

console.log(numbers()); // 5
```

## 参见

- [作用域](/zh-CN/docs/Glossary/Scope)
- [JavaScript 指南中的变量声明](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#声明变量)
- [JavaScript 指南中的函数作用域](/zh-CN/docs/Web/JavaScript/Guide/Functions#函数作用域)
