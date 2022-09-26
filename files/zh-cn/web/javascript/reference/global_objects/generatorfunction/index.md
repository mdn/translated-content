---
title: GeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
---

{{JSRef("Global_Objects", "生成器函数")}}

**`GeneratorFunction`构造器**生成新的{{jsxref("Statements/function*", "生成器函数")}} 对象。在 JavaScript 中，生成器函数实际上都是`GeneratorFunction`的实例对象。

注意，`GeneratorFunction`并不是一个全局对象。它可以通过下面的代码获取。

```js
Object.getPrototypeOf(function*(){}).constructor
```

## 语法

```plain
new GeneratorFunction ([arg1[, arg2[, ...argN]],] functionBody)
```

### 参数

- `arg1, arg2, ... argN`
  - : 函数使用的名称作为形式参数名称。每个必须是一个字符串，对应于一个有效的 JavaScript 标识符或这样的字符串的列表，用逗号分隔；如“`x`”，“`theValue`”或“`a,b`”。
- `functionBody`
  - : 一个包含多条表示 JavaScript 函数体语句的字符串。

## 描述

当创建函数时，将使用`GeneratorFunction`构造函数创建的{{jsxref("Statements/function*", "生成器函数")}}对象进行解析。这比使用{{jsxref("Statements/function*", "function* 表达式")}} 声明生成器函数效率更低，并且在代码中调用它，因为这些函数与其余的代码一起被解析。

传递给函数的所有参数按照它们被传递的顺序被视为要创建的函数中参数的标识符的名称。

> **备注：** 使用`GeneratorFunction`构造函数创建的{{jsxref("Statements/function*", "生成器函数")}}不会为其创建上下文创建闭包；它们始终在全局范围内创建。当运行它们时，它们只能访问自己的本地变量和全局变量，而不是从`GeneratorFunction`构造函数调用的范围的变量。这与使用{{jsxref("Global_Objects/eval", "eval")}}与生成函数表达式的代码不同。

将`GeneratorFunction`构造函数调用为函数（不使用`new`运算符）与将其作为构造函数调用的效果相同。

## 属性

- **`GeneratorFunction.length`**
  - : `GeneratorFunction`构造函数的 length 属性值为 1。
- {{jsxref("GeneratorFunction.prototype")}}
  - : 允许向所有生成器函数对象添加属性。

## `GeneratorFunction` 原型对象

### 属性

{{page('/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/prototype', 'Properties')}}

## `GeneratorFunction` 实例

`GeneratorFunction`实例从{{jsxref("GeneratorFunction.prototype")}}继承方法和属性。与所有构造函数一样，你可以更改构造函数的原型对象以对所有`GeneratorFunction`实例进行更改。

## 示例

### 从`GeneratorFunction`构造函数创建一个生成器函数

```js
var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
var g = new GeneratorFunction("a", "yield a * 2");
var iterator = g(10);
console.log(iterator.next().value); // 20
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Statements/function*", "function* function")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Global_Objects/Function", "Function")}}
- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope", "", 1)}}
