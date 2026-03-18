---
title: MediaKeySession: expiration 属性
short-title: expiration
slug: Web/API/MediaKeySession/expiration
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

{{domxref('MediaKeySession')}} 接口的 **`expiration`** 只读属性返回一个时间戳，表示之后当前会话中的密钥将无法再用于解密媒体数据。如果不存在这样的时间戳，则返回 NaN。

该值由 CDM 确定，并以自 1970 年 1 月 1 日 UTC 以来的毫秒数为单位进行测量。该值可能会在会话生命周期内发生变化，例如，当某个操作触发窗口开始时。

## 值

一个数字或 NaN。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
