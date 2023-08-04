---
title: 类
slug: Web/JavaScript/Reference/Classes
---

{{JsSidebar("Classes")}}

类是用于创建对象的模板。他们用代码封装数据以处理该数据。JS 中的类建立在原型上，但也具有某些语法和语义未与 ES5 类相似语义共享。

## 定义类

实际上，类是“特殊的[函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)”，就像你能够定义的[函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)和[函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)一样，类语法有两个组成部分：[类表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/class)和[类声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/class)。

### 类声明

定义类的一种方法是使用**类声明**。要声明一个类，你可以使用带有`class`关键字的类名（这里是“Rectangle”）。

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

#### 提升

**函数声明**和**类声明**之间的一个重要区别在于，函数声明会{{Glossary("Hoisting", "提升")}}，类声明不会。你首先需要声明你的类，然后再访问它，否则类似以下的代码将抛出{{jsxref("ReferenceError")}}：

```js example-bad
let p = new Rectangle(); // ReferenceError

class Rectangle {}
```

### 类表达式

**类表达式**是定义类的另一种方法。类表达式可以命名或不命名。命名类表达式的名称是该类体的局部名称。(不过，可以通过类的 (而不是一个实例的) {{jsxref("Function.name", "name")}} 属性来检索它)。

```js
// 未命名/匿名类
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle"

// 命名类
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// 输出："Rectangle2"
```

> **备注：** 类**表达式**也同样受到[类声明](/zh-CN/docs/Web/JavaScript/Reference/Classes#Class_declarations)部分中提到的类型提升的限制。

## 类体和方法定义

一个类的类体是一对花括号/大括号 `{}` 中的部分。这是你定义类成员的位置，如方法或构造函数。

### 严格模式

类声明和类表达式的主体都执行在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下。比如，构造函数，静态方法，原型方法，getter 和 setter 都在严格模式下执行。

### 构造函数

[constructor](/zh-CN/docs/Web/JavaScript/Reference/Classes/constructor)方法是一个特殊的方法，这种方法用于创建和初始化一个由`class`创建的对象。一个类只能拥有一个名为“constructor”的特殊方法。如果类包含多个`constructor`的方法，则将抛出 一个{{jsxref("SyntaxError")}} 。

一个构造函数可以使用 `super` 关键字来调用一个父类的构造函数。

### 原型方法

参见[方法定义](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions)。

```js
class Rectangle {
  // constructor
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}
const square = new Rectangle(10, 10);

console.log(square.area);
// 100
```

### 静态方法

[`static`](/zh-CN/docs/Web/JavaScript/Reference/Classes/static) 关键字用来定义一个类的一个静态方法。调用静态方法不需要[实例化](</zh-CN/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#The_object_(class_instance)>) 该类，但不能通过一个类实例调用静态方法。静态方法通常用于为一个应用程序创建工具函数。

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName;
// undefined
p1.distance;
// undefined

console.log(Point.displayName);
// "Point"
console.log(Point.distance(p1, p2));
// 7.0710678118654755
```

### 用原型和静态方法绑定 this

当调用静态或原型方法时没有指定 _this_ 的值，那么方法内的 _this_ 值将被置为 **`undefined`**。即使你未设置 `"use strict"` ，因为 `class` 体内部的代码总是在严格模式下执行。

```js
class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

let obj = new Animal();
obj.speak(); // Animal {}
let speak = obj.speak;
speak(); // undefined

Animal.eat(); // class Animal
let eat = Animal.eat;
eat(); // undefined
```

如果上述代码通过传统的基于函数的语法来实现，那么依据初始的 _this_ 值，在非严格模式下方法调用会发生自动装箱。若初始值是 `undefined`，_this_ 值会被设为全局对象。

严格模式下不会发生自动装箱，_this_ 值将保留传入状态。

```js
function Animal() {}

Animal.prototype.speak = function () {
  return this;
};

Animal.eat = function () {
  return this;
};

let obj = new Animal();
let speak = obj.speak;
speak(); // global object

let eat = Animal.eat;
eat(); // global object
```

### 实例属性

实例的属性必须定义在类的方法里：

```plain
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

静态的或原型的数据属性必须定义在类定义的外面。

```plain
Rectangle.staticWidth = 20;
Rectangle.prototype.prototypeWidth = 25;
```

### 字段声明

> **警告：** 公共和私有字段声明是 JavaScript 标准委员会[TC39](https://tc39.es/)提出的[实验性功能（第 3 阶段）](https://github.com/tc39/proposal-class-fields)。浏览器中的支持是有限的，但是可以通过[Babel](https://babeljs.io/)等系统构建后使用此功能。

#### 公有字段声明

使用 JavaScript 字段声明语法，上面的示例可以写成：

```plain
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

通过预先声明字段，类定义变得更加自我记录，并且字段始终存在。

在声明字段时，我们不需要像 `let`、`const` 和 `var` 这样的关键字。

正如上面看到的，这个字段可以用也可以不用默认值来声明。

#### 私有字段声明

使用私有字段，可以按以下方式细化定义。

```plain
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```

从类外部引用私有字段是错误的。它们只能在类里面中读取或写入。通过定义在类外部不可见的内容，可以确保类的用户不会依赖于内部，因为内部可能在不同版本之间发生变化。

> **备注：** 私有字段仅能在字段声明中预先定义。

私有字段不能通过在之后赋值来创建它们，这种方式只适用普通属性。

更多信息，请看[class fields](/zh-CN/docs/Web/JavaScript/Reference/Classes/Class_fields).

## 使用 `extends` 扩展子类

[`extends`](/zh-CN/docs/Web/JavaScript/Reference/Classes/extends) 关键字在 _类声明_ 或 _类表达式_ 中用于创建一个类作为另一个类的一个子类。

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // 调用超类构造函数并传入 name 参数
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

var d = new Dog("Mitzie");
d.speak(); // 'Mitzie barks.'
```

如果子类中定义了构造函数，那么它必须先调用 `super()` 才能使用 `this` 。

也可以继承传统的基于函数的“类”：

```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(this.name + " makes a noise.");
};

class Dog extends Animal {
  speak() {
    super.speak();
    console.log(this.name + " barks.");
  }
}

var d = new Dog("Mitzie");
d.speak(); //Mitzie makes a noise.  Mitzie barks.
```

请注意，类不能继承常规对象（不可构造的）。如果要继承常规对象，可以改用{{jsxref("Object.setPrototypeOf()")}}：

```js
var Animal = {
  speak() {
    console.log(this.name + " makes a noise.");
  },
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Object.setPrototypeOf(Dog.prototype, Animal); // 如果不这样做，在调用 speak 时会返回 TypeError

var d = new Dog("Mitzie");
d.speak(); // Mitzie makes a noise.
```

## Species

你可能希望在派生数组类 *`MyArray` *中返回 {{jsxref("Array")}}对象。这种 species 方式允许你覆盖默认的构造函数。

例如，当使用像{{jsxref("Array.map", "map()")}}返回默认构造函数的方法时，您希望这些方法返回一个父`Array`对象，而不是`MyArray`对象。{{jsxref("Symbol.species")}} 符号可以让你这样做：

```js
class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() {
    return Array;
  }
}
var a = new MyArray(1, 2, 3);
var mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray);
// false
console.log(mapped instanceof Array);
// true
```

## 使用 `super` 调用超类

[`super`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super) 关键字用于调用对象的父对象上的函数。

```js
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + " roars.");
  }
}
```

## Mix-ins / 混入

抽象子类或者 mix-ins 是类的模板。一个 ECMAScript 类只能有一个单超类，所以想要从工具类来多重继承的行为是不可能的。子类继承的只能是父类提供的功能性。因此，例如，从工具类的多重继承是不可能的。该功能必须由超类提供。

一个以超类作为输入的函数和一个继承该超类的子类作为输出可以用于在 ECMAScript 中实现混合：

```js
var calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

var randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };
```

使用 mix-ins 的类可以像下面这样写：

```js
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 重新运行一个类定义

无法重新定义类。尝试这样做会产生一个 `SyntaxError`.

如果您正在使用 Web 浏览器（例如 Firefox Web 控制台， (**Tools** > **Web Developer** > **Web Console**) 并且您两次“运行”具有相同名称的类的定义，您将收到一个 `SyntaxError: redeclaration of let ClassName;`. (请参阅中有关此问题的进一步讨论 [Firefox bug 1428672](https://bugzil.la/1428672).) 在 Chrome 开发者工具中执行类似的操作会给您一个以下信息： `Uncaught SyntaxError: Identifier 'ClassName' has already been declared at <anonymous>:1:1`.

## 参见

- {{jsxref("Functions", "Functions", "", "true")}}
- {{jsxref("Statements/class", "class declaration", "", "true")}}
- {{jsxref("Operators/class", "class expression", "", "true")}}
- {{jsxref("Classes/Public_class_fields", "Public class fields", "", "true")}}
- {{jsxref("Classes/Private_class_fields", "Private class fields", "", "true")}}
- {{jsxref("Operators/super", "super")}}
- [Blog post: "ES6 In Depth: Classes"](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/)
- [Fields and public/private class properties proposal (stage 3)](https://github.com/tc39/proposal-class-fields)
