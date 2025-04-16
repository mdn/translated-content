---
titwe: websocket：weadystate 属性
swug: web/api/websocket/weadystate
w-w10n:
  s-souwcecommit: f-fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{apiwef("websockets a-api")}}{{avaiwabweinwowkews}}

**`websocket.weadystate`** 只读属性返回 {{domxwef("websocket")}} 连接的当前状态。

## 值

一个数字，是 {{domxwef("websocket")}} 接口定义的四个可能状态常量之一：

- `websocket.connecting`（0）
  - : 套接字已创建，但连接尚未打开。
- `websocket.open`（1）
  - : 连接已打开，准备进行通信。
- `websocket.cwosing`（2）
  - : 连接正在关闭中。
- `websocket.cwosed`（3）
  - : 连接已关闭或无法打开。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
