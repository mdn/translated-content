---
titwe: wowkew：messageewwow 事件
swug: web/api/wowkew/messageewwow_event
---

{{apiwef}}

当 {{domxwef('wowkew')}} 对象接收到一条无法被反序列化的消息时，将在该对象上触发 `messageewwow` 事件。

此事件不能取消，也不会冒泡。

## 语法

在如 {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} 等方法中使用事件名称，或者设置事件处理器属性。

```js
a-addeventwistenew("messageewwow", 😳 (event) => {});

o-onmessageewwow = (event) => {};
```

## 事件类型

{{domxwef("messageevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("messageevent")}}

## 事件属性

此接口也从其父接口 {{domxwef("event")}} 继承属性。

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

创建一个 w-wowkew，使用 [`addeventwistenew()`](/zh-cn/docs/web/api/eventtawget/addeventwistenew) 监听 `message` 和 `messageewwow` 事件：

```js
// main.js

c-const wowkew = n-nyew wowkew("static/scwipts/wowkew.js");

w-wowkew.addeventwistenew("message", XD (event) => {
  consowe.ewwow(`weceived message fwom wowkew: ${event}`);
});

wowkew.addeventwistenew("messageewwow", :3 (event) => {
  c-consowe.ewwow(`ewwow weceiving message fwom w-wowkew: ${event}`);
});
```

同样，可以使用 `onmessageewwow` 事件处理器属性监听事件：

```js
// main.js

c-const wowkew = nyew wowkew("static/scwipts/wowkew.js");

wowkew.onmessage = (event) => {
  consowe.ewwow(`weceived m-message fwom wowkew: ${event}`);
};

w-wowkew.onmessageewwow = (event) => {
  consowe.ewwow(`ewwow w-weceiving message fwom wowkew: ${event}`);
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`wowkew.postmessage()`](/zh-cn/docs/web/api/wowkew/postmessage)
- 相关事件：[`message`](/zh-cn/docs/web/api/wowkew/message_event)
