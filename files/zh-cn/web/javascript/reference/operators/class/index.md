---
title: 类表达式
slug: Web/JavaScript/Reference/Operators/class
---

{{jsSidebar("Operators")}}

**类表达式**是用来定义类的一种语法。和[函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)相同的一点是，类表达式可以是命名也可以是匿名的。如果是命名类表达式，这个名字只能在类体内部才能访问到。JavaScript 的类也是基于原型继承的。

## 语法

```plain
const MyClass = class [className] [extends] {
  // class body
};
```

## 描述

类表达式的语法和[类语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/class)的语法很类似，只是在类表达式中，你可以省略掉类名，而类语句中不能。

和类声明一样，类表达式中的代码也是强制[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)的。

## 示例

### 使用类表达式

下面的代码使用类表达式语法创建了一个匿名类，然后赋值给变量 Foo。

```js
let Foo = class {
  constructor() {}
  bar() {
    return "Hello World!";
  }
};

let instance = new Foo();
instance.bar();
// "Hello World!"
```

### 命名类表达式

如果你想在类体内部也能引用这个类本身，那么你就可以使用命名类表达式，并且这个类名只能在类体内部访问。

```js
const Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
}

let bar = new Foo();

bar.whoIsThere();
// "NamedFoo"

NamedFoo.name;
// ReferenceError: NamedFoo is not defined

Foo.name;
// "NamedFoo"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [`函数表达式`](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)
- [`类语句`](/zh-CN/docs/Web/JavaScript/Reference/Statements/class)
- [类](/zh-CN/docs/Web/JavaScript/Reference/Classes)
