---
title: Window：originAgentCluster 属性
short-title: originAgentCluster
slug: Web/API/Window/originAgentCluster
l10n:
  sourceCommit: 43f272adb6ac15537cff3728c78ddf234485fff8
---

{{APIRef}}

{{domxref("Window")}} 接口的只读属性 **`originAgentCluster`** 在当前窗口属于*源键控[代理集群](https://tc39.es/ecma262/#sec-agent-clusters)*时返回 `true`：这意味着操作系统已为此窗口的源提供了专用资源（例如操作系统进程），这些资源不会与其他源的窗口共享。

否则，此属性返回 `false`。

与非源键控代理集群的窗口相比，属于源键控代理集群的窗口会受到一些额外限制。具体而言，它们不能：

- 设置 {{domxref("Document.domain")}}，这是一个传统特性，通常允许同站点跨源页面同步访问彼此的 DOM。
- 通过 {{domxref("Window.postMessage()")}} 向其他同站点跨源页面发送 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 对象。
- 向其他同站点跨源页面发送 {{jsxref("SharedArrayBuffer")}} 或 [`WebAssembly.Memory`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Memory) 对象。

要请求浏览器将此窗口分配给源键控代理集群，服务器必须发送 {{httpheader("Origin-Agent-Cluster")}} 响应标头。

请注意，源键控代理集群特性仅在{{glossary("Secure Context", "安全上下文")}}中受支持。如果站点不是安全上下文，`window.originAgentCluster` 将始终返回 `false`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{httpheader("Origin-Agent-Cluster")}} HTTP 响应标头
- [使用 Origin-Agent-Cluster 标头请求性能隔离](https://web.developers.google.cn/articles/origin-agent-cluster)
