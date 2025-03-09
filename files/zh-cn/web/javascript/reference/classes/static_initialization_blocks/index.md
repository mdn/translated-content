---
title: 静态初始化块
slug: Web/JavaScript/Reference/Classes/Static_initialization_blocks
l10n:
  sourceCommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{jsSidebar("Classes")}}

**静态初始化块**是在 {{jsxref("Statements/class", "class")}} 中声明的。它包含在类初始化过程中要求值的语句。与 {{jsxref("Classes/static", "static")}} 属性相比，它允许更灵活的初始化逻辑，例如使用 `try...catch` 或用单个值设置多个字段。初始化是在当前类声明的上下文中进行的，并可访问私有状态，这允许类与在同一作用域中声明的其他类或函数共享其私有属性信息（类似于 C++ 中的“友元”类）。

{{InteractiveExample("JavaScript Demo: Class Static Initialization Blocks")}}

```js interactive-example
class ClassWithStaticInitializationBlock {
  static staticProperty1 = "Property 1";
  static staticProperty2;
  static {
    this.staticProperty2 = "Property 2";
  }
}

console.log(ClassWithStaticInitializationBlock.staticProperty1);
// Expected output: "Property 1"
console.log(ClassWithStaticInitializationBlock.staticProperty2);
// Expected output: "Property 2"
```

## 语法

```js-nolint
class ClassWithSIB {
  static {
    // …
  }
}
```

## 描述

如果没有静态初始化块，可以通过在类声明后调用静态方法来实现复杂的静态初始化：

```js
class MyClass {
  static init() {
    // 这里允许访问私有静态字段
  }
}

MyClass.init();
```

不过，这种方法会向类的用户暴露一个实现细节（`init()` 方法）。另一方面，在类外声明的任何初始化逻辑都无法访问私有静态字段。静态初始化块允许在类中声明任意初始化逻辑，并在类求值的过程中执行。

{{jsxref("Statements/class", "类", "", 1)}}主体中可以包含任意数量的 `static {}` 初始化块。这些静态初始化块与任何交错的静态字段初始器一起，按照声明的顺序进行[求值](/zh-CN/docs/Web/JavaScript/Reference/Classes#求值顺序)。先进行父类的静态初始化，然后才是子类的静态初始化。

静态代码块内声明的变量的作用域是该代码块的本地。这包括 `var`、`function`、`const` 和 `let` 声明。代码块中的 `var` 声明不会被提升。

```js
var y = "外部的 y";

class A {
  static field = "内部的 y";
  static {
    var y = this.field;
  }
}

// 代码块中的 `var` 声明不会被提升
console.log(y); // '外部的 y'
```

静态代码块中的 `this` 是指类的构造函数对象。`super.property` 可用于访问父类的静态属性。但请注意，在类的静态初始化块中调用 {{jsxref("Operators/super", "super()")}} 或使用 {{jsxref("Functions/arguments", "arguments")}} 对象都会造成语法错误。

这些语句是同步执行的。在这些代码块中不能使用 {{jsxref("Operators/await", "await")}} 或 {{jsxref("Operators/yield", "yield")}}。（将初始化语句视为隐式封装在函数中。）

静态代码块的作用域嵌套在类主体的词法作用域*内*，并且可以访问类内声明的[私有名称](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_properties)，而不会导致语法错误。

[静态字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/static)初始化器和静态初始化块是逐个求值的。初始化块可以引用其上方的字段值，但不能引用其下方的字段值。所有静态方法都会事先添加并可以访问，但如果这些方法引用的字段位于当前块的下方，则调用这些方法时可能会出现与预期不符的情况。

> **备忘：** 对于[私有静态字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_properties)而言，这一点更为重要，因为访问未初始化的私有字段会抛出 {{jsxref("TypeError")}}，即使该私有字段已在下面声明。（如果未声明私有字段，则会提前抛出{{jsxref("SyntaxError")}}。）

静态初始化块可能没有装饰器（类本身可能有）。

## 示例

### 多个代码块

下面的代码演示了一个带有静态初始化块和交错的静态字段初始化器的类。输出结果显示，块和字段是按执行顺序进行求值的。

```js
class MyClass {
  static field1 = console.log("静态字段 1");
  static {
    console.log("静态块 1");
  }
  static field2 = console.log("静态字段 2");
  static {
    console.log("静态块 2");
  }
}
// '静态字段 1'
// '静态块 1'
// '静态字段 2'
// '静态块 2'
```

请注意，父类的任何静态初始化都是先进行的，然后才是子类的初始化。

### 使用 this 和 super

静态代码块中的 `this` 是指类的构造函数对象。这段代码展示了如何访问公有静态字段。

```js
class A {
  static field = "静态字段";
  static {
    console.log(this.field);
  }
}
// '静态字段'
```

[`super.property`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super) 语法可在 `static` 代码块中使用，以引用父类的静态属性。

```js
class A {
  static field = "静态字段";
}

class B extends A {
  static {
    console.log(super.field);
  }
}
// '静态字段'
```

### 访问私有属性

下面的示例展示了如何从类之外的对象访问类的私有实例字段（示例来自 [v8.dev 博客](https://v8.dev/features/class-static-initializer-blocks#access-to-private-fields)）：

```js
let getDPrivateField;

class D {
  #privateField;
  constructor(v) {
    this.#privateField = v;
  }
  static {
    getDPrivateField = (d) => d.#privateField;
  }
}

console.log(getDPrivateField(new D("私有"))); // '私有'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用类](/zh-CN/docs/Web/JavaScript/Guide/Using_classes)指南
- [类](/zh-CN/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Classes/static", "static")}}
- {{jsxref("Statements/class", "class")}}
- v8.dev 上的[类的静态初始块](https://v8.dev/features/class-static-initializer-blocks)（2021）
- [ES2022 特性：类的静态初始块](https://2ality.com/2021/09/class-static-block.html) 来自 Axel Rauschmayer 博士（2021）
