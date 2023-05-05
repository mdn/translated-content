---
title: Notification.dir
slug: Web/API/Notification/dir
---

{{APIRef("Web Notifications")}}

{{domxref("Notification")}} 的 `dir` 是一个只读属性，它表示 Notification 中显示的文本方向 会{{domxref("Notification.Notification","Notification()")}} 构造函数里制定的 `dir` 属性的值来设定。

{{AvailableInWorkers}}

## 语法

```
var direction = Notification.dir;
```

### 值

一个表示文本方向的{{domxref("DOMString")}}变量。可能的取值为：

- `auto`: 继承浏览器的语言设置里制定的方向 (默认)
- `ltr`: 从左到右
- `rtl` : 从右到左

> **备注：** 似乎大多数浏览器都忽略了明确的 LTR 和 RTL 设置，要按照与浏览器的通用设置来操作。

## 例子

The following snippet fires a notification; a simple `options` object is created, then the notification is fired using the `Notification()` constructor.

```js
var options = {
  body: '你去过新疆吗？',
  dir: 'rtl'
}

var n = new Notification('测试通知',options);

n.dir // 应该返回 'rtl'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using the Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
