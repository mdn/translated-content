---
title: Object.prototype.isPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
---

{{JSRef}}

**`isPrototypeOf()`** 方法用于检查一个对象是否存在于另一个对象的原型链中。

> **备注：** `isPrototypeOf()` 与 {{jsxref("Operators/instanceof", "instanceof")}} 运算符不同。在表达式 `object instanceof AFunction` 中，会检查 `object` 的原型链是否与 `AFunction.prototype` 匹配，而不是与 `AFunction`本身匹配。

{{EmbedInteractiveExample("pages/js/object-prototype-isprototypeof.html")}}

## 语法

```js-nolint
isPrototypeOf(object)
```

### 参数

- `object`
  - : 要搜索其原型链的对象。

### 返回值

一个布尔值，指示调用 `isPrototypeOf()` 方法的对象（即 `this`）是否位于 `object` 的原型链中。当 `object` 不是一个对象（即基本类型）时，直接返回 `false`。

### 报错

- {{jsxref("TypeError")}}
  - : 如果 `prototypeObj` 为 undefined 或 null，会抛出 {{jsxref("TypeError")}}。

## 描述

所有继承自 `Object.prototype` 的对象（即除了 [`null` 原型对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null_原型对象)之外的所有对象）都继承了 `isPrototypeOf()` 方法。该方法允许你检查对象是否存在于另一个对象的原型链中。如果作为参数的 `object` 不是对象（即基本类型），则该方法直接返回 `false`。否则，`this` 值被[转换为对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#对象强制转换)，并且在 `object` 的原型链中搜索 `this` 值，直到到达链的末端或找到 `this` 值为止。

## 示例

### 使用 isPrototypeOf()

本示例展示了 `Baz.prototype`、`Bar.prototype`、`Foo.prototype` 和 `Object.prototype` 存在于对象 `baz` 的原型链中：

```js
class Foo {}
class Bar extends Foo {}
class Baz extends Bar {}

const foo = new Foo();
const bar = new Bar();
const baz = new Baz();

// 原型链：
// foo: Foo --> Object
// bar: Bar --> Foo --> Object
// baz: Baz --> Bar --> Foo --> Object
console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Baz.prototype.isPrototypeOf(bar)); // false
console.log(Baz.prototype.isPrototypeOf(foo)); // false
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(foo)); // false
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(bar)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
```

`isPrototypeOf()` 方法以及 {{jsxref("Operators/instanceof", "instanceof")}} 运算符在处理从特定原型链继承的对象时非常有用，例如，为了保证该对象上存在特定的方法或属性。

例如，如果只有当 `baz` 对象的原型链中包含 `Foo.prototype` 时才能执行某些代码，可以这样实现：

```js
if (Foo.prototype.isPrototypeOf(baz)) {
  // 执行安全操作
}
```

然而，`Foo.prototype` 存在于 `baz` 的原型链中并不意味着 `baz` 是使用 `Foo` 作为其构造函数创建的。例如，`baz` 可以直接将 `Foo.prototype` 作为其原型。在这种情况下，如果你的代码从 `baz` 中读取 `Foo` 的[私有属性](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_class_fields)，它仍然会失败：

```js
class Foo {
  #value = "foo";
  static getValue(x) {
    return x.#value;
  }
}

const baz = { __proto__: Foo.prototype };

if (Foo.prototype.isPrototypeOf(baz)) {
  console.log(Foo.getValue(baz)); // TypeError: Cannot read private member #value from an object whose class did not declare it
}
```

对于 {{jsxref("Operators/instanceof", "instanceof")}} 也是同样的情况。如果你需要以安全的方式读取私有属性，可以提供一个使用 {{jsxref("Operators/in", "in")}} 运算符的特定类型检查（branded check）方法。

```js
class Foo {
  #value = "foo";
  static getValue(x) {
    return x.#value;
  }
  static isFoo(x) {
    return #value in x;
  }
}

const baz = { __proto__: Foo.prototype };

if (Foo.isFoo(baz)) {
  // 不会运行，因为 baz 不是 Foo
  console.log(Foo.getValue(baz));
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [继承与原型链](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
