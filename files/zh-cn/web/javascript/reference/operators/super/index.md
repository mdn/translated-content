---
title: super
slug: Web/JavaScript/Reference/Operators/super
---

{{jsSidebar("Operators")}}

**super** 关键字用于访问和调用一个对象的父对象上的函数。

`super.prop` 和 `super[expr]` 表达式在[类](/zh-CN/docs/Web/JavaScript/Reference/Classes)和[对象字面量](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)任何[方法定义](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions)中都是有效的。

## 语法

```plain
super([arguments]);
// 调用 父对象/父类 的构造函数

super.functionOnParent([arguments]);
// 调用 父对象/父类 上的方法
```

## 描述

在构造函数中使用时，`super` 关键字将单独出现，并且必须在使用 `this` 关键字之前使用。`super` 关键字也可以用来调用父对象上的函数。

## 示例

### 在类中使用`super`

以下代码片段来自于 [classes sample](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html)。

```js
class Polygon {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}

class Square extends Polygon {
  constructor(length) {
    this.height; // ReferenceError，super 需要先被调用！

    // 这里，它调用父类的构造函数的，
    // 作为 Polygon 的 height, width
    super(length, length);

    // 注意：在派生的类中，在你可以使用'this'之前，必须先调用 super()。
    // 忽略这，这将导致引用错误。
    this.name = 'Square';
  }
}
```

### 调用父类上的静态方法

你也可以用 super 调用父类的[静态方法](/zh-CN/docs/Web/JavaScript/Reference/Classes/static)。

```js
class Rectangle {
  static logNbSides() {
    return 'I have 4 sides';
  }
}

class Square extends Rectangle {
  static logDescription() {
    return `${super.logNbSides()} which are all equal`;
  }
}
Square.logDescription(); // 'I have 4 sides which are all equal'
```

### 删除 super 上的属性将抛出异常

你不能使用 [delete 操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)加 `super.prop` 或者 `super[expr]` 去删除父类的属性，这样做会抛出 {{jsxref("ReferenceError")}}。

```js
class Base {
  foo() {}
}
class Derived extends Base {
  delete() {
    delete super.foo; // this is bad
  }
}

new Derived().delete(); // ReferenceError: invalid delete involving 'super'.
```

### `super.prop` 不能覆写不可写属性

当使用 {{jsxref("Object.defineProperty")}} 定义一个属性为不可写时，`super` 将不能重写这个属性的值。

```js
class X {
  constructor() {
    Object.defineProperty(this, 'prop', {
      configurable: true,
      writable: false,
      value: 1
    });
  }
}

class Y extends X {
  constructor() {
    super();
  }
  foo() {
    super.prop = 2;   // Cannot overwrite the value.
  }
}

var y = new Y();
y.foo(); // TypeError: "prop" is read-only
console.log(y.prop); // 1
```

### 在对象字面量中使用 `super.prop`

`Super` 也可以在 [object initializer / literal](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer) 符号中使用。在下面的例子中，两个对象各定义了一个方法。在第二个对象中，我们使用 `super` 调用了第一个对象中的方法。当然，这需要我们先利用 {{jsxref("Object.setPrototypeOf()")}} 设置 `obj2` 的原型为 `obj1`，然后才能够使用 `super` 调用 `obj1` 上的 `method1`。

```js
var obj1 = {
  method1() {
    console.log("method 1");
  }
}

var obj2 = {
  method2() {
   super.method1();
  }
}

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // logs "method 1"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [类](/zh-CN/docs/Web/JavaScript/Reference/Classes)
