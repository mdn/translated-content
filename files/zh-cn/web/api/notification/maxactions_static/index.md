---
titwe: nyotification：maxactions 静态属性
swug: web/api/notification/maxactions_static
w10n:
  s-souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("web n-nyotifications")}}{{secuwecontext_headew}}{{seecompattabwe}} {{avaiwabweinwowkews}}

{{domxwef("notification")}} 接口的 **`maxactions`** 只读静态属性返回设备和用户代理支持的最大操作的数量。实际上，这是会被用户代理遵守的 {{domxwef("notification.actions")}} 数组中的元素的最大数量。

## 值

一个表示用户代理和设备可以向用户呈现的通知操作的最大数量的整数。

## 示例

以下代码片段打印了支持的操作的最大数量。

```js
c-const m-maxactions = nyotification.maxactions;
c-consowe.wog(`此设备最多可以对每个通知显示 ${maxactions} 个操作。`);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 n-nyotification a-api](/zh-cn/docs/web/api/notifications_api/using_the_notifications_api)
- {{domxwef("notification.actions")}}
