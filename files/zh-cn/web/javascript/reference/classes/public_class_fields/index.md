---
title: 公有类字段
slug: Web/JavaScript/Reference/Classes/Public_class_fields
---

{{JsSidebar("Classes")}}

公有静态字段和公有实例字段都是可编辑、可枚举和可配置的属性。因此，不同于私有对应值（private counterpart）的是，它们参与原型的继承。

## 语法

```js
class ClassWithInstanceField {
  instanceField = "instance field";
}

class ClassWithStaticField {
  static staticField = "static field";
}

class ClassWithPublicInstanceMethod {
  publicMethod() {
    return "hello world";
  }
}
```

## 示例

### 公有静态字段

公有静态字段在你想要创建一个只在每个类里面只存在一份，而不会存在于你创建的每个类的实例中的属性时可以用到。你可以用它存放缓存数据、固定结构数据或者其他你不想在所有实例都复制一份的数据。

公有静态字段是使用关键字 `static` 声明的。我们在声明一个类的时候，使用 {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}} 方法将公有静态字段添加到类的构造函数中。在类被声明之后，可以从类的构造函数访问公有静态字段。

```js
class ClassWithStaticField {
  static staticField = "static field";
}

console.log(ClassWithStaticField.staticField);
// 预期输出值："static field"
```

没有设定初始化的字段将默认被初始化为 `undefined`。

```js
class ClassWithStaticField {
  static staticField;
}

console.assert(Object.hasOwn(ClassWithStaticField, "staticField"));
console.log(ClassWithStaticField.staticField);
// 预期输出值："undefined"
```

公有静态字段不会在子类中重复初始化，但我们可以通过原型链访问它们。

```js
class ClassWithStaticField {
  static baseStaticField = "base field";
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = "sub class field";
}

console.log(SubClassWithStaticField.subStaticField);
// 预期输出值："sub class field"

console.log(SubClassWithStaticField.baseStaticField);
// 预期输出值："base field"
```

在初始化字段时，`this` 指向的是类的构造函数。你也可以通过名字引用构造函数，并使用 `super` 获取到存在的父类的构造函数。

```js
class ClassWithStaticField {
  static baseStaticField = "base static field";
  static anotherBaseStaticField = this.baseStaticField;

  static baseStaticMethod() {
    return "base static method output";
  }
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = super.baseStaticMethod();
}

console.log(ClassWithStaticField.anotherBaseStaticField);
// 预期输出值："base static field"

console.log(SubClassWithStaticField.subStaticField);
// 预期输出值："base static method output"
```

### 公有实例字段

公有实例字段存在于类的每一个实例中。通过声明一个公有字段，我们可以确保该字段一直存在，而类的定义则会更加像是自我描述。

公有实例字段可以在基类的构造过程中（构造函数主体运行前）使用 {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}} 添加，也可以在子类构造函数中的 `super()` 函数结束后添加。

```js
class ClassWithInstanceField {
  instanceField = "instance field";
}

const instance = new ClassWithInstanceField();
console.log(instance.instanceField);
// 预期输出值："instance field"
```

没有设定初始化的字段将默认被初始化为 `undefined`。

```js
class ClassWithInstanceField {
  instanceField;
}

const instance = new ClassWithInstanceField();
console.assert(Object.hasOwn(instance, "instanceField"));
console.log(instance.instanceField);
// 预期输出值："undefined"
```

和属性（properties）一样，字段名可以由计算得出。

```js
const PREFIX = "prefix";

class ClassWithComputedFieldName {
  [`${PREFIX}Field`] = "prefixed field";
}

const instance = new ClassWithComputedFieldName();
console.log(instance.prefixField);
// 预期输出值："prefixed field"
```

在初始化字段时，`this` 指向的是类正在构造中的实例。和公有实例方法相同的是：你可以在子类中使用 `super` 来访问父类的原型。

```js
class ClassWithInstanceField {
  baseInstanceField = "base field";
  anotherBaseInstanceField = this.baseInstanceField;
  baseInstanceMethod() {
    return "base method output";
  }
}

class SubClassWithInstanceField extends ClassWithInstanceField {
  subInstanceField = super.baseInstanceMethod();
}

const base = new ClassWithInstanceField();
const sub = new SubClassWithInstanceField();

console.log(base.anotherBaseInstanceField);
// 预期输出值："base field"

console.log(sub.subInstanceField);
// 预期输出值："base method output"
```

因为类的实例字段是在对应的构造函数运行之前添加的，所以你可以在构造函数中访问字段的值。

```js
class ClassWithInstanceField {
  instanceField = "instance field";

  constructor() {
    console.log(this.instanceField);
    this.instanceField = "new value";
  }
}

const instance = new ClassWithInstanceField(); // 输出 "instance field"
console.log(instance.instanceField); // "new value"
```

但是，因为派生类的实例字段是在 `super()` 返回之后定义的，所以基类的构造函数无法访问派生类的字段。

```js
class Base {
  constructor() {
    console.log("Base constructor:", this.field);
  }
}

class Derived extends Base {
  field = 1;
  constructor() {
    super();
    console.log("Derived constructor:", this.field);
  }
}

const instance = new Derived();
// Base constructor: undefined
// Derived constructor: 1
```

因为类字段是通过 `[[Define]]` 语义（本质上是 {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}}）添加的，所以派生类中的字段声明并不会调用基类中的 setter。此行为不同于在构造函数中使用 `this.field = …`。

```js
class Base {
  set field(val) {
    console.log(val);
  }
}

class DerivedWithField extends Base {
  field = 1;
}

const instance = new DerivedWithField(); // No log

class DerivedWithConstructor extends Base {
  constructor() {
    super();
    this.field = 1;
  }
}

const instance2 = new DerivedWithConstructor(); // Logs 1
```

> **备注：** 在类字段规范最终确定使用 `[[Define]]` 语义前，包括 [Babel](https://babeljs.io/) 和 [tsc](https://www.typescriptlang.org/) 在内的大多数转译器都将类字段转换为 `DerivedWithConstructor` 的形式，这在类字段标准化后产生了一些错误。

## 公有方法

### 公有静态方法

关键字 **`static`** 将为一个类定义一个静态方法。静态方法不是在一个实例之上被调用，而是在类自身之上被调用。它们通常是工具函数，比如用来创建或者复制对象。

```js
class ClassWithStaticMethod {
  static staticMethod() {
    return "static method has been called.";
  }
}

console.log(ClassWithStaticMethod.staticMethod());
// 预期输出值："static method has been called."
```

静态方法是在类的声明阶段用 {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}} 方法添加到类的构造函数中的。静态方法是可编辑、不可枚举和可配置的。

### 公有实例方法

正如其名，公有实例方法是可以在类的实例中使用的。

```js
class ClassWithPublicInstanceMethod {
  publicMethod() {
    return "hello world";
  }
}

const instance = new ClassWithPublicInstanceMethod();
console.log(instance.publicMethod());
// 预期输出值："hello world"
```

公有实例方法是在类的声明阶段用 {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}} 方法添加到类中的。静态方法是可编辑、不可枚举和可配置的。

你可以使用生成器（generator）、异步和异步生成器方法。

```js
class ClassWithFancyMethods {
  *generatorMethod() {}
  async asyncMethod() {}
  async *asyncGeneratorMethod() {}
}
```

在实例的方法中，`this` 指向的是实例本身，你可以使用 `super` 访问到父类的原型，由此你可以调用父类的方法。

```js
class BaseClass {
  msg = "hello world";
  basePublicMethod() {
    return this.msg;
  }
}

class SubClass extends BaseClass {
  subPublicMethod() {
    return super.basePublicMethod();
  }
}

const instance = new SubClass();
console.log(instance.subPublicMethod());
// 预期输出值："hello world"
```

`getter` 和 `setter` 是和类的属性绑定的特殊方法，分别会在其绑定的属性被取值、赋值时调用。使用 [get](/zh-CN/docs/Web/JavaScript/Reference/Functions/get) 和 [set](/zh-CN/docs/Web/JavaScript/Reference/Functions/set) 语法定义实例的公有 `getter` 和 `setter`。

```js
class ClassWithGetSet {
  #msg = "hello world";
  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `hello ${x}`;
  }
}

const instance = new ClassWithGetSet();
console.log(instance.msg);
// 预期输出值："hello world"

instance.msg = "cake";
console.log(instance.msg);
// 预期输出值："hello cake"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [所有 JS 类元素的语义](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
- v8.dev 站点中关于[公有和私有类字段](https://v8.dev/features/class-fields)的文章
