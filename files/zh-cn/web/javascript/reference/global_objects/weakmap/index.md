---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
---

**`WeakMap`** 是一种**键值对**的集合，其中的键必须是对象或[非全局注册的符号](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)，且值可以是任意的 [JavaScript 类型](/zh-CN/docs/Web/JavaScript/Guide/Data_structures)，并且不会创建对它的键的强引用。换句话说，一个对象作为 `WeakMap` 的键存在，不会阻止该对象被垃圾回收。一旦一个对象作为键被回收，那么在 `WeakMap` 中相应的值便成为了进行垃圾回收的候选对象，只要它们没有其他的引用存在。唯一可以作为 `WeakMap` 的键的原始类型是[非全局注册的符号](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)，因为非全局注册的符号是保证唯一的，并且不能被重新创建。

`WeakMap` 允许将数据与对象相关联，而不阻止键对象被垃圾回收，即使值引用了键。然而，`WeakMap` 并不允许观察其键的生命周期，这就是为什么它不允许枚举；如果 `WeakMap` 提供了任何获得其键的列表的方法，那么这些列表将会依赖于垃圾回收的状态，这引入了不确定性。如果你想要可以获取键的列表，你应该使用 {{jsxref("Map")}} 而不是 `WeakMap`。

你可以在[带键的集合](/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections)指南的 [WeakMap 对象](/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object)部分了解更多关于 `WeakMap` 的内容。

## 描述

WeakMap 的键必须是可被垃圾回收的。大多数{{Glossary("Primitive", "原始数据类型")}}可以任意地被创建，且没有生命周期，因此不能作为键。对象和[非全局注册的符号](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)都可以作为键，因为它们是可被垃圾回收的。

### WeakMap 的意义

在 JavaScript 里，map API *可以*通过使其四个 API 方法共用两个数组（一个存放键，一个存放值）来实现。给这种映射设置值时会同时将键和值添加到这两个数组的末尾。从而使得键和值的索引在两个数组中相对应。当从该映射取值的时候，需要遍历所有的键，然后使用索引从存储值的数组中检索出相应的值。

但这样的实现会有两个很大的缺点：

1. 首先赋值和搜索操作都是 `O(n)` 的时间复杂度（_n_ 是键值对的个数），因为这两个操作都需要遍历全部整个数组来进行匹配。
2. 另外一个缺点是可能会导致内存泄漏，因为数组会一直引用着每个键和值。这种引用使得垃圾回收算法不能回收处理他们，即使没有其他任何引用存在了。

相较之下，`WeakMap` 的键对象会强引用其值，直到该键对象被垃圾回收，但从那时起，它会变为弱引用。因此，`WeakMap`：

- 不会阻止垃圾回收，直到垃圾回收器移除了键对象的引用
- 任何值都可以被垃圾回收，只要它们的键对象没有被 `WeakMap` 以外的地方引用

当将键映射到与键相关的信息，而该信息*仅*在键未被垃圾回收的情况下具有价值时，`WeakMap` 是一个特别有用的构造。

但因为 `WeakMap` 不允许观察其键的生命周期，所以其键是不可枚举的。没有方法可以获得键的列表。如果有的话，该列表将会依赖于垃圾回收的状态，这引入了不确定性。如果你想要可以获得键的列表，你应该使用 {{jsxref("Map")}}。

## 构造函数

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : 创建一个新的 `WeakMap` 对象。

## 实例属性

这些属性在 `WeakMap.prototype` 上定义，并且由所有 `WeakMap` 实例所共享。

- {{jsxref("Object/constructor", "WeakMap.prototype.constructor")}}
  - : 创建了该实例对象的构造函数。对于 `WeakMap` 实例，初始值是 {{jsxref("WeakMap/WeakMap", "WeakMap")}} 构造函数。
- `WeakMap.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值是字符串 `"WeakMap"`。该属性在 {{jsxref("Object.prototype.toString()")}} 中使用。

## 实例方法

- {{jsxref("WeakMap.prototype.delete()")}}
  - : 删除任何与 `key` 关联的值。删除之后，`WeakMap.prototype.has(key)` 将会返回 `false`。
- {{jsxref("WeakMap.prototype.get()")}}
  - : 返回与 `key` 关联的值，如果不存在则返回 `undefined`。
- {{jsxref("WeakMap.prototype.has()")}}
  - : 返回一个布尔值，断言某个值是否已经与 `WeakMap` 对象中的 `key` 关联。
- {{jsxref("WeakMap.prototype.set()")}}
  - : 给 `WeakMap` 对象中的 `key` 设置 `value`。返回该 `WeakMap` 对象。

## 示例

### 使用 WeakMap

```js
const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = function () {};
const o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // value 可以是任意值，包括一个对象或一个函数
wm2.set(o2, undefined);
wm2.set(wm1, wm2); // 键和值可以是任意对象，甚至另外一个 WeakMap 对象

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined，设置的值就是 undefined
wm2.get(o3); // undefined，wm2 中没有 o3 这个键

wm1.has(o2); // true
wm2.has(o2); // true（即使值是 undefined）
wm2.has(o3); // false

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
```

### 实现一个带有 .clear() 方法的类 WeakMap 的类

```js
class ClearableWeakMap {
  #wm;
  constructor(init) {
    this.#wm = new WeakMap(init);
  }
  clear() {
    this.#wm = new WeakMap();
  }
  delete(k) {
    return this.#wm.delete(k);
  }
  get(k) {
    return this.#wm.get(k);
  }
  has(k) {
    return this.#wm.has(k);
  }
  set(k, v) {
    this.#wm.set(k, v);
    return this;
  }
}
```

### 模拟私有成员

开发者可以使用 `WeakMap` 关联对象与私有数据，从而获得以下好处：

- 与 {{jsxref("Map")}} 相比，WeakMap 不持有键对象的强引用，因此元数据与对象本身共享同样的生命周期，避免内存泄漏。
- 与使用不可枚举对象和/或 {{jsxref("Symbol")}} 属性相比，WeakMap 位于对象外部，没有办法通过像 {{jsxref("Object.getOwnPropertySymbols")}}等的反射方法来检索元数据。
- 与[闭包](/zh-CN/docs/Web/JavaScript/Guide/Closures)相比，构造函数可以复用同一个 WeakMap 对象来创建所有实例，从而节省内存，并且允许同一个类创建的不同实例读取彼此的私有成员。

```js
let Thing;

{
  const privateScope = new WeakMap();
  let counter = 0;

  Thing = function () {
    this.someProperty = "foo";

    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function () {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function () {
    return privateScope.get(this).hidden;
  };
}

console.log(typeof privateScope);
// "undefined"

const thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
```

这与下面使用了[私有字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_elements)的示例类似：

```js
class Thing {
  static #counter = 0;
  #hidden;
  constructor() {
    this.someProperty = "foo";
    this.#hidden = ++Thing.#counter;
  }
  showPublic() {
    return this.someProperty;
  }
  showPrivate() {
    return this.#hidden;
  }
}

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
```

### 关联元数据

`WeakMap` 可用于将元数据与对象关联，而不影响对象的生命周期。这与私有成员示例非常相似，因为私有成员也是以外部的形式模拟的元数据，不参与[原型继承](/zh-CN/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)。

这个用例可以扩展到已经创建的对象上。例如，在网页上，我们可能希望将额外的数据与 DOM 元素相关联，而 DOM 元素可能在之后访问这些数据。一种常见的做法是将数据附加为属性：

```js
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.clicked = false;
  button.addEventListener("click", () => {
    button.clicked = true;
    const currentButtons = [...document.querySelectorAll(".button")];
    if (currentButtons.every((button) => button.clicked)) {
      console.log("所有按钮被都被点击了！");
    }
  });
});
```

这种方法是有效的，但是有一些缺点：

- `clicked` 属性是可枚举的，因此它会出现在 [`Object.keys(button)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)、[`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环中，等等。可以通过使用 {{jsxref("Object.defineProperty()")}} 来缓解，但这会使代码更冗长。
- `clicked` 属性是一个普通的字符串属性，因此它可以被其他代码访问和覆盖。可以通过使用 {{jsxref("Symbol")}} 键来缓解，但键仍然可以通过 {{jsxref("Object.getOwnPropertySymbols()")}} 访问。

使用 `WeakMap` 来解决这些问题：

```js
const buttons = document.querySelectorAll(".button");
const clicked = new WeakMap();
buttons.forEach((button) => {
  clicked.set(button, false);
  button.addEventListener("click", () => {
    clicked.set(button, true);
    const currentButtons = [...document.querySelectorAll(".button")];
    if (currentButtons.every((button) => clicked.get(button))) {
      console.log("所有按钮被都被点击了！");
    }
  });
});
```

这段代码里，只有能访问 `clicked` 的代码才能知道每个按钮的点击状态，而外部代码就不能修改这些状态。此外，如果任何按钮从 DOM 中删除，那么相应的元数据将自动进行垃圾回收。

### 缓存

你可以将传递给函数的对象与函数的结果相关联，从而在再次传入相同的对象时，可以返回缓存的结果而无需再次执行函数。如果该函数是纯函数（即它不会改变任何外部对象或导致其他可观察到的副作用）的话，这非常有用。

```js
const cache = new WeakMap();
function handleObjectValues(obj) {
  if (cache.has(obj)) {
    return cache.get(obj);
  }
  const result = Object.values(obj).map(heavyComputation);
  cache.set(obj, result);
  return result;
}
```

只有当函数的输入是对象时才有效。此外，即使输入不再传入，结果依然永远保留在缓存中，更有效的方法是将 {{jsxref("Map")}} 与 {{jsxref("WeakRef")}} 对象配对使用，这允许你将任何类型的输入值与各自的（很可能的）计算结果关联。有关更多详细信息，请参阅 [WeakRef 和 FinalizationRegistry](/zh-CN/docs/Web/JavaScript/Guide/Memory_management#weakrefs_and_finalizationregistry) 示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `WeakMap` 的 polyfill](https://github.com/zloirock/core-js#weakmap)
- [带键的集合](/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_对象)
- [使用 ECMAScript 6 WeakMap 隐藏实现细节](https://fitzgen.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html)，作者：尼克·菲茨杰拉德（2014）
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
