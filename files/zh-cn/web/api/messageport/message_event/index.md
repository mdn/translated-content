---
title: MessagePort.onmessage
slug: Web/API/MessagePort/message_event
---

{{APIRef("HTML DOM")}}

{{domxref("MessagePort")}} 接口的 **`onmessage`** 事件处理程序是一个 {{domxref("EventListener")}}, 当在端口上触发一个类型为 **message** 的{{domxref("MessageEvent")}} 时被调用 - 即，当端口接收到消息时。

{{AvailableInWorkers}}

## Syntax

```plain
channel.onmessage = function() { ... };
```

## Example

In the following code block, you can see a new channel being created using the {{domxref("MessageChannel()", "MessageChannel.MessageChannel")}} constructor. When the IFrame has loaded, we pass {{domxref("MessageChannel.port2")}} to the IFrame using {{domxref("MessagePort.postMessage")}} along with a message. The `handleMessage` handler then responds to a message being sent back from the IFrame using `onmessage`, putting it into a paragraph — {{domxref("MessageChannel.port1")}} is listened to, to check when the message arrives.

```js
var channel = new MessageChannel();
var para = document.querySelector("p");

var ifr = document.querySelector("iframe");
var otherWindow = ifr.contentWindow;

ifr.addEventListener("load", iframeLoaded, false);

function iframeLoaded() {
  otherWindow.postMessage("Hello from the main page!", "*", [channel.port2]);
}

channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}
```

For a full working example, see our [channel messaging basic demo](https://github.com/mdn/channel-messaging-basic-demo) on Github ([run it live too](http://mdn.github.io/channel-messaging-basic-demo/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using channel messaging](/zh-CN/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
