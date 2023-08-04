---
title: Object.hasOwn()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwn
---

{{JSRef}}

如果指定的对象*自身*有指定的属性，则静态方法 **`Object.hasOwn()`** 返回 `true`。如果属性是继承的或者不存在，该方法返回 `false`。

> **备注：** `Object.hasOwn()` 旨在取代 {{jsxref("Object.prototype.hasOwnProperty()")}}。

{{EmbedInteractiveExample("pages/js/object-hasown.html")}}

## 语法

```js-nolint
Object.hasOwn(obj, prop)
```

### 参数

- `obj`
  - : 要测试的 JavaScript 实例对象。
- `prop`
  - : 要测试属性的 {{jsxref("String")}} 类型的名称或者 [Symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)。

### 返回值

如果指定的对象中直接定义了指定的属性，则返回 `true`；否则返回 `false`。

## 描述

如果指定的属性是该对象的直接属性——**`Object.hasOwn()`** 方法返回 `true`，即使属性值是 `null` 或 `undefined`。如果属性是继承的或者不存在，该方法返回 `false`。它不像 {{jsxref("Operators/in", "in")}} 运算符，这个方法不检查对象的原型链中的指定属性。

建议使用此方法替代 {{jsxref("Object.hasOwnProperty()")}}，因为它适用于使用 `Object.create(null)` 创建的对象且重写了继承的 `hasOwnProperty()` 方法的对象。尽管可以通过在外部对象上调用 `Object.prototype.hasOwnProperty()` 解决这些问题，但是 `Object.hasOwn()` 更加直观。

## 示例

### 使用 hasOwn 去测试属性是否存在

以下代码展示了如何确定 `example` 对象中是否包含名为 `prop` 的属性。

```js
const example = {};
Object.hasOwn(example, "prop"); // false——目标对象的属性 'prop' 未被定义

example.prop = "exists";
Object.hasOwn(example, "prop"); // true——目标对象的属性 'prop' 已被定义

example.prop = null;
Object.hasOwn(example, "prop"); // true——目标对象本身的属性存在，值为 null

example.prop = undefined;
Object.hasOwn(example, "prop"); // true——目标对象本身的属性存在，值为 undefined
```

### 直接属性和继承属性

以下示例区分了直接属性和通过原型链继承的属性：

```js
const example = {};
example.prop = "exists";

// `hasOwn` 静态方法只会对目标对象的直接属性返回 true：
Object.hasOwn(example, "prop"); // 返回 true
Object.hasOwn(example, "toString"); // 返回 false
Object.hasOwn(example, "hasOwnProperty"); // 返回 false

// `in` 运算符对目标对象的直接属性或继承属性均会返回 true：
"prop" in example; // 返回 true
"toString" in example; // 返回 true
"hasOwnProperty" in example; // 返回 true
```

### 迭代对象的属性

要迭代对象的可枚举属性，你*应该*这样使用：

```js
const example = { foo: true, bar: true };
for (const name of Object.keys(example)) {
  // …
}
```

但是如果你使用 `for...in`，你应该使用 `Object.hasOwn()` 跳过继承属性：

```js
const example = { foo: true, bar: true };
for (const name in example) {
  if (Object.hasOwn(example, name)) {
    // …
  }
}
```

### 检查数组索引是否存在

{{jsxref("Array")}} 中的元素被定义为直接属性，所以你可以使用 `hasOwn()` 方法去检查一个指定的索引是否存在：

```js
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
Object.hasOwn(fruits, 3); // true ('Orange')
Object.hasOwn(fruits, 4); // false——没有定义的
```

### hasOwnProperty 的问题案例

本部分证明了影响 `hasOwnProperty` 的问题对 `hasOwn()` 是免疫的。首先，它可以与重新实现的 `hasOwnProperty()` 一起使用：

```js
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: "The dragons be out of office",
};

if (Object.hasOwn(foo, "bar")) {
  console.log(foo.bar); //true——重新实现 hasOwnProperty() 不会影响 Object
}
```

它也可以用于测试使用 {{jsxref("Object.create()","Object.create(null)")}} 创建的对象。这些对象不会继承自 `Object.prototype`，因此 `hasOwnProperty()` 方法是无法访问的。

```js
const foo = Object.create(null);
foo.prop = "exists";
if (Object.hasOwn(foo, "prop")) {
  console.log(foo.prop); //true——无论对象是如何创建的，它都可以运行。
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在 `core-js` 中 `Object.hasOwn` 的 Polyfill](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.hasOwnProperty()")}}
- [属性的可枚举性和所有权](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [JavaScript 指南：重新审视继承](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
