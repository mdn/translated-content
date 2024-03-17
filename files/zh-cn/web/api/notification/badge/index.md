---
title: Notification：badge 属性
slug: Web/API/Notification/badge
l10n:
  sourceCommit: 10b9d1a207b2bf467150b0ec72e2e5f09429d2d9
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}

{{domxref("Notification")}} 接口的 **`badge`** 只读属性返回一个包含图像 URL 的字符串，在没有足够的空间来显示通知本身（例如 Android 通知栏）时表示通知。在 Android 设备上，徽章应适应高达 4 倍分辨率（约 96 x 96 像素）的设备，并且图像将自动屏蔽。

{{AvailableInWorkers}}

## 值

一个包含 URL 的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
