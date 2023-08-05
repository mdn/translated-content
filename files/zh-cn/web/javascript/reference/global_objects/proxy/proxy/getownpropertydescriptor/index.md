---
title: handler.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
---

{{JSRef}}

**`handler.getOwnPropertyDescriptor()`** 方法是 {{jsxref("Object.getOwnPropertyDescriptor()")}} 的钩子。

## 语法

```js
var p = new Proxy(target, {
  getOwnPropertyDescriptor: function (target, prop) {},
});
```

### 参数

`下列参数会被传入 getOwnPropertyDescriptor` 方法中。这是绑定到 handler 上。

- `target`
  - : 目标对象。
- `prop`
  - : 返回属性名称的描述。

### 返回值

`getOwnPropertyDescriptor` 方法必须返回一个 object 或 `undefined`。

## 描述

**`handler.getOwnPropertyDescriptor()`** 方法是 {{jsxref("Object.getOwnPropertyDescriptor()")}} 的陷阱。

### 拦截

这个陷阱可以拦截这些操作：

- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}

### 不变量

如果下列不变量被违反，代理将抛出一个 {{jsxref("TypeError")}}：

- `getOwnPropertyDescriptor` 必须返回一个 object 或 `undefined`。
- 如果属性作为目标对象的不可配置的属性存在，则该属性无法报告为不存在。
- 如果属性作为目标对象的属性存在，并且目标对象不可扩展，则该属性无法报告为不存在。
- 如果属性不存在作为目标对象的属性，并且目标对象不可扩展，则不能将其报告为存在。
- 属性不能被报告为不可配置，如果它不作为目标对象的自身属性存在，或者作为目标对象的可配置的属性存在。
- Object.getOwnPropertyDescriptor（target）的结果可以使用 Object.defineProperty 应用于目标对象，也不会抛出异常。

## 示例

以下是 {{jsxref("Object.getOwnPropertyDescriptor()")}} 的代码陷阱：

```js
var p = new Proxy(
  { a: 20 },
  {
    getOwnPropertyDescriptor: function (target, prop) {
      console.log("called: " + prop);
      return { configurable: true, enumerable: true, value: 10 };
    },
  },
);

console.log(Object.getOwnPropertyDescriptor(p, "a").value); // "called: a"; output 10
```

以下代码则违反了不变量。

```js
var obj = { a: 10 };
Object.preventExtensions(obj);
var p = new Proxy(obj, {
  getOwnPropertyDescriptor: function (target, prop) {
    return undefined;
  },
});

Object.getOwnPropertyDescriptor(p, "a"); // TypeError is thrown
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
