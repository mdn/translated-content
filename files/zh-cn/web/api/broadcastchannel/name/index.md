---
title: BroadcastChannel：name 属性
slug: Web/API/BroadcastChannel/name
l10n:
  sourceCommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{APIRef("BroadCastChannel API")}} {{AvailableInWorkers}}

{{domxref("BroadcastChannel")}} 接口的 **`name`** 只读属性返回一个字符串，该字符串使用其名称唯一标识给定频道。此名称在创建时传递给 {{domxref("BroadcastChannel.BroadCastChannel", "BroadcastChannel()")}} 构造函数，因此是只读的。

## 值

一个字符串。

## 示例

```js
// 连接到指定频道
const bc = new BroadcastChannel("test_channel");

// 其他操作（如：postMessage、……）

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
