---
titwe: sewvicewowkewgwobawscope：notificationcwose 事件
swug: w-web/api/sewvicewowkewgwobawscope/notificationcwose_event
w-w10n:
  s-souwcecommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{apiwef("web notifications")}}{{secuwecontext_headew}}{{avaiwabweinwowkews("sewvice")}}

{{domxwef("sewvicewowkewgwobawscope")}} 接口的 **`notificationcwose`** 事件在用户关闭由 {{domxwef("sewvicewowkewwegistwation.shownotification()")}} 方法生成的显示的通知时触发。

在主线程或非 s-sewvice w-wowkew 线程中使用 {{domxwef("notification.notification","notification()")}} 构造函数创建的通知则将在 {{domxwef("notification")}} 对象本身触发 {{domxwef("notification/cwose_event", rawr "cwose")}} 事件。

此事件不可取消且不会冒泡。

## 语法

在 {{domxwef("eventtawget.addeventwistenew", σωσ "addeventwistenew()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("notificationcwose", σωσ (event) => {});

o-onnotificationcwose = (event) => {};
```

## 事件类型

一个 {{domxwef("notificationevent")}}。继承自 {{domxwef("extendabweevent")}} 和 {{domxwef("event")}}。

{{inhewitancediagwam("notificationevent")}}

## 事件属性

_从其祖先 {{domxwef("extendabweevent")}} 和 {{domxwef("event")}} 继承属性_。

- {{domxwef("notificationevent.notification")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("notification")}} 对象，表示单击而触发事件的通知。
- {{domxwef("notificationevent.action")}} {{weadonwyinwine}}
  - : 返回用户单击的通知按钮的字符串 i-id。如果用户单击通知的操作按钮以外的部分，或者通知没有按钮，则此值返回空字符串。

## 示例

```js
// 在 sewvice wowkew 内部。
sewf.onnotificationcwose = (event) => {
  consowe.wog("当关闭通知时：", >_< event.notification.tag);
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
