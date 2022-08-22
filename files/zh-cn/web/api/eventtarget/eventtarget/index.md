---
title: EventTarget()
slug: Web/API/EventTarget/EventTarget
---
{{APIRef("DOM Events")}}

**`EventTarget()`** 构造方法将会创建一个新的{{domxref("EventTarget")}} 对象实例。

## 语法

```
var myEventTarget = new EventTarget();
```

### 参数

无。

### 返回值

一个 {{domxref("EventTarget")}} 实例。

## 例子

```
class MyEventTarget extends EventTarget {
  constructor(mySecret) {
    super();
    this._secret = mySecret;
  }

  get secret() { return this._secret; }
};

let myEventTarget = new MyEventTarget(5);
let value = myEventTarget.secret;  // == 5
myEventTarget.addEventListener("foo", function(e) {
  this._secret = e.detail;
});

let event = new CustomEvent("foo", { detail: 7 });
myEventTarget.dispatchEvent(event);
let newValue = myEventTarget.secret; // == 7
```

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("EventTarget")}}
