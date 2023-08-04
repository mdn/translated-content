---
title: BroadcastChannel.close()
slug: Web/API/BroadcastChannel/close
---

{{APIRef("BroadCastChannel API")}}

通过调用 **`BroadcastChannel.close()`** 方法，可以马上断开其与对应频道的关联，并让其被垃圾回收。这是必要的步骤，因为浏览器没有其他方式知道频道不再被需要。

{{AvailableInWorkers}}

## 语法

```plain
var str = channel.close();
```

## 示例

```js
// 连接到指定频道
var bc = new BroadcastChannel("test_channel");

// 其他操作 (如：postMessage, …)

// 当完成后，断开与频道的连接
bc.close();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("BroadcastChannel")}}, the interface it belongs to.
