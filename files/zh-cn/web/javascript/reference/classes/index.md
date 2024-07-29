---
title: 类
slug: Web/JavaScript/Reference/Classes
l10n:
  sourceCommit: d40917d744ecad97190fc92e8db659538c488d51
---

{{JsSidebar("Classes")}}

类是用于创建对象的模板。它们用代码封装数据以对其进行处理。JS 中的类建立在[原型](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)之上，同时还具有一些类独有的语法和语义。

更多的示例和释义，参见[使用类](/zh-CN/docs/Web/JavaScript/Guide/Using_classes)教程。

## 描述

### 定义类

类实际上是“特殊的[函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)”，就像你能够定义的[函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)和[函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)一样，类也有两种定义方式：[类表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/class)和[类声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/class)。

```js
// 类声明
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// 类表达式；类是匿名的，但是它被赋值给了变量
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// 类表达式；类有它自己的名字
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

与函数表达式类似，类表达式可以是匿名的，或者也可以有一个不同于被赋值给的变量的名称的名字。然而，不同于函数声明的是，类声明具有与 `let` 和 `const` 相同的[暂时性死区](/zh-CN/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)限制，并且表现得像是[没有被提升](/zh-CN/docs/Web/JavaScript/Guide/Using_classes#类声明提升)一样。

### 类主体

类的主体是其被花括号 `{}` 包裹的部分。这里是你定义方法或构造函数等类成员的地方。

类的主体会执行在[严格模式下](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)，即便没有写 `"use strict"` 指令也一样。

可以从以下三个方面表述一个类元素的特征：

- 种类：getter、setter、方法、字段
- 位置：静态的或位于实例上
- 可见性：公有或私有

它们总共有 16 种可能的组合。为了更合理地划分参考文献，避免内容重叠，不同的元素会在不同的页面进行详细的介绍：

- [方法的定义](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions)
  - : 公有的实例方法
- [getter](/zh-CN/docs/Web/JavaScript/Reference/Functions/get)
  - : 公有的实例 getter 方法
- [setter](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)
  - : 公有的实例 setter 方法
- [类公有字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
  - : 公有的实例字段
- [`static`](/zh-CN/docs/Web/JavaScript/Reference/Classes/static)
  - : 公有的静态方法、静态 getter、静态 setter 和静态字段
- [私有属性](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_properties)
  - : 所有私有的元素

> [!NOTE]
> 私有属性具有在同一个类种声明的所有属性的名称必须唯一的限制。其他所有的公有属性都没有这个限制——你可以写多个同名的公有属性，但是最后一个会覆盖掉其他的。此种表现与[对象初始化器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#重复属性名)相同。

另外，有两种特殊的类元素语法：[`constructor`](#构造函数) 和[静态初始化块](#静态初始化块)，它们有自己的参考资料。

#### 构造函数

{{jsxref("Classes/constructor", "constructor")}} 方法是用于创建和初始化一个由类创建的对象的特殊方法。一个类只能拥有一个名为“constructor”的特殊方法。如果类包含多个 `constructor` 方法，将会抛出一个 {{jsxref("SyntaxError")}}。

构造函数可以使用 [`super`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super) 关键字来调用父类的构造函数。

你可以在构造方法中创建实例的属性：

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

或者，如果实例属性的值不依赖构造函数的参数，那么你可以把它们定义为[类字段](#字段声明)。

#### 静态初始化块

[静态初始化块](/zh-CN/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)使[静态属性](#静态方法和字段)可以灵活初始化，包括在初始化期间执行语句、授予外部对私有作用域的访问权等。

可以声明多个静态块，并且它们可以与静态字段和方法随意穿插（所有的静态项会按照声明顺序被执行或求值）。

#### 方法

方法被定义在类实例的原型上并且被所有实例共享。方法可以是普通函数、异步函数、生成器函数或异步生成器函数。更多信息，参见[方法的定义](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions)。

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // getter 方法
  get area() {
    return this.calcArea();
  }
  // 方法
  calcArea() {
    return this.height * this.width;
  }
  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]
```

#### 静态方法和字段

{{jsxref("Classes/static", "static")}} 关键字用来定义类的静态方法或字段。静态属性（字段和方法）被定义在类的自身而不是类的实例上。静态方法通常用于为应用程序创建工具函数，而静态字段则多用于存放缓存、固定配置或其他不需要跨实例复制的数据。

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
p1.displayName; // undefined
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

#### 字段声明

使用类字段声明语法，[构造函数](#构造函数)小节的示例可以写成如下形式：

```js
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

类字段与对象属性相似，不属于变量，所以我们不需要使用诸如 `const` 一类的关键字去声明它们。在 JavaScript 中，[私有属性](#私有属性_2)使用了一种特殊的语法，所以不应当使用像 `public` 和 `private` 这样的修饰符关键字。

如上文所示，声明字段时有没有默认值都可以。没有默认值的字段其值默认为 `undefined`。通过预先声明字段，类声明会变得自我文档化，并且字段始终显现，有助于优化代码。

参见[公有类字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields)获取更多信息。

#### 私有属性

使用私有字段，上文的声明可以细化为如下形式：

```js
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```

从类的外部引用私有字段是错误的，它们只能在类主体的内部被读写。通过定义在类外部不可见的内容，你可以确保类的使用者不能依赖类的内部构造，因为内部构造随着版本更新可能会发生变化。

私有字段只能在字段声明中预先声明。它们不像普通属性那样可以通过赋值创建。

更多信息，参见[私有属性](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_properties)。

### 继承

{{jsxref("Classes/extends", "extends")}} 关键字用于*类声明*或*类表达式*中，用以创建一个类作为另一构造函数（类或函数）的子类。

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} 发出叫声。`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // 调用父类的构造函数并且传递了 name 参数
  }

  speak() {
    console.log(`${this.name} 吠叫。`);
  }
}

const d = new Dog("Mitzie");
d.speak(); // Mitzie 吠叫。
```

如果子类中定义了构造函数，那么它必须先调用 `super()` 才能使用 `this`。{{jsxref("Operators/super", "super")}} 关键字也可以用来调用父类中对应的方法。

```js
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} 发出叫声。`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} 吼叫。`);
  }
}

const l = new Lion("Fuzzy");
l.speak();
// Fuzzy 发出叫声。
// Fuzzy 吼叫。
```

### 求值顺序

当一个 [`class` 声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/class)或 [`class` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/class)被求值，它的各个组件将按照以下顺序被求值：

1. {{jsxref("Classes/extends", "extends")}} 子句，如果有，将会首先被求值。它必须被求取为一个合法的构造函数或 `null`，否则将抛出一个 {{jsxref("TypeError")}}。
2. 提取 {{jsxref("Classes/constructor", "constructor")}} 方法，如果 `constructor` 不存在将会用默认实现进行替换。但是，因为 `constructor` 的定义仅仅只是一个方法的定义，所以这一步是观察不到的。
3. 按照声明顺序对类元素的属性键名求值。如果属性键名是计算属性名，则对表达式求值，表达式中的 `this` 指向类声明所处上下文的 `this`（不是类本身），属性值尚不会被求值。
4. 按照声明顺序安设方法和访问器。实例方法和访问器被安设在当前类的 `prototype` 属性上，静态方法和访问器被安设在类本身。私有实例方法和访问器会被保存，之后会直接安置到实例上，这个步骤不可被观察到。
5. 类现在已经用 `extends` 指定的原型和 `constructor` 指定的实现初始化完成。对于上面的所有步骤，如果有表达式尝试访问类名，会抛出一个 {{jsxref("ReferenceError")}}，因为类还没有初始化完成。
6. 按照声明顺序求取类元素的值：
   - 对于每个[实例字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields)（公有或私有），其初始化器表达式会被保存。初始化器会在实例创建期间被求值，时间点在构造函数开头（对于基类）或者在调用 `super()` 返回时立刻求值（对于派生类）。
   - 对于每个[静态字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/static)（公有的和私有的），其初始化器在被求值时，`this` 会指向类本身，并且属性会被创建到类上。
   - [静态初始化块](/zh-CN/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)在被求值时，`this` 会指向类本身。
7. 类现在已经被完全初始化并且可以被作为构造函数使用。

对于实例是如何被创建的，请参阅 {{jsxref("Classes/constructor", "constructor")}} 文献。

## 示例

### 实例方法与静态方法的 this 绑定

当在没有 {{jsxref("Operators/this", "this")}} 值的情况下调用一个静态方法或实例方法，例如通过将方法赋值给一个变量然后调用，在方法中，`this` 值将会是 `undefined`。即便没有写 [`"use strict"`](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode) 指令，表现依然会相同，因为 `class` 主体中的代码永远是在严格模式下执行的。

```js
class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

const obj = new Animal();
obj.speak(); // Animal 对象
const speak = obj.speak;
speak(); // undefined

Animal.eat(); // Animal 类
const eat = Animal.eat;
eat(); // undefined
```

如果我们用传统基于函数的语法去覆写上述方法，那么在非严格模式下，调用方法时，`this` 会被自动绑定到 {{jsxref("globalThis")}}。在严格模式下，`this` 值仍然是 `undefined`。

```js
function Animal() {}

Animal.prototype.speak = function () {
  return this;
};

Animal.eat = function () {
  return this;
};

const obj = new Animal();
const speak = obj.speak;
speak(); // 全局对象（在非严格模式下）

const eat = Animal.eat;
eat(); // 全局对象（在非严格模式下）
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用类](/zh-CN/docs/Web/JavaScript/Guide/Using_classes)教程
- [`class`](/zh-CN/docs/Web/JavaScript/Reference/Statements/class)
- [`class` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/class)
- [函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)
- [深入 ES6：类](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/)——hacks.mozilla.org (2015)
