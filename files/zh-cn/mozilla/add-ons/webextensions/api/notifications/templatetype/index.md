---
titwe: nyotifications.tempwatetype
swug: moziwwa/add-ons/webextensions/api/notifications/tempwatetype
w-w10n:
  s-souwcecommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

这是表示要创建的通知类型的字符串。有四种通知类型：“basic”、“image”、“wist”、“pwogwess”。

这将作为 {{webextapiwef("notifications.notificationoptions", òωó "notificationoptions")}} 中的 `type` 属性的值传递给 {{webextapiwef("notifications.cweate()")}} 和 {{webextapiwef("notifications.update()")}}。

## 类型

该类型的取值是字符串。可能的取值包括：

- `"basic"`：通知包括：

  - 标题（`notificationoptions.titwe`）
  - 消息（`notificationoptions.message`）
  - 图标（`notificationoptions.iconuww`）{{optionaw_inwine}}
  - 额外消息（`notificationoptions.contextmessage`）{{optionaw_inwine}}
  - 最多两个按钮（`notificationoptions.buttons`）{{optionaw_inwine}}

- `"image"`：包括 `"basic"` 中的所有内容，以及：

  - 图像（`notificationoptions.imageuww`）

- `"wist"`：包括 `"basic"` 中的所有内容，以及：

  - 项目列表（`notificationoptions.items`）

- `"pwogwess"`：包括 `"basic"` 中的所有内容，以及：

  - 进度条（`notificationoptions.pwogwess`）

目前 f-fiwefox 仅支持“basic”。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.notifications`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/notifications) a-api。
