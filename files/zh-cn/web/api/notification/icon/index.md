---
title: Notification.icon
slug: Web/API/Notification/icon
---

{{APIRef("Web Notifications")}}

{{domxref("Notification")}}的只读属性**icon**使得包含`icon`的 URL 被显示成通知的一部分，如同指定{{domxref("Notification.Notification","Notification()")}}构造函数中`icon`的属性。

{{AvailableInWorkers}}

## 语法

```plain
var icon = Notification.icon;
```

### 值

一个 {{domxref("USVString")}}。

## 示例

在此[示例](https://github.com/mdn/emogotchi)中，当我们想要发出一个通知时，我们运行一个简单的 `spawnNotification() 函数`——这是传递参数来指定我们想要的主体、图标和标题，然后它创建必要的`options`对象，并使用{{domxref("Notification.Notification","Notification()")}}构造函数来触发通知。

```js
function spawnNotification(theBody,theIcon,theTitle) {
  var options = {
      body: theBody,
      icon: theIcon
  }
  var n = new Notification(theTitle,options);
}
```

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using the Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
