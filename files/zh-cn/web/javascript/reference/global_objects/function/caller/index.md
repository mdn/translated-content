---
title: Function.prototype.caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
---

{{JSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!NOTE]
> 在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下，访问函数的 `caller` 属性会抛出错误——该 API 已被移除且没有替代品。这是为了防止代码能够“遍历堆栈”，这既存在安全风险，也严重限制了内联和尾调用优化等优化的可能性。如需更多解释，请阅读 [arguments.callee 的弃用原因](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee#描述)。

{{jsxref("Function")}} 实例的 **`caller`** 访问器属性返回调用该函数的函数。对于[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)、箭头函数、异步函数和生成器函数来说，访问 `caller` 属性会抛出 {{jsxref("TypeError")}}。

## 描述

如果函数 `f` 是在全局作用域内调用的，则 `f.caller` 的值为 {{jsxref("Operators/null", "null")}}；否则它就是调用 `f` 的函数。如果调用 `f` 的函数是一个严格模式函数，则 `f.caller` 的值也是 `null`。

请注意，ECMAScript 规范规定的唯一行为是 `Function.prototype` 具有一个初始的 `caller` 访问器，无论是 `get` 还是 `set` 请求，它都会无条件地抛出 {{jsxref("TypeError")}}（称为“毒丸访问器”）。而且引擎实现不允许改变此语义，除非是非严格的普通函数。在这种情况下，它不能具有严格模式函数的值。`caller` 属性的实际行为如果不是抛出错误，则该行为是由实现定义的。例如，Chrome 将其定义为自有数据属性，而 Firefox 和 Safari 扩展了初始的毒丸访问器 `Function.prototype.caller`，以特殊处理非严格模式的函数的 `this` 值。

```js
(function f() {
  if (Object.hasOwn(f, "caller")) {
    console.log(
      "caller 是一个自有属性，具有描述符",
      Object.getOwnPropertyDescriptor(f, "caller"),
    );
  } else {
    console.log(
      "f 没有名为 caller 的自有属性。尝试获取 f.[[Prototype]].caller",
    );
    console.log(
      Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(f),
        "caller",
      ).get.call(f),
    );
  }
})();

// 在 Chrome 中：
// caller 是一个自有属性，具有描述符 {value: null, writable: false, enumerable: false, configurable: false}

// 在 Firefox 中：
// f 没有名为 caller 的自有属性。尝试获取 f.[[Prototype]].caller
// null
```

此属性取代了 {{jsxref("Functions/arguments", "arguments")}} 对象的已弃用的 `arguments.caller` 属性。

出于安全原因，特殊属性 `__caller__` 已被移除，它返回调用者的激活对象，从而允许重建堆栈。

## 示例

### 检查函数 caller 属性的值

以下代码检查函数的 `caller` 属性的值。

```js
function myFunc() {
  if (myFunc.caller === null) {
    return "该函数是从顶层调用的！";
  } else {
    return `该函数的调用者是 ${myFunc.caller}`;
  }
}
```

### 重建调用堆栈和递归

请注意，在递归的情况下，你不能使用该属性重建调用堆栈。参考以下示例：

```js
function f(n) {
  g(n - 1);
}
function g(n) {
  if (n > 0) {
    f(n);
  } else {
    stop();
  }
}
f(2);
```

当调用 `stop()` 时，调用堆栈将是：

```plain
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

以下是条件表达式为真：

```js
stop.caller === g && f.caller === g && g.caller === f;
```

因此，如果你尝试像这样在 `stop()` 函数中获取堆栈跟踪：

```js
let f = stop;
let stack = "Stack trace:";
while (f) {
  stack += `\n${f.name}`;
  f = f.caller;
}
```

循环永远不会停止。

### 严格模式下的 caller

如果调用者是严格模式函数，则 `caller` 的值为 `null`。

```js
function callerFunc() {
  calleeFunc();
}

function strictCallerFunc() {
  "use strict";
  calleeFunc();
}

function calleeFunc() {
  console.log(calleeFunc.caller);
}

(function () {
  callerFunc();
})();
// 输出 [Function: callerFunc]

(function () {
  strictCallerFunc();
})();
// 输出 null
```

## 规范

不属于任何标准。

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Function.prototype.name")}}
- {{jsxref("Functions/arguments", "arguments")}}
