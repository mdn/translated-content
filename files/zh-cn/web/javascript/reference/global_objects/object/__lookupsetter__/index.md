---
title: Object.prototype.__lookupSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__
---

{{JSRef}} {{deprecated_header}}**`__lookupSetter__`** 方法是用来返回一个对象的某个属性上绑定了 setter（设置器）的钩子函数的引用。

## 语法

```plain
obj.__lookupSetter__(sprop)
```

### 参数说明

- `sprop`
  - : 一个字符串类型，表示要返回的 setter 钩子的函数名。

### 返回值

一个绑定了 setter 的特殊属性的函数引用。

## 描述

如果一个 setter 被定义在了一个对象的属性上，则不能直接通过该属性来获取引用 setter 所设置的钩子的函数，因为该属性是该函数的返回值，但，\_\_lookupSetter\_\_ 可以被用来获取对 setter 函数的引用。

不过现在可以使用标准的方法：

{{jsxref("Object.getOwnPropertyDescriptor()")}}.

## 示例

```js
var obj = {
  set foo(value) {
    this.bar = value;
  }
};


// 非标准，并且不推荐使用。
obj.__lookupSetter__('foo')
// (function(value) { this.bar = value; })


// 标准且推荐使用的方式。
Object.getOwnPropertyDescriptor(obj, 'foo').set;
// (function(value) { this.bar = value; })
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Object.prototype.__lookupGetter__()")}}
- {{jsxref("Functions/set", "set")}} operator
- {{jsxref("Object.getOwnPropertyDescriptor()")}} and {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.prototype.__defineGetter__()")}}
- {{jsxref("Object.prototype.__defineSetter__()")}}
- [JS Guide: Defining Getters and Setters](/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters)
