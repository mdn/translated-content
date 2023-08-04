---
title: handler.set()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
---

{{JSRef}}

**`handler.set()`** 方法是设置属性值操作的捕获器。

{{EmbedInteractiveExample("pages/js/proxyhandler-set.html", "taller")}}

## 语法

```plain
const p = new Proxy(target, {
  set: function(target, property, value, receiver) {
  }
});
```

### 参数

以下是传递给 `set()` 方法的参数。`this` 绑定在 handler 对象上。

- `target`
  - : 目标对象。
- `property`
  - : 将被设置的属性名或 {{jsxref("Symbol")}}。
- `value`
  - : 新属性值。
- `receiver`

  - : 最初被调用的对象。通常是 proxy 本身，但 handler 的 set 方法也有可能在原型链上，或以其他方式被间接地调用（因此不一定是 proxy 本身）。

    > **备注：** 假设有一段代码执行 `obj.name = "jen"`， `obj` 不是一个 proxy，且自身不含 `name` 属性，但是它的原型链上有一个 proxy，那么，那个 proxy 的 `set()` 处理器会被调用，而此时，`obj` 会作为 receiver 参数传进来。

### 返回值

`set()` 方法应当返回一个布尔值。

- 返回 `true` 代表属性设置成功。
- 在严格模式下，如果 `set()` 方法返回 `false`，那么会抛出一个 {{jsxref("TypeError")}} 异常。

## 描述

`handler.set()` 方法用于拦截设置属性值的操作。

### 拦截

该方法会拦截目标对象的以下操作：

- 指定属性值：`proxy[foo] = bar` 和 `proxy.foo = bar`
- 指定继承者的属性值：`Object.create(proxy)[foo] = bar`
- {{jsxref("Reflect.set()")}}

### 约束

如果违背以下的约束条件，proxy 会抛出一个 {{jsxref("TypeError")}} 异常：

- 若目标属性是一个不可写及不可配置的数据属性，则不能改变它的值。
- 如果目标属性没有配置存储方法，即 `[[Set]]` 属性的是 `undefined`，则不能设置它的值。
- 在严格模式下，如果 `set()` 方法返回 `false`，那么也会抛出一个 {{jsxref("TypeError")}} 异常。

## 示例

以下代码演示如何捕获属性的设置操作。

```js
var p = new Proxy(
  {},
  {
    set: function (target, prop, value, receiver) {
      target[prop] = value;
      console.log("property set: " + prop + " = " + value);
      return true;
    },
  },
);

console.log("a" in p); // false

p.a = 10; // "property set: a = 10"
console.log("a" in p); // true
console.log(p.a); // 10
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Reflect.set()")}}
