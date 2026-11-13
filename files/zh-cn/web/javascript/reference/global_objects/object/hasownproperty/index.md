---
title: Object.prototype.hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
---

**`hasOwnProperty()`** 方法返回一个布尔值，表示对象自有属性（而不是继承来的属性）中是否具有指定的属性。

> [!NOTE]
> 在支持 {{jsxref("Object.hasOwn")}} 的浏览器中，建议使用 {{jsxref("Object.hasOwn()")}}，而非 `hasOwnProperty()`。

{{InteractiveExample("JavaScript Demo: Object.prototype.hasOwnProperty()")}}

```js interactive-example
const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty("property1"));
// Expected output: true

console.log(object1.hasOwnProperty("toString"));
// Expected output: false

console.log(object1.hasOwnProperty("hasOwnProperty"));
// Expected output: false
```

## 语法

```js-nolint
hasOwnProperty(prop)
```

### 参数

- `prop`
  - : 要测试的属性的{{jsxref("String","字符串", "", 1)}}名称或者 [Symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)。

### 返回值

如果对象有指定属性作为自有属性，则返回 `true`；否则返回 `false`。

## 描述

如果指定的属性是对象的直接属性——即使值为 `null` 或者 `undefined`，**`hasOwnProperty()`** 方法也会返回 `true`。如果属性是继承的，或者根本没有声明该属性，则该方法返回 `false`。与 {{jsxref("Operators/in", "in")}} 运算符不同的是，该方法不会在对象原型链中检查指定的属性。

该方法可以在*大多数* JavaScript 对象中使用，因为大多数对象都是从 {{jsxref("Object")}} 派生而来，因此会继承该方法。例如 {{jsxref("Array")}} 是一个 {{jsxref("Object")}}，所以你可以使用 `hasOwnProperty()` 方法来检查索引是否存在：

```js
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
fruits.hasOwnProperty(3); // 返回 true ('Orange')
fruits.hasOwnProperty(4); // 返回 false——未定义
```

如果在对象中重新实现了该方法，或者使用 `Object.create(null)` 创建了对象（这些对象不继承自 `Object.prototype`），则该方法将不可用。下面给出了这些情况的示例。

## 示例

### 使用 hasOwnProperty 测试自有属性是否存在

以下代码展示了如何确定 `example` 对象包含了一个名为 `prop` 的属性。

```js
const example = {};
example.hasOwnProperty("prop"); // 返回 false

example.prop = "exists";
example.hasOwnProperty("prop"); // 返回 true——“prop”已定义

example.prop = null;
example.hasOwnProperty("prop"); // 返回 true——自有属性存在且值为 null

example.prop = undefined;
example.hasOwnProperty("prop"); // 返回 true——自有属性存在且值为 undefined
```

### 直接属性 vs 继承属性

以下示例区分了直接属性和通过原型链继承的属性：

```js
const example = {};
example.prop = "exists";

// `hasOwnProperty` 仅对直接属性返回 true：
example.hasOwnProperty("prop"); // 返回 true
example.hasOwnProperty("toString"); // 返回 false
example.hasOwnProperty("hasOwnProperty"); // 返回 false

// 对于直接或继承的属性，`in` 运算符将返回 true：
"prop" in example; // 返回 true
"toString" in example; // 返回 true
"hasOwnProperty" in example; // 返回 true
```

### 遍历对象的属性

以下示例展示了如何在忽略继承属性的情况下迭代一个对象的可枚举属性。

```js
const buz = {
  fog: "stack",
};

for (const name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log(`this is fog (${name}) for sure. Value: ${buz[name]}`);
  } else {
    console.log(name); // toString 或其他的方法等
  }
}
```

请注意，{{jsxref("Statements/for...in", "for...in")}} 循环只迭代可枚举属性：循环中没有发出非可枚举属性并不意味着 `hasOwnProperty` 本身被严格限制在可枚举属性中（和 {{jsxref("Object.getOwnPropertyNames()")}} 一样）。

### 使用 hasOwnProperty 作为属性名称

JavaScript 并不保护属性名称 `hasOwnProperty`；具有此名称属性的对象可能会返回不正确的结果：

```js
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: "Here be dragons",
};

foo.hasOwnProperty("bar"); // 该重新实现始终返回 false
```

克服这个问题的推荐方法是，在支持的浏览器中使用 {{jsxref("Object.hasOwn()")}}。其他替代方案包括使用*外部的* `hasOwnProperty`：

```js
const foo = { bar: "Here be dragons" };

// 使用 Object.hasOwn() 方法——推荐
Object.hasOwn(foo, "bar"); // 返回 true

// 使用 Object 原型中的 hasOwnProperty 属性
Object.prototype.hasOwnProperty.call(foo, "bar"); // 返回 true

// 使用另一个 Object 的 hasOwnProperty，并在“this”设置为 foo 的情况下调用它
({}).hasOwnProperty.call(foo, "bar"); // 返回 true
```

请注意，在前两种情况下，没有新创建的对象。

### 由 Object.create(null) 创建的对象

使用 {{jsxref("Object.create()","Object.create(null)")}} 创建的对象不从 `Object.prototype` 继承，使得 `hasOwnProperty()` 不可访问。

```js
const foo = Object.create(null);
foo.prop = "exists";
foo.hasOwnProperty("prop"); // Uncaught TypeError: foo.hasOwnProperty is not a function
```

这种情况下的解决方案与上一节相同：使用 {{jsxref("Object.hasOwn()")}}，否则使用外部对象的 `hasOwnProperty()`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Object.hasOwn()")}}
- [属性的可枚举性和所有权](/zh-CN/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [继承与原型链](/zh-CN/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
