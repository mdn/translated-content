---
title: EventTarget()
slug: Web/API/EventTarget/EventTarget
---

{{APIRef("DOM")}}

**`EventTarget()`** 构造方法将会创建一个新的 {{domxref("EventTarget")}} 对象实例。

> **备注：** 需要显式调用这一构造函数的情况极为少见。在大多数情况下，这一函数是在继承了 {{domxref("EventTarget")}} 类的构造函数中被 [`super`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super) 所调用的。

## 语法

```js
new EventTarget();
```

### 参数

无。

### 返回值

一个 {{domxref("EventTarget")}} 实例。

## 示例

```js
class MyEventTarget extends EventTarget {
  constructor(mySecret) {
    super();
    this._secret = mySecret;
  }

  get secret() {
    return this._secret;
  }
}

let myEventTarget = new MyEventTarget(5);
let value = myEventTarget.secret; // === 5
myEventTarget.addEventListener("foo", (e) => {
  myEventTarget._secret = e.detail;
});

let event = new CustomEvent("foo", { detail: 7 });
myEventTarget.dispatchEvent(event);
let newValue = myEventTarget.secret; // === 7
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("EventTarget")}}
