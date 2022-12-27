---
title: Object.prototype.__defineSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__
---

{{JSRef("Global_Objects", "Object")}} {{non-standard_header}} {{deprecated_header}}

## 概述

`__defineSetter__ 方法可以将一个函数绑定在当前对象的指定属性`上，当那个属性被赋值时，你所绑定的函数就会被调用。

## 语法

```plain
obj.__defineSetter__(prop, fun)
```

### 参数

- `prop`
  - : 一个字符串，表示指定的属性名。
- `fun`

  - : 一个函数，当试图去为 `sprop` 属性赋值时被调用。通常你要给这个函数指定一个参数：

    ```plain
    function(val) { . . . }
    ```

    - `val`
      - : 任意的参数名，在 fun 被调用时，该参数的值就是尝试给 `sprop` 属性所赋的值。

## 描述

`__defineSetter__` 方法可以为一个已经存在的对象设置（新建或修改）访问器属性，而 {{jsxref("Operators/set", "对象字面量中的 set 语法", "", 1)}} 只能在新建一个对象时使用。

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Object.prototype.__defineGetter__()")}}
- {{jsxref("Operators/set", "set")}} operator
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.prototype.__lookupSetter__()")}}
- [JS 指南：定义 Getter 和 Setter](/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters)
- [\[个人博客\] defineGetter\_\_ 和 \_\_defineSetter\_\_](http://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) 已被废弃
