---
title: 'TypeError: can''t define property "x": "obj" is not extensible'
slug: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
---

{{jsSidebar("Errors")}}

## 错误提示

```plain
TypeError: can't define property "x": "obj" is not extensible (Firefox)
TypeError: Cannot define property: "x", object is not extensible. (Chrome)
```

## 错误类型

{{jsxref("TypeError")}}

## 哪里出错了？

通常情况下，对象是可以进行扩展的，即可以向其添加新的属性。然而当使用 {{jsxref("Object.preventExtensions()")}} 将一个对象标记为不再可以扩展的情况下，就无法对该对象添加在其被标记为不可扩展之前所拥有的属性之外的新属性了。

## 示例

在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下，向已经标记为不可扩展的对象添加新属性会报 TypeError 错误。而在非严格模式下，添加属性“x”会被静默忽略。

```js example-bad
"use strict";

var obj = {};
Object.preventExtensions(obj);

obj.x = "foo";
// TypeError: can't define property "x": "obj" is not extensible
```

在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)和非严格模式下两种模式下，调用{{jsxref("Object.defineProperty()")}} 向标记为不可扩展的对象添加新属性都会报 TypeError 错误。

```js example-bad
var obj = {};
Object.preventExtensions(obj);

Object.defineProperty(obj, "x", { value: "foo" });
// TypeError: can't define property "x": "obj" is not extensible
```

为了修复这个错误，你可以彻底移除 {{jsxref("Object.preventExtensions()")}} 语句，或者将其移动位置，使得属性在对象被标记为不可扩展之前添加。当然如果不需要试图添加的属性的话，你也可以将其移除。

```js example-good
"use strict";

var obj = {};
obj.x = "foo"; // add property first and only then prevent extensions

Object.preventExtensions(obj);
```

## 相关内容

- {{jsxref("Object.preventExtensions()")}}
