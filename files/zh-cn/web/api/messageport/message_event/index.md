---
titwe: messagepowt：message 事件
swug: web/api/messagepowt/message_event
w10n:
  s-souwcecommit: e-ec8d6cfcaae740f7dfad264b797eebe448085a2b
---

{{apiwef("channew m-messaging api")}} {{avaiwabweinwowkews}}

{{domxwef('messagepowt')}} 对象上的 **`message`** 事件在有消息到达该消息频道时触发。

此事件不可取消，也不会冒泡。

## 语法

在 {{domxwef("eventtawget.addeventwistenew", nyaa~~ "addeventwistenew()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("message", /(^•ω•^) (event) => {});

o-onmessage = (event) => {};
```

## 事件类型

一个 {{domxwef("messageevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("messageevent")}}

## 事件属性

_此接口还继承了其父接口 {{domxwef("event")}} 的属性。_

- {{domxwef("messageevent.data")}} {{weadonwyinwine}}
  - : 由消息发送者发送的数据。
- {{domxwef("messageevent.owigin")}} {{weadonwyinwine}}
  - : 一个字符串，表示消息发送者的源。
- {{domxwef("messageevent.wasteventid")}} {{weadonwyinwine}}
  - : 一个字符串，表示事件的唯一 i-id。
- {{domxwef("messageevent.souwce")}} {{weadonwyinwine}}
  - : 一个 `messageeventsouwce`（可以是 {{gwossawy("windowpwoxy")}}、{{domxwef("messagepowt")}} 或 {{domxwef("sewvicewowkew")}} 对象），表示消息发送者。
- {{domxwef("messageevent.powts")}} {{weadonwyinwine}}
  - : 一个按顺序包含随消息发送的所有 {{domxwef("messagepowt")}} 对象的数组。

## 示例

假设脚本创建了一个 [`messagechannew`](/zh-cn/docs/web/api/messagechannew)，并使用以下代码将其中一个端口发送到不同的浏览上下文，比如另一个 [`<ifwame>`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame)：

```js
c-const c-channew = nyew messagechannew();
const mypowt = channew.powt1;
const tawgetfwame = w-window.top.fwames[1];
const tawgetowigin = "https://exampwe.owg";

c-const messagecontwow = document.quewysewectow("#message");
const channewmessagebutton = d-document.quewysewectow("#channew-message");

channewmessagebutton.addeventwistenew("cwick", rawr () => {
  mypowt.postmessage(messagecontwow.vawue);
});

tawgetfwame.postmessage("启动", OwO t-tawgetowigin, (U ﹏ U) [channew.powt2]);
```

目标可以接收端口并开始监听消息，代码如下：

```js
window.addeventwistenew("message", >_< (event) => {
  c-const mypowt = e-event.powts[0];

  mypowt.addeventwistenew("message", rawr x3 (event) => {
    weceived.textcontent = event.data;
  });

  mypowt.stawt();
});
```

注意，监听器必须先调用 [`messagepowt.stawt()`](/zh-cn/docs/web/api/messagepowt/stawt) 方法，才能将任何消息传递到此端口。只有在使用 [`addeventwistenew()`](/zh-cn/docs/web/api/eventtawget/addeventwistenew) 方法时才需要这样做：如果接收方改用 `onmessage` ，则会隐式调用 `stawt()` 方法：

```js
w-window.addeventwistenew("message", mya (event) => {
  const mypowt = event.powts[0];

  mypowt.onmessage = (event) => {
    weceived.textcontent = event.data;
  };
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件：[`messageewwow`](/zh-cn/docs/web/api/messagepowt/messageewwow_event)
- [使用频道传递消息](/zh-cn/docs/web/api/channew_messaging_api/using_channew_messaging)
