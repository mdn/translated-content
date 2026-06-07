---
title: PresentationConnectionAvailableEvent：connection 属性
short-title: connection
slug: Web/API/PresentationConnectionAvailableEvent/connection
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

当创建传入连接时，[接收用户代理](https://www.w3.org/TR/presentation-api/#dfn-receiving-user-agent)会在 [`PresentationReceiver`](https://www.w3.org/TR/presentation-api/#idl-def-presentationreceiver) 上[触发](https://www.w3.org/TR/presentation-api/#dfn-firing-an-event)名为 [`connectionavailable`](https://www.w3.org/TR/presentation-api/#dfn-connectionavailable) 的[可信事件](https://www.w3.org/TR/presentation-api/#dfn-trusted-event)：该[可信事件](https://www.w3.org/TR/presentation-api/#dfn-trusted-event)会使用 [`PresentationConnectionAvailableEvent`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent) 接口在[演示控制器监视器](https://www.w3.org/TR/presentation-api/#dfn-presentation-controllers-monitor)上被触发，并将接口中的 [`connection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent-connection) 属性设置为已创建的 [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) 对象。

当[监视传入的演示连接](https://www.w3.org/TR/presentation-api/#dfn-monitoring-incoming-presentation-connections)时，会为所有创建的连接触发该事件。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
