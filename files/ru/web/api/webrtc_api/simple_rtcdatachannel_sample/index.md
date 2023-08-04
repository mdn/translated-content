---
title: Простой пример RTCDataChannel
slug: Web/API/WebRTC_API/Simple_RTCDataChannel_sample
---

{{DefaultAPISidebar("WebRTC")}}

Интерфейс {{domxref("RTCDataChannel")}} является функциональностью [WebRTC API](/ru/docs/Web/API/WebRTC_API) , который позволяет открыть канал между узлами соединения, по которому можно отправлять и получать произвольные данные. Эти API намеренно сходны с [WebSocket API](/ru/docs/Web/API/WebSocket_API), для использования единой программной модели.

В этом примере мы откроем соединение {{domxref ("RTCDataChannel")}}, связывающее два элемента на одной странице. Хотя это явно надуманный сценарий, он полезен для демонстрации последовательности соединения двух узлов. Мы расскажем о механизме выполнения соединения, передачи и получения данных, но оставим немного информации о поиске и подключении к удалённому компьютеру для другого примера.

## Разметка HTML

Сначала быстро посмотрим на [необходимую разметку HTML](https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel/index.html). В ней нет ничего сложного. В начале мы определяем пару кнопок, создающих и закрывающих соединение:

```html
<button id="connectButton" name="connectButton" class="buttonleft">
  Connect
</button>
<button
  id="disconnectButton"
  name="disconnectButton"
  class="buttonright"
  disabled>
  Disconnect
</button>
```

Затем, определяем блок, который содержит элемент управления ввода текста, в который пользователь печатает текст своего сообщения, предназначенного для отправки, по нажатию кнопки. Элемент {{HTMLElement("div")}} будет представлять первый узел в канале передачи (сторона отправителя).

```html
<div class="messagebox">
  <label for="message"
    >Enter a message:
    <input
      type="text"
      name="message"
      id="message"
      placeholder="Message text"
      inputmode="latin"
      size="60"
      maxlength="120"
      disabled />
  </label>
  <button id="sendButton" name="sendButton" class="buttonright" disabled>
    Send
  </button>
</div>
```

И наконец, небольшой блок, в который будем помещать получаемое сообщение. Элемент {{HTMLElement("div")}} будет представлять второй узел соединения (сторона получателя).

```html
<div class="messagebox" id="receivebox">
  <p>Messages received:</p>
</div>
```

## Код JavaScript

While you can just [look at the code itself on GitHub](https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel/main.js), below we'll review the parts of the code that do the heavy lifting.

The WebRTC API makes heavy use of {{jsxref("Promise")}}s. They make it very easy to chain the steps of the connection process together; if you haven't already read up on this functionality of [ECMAScript 2015](/ru/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla), you should read up on them. Similarly, this example uses [arrow functions](/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions) to simplify syntax.

### Starting up

When the script is run, we set up an {{event("load")}} event listener, so that once the page is fully loaded, our `startup()` function is called.

```js
function startup() {
  connectButton = document.getElementById("connectButton");
  disconnectButton = document.getElementById("disconnectButton");
  sendButton = document.getElementById("sendButton");
  messageInputBox = document.getElementById("message");
  receiveBox = document.getElementById("receivebox");

  // Set event listeners for user interface widgets

  connectButton.addEventListener("click", connectPeers, false);
  disconnectButton.addEventListener("click", disconnectPeers, false);
  sendButton.addEventListener("click", sendMessage, false);
}
```

This is quite straightforward. We grab references to all the page elements we'll need to access, then set {{domxref("EventListener", "event listeners")}} on the three buttons.

### Establishing a connection

When the user clicks the "Connect" button, the `connectPeers()` method is called. We're going to break this up and look at it a bit at a time, for clarity.

> **Примечание:** Even though both ends of our connection will be on the same page, we're going to refer to the one that starts the connection as the "local" one, and to the other as the "remote" end.

#### Set up the local peer

```js
localConnection = new RTCPeerConnection();

sendChannel = localConnection.createDataChannel("sendChannel");
sendChannel.onopen = handleSendChannelStatusChange;
sendChannel.onclose = handleSendChannelStatusChange;
```

The first step is to create the "local" end of the connection. This is the peer that will send out the connection request. The next step is to create the {{domxref("RTCDataChannel")}} by calling {{domxref("RTCPeerConnection.createDataChannel()")}} and set up event listeners to monitor the channel so that we know when it's opened and closed (that is, when the channel is connected or disconnected within that peer connection).

It's important to keep in mind that each end of the channel has its own {{domxref("RTCDataChannel")}} object.

#### Set up the remote peer

```js
remoteConnection = new RTCPeerConnection();
remoteConnection.ondatachannel = receiveChannelCallback;
```

The remote end is set up similarly, except that we don't need to explicitly create an {{domxref("RTCDataChannel")}} ourselves, since we're going to be connected through the channel established above. Instead, we set up a {{event("datachannel")}} event handler; this will be called when the data channel is opened; this handler will receive an `RTCDataChannel` object; you'll see this below.

#### Set up the ICE candidates

The next step is to set up each connection with ICE candidate listeners; these will be called when there's a new ICE candidate to tell the other side about.

> **Примечание:** In a real-world scenario in which the two peers aren't running in the same context, the process is a bit more involved; each side provides, one at a time, a suggested way to connect (for example, UDP, UDP with a relay, TCP, etc.) by calling {{domxref("RTCPeerConnection.addIceCandidate()")}}, and they go back and forth until agreement is reached. But here, we just accept the first offer on each side, since there's no actual networking involved.

```js
localConnection.onicecandidate = (e) =>
  !e.candidate ||
  remoteConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);

remoteConnection.onicecandidate = (e) =>
  !e.candidate ||
  localConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);
```

We configure each {{domxref("RTCPeerConnection")}} to have an event handler for the {{event("icecandidate")}} event.

#### Start the connection attempt

The last thing we need to do in order to begin connecting our peers is to create a connection offer.

```js
localConnection
  .createOffer()
  .then((offer) => localConnection.setLocalDescription(offer))
  .then(() =>
    remoteConnection.setRemoteDescription(localConnection.localDescription),
  )
  .then(() => remoteConnection.createAnswer())
  .then((answer) => remoteConnection.setLocalDescription(answer))
  .then(() =>
    localConnection.setRemoteDescription(remoteConnection.localDescription),
  )
  .catch(handleCreateDescriptionError);
```

Let's go through this line by line and decipher what it means.

1. First, we call {{domxref("RTCPeerConnection.createOffer()")}} method to create an {{Glossary("SDP")}} (Session Description Protocol) blob describing the connection we want to make. This method accepts, optionally, an object with constraints to be met for the connection to meet your needs, such as whether the connection should support audio, video, or both. In our simple example, we don't have any constraints.
2. If the offer is created successfully, we pass the blob along to the local connection's {{domxref("RTCPeerConnection.setLocalDescription()")}} method. This configures the local end of the connection.
3. The next step is to connect the local peer to the remote by telling the remote peer about it. This is done by calling `remoteConnection.`{{domxref("RTCPeerConnection.setRemoteDescription()")}}. Now the `remoteConnection` knows about the connection that's being built. In a real application, this would require a signaling server to exchange the description object.
4. That means it's time for the remote peer to reply. It does so by calling its {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}} method. This generates a blob of SDP which describes the connection the remote peer is willing and able to establish. This configuration lies somewhere in the union of options that both peers can support.
5. Once the answer has been created, it's passed into the remoteConnection by calling {{domxref("RTCPeerConnection.setLocalDescription()")}}. That establishes the remote's end of the connection (which, to the remote peer, is its local end. This stuff can be confusing, but you get used to it). Again, this would normally be exchanged through a signalling server.
6. Finally, the local connection's remote description is set to refer to the remote peer by calling localConnection's {{domxref("RTCPeerConnection.setRemoteDescription()")}}.
7. The `catch()` calls a routine that handles any errors that occur.

> **Примечание:** Once again, this process is not a real-world implementation; in normal usage, there's two chunks of code running on two machines, interacting and negotiating the connection. A side channel, commonly called a "signalling server," is usually used to exchange the description (which is in **application/sdp** form) between the two peers.

#### Handling successful peer connection

As each side of the peer-to-peer connection is successfully linked up, the corresponding {{domxref("RTCPeerConnection")}}'s {{event("icecandidate")}} event is fired. These handlers can do whatever's needed, but in this example, all we need to do is update the user interface:

```js
function handleLocalAddCandidateSuccess() {
  connectButton.disabled = true;
}

function handleRemoteAddCandidateSuccess() {
  disconnectButton.disabled = false;
}
```

The only thing we do here is disable the "Connect" button when the local peer is connected and enable the "Disconnect" button when the remote peer connects.

#### Connecting the data channel

Once the {{domxref("RTCPeerConnection")}} is open, the {{event("datachannel")}} event is sent to the remote to complete the process of opening the data channel; this invokes our `receiveChannelCallback()` method, which looks like this:

```js
function receiveChannelCallback(event) {
  receiveChannel = event.channel;
  receiveChannel.onmessage = handleReceiveMessage;
  receiveChannel.onopen = handleReceiveChannelStatusChange;
  receiveChannel.onclose = handleReceiveChannelStatusChange;
}
```

The {{event("datachannel")}} event includes, in its channel property, a reference to a {{domxref("RTCDataChannel")}} representing the remote peer's end of the channel. This is saved, and we set up, on the channel, event listeners for the events we want to handle. Once this is done, our `handleReceiveMessage()` method will be called each time data is received by the remote peer, and the `handleReceiveChannelStatusChange()` method will be called any time the channel's connection state changes, so we can react when the channel is fully opened and when it's closed.

### Handling channel status changes

Both our local and remote peers use a single method to handle events indicating a change in the status of the channel's connection.

When the local peer experiences an open or close event, the `handleSendChannelStatusChange()` method is called:

```js
function handleSendChannelStatusChange(event) {
  if (sendChannel) {
    var state = sendChannel.readyState;

    if (state === "open") {
      messageInputBox.disabled = false;
      messageInputBox.focus();
      sendButton.disabled = false;
      disconnectButton.disabled = false;
      connectButton.disabled = true;
    } else {
      messageInputBox.disabled = true;
      sendButton.disabled = true;
      connectButton.disabled = false;
      disconnectButton.disabled = true;
    }
  }
}
```

If the channel's state has changed to "open", that indicates that we have finished establishing the link between the two peers. The user interface is updated correspondingly by enabling the text input box for the message to send, focusing the input box so that the user can immediately begin to type, enabling the "Send" and "Disconnect" buttons, now that they're usable, and disabling the "Connect" button, since it is not needed when the conneciton is open.

If the state has changed to "closed", the opposite set of actions occurs: the input box and "Send" button are disabled, the "Connect" button is enabled so that the user can open a new connection if they wish to do so, and the "Disconnect" button is disabled, since it's not useful when no connection exists.

Our example's remote peer, on the other hand, ignores the status change events, except for logging the event to the console:

```js
function handleReceiveChannelStatusChange(event) {
  if (receiveChannel) {
    console.log(
      "Receive channel's status has changed to " + receiveChannel.readyState,
    );
  }
}
```

The `handleReceiveChannelStatusChange()` method receives as an input parameter the event which occurred; this will be an {{domxref("RTCDataChannelEvent")}}.

### Sending messages

When the user presses the "Send" button, the sendMessage() method we've established as the handler for the button's {{event("click")}} event is called. That method is simple enough:

```js
function sendMessage() {
  var message = messageInputBox.value;
  sendChannel.send(message);

  messageInputBox.value = "";
  messageInputBox.focus();
}
```

First, the text of the message is fetched from the input box's [`value`](/ru/docs/Web/HTML/Element/input#value) attribute. This is then sent to the remote peer by calling {{domxref("RTCDataChannel.send", "sendChannel.send()")}}. That's all there is to it! The rest of this method is just some user experience sugar — the input box is emptied and re-focused so the user can immediately begin typing another message.

### Receiving messages

When a "message" event occurs on the remote channel, our `handleReceiveMessage()` method is called as the event handler.

```js
function handleReceiveMessage(event) {
  var el = document.createElement("p");
  var txtNode = document.createTextNode(event.data);

  el.appendChild(txtNode);
  receiveBox.appendChild(el);
}
```

This method simply performs some basic {{Glossary("DOM")}} injection; it creates a new {{HTMLElement("p")}} (paragraph) element, then creates a new {{domxref("Text")}} node containing the message text, which is received in the event's `data` property. This text node is appended as a child of the new element, which is then inserted into the `receiveBox` block, thereby causing it to draw in the browser window.

### Disconnecting the peers

When the user clicks the "Disconnect" button, the `disconnectPeers()` method previously set as that button's handler is called.

```js
function disconnectPeers() {
  // Close the RTCDataChannels if they're open.

  sendChannel.close();
  receiveChannel.close();

  // Close the RTCPeerConnections

  localConnection.close();
  remoteConnection.close();

  sendChannel = null;
  receiveChannel = null;
  localConnection = null;
  remoteConnection = null;

  // Update user interface elements

  connectButton.disabled = false;
  disconnectButton.disabled = true;
  sendButton.disabled = true;

  messageInputBox.value = "";
  messageInputBox.disabled = true;
}
```

This starts by closing each peer's {{domxref("RTCDataChannel")}}, then, similarly, each {{domxref("RTCPeerConnection")}}. Then all the saved references to these objects are set to `null` to avoid accidental reuse, and the user interface is updated to reflect the fact that the connection has been closed.

## Следующие шаги

[Попробуйте пример в деле](https://mdn-samples.mozilla.org/s/webrtc-simple-datachannel) и посмотрите на [исходный код простого примера](https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel), доступный на GitHub.
