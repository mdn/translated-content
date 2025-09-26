---
title: NotificationEvent：action 属性
slug: Web/API/NotificationEvent/action
l10n:
  sourceCommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers("service")}}

{{domxref("NotificationEvent")}} 接口的 **`action`** 只读属性返回用户单击的通知按钮的字符串 ID。如果用户单击通知除操作按钮以外的区域，或者通知没有按钮，则此值返回空字符串。通知 ID 在创建通知期间通过 actions 数组属性设置，并且无法修改（除非通知被替换）。

## 值

一个字符串。

## 示例

```js
self.registration.showNotification("新的可用文章", {
  actions: [{ action: "get", title: "立即获取" }],
});

self.addEventListener(
  "notificationclick",
  (event) => {
    event.notification.close();
    if (event.action === "get") {
      synchronizeReader();
    } else {
      clients.openWindow("/reader");
    }
  },
  false,
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
