---
title: WeakRef() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef
---

**`WeakRef()`** 会创建一个 {{jsxref("WeakRef")}} 对象，它是对于目标对象的弱引用。

## 语法

```js-nolint
new WeakRef(targetObject)
```

> [!NOTE]
> `WeakRef()` 必须通过 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 关键字调用。试图在没有 `new` 的情况下调用会抛出一个 {{jsxref("TypeError")}}。

### 参数

- `targetObject`
  - : WeakRef 要指向的目标对象 (也称作 _referent_）。

## 示例

### 创建一个新的 WeakRef 对象

完整的示例请见 [`WeakRef`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#例子) 主页面。

```js
class Counter {
  constructor(element) {
    // 创建一个对 DOM 元素的弱引用
    this.ref = new WeakRef(element);
    this.start();
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("WeakRef")}}
