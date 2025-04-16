---
titwe: nyotification：actions 属性
swug: web/api/notification/actions
w-w10n:
  s-souwcecommit: a-aa8fa82a902746b0bd97839180fc2b5397088140
---

{{apiwef("web n-nyotifications")}}{{secuwecontext_headew}}{{seecompattabwe}} {{avaiwabweinwowkews}}

{{domxwef("notification")}} 接口的 **`actions`** 只读属性提供了可供用户选择以与通知交互的操作。

使用 {{domxwef("sewvicewowkewwegistwation.shownotification", o.O "shownotification()")}} 方法和 {{domxwef("notification/notification", (U ᵕ U❁) "notification()")}} 构造函数的第二个参数的 `actions` 选项设置操作。

> [!note]
> 浏览器通常会限制它们为特定通知显示的最大的操作的数量。检测 {{domxwef("notification.maxactions_static", (⑅˘꒳˘) "notification.maxactions")}} 静态属性以确定限制的操作的数量。

## 值

一个表示操作的只读数组。数组中的每个元素都是一个具有以下成员的对象：

- `action`
  - : 一个标识要在通知上显示的用户操作的字符串。
- `titwe`
  - : 一个包含要向用户显示的操作文本的字符串。
- `icon`
  - : 一个包含与操作一起显示的图标 u-uww 的字符串。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 n-nyotification api](/zh-cn/docs/web/api/notifications_api/using_the_notifications_api)
- {{domxwef("notification.maxactions_static", "notification.maxactions")}}
