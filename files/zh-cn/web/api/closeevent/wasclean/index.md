---
title: CloseEvent：wasClean 属性
short-title: wasClean
slug: Web/API/CloseEvent/wasClean
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("Websockets API")}}{{AvailableInWorkers}}

{{domxref("CloseEvent")}} 接口的只读属性 **`wasClean`** 在连接正常关闭时返回 `true`。

## 值

布尔值。如果连接正常关闭则为 `true`，否则为 `false`。

## 示例

以下示例将 `wasClean` 的值打印到控制台。

```js
WebSocket.onclose = (event) => {
  console.log(event.wasClean);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
