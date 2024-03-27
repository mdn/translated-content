---
title: class
slug: Web/JavaScript/Reference/Statements/class
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar("Statements")}}

**`class`** 声明将新的 [类](/zh-CN/docs/Web/JavaScript/Reference/Classes){{Glossary("binding", "绑定")}} 到指定的名称。

你也可以使用[`class` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/class)来定义类。

{{EmbedInteractiveExample("pages/js/statement-class.html")}}

## 语法

```js-nolint
class name {
  // 主体类
}
class name extends otherName {
  // 主体类
}
```

## 描述

类声明的类主体在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下执行。`class` 声明与 {{jsxref("Statements/let", "let")}} 声明非常相似：

- `class` 声明的范围不仅限于函数，还包括代码块。
- `class` 声明只能在其声明位置之后才能访问（参考[暂时性死区](/zh-CN/docs/Web/JavaScript/Reference/Statements/let#暂时性死区)）。因此 `class` 声明通常被认为是不可[变量提升](/zh-CN/docs/Glossary/Hoisting)的（与[函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)不同）。
- `class` 声明在脚本顶层声明时不会在 {{jsxref("globalThis")}} 上创建属性，（与[函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)不同）。
- `class` 在相同作用域内，任何其他声明都不能[重复声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/let#重复声明)。

在主体类外部，`class` 声明可以像 `let` 一样重新赋值，但你应该避免这样做。在主体类内部，绑定像 `const` 一样是常量。

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
