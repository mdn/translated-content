---
title: Object.freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
---

`Object.freeze()` 静态方法可以使一个对象被*冻结*。冻结对象可以[防止扩展](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)，并使现有的属性不可写入和不可配置。被冻结的对象不能再被更改：不能添加新的属性，不能移除现有的属性，不能更改它们的可枚举性、可配置性、可写性或值，对象的原型也不能被重新指定。`freeze()` 返回与传入的对象相同的对象。

冻结一个对象是 JavaScript 提供的最高完整性级别保护措施。

{{InteractiveExample("JavaScript Demo: Object.freeze()")}}

```js interactive-example
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// Expected output: 42
```

## 语法

```js-nolint
Object.freeze(obj)
```

### 参数

- `obj`
  - : 要冻结的对象。

### 返回值

传递给函数的对象。

## 描述

冻结一个对象相当于[阻止其扩展](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)然后将所有现有[属性的描述符](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#描述)的 `configurable` 特性更改为 `false`——对于数据属性，将同时把 `writable` 特性更改为 `false`。无法向被冻结的对象的属性中添加或删除任何内容。任何这样的尝试都将失败，可能是静默失败，也可能抛出一个 {{jsxref("TypeError")}} 异常（通常情况下，在{{jsxref("Strict_mode", "严格模式", "", 1)}}中抛出）。

对于被冻结对象的数据属性，它们的值不能被更改，因为它们的 `writable` 和 `configurable` 特性被设置为 `false`。访问器属性（getter 和 setter）也相同——getter 返回的属性值仍然可以更改，setter 可以在设置属性时调用而不抛出错误。请注意，对象类型的值仍然可以修改，除非它们也被冻结。数组作为一种对象也可以被冻结；数组被冻结后，既不能更改它的元素，也不能向数组中添加或删除元素。

`freeze()` 返回传递给函数的同一对象。它*不会*创建一个被冻结的副本。

尝试冻结带有元素的 {{jsxref("TypedArray")}} 或 {{jsxref("DataView")}} 会导致 {{jsxref("TypeError")}}，因为它们是内存视图，可能会引起其他问题：

```js
Object.freeze(new Uint8Array(0)); // 没有元素
// Uint8Array []

Object.freeze(new Uint8Array(1)); // 有元素
// TypeError: Cannot freeze array buffer views with elements

Object.freeze(new DataView(new ArrayBuffer(32))); // 没有元素
// DataView {}

Object.freeze(new Float64Array(new ArrayBuffer(64), 63, 0)); // 没有元素
// Float64Array []

Object.freeze(new Float64Array(new ArrayBuffer(64), 32, 2)); // 有元素
// TypeError: Cannot freeze array buffer views with elements
```

请注意，由于标准中的三个属性（`buf.byteLength`、`buf.byteOffset` 和 `buf.buffer`）是只读的（就像 {{jsxref("ArrayBuffer")}} 或 {{jsxref("SharedArrayBuffer")}} 的属性一样），因此没有理由尝试冻结这些属性。

与 {{jsxref("Object.seal()")}} 不同，使用 `Object.freeze()` 冻结的对象中的现有属性是不可变的，数据属性不能被重新赋值。

## 示例

### 冻结对象

```js
const obj = {
  prop() {},
  foo: "bar",
};

// 冻结前：可以添加新属性，也可以更改或删除现有属性
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

// 冻结。
const o = Object.freeze(obj);

// 返回值和我们传入的对象相同。
o === obj; // true

// 对象已冻结。
Object.isFrozen(obj); // === true

// 现在任何更改都会失败。
obj.foo = "quux"; // 静默但什么都没做
// 静默且没有添加属性
obj.quaxxor = "the friendly duck";

// 严格模式下，这样的尝试会抛出 TypeError
function fail() {
  "use strict";
  obj.foo = "sparky"; // 抛出 TypeError
  delete obj.foo; // 抛出 TypeError
  delete obj.quaxxor; // 返回 true，因为属性‘quaxxor’从未被添加过。
  obj.sparky = "arf"; // 抛出 TypeError
}

fail();

// 尝试通过 Object.defineProperty 更改；
// 下面的两个语句都会抛出 TypeError。
Object.defineProperty(obj, "ohai", { value: 17 });
Object.defineProperty(obj, "foo", { value: "eit" });

// 同样无法更改原型
// 下面的两个语句都会抛出 TypeError。
Object.setPrototypeOf(obj, { x: 20 });
obj.__proto__ = { x: 20 };
```

### 冻结数组

```js
const a = [0];
Object.freeze(a); // 数组现在开始无法被修改

a[0] = 1; // 静默失败

// 严格模式下，这样的尝试将抛出 TypeError
function fail() {
  "use strict";
  a[0] = 1;
}

fail();

// 尝试在数组末尾追加元素
a.push(2); // 抛出 TypeError
```

被冻结的对象是*不可变*的。但也不总是这样。以下示例显示被冻结的对象不是*常量*（浅冻结）。

```js
const obj1 = {
  internal: {},
};

Object.freeze(obj1);
obj1.internal.a = "aValue";

obj1.internal.a; // 'aValue'
```

对于一个常量对象，整个引用图（直接和间接引用其他对象）只能引用不可变的冻结对象。冻结的对象被认为是不可变的，因为整个对象中的整个对象*状态*（对其他对象的值和引用）是固定的。注意，字符串、数字和布尔值总是不可变的，而函数和数组是对象。

#### 什么是“浅冻结”？

调用 `Object.freeze(object)` 的结果仅适用于 `object` 本身的直接属性，并且*只会*在 `object` 上防止未来的属性添加、删除，或重新赋值的操作。如果这些属性的值本身是对象，这些对象不会被冻结，并且可能成为属性添加、删除，或重新赋值操作的目标。

```js
const employee = {
  name: "Mayank",
  designation: "Developer",
  address: {
    street: "Rohini",
    city: "Delhi",
  },
};

Object.freeze(employee);

employee.name = "Dummy"; // 在非严格模式下静默失败
employee.address.city = "Noida"; // 可以修改子对象的属性

console.log(employee.address.city); // "Noida"
```

为了使对象不可变，需要递归地冻结每个对象类型的属性（深冻结）。当且仅当你知道对象在引用图中不包含[循环引用](<https://zh.wikipedia.org/wiki/環_(圖論)>)时，可以根据你的设计逐个案例地使用该模式，否则会导致无限循环。`deepFreeze()` 的一个增强功能是添加一个内部函数，该函数接收一个路径（例如一个数组）参数，这样可以在调用 `deepFreeze()` 递归地冻结对象时，避免冻结正在被处理的对象。但仍有可能会冻结不应该被冻结的对象，例如 [`window`](/zh-CN/docs/Web/API/Window)。

```js
function deepFreeze(object) {
  // 获取对象的属性名
  const propNames = Reflect.ownKeys(object);

  // 冻结自身前先冻结属性
  for (const name of propNames) {
    const value = object[name];

    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}

const obj2 = {
  internal: {
    a: null,
  },
};

deepFreeze(obj2);

obj2.internal.a = "anotherValue"; // 非严格模式下会静默失败
obj2.internal.a; // null
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
