---
title: Function.prototype.prototype
slug: Web/JavaScript/Reference/Global_Objects/Function/prototype
---

{{JSRef}}

一个 {{jsxref("Function")}} 对象在使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 运算符来作为构造函数时，会用到它的 **`prototype`** 属性。它将成为新对象的原型。

> **备注：** 并不是所有的 {{jsxref("Function")}} 对象都拥有 `prototype` 属性——参见[描述](#描述)。

{{js_property_attributes(1, 0, 0)}}

> **备注：** [类](/zh-CN/docs/Web/JavaScript/Reference/Classes)的 `prototype` 属性是不可编辑的。

## 描述

在使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 运算符调用函数时，构造函数的 `prototype` 属性将成为新对象的原型。

```js
function Ctor() {}
const inst = new Ctor();
console.log(Object.getPrototypeOf(inst) === Ctor.prototype); // true
```

关于构造函数的 `prototype` 属性与结果对象的原型之间的相互作用，你可以查看[继承与原型链](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#构造函数)来了解更多。

一个具有 `prototype` 属性的函数也并不代表其有资格作为构造函数。例如，[function\*](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*) 拥有 `prototype` 属性，但它不能通过 `new` 运算符来调用。

```js
async function* asyncGeneratorFunction() {}
function* generatorFunction() {}
```

反之，生成器函数通常在它们不被 `new` 运算符调用的时候被用到它们的 `prototype` 属性。 `prototype` 属性会作为返回的 [`Generator`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator) 对象的原型。

另外，一些函数也可能在通过 `new` 运算符调用的情况下无条件抛出，即便它们可能具有 `prototype`。例如，[`Symbol()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol) 和 [`BigInt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) 函数会在它们通过 `new` 运算符来调用时抛出，因为 `Symbol.prototype` and `BigInt.prototype` 只是用来为原始值提供方法的，这时不应该直接构建包装器对象。

下列的函数不具有 `prototype` 属性，因此不能成为构造函数，即便后续手动赋予了 `prototype` 属性：

```js
const method = { foo() {} }.foo;
const arrowFunction = () => {};
async function asyncFunction() {}
```

下列则可以成为合法的构造函数，因为它们具有 `prototype`：

```js
class Class {}
function fn() {}
```

[绑定函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)不具有 `prototype` 属性，但是可能是可构造的。当它被构造的时候，目标函数将会被构造，如果目标函数是可构造的，将会返回一个普通的实例。

```js
const boundFunction = function () {}.bind(null);
```

默认情况下，函数的 `prototype` 是一个普通的对象。这个对象具有一个属性：[`constructor`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)。它是对这个函数本身的一个引用。 `constructor` 属性是可编辑、可配置但不可枚举的。

如果函数的 `prototype` 被赋予了 {{jsxref("Object")}} 以外的值，则当它被 `new` 运算符调用时，返回对象的原型将会指向 `Object.prototype`。（换句话说，`new` 运算符会忽略它的 `prototype` 属性并构造一个普通对象。）

```js
function Ctor() {}
Ctor.prototype = 3;
console.log(Object.getPrototypeOf(new Ctor()) === Object.prototype); // true
```

## 示例

### 通过修改原型的属性来修改所有实例的原型

```js
function Ctor() {}
const p1 = new Ctor();
const p2 = new Ctor();
Ctor.prototype.prop = 1;
console.log(p1.prop); // 1
console.log(p2.prop); // 1
```

### 将非函数属性添加到类的原型中

[公有类字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields)会为每一个实例都添加属性。类方法可以在原型中定义*函数*属性。但是，无法将非函数属性添加到原型中。假如你希望在所有实例之间共享静态数据（例如，[`Error.prototype.name`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/name) 在所有 Error 类的实例中都是相同的），那么你可以在类的原型中进行手动添加。

```js
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.species = "dog";

console.log(new Dog("Jack").species); // "dog"
```

使用[静态初始化块](/zh-CN/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)可以让这个操作更符合直觉。这些块会在类初始化的时候进行调用。

```js
class Dog {
  static {
    Dog.prototype.species = "dog";
  }
  constructor(name) {
    this.name = name;
  }
}

console.log(new Dog("Jack").species); // "dog"
```

## 规范

{{Specifications}}

## 参见

- {{jsxref("Function")}}
- [继承与原型链](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#constructors)
