---
title: Symbol.iterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/iterator
---

{{JSRef}}

**Symbol.iterator** 为每一个对象定义了默认的迭代器。该迭代器可以被 [`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 循环使用。

{{js_property_attributes(0,0,0)}}

## 描述

当需要对一个对象进行迭代时（比如开始用于一个`for..of`循环中），它的`@@iterator`方法都会在不传参情况下被调用，返回的**迭代器**用于获取要迭代的值。

一些内置类型拥有默认的迭代器行为，其他类型（如 {{jsxref("Object")}}）则没有。下表中的内置类型拥有默认的`@@iterator`方法：

- {{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}
- {{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}
- {{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}
- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
- {{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}

更多信息请参见[迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)。

## 示例

### 自定义迭代器

我们可以像下面这样创建自定义的迭代器：

```js
var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable] // [1, 2, 3]
```

### 不符合标准的迭代器

如果一个迭代器 `@@iterator` 没有返回一个迭代器对象，那么它就是一个不符合标准的迭代器，这样的迭代器将会在运行期抛出异常，甚至非常诡异的 Bug。

```js
var nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () => 1
[...nonWellFormedIterable] // TypeError: [] is not a function
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}
- {{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}
- {{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}
- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
- {{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}
