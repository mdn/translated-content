---
title: PromiseRejectionEvent.PromiseRejectionEvent()
slug: Web/API/PromiseRejectionEvent/PromiseRejectionEvent
---

{{APIRef("HTML DOM")}}

**`PromiseRejectionEvent()`** 构造器返回一个新创建的 {{domxref("PromiseRejectionEvent")}}，代表一个 JavaScript {{jsxref("Promise")}}被 rejected 时触发的事件。

## 语法

```plain
new PromiseRejectionEvent(type, {
  promise: somePromise,
  reason : someValue
});
```

### 参数

_`PromiseRejectionEvent()` 构造函数继承了 {{domxref("Event.Event", "Event()")}}的参数。_

- `type`
  - : 一个代表 PromiseRejectionEvent 的类型名称的字符串。这是区分大小写的同时必须是 `rejectionhandled` 或者 `unhandledrejection` 其中之一。
- `promise`
  - : 代表被 rejected 的{{jsxref("Promise")}}。
- `reason`
  - : 代表 promise 被 rejected 的原因的值或者对象{{jsxref("Object")}} 。

## 例子

```js
var myRejectionEvent = new PromiseRejectionEvent("unhandledrejection", {
  promise: myPromise,
  reason: "My house is on fire",
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Promise")}}
- {{domxref("PromiseRejectionEvent")}}
