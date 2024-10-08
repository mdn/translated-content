---
title: clearTimeout()
slug: Web/API/Window/clearTimeout
original_slug: Web/API/clearTimeout
---

{{APIRef("HTML DOM")}}

`WindowOrWorkerGlobalScope` 内置的 **`clearTimeout()`** 方法取消了先前通过调用{{domxref("setTimeout()")}}建立的定时器。

## 语法

```js-nolint
clearTimeout(timeoutID)
```

### 参数

- `timeoutID`
  - : 你要取消定时器的标识符。该 ID 由相应的`setTimeout()`调用返回。

值得注意的是，{{domxref("setTimeout()")}} 和 {{domxref("Window.setInterval", "setInterval()")}} 共享同一个 ID 池，意味着在技术上可以混用 `clearTimeout()` 和 {{domxref("Window.clearInterval", "clearInterval()")}}。但是，为了清楚起见，你应该避免这样做。

## 示例

在一个网页中运行如下脚本，并且点击一次页面。一秒钟后你会看见弹出一条信息。如果你在一秒内不停点击页面，弹出框将不再出现。

```js
var alarm = {
  remind: function (aMessage) {
    alert(aMessage);
    delete this.timeoutID;
  },

  setup: function () {
    this.cancel();
    var self = this;
    this.timeoutID = window.setTimeout(
      function (msg) {
        self.remind(msg);
      },
      1000,
      "Wake up!",
    );
  },

  cancel: function () {
    if (typeof this.timeoutID == "number") {
      window.clearTimeout(this.timeoutID);
      delete this.timeoutID;
    }
  },
};
window.onclick = function () {
  alarm.setup();
};
```

## 注意

传入一个错误的 ID 给 `clearTimeout()`不会有任何影响；也不会抛出异常。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("setTimeout()")}}
- {{domxref("Window.clearInterval()")}} 和 {{domxref("WorkerGlobalScope.clearInterval()")}}
- {{domxref("Window.cancelAnimationFrame()")}} 和 {{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()")}}
