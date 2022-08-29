---
title: 基本类型
slug: Glossary/Primitive
---
**基本类型**（基本数值、基本数据类型）是一种既非{{Glossary("object", "对象")}}也无{{glossary("method","方法")}}的数据。在 {{Glossary("JavaScript")}} 中，共有 7 种基本类型：{{Glossary("string")}}，{{Glossary("number")}}，{{Glossary("bigint")}}，{{Glossary("boolean")}}，{{Glossary("null")}}，{{Glossary("undefined")}}，{{Glossary("symbol")}} ({{Glossary("ECMAScript")}} 2016 新增)。

多数情况下，基本类型直接代表了最底层的语言实现。

所有基本类型的值都是**不可改变**的。但需要注意的是，基本类型本身和一个赋值为基本类型的变量的区别。变量会被赋予一个新值，而原值不能像数组、对象以及函数那样被改变。

## 示例 1

这个示例会帮助你了解基本类型**不可改变**的事实。

### JavaScript

```js
// 使用字符串方法不会改变一个字符串
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz

// 使用数组方法可以改变一个数组
var foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]

// 赋值行为可以给基本类型一个新值，而不是改变它
bar = bar.toUpperCase();       // BAZ
```

基本类型值可以被替换，但不能被改变。

## 示例 2

下面的示例将让你体会到 JavaScript 是如何处理基本类型的。

### JavaScript

```js
// 基本类型
let foo = 5;

// 定义一个貌似可以改变基本类型值的函数
function addTwo(num) {
    num += 2;
}
// 和前面的函数一样
function addTwo_v2(foo) {
    foo += 2;
}

// 调用第一个函数，并传入基本类型值作为参数
addTwo(foo);
// Getting the current Primitive value
console.log(foo);   // 5

// 尝试调用第二个函数...
addTwo_v2(foo);
console.log(foo);   // 5
```

你是否认为会得到`7`，而不是`5`？如果是，请看看代码是如何运行的：

- `addTwo`和`addTwo_v2`函数调用时，JavaScript 会检查标识符`foo`的值，从而准确无误的找到第一行实例化变量的声明语句。
- 找到以后，JavaScript 将其作为参数传递给函数的形参。
- 在执行函数体内语句之前，**JavaScript 会将传递进来的参数（基本类型的值）复制一份**，创建一个本地副本。这个副本只存在于该函数的作用域中，我们能够通过指定在函数中的标识符访问到它（`addTwo`中的`num`，`addTwo_v2`中的`foo`）。
- 接下来，函数体中的语句开始执行：

  - 第一个函数中，创建了本地`num`参数，`num`的值加 2，但这个值并不是原来的`foo`的值。
  - 第二个函数中，创建了本地参数`foo`，并将它的值加 2，这个值不是外部 foo 的值。在这种情况下，外部的`foo`变量不能以**任何**方式被访问到。这是因为 JavaScript 的词法作用域（lexical scoping）所导致的变量覆盖，本地的变量`foo`覆盖了外部的变量`foo`。欲知详情，请参阅[闭包](/zh-CN/docs/Web/JavaScript/Closures)。

- 综上所述，函数中的任何操作都**不会**影响到最初的`foo`，我们操作的只不过是它的**副本**。

这就是为什么说所有基本类型的值都是无法改变的。

## JavaScript 中的基本类型包装对象

除了 `null` 和 `undefined`之外，所有基本类型都有其对应的包装对象：

- {{jsxref("String")}} 为字符串基本类型。
- {{jsxref("Number")}} 为数值基本类型。
- {{jsxref("BigInt")}} 为大整数基本类型。
- {{jsxref("Boolean")}} 为布尔基本类型。
- {{jsxref("Symbol")}} 为字面量基本类型。

这个包裹对象的[`valueOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)方法返回基本类型值。

## 了解更多

### 基本知识

- [JavaScript 数据类型和数据结构](/zh-CN/docs/Web/JavaScript/Data_structures)
- 维基百科上的[基本类型](https://zh.wikipedia.org/wiki/Primitive_data_type)

1. [术语表](/zh-CN/docs/Glossary)

    1. {{Glossary("JavaScript")}}
    2. {{Glossary("string")}}
    3. {{Glossary("number")}}
    4. {{Glossary("bigint")}}
    5. {{Glossary("boolean")}}
    6. {{Glossary("null")}}
    7. {{Glossary("undefined")}}
    8. {{Glossary("symbol")}}

2. [JavaScript 数据类型和数据结构](/zh-CN/docs/Web/JavaScript/Data_structures)
