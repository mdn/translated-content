---
title: BroadcastChannel.name
slug: Web/API/BroadcastChannel/name
---

{{APIRef("BroadCastChannel API")}}

**`BroadcastChannel.name`** 是类型为 {{domxref("DOMString")}} 的只读属性，是频道的唯一标识。属性 name 是在创建时传入 {{domxref("BroadcastChannel.BroadCastChannel", "BroadcastChannel()")}} 构造函数的，所以是只读的。

{{AvailableInWorkers}}

## 语法

```plain
var str = channel.name;
```

## 示例

```js
// 连接到指定频道
var bc = new BroadcastChannel("test_channel");

// 其他操作 (如：postMessage, …)

// 在控制台打印频道名称
console.log(bc.name); // "test_channel"

// 当完成后，断开与频道的连接
bc.close();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属接口：{{domxref("BroadcastChannel")}}
