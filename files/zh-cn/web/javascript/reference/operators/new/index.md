---
title: new
slug: Web/JavaScript/Reference/Operators/new
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

**`new`** 运算符允许开发人员创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

{{InteractiveExample("JavaScript Demo: Expressions - new operator")}}

```js interactive-example
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Eagle", "Talon TSi", 1993);

console.log(car1.make);
// Expected output: "Eagle"
```

## 语法

```js-nolint
new constructor
new constructor()
new constructor(arg1)
new constructor(arg1, arg2)
new constructor(arg1, arg2, /* …, */ argN)
```

### 参数

- `constructor`
  - : 一个指定对象实例的类型的类或函数。
- `arg1`、`arg2`、……、`argN`
  - : 一个用于被 `constructor` 调用的值列表。`new Foo` 与 `new Foo()` 等价，换句话说：如果没有指定参数列表，则在不带参数的情况下调用 `Foo`。

## 描述

当使用 **`new`** 关键字调用函数时，该函数将被用作构造函数。`new` 将执行以下操作：

1. 创建一个空的简单 JavaScript 对象。为方便起见，我们称之为 `newInstance`。
2. 如果构造函数的 `prototype` 属性是一个{{jsxref("Object", "对象", "", 1)}}，则将 `newInstance` 的 [[Prototype]] 指向构造函数的 `prototype` 属性，否则 `newInstance` 将保持为一个普通对象，其 [[Prototype]] 为 `Object.prototype`。

   > [!NOTE]
   > 因此，通过构造函数创建的所有实例都可以访问添加到构造函数 `prototype` 属性中的属性/对象。

3. 使用给定参数执行构造函数，并将 `newInstance` 绑定为 [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 的上下文（换句话说，在构造函数中的所有 `this` 引用都指向 `newInstance`）。
4. 如果构造函数返回[非原始值](/zh-CN/docs/Web/JavaScript/Guide/Data_structures#原始值)，则该返回值成为整个 `new` 表达式的结果。否则，如果构造函数未返回任何值或返回了一个原始值，则返回 `newInstance`。（通常构造函数不返回值，但可以选择返回值，以覆盖正常的对象创建过程。）

[类](/zh-CN/docs/Web/JavaScript/Reference/Classes)只能用 `new` 运算符实例化——尝试不使用 `new` 调用一个类将抛出 `TypeError`。

创建一个用户自定义的对象需要两步：

1. 通过编写指定对象名称和属性的函数来定义对象类型。例如，创建 `Foo` 对象的构造函数看起来可能像这样：

   ```js
   function Foo(bar1, bar2) {
     this.bar1 = bar1;
     this.bar2 = bar2;
   }
   ```

2. 通过 `new` 来创建对象实例。

   ```js
   const myFoo = new Foo("Bar 1", 2021);
   ```

> [!NOTE]
> 对象的属性可以是另一个对象。请参阅下面的示例。

你始终可以对已定义的对象添加新的属性。例如，`car1.color = "black"` 语句给 `car1` 添加了一个新的属性 `color`，并将其赋值为 `"black"`。

但是，这不会影响任何其他对象。要将新属性添加到相同类型的所有对象，你必须将该属性添加到构造函数的 `prototype` 属性中。其定义了由该函数创建的所有对象所共享的属性，而不仅仅是对象类型的其中一个实例。以下代码将一个值为 `"原色"` 的 `color` 属性添加到 `Car` 类型的所有对象，然后仅在实例对象 `car1` 中用字符串 `"黑色"` 覆盖该值。请参见[原型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)以了解更多信息。

```js
function Car() {}
car1 = new Car();
car2 = new Car();

console.log(car1.color); // undefined

Car.prototype.color = "原色";
console.log(car1.color); // '原色'

car1.color = "黑色";
console.log(car1.color); // '黑色'

console.log(Object.getPrototypeOf(car1).color); // '原色'
console.log(Object.getPrototypeOf(car2).color); // '原色'
console.log(car1.color); // '黑色'
console.log(car2.color); // '原色'
```

> [!NOTE]
> 虽然构造函数可以像任何常规函数一样被调用（即不使用 `new` 运算符），但在这种情况下并不会创建一个新的对象，`this` 的值也是不一样的。

函数可以通过检查 [`new.target`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target) 来知道它是否是通过 `new` 被调用的。当函数在没有使用 `new` 的情况下被调用时，`new.target` 的值为 `undefined`。例如，你可以有一个在被调用时和被构造时具有不同表现的函数：

```js
function Car(color) {
  if (!new.target) {
    // 以函数的形式被调用。
    return `${color}车`;
  }
  // 通过 new 被调用。
  this.color = color;
}

const a = Car("红"); // a 是“红车”
const b = new Car("红"); // b 是 `Car { color: "红" }`
```

在 ES6（引入了[类](/zh-CN/docs/Web/JavaScript/Reference/Classes)）之前，大多数 JavaScript 内置对象既可调用也可构造，尽管其中许多对象表现出不同的行为。举几个例子：

- [`Array()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)、[`Error()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) 以及 [`Function()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) 在被调用时和被构造时表现一致。
- [`Boolean()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean)、[`Number()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) 以及 [`String()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/String) 在被调用时将它们的参数强制转换为相应的原始类型，而在被构造时返回包装对象。
- [`Date()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) 在被调用时返回表示当前日期的字符串，相当于 `new Date().toString()`。

在 ES6 之后，语言对哪些是构造函数、哪些是函数有更严格的要求。例如：

- [`Symbol()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol) 和 [`BigInt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) 只能在不使用 `new` 的情况下被调用。尝试构造它们将抛出 `TypeError`。
- [`Proxy`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) 和 [`Map`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/Map) 只能通过 `new` 构造。尝试调用它们将抛出 `TypeError`。

## 示例

### 对象类型和对象实例

假设你要创建一个汽车的对象类型。你希望这个类型叫做 `Car`，这个类型具备 make、model、year 属性。要做到这些，你需要编写以下函数：

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

现在，你可以如下所示创建一个 `myCar` 的对象：

```js
const myCar = new Car("鹰牌", "Talon TSi", 1993);
```

该语句创建了 `myCar` 并将其属性赋为指定的值。于是 `myCar.make` 的值“鹰牌”，`myCar.year` 的值为整数 1993，以此类推。

你可以通过调用 `new` 来创建任意个 `car` 对象。例如：

```js
const kensCar = new Car("尼桑", "300ZX", 1992);
```

### 对象属性为其他对象

假设你定义了一个叫做 `Person` 的对象：

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

然后实例化了两个新的 `Person` 对象如下：

```js
const rand = new Person("兰德·麦克纳利", 33, "男性");
const ken = new Person("肯·琼斯", 39, "男性");
```

然后你可以重写 `Car` 的定义，添加一个值为 `Person` 对象的 `owner` 属性，如下：

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
```

要实例化新的对象，你可以用如下代码：

```js
const car1 = new Car("鹰牌", "Talon TSi", 1993, rand);
const car2 = new Car("尼桑", "300ZX", 1992, ken);
```

创建对象时，并没有传字符串或数字，而是将对象 `rand` 和 `ken` 作为参数传递，来代表所有者。要查找 `car2` 的所有者的名称，你可以访问以下属性：

```js
car2.owner.name;
```

### 使用 `new` 和类

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`你好，我的名字是${this.name}`);
  }
}

const p = new Person("卡罗琳");
p.greet(); // 你好，我的名字是卡罗琳
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Function")}}
- {{jsxref("Reflect.construct()")}}
- {{jsxref("Object")}}
