---
title: Object.prototype.__lookupGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__
---

{{JSRef("Global_Objects", "Object")}} {{ Non-standard_header }} {{ Deprecated_header }}

## 概述

**`__lookupGetter__`** 方法会返回当前对象上指定属性的**属性读取访问器函数（getter）。**

## 语法

```plain
obj.__lookupGetter__(sprop)
```

### 参数

- `sprop`
  - : 属性名

## 示例

```js
var obj = {
    get foo() {
        return Math.random() > 0.5 ? "foo" : "bar";
    }
};

obj.__lookupGetter__("foo")
// (function (){return Math.random() > 0.5 ? "foo" : "bar"})
```

## 附注

**`__lookupGetter__`** 方法是非标准的，我们应该使用标准中定义的方法来完成同样的事情，那就是 {{jsxref("Object.getOwnPropertyDescriptor()")}} 方法：

```js
var obj = {
    get foo() {
        return Math.random() > 0.5 ? "foo" : "bar";
    }
};

Object.getOwnPropertyDescriptor(obj, "foo").get
// (function (){return Math.random() > 0.5 ? "foo" : "bar"})
```

如果那个访问器属性是继承来的，你还需要使用 {{jsxref("Object.getPrototypeOf()")}}：

```js
var obj = {};
var prototype = Object.getPrototypeOf(obj);
Object.getOwnPropertyDescriptor(prototype, "foo").get
// function __proto__() {[native code]}
```

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Object.__lookupSetter__", "Object.prototype.__lookupSetter__()")}}
- {{jsxref("Operators/get", "get")}} 运算符
- {{jsxref("Object.getOwnPropertyDescriptor()")}} 和 {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.__defineGetter__", "Object.prototype.__defineGetter__()")}}
- {{jsxref("Object.__defineSetter__", "Object.prototype.__defineSetter__()")}}
- [JS 指南：定义访问器属性](/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters)
