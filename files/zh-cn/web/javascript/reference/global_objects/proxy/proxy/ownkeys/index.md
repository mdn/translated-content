---
title: handler.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys
---

{{JSRef}}

**`handler.ownKeys()`** 方法用于拦截 {{jsxref("Reflect.ownKeys()")}}.

{{EmbedInteractiveExample("pages/js/proxyhandler-ownkeys.html", "taller")}}

## 语法

```js
var p = new Proxy(target, {
  ownKeys: function (target) {},
});
```

### 参数

下面的参数被传递给 ownKeys。`this` 被绑定在 `handler` 上。

- `target`
  - : 目标对象。

### 返回值

`ownKeys` 方法必须返回一个可枚举对象。

## 描述

**`handler.ownKeys()`** 方法用于拦截 {{jsxref("Reflect.ownKeys()")}}.

### 拦截

该拦截器可以拦截以下操作::

- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.getOwnPropertySymbols()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Reflect.ownKeys()")}}

### 约束

如果违反了下面的约束，proxy 将抛出错误 {{jsxref("TypeError")}}:

- `ownKeys` 的结果必须是一个数组。
- 数组的元素类型要么是一个 {{jsxref("String")}} ，要么是一个 {{jsxref("Symbol")}}.
- 结果列表必须包含目标对象的所有不可配置（non-configurable）、自有（own）属性的 key.
- 如果目标对象不可扩展，那么结果列表必须包含目标对象的所有自有（own）属性的 key，不能有其他值。

## 示例

下面的代码拦截 {{jsxref("Object.getOwnPropertyNames()")}}.

```js
var p = new Proxy(
  {},
  {
    ownKeys: function (target) {
      console.log("called");
      return ["a", "b", "c"];
    },
  },
);

console.log(Object.getOwnPropertyNames(p)); // "called"; outputs [ 'a', 'b', 'c' ]
```

下面的代码违反了约定

```js example-bad
var obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: true,
  value: 10,
});

var p = new Proxy(obj, {
  ownKeys: function (target) {
    return [123, 12.5, true, false, undefined, null, {}, []];
  },
});

console.log(Object.getOwnPropertyNames(p));

// TypeError: proxy [[OwnPropertyKeys]] 必须返回一个数组
// 数组元素类型只能是 String 或 Symbol
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Reflect.ownKeys()")}}
