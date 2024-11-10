---
title: Iterator() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Iterator
l10n:
  sourceCommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{JSRef}}{{SeeCompatTable}}

**`Iterator()`** 构造函数旨在用作创建迭代器的其他类的[超类](/zh-CN/docs/Web/JavaScript/Reference/Classes/extends)。它在本身被构造时会抛出错误。

## 语法

```js-nolint
new Iterator()
```

> **备注：** `Iterator()` 只能通过 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 构造。尝试不带 `new` 调用会抛出 {{jsxref("TypeError")}}。此外，`Iterator()` 实际上不能被构造，其通常是通过 `super()` 调用在子类的构造函数中隐式构造的。

### 参数

无。

### 返回值

一个新的 {{jsxref("Iterator")}} 对象。

### 异常

- {{jsxref("TypeError")}}
  - : 当 [`new.target`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target) 是 `Iterator` 函数本身时，例如当 `Iterator` 构造函数本身被构造时。

## 描述

`Iterator` 代表一个*抽象类*——一个为其子类提供通用工具方法的类，但其本身并不用于实例化。它是所有其他迭代器类的超类，用于创建实现特定迭代算法的子类——即，`Iterator` 的所有子类必须按照[迭代器协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器协议)的要求实现 `next()` 方法。由于 `Iterator` 本身并不提供 `next()` 方法，因此直接构造 `Iterator` 并不合理。

你也可以使用 {{jsxref("Iterator.from()")}} 来从一个现有的可迭代对象或迭代器对象创建一个 `Iterator` 实例。

## 示例

### 继承 Iterator

以下示例定义了一个允许迭代的自定义数据结构——`Range`。使一个对象可迭代最简单的方法是提供一个生成器函数的形式的 [`[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) 方法：

```js
class Range {
  #start;
  #end;
  #step;

  constructor(start, end, step = 1) {
    this.#start = start;
    this.#end = end;
    this.#step = step;
  }

  *[Symbol.iterator]() {
    for (let value = this.#start; value <= this.#end; value += this.#step) {
      yield value;
    }
  }
}

const range = new Range(1, 5);
for (const num of range) {
  console.log(num);
}
```

上面的代码是可行的，但它不如内置的迭代器。有两个问题：

- 返回的迭代器继承自 {{jsxref("Generator")}}，这意味着对 `Generator.prototype` 的修改将会影响返回的迭代器，这是一种抽象泄漏。
- 返回的迭代器没有继承自自定义原型，这使得为迭代器添加额外的方法变得更加困难。

我们可以通过继承 `Iterator` 来模仿内置迭代器，例如 [map 迭代器](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)的实现。这使得我们可以定义额外的属性，例如 [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)，同时使得迭代器辅助方法对返回的迭代器可用。

```js
class Range {
  #start;
  #end;
  #step;

  constructor(start, end, step = 1) {
    this.#start = start;
    this.#end = end;
    this.#step = step;
  }

  static #RangeIterator = class extends Iterator {
    #cur;
    #s;
    #e;
    constructor(range) {
      super();
      this.#cur = range.#start;
      this.#s = range.#step;
      this.#e = range.#end;
    }
    static {
      Object.defineProperty(this.prototype, Symbol.toStringTag, {
        value: "Range Iterator",
        configurable: true,
        enumerable: false,
        writable: false,
      });

      // 避免 #RangeIterator 被外部访问
      delete this.prototype.constructor;
    }
    next() {
      if (this.#cur > this.#e) {
        return { value: undefined, done: true };
      }
      const res = { value: this.#cur, done: false };
      this.#cur += this.#s;
      return res;
    }
  };

  [Symbol.iterator]() {
    return new Range.#RangeIterator(this);
  }
}

const range = new Range(1, 5);
for (const num of range) {
  console.log(num);
}
```

这种继承模式对于创建许多自定义迭代器很有用。如果你有一个现有的可迭代对象或迭代器对象，它没有继承自 `Iterator`，而你只想在它上调用迭代器辅助方法，那么你可以可以使用 {{jsxref("Iterator.from()")}} 来创建一次性的 `Iterator` 实例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Iterator` 的 polyfill](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.from()")}}
