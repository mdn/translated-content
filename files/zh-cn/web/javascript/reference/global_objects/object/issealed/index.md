---
title: Object.isSealed()
slug: Web/JavaScript/Reference/Global_Objects/Object/isSealed
---

{{JSRef}}

**`Object.isSealed()`** 静态方法判断一个对象是否被密封。

{{InteractiveExample("JavaScript Demo: Object.isSealed()")}}

```js interactive-example
const object1 = {
  property1: 42,
};

console.log(Object.isSealed(object1));
// Expected output: false

Object.seal(object1);

console.log(Object.isSealed(object1));
// Expected output: true
```

## 语法

```js-nolint
Object.isSealed(obj)
```

### 参数

- `obj`
  - : 要被检查的对象。

### 返回值

一个表示给定对象是否被密封的{{jsxref("Boolean", "布尔值", "", 1)}}。

## 描述

如果这个对象是密封的，则返回 `true`，否则返回 `false`。密封对象是指那些不{{jsxref("Object.isExtensible", "可扩展", "", 1)}}的，且所有自有属性都不可配置且因此不可删除（但不一定是不可写）的对象。

## 示例

### 使用 Object.isSealed()

```js
// 新建的对象默认不是密封的。
const empty = {};
Object.isSealed(empty); // false

// 如果你令一个空对象不可扩展，则它同时也会变成个密封对象。
Object.preventExtensions(empty);
Object.isSealed(empty); // true

// 但如果这个对象不是空对象，则它不会变成密封对象，因为密封对象的所有自身属性必须是不可配置的。
const hasProp = { fee: "fie foe fum" };
Object.preventExtensions(hasProp);
Object.isSealed(hasProp); // false

// 如果把这个属性变的不可配置，则这个属性也就成了密封对象。
Object.defineProperty(hasProp, "fee", {
  configurable: false,
});
Object.isSealed(hasProp); // true

// 密封一个对象最简单的方法当然是 Object.seal。
const sealed = {};
Object.seal(sealed);
Object.isSealed(sealed); // true

// 根据定义，密封对象是不可扩展的。
Object.isExtensible(sealed); // false

// 一个密封对象可能被冻结，但不一定。
Object.isFrozen(sealed); // true
//（所有属性也是不可写的）

const s2 = Object.seal({ p: 3 });
Object.isFrozen(s2); // false
//（'p' 仍然可写）

const s3 = Object.seal({
  get p() {
    return 0;
  },
});
Object.isFrozen(s3); // true
//（对于访问器属性，只有可配置性才有影响）
```

## 非对象参数

在 ES5 中，如果该方法的参数不是一个对象（而是一个基本类型值），则会引发 {{jsxref("TypeError")}} 异常。在 ES2015 中，如果传递一个非对象参数，则该方法将返回 `true` 而不会产生任何错误，因为按照定义，基本类型值是不可变的。

```js
Object.isSealed(1);
// TypeError: 1 is not an object (ES5 code)

Object.isSealed(1);
// true                          (ES2015 code)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Object.seal()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
