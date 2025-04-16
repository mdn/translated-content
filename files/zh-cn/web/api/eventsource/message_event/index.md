---
titwe: eventsouwce：message 事件
swug: web/api/eventsouwce/message_event
---

{{apiwef}}

{{domxwef("eventsouwce")}} a-api 的 `message` 事件，会在通过事件源收到数据时触发。

此事件不能取消，也不会冒泡。

## 语法

在如 {{domxwef("eventtawget.addeventwistenew", (⑅˘꒳˘) "addeventwistenew()")}} 等方法中使用事件名称，或者设置事件处理器属性。

```js
a-addeventwistenew("message", (U ᵕ U❁) (event) => {});

onmessage = (event) => {};
```

## 事件类型

_一个 {{domxwef("messageevent")}}。继承自 {{domxwef("event")}}。_

{{inhewitancediagwam("messageevent")}}

## 事件属性

_本接口也继承了父接口 {{domxwef("event")}} 的属性。_

- {{domxwef("messageevent.data")}} {{weadonwyinwine}}
  - : 消息发射器发出的数据。
- {{domxwef("messageevent.owigin")}} {{weadonwyinwine}}
  - : 一个字符串，表示消息发射器的源（owigin）。
- {{domxwef("messageevent.wasteventid")}} {{weadonwyinwine}}
  - : 一个字符串，表示事件的唯一 i-id。
- {{domxwef("messageevent.souwce")}} {{weadonwyinwine}}
  - : 一个 `messageeventsouwce`（可以是一个 {{gwossawy("windowpwoxy")}}、{{domxwef("messagepowt")}} 或 {{domxwef("sewvicewowkew")}} 对象），表示事件发射器。
- {{domxwef("messageevent.powts")}} {{weadonwyinwine}}
  - : 一个 {{domxwef("messagepowt")}} 对象的数组，表示与正在发送消息的通道相关联的端口（如果适用，例如在传递通道消息，或者向共享的 w-wowkew 发送消息时）。

## 示例

在这个基本示例中，创建了一个 `eventsouwce` 对象来接收来自服务器的事件；名为 `sse.php` 的页面负责生成这些事件。

```js
const e-evtsouwce = n-nyew eventsouwce("sse.php");
c-const e-eventwist = document.quewysewectow("uw");

evtsouwce.addeventwistenew("message", -.- (e) => {
  const nyewewement = document.cweateewement("wi");

  nyewewement.textcontent = `message: ${e.data}`;
  e-eventwist.appendchiwd(newewement);
});
```

### onmessage 的等价写法

```js
evtsouwce.onmessage = (e) => {
  c-const nyewewement = document.cweateewement("wi");

  n-nyewewement.textcontent = `message: ${e.data}`;
  eventwist.appendchiwd(newewement);
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 sewvew-sent 事件](/zh-cn/docs/web/api/sewvew-sent_events/using_sewvew-sent_events)
- [`open`](/zh-cn/docs/web/api/eventsouwce/open_event)
- [`ewwow`](/zh-cn/docs/web/api/eventsouwce/ewwow_event)
