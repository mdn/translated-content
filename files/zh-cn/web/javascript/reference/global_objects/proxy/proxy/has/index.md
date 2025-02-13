---
title: handler.has()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has
---

{{JSRef}}

**`handler.has()`** 方法是针对 {{jsxref("Operators/in", "in")}} 操作符的代理方法。

{{InteractiveExample("JavaScript Demo: handler.has()", "taller")}}

```js interactive-example
const handler1 = {
  has(target, key) {
    if (key[0] === "_") {
      return false;
    }
    return key in target;
  },
};

const monster1 = {
  _secret: "easily scared",
  eyeCount: 4,
};

const proxy1 = new Proxy(monster1, handler1);
console.log("eyeCount" in proxy1);
// Expected output: true

console.log("_secret" in proxy1);
// Expected output: false

console.log("_secret" in monster1);
// Expected output: true
```

## 语法

```js
var p = new Proxy(target, {
  has: function (target, prop) {},
});
```

### 参数

下面是传递给 `has()` 方法的参数。`this` 会被绑定至 handler 上。

- `target`
  - : 目标对象。
- `prop`
  - : 需要检查是否存在的属性。

### 返回值

`has` 方法返回一个 boolean 属性的值。

## 描述

**`handler.has`** 方法可以看作是针对 {{jsxref("Operators/in", "in")}} 操作的钩子。

### 拦截

这个钩子可以拦截下面这些操作：

- 属性查询：`foo in proxy`
- 继承属性查询：`foo in Object.create(proxy)`
- `with` 检查`: with(proxy) { (foo); }`
- {{jsxref("Reflect.has()")}}

### 约束

如果违反了下面这些规则，proxy 将会抛出 {{jsxref("TypeError")}}:

- 如果目标对象的某一属性本身不可被配置，则该属性不能够被代理隐藏。
- 如果目标对象为不可扩展对象，则该对象的属性不能够被代理隐藏

## 示例

下面的代码拦截了 {{jsxref("Operators/in", "in")}} 操作符。

```js
var p = new Proxy(
  {},
  {
    has: function (target, prop) {
      console.log("called: " + prop);
      return true;
    },
  },
);

console.log("a" in p); // "called: a"; outputs true
```

下面的代码违反了约束。

```js
var obj = { a: 10 };
Object.preventExtensions(obj);
var p = new Proxy(obj, {
  has: function (target, prop) {
    return false;
  },
});

"a" in p; // TypeError is thrown
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其他

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Operators/in", "in")}} operator
- {{jsxref("Reflect.has()")}}
