---
title: Object.isFrozen()
slug: Web/JavaScript/Reference/Global_Objects/Object/isFrozen
---

{{JSRef}}

**`Object.isFrozen()`** 方法判断一个对象是否被{{jsxref("Object.freeze()", "冻结", "", 1)}}。

## 语法

```plain
Object.isFrozen(obj)
```

### 参数

- `obj`
  - : 被检测的对象。

### 返回值

表示给定对象是否被冻结的{{jsxref("Boolean")}}。

## 描述

一个对象是冻结的是指它不可{{jsxref("Object.isExtensible", "扩展")}}，所有属性都是不可配置的，且所有数据属性（即没有 getter 或 setter 组件的访问器的属性）都是不可写的。

## 示例

```js
// 一个对象默认是可扩展的，所以它也是非冻结的。
Object.isFrozen({}); // === false

// 一个不可扩展的空对象同时也是一个冻结对象。
var vacuouslyFrozen = Object.preventExtensions({});
Object.isFrozen(vacuouslyFrozen) //=== true;

// 一个非空对象默认也是非冻结的。
var oneProp = { p: 42 };
Object.isFrozen(oneProp) //=== false

// 让这个对象变的不可扩展，并不意味着这个对象变成了冻结对象，
// 因为 p 属性仍然是可以配置的 (而且可写的).
Object.preventExtensions(oneProp);
Object.isFrozen(oneProp) //=== false

// 此时，如果删除了这个属性，则它会成为一个冻结对象。
delete oneProp.p;
Object.isFrozen(oneProp) //=== true

// 一个不可扩展的对象，拥有一个不可写但可配置的属性，则它仍然是非冻结的。
var nonWritable = { e: "plep" };
Object.preventExtensions(nonWritable);
Object.defineProperty(nonWritable, "e", { writable: false }); // 变得不可写
Object.isFrozen(nonWritable) //=== false

// 把这个属性改为不可配置，会让这个对象成为冻结对象。
Object.defineProperty(nonWritable, "e", { configurable: false }); // 变得不可配置
Object.isFrozen(nonWritable) //=== true

// 一个不可扩展的对象，拥有一个不可配置但可写的属性，则它仍然是非冻结的。
var nonConfigurable = { release: "the kraken!" };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, "release", { configurable: false });
Object.isFrozen(nonConfigurable) //=== false

// 把这个属性改为不可写，会让这个对象成为冻结对象。
Object.defineProperty(nonConfigurable, "release", { writable: false });
Object.isFrozen(nonConfigurable) //=== true

// 一个不可扩展的对象，值拥有一个访问器属性，则它仍然是非冻结的。
var accessor = { get food() { return "yum"; } };
Object.preventExtensions(accessor);
Object.isFrozen(accessor) //=== false

// ...但把这个属性改为不可配置，会让这个对象成为冻结对象。
Object.defineProperty(accessor, "food", { configurable: false });
Object.isFrozen(accessor) //=== true

// 使用 Object.freeze 是冻结一个对象最方便的方法。
var frozen = { 1: 81 };
Object.isFrozen(frozen) //=== false
Object.freeze(frozen);
Object.isFrozen(frozen) //=== true

// 一个冻结对象也是一个密封对象。
Object.isSealed(frozen) //=== true

// 当然，更是一个不可扩展的对象。
Object.isExtensible(frozen) //=== false
```

## 注意

在 ES5 中，如果参数不是一个对象类型，将抛出一个{{jsxref("TypeError")}}异常。在 ES2015 中，非对象参数将被视为一个冻结的普通对象，因此会返回`true`。

```js
Object.isFrozen(1);
// TypeError: 1 is not an object (ES5 code)

Object.isFrozen(1);
// true                          (ES2015 code)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
