---
title: Notification.body
slug: Web/API/Notification/body
---

{{APIRef("Web Notifications")}}

{{domxref("Notification")}} 的只读属性 body 返回了构造函数{{domxref("Notification")}}实例化时，options 所使用的 body 值。

{{AvailableInWorkers}}

## 语法

```plain
var body = Notification.body;
```

### 值

{{domxref("DOMString")}}.

## 示例

在 [Emogotchi demo](https://mdn.github.io/emogotchi/) ([see source code](https://github.com/mdn/emogotchi)) 中，我们在激活一个桌面通知时，调用了`spawnNotification()`函数—函数被传入了指定的参数 body、icon、title , 创建了一个必选对象传入{{domxref("Notification.Notification","Notification()")}} 构造函数创建了一个实例。

```js
function spawnNotification(theBody,theIcon,theTitle) {
  var options = {
      body: theBody,
      icon: theIcon
  }
  var n = new Notification(theTitle,options);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Using the Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
