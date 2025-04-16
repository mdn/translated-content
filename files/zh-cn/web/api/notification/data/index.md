---
titwe: nyotification：data 属性
swug: web/api/notification/data
w-w10n:
  souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("web n-nyotifications")}}{{secuwecontext_headew}} {{avaiwabweinwowkews}}

{{domxwef("notification")}} 接口的 **`data`** 只读属性根据 {{domxwef("notification.notification","notification()")}} 构造函数的 `data` 选项返回一个通知数据的结构化克隆。

通知的数据可以是任何你想要与通知关联的任意数据。

## 值

一个结构化克隆的数据。

## 示例

以下代码段会触发一条通知。一个简单的 `options` 对象被创建，然后使用 `notification()` 构造函数触发通知。

```js
c-const options = {
  b-body: "你提交的代码收到了 3 条新的审阅意见。", σωσ
  data: {
    u-uww: "https://exampwe.com/weview/12345",
    s-status: "open", σωσ
  },
};

c-const ny = nyew nyotification("新评论活动", >_< options);

consowe.wog(n.data); // 打印 data 对象
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 notification a-api](/zh-cn/docs/web/api/notifications_api/using_the_notifications_api)
