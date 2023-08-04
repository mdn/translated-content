---
title: handler.construct()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
---

{{JSRef}}

**`handler.construct()`** 方法用于拦截 {{jsxref("Operators/new", "new")}} 操作符。为了使 new 操作符在生成的 Proxy 对象上生效，用于初始化代理的目标对象自身必须具有 \[\[Construct]] 内部方法（即 `new target` 必须是有效的）。

{{EmbedInteractiveExample("pages/js/proxyhandler-construct.html", "taller")}}

## 语法

```js
var p = new Proxy(target, {
  construct: function (target, argumentsList, newTarget) {},
});
```

### 参数

下面的参数将会传递给 `construct` 方法，`this` 绑定在 handler 上。

- `target`
  - : 目标对象。
- `argumentsList`
  - : constructor 的参数列表。
- `newTarget`
  - : 最初被调用的构造函数，就上面的例子而言是 p。

### 返回值

`construct` 方法必须返回一个对象。

## 描述

**`handler.construct()`** 方法用于拦截 {{jsxref("Operators/new", "new")}}操作符。

### 拦截

该拦截器可以拦截以下操作：

- `new proxy(...args)`
- {{jsxref("Reflect.construct()")}}

### 约束

如果违反以下约定，代理将会抛出错误 {{jsxref("TypeError")}}:

- 必须返回一个对象。

## 示例

下面代码演示如何拦截 {{jsxref("Operators/new", "new")}} 操作。

```js
var p = new Proxy(function () {}, {
  construct: function (target, argumentsList, newTarget) {
    console.log("called: " + argumentsList.join(", "));
    return { value: argumentsList[0] * 10 };
  },
});

console.log(new p(1).value); // "called: 1"; outputs 10
```

下面的代码违反了约定。

```js
var p = new Proxy(function () {}, {
  construct: function (target, argumentsList, newTarget) {
    return 1;
  },
});

new p(); // TypeError is thrown
```

下面的代码未能正确的初始化 Proxy。Proxy 初始化时，传给它的 `target` 必须具有一个有效的 constructor 供 `new` 操作符调用。

```js
var p = new Proxy(
  {},
  {
    construct: function (target, argumentsList, newTarget) {
      return {};
    },
  },
);

new p(); // TypeError is thrown, "p" is not a constructor
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关主题

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Operators/new", "new")}} operator.
- {{jsxref("Reflect.construct()")}}
