---
title: 公有类字段
slug: Web/JavaScript/Reference/Classes/Public_class_fields
l10n:
  sourceCommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

**公有字段**是可编辑、可枚举和可配置的属性。因此，不同于私有对应值（private counterpart）的是，它们参与原型的继承。

## 语法

```js-nolint
class ClassWithField {
  instanceField;
  instanceFieldWithInitializer = "实例字段";
  static staticField;
  static staticFieldWithInitializer = "静态字段";
}
```

还有一些额外的语法限制：

- 静态属性（字段或方法）的名称不能是 `prototype`。
- 类字段（静态或实例）的名称不能是 `constructor`。

## 描述

本页面将详细介绍公共实例字段。

- 有关公共静态字段，请参阅 [`static`](/zh-CN/docs/Web/JavaScript/Reference/Classes/static)。
- 关于私有字段，请参阅[私有元素](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_elements)。
- 公共方法请参见[方法的定义](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions)。
- 有关公共访问器，请参阅 [getter](/zh-CN/docs/Web/JavaScript/Reference/Functions/get) 和 [setter](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)。

公有实例字段存在于类的每个已创建实例中。通过声明公共字段，可以确保该字段始终存在，而且类的定义也更加自文档化（self-documenting）。

公共实例字段会在基类的构造时（构造函数主体运行之前）或子类的 `super()` 返回后添加到实例中。没有初始化器的字段会被初始化为 `undefined`。与属性一样，字段名称也可以计算。

```js
const PREFIX = "prefix";

class ClassWithField {
  field;
  fieldWithInitializer = "实例字段";
  [`${PREFIX}Field`] = "带前缀字段";
}

const instance = new ClassWithField();
console.log(Object.hasOwn(instance, "field")); // true
console.log(instance.field); // undefined
console.log(instance.fieldWithInitializer); // "实例字段"
console.log(instance.prefixField); // "带前缀字段"
```

只在[类定义时](/zh-CN/docs/Web/JavaScript/Reference/Classes#求值顺序)对计算字段名进行一次求值。这意味着每个类总是有一组固定的字段名，两个实例不能通过计算的名称拥有不同的字段名。计算表达式中的 `this` 指向类声明所处上下文的 `this`，而引用类名会导致 {{jsxref("ReferenceError")}}，因为类尚未初始化。在此表达式中，{{jsxref("Operators/await", "await")}} 和 {{jsxref("Operators/yield", "yield")}} 按预期工作。

```js
class C {
  [Math.random()] = 1;
}

console.log(new C());
console.log(new C());
// 两个实例拥有相同的字段名称
```

在字段初始化器中，[`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 指向正在构建的类实例，而 [`super`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super) 指向基类的 `prototype` 属性，它包含基类的实例方法，但不包含其实例字段。

```js
class Base {
  baseField = "基类字段";
  anotherBaseField = this.baseField;
  baseMethod() {
    return "基类方法输出";
  }
}

class Derived extends Base {
  subField = super.baseMethod();
}

const base = new Base();
const sub = new Derived();

console.log(base.anotherBaseField); // "基类字段"

console.log(sub.subField); // "基类方法输出"
```

每次创建新实例时，都会对字段初始化表达式进行求值。（因为每个实例的 `this` 值都不同，所以初始化表达式可以访问特定于实例的属性）。

```js
class C {
  obj = {};
}

const instance1 = new C();
const instance2 = new C();
console.log(instance1.obj === instance2.obj); // false
```

表达式是同步求值的。不能在初始化表达式中使用 {{jsxref("Operators/await", "await")}} 或 {{jsxref("Operators/yield", "yield")}}。（将初始化表达式视为被隐式封装在函数中。）

由于类的实例字段是在各自的构造函数运行之前添加的，因此可以在构造函数中访问字段的值。然而，由于派生类的实例字段是在 `super()` 返回后定义的，因此基类的构造函数无法访问派生类的字段。

```js
class Base {
  constructor() {
    console.log("基类的构造函数：", this.field);
  }
}

class Derived extends Base {
  field = 1;
  constructor() {
    super();
    console.log("派生类的控制函数：", this.field);
    this.field = 2;
  }
}

const instance = new Derived();
// 基类的构造函数：undefined
// 派生类的控制函数：1
console.log(instance.field); // 2
```

字段是逐个添加的。字段初始化器可以引用它上面的字段值，但不能引用它下面的字段值。所有实例方法和静态方法都会事先添加并可以访问，但如果这些方法引用的字段低于正在初始化的字段，那么调用这些方法时可能会出现与预期不符的情况。

```js
class C {
  a = 1;
  b = this.c;
  c = this.a + 1;
  d = this.c + 1;
}

const instance = new C();
console.log(instance.d); // 3
console.log(instance.b); // undefined
```

> [!NOTE]
> 这对[私有字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_elements)更为重要，因为访问未初始化的私有字段会抛出 {{jsxref("TypeError")}}，即使该私有字段已在下面声明。（如果未声明私有字段，则会提前抛出 {{jsxref("SyntaxError")}}。）

由于类字段是使用 [`[[DefineOwnProperty]]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) 语义（本质上是 {{jsxref("Object.defineProperty()")}}）添加的，因此派生类中的字段声明不会调用基类中的 setter。这种行为不同于在构造函数中使用 `this.field = …`。

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

const instance2 = new DerivedWithConstructor(); // 打印 1
```

> [!NOTE]
> 在类字段规范最终确定为`[[DefineOwnProperty]]`语义之前，包括 [Babel](https://babeljs.io/) 和 [tsc](https://www.typescriptlang.org/)在内的大多数转译器都将类字段转换为 `DerivedWithConstructor` 形式，这在类字段规范化之后造成了一些微妙的错误。

## 示例

### 使用类字段

类字段不能依赖于构造函数的参数，因此字段初始化器通常会在每个实例中都求出相同的值（除非同一表达式每次求出的值都不同，例如 {{jsxref("Date.now()")}} 或对象初始化器）。

```js example-bad
class Person {
  name = nameArg; // nameArg 在构造函数的作用域外
  constructor(nameArg) {}
}
```

```js example-good
class Person {
  // Person 的所有实例会有相同的 name
  name = "Dragomir";
}
```

不过，即使声明一个空的类字段也是有好处的，因为这表明了字段的存在，从而允许类型检查程序和人类读者静态分析类的结构。

```js
class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

上面的代码看似重复，但考虑一下 `this` 被动态更改的情况：明确的字段声明清楚地表明了哪些字段一定会出现在实例中。

```js
class Person {
  name;
  age;
  constructor(properties) {
    Object.assign(this, properties);
  }
}
```

由于初始化器是在基类执行完成后求值的，因此你可以访问由基类构造函数创建的属性。

```js
class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Professor extends Person {
  name = `${this.name} 教授`;
}

console.log(new Professor("Radev", 54).name); // "Radev 教授"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用类](/zh-CN/docs/Web/JavaScript/Guide/Using_classes)指南
- [类](/zh-CN/docs/Web/JavaScript/Reference/Classes)
- [私有元素](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_elements)
- {{jsxref("Statements/class", "class")}}
- [所有 JS 类元素的语义](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
- v8.dev 站点中关于[公有和私有类字段](https://v8.dev/features/class-fields)的文章
