---
title: Notification.close()
slug: Web/API/Notification/close
---

{{APIRef("Web Notifications")}}

{{domxref("Notification")}} 接口的 `close()` 的方法用于关闭一个以前显示的通知。

## Syntax

```plain
Notification.close();
```

### Parameters

None.

### Returns

Void.

## Examples

以下是 [Emogotchi 示例](https://github.com/mdn/emogotchi)（[在线演示](http://mdn.github.io/emogotchi/)）中的一段代码，定义了一个简单的函数 spawnNotification，当 spawnNotification 被调用时会创建一个对象并生成一个新的 Notification。在函数的最后，它在{{domxref("WindowTimers.setTimeout","setTimeout()")}} 中调用了 close() 函数来实现在 4s 后关闭 Notification（有些浏览器会自动关闭弹出的 Notification，但有些不是，例如 Chrome,Opera）。还要注意 bind() 的使用，来确保 close() 方法绑定到 Notification 的实例上。

```js
function spawnNotification(theBody,theIcon,theTitle) {
  var options = {
      body: theBody,
      icon: theIcon
  }

  var n = new Notification(theTitle,options);
  setTimeout(n.close.bind(n), 4000);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
