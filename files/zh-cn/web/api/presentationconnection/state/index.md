---
title: PresentationConnection：state 属性
short-title: state
slug: Web/API/PresentationConnection/state
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

`state` 属性反映了[演示连接](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection)的当前状态。根据当前的 [`PresentationConnectionState`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionstate)，`state` 属性可以包含以下值之一。

- **`connecting`**：用户代理正在尝试在向[目标浏览上下文](https://www.w3.org/TR/presentation-api/#dfn-destination-browsing-context)[建立演示连接](https://www.w3.org/TR/presentation-api/#dfn-establish-a-presentation-connection)。这是创建 [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) 对象时的初始状态。
- **`connected`**：[演示连接](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection)已建立，并且可以进行通信。
- **`closed`**：[演示连接](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection)已关闭或无法打开。可以通过调用 [`reconnect()`](https://www.w3.org/TR/presentation-api/#dom-presentationrequest-reconnect) 来重新打开连接。在这种状态下，无法进行通信。
- **`terminated`**：[接收浏览上下文](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context)已终止。任何与该[演示](https://www.w3.org/TR/presentation-api/#dfn-presentation)的[演示连接](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection)也已终止，并且无法重新打开。在这种状态下，无法进行通信。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
