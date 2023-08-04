---
title: RTCDataChannel 简单示例
slug: Web/API/WebRTC_API/Simple_RTCDataChannel_sample
---

{{DefaultAPISidebar("WebRTC")}}

{{domxref("RTCDataChannel")}} 接口是 [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API) 的一个功能，可以让您在两个对等体之间打开一个通道，您可以通过该通道发送和接收任意数据。API 有意地类似于 [WebSocket API](/zh-CN/docs/Web/API/WebSocket_API)，因此可以为每个 API 使用相同的编程模型。

在本示例中，我们会在一个页面内建立 一条 {{domxref("RTCDataChannel")}} 连接。这个场景是为了演示如何连接两个 Peer，实际场景并不常见。在本示例中解释了协商和建立连接的过程，定位和连接另外一台主机的场景在另外的一个示例中。

## The HTML

首先让我们看看我们[需要的 HTML 代码](https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel/index.html)。其实很简单，我们先有两个按钮用来链接和断开连接。

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

然后我们还有一个输入框，用来输入消息。一个按钮，来触发发送事件。这个 {{HTMLElement("div")}} 是给 channel 中第一个节点使用的。

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

最后，还有一个小 DIV 用来显示收到的内容。这个 {{HTMLElement("div")}} 是给 channel 中第二个 peer 使用的。

```html
<div class="messagebox" id="receivebox">
  <p>Messages received:</p>
</div>
```

## The JavaScript code

你可以直接到[look at the code itself on GitHub](https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel/main.js)来看代码，下面我们也会一步一步的解释。

WebRTC API 大量使用了{{jsxref("Promise")}}. 这样会让建立链接的过程变得简单;如果你还没有到[ECMAScript 2015](/zh-CN/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla)了解过 Promise，你应该先去看看。另外本示例还使用了箭头语法[arrow functions](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)。

### 启动

当脚本开始运行时，我们对 load 事件挂接 [`load`](/zh-CN/docs/Web/API/Window/load_event) 事件侦听，因此一旦页面完全加载， `startup()` 函数将被调用。

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

上述逻辑一目了然。我们拿到所有需要操作的页面元素引用，之后对三个按钮设置事件侦听 {{domxref("EventListener", "event listeners")}} 。

### 建立连接

当用户点击 "Connect" 按钮， `connectPeers()` 方法被调用。下面将逐一分析该方法中的细节。

> **备注：** 尽管参与连接的两端都在同一页面，我们将启动连接的一端称为 "local" 端，另一端称为 "remote" 端。

#### 建立本地节点

```js
localConnection = new RTCPeerConnection();

sendChannel = localConnection.createDataChannel("sendChannel");
sendChannel.onopen = handleSendChannelStatusChange;
sendChannel.onclose = handleSendChannelStatusChange;
```

第一步是建立该连接的 "local" 端，它是发起连接请求的一方。下一步是通过调用{{domxref("RTCPeerConnection.createDataChannel()")}} 来创建 {{domxref("RTCDataChannel")}} 并设置事件侦听以监视该数据通道，从而获知该通道的打开或关闭 (即获得该对等连接的通道打开或者关闭的时机)。

请务必记住该通道的每一端都拥有自己的 {{domxref("RTCDataChannel")}} 对象。

#### 建立远程节点

```js
remoteConnection = new RTCPeerConnection();
remoteConnection.ondatachannel = receiveChannelCallback;
```

远程端的建立过程类似“local”端，但它无需自己创建 {{domxref("RTCDataChannel")}} ，因为我们将通过上面建立的渠道进行连接。我们创建对 {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}} 的事件处理回调；数据通道打开时该逻辑将被执行，该回调处理将接收到一个 `RTCDataChannel` 对象，此过程将在文章后面部分描述。

#### 设立 ICE 候选人

下一步为每个连接建立 ICE 候选侦听处理，当连接的一方出现新的 ICE 候选时该侦听逻辑将被调用以告知连接的另一方此消息。

> **备注：** 在现实场景，当参与连接的两节点运行于不同的上下文，建立连接的过程或稍微复杂些，每一次双方通过调用{{domxref("RTCPeerConnection.addIceCandidate()")}}，提出连接方式的建议 (例如：UDP,、中继 UDP、TCP 之类的) ，双方来回往复直到达成一致。本文既然不涉及现实网络环境，因此我们假定双方接受首次连接建议。

```js
localConnection.onicecandidate = (e) =>
  !e.candidate ||
  remoteConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);

remoteConnection.onicecandidate = (e) =>
  !e.candidate ||
  localConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);
```

我们配置每个 {{domxref("RTCPeerConnection")}} 对于事件 {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} 建立事件处理。

#### 启动连接尝试

建立节点连接的最后一项是创建一个连接 offer.

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

逐行解读上面的代码：

1. 首先调用{{domxref("RTCPeerConnection.createOffer()")}} 方法创建 {{Glossary("SDP")}} (Session Description Protocol) 字节块用于描述我们期待建立的连接。该方法可选地接受一个描述连接限制的对象，例如连接是否必须支持音频、视频或者两者都支持。在我们的简单示例中，没有引入该限制。
2. 如果该 offer 成功建立，我们将上述字节块传递给 local 连接的 {{domxref("RTCPeerConnection.setLocalDescription()")}} 方法。用于配置 local 端的连接。
3. 下一步通过调用`remoteConnection.`{{domxref("RTCPeerConnection.setRemoteDescription()")}}，告知 remote 节点上述描述，将 local 节点连接到到远程。现在 `remoteConnection` 了解正在建立的连接。
4. 该是 remote 节点回应的时刻了。remote 节点调用 {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}} 方法予以回应。该方法生成一个 SDP 二进制块，用于描述 remote 节点愿意并且有能力建立的连接。这样的连接配置是两端均可以支持可选项的结合。
5. 应答建立之后，通过调用{{domxref("RTCPeerConnection.setLocalDescription()")}}传入 remoteConnection。该调用完成了 remote 端连接的建立 (对于对端的 remote 节点而言，是它的 local 端。这种叙述容易使人困惑，但是看多了您就习惯了。
6. 最终，通过调用 localConnection 的{{domxref("RTCPeerConnection.setRemoteDescription()")}}方法，本地连接的远端描述被设置为指向 remote 节点。
7. `catch()` 调用一个用于处理任何异常的逻辑。

> **备注：** 再次申明，上述处理过程并非针对现实世界的实现，在正常环境下，建立连接的两端的机器，运行两块不同的代码，用于交互和协商连接过程。

#### 对成功的对等连接的处理

当 peer-to-peer 连接的任何一方成功连接，相应的 {{domxref("RTCPeerConnection")}} 的 {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} 事件将被触发。在事件的处理中可以执行任何需要的操作，但在本例中，我们所需要做的只是更新用户界面。

```js
function handleLocalAddCandidateSuccess() {
  connectButton.disabled = true;
}

function handleRemoteAddCandidateSuccess() {
  disconnectButton.disabled = false;
}
```

当 local 节点连接成功时，禁用 "Connect" 按钮，当 remote 节点连接时许用 "Disconnect" 按钮。

#### 数据通道（data channel）的连接

{{domxref("RTCPeerConnection")}} 一旦 open，事件{{domxref("RTCPeerConnection.datachannel_event", "datachannel")}} 被发送到远端以完成打开数据通道的处理，该事件触发 `receiveChannelCallback()` 方法，如下所示：

```js
function receiveChannelCallback(event) {
  receiveChannel = event.channel;
  receiveChannel.onmessage = handleReceiveMessage;
  receiveChannel.onopen = handleReceiveChannelStatusChange;
  receiveChannel.onclose = handleReceiveChannelStatusChange;
}
```

事件 {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}} 在它的 channel 属性中包括了：对代表 remote 节点的 channel 的{{domxref("RTCDataChannel")}} 的指向，它保存了我们用以在该 channel 上对我们希望处理的事件建立的事件监听。一旦侦听建立，每当 remote 节点接收到数据 `handleReceiveMessage()` 方法将被调用，每当通道的连接状态发生改变 `handleReceiveChannelStatusChange()` 方法将被调用，因此通道完全打开或者关闭时我们都可以作出相应的相应。

### 对通道状态变化的处理

local 节点和 remote 节点采用同样的方法处理表示通道连接状态变更的事件。

当 local 节点遭遇 open 或者 close 事件，`handleSendChannelStatusChange()` 方法被调用：

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

如果通道状态已经变更为 "open", 意味着我们已经完成了在两对等节点之间建立连接。相应地用户界面根据状态更新，许用并将输入光标聚焦在 text 输入框，以便用户可以立即输入要发送给对方的文本消息，同时界面许用 "Send" 和 "Disconnect" 按钮（既然它们已经准备好了），禁用"Connect"按钮，既然在已经建立连接的情况下用不着它。

当连接状态变更为 "closed"时，界面执行相反的操作：禁用文本输入框和 "Send" 按钮 , 许用"Connect" 按钮，以便用户在需要时可以打开新的连接，禁用"Disconnect" 按钮，既然没有连接时用不着它。

另一方面，作为我们例子的 remote 节点，则无视这些状态改变事件，仅仅是在控制台输出它们：

```js
function handleReceiveChannelStatusChange(event) {
  if (receiveChannel) {
    console.log(
      "Receive channel's status has changed to " + receiveChannel.readyState,
    );
  }
}
```

`handleReceiveChannelStatusChange()` 方法接收到发生的事件，事件类型为 {{domxref("RTCDataChannelEvent")}}.

### 发送消息

当用户按下 "Send" 按钮，触发我们已建立的该按钮的 [`click`](/zh-CN/docs/Web/API/Element/click_event) 事件处理逻辑，在处理逻辑中调用 sendMessage() 方法。该方法也足够简单：

```js
function sendMessage() {
  var message = messageInputBox.value;
  sendChannel.send(message);

  messageInputBox.value = "";
  messageInputBox.focus();
}
```

首先，待发送的消息文本从文本输入框的 [`value`](/zh-CN/docs/Web/HTML/Element/input#value)属性获得，之后该文本通过调用 {{domxref("RTCDataChannel.send", "sendChannel.send()")}}发送到 remote 节点。都搞定了！余下的只是些用户体验糖 ——清空并聚焦文本输入框，以便用户可以立即开始下一条消息的输入。

### 接收消息

当远程通道发生“message”事件时，我们的 handleReceiveMessage() 方法被调用来处理事件。

```js
function handleReceiveMessage(event) {
  var el = document.createElement("p");
  var txtNode = document.createTextNode(event.data);

  el.appendChild(txtNode);
  receiveBox.appendChild(el);
}
```

该方法只是简单地注入了一些 {{Glossary("DOM")}}，它创建了 {{HTMLElement("p")}} (paragraph) 元素，然后创建了 {{domxref("Text")}} 用于显示从事件的`data` 属性拿到的消息文本。该 text node 作为子节点附加到`receiveBox` block，显示在浏览器窗口内容区。

### 断开节点

当用户点击"Disconnect" 按钮。在之前我们设置的按钮事件处理逻辑中`disconnectPeers()` 方法被调用。

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

该方法首先关闭每个节点的{{domxref("RTCDataChannel")}}，之后类似地关闭每个节点的 {{domxref("RTCPeerConnection")}}。将所有对它们的指向置为`null` 以避免意外的复用。之后更新界面状态以符合目前已经不存在连接的事实。

## 下一步

查看 GitHub 上提供的 [webrtc-simple-datachannel](https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel) 源代码。
