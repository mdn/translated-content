---
title: 构造方法
slug: Web/JavaScript/Reference/Classes/constructor
---

{{jsSidebar("Classes")}}

**`constructor`** 是一种用于创建和初始化[`class`](/zh-CN/docs/Web/JavaScript/Reference/Statements/class)创建的对象的特殊方法。

{{EmbedInteractiveExample("pages/js/classes-constructor.html")}}

## 语法

```plain
constructor([arguments]) { ... }
```

## 描述

在一个类中只能有一个名为“constructor”的特殊方法。一个类中出现多次构造函数 (`constructor)`方法将会抛出一个 {{jsxref("SyntaxError")}} 错误。

在一个构造方法中可以使用`super`关键字来调用一个父类的构造方法。

如果没有显式指定构造方法，则会添加默认的 constructor 方法。

如果不指定一个构造函数 (constructor) 方法，则使用一个默认的构造函数 (constructor)。

## 示例

### 使用`constructor`方法

以下代码片段来自 [类的实例](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html)（[在线 demo](https://googlechrome.github.io/samples/classes-es6/index.html)）。

```js
class Square extends Polygon {
  constructor(length) {
    // 在这里，它调用了父类的构造函数，并将 lengths 提供给 Polygon 的"width"和"height"
    super(length, length);
    // 注意：在派生类中，必须先调用 super() 才能使用 "this"。
    // 忽略这个，将会导致一个引用错误。
    this.name = "Square";
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    // 注意：不可使用 this.area = value
    // 否则会导致循环 call setter 方法导致爆栈
    this._area = value;
  }
}
```

### 另一个例子

看看这个代码片段

```js
class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

class Square extends Polygon {
  constructor() {
    super();
  }
}

class Rectangle {}

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);

console.log(Object.getPrototypeOf(Square.prototype) === Polygon.prototype); //false
console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype); //true

let newInstance = new Square();
console.log(newInstance.name); //Polygon
```

这里，**Square**类的原型被改变，但是在正在创建一个新的正方形实例时，仍然调用前一个基类**Polygon**的构造函数。

### 默认构造方法

如前所述，如果不指定构造方法，则使用默认构造函数。对于基类，默认构造函数是：

```js
constructor() {}
```

对于派生类，默认构造函数是：

```js
constructor(...args) {
  super(...args);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- [super()](/zh-CN/docs/Web/JavaScript/Reference/Operators/super)
- [`class` expression](/zh-CN/docs/Web/JavaScript/Reference/Operators/class)
- [`class` declaration](/zh-CN/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/zh-CN/docs/Web/JavaScript/Reference/Classes)
