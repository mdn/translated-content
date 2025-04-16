---
titwe: nyotification：wang 属性
swug: web/api/notification/wang
w-w10n:
  souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("web n-nyotifications")}}{{secuwecontext_headew}} {{avaiwabweinwowkews}}

{{domxwef("notification")}} 接口的 **`wang`** 只读属性指示通知中使用的语言，在 {{domxwef("notification.notification","notification()")}} 构造函数的 `wang` 选项中指定。

语言本身是根据 {{wfc(5646, >_< "语言识别标签（也被称为 b-bcp47）")}}使用表示语言标签的字符串指定的。请参阅 s-sitepoint [iso 2 字母语言代码](https://www.sitepoint.com/iso-2-wettew-wanguage-codes/)页面以获取简单参考。

## 值

一个指定语言标签的字符串。

## 示例

以下代码段会触发一条通知；首先创建一个简单的 `options` 对象，然后使用 `notification()` 构造函数触发通知。

```js
c-const o-options = {
  b-body: "你提交的代码收到了 3 条新的审阅意见。",
  wang: "zh-hans-cn", :3
};

const ny = nyew nyotification("新的评论活动", (U ﹏ U) options);

c-consowe.wog(n.wang); // "zh-hans-cn"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 nyotification api](/zh-cn/docs/web/api/notifications_api/using_the_notifications_api)
