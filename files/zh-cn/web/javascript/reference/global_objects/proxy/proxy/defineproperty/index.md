---
title: handler.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty
---

{{JSRef}}

**`handler.defineProperty()`** 用于拦截对象的 {{jsxref("Object.defineProperty()")}} 操作。

## 语法

```js
var p = new Proxy(target, {
  defineProperty: function (target, property, descriptor) {},
});
```

### 参数

下列参数将会被传递给 `defineProperty` 方法。`this` 绑定在 handler 对象上。

- `target`
  - : 目标对象。
- `property`
  - : 待检索其描述的属性名。
- `descriptor`
  - : 待定义或修改的属性的描述符。

### 返回值

`defineProperty` 方法必须以一个 {{jsxref("Boolean")}} 返回，表示定义该属性的操作成功与否。

## 描述

**`handler.defineProperty()`** 用于拦截对对象的 {{jsxref("Object.defineProperty()")}} 操作。

### 拦截

该方法会拦截目标对象的以下操作：

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.defineProperty()")}}
- {{jsxref("proxy.property='value'")}}

### 不变量

如果违背了以下的不变量，proxy 会抛出 {{jsxref("TypeError")}}:

- 如果目标对象不可扩展，将不能添加属性。
- 不能添加或者修改一个属性为不可配置的，如果它不作为一个目标对象的不可配置的属性存在的话。
- 如果目标对象存在一个对应的可配置属性，这个属性可能不会是不可配置的。
- 如果一个属性在目标对象中存在对应的属性，那么 `Object.defineProperty(target, prop, descriptor)` 将不会抛出异常。
- 在严格模式下，`false` 作为 `handler.defineProperty` 方法的返回值的话将会抛出 {{jsxref("TypeError")}} 异常。

## 示例

以下代码演示如何拦截对目标对象的 {{jsxref("Object.defineProperty()")}} 操作。

```js
var p = new Proxy(
  {},
  {
    defineProperty: function (target, prop, descriptor) {
      console.log("called: " + prop);
      return true;
    },
  },
);

var desc = { configurable: true, enumerable: true, value: 10 };
Object.defineProperty(p, "a", desc); // "called: a"
```

当调用 {{jsxref("Object.defineProperty()")}} 或者 {{jsxref("Reflect.defineProperty()")}}，传递给 `defineProperty` 的 `descriptor` 有一个限制 - 只有以下属性才有用，非标准的属性将会被无视：

- `enumerable`
- `configurable`
- `writable`
- `value`
- `get`
- `set`

```js
var p = new Proxy(
  {},
  {
    defineProperty(target, prop, descriptor) {
      console.log(descriptor);
      return Reflect.defineProperty(target, prop, descriptor);
    },
  },
);

Object.defineProperty(p, "name", {
  value: "proxy",
  type: "custom",
}); // { value: 'proxy' }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.defineProperty()")}}
