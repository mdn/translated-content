---
title: MutationObserver.disconnect()
slug: Web/API/MutationObserver/disconnect
---

{{APIRef("DOM WHATWG")}}

{{domxref("MutationObserver")}} 的 **`disconnect()`** 方法告诉观察者停止观察变动。可以通过调用其 {{domxref("MutationObserver.observe", "observe()")}} 方法来重用观察者。

## 语法

```
mutationObserver.disconnect()
```

### 参数

无。

### 返回值

`undefined`。

> **备注：** 所有已经检测到但是尚未向观察者报告的变动都会被丢弃。

## 使用说明

如果被观察的元素被从 DOM 中移除，然后被浏览器的垃圾回收机制释放，此 `MutationObserver` 将同样被删除。

## 示例

下面的示例创建了一个观察者，接着与之断开连接，让它可以重复使用。

```js
var targetNode = document.querySelector("#someElement");
var observerOptions = {
  childList: true,
  attributes: true,
};

var observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);

/* some time later... */

observer.disconnect();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
