---
title: 类表达式
slug: Web/JavaScript/Reference/Operators/class
---

{{jsSidebar("Operators")}}

**`class`** 关键字可用于在表达式中定义类。类似于[函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)，类表达式可以是命名的，也可以是匿名的。如果命名，则类的名称只能在类体内部才能访问到。

{{EmbedInteractiveExample("pages/js/expressions-classexpression.html")}}

## 语法

```js-nolint
const MyClass = class [className] [extends otherClassName] {
  // class body
}
```

## 描述

类表达式的语法类似于{{jsxref("Statements/class", "类声明", "", 1)}}。与 `class` 声明一样，`class` 表达式的主体在{{jsxref("Strict_mode", "严格模式", "", 1)}}下执行。

类表达式和{{jsxref("Statements/class", "类声明", "", 1)}}之间存在一些差异，但是：

- 类表达式可以省略类名（“绑定标识符”），这在{{jsxref("Statements/class", "类声明", "", 1)}}中是不可能的。
- 类表达式允许你重新定义（重新声明）类**而不会抛出** {{jsxref("Global_Objects/SyntaxError", "SyntaxError")}}。{{jsxref("Statements/class", "类声明", "", 1)}}不是这种情况。

`constructor` 方法是可选的。使用类表达式生成的类将始终响应 {{jsxref("Operators/typeof", "typeof")}} 值为 `"function"`。

```js
"use strict";
let Foo = class {}; // constructor property is optional
Foo = class {}; // Re-declaration is allowed

typeof Foo; // returns "function"
typeof class {}; // returns "function"

Foo instanceof Object; // true
Foo instanceof Function; // true
class Foo {} // Throws SyntaxError (class declarations do not allow re-declaration)
```

## 示例

### 一个简单的类表达式

这只是一个简单的匿名类表达式，你可以使用变量 `Foo` 来引用它。

```js
const Foo = class {
  constructor() {}
  bar() {
    return "Hello World!";
  }
};

const instance = new Foo();
instance.bar(); // "Hello World!"
Foo.name; // "Foo"
```

### 命名类表达式

如果你想在类体内引用当前类，你可以创建一个*命名类表达式*。该名称仅在类表达式本身的范围内可见。

```js
const Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
};
const bar = new Foo();
bar.whoIsThere(); // "NamedFoo"
NamedFoo.name; // ReferenceError: NamedFoo is not defined
Foo.name; // "NamedFoo"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Operators/function", "函数表达式", "", 1)}}
- {{jsxref("Statements/class", "类声明", "", 1)}}
- {{jsxref("Classes", "类", "", 1)}}
