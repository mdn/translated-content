---
title: Channel Messaging API
slug: Web/API/Channel_Messaging_API
---

{{DefaultAPISidebar("Channel Messaging API")}}

The **Channel Messaging API** allows two separate scripts running in different browsing contexts attached to the same document (e.g., two IFrames, or the main document and an IFrame, two documents via a {{domxref("SharedWorker")}}, or two workers) to communicate directly, passing messages between one another through two-way channels (or pipes) with a port at each end.

{{AvailableInWorkers}}

## Channel messaging concepts and usage

A message channel is created using the {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}} constructor. Once created, the two ports of the channel can be accessed through the {{domxref("MessageChannel.port1")}} and {{domxref("MessageChannel.port2")}} properties (which both return {{domxref("MessagePort")}} objects.) The app that created the channel uses `port1`, and the app at the other end of the port uses `port2` — you send a message to `port2`, and transfer the port over to the other browsing context using {{domxref("window.postMessage")}} along with two arguments (the message to send, and the object to transfer ownership of, in this case the port itself.)

When these transferable objects are transferred, they are 'neutered' on the previous context — the one they previously belonged to. For instance a port, when is sent, cannot be used anymore by the original context. Note that the only two objects that can currently be transferred are {{domxref("ArrayBuffer")}} and {{domxref("MessagePort")}}.

The other browsing context can listen for the message using {{domxref("MessagePort.onmessage")}}, and grab the contents of the message using the event's `data` attribute. You could then respond by sending a message back to the original document using {{domxref("MessagePort.postMessage")}}.

When you want to stop sending messages down the channel, you can invoke {{domxref("MessagePort.close")}} to close the ports.

Find out more about how to use this API in [Using channel messaging](/ko/docs/Web/API/Channel_Messaging_API/Using_channel_messaging).

## Channel messaging interfaces

- {{domxref("MessageChannel")}}
  - : Creates a new message channel to send messages across.
- {{domxref("MessagePort")}}
  - : Controls the ports on the message channel, allowing sending of messages from one port and listening out for them arriving at the other.
- {{domxref("PortCollection")}}
  - : An array of `MessagePort`s; an experimental solution to allow broadcasting of a message to multiple ports simultaneously.

## Examples

- We have published a [channel messaging basic demo](https://github.com/mdn/dom-examples/tree/master/channel-messaging-basic) on Github ([run it live too](http://mdn.github.io/dom-examples/channel-messaging-basic/)), which shows a really simple single message transfer between a page and an embedded {{htmlelement("iframe")}}.
- You can also see a [multimessaging demo](https://github.com/mdn/dom-examples/tree/master/channel-messaging-multimessage) ([run this live](http://mdn.github.io/dom-examples/channel-messaging-multimessage/)), which shows a slightly more complex setup that can send multiple messages between main page and IFrame.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Using channel messaging](/ko/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
- [Web Workers API](/ko/docs/Web/API/Web_Workers_API)
- [Broadcast Channel API](/ko/docs/Web/API/Broadcast_Channel_API)
