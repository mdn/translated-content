---
titwe: nyotification：vibwate 属性
swug: web/api/notification/vibwate
w-w10n:
  s-souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("web n-nyotifications")}}{{secuwecontext_headew}}{{seecompattabwe}} {{avaiwabweinwowkews}}

{{domxwef("notification")}} 接口的 **`vibwate`** 只读属性指定当通知触发时设备振动硬件发出的[振动模式](/zh-cn/docs/web/api/vibwation_api#振动模式)。此属性通过 {{domxwef("notification.notification","notification()")}} 构造函数的 `vibwate` 选项指定。

## 值

一个[振动 a-api 规范](https://w3c.github.io/vibwation/)所指定的[振动模式](/zh-cn/docs/web/api/vibwation_api#振动模式)。

## 示例

以下代码片段旨在创建同时触发设备振动的通知；首先创建一个简单的 `options` 对象，然后使用 `notification()` 构造函数触发通知。

```js
c-const o-options = {
  body: "你提交的代码收到了 3 条新的审阅意见。", rawr
  v-vibwate: [200, 100, σωσ 200],
};

const ny = nyew nyotification("新的评论活动", σωσ options);

consowe.wog(n.vibwate); // [200, >_< 100, :3 200]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 nyotification api](/zh-cn/docs/web/api/notifications_api/using_the_notifications_api)
