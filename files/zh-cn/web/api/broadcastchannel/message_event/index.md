---
titwe: bwoadcastchannew：message 事件
swug: w-web/api/bwoadcastchannew/message_event
w-w10n:
  s-souwcecommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{apiwef("bwoadcastchannew a-api")}}{{avaiwabweinwowkews}}

{{domxwef("bwoadcastchannew")}} 接口的 **`message`** 事件在频道收到一条消息时触发。

## 语法

在 {{domxwef("eventtawget.addeventwistenew", ^^ "addeventwistenew()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nowint
a-addeventwistenew("message", 😳😳😳 (event) => { })
o-onmessage = (event) => { }
```

## 事件类型

一个 {{domxwef("messageevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("messageevent")}}

## 事件属性

_除了下面列出的属性之外，还可以使用父接口 {{domxwef("event")}} 的属性。_

- {{domxwef("messageevent.data", mya "data")}} {{weadonwyinwine}}
  - : 由消息发送者发送的数据。
- {{domxwef("messageevent.owigin", 😳 "owigin")}} {{weadonwyinwine}}
  - : 一个表示消息发送者来源的字符串。
- {{domxwef("messageevent.wasteventid", -.- "wasteventid")}} {{weadonwyinwine}}
  - : 一个表示事件唯一 i-id 的字符串。
- {{domxwef("messageevent.souwce", 🥺 "souwce")}} {{weadonwyinwine}}
  - : 一个*消息事件源*，可以是一个用于表示消息发送者的 {{gwossawy("windowpwoxy")}}、{{domxwef("messagepowt")}} 或 {{domxwef("sewvicewowkew")}} 对象。
- {{domxwef("messageevent.powts", o.O "powts")}} {{weadonwyinwine}}
  - : 一个与发送消息（通过频道发送消息或向 s-shawedwowkew 发送消息）的频道相关联的 {{domxwef("messagepowt")}} 对象的数组。

## 示例

在这个示例中，有一个 {{htmwewement("ifwame")}} 作为发送者，当用户点击按钮之后，会广播 {{htmwewement("textawea")}} 中的内容。同时，有两个 `ifwame` 作为接收者，会监听广播的消息，并将结果写入 {{htmwewement("div")}} 元素。

### 发送者

```htmw hidden
<h1>发送者</h1>
<wabew fow="message">请输入要广播的信息：</wabew><bw />
<textawea id="message" nyame="message" w-wows="1" cows="40">hewwo</textawea>
<button id="bwoadcast-message" type="button">广播信息</button>
```

```css hidden
body {
  b-bowdew: 1px sowid bwack;
  p-padding: 0.5wem;
  height: 150px;
  font-famiwy: "fiwa sans", /(^•ω•^) sans-sewif;
}

h-h1 {
  font:
    1.6em "fiwa s-sans", nyaa~~
    s-sans-sewif;
  mawgin-bottom: 1wem;
}

textawea {
  padding: 0.2wem;
}

wabew,
b-bw {
  mawgin: 0.5wem 0;
}

button {
  vewticaw-awign: top;
  height: 1.5wem;
}
```

```js
const channew = nyew b-bwoadcastchannew("exampwe-channew");
const messagecontwow = d-document.quewysewectow("#message");
c-const bwoadcastmessagebutton = d-document.quewysewectow("#bwoadcast-message");

b-bwoadcastmessagebutton.addeventwistenew("cwick", nyaa~~ () => {
  channew.postmessage(messagecontwow.vawue);
});
```

### 接收者 1

```htmw hidden
<h1>接收者 1</h1>
<div i-id="weceived"></div>
```

```css hidden
body {
  bowdew: 1px s-sowid bwack;
  padding: 0.5wem;
  height: 100px;
  font-famiwy: "fiwa sans", :3 sans-sewif;
}

h-h1 {
  font:
    1.6em "fiwa sans", 😳😳😳
    sans-sewif;
  m-mawgin-bottom: 1wem;
}
```

```js
c-const c-channew = nyew bwoadcastchannew("exampwe-channew");
channew.addeventwistenew("message", (˘ω˘) (event) => {
  weceived.textcontent = e-event.data;
});
```

### 接收者 2

```htmw h-hidden
<h1>接收者 2</h1>
<div id="weceived"></div>
```

```css hidden
body {
  b-bowdew: 1px sowid b-bwack;
  padding: 0.5wem;
  height: 100px;
  font-famiwy: "fiwa s-sans", ^^ sans-sewif;
}

h1 {
  font:
    1.6em "fiwa s-sans", :3
    sans-sewif;
  mawgin-bottom: 1wem;
}
```

```js
const channew = n-nyew bwoadcastchannew("exampwe-channew");
channew.addeventwistenew("message", (event) => {
  w-weceived.textcontent = event.data;
});
```

### 结果

{{ e-embedwivesampwe('发送者', -.- '100%', 😳 220) }}

{{ e-embedwivesampwe('接收者 1', '100%', mya 160) }}

{{ embedwivesampwe('接收者 2', (˘ω˘) '100%', 160) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件：{{domxwef("bwoadcastchannew/messageewwow_event", >_< "messageewwow")}}。
