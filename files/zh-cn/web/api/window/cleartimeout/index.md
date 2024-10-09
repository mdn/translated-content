---
title: Window：clearTimeout() 方法
slug: Web/API/Window/clearTimeout
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("HTML DOM")}}

{{domxref("Window")}} 接口的 **`clearTimeout()`** 方法取消先前通过调用 {{domxref("Window.setTimeout()")}} 建立的超时任务。

如果参数未标识之前创建的操作，则此方法不执行任何动作。

## 语法

```js-nolint
clearTimeout(timeoutID)
```

### 参数

- `timeoutID`
  - : 你要取消定时器的标识符。该 ID 由相应的 `setTimeout()` 调用返回。

值得注意的是，{{domxref("Window.setTimeout", "setTimeout()")}} 和 {{domxref("Window.setInterval", "setInterval()")}} 共享同一个 ID 池，意味着在技术上可以混用 `clearTimeout()` 和 {{domxref("Window.clearInterval", "clearInterval()")}}。但是，为了清楚起见，你应该避免这样做。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

在一个网页中运行如下脚本，并且点击一次页面。一秒钟后你会看见一条弹出的信息。如果你在一秒内不停点击页面，警报框将不再出现。

```js
const alarm = {
  remind(aMessage) {
    alert(aMessage);
    this.timeoutID = undefined;
  },

  setup() {
    if (typeof this.timeoutID === "number") {
      this.cancel();
    }

    this.timeoutID = setTimeout(
      (msg) => {
        this.remind(msg);
      },
      1000,
      "醒醒！",
    );
  },

  cancel() {
    clearTimeout(this.timeoutID);
  },
};
window.addEventListener("click", () => alarm.setup());
```

## 备注

传入一个无效的 ID 给 `clearTimeout()` 不会有任何影响；也不会抛出异常。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window.setTimeout()")}}
- {{domxref("WorkerGlobalScope.clearTimeout()")}}
- {{domxref("Window.clearInterval()")}}
- {{domxref("Window.cancelAnimationFrame()")}}
