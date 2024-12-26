---
title: notifications.TemplateType
slug: Mozilla/Add-ons/WebExtensions/API/notifications/TemplateType
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

这是表示要创建的通知类型的字符串。有四种通知类型：“basic”、“image”、“list”、“progress”。

这将作为 {{WebExtAPIRef("notifications.NotificationOptions", "NotificationOptions")}} 中的 `type` 属性的值传递给 {{WebExtAPIRef("notifications.create()")}} 和 {{WebExtAPIRef("notifications.update()")}}。

## 类型

该类型的取值是字符串。可能的取值包括：

- `"basic"`：通知包括：

  - 标题（`NotificationOptions.title`）
  - 消息（`NotificationOptions.message`）
  - 图标（`NotificationOptions.iconUrl`）{{optional_inline}}
  - 额外消息（`NotificationOptions.contextMessage`）{{optional_inline}}
  - 最多两个按钮（`NotificationOptions.buttons`）{{optional_inline}}

- `"image"`：包括 `"basic"` 中的所有内容，以及：

  - 图像（`NotificationOptions.imageUrl`）

- `"list"`：包括 `"basic"` 中的所有内容，以及：

  - 项目列表（`NotificationOptions.items`）

- `"progress"`：包括 `"basic"` 中的所有内容，以及：

  - 进度条（`NotificationOptions.progress`）

目前 Firefox 仅支持“basic”。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.notifications`](https://developer.chrome.google.cn/docs/extensions/reference/api/notifications) API。
