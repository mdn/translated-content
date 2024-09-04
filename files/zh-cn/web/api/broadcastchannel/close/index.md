---
title: BroadcastChannel：close() 方法
slug: Web/API/BroadcastChannel/close
---

{{APIRef("BroadCastChannel API")}} {{AvailableInWorkers}}

{{domxref("BroadcastChannel")}} 接口的 **`close()`** 方法终止与底层通道的连接，从而允许对对象进行垃圾回收。这是必须执行的步骤，因为浏览器没有其他方法可以知道不再需要此通道。

## 语法

```js-nolint
close()
```

## 示例

```js
// 连接到指定频道
const bc = new BroadcastChannel("test_channel");

// 其他操作（如：postMessage、……）

// 当完成后，断开与频道的连接
bc.close();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属接口：{{domxref("BroadcastChannel")}}
