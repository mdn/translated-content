---
title: SharedArrayBuffer[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Symbol.species
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

**`SharedArrayBuffer[Symbol.species]`** 静态访问器属性返回用于构造 `SharedArrayBuffer` 方法返回值的构造函数。

> [!WARNING]
> `[Symbol.species]` 的存在允许任意代码的执行，这可能导致安全漏洞。它还使某些优化变得更加困难。引擎实现者正在[调查是否要移除此特性](https://github.com/tc39/proposal-rm-builtin-subclassing)。如果可能，请避免依赖它。

## 语法

```js-nolint
SharedArrayBuffer[Symbol.species]
```

### 返回值

调用 `get [Symbol.species]` 构造函数（`this`）的值。返回值用于构造创建新数组缓冲区的数组缓冲区方法的返回值。

## 描述

`[Symbol.species]` 访问器属性返回 `SharedArrayBuffer` 对象的构造函数。子类构造函数可以重写它来改变构造函数赋值。默认实现大概是：

```js
// 用于说明而假设的底层实现
class SharedArrayBuffer {
  static get [Symbol.species]() {
    return this;
  }
}
```

由于这种多态实现，默认情况下，派生子类的 `[Symbol.species]` 也会返回自身的构造函数。

```js
class SubArrayBuffer extends SharedArrayBuffer {}
SubArrayBuffer[Symbol.species] === SharedArrayBuffer; // true
```

在调用不会更改现有数组，而是返回一个新的数组缓冲实例的方法（例如，[`slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice)）时，该数组的 `constructor[Symbol.species]` 会被访问。返回的构造函数将被用于构造该数组缓冲区方法的返回值。

## 示例

### 普通对象中的 species

`[Symbol.species]` 属性返回默认的构造函数，即 `SharedArrayBuffer` 的构造函数 `SharedArrayBuffer`。

```js
SharedArrayBuffer[Symbol.species]; // function SharedArrayBuffer()
```

### 派生对象中的 species

在自定义的 `SharedArrayBuffer` 子类实例中，例如 `MySharedArrayBuffer`，`MySharedArrayBuffer` 的 species 是 `MySharedArrayBuffer` 构造函数。但是，你可能希望重写它，以便在派生类方法中返回父类 `SharedArrayBuffer` 对象：

```js
class MySharedArrayBuffer extends SharedArrayBuffer {
  // 重写 MySharedArrayBuffer species 来返回父类 SharedArrayBuffer 构造函数
  static get [Symbol.species]() {
    return SharedArrayBuffer;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("Symbol.species")}}
