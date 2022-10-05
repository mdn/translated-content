---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
---

{{JSRef}}

**`Object`** 是 JavaScript 的一种 [数据类型](/zh-CN/docs/Web/JavaScript/Data_structures) 。它用于存储各种键值集合和更复杂的实体。Objects 可以通过 `{{jsxref("Object.prototype.Object", "Object()")}}` 构造函数或者使用 [对象字面量](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer) 的方式创建

## 描述

在 JavaScript 中，几乎所有的对象都是 `Object` 类型的实例，它们都会从 `Object.prototype` 继承属性和方法，虽然大部分属性都会被覆盖（shadowed）或者说被重写了（overridden）。
除此之外，`Object` 还可以被故意的创建，但是这个对象并不是一个“真正的对象”（例如：通过 `{{jsxref("Object.create()", "Object.create(null)")}}`），或者通过一些手段改变对象，使其不再是一个“真正的对象”（比如说：`{{jsxref("Object.setPrototypeOf")}}`）。

通过原型链，所有的 `object` 都能观察到 Object 原型对象（Object prototype object）的改变，除非这些受到改变影响的属性和方法沿着原型链被进一步的重写。尽管有潜在的危险，但这为覆盖或扩展对象的行为提供了一个非常强大的机制。

`Object` 构造函数为给定的参数创建一个包装类对象（object wrapper），具体有以下情况：

- 如果给定值是 {{jsxref("null")}} 或 {{jsxref("undefined")}}，将会创建并返回一个空对象
- 如果传进去的是一个基本类型的值，则会构造其包装类型的对象
- 如果传进去的是引用类型的值，仍然会返回这个值，经他们复制的变量保有和源对象相同的引用地址

当以非构造函数形式被调用时，`Object` 的行为等同于 `new Object()`。

可查看 [对象初始化/字面量语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)。

### 从一个对象上删除一个属性

Object 自身没有提供方法删除其自身属性（Map 中的 `{{jsxref("Map.prototype.delete()")}}` 可以删除自身属性）为了删除对象上的属性，必须使用 [delete 操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)

## 构造函数

- {{jsxref("Object.prototype.Object()", "Object()")}}
  - : 创建一个新的 `Object` 对象。该对象将会包裹（wrapper）传入的参数

## 静态方法

- {{jsxref("Object.assign()")}}
  - : 通过复制一个或多个对象来创建一个新的对象。
- {{jsxref("Object.create()")}}
  - : 使用指定的原型对象和属性创建一个新对象。
- {{jsxref("Object.defineProperty()")}}
  - : 给对象添加一个属性并指定该属性的配置。
- {{jsxref("Object.defineProperties()")}}
  - : 给对象添加多个属性并分别指定它们的配置。
- {{jsxref("Object.entries()")}}
  - : 返回给定对象自身可枚举属性的 `[key, value]` 数组。
- {{jsxref("Object.freeze()")}}
  - : 冻结对象：其他代码不能删除或更改任何属性。
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
  - : 返回对象指定的属性配置。
- {{jsxref("Object.getOwnPropertyNames()")}}
  - : 返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名。
- {{jsxref("Object.getOwnPropertySymbols()")}}
  - : 返回一个数组，它包含了指定对象自身所有的符号属性。
- {{jsxref("Object.getPrototypeOf()")}}
  - : 返回指定对象的原型对象。
- {{jsxref("Object.is()")}}
  - : 比较两个值是否相同。所有 NaN 值都相等（这与==和===不同）。
- {{jsxref("Object.isExtensible()")}}
  - : 判断对象是否可扩展。
- {{jsxref("Object.isFrozen()")}}
  - : 判断对象是否已经冻结。
- {{jsxref("Object.isSealed()")}}
  - : 判断对象是否已经密封。
- {{jsxref("Object.keys()")}}
  - : 返回一个包含所有给定对象**自身**可枚举属性名称的数组。
- {{jsxref("Object.preventExtensions()")}}
  - : 防止对象的任何扩展。
- {{jsxref("Object.seal()")}}
  - : 防止其他代码删除对象的属性。
- {{jsxref("Object.setPrototypeOf()")}}
  - : 设置对象的原型（即内部 `[[Prototype]]` 属性）。
- {{jsxref("Object.values()")}}
  - : 返回给定对象自身可枚举值的数组。

## 实例属性

- {{jsxref("Object.prototype.constructor")}}
  - : 一个引用值，指向 Object 构造函数
- {{jsxref("Object.prototype.proto", "Object.prototype.__proto__")}}
  - : 指向一个对象，当一个 object 实例化时，使用该对象作为实例化对象的原型

## 实例方法

- {{jsxref("Object.prototype.__defineGetter__", "Object.prototype.__defineGetter__()")}}
  - : 将一个属性与一个函数相关联，当该属性被访问时，执行该函数，并且返回函数的返回值。
- {{jsxref("Object.prototype.__defineSetter__", "Object.prototype.__defineSetter__()")}}
  - : 将一个属性与一个函数相关联，当该属性被设置时，执行该函数，执行该函数去修改某个属性。
- {{jsxref("Object.prototype.__lookupGetter__", "Object.prototype.__lookupGetter__()")}}
  - : 返回一个函数，该函数通过给定属性的 `{{jsxref("Object.prototype.__defineGetter__", "Object.prototype.__defineGetter__()")}}` 得出。
- {{jsxref("Object.prototype.__lookupSetter__", "Object.prototype.__lookupSetter__()")}}
  - : 返回一个函数，该函数通过给定属性的 `{{jsxref("Object.prototype.__defineSetter__", "Object.prototype.__defineSetter__()")}}` 得出。
- {{jsxref("Object.prototype.hasOwnProperty", "Object.prototype.hasOwnProperty()")}}
  - : 返回一个布尔值，用于表示一个对象自身是否包含指定的属性，该方法并不会查找原型链上继承来的属性。
- {{jsxref("Object.prototype.isPrototypeOf", "Object.prototype.isPrototypeOf()")}}
  - : 返回一个布尔值，用于表示该方法所调用的对象是否在指定对象的原型链中。
- {{jsxref("Object.prototype.propertyIsEnumerable", "Object.prototype.propertyIsEnumerable()")}}
  - : 返回一个布尔值，用于表示内部属性 [ECMAScript \[\[Enumerable\]\] attribute](/zh-CN/docs/Web/JavaScript/Data_structures#属性) 是否被设置。
- {{jsxref("Object.prototype.toLocaleString", "Object.prototype.toLocaleString()")}}
  - : 调用 `toString()`。
- {{jsxref("Object.prototype.toString", "Object.prototype.toString()")}}
  - : 返回一个代表该对象的字符串。
- {{jsxref("Object.prototype.valueOf", "Object.prototype.valueOf()")}}
  - : 返回指定对象的原始值。

## 示例

### 给定 `undefined` 和 `null` 类型使用 `Object`

下面的例子将一个空的 `Object` 对象存到 `o` 中：

```js
var o = new Object();
```

```js
var o = new Object(undefined);
```

```js
var o = new Object(null);
```

### 使用 `Object` 生成布尔对象

下面的例子将{{jsxref("Boolean")}} 对象存到 `o` 中：

```js
// 等价于 o = new Boolean(true);
var o = new Object(true);
```

```js
// 等价于 o = new Boolean(false);
var o = new Object(Boolean());
```

### Object prototypes

当我们要修改现有的 `Object.prototype` 方法时，请你考虑一下在已经存在的逻辑之前或者之后通过包装扩展代码的方式来注入代码。
比如说，有一段代码将会在执行内部逻辑或者是其他扩展之前，有条件的执行一段自定义的逻辑。

当一个函数被调用时，调用的参数被保存在一个类似数组的“变量” [arguments](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)。
比如说：在调用 `myFn(a, b, c)` 时，myFunc 函数体中的 arguments 将会包含三个类似数组的元素，对应 `(a, b , c)`

When modifying prototypes with hooks, pass `this` and the arguments (the call state) to the current behavior by calling `apply()` on the function. This pattern can be used for any prototype, such as `Node.prototype`, `Function.prototype`, etc.

```js
var current = Object.prototype.valueOf;

// Since my property "-prop-value" is cross-cutting and isn't always
// on the same prototype chain, I want to modify Object.prototype:
Object.prototype.valueOf = function() {
  if (this.hasOwnProperty('-prop-value')) {
    return this['-prop-value'];
  } else {
    // It doesn't look like one of my objects, so let's fall back on
    // the default behavior by reproducing the current behavior as best we can.
    // The apply behaves like "super" in some other languages.
    // Even though valueOf() doesn't take arguments, some other hook may.
    return current.apply(this, arguments);
  }
}
```

Since JavaScript doesn't exactly have sub-class objects, prototype is a useful workaround to make a “base class” object of certain functions that act as objects. For example:

```js
  var Person = function(name) {
    this.name = name;
    this.canTalk = true;
  };

  Person.prototype.greet = function() {
    if (this.canTalk) {
      console.log('Hi, I am ' + this.name);
    }
  };

  var Employee = function(name, title) {
    Person.call(this, name);
    this.title = title;
  };

  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee; //If you don't set Object.prototype.constructor to Employee,
                                             //it will take prototype.constructor of Person (parent).
                                             //To avoid that, we set the prototype.constructor to Employee (child).

  Employee.prototype.greet = function() {
    if (this.canTalk) {
      console.log('Hi, I am ' + this.name + ', the ' + this.title);
    }
  };

  var Customer = function(name) {
    Person.call(this, name);
  };

  Customer.prototype = Object.create(Person.prototype);
  Customer.prototype.constructor = Customer; //If you don't set Object.prototype.constructor to Customer,
                                             //it will take prototype.constructor of Person (parent).
                                             //To avoid that, we set the prototype.constructor to Customer (child).

  var Mime = function(name) {
    Person.call(this, name);
    this.canTalk = false;
  };

  Mime.prototype = Object.create(Person.prototype);
  Mime.prototype.constructor = Mime; //If you don't set Object.prototype.constructor to Mime,
                                     //it will take prototype.constructor of Person (parent).
                                     //To avoid that, we set the prototype.constructor to Mime (child).

  var bob = new Employee('Bob', 'Builder');
  var joe = new Customer('Joe');
  var rg = new Employee('Red Green', 'Handyman');
  var mike = new Customer('Mike');
  var mime = new Mime('Mime');

  bob.greet();
  // Hi, I am Bob, the Builder

  joe.greet();
  // Hi, I am Joe

  rg.greet();
  // Hi, I am Red Green, the Handyman

  mike.greet();
  // Hi, I am Mike

  mime.greet();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [初始化对象](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)
