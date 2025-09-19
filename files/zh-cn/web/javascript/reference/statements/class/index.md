---
title: class
slug: Web/JavaScript/Reference/Statements/class
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

**`class`** 声明创建一个{{Glossary("binding", "绑定")}}到给定名称的新[类](/zh-CN/docs/Web/JavaScript/Reference/Classes)。

你也可以使用 [`class` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/class)来定义类。

{{InteractiveExample("JavaScript Demo: Statement - Class")}}

```js interactive-example
class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}

console.log(new Polygon(4, 3).area);
// Expected output: 12
```

## 语法

```js-nolint
class name {
  // 类体
}
class name extends otherName {
  // 类体
}
```

## 描述

类声明的类体在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下执行。`class` 声明与 {{jsxref("Statements/let", "let")}} 非常相似：

- `class` 声明的作用域既可以是块级作用域，也可以是函数作用域。
- `class` 声明只能在其声明位置之后才能访问（参见[暂时性死区](/zh-CN/docs/Web/JavaScript/Reference/Statements/let#暂时性死区)）。因此 `class` 声明通常被认为是不可[变量提升](/zh-CN/docs/Glossary/Hoisting)的（与[函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)不同）。
- `class` 声明在脚本顶层声明时不会在 {{jsxref("globalThis")}} 上创建属性（与[函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)不同）。
- 在同一作用域内，`class` 声明不能被任何其他声明[重复声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/let#重复声明)。

在类体外部，`class` 声明可以像 `let` 一样被重新赋值，但你应该避免这样做。在类体内部，类的绑定是常量，就像 `const` 一样。

```js
class Foo {
  static {
    Foo = 1; // TypeError: Assignment to constant variable.
  }
}

class Foo2 {
  bar = (Foo2 = 1); // TypeError: Assignment to constant variable.
}

class Foo3 {}
Foo3 = 1;
console.log(Foo3); // 1
```

## 示例

### 一个简单的类声明

在以下示例中，我们首先定义了一个名为 `Rectangle` 的类，然后扩展它来创建一个名为 `FilledRectangle` 的类。

请注意，`super()` 只能在 `constructor` 中使用，并且*必须*在使用 `this` 关键字*之前*调用。

```js
class Rectangle {
  constructor(height, width) {
    this.name = "矩形";
    this.height = height;
    this.width = width;
  }
}

class FilledRectangle extends Rectangle {
  constructor(height, width, color) {
    super(height, width);
    this.name = "填充矩形";
    this.color = color;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)
- [`class` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/class)
- [类](/zh-CN/docs/Web/JavaScript/Reference/Classes)
