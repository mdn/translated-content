---
title: Object.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
---

{{JSRef}}

**`Object.defineProperty()`** 静态方法会直接在一个对象上定义一个新属性，或修改其现有属性，并返回此对象。

{{EmbedInteractiveExample("pages/js/object-defineproperty.html")}}

## 语法

```js-nolint
Object.defineProperty(obj, prop, descriptor)
```

### 参数

- `obj`
  - : 要定义属性的对象。
- `prop`
  - : 一个字符串或 {{jsxref("Symbol")}}，指定了要定义或修改的属性键。
- `descriptor`
  - : 要定义或修改的属性的描述符。

### 返回值

传入函数的对象，其指定的属性已被添加或修改。

## 描述

`Object.defineProperty()` 允许精确地添加或修改对象上的属性。通过[赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment)添加的普通属性会在枚举属性时（例如 {{jsxref("Statements/for...in", "for...in")}}、{{jsxref("Object.keys()")}} 等）出现，它们的值可以被更改，也可以被{{jsxref("Operators/delete", "删除", "", 1)}}。此方法允许更改这些额外细节，以使其不同于默认值。默认情况下，使用 `Object.defineProperty()` 添加的属性是不可写、不可枚举和不可配置的。此外，`Object.defineProperty()` 使用 [`[[DefineOwnProperty]]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) 内部方法，而不是 [`[[Set]]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set)，因此即使属性已经存在，它也不会调用 [setter](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)。

对象中存在的属性描述符有两种主要类型：数据描述符和访问器描述符。**数据描述符**是一个具有可写或不可写值的属性。**访问器描述符**是由 getter/setter 函数对描述的属性。描述符只能是这两种类型之一，不能同时为两者。

数据描述符和访问器描述符都是对象。它们共享以下可选键（请注意：在使用 `Object.defineProperty()` 定义属性的情况下，下述所有键都是**默认值**）：

- `configurable`

  - : 当设置为 `false` 时，

    - 该属性的类型不能在数据属性和访问器属性之间更改，且
    - 该属性不可被删除，且
    - 其描述符的其他属性也不能被更改（但是，如果它是一个可写的数据描述符，则 `value` 可以被更改，`writable` 可以更改为 `false`）。

    **默认值为 `false`。**

- `enumerable`
  - : 当且仅当该属性在对应对象的属性枚举中出现时，值为 `true`。**默认值为 `false`。**

**数据描述符**还具有以下可选键值：

- `value`
  - : 与属性相关联的值。可以是任何有效的 JavaScript 值（数字、对象、函数等）。**默认值为 {{jsxref("undefined")}}。**
- `writable`
  - : 如果与属性相关联的值可以使用[赋值运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators#赋值运算符)更改，则为 `true`。**默认值为 `false`。**

**访问器描述符**还具有以下可选键值：

- `get`
  - : 用作属性 getter 的函数，如果没有 getter 则为 {{jsxref("undefined")}}。当访问该属性时，将不带参地调用此函数，并将 `this` 设置为通过该属性访问的对象（因为可能存在继承关系，这可能不是定义该属性的对象）。返回值将被用作该属性的值。**默认值为 {{jsxref("undefined")}}。**
- `set`
  - : 用作属性 setter 的函数，如果没有 setter 则为 {{jsxref("undefined")}}。当该属性被赋值时，将调用此函数，并带有一个参数（要赋给该属性的值），并将 `this` 设置为通过该属性分配的对象。**默认值为 {{jsxref("undefined")}}。**

如果描述符没有 `value`、`writable`、`get` 和 `set` 键中的任何一个，它将被视为数据描述符。如果描述符同时具有 [`value` 或 `writable`] 和 [`get` 或 `set`] 键，则会抛出异常。

这些属性不一定是描述符本身的属性。继承的属性也会被考虑在内。为了确保这些默认值得到保留，你可以预先冻结描述符对象原型链中的现有对象，明确指定所有选项，或使用 {{jsxref("Object.create", "Object.create(null)")}} 指向 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

```js
const obj = {};
// 1. 使用 null 原型：没有继承的属性
const descriptor = Object.create(null);
descriptor.value = "static";

// 默认情况下，它们不可枚举、不可配置、不可写
Object.defineProperty(obj, "key", descriptor);

// 2. 使用一个包含所有属性的临时对象字面量来明确其属性
Object.defineProperty(obj, "key2", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static",
});

// 3. 重复利用同一对象
function withValue(value) {
  const d =
    withValue.d ||
    (withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value,
    });

  // 避免重复赋值
  if (d.value !== value) d.value = value;

  return d;
}
// 然后
Object.defineProperty(obj, "key", withValue("static"));

// 如果 freeze 可用，防止添加或删除对象原型属性
// （value、get、set、enumerable、writable、configurable）
(Object.freeze || Object)(Object.prototype);
```

当属性已经存在时，`Object.defineProperty()` 会尝试根据描述符和属性的当前配置修改属性。

如果旧描述符的 `configurable` 特性被设置为 `false`，则该属性被称为*不可配置的*。无法更改不可配置的访问器属性的任何特性，也不能将其在数据类型和访问器类型之间切换。对于具有 `writable: true` 的数据属性，可以修改其值并将 `writable` 特性从 `true` 改为 `false`。当试图更改不可配置的属性（除非允许更改 `value` 和 `writable`）时，会抛出 {{jsxref("TypeError")}}，除非在数据属性上定义一个与原始值相同的值。

当当前属性是可配置的时，将特性设置为 `undefined` 可以有效地删除它。例如，如果 `o.k` 是一个访问器属性，`Object.defineProperty(o, "k", { set: undefined })` 将删除 setter，使 `k` 只有 getter 并变成只读的。如果新描述符中缺少一个特性，则会保留旧描述符该特性的值（不会被隐式重新设置为 `undefined`）。通过提供不同类型的描述符，可以在数据属性和访问器属性之间切换。例如，如果新描述符是数据描述符（带有 `value` 或 `writable`），则原始描述符的 `get` 和 `set` 属性都将被删除。

## 示例

### 创建属性

当对象中不存在指定的属性时，`Object.defineProperty()` 将根据描述符创建一个新的属性。描述符中的字段可以省略，省略的字段将使用默认值。

```js
const o = {}; // 创建一个新对象

// 通过 defineProperty 使用数据描述符添加对象属性的示例
Object.defineProperty(o, "a", {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true,
});
// 'a' 属性存在于对象 o 中，其值为 37

// 通过 defineProperty 使用访问器属性描述符添加对象属性的示例
let bValue = 38;
Object.defineProperty(o, "b", {
  get() {
    return bValue;
  },
  set(newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true,
});
o.b; // 38
// 'b' 属性存在于对象 o 中，其值为 38。
// o.b 的值现在始终与 bValue 相同，除非重新定义了 o.b。

// 数据描述符和访问器描述符不能混合使用
Object.defineProperty(o, "conflict", {
  value: 0x9f91102,
  get() {
    return 0xdeadbeef;
  },
});
// 抛出错误 TypeError: value appears only in data descriptors, get appears only in accessor descriptors
```

### 修改属性

当修改已存在的属性时，操作的结果取决于当前属性的配置，可能会成功、不执行任何操作，或抛出一个 {{jsxref("TypeError")}} 异常。

#### Writable 特性

当 `writable` 特性设置为 `false` 时，该属性被称为“不可写的”。它不能被重新赋值。尝试对一个不可写的属性进行写入不会改变它，在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下还会导致错误。

```js
const o = {}; // 创建一个新对象

Object.defineProperty(o, "a", {
  value: 37,
  writable: false,
});

console.log(o.a); // 37
o.a = 25; // 不会抛出错误
// （在严格模式下，即使值相同，它也会抛出异常）
console.log(o.a); // 37；赋值不会成功

// 严格模式
(() => {
  "use strict";
  const o = {};
  Object.defineProperty(o, "b", {
    value: 2,
    writable: false,
  });
  o.b = 3; // 抛出 TypeError: "b" is read-only
  return o.b; // 如果没有上一行的话，会返回 2
})();
```

#### Enumerable 特性

`enumerable` 特性定义了属性是否可以被 {{jsxref("Object.assign()")}} 或[展开运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)所考虑。对于非 {{jsxref("Global_Objects/Symbol", "Symbol")}} 属性，它还定义了属性是否会在 {{jsxref("Statements/for...in", "for...in")}} 循环和 {{jsxref("Object.keys()")}} 中显示。更多信息，请参见[属性的枚举性和所有权](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)。

```js
const o = {};
Object.defineProperty(o, "a", {
  value: 1,
  enumerable: true,
});
Object.defineProperty(o, "b", {
  value: 2,
  enumerable: false,
});
Object.defineProperty(o, "c", {
  value: 3,
}); // enumerable 默认为 false
o.d = 4; // 通过赋值创建属性时 enumerable 默认为 true
Object.defineProperty(o, Symbol.for("e"), {
  value: 5,
  enumerable: true,
});
Object.defineProperty(o, Symbol.for("f"), {
  value: 6,
  enumerable: false,
});

for (const i in o) {
  console.log(i);
}
// 打印 'a' 和 'd'（总是按这个顺序）

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable("a"); // true
o.propertyIsEnumerable("b"); // false
o.propertyIsEnumerable("c"); // false
o.propertyIsEnumerable("d"); // true
o.propertyIsEnumerable(Symbol.for("e")); // true
o.propertyIsEnumerable(Symbol.for("f")); // false

const p = { ...o };
p.a; // 1
p.b; // undefined
p.c; // undefined
p.d; // 4
p[Symbol.for("e")]; // 5
p[Symbol.for("f")]; // undefined
```

#### Configurable 特性

`configurable` 特性控制属性是否可以从对象中删除以及其特性（除了 `value` 和 `writable`）是否可以更改。

以下示例演示了一个不可配置的访问器属性。

```js
const o = {};
Object.defineProperty(o, "a", {
  get() {
    return 1;
  },
  configurable: false,
});

Object.defineProperty(o, "a", {
  configurable: true,
}); // 抛出 TypeError
Object.defineProperty(o, "a", {
  enumerable: true,
}); // 抛出 TypeError
Object.defineProperty(o, "a", {
  set() {},
}); // 抛出 TypeError（set 在之前未定义）
Object.defineProperty(o, "a", {
  get() {
    return 1;
  },
}); // 抛出 TypeError
// （即使新的 get 做的事情完全相同）
Object.defineProperty(o, "a", {
  value: 12,
}); // 抛出 TypeError
// ‘value’只有在 writable 为 true 时才可以被修改

console.log(o.a); // 1
delete o.a; // 无法删除；严格模式下会抛出错误
console.log(o.a); // 1
```

如果 `o.a` 的 `configurable` 特性为 `true`，则不会抛出任何错误，并且该属性会在最后被删除。

以下示例说明了一个不可配置但可写的数据属性。该属性的 `value` 仍然可以被更改，`writable` 也仍然可以从 `true` 切换到 `false`。

```js
const o = {};
Object.defineProperty(o, "b", {
  writable: true,
  configurable: false,
});
console.log(o.b); // undefined
Object.defineProperty(o, "b", {
  value: 1,
}); // 即使 configurable 为 false，因为对象是可写的，我们仍然可以替换属性的值。
console.log(o.b); // 1
o.b = 2; // 我们也可以使用赋值运算符来更改属性的值
console.log(o.b); // 2
// 切换属性的可写性
Object.defineProperty(o, "b", {
  writable: false,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // TypeError: because the property is neither writable nor configurable, it cannot be modified
// 此时，无法再次修改属性 'b' 或者恢复它的可写性。
```

这个示例演示了一个可配置但不可写的数据属性。该属性的 `value` 仍然可以使用 `defineProperty` 进行替换（但不能使用赋值运算符），并且 `writable` 特性仍然可以切换。

```js
const o = {};
Object.defineProperty(o, "b", {
  writable: false,
  configurable: true,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // 我们可以使用 defineProperty 方法替换属性的值
console.log(o.b); // 1
o.b = 2; // 在严格模式下抛出 TypeError：cannot change a non-writable property's value with assignment
```

这个示例演示了一个不可配置且不可写的数据属性。无法更新该属性的任何特性，包括它的 `value` 值。

```js
const o = {};
Object.defineProperty(o, "b", {
  writable: false,
  configurable: false,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // TypeError: the property cannot be modified because it is neither writable nor configurable.
```

### 添加多个属性和默认值

考虑属性默认值应用的方式是非常重要的。通常，在使用[属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)分配一个值和使用 `Object.defineProperty()` 之间存在差异，如下面的示例所示。

```js
const o = {};

o.a = 1;
// 等价于：
Object.defineProperty(o, "a", {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
});

// 另一种情况
Object.defineProperty(o, "a", { value: 1 });
// 等价于：
Object.defineProperty(o, "a", {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false,
});
```

### 自定义 setter 和 getter

下面的例子展示了如何实现一个自存档对象。当设置 `temperature` 属性时，`archive` 数组会收到日志条目。

```js
function Archiver() {
  let temperature = null;
  const archive = [];

  Object.defineProperty(this, "temperature", {
    get() {
      console.log("get!");
      return temperature;
    },
    set(value) {
      temperature = value;
      archive.push({ val: temperature });
    },
  });

  this.getArchive = () => archive;
}

const arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

下面这个例子中，getter 总是会返回一个相同的值。

```js
const pattern = {
  get() {
    return "我总是返回这个字符串，无论你的赋值是什么";
  },
  set() {
    this.myname = "这是我名称的字符串";
  },
};

function TestDefineSetAndGet() {
  Object.defineProperty(this, "myproperty", pattern);
}

const instance = new TestDefineSetAndGet();
instance.myproperty = "test";
console.log(instance.myproperty);
// 我总是返回这个字符串，无论你的赋值是什么

console.log(instance.myname); // 这是我名称的字符串
```

### 继承属性

如果访问器属性被继承，它的 `get` 和 `set` 方法会在派生对象的属性被访问或者修改时被调用。如果这些方法用一个变量存值，该值会被所有对象共享。

```js
function MyClass() {}

let value;
Object.defineProperty(MyClass.prototype, "x", {
  get() {
    return value;
  },
  set(x) {
    value = x;
  },
});

const a = new MyClass();
const b = new MyClass();
a.x = 1;
console.log(b.x); // 1
```

这可以通过将值存储在另一个属性中解决。在 `get` 和 `set` 方法中，`this` 指向某个被访问和修改属性的对象。

```js
function MyClass() {}

Object.defineProperty(MyClass.prototype, "x", {
  get() {
    return this.storedX;
  },
  set(x) {
    this.storedX = x;
  },
});

const a = new MyClass();
const b = new MyClass();
a.x = 1;
console.log(b.x); // undefined
```

与访问器属性不同，数据属性始终在对象自身上设置，而不是一个原型。然而，如果一个不可写的属性被继承，它仍然可以防止修改对象的属性。

```js
function MyClass() {}

MyClass.prototype.x = 1;
Object.defineProperty(MyClass.prototype, "y", {
  writable: false,
  value: 1,
});

const a = new MyClass();
a.x = 2;
console.log(a.x); // 2
console.log(MyClass.prototype.x); // 1
a.y = 2; // 没有作用；严格模式下会报错
console.log(a.y); // 1
console.log(MyClass.prototype.y); // 1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [属性的可枚举性和所有权](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Functions/get", "get")}}
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Reflect.defineProperty()")}}
