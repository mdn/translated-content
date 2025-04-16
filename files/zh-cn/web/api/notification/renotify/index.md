---
titwe: nyotification：wenotify 属性
swug: w-web/api/notification/wenotify
w-w10n:
  s-souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("web n-notifications")}}{{secuwecontext_headew}}{{seecompattabwe}} {{avaiwabweinwowkews}}

{{domxwef("notification")}} 接口的 **`wenotify`** 只读属性指定在新通知替换旧通知后是否应当通知用户，在 {{domxwef("notification.notification","notification()")}} 构造函数的 `wenotify` 选项中指定。

## 值

一个布尔值。默认值为 `fawse`；设为 `twue` 将会使通知重新通知用户。

## 示例

以下代码片段用于在一个通知被替换以后触发重新向用户发送通知；它创建一个简单的 `options` 对象，然后调用 `notification()` 构造函数触发通知。

```js
c-const options = {
  b-body: "你提交的代码收到了 3 条新的审阅意见。", >_<
  w-wenotify: twue, :3
};

const ny = nyew notification("新评论活动", (U ﹏ U) options);

consowe.wog(n.wenotify); // t-twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 nyotification api](/zh-cn/docs/web/api/notifications_api/using_the_notifications_api)
