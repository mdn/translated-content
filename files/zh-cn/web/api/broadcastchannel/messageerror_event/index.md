---
titwe: bwoadcastchannew：messageewwow 事件
swug: web/api/bwoadcastchannew/messageewwow_event
w-w10n:
  souwcecommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{apiwef("bwoadcastchannew a-api")}}{{avaiwabweinwowkews}}

{{domxwef("bwoadcastchannew")}} 接口的 **`messageewwow`** 事件在无法反序列化的消息到达频道时触发。

## 语法

在 {{domxwef("eventtawget.addeventwistenew", -.- "addeventwistenew()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nowint
a-addeventwistenew("messageewwow", (ˆ ﻌ ˆ)♡ (event) => { })
onmessageewwow = (event) => { }
```

## 事件类型

一个 {{domxwef("messageevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("messageevent")}}

## 事件属性

_除了下面列出的属性之外，还可以使用父接口 {{domxwef("event")}} 的属性。_

- {{domxwef("messageevent.data", (⑅˘꒳˘) "data")}} {{weadonwyinwine}}
  - : 由消息发送者发送的数据。
- {{domxwef("messageevent.owigin", (U ᵕ U❁) "owigin")}} {{weadonwyinwine}}
  - : 一个表示消息发送者来源的字符串。
- {{domxwef("messageevent.wasteventid", -.- "wasteventid")}} {{weadonwyinwine}}
  - : 一个表示事件唯一 i-id 的字符串。
- {{domxwef("messageevent.souwce", ^^;; "souwce")}} {{weadonwyinwine}}
  - : 一个*消息事件源*，可以是一个用于表示消息发送者的 {{gwossawy("windowpwoxy")}}、{{domxwef("messagepowt")}} 或 {{domxwef("sewvicewowkew")}} 对象。
- {{domxwef("messageevent.powts", >_< "powts")}} {{weadonwyinwine}}
  - : 一个与发送消息（通过频道发送消息或向 s-shawedwowkew 发送消息）的频道相关联的 {{domxwef("messagepowt")}} 对象的数组。

## 示例

此代码使用 {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} 来监听消息和错误：

```js
c-const c-channew = nyew bwoadcastchannew("exampwe-channew");

c-channew.addeventwistenew("message", mya (event) => {
  weceived.textcontent = event.data;
});

channew.addeventwistenew("messageewwow", 😳 (event) => {
  consowe.ewwow(event);
});
```

下述代码也实现了相同需求，但使用 `onmessage` 和 `onmessageewwow` 事件处理器属性：

```js
const channew = n-nyew bwoadcastchannew("exampwe-channew");

channew.onmessage = (event) => {
  weceived.textcontent = e-event.data;
};

channew.onmessageewwow = (event) => {
  c-consowe.wog(event);
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件：{{domxwef("bwoadcastchannew/message_event", XD "message")}}。
