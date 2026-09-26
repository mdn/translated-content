---
title: in
slug: Web/JavaScript/Reference/Operators/in
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

如果指定的属性在指定的对象或其原型链中，则 **`in`** **运算符**返回 `true`。

`in` 运算符不能用于搜索其他集合中的值。要测试数组中是否存在某个值，请使用
{{jsxref("Array.prototype.includes()")}}。对于集合，请使用
{{jsxref("Set.prototype.has()")}}。

{{InteractiveExample("JavaScript Demo: Expressions - in operator")}}

```js interactive-example
const car = { make: "Honda", model: "Accord", year: 1998 };

console.log("make" in car);
// Expected output: true

delete car.make;
if ("make" in car === false) {
  car.make = "Suzuki";
}

console.log(car.make);
// Expected output: "Suzuki"
```

## 语法

```plain
prop in object
#prop in object
```

### 参数

- `prop`
  - : 表示属性名的字符串或 symbol（非 symbol 类型将被[强制转换为字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)）。也可以是[私有元素标识符](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_elements)。
- `object`
  - : 要检查的对象，检查它（或其原型链）是否包含具有指定名称（`prop`）的属性。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `object` 不是对象（即原始值），则抛出该异常。

## 描述

`in` 运算符用于测试对象或其原型链中是否存在字符串或 symbol 属性。如果你只想检查_非继承_属性，请改用 {{jsxref("Object.hasOwn()")}}。

属性可能存在于对象中，但其值为 `undefined`。因此，`"x" in obj` 与 `obj.x !== undefined` 并不相同。要让 `in` 在属性被添加后返回 `false`，请使用 [`delete`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete) 运算符，而不是将该属性的值设置为 `undefined`。

你还可以使用 `in` 运算符检查对象中是否定义了特定的[私有类字段或方法](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_elements)。如果属性已定义，该运算符返回 `true`，否则返回 `false`。这被称为_品牌检查_，因为当且仅当对象由该类构造函数创建时，它才返回 `true`；之后你也可以安全地访问其他私有元素。

这是一个特殊语法——`in` 运算符的左侧是属性标识符而不是表达式，但不能加引号（否则它就是字符串属性，而不是私有元素）。

由于在与当前类无关的对象上访问私有元素会抛出 {{jsxref("TypeError")}}，而不是返回 `undefined`，因此可以使用此语法简化以下代码：

```js
class C {
  #x;
  static isC(obj) {
    try {
      obj.#x;
      return true;
    } catch {
      return false;
    }
  }
}
```

简化为：

```js
class C {
  #x;
  static isC(obj) {
    return #x in obj;
  }
}
```

这样通常也无需仅仅为了访问可能不存在的私有元素而处理错误。

但是，`in` 运算符仍然要求私有元素预先在外层类中声明，否则会抛出 {{jsxref("SyntaxError")}}（“Private field '#x' must be declared in an enclosing class”），这与尝试访问未声明的私有元素时相同。

```js-nolint example-bad
class C {
  foo() {
    #x in this;
  }
}

new C().foo(); // SyntaxError：必须在外层类中声明私有字段“#x”
```

## 示例

### 基本用法

下面的例子演示了一些 `in` 运算符的用法。

```js
// 数组
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // 返回 true
3 in trees; // 返回 true
6 in trees; // 返回 false
"bay" in trees; // 返回 false（必须使用索引号，而不是该索引处的值）
"length" in trees; // 返回 true（length 是数组属性）
Symbol.iterator in trees; // 返回 true

// 内置对象
"PI" in Math; // 返回 true

// 自定义对象
const myCar = { make: "Honda", model: "Accord", year: 1998 };
"make" in myCar; // 返回 true
"model" in myCar; // 返回 true
```

`in` 运算符的右侧必须指定一个对象。例如，你可以指定使用 `String` 构造函数创建的字符串，但不能指定字符串字面量。

```js
const color1 = new String("green");
"length" in color1; // 返回 true

const color2 = "coral";
// 报错（color2 不是 String 对象）
"length" in color2;
```

### 对被删除或值为 undefined 的属性使用 `in`

如果你使用 [`delete`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete) 运算符删除了一个属性，则 `in` 运算符对该属性返回 `false`。

```js
const myCar = { make: "Honda", model: "Accord", year: 1998 };
delete myCar.make;
"make" in myCar; // 返回 false

const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
3 in trees; // 返回 false
```

如果你只是将属性的值设置为 {{jsxref("undefined")}}，而没有删除它，则 `in` 运算符对该属性仍会返回 `true`。

```js
const myCar = { make: "Honda", model: "Accord", year: 1998 };
myCar.make = undefined;
"make" in myCar; // 返回 true
```

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
3 in trees; // 返回 true
```

即使直接访问[空数组槽](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)返回 `undefined`，`in` 运算符对它仍会返回 `false`。

```js
const empties = new Array(3);
empties[2]; // 返回 undefined
2 in empties; // 返回 false
```

要避免这种情况，请确保新数组始终填充非空值，或者不要写入超过数组末尾的索引。

```js
const empties = new Array(3).fill(undefined);
2 in empties; // 返回 true
```

### 继承属性

如果一个属性是从原型链上继承来的，`in` 运算符也会返回 `true`。如果你使用对象存储任意键值对，这可能不是你想要的结果。

```js example-bad
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

hasPerson("hasOwnProperty"); // 返回 true
```

你可以使用 {{jsxref("Object.hasOwn()")}} 来检查对象是否拥有该键。

```js
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return Object.hasOwn(ages, name);
}

hasPerson("hasOwnProperty"); // 返回 false
```

或者，你可以考虑使用[空原型对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)或 {{jsxref("Map")}} 来存储 `ages`，从而避免其他错误。

```js example-good
const ages = new Map([
  ["alice", 18],
  ["bob", 27],
]);

function hasPerson(name) {
  return ages.has(name);
}

hasPerson("hasOwnProperty"); // 返回 false
```

### 使用 `in` 运算符实现品牌检查

下面的代码片段演示了一个静态函数，它可以判断对象是否由 `Person` 构造函数创建，从而安全地调用其他方法。

```js
class Person {
  #age;
  constructor(age) {
    this.#age = age;
  }
  static isPerson(o) {
    return #age in o;
  }
  ageDifference(other) {
    return this.#age - other.#age;
  }
}

const p1 = new Person(20);
const p2 = new Person(30);
console.log(p1.ageDifference(p2)); // -10
console.log(Person.isPerson(p1)); // 返回 true

if (Person.isPerson(p1) && Person.isPerson(p2)) {
  console.log(p1.ageDifference(p2)); // -10
}
```

它有助于避免以下情况：

```js
const p2 = {};

p1.ageDifference(p2); // TypeError：无法从未声明私有成员的对象中读取 #age
```

如果没有 `in` 运算符，你必须使用 `try...catch` 代码块来检查对象是否具有该私有元素。

你也可以将其实现为类的 [`[Symbol.hasInstance]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) 方法，从而使用 [`instanceof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 运算符执行相同的检查（默认情况下，该运算符只检查对象的原型链中是否存在 `Person.prototype`）。

```js
class Person {
  #age;
  constructor(age) {
    this.#age = age;
  }
  static [Symbol.hasInstance](o) {
    // 检查 `this`，防止调用 `instanceof SubclassOfPerson` 时产生误判
    return this === Person && #age in o;
  }
  ageDifference(other) {
    return this.#age - other.#age;
  }
}

const p1 = new Person(20);
const p2 = new Person(30);

if (p1 instanceof Person && p2 instanceof Person) {
  console.log(p1.ageDifference(p2)); // -10
}
```

更多示例请参见[私有元素](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_elements)和[类指南](/zh-CN/docs/Web/JavaScript/Guide/Using_classes#private_fields)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)
- [`delete`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Reflect.has()")}}
- [属性的可枚举性和所有权](/zh-CN/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
