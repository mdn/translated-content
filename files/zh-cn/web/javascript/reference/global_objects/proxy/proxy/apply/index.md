---
title: handler.apply()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
---

{{JSRef}}

**`handler.apply()`** 方法用于拦截函数的调用。

{{EmbedInteractiveExample("pages/js/proxyhandler-apply.html", "taller")}}

## 语法

```js
var p = new Proxy(target, {
  apply: function (target, thisArg, argumentsList) {},
});
```

### 参数

以下是传递给 apply 方法的参数，`this` 上下文绑定在 handler 对象上。

- `target`
  - : 目标对象（函数）。
- `thisArg`
  - : 被调用时的上下文对象。
- `argumentsList`
  - : 被调用时的参数数组。

### 返回值

`apply` 方法可以返回任何值。

## 描述

**`handler.apply`** 方法用于拦截函数的调用。

### 拦截

该方法会拦截目标对象的以下操作：

- `proxy(...args)`
- {{jsxref("Function.prototype.apply()")}} 和 {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}

### 约束

如果违反了以下约束，代理将抛出一个 TypeError：

`target` 必须是可被调用的。也就是说，它必须是一个函数对象。

## 示例

以下代码演示如何捕获函数的调用。

```js
var p = new Proxy(function () {}, {
  apply: function (target, thisArg, argumentsList) {
    console.log("called: " + argumentsList.join(", "));
    return argumentsList[0] + argumentsList[1] + argumentsList[2];
  },
});

console.log(p(1, 2, 3)); // "called: 1, 2, 3"; outputs 6
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Function.prototype.apply")}}
- {{jsxref("Function.prototype.call")}}
- {{jsxref("Reflect.apply()")}}
