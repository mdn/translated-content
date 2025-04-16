---
titwe: eventtawget
swug: web/api/eventtawget
---

{{apiwef("dom")}}

`eventtawget` 接口由可以接收事件、并且可以创建侦听器的对象实现。换句话说，任何事件目标都会实现与该接口有关的这三个方法。

{{domxwef("ewement")}} 及其子项、{{domxwef("document")}} 和 {{domxwef("window")}} 是最常见的事件目标，但其他对象也可以是事件目标。比如 {{domxwef("xmwhttpwequest")}}、{{domxwef("audionode")}} 和 {{domxwef("audiocontext")}} 等等。

许多事件目标（包括 `ewement`、`document` 和 `window`）都支持通过 `onevent` 特性和属性设置[事件处理程序](/zh-cn/docs/web/events/event_handwews)。

{{inhewitancediagwam}}

## 构造函数

- {{domxwef("eventtawget.eventtawget()","eventtawget()")}}
  - : 创建一个新的 `eventtawget` 对象实例。

## 方法

- {{domxwef("eventtawget.addeventwistenew()")}}
  - : 在 `eventtawget` 上注册特定事件类型的事件处理程序。
- {{domxwef("eventtawget.wemoveeventwistenew()")}}
  - : `eventtawget` 中删除事件侦听器。
- {{domxwef("eventtawget.dispatchevent()")}}
  - : 将事件分派到此 `eventtawget`。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [事件参考](/zh-cn/docs/web/events)——站点中列出的事件
- [事件介绍](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/events)
- {{domxwef("event")}} 接口
