---
title: Function.displayName
slug: Web/JavaScript/Reference/Global_Objects/Function/displayName
---

{{JSRef}} {{non-standard_header}}

**`function.displayName`** 属性获取函数的显示名称

## Description 描述

当一个函数的 `displayName` 属性被定义，这个函数的 `displayName` 属性将返回显示名称。

```js
function doSomething() {}

console.log(doSomething.displayName); // "undefined"

var popup = function (content) {
  console.log(content);
};

popup.displayName = "Show Popup";

console.log(popup.displayName); // "Show Popup"
```

可以在函数表达式重定义函数的显示名称{{jsxref("Functions", "function expression", "", 1)}}:

```js
var object = {
  someMethod: function () {},
};

object.someMethod.displayName = "someMethod";

console.log(object.someMethod.displayName); // logs "someMethod"

try {
  someMethod;
} catch (e) {
  console.log(e);
}
// ReferenceError: someMethod is not defined
```

可以动态修改函数的显示名称：

```js
var object = {
  // anonymous
  someMethod: function (value) {
    arguments.callee.displayName = "someMethod (" + value + ")";
  },
};

console.log(object.someMethod.displayName); // "undefined"

object.someMethod("123");
console.log(object.someMethod.displayName); // "someMethod (123)"
```

## Examples 例子

这个显示名称通常在控制台和配置文件中，用它来提醒对它背后的真实函数名 {{jsxref("Function.name", "func.name")}}的引用。例如：

通过如下的举例，显示的名称应该显示像"function My Function()"

```js
var a = function () {};
a.displayName = "My Function";

a; // "function My Function()"
```

## Specifications 规范

不属于任何规范

## 浏览器兼容性

{{Compat}}
