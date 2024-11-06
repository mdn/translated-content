---
title: 在 WebRTC 中使用 DTMF
slug: Web/API/WebRTC_API/Using_DTMF
l10n:
  sourceCommit: f92df19cdf44d4352b89e446dc1b9d1e5addcbe1
---

{{DefaultAPISidebar("WebRTC")}}

为了更全面地支持音频/视频会议，[WebRTC](/zh-CN/docs/Web/API/WebRTC_API) 支持在 {{domxref("RTCPeerConnection")}} 上向远程对等方发送{{Glossary("DTMF", "双音多频信号")}}（DTMF）。本文简要概述了 WebRTC 上的 DTMF 是如何工作的，然后提供了一个指导开发人员如何通过 `RTCPeerConnection` 发送 DTMF 的指南。DTMF 系统通常被称为“触摸音调”，这是一种旧的商标名称。

WebRTC 不会将 DTMF 代码作为音频数据发送。相反，它们作为 RTP 载荷在带外发送。但是，请注意，尽管可以使用 WebRTC _发送_ DTMF，但目前无法检测或接收*传入*的 DTMF。WebRTC 目前会忽略这些载荷；这是因为 WebRTC 的 DTMF 支持主要是为了与依赖 DTMF 音调执行任务的传统电话服务一起使用，例如：

- 电话会议系统
- 菜单系统
- 语音信箱系统
- 输入信用卡或其他支付信息
- 密码输入

> [!NOTE]
> 虽然 DTMF 不会作为音频发送到远程对等方，但浏览器可能会选择向本地用户播放相应的音调来提升用户体验，因为用户通常习惯于听到电话播放的提示音。

## 在 RTCPeerConnection 上发送 DTMF

可以在一个给定的 {{domxref("RTCPeerConnection")}} 上发送或接收多个媒体轨道。当你希望传输 DTMF 信号时，你首先需要决定要将它们发送到哪个轨道，因为 DTMF 是作为 {{domxref("RTCRtpSender")}}——负责将该轨道的数据传输到其他对等方——上的一系列带外载荷发送的。

一旦选择了轨道，你可以从其 `RTCRtpSender` 获取你将用于发送 DTMF 的 {{domxref("RTCDTMFSender")}} 对象。在那里，你可以调用 {{domxref("RTCDTMFSender.insertDTMF()")}} 将 DTMF 信号排入队列，以便通过轨道将其发送给其他对等方。然后，`RTCRtpSender` 将音调作为数据包与轨道的音频数据一起发送到其他对等方。

每次发送音调时，`RTCPeerConnection` 都会接收到一个带有 {{domxref("RTCDTMFToneChangeEvent.tone", "tone")}} 属性的 [`tonechange`](/zh-CN/docs/Web/API/RTCDTMFSender/tonechange_event) 事件，该属性指定了播放完成的音调，这是完成诸如更新接口元素等任务的机会。当音调缓冲区为空时，表示所有音调都已发送完成，连接对象将接收到一个带有其 `tone` 属性设置为 `""`（空字符串）的 `tonechange` 事件。

如果你想了解更多关于这是如何工作的信息，请阅读 {{RFC(3550, "RTP：实时应用的传输协议")}}和 {{RFC(4733, "用于 DTMF 数字、电话音和电话信号的 RTP 载荷")}}。关于如何在 RTP 上处理 DTMF 载荷的详细信息超出了本文的范围。相反，我们将通过研究一个示例的工作原理来重点关注如何在 {{domxref("RTCPeerConnection")}} 上下文中使用 DTMF。

## 简单示例

这个简单的示例构建了两个 {{domxref("RTCPeerConnection")}}，在它们之间建立了连接，然后等待用户点击“拨号”按钮。当用户点击按钮时，使用 {{domxref("RTCDTMFSender.insertDTMF()")}} 在连接上发送一个 DTMF 字符串。一旦音调传输完成，连接就会关闭。

> [!NOTE]
> 这个示例显然有些牵强，因为通常两个 `RTCPeerConnection` 对象会存在于不同的设备上，并且信令传输通常是通过网络进行的，而不是像这里一样全部都在内部连接。

### HTML

这个示例的 HTML 非常基础，只有三个重要的元素：

- {{HTMLElement("audio")}} 元素：用于播放由被“呼叫”的 `RTCPeerConnection` 接收到的音频。
- {{HTMLElement("button")}} 元素：用于触发创建和连接两个 `RTCPeerConnection` 对象，然后发送 DTMF 音调。
- {{HTMLElement("div")}}：用于接收和显示日志文本，以显示状态信息。

```html
<p>
  这个示例演示了在 WebRTC 中使用
  DTMF。请注意，这个示例是“作弊”的，它在一个代码流中生成两个对等端，而不是让每个对等端都是一个真正独立的实体。
</p>

<audio id="audio" autoplay controls></audio><br />
<button name="dial" id="dial">拨号</button>

<div class="log"></div>
```

### JavaScript

让我们接下来看一下 JavaScript 代码。请注意，这里建立连接的过程有些牵强；通常情况下，你不会在同一个文档中构建连接的两端。

#### 全局变量

首先，我们创建全局变量。

```js
let dialString = "12024561111";

let callerPC = null;
let receiverPC = null;
let dtmfSender = null;

let hasAddTrack = false;

let mediaConstraints = {
  audio: true,
  video: false,
};

let offerOptions = {
  offerToReceiveAudio: 1,
  offerToReceiveVideo: 0,
};

let dialButton = null;
let logElement = null;
```

它们依次是：

- `dialString`
  - : 当用户点击“拨号”按钮时，呼叫方将发送的 DTMF 字符串。
- `callerPC` 和 `receiverPC`
  - : 分别表示呼叫方和接收方的 {{domxref("RTCPeerConnection")}} 对象。这些对象将在呼叫启动时在我们的 `connectAndDial()` 函数中初始化，如下面的[启动连接过程](#启动连接过程)所示。
- `dtmfSender`
  - : 连接的 {{domxref("RTCDTMFSender")}} 对象。这将在设置连接时在 `gotStream()` 函数中获取，如[将音频添加到连接](#将音频添加到连接)部分所示。
- `hasAddTrack`
  - : 由于一些浏览器尚未实现 {{domxref("RTCPeerConnection.addTrack()")}}，因此需要使用已过时的 {{domxref("RTCPeerConnection.addStream", "addStream()")}} 方法，我们使用此布尔值来确定用户代理是否支持 `addTrack()`；如果不支持，我们将退回到 `addStream()`。这将在 `connectAndDial()` 中确定，如下面的[启动连接过程](#启动连接过程)所示。
- `mediaConstraints`
  - : 指定启动连接时要使用的约束的对象。我们只想要音频连接，所以 `video` 是 `false`，而 `audio` 是 `true`。
- `offerOptions`
  - : 用于在调用 {{domxref("RTCPeerConnection.createOffer()")}} 时指定选项的对象。在本例中，我们声明我们想要接收音频但不要视频。
- `dialButton` 和 `logElement`
  - : 这些变量将用于存储对拨号按钮和将写入日志信息的 {{HTMLElement("div")}} 的引用。它们将在页面首次加载时设置。参见下面的[初始化](#初始化)。

#### 初始化

页面加载时，我们进行一些基本设置：我们获取对拨号按钮和日志输出框元素的引用，并使用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 为拨号按钮添加事件监听器，以便点击它会调用开始连接过程的 `connectAndDial()` 函数。

```js
window.addEventListener("load", () => {
  logElement = document.querySelector(".log");
  dialButton = document.querySelector("#dial");

  dialButton.addEventListener("click", connectAndDial, false);
});
```

#### 启动连接过程

当点击拨号按钮时，将调用 `connectAndDial()`。这将开始构建 WebRTC 连接，为发送 DTMF 代码做准备。

```js
function connectAndDial() {
  callerPC = new RTCPeerConnection();

  hasAddTrack = callerPC.addTrack !== undefined;

  callerPC.onicecandidate = handleCallerIceEvent;
  callerPC.onnegotiationneeded = handleCallerNegotiationNeeded;
  callerPC.oniceconnectionstatechange = handleCallerIceConnectionStateChange;
  callerPC.onsignalingstatechange = handleCallerSignalingStateChangeEvent;
  callerPC.onicegatheringstatechange = handleCallerGatheringStateChangeEvent;

  receiverPC = new RTCPeerConnection();
  receiverPC.onicecandidate = handleReceiverIceEvent;

  if (hasAddTrack) {
    receiverPC.ontrack = handleReceiverTrackEvent;
  } else {
    receiverPC.onaddstream = handleReceiverAddStreamEvent;
  }

  navigator.mediaDevices
    .getUserMedia(mediaConstraints)
    .then(gotStream)
    .catch((err) => log(err.message));
}
```

在为呼叫方（`callerPC`）创建 `RTCPeerConnection` 后，我们查看它是否具有 {{domxref("RTCPeerConnection.addTrack", "addTrack()")}} 方法。如果有，我们将 `hasAddTrack` 设置为 `true`；否则，我们将其设置为 `false`。这个变量将让示例即使在尚未实现较新的 `addTrack()` 方法的浏览器上也能运行；我们将通过退回到较旧的 {{domxref("RTCPeerConnection.addStream", "addStream()")}} 方法来实现。

接下来，为呼叫方建立了事件处理器。我们稍后将详细介绍这些。

然后创建第二个用于代表呼叫的接收端的 `RTCPeerConnection`，并将它存储在 `receiverPC` 中；同时设置它的 `onicecandidate` 事件处理器。

如果支持 `addTrack()`，我们设置接收方的 `ontrack` 事件处理器；否则，我们设置 `onaddstream`。当媒体被添加到连接时，会发送 {{domxref("RTCPeerConnection.track_event", "track")}} 和 {{domxref("RTCPeerConnection/addstream_event", "addstream")}} 事件。

最后，我们调用 {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} 来获取对呼叫方麦克风的访问权限。如果成功，将调用函数 `gotStream()`，否则我们记录调用失败的错误。

#### 将音频添加到连接

如上所述，当从麦克风获取到音频输入时，将调用 `gotStream()`。它的工作是构建发送到接收方的流，从而可以开始实际的传输过程。它还会获取我们将在连接上使用的 `RTCDTMFSender`。

```js
function gotStream(stream) {
  log("已获取麦克风的访问权限。");

  let audioTracks = stream.getAudioTracks();

  if (hasAddTrack) {
    if (audioTracks.length > 0) {
      audioTracks.forEach((track) => callerPC.addTrack(track, stream));
    }
  } else {
    log(
      "你的浏览器不支持 RTCPeerConnection.addTrack()。正在退回到<strong>已弃用</strong>的 addStream() 方法…",
    );
    callerPC.addStream(stream);
  }

  if (callerPC.getSenders) {
    dtmfSender = callerPC.getSenders()[0].dtmf;
  } else {
    log(
      "你的浏览器不支持 RTCPeerConnection.getSenders()，因此正在退回到使用<strong>已弃用</strong>的 createDTMFSender()。",
    );
    dtmfSender = callerPC.createDTMFSender(audioTracks[0]);
  }

  dtmfSender.ontonechange = handleToneChangeEvent;
}
```

在将 `audioTracks` 设置为用户麦克风流上的音频轨道列表后，是时候将媒体添加到呼叫方的 `RTCPeerConnection` 中了。如果 `RTCPeerConnection` 上有 `addTrack()` 可用，我们将使用 {{domxref("RTCPeerConnection.addTrack()")}} 逐个将流的每个音频轨道添加到连接中。否则，我们调用 {{domxref("RTCPeerConnection.addStream()")}} 将流作为单个单元添加到呼叫中。

接下来，我们查看是否实现了 {{domxref("RTCPeerConnection.getSenders()")}} 方法。如果实现了，我们在 `callerPC` 上调用它，并获取返回的发送器列表中的第一个条目；这是负责传输呼叫的第一个音频轨道数据的 {{domxref("RTCRtpSender")}}（这是我们将发送 DTMF 的轨道）。然后，我们获取 `RTCRtpSender` 的 {{domxref("RTCRtpSender.dtmf", "dtmf")}} 属性，它是一个 {{domxref("RTCDTMFSender")}} 对象，可以在连接中从呼叫方发送到接收方发送 DTMF。

如果 `getSenders()` 不可用，我们将调用 {{domxref("RTCPeerConnection.createDTMFSender()")}} 来获取 `RTCDTMFSender` 对象。尽管这个方法已经过时，但这个示例支持它作为一个备用方法，让旧的浏览器（和尚未更新以支持当前 WebRTC DTMF API 的浏览器）可以运行这个示例。

最后，我们设置 DTMF 发送器的 {{domxref("RTCDTMFSender.tonechange_event", "ontonechange")}} 事件处理器，以便每当一个 DTMF 音调完成播放时都会收到通知。

你可以在当前文档的底部找到日志函数。

#### 当音调播放完成

每当一个 DTMF 音调播放完成时，[`tonechange`](/zh-CN/docs/Web/API/RTCDTMFSender/tonechange_event) 事件就会被传递给 `callerPC`。这些事件的事件监听器被实现为 `handleToneChangeEvent()` 函数。

```js
function handleToneChangeEvent(event) {
  if (event.tone !== "") {
    log(`播放音调：${event.tone}`);
  } else {
    log("All tones have played. Disconnecting.");
    callerPC.getLocalStreams().forEach((stream) => {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    });
    receiverPC.getLocalStreams().forEach((stream) => {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    });

    audio.pause();
    audio.srcObject = null;
    receiverPC.close();
    callerPC.close();
  }
}
```

[`tonechange`](/zh-CN/docs/Web/API/RTCDTMFSender/tonechange_event) 事件既用于指示单个音调已播放，也用于指示所有音调已完成播放。事件的 {{domxref("RTCDTMFToneChangeEvent.tone", "tone")}} 属性是一个指示刚刚完成播放的音调的字符串。如果所有音调都已完成播放，`tone` 将是一个空字符串；在这种情况下，{{domxref("RTCDTMFSender.toneBuffer")}} 为空。

在这个示例中，我们将刚刚完成播放的音调记录到屏幕上。在更高级的应用程序中，你可能会更新用户界面，例如，指示当前正在播放的音符。

另一方面，如果音调缓冲区为空，我们的示例被设计为断开通话。这是通过迭代每个 `RTCPeerConnection` 的轨道列表（由其 {{domxref("MediaStream.getTracks", "getTracks()")}} 方法返回）并调用每个轨道的 {{domxref("MediaStreamTrack.stop", "stop()")}} 方法来完成的。

一旦呼叫方和接收方的所有媒体轨道都停止了，我们暂停 {{HTMLElement("audio")}} 元素，并将其 {{domxref("HTMLMediaElement.srcObject", "srcObject")}} 设置为 `null`。这会将音频流从 {{HTMLElement("audio")}} 元素中分离出来。

最后，通过调用每个 `RTCPeerConnection` 的 {{domxref("RTCPeerConnection.close", "close()")}} 方法来关闭它。

#### 将候选者添加到呼叫方

当呼叫方的 `RTCPeerConnection` ICE 层提出一个新的候选者时，它会向 `callerPC` 发出一个 {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} 事件。`icecandidate` 事件处理器的工作是将候选者传输给接收方。在我们的示例中，我们直接控制呼叫方和接收方，所以我们可以直接通过调用其 {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} 方法将候选者添加到接收方。这由 `handleCallerIceEvent()` 处理：

```js
function handleCallerIceEvent(event) {
  if (event.candidate) {
    log(`正在向接收方添加候选者：${event.candidate.candidate}`);

    receiverPC
      .addIceCandidate(new RTCIceCandidate(event.candidate))
      .catch((err) => log(`向接收方添加候选者时出错：${err}`));
  } else {
    log("呼叫方没有更多的候选者。");
  }
}
```

如果 {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} 事件具有非 `null` 的 `candidate` 属性，我们将从 `event.candidate` 字符串创建一个新的 {{domxref("RTCIceCandidate")}} 对象，并通过调用 `receiverPC.addIceCandidate()` 将其“传输”到接收方，提供新的 `RTCIceCandidate` 作为其输入。如果 `addIceCandidate()` 失败，`catch()` 子句将错误输出到我们的日志框中。

如果 `event.candidate` 是 `null`，这表示没有更多的候选者可用，我们会记录这一信息。

#### 在连接打开后进行拨号

我们的设计要求在连接建立后立即发送 DTMF 字符串。为了实现这一点，我们会监视呼叫方接收到的 {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}} 事件。当 ICE 连接过程的状态发生变化，包括成功建立连接时，就会发送这个事件。

```js
function handleCallerIceConnectionStateChange() {
  log(`呼叫方连接状态已更改为 ${callerPC.iceConnectionState}`);
  if (callerPC.iceConnectionState === "connected") {
    log(`发送 DTMF: "${dialString}"`);
    dtmfSender.insertDTMF(dialString, 400, 50);
  }
}
```

实际上，`iceconnectionstatechange` 事件并没有在其中包含新状态，因此我们从 `callerPC` 的 {{domxref("RTCPeerConnection.iceConnectionState")}} 属性中获取连接过程的当前状态。在记录新状态后，我们查看状态是否为 `"connected"`。如果是，我们记录即将发送 DTMF 的事实，然后调用 {{domxref("RTCDTMFSender.insertDTMF", "dtmf.insertDTMF()")}} 在与我们[之前存储](#将音频添加到连接)在 `dtmfSender` 中的 `RTCDTMFSender` 相同的轨道上发送 DTMF。

我们调用 `insertDTMF()` 不仅指定要发送的 DTMF（`dialString`），还指定了每个音调的长度（400 毫秒）和音调之间的时间间隔（50 毫秒）。

#### 协商连接

当呼叫方 `RTCPeerConnection` 开始接收媒体（在将麦克风的流添加到其中后），会向呼叫方传递一个 {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} 事件，让它知道现在是时候开始与接收方协商连接了。如前所述，我们的示例稍微简化了一些，因为我们控制着呼叫方和接收方，所以 `handleCallerNegotiationNeeded()` 能够快速地为呼叫方和接收方构建连接，如下所示。

```js
function handleCallerNegotiationNeeded() {
  log("协商中……");
  callerPC
    .createOffer(offerOptions)
    .then((offer) => {
      log(`设置呼叫方的本地描述：${offer.sdp}`);
      return callerPC.setLocalDescription(offer);
    })
    .then(() => {
      log("将接收方的远程描述设置为与呼叫方的本地描述相同");
      return receiverPC.setRemoteDescription(callerPC.localDescription);
    })
    .then(() => {
      log("创建应答");
      return receiverPC.createAnswer();
    })
    .then((answer) => {
      log(`将接收方的本地描述设置为 ${answer.sdp}`);
      return receiverPC.setLocalDescription(answer);
    })
    .then(() => {
      log("设置要匹配的呼叫方的远程描述");
      return callerPC.setRemoteDescription(receiverPC.localDescription);
    })
    .catch((err) => log(`协商过程中出错：${err.message}`));
}
```

由于参与协商连接的各种方法返回了 {{jsxref("promise")}}，我们可以像这样将它们链接在一起：

1. 调用 {{domxref("RTCPeerConnection.createOffer", "callerPC.createOffer()")}} 获取一个提议。
2. 然后采用这个提议，并通过调用 {{domxref("RTCPeerConnection.setLocalDescription", "callerPC.setLocalDescription()")}} 设置呼叫方的本地描述来匹配。
3. 然后通过调用 {{domxref("RTCPeerConnection.setRemoteDescription", "receiverPC.setRemoteDescription()")}} 将提议“传输”到接收方。这样配置接收方，使其知道呼叫方的配置。
4. 然后接收方通过调用 {{domxref("RTCPeerConnection.createAnswer", "receiverPC.createAnswer()")}} 创建一个答复。
5. 然后接收方通过调用 {{domxref("RTCPeerConnection.setLocalDescription", "receiverPC.setLocalDescription()")}} 将其本地描述设置为与新创建的答复匹配。
6. 然后通过调用 {{domxref("RTCPeerConnection.setRemoteDescription", "callerPC.setRemoteDescription()")}} 将答复“传输”给呼叫方。这样让呼叫方知道接收方的配置。
7. 如果在任何时候发生错误，`catch()` 子句将输出错误消息到日志中。

#### 跟踪其他状态变化

我们还可以观察信令状态的变化（通过接受 {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}} 事件）和 ICE 收集状态的变化（通过接受 {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}} 事件）。我们没有为这些事件做任何操作，所以我们只是将它们记录到日志中。实际上，我们完全可以不设置这些事件监听器。

```js
function handleCallerSignalingStateChangeEvent() {
  log(`呼叫方的信令状态已更改为 ${callerPC.signalingState}`);
}

function handleCallerGatheringStateChangeEvent() {
  log(`呼叫方的 ICE 收集状态已更改为 ${callerPC.iceGatheringState}`);
}
```

#### 向接收方添加候选者

当接收方的 `RTCPeerConnection` ICE 层提出一个新的候选者时，它会向 `receiverPC` 发出一个 {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} 事件。`icecandidate` 事件处理器的工作是将候选者传输给呼叫方。在我们的示例中，我们直接控制呼叫方和接收方，所以我们可以直接通过调用其 {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} 方法将候选者添加到呼叫方。这由 `handleReceiverIceEvent()` 处理。

这段代码类似于上面[将候选者添加到呼叫方](#将候选者添加到呼叫方)中看到的呼叫方的 `icecandidate` 事件处理器。

```js
function handleReceiverIceEvent(event) {
  if (event.candidate) {
    log(`Adding candidate to caller: ${event.candidate.candidate}`);

    callerPC
      .addIceCandidate(new RTCIceCandidate(event.candidate))
      .catch((err) => log(`向呼叫方添加候选时出错：${err}`));
  } else {
    log("接收方已经没有更多的候选者。");
  }
}
```

如果 {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} 事件具有非 `null` 的 `candidate` 属性，我们将从 `event.candidate` 字符串创建一个新的 {{domxref("RTCIceCandidate")}} 对象，并将其传递给呼叫方，通过将其传递给 `callerPC.addIceCandidate()`。如果 `addIceCandidate()` 失败，`catch()` 子句将错误输出到我们的日志框中。

如果 `event.candidate` 是 `null`，这表示没有更多的候选者可用，我们会记录这一信息。

#### 向接收方添加媒体

当接收方开始接收媒体时，一个事件会传递到接收方的 {{domxref("RTCPeerConnection")}}，即 `receiverPC`。如[开始连接过程](#开始连接过程)中所解释的，当前的 WebRTC 规范使用 {{domxref("RTCPeerConnection.track_event", "track")}} 事件来处理这个情况。由于一些浏览器尚未更新以支持此功能，我们还需要处理 {{domxref("RTCPeerConnection/addstream_event", "addstream")}} 事件。下面的 `handleReceiverTrackEvent()` 和 `handleReceiverAddStreamEvent()` 方法演示了这一点。

```js
function handleReceiverTrackEvent(event) {
  audio.srcObject = event.streams[0];
}

function handleReceiverAddStreamEvent(event) {
  audio.srcObject = event.stream;
}
```

`track` 事件包含一个 {{domxref("RTCTrackEvent.streams", "streams")}} 属性，其中包含轨道所属的流的数组（一个轨道可以是多个流的一部分）。我们取第一个流并将其附加到 {{HTMLElement("audio")}} 元素上。

`addstream` 事件包含一个指定添加到轨道的单个流的属性 {{domxref("MediaStreamEvent.stream", "stream")}}。我们将其附加到 `<audio>` 元素上。

#### 日志记录

代码中使用了一个简单的 `log()` 函数，用于将 HTML 附加到一个 {{HTMLElement("div")}} 盒子中，以向用户显示状态和错误。

```js
function log(msg) {
  logElement.innerHTML += `${msg}<br/>`;
}
```

### 结果

你可以在这里尝试此示例。当你点击“拨号”按钮时，你应该会看到一系列的日志消息输出；然后拨号将开始。如果你的浏览器作为其用户体验的一部分以可听的方式播放音调，则在它们被传输时你应该会听到它们。

{{ EmbedLiveSample("简单示例", 600, 500, "", "", "", "microphone") }}

一旦音调传输完成，连接就会关闭。你可以再次点击“拨号”以重新连接并发送音调。

## 参见

- [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API)
- [WebRTC 会话的生命周期](/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime)
- [信令与视频通话](/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling)（一个更详细地解释信令过程的教程和示例）
- [WebRTC 协议介绍](/zh-CN/docs/Web/API/WebRTC_API/Protocols)
