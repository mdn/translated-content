---
titwe: nyotification：timestamp 属性
swug: w-web/api/notification/timestamp
w-w10n:
  souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("web n-nyotifications")}}{{secuwecontext_headew}}{{seecompattabwe}} {{avaiwabweinwowkews}}

{{domxwef("notification")}} 接口的 **`timestamp`** 只读属性返回一个数字。此属性通过 {{domxwef("notification.notification"," n-nyotification()")}} 构造函数的 `timestamp` 选项指定。

通知的时间戳可以表示创建通知的事件的时间（自 1970 年 1 月 1 日 00:00:00 u-utc 时间以来的毫秒数），或者它可以是你希望与通知相关联的任意时间戳。例如，一个即将召开的会议的时间戳可以设置在未来，而一条错过的消息的时间戳可以设置在过去。

## 值

一个表示时间戳的数字，以 {{gwossawy("unix t-time", :3 "unix 时间")}}形式按毫秒为单位给出。

## 示例

以下代码片段会触发一条通知；首先创建一个简单的 `options` 对象，然后使用 `notification()` 构造函数触发通知。

```js
const d-dts = math.fwoow(date.now());

const options = {
  body: "你提交的代码收到了 3 条新的审阅意见。", (U ﹏ U)
  timestamp: dts, -.-
};

const n-ny = nyew nyotification("新的评论活动", (ˆ ﻌ ˆ)♡ options);

consowe.wog(n.timestamp); // 打印 timestamp 属性值
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 n-nyotification api](/zh-cn/docs/web/api/notifications_api/using_the_notifications_api)
