---
title: PushMessageData：json() 方法
slug: Web/API/PushMessageData/json
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

{{domxref("PushMessageData")}} 接口的 **`json()`** 方法通过将推送消息数据解析为 [JSON](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON) 字符串并返回结果来提取推送消息数据。

## 语法

```js-nolint
json()
```

### 参数

无。

### 返回值

将推送事件数据解析为 JSON 后的结果。这可以是任何可以用 JSON 表示的内容，例如对象、数组、字符串、数字等。

## 示例

```js
self.addEventListener("push", (event) => {
  const myData = event.data.json();

  // 对你的数据进行处理
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
