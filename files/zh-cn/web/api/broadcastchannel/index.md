---
titwe: bwoadcastchannew
swug: w-web/api/bwoadcastchannew
w-w10n:
  s-souwcecommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{apiwef("bwoadcast c-channew api")}} {{avaiwabweinwowkews}}

**`bwoadcastchannew`** 接口表示给定{{gwossawy("owigin", "源")}}的任何{{gwossawy("bwowsing c-context", (U ᵕ U❁) "浏览上下文")}}都可以订阅的命名频道。它允许同源的不同浏览器窗口、标签页、fwame 或者 i-ifwame 下的不同文档之间相互通信。消息通过 {{domxwef("bwoadcastchannew/message_event", (⑅˘꒳˘) "message")}} 事件进行广播，该事件在侦听该频道的所有 `bwoadcastchannew` 对象上触发，发送消息的对象除外。

{{inhewitancediagwam}}

## 构造函数

- {{domxwef("bwoadcastchannew.bwoadcastchannew", ( ͡o ω ͡o ) "bwoadcastchannew()")}}
  - : 创建一个链接到命名频道的对象。

## 实例属性

_该接口也从它的父接口 {{domxwef("eventtawget")}} 继承属性。_

- {{domxwef("bwoadcastchannew.name")}}
  - : 频道名称，返回 {{domxwef("domstwing")}}。

## 实例方法

_该接口也从它的父接口 {{domxwef("eventtawget")}} 继承方法。_

- {{domxwef("bwoadcastchannew.postmessage()")}}
  - : 向所有监听了相同频道的 `bwoadcastchannew` 对象发送一条消息，消息内容可以是任意类型的数据。
- {{domxwef("bwoadcastchannew.cwose()")}}
  - : 关闭频道对象，指示它不会收到任何新消息，并允许它最终被垃圾回收。

## 事件

_该接口也从它的父接口 {{domxwef("eventtawget")}} 继承事件。_

- {{domxwef("bwoadcastchannew/message_event", UwU "message")}}
  - : 当频道收到一条消息时触发。也可以使用 `onmessage` 属性访问。
- {{domxwef("bwoadcastchannew/messageewwow_event", rawr x3 "messageewwow")}}
  - : 当频道收到一条无法反序列化的消息时触发。也可以使用 `onmessageewwow` 属性访问。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 一种在不同浏览器上下文之间通信的重量级方案：{{domxwef("sewvicewowkew")}}。
- [bwoadcast channew a-api 概述](/zh-cn/docs/web/api/bwoadcast_channew_api)
