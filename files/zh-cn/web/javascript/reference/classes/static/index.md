---
title: static
slug: Web/JavaScript/Reference/Classes/static
l10n:
  sourceCommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{jsSidebar("Classes")}}

**`static`** 关键字定义了[静态方法或字段](/zh-CN/docs/Web/JavaScript/Reference/Classes#静态方法和字段)，或[静态初始化块](/zh-CN/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)（有关这种用法的更多信息，请参阅链接）。静态属性不能在类的实例上直接访问。相反，它们是在类本身上被访问的。

静态方法通常是实用函数，如创建或克隆对象的函数，而静态属性则适用于缓存、固定配置或其他不需要跨实例复制的数据。

> [!NOTE]
> 在类的上下文中，MDN Web 文档内容交替使用属性和[字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields)这两个术语。

{{InteractiveExample("JavaScript Demo: Classes Static", "taller")}}

```js interactive-example
class ClassWithStaticMethod {
  static staticProperty = "someValue";
  static staticMethod() {
    return "static method has been called.";
  }
  static {
    console.log("Class static initialization block called");
  }
}

console.log(ClassWithStaticMethod.staticProperty);
// Expected output: "someValue"
console.log(ClassWithStaticMethod.staticMethod());
// Expected output: "static method has been called."
```

## 语法

```js-nolint
class ClassWithStatic {
  static staticField;
  static staticFieldWithInitializer = value;
  static staticMethod() {
    // …
  }
}
```

还有一些额外的语法限制：

- 静态属性（字段或方法）的名称不能是 `prototype`。
- 类字段（静态或实例）的名称不能是 `constructor`。

## 描述

本页介绍类的公有静态属性，包括静态方法、静态访问器和静态字段。

- 关于私有静态特性，请参阅[私有属性](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_properties)。
- 关于实例特性，请参阅[方法定义](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions)、[getter](/zh-CN/docs/Web/JavaScript/Reference/Functions/get)、[setter](/zh-CN/docs/Web/JavaScript/Reference/Functions/set) 和[公有类字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields)。

公有静态特性是使用 `static` 关键字声明的。在[类求值](/zh-CN/docs/Web/JavaScript/Reference/Classes#求值顺序)时，使用 [`[[DefineOwnProperty]]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) 语义（本质上是 {{jsxref("Object.defineProperty()")}}）将它们添加到类构造函数中。类构造函数会再次访问它们。

静态方法通常是实用函数，例如创建或克隆实例的函数。当你希望一个字段在每个类中只存在一次，而不是在你创建的每个类实例中都存在时，公有静态字段就很有用。这对缓存、固定配置或其他不需要在实例间复制的数据非常有用。

静态字段名称可以[计算](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#计算属性名)。计算表达式中的 `this` 值是类定义周围的 `this`，而引用类的名称则会导致 {{jsxref("ReferenceError")}}，因为类尚未初始化。在此表达式中，{{jsxref("Operators/await", "await")}} 和 {{jsxref("Operators/yield", "yield")}} 按预期工作。

静态字段可以有初始化器。没有初始化器的静态字段将被初始化为 `undefined`。公有静态字段不会在子类中重新初始化，但可以通过原型链访问。

```js
class ClassWithStaticField {
  static staticField;
  static staticFieldWithInitializer = "静态字段";
}

class SubclassWithStaticField extends ClassWithStaticField {
  static subStaticField = "子类的字段";
}

console.log(Object.hasOwn(ClassWithStaticField, "staticField")); // true
console.log(ClassWithStaticField.staticField); // undefined
console.log(ClassWithStaticField.staticFieldWithInitializer); // "静态字段"
console.log(SubclassWithStaticField.staticFieldWithInitializer); // "静态字段"
console.log(SubclassWithStaticField.subStaticField); // "子类的字段"
```

在字段初始化器中，[`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 指向当前类（也可通过其名称访问），[`super`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super) 指向基类构造函数。

```js
class ClassWithStaticField {
  static baseStaticField = "基类静态字段";
  static anotherBaseStaticField = this.baseStaticField;

  static baseStaticMethod() {
    return "基类静态方法输出";
  }
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = super.baseStaticMethod();
}

console.log(ClassWithStaticField.anotherBaseStaticField); // "基类静态字段"
console.log(SubClassWithStaticField.subStaticField); // "基类静态方法输出"
```

表达式是同步求值的。不能在初始化表达式中使用 {{jsxref("Operators/await", "await")}} 或 {{jsxref("Operators/yield", "yield")}}。（将初始化表达式视为隐式封装在函数中。）

静态字段初始化器和[静态初始化块](/zh-CN/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)是逐个求值的。字段初始化器可以引用其上的字段值，但不能引用其下的字段值。所有静态方法都会事先添加并可被访问，但如果它们引用的字段在被初始化的字段的下方，则调用它们时可能会出现与预期不符的情况。

> [!NOTE]
> 对于[私有静态字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_properties)而言，这一点更为重要，因为访问未初始化的私有字段会抛出 {{jsxref("TypeError")}}，即使该私有字段已在下面声明。（如果未声明私有字段，则会提前抛出 {{jsxref("SyntaxError")}}。）

## 示例

### 在类中使用静态成员

下面的例子说明了这几点：

1. 静态方法如何在类上实现。
2. 具有静态成员的类，可以被子类化。
3. 什么情况下静态方法可以调用，什么情况下不能调用。

```js
class Triple {
  static customName = "三倍器";
  static description = "我可以让你提供的任何数变为它的三倍";
  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static longDescription;
  static description = "我可以让你提供的任何数变为其三倍的平方";
  static calculate(n) {
    return super.calculate(n) * super.calculate(n);
  }
}

console.log(Triple.description); // '我可以让你提供的任何数变为它的三倍'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18

let tp = new Triple();

console.log(SquaredTriple.tripple(3)); // 81（不会受父类实例化的影响）
console.log(SquaredTriple.description); // '我可以让你提供的任何数变为其三倍的平方'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); // '三倍器'

// 抛出错误，因为 calculate() 是静态成员，而不是实例成员。
console.log(tp.calculate()); // 'tp.calculate 不是一个函数'
```

### 从另一个静态方法调用静态成员

为了在同一类的另一个静态方法中调用静态方法或属性，可以使用 [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 关键字。

```js
class StaticMethodCall {
  static staticProperty = "静态属性";
  static staticMethod() {
    return `静态方法和${this.staticProperty}被调用`;
  }
  static anotherStaticMethod() {
    return `从另外一个静态方法而来的${this.staticMethod()}`;
  }
}
StaticMethodCall.staticMethod();
// '静态方法和静态属性被调用'

StaticMethodCall.anotherStaticMethod();
// '从另外一个静态方法而来的静态方法和静态属性被调用'
```

### 从类的构造函数和其他方法中调用静态成员

静态成员不能使用 {{jsxref("Operators/this", "this")}} 关键字从非静态方法直接访问静态成员。你需要使用类名来调用 `classname.static_method_name()` 或 `CLASSNAME.STATIC_PROPERTY_NAME`，或将 `this.constructor.STATIC_Method_NAME()` 或 `this.constructor.STATIC_PROPERTY_NAME` 来作为 `constructor` 的属性调用。

```js
class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticProperty); // '静态属性'
    console.log(this.constructor.staticProperty); // '静态属性'
    console.log(StaticMethodCall.staticMethod()); // '静态方法已调用'
    console.log(this.constructor.staticMethod()); // '静态方法已调用'
  }

  static staticProperty = "静态属性";
  static staticMethod() {
    return "静态方法已调用";
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用类](/zh-CN/docs/Web/JavaScript/Guide/Using_classes)指南
- [类](/zh-CN/docs/Web/JavaScript/Reference/Classes)
- [静态初始化块](/zh-CN/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
- {{jsxref("Statements/class", "class")}}
