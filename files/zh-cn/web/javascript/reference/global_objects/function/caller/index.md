---
title: Function.caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
---

{{JSRef("Global_Objects", "Function")}} {{non-standard_header}}

## 概述

返回调用指定函数的函数。

该属性不是 ECMA-262 第 3 版标准的一部分。不过，[SpiderMonkey](/zh-CN/SpiderMonkey) (Mozilla 的 JavaScript 引擎) (查看[Firefox bug 65683](https://bugzil.la/65683)), V8 (Chrome 的 JavaScript 引擎) 和 JScript(IE 的 ECMAScript 实现) 都已经支持了它。

## 描述

如果一个函数 `f` 是在全局作用域内被调用的，则 `f.caller 为` `null`。相反，如果一个函数是在另外一个函数作用域内被调用的，则 `f.caller` 指向调用它的那个函数。

该属性的常用形式 `arguments.callee.caller` 替代了被废弃的 [arguments.caller](/zh-CN/JavaScript/Reference/Functions_and_function_scope/arguments/caller).

### 备注

注意，在使用递归调用时，你不能使用此属性来重现出调用栈。请考虑以下代码：

```js
function f(n) {
  g(n - 1);
}
function g(n) {
  if (n > 0) f(n);
  else stop();
}
f(2);
```

当 `stop()` 函数被调用时，调用栈是这样的：

```js
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

由于下面的表达式为 true (只保留函数最后一次被调用时的 caller)：

```js
stop.caller === g && f.caller === g && g.caller === f;
```

所以如果你尝试在 `stop()` 函数中获取调用栈的话：

```js
var f = stop;
var stack = "调用栈：";
while (f) {
  stack += "\n" + f.name;
  f = f.caller;
}
```

则上面的代码会进入一个死循环。

有一个特殊属性 `__caller__`, 可以返回调用当前函数的函数的活动对象 (可以用来重现出整个调用栈), 但由于安全原因的考虑，该属性已被删除。

## 示例

### 示例：检测一个函数的 `caller` 属性的值

下例用来得出一个函数是被谁调用的。

```js
function myFunc() {
  if (myFunc.caller == null) {
    return "该函数在全局作用域内被调用！";
  } else return "调用我的是函数是" + myFunc.caller;
}
```

## 浏览器兼容性

Function.caller 目前被所有主流浏览器支持：Firefox、Safari、Chrome、Opera 和 IE。[查看检测结果](http://dl.dropbox.com/u/534786/callertest.html)。
