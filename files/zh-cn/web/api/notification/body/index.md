---
title: Notification：body 属性
slug: Web/API/Notification/body
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

{{domxref("Notification")}} 接口的只读属性 **`body`** 返回了构造函数 {{domxref("Notification.Notification","Notification()")}} 实例化时 option 所使用的 body 值。

### 值

一个字符串。

## 示例

```js
function spawnNotification(theBody, theIcon, theTitle) {
  const options = {
    body: theBody,
    icon: theIcon,
  };
  const n = new Notification(theTitle, options);

  console.log(n.body);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
