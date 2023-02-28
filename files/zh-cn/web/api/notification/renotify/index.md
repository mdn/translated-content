---
title: Notification.renotify
slug: Web/API/Notification/renotify
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

`renotify` 是 {{domxref("Notification")}} 接口的只读属性，如果有新的通知替换了一个旧的通知，这个属性指明用户是否应该重新收到通知。它也可以通过{{domxref("Notification.Notification","Notification()")}} 构造函数的 `renotify` option 来指定。

## 语法

```plain
var renotify = Notification.renotify;
```

### 值

{{domxref("Boolean")}}. 默认为`false`；设为 `true` 将会重新通知用户。

## 例子

以下代码片段用于在一个通知被替换以后触发通报以重新通知用户；它创建一个简单的 `options` 对象，然后使用`Notification()` 构造函数触发通报。

```js
var options = {
  body: 'Do you like my body?',
  tag: 'renotify',
  renotify: true
}

var n = new Notification('Test notification',options);

n.renotify // should return true
```

## 使用注意

renotify 覆盖通知选项必须搭配 tag 标签选项进行使用，否则会收到错误通知。

```plain
Notifications which set the renotify flag must specify a non-empty tag.
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用通知 API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
