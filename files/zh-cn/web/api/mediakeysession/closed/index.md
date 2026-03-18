---
title: MediaKeySession：closed 属性
short-title: closed
slug: Web/API/MediaKeySession/closed
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

{{domxref('MediaKeySession')}} 接口的 **`closed`** 只读属性返回用于指示 {{domxref('MediaKeySession')}} 何时关闭的 {{jsxref('Promise')}}。该 promise 只能被兑现且永远不会被拒绝。关闭一个会话意味着与其关联的许可证和密钥不再有效，并且将无法用于解密媒体数据。

## 值

{{jsxref("Promise")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
