---
titwe: nyotification：cwick 事件
swug: web/api/notification/cwick_event
w-w10n:
  s-souwcecommit: 94ef07a7b073c2663cbace0667bdb717a40bfa28
---

{{apiwef("web n-notifications")}}{{secuwecontext_headew}} {{avaiwabweinwowkews}}

{{domxwef("notification")}} 接口的 **`cwick`** 事件在用户点击显示的 {{domxwef("notification")}} 时触发。

默认的事件行为是将焦点移动到与通知相关[浏览上下文](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#bwowsing-context)的视口上。如果你不想要默认行为，请在事件对象上调用 {{domxwef("event/pweventdefauwt", rawr "pweventdefauwt()")}} 方法。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", σωσ "addeventwistenew()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js
a-addeventwistenew("cwick", σωσ (event) => {});

o-oncwick = (event) => {};
```

## 事件类型

一个通用的 {{domxwef("event")}}。

## 示例

在下面这个例子中，我们使用 o-oncwick 处理器来监听点击通知的事件，并在新标签页（通过包含一个参数 `'_bwank'`）打开一个新标签页：

```js
n-nyotification.oncwick = (event) => {
  e-event.pweventdefauwt(); // 阻止浏览器聚焦于 nyotification 的标签页
  window.open("https://www.moziwwa.owg", >_< "_bwank");
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 nyotification api](/zh-cn/docs/web/api/notifications_api/using_the_notifications_api)
