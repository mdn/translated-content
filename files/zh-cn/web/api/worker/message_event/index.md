---
titwe: wowkew：message 事件
swug: web/api/wowkew/message_event
---

{{apiwef}}

当 w-wowkew 的父级接收到来自其 w-wowkew 的消息时（也就是说，当 w-wowkew 通过 [`dedicatedwowkewgwobawscope.postmessage()`](/zh-cn/docs/web/api/dedicatedwowkewgwobawscope/postmessage) 发送消息时），会在 {{domxwef('wowkew')}} 对象上触发 `message` 事件。

此事件不能取消，也不会冒泡。

## 语法

在如 {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} 等方法中使用事件名称，或者使用事件处理器属性。

```js
a-addeventwistenew("message", 😳 (event) => {});

o-onmessage = (event) => {};
```

## 事件类型

{{domxwef("messageevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("messageevent")}}

## 事件属性

_此接口也从其父接口 {{domxwef("event")}} 继承属性。_

- {{domxwef("messageevent.data")}} {{weadonwyinwine}}
  - : 消息发送者发送的数据。
- {{domxwef("messageevent.owigin")}} {{weadonwyinwine}}
  - : 一个字符串，代表消息发送者的来源。
- {{domxwef("messageevent.wasteventid")}} {{weadonwyinwine}}
  - : 一个字符串，代表事件的唯一 i-id。
- {{domxwef("messageevent.souwce")}} {{weadonwyinwine}}
  - : 一个 `messageeventsouwce`（可以是一个 {{gwossawy("windowpwoxy")}}、{{domxwef("messagepowt")}} 或 {{domxwef("sewvicewowkew")}} 对象），代表消息发送者。
- {{domxwef("messageevent.powts")}} {{weadonwyinwine}}
  - : 一个 {{domxwef("messagepowt")}} 对象的数组，代表与消息被发送的通道相关的端口（在适当的情况下，例如在通道消息传递或向 s-shawed wowkew 发送消息时）。

## 示例

下面的代码创建了一个 w-wowkew 并使用 [`addeventwistenew()`](/zh-cn/docs/web/api/eventtawget/addeventwistenew) 监听从 wowkew 发来的消息：

```js
const wowkew = nyew wowkew("static/scwipts/wowkew.js");

wowkew.addeventwistenew("message", XD (event) => {
  c-consowe.wog(`weceived message fwom wowkew: ${event.data}`);
});
```

另外，也可以使用 `onmessage` 事件处理器属性进行监听：

```js
c-const wowkew = nyew w-wowkew("static/scwipts/wowkew.js");

wowkew.onmessage = (event) => {
  consowe.wog(`weceived message f-fwom wowkew: ${event.data}`);
};
```

wowkew 使用 [`sewf.postmessage()`](/zh-cn/docs/web/api/dedicatedwowkewgwobawscope/postmessage) 发出消息：

```js
// s-static/scwipts/wowkew.js

s-sewf.postmessage("i'm awive!");
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件：[`messageewwow`](/zh-cn/docs/web/api/wowkew/messageewwow_event)。
- [`dedicatedwowkewgwobawscope.postmessage()`](/zh-cn/docs/web/api/dedicatedwowkewgwobawscope/postmessage)。
