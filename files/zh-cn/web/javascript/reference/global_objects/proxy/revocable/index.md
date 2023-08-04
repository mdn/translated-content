---
title: Proxy.revocable()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
---

{{JSRef("Global_Objects", "Proxy")}}

**`Proxy.revocable()`** 方法可以用来创建一个可撤销的代理对象。

## 语法

```plain
Proxy.revocable(target, handler);
```

- `target`
  - : 将用 `Proxy` 封装的目标对象。可以是任何类型的对象，包括原生数组，函数，甚至可以是另外一个代理对象。
- `handler`
  - : 一个对象，其属性是一批可选的函数，这些函数定义了对应的操作被执行时代理的行为。

### 返回值

返回一个包含了代理对象本身和它的撤销方法的可撤销 `Proxy` 对象。

## 描述

该方法的返回值是一个对象，其结构为： `{"proxy": proxy, "revoke": revoke}`，其中：

- `proxy`
  - : 表示新生成的代理对象本身，和用一般方式 `new Proxy(target, handler)` 创建的代理对象没什么不同，只是它可以被撤销掉。
- `revoke`
  - : 撤销方法，调用的时候不需要加任何参数，就可以撤销掉和它一起生成的那个代理对象。

一旦某个代理对象被撤销，它将变得几乎完全不可调用，在它身上执行任何的**可代理操作**都会抛出 {{jsxref("TypeError")}} 异常（注意，可代理操作一共有 {{jsxref("Proxy", "14 种", "#Methods_of_the_handler_object")}}，执行这 14 种操作以外的操作不会抛出异常）。一旦被撤销，这个代理对象便不可能被直接恢复到原来的状态，同时和它关联的**目标对象**以及**处理器对象**都有可能被垃圾回收掉。再次调用撤销方法 `revoke()` 则不会有任何效果，但也不会报错。

## 示例

```js
var revocable = Proxy.revocable(
  {},
  {
    get(target, name) {
      return "[[" + name + "]]";
    },
  },
);
var proxy = revocable.proxy;
proxy.foo; // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // 抛出 TypeError
proxy.foo = 1; // 还是 TypeError
delete proxy.foo; // 又是 TypeError
typeof proxy; // "object"，因为 typeof 不属于可代理操作
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Proxy")}}
