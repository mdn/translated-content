---
title: super
slug: Web/JavaScript/Reference/Operators/super
---

{{jsSidebar("Operators")}}

**super** 关键字用于访问对象字面量或类的原型（[[Prototype]]）上的属性，或调用父类的构造函数。

`super.prop` 和 `super[expr]` 表达式在[类](/zh-CN/docs/Web/JavaScript/Reference/Classes)和[对象字面量](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)任何[方法定义](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions)中都是有效的。`super(...args)` 表达式在类的构造函数中有效。

## 语法

```js-nolint
super([arguments]) // 调用父类的构造函数
super.propertyOnParent
super[expression]
```

## 描述

`super` 关键字有两种使用方式：作为“函数调用”（`super(...args)`），或作为“属性查询”（`super.prop` 和 `super[expr]`）。

> **备注：** `super` 是一个关键字，并且有一些特殊的语法结构。`super` 不是一个指向原型对象的变量。试图读取 `super` 本身会导致 {{jsxref("SyntaxError")}}。
>
> ```js example-bad
> const child = {
>   myParent() {
>     console.log(super); // SyntaxError: 'super' keyword unexpected here
>   },
> };
> ```

在派生类的构造函数体中（使用 `extends`），`super` 关键字可以作为“函数调用”（`super(...args)`）出现，它必须在使用 `this` 关键字之前和构造函数返回之前被调用。它调用父类的构造函数并绑定父类的公共字段，之后派生类的构造函数可以进一步访问和修改 `this`。

“属性查询”形式可以用来访问一个对象字面或类的 [[Prototype]] 的方法和属性。在一个类的主体中，`super` 的引用可以是父类的构造函数本身，也可以是构造函数的 `prototype`，这取决于执行环境是实例创建还是类的初始化。更多细节请参见示例部分。

注意，`super` 的引用是由 `super` 声明的类或对象字面决定的，而不是方法被调用的对象。因此，取消绑定或重新绑定一个方法并不会改变其中 `super` 的引用（尽管它们会改变 [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 的引用）。你可以把 `super` 看作是类或对象字面范围内的一个变量，这些方法在它上面创建了一个闭包。(但也要注意，它实际上并不是一个变量，正如上面所解释的那样)。

当通过 `super` 设置属性时，该属性将被设置在 `this` 上。

## 示例

### 在类中使用 `super`

以下代码片段来自于 [classes sample](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html)（[在线演示](https://googlechrome.github.io/samples/classes-es6/index.html)）。这里调用 `super()` 是为了避免重复在 `Rectangle` 与 `Square` 的构造函数之间共同的部分。

```js
class Polygon {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log("Hi, I am a ", this.name + ".");
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

    // 这里，它调用父类的构造函数并传入 length
    // 作为 Polygon 的 height, width
    super(length, length);

    // 注意：在派生的类中，在你可以使用 'this' 之前，必须先调用 super()。
    // 现在可以使用 'this' 了，忽略 'this' 将导致引用错误（ReferenceError）
    this.name = "Square";
  }
}
```

### 调用父类上的静态方法

你也可以用 `super` 调用父类的[静态](/zh-CN/docs/Web/JavaScript/Reference/Classes/static)方法。

```js
class Rectangle {
  static logNbSides() {
    return "I have 4 sides";
  }
}

class Square extends Rectangle {
  static logDescription() {
    return `${super.logNbSides()} which are all equal`;
  }
}
Square.logDescription(); // 'I have 4 sides which are all equal'
```

### 在类字段声明中访问 super

`super` 也可以在类字段初始化时被访问。`super` 的引用取决于当前字段是一个实例字段还是一个静态字段。

```js
class Base {
  static baseStaticField = 90;
  baseMethod() {
    return 10;
  }
}
class Extended extends Base {
  extendedField = super.baseMethod(); // 10
  static extendedStaticField = super.baseStaticField; // 90
}
```

注意，实例字段是在实例上设置的，而不是在构造函数的原型上，所以你不能用 `super` 来访问父类的实例字段。

```js example-bad
class Base {
  baseField = 10;
}
class Extended extends Base {
  extendedField = super.baseField; // undefined
}
```

在这里，`extendedField` 是 `undefined` 而不是 10，因为 `baseField` 被定义为 `Base` 实例的自有属性，而不是 `Base.prototype`。在这种情况下，`super` 只查找 `Base.prototype` 的属性，因为它是 `Extended.prototype` 的 [[Prototype]]。

### 删除 super 上的属性将抛出异常

你不能使用 [delete 操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)加 `super.prop` 或者 `super[expr]` 去删除父类的属性，这样做会抛出 {{jsxref("ReferenceError")}}。

```js
class Base {
  foo() {}
}
class Derived extends Base {
  delete() {
    delete super.foo; // 这很糟糕
  }
}

new Derived().delete(); // ReferenceError: invalid delete involving 'super'.
```

### 在对象字面量中使用 super.prop

`super` 也可以在[对象初始化器/对象字面量](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)符号中使用。在这个例子中，两个对象定义了一个方法。在第二个对象中，`super` 调用第一个对象的方法。这是在 {{jsxref("Object.setPrototypeOf()")}} 的帮助下实现的，我们将 `obj2` 的原型设置为 `obj1`，这样 `super` 就能够在 `obj1` 上找到 `method1`。

```js
const obj1 = {
  method1() {
    console.log("method 1");
  },
};
const obj2 = {
  method2() {
    super.method1();
  },
};
Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // logs "method 1"
```

### 读取 super.prop 的方法在绑定到其他对象时不会有不同的表现

访问 `super.x` 的行为类似于 `Reflect.get(Object.getPrototypeOf(objectLiteral), "x", this)`，这意味着该属性总是在对象字面/类声明的原型上寻找，取消绑定和重新绑定方法不会改变 `super` 的引用。

```js
class Base {
  baseGetX() {
    return 1;
  }
}
class Extended extends Base {
  getX() {
    return super.baseGetX();
  }
}
const e = new Extended();
console.log(e.getX()); // 1
const { getX } = e;
console.log(getX()); // 1
```

同样的情况也发生在对象字面量中。

```js
const parent1 = { prop: 1 };
const parent2 = { prop: 2 };
const child = {
  myParent() {
    console.log(super.prop);
  },
};
Object.setPrototypeOf(child, parent1);
child.myParent(); // 打印 "1"
const myParent = child.myParent;
myParent(); // 依然打印 "1"
const anotherChild = { __proto__: parent2, myParent };
anotherChild.myParent(); //依然打印 "1"
```

只有重设整个继承链才能改变 `super` 的引用。

```js
class Base {
  baseGetX() {
    return 1;
  }
  static staticBaseGetX() {
    return 3;
  }
}
class AnotherBase {
  baseGetX() {
    return 2;
  }
  static staticBaseGetX() {
    return 4;
  }
}
class Extended extends Base {
  getX() {
    return super.baseGetX();
  }
  static staticGetX() {
    return super.staticBaseGetX();
  }
}
const e = new Extended();
// 重置实例部分的继承
Object.setPrototypeOf(Extended.prototype, AnotherBase.prototype);
console.log(e.getX()); // 打印 "2" 而不是 "1", 因为原型链已经改变
console.log(Extended.staticGetX()); // 依然打印 "3", 因为我们还没有修改静态部分。
// 重置静态部分的继承
Object.setPrototypeOf(Extended, AnotherBase);
console.log(Extended.staticGetX()); //现在打印 "4"
```

### 设置 super.prop 将在此基础上设置属性。

设置 `super` 的属性，比如 `super.x = 1`，就像 `Reflect.set(Object.getPrototypeOf(objectLiteral), "x", 1, this)` 的行为。这是一个将 `super` 简单理解为“原型对象的引用”的情况，因为它实际上是在 `this` 上设置属性。

```js
class A {}
class B extends A {
  setX() {
    super.x = 1;
  }
}
const b = new B();
b.setX();
console.log(b); // B { x: 1 }
console.log(Object.hasOwn(b, "x")); // true
```

`super.x = 1` 将在 `A.prototype` 上寻找 `x` 的属性描述符（并调用那里定义的 setter），但 `this` 的值将被设置为 `this`，在这种情况下就是 `b`。你可以阅读 [`Reflect.set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set) 以了解更多关于 `target` 和 `receiver` 不同情况的细节。

这意味着，虽然 _get_ `super.prop` 的方法通常不会受到 `this` 上下文的影响，但 _set_ `super.prop` 的方法却容易受到影响。

```js example-bad
/* Reusing same declarations as above */
const b2 = new B();
b2.setX.call(null); // TypeError: Cannot assign to read only property 'x' of object 'null'
```

然而，`super.x = 1` 仍然会查询原型对象的属性描述符，这意味着你不能重写不可写的属性，而且 setter 会被调用。

```js
class X {
  constructor() {
    // Create a non-writable property
    Object.defineProperty(this, "prop", {
      configurable: true,
      writable: false,
      value: 1,
    });
  }
}
class Y extends X {
  constructor() {
    super();
  }
  foo() {
    super.prop = 2; // Cannot overwrite the value.
  }
}
const y = new Y();
y.foo(); // TypeError: "prop" is read-only
console.log(y.prop); // 1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [类](/zh-CN/docs/Web/JavaScript/Reference/Classes)
