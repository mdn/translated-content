---
title: RTCPeerConnection.addTrack()
slug: Web/API/RTCPeerConnection/addTrack
---

{{APIRef("WebRTC")}}

{{domxref("RTCPeerConnection")}} 对象的 **`addTrack()`** 方法将一个新的媒体音轨添加到一组音轨中，这些音轨将被传输给另一个对等点。

> **备注：** 通过触发一个 {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} 事件，向连接添加一个跟踪将触发重新协商。详情请参见[开始协商](/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling#开始协商)。

## 语法

```
rtpSender = rtcPeerConnection.addTrack(track, stream...);
```

### 参数

- `track`
  - : 一个{{domxref("MediaStreamTrack")}}对象，表示要添加到对等连接的媒体轨道。
- `stream...` {{optional_inline}}
  - : 一个或多个本地的{{domxref("MediaStream")}}对象，该轨迹应添加到其中。

指定的 **`track`** 不一定已经是任何指定 **`streams`** 的一部分。相反，**`streams`** 只是在连接的接收端将轨迹分组在一起的一种方式，以确保它们是同步的。在连接的本地端添加到相同流的任何轨道都将位于远程端相同的流上。

### 返回值

将用于传输媒体数据的{{domxref("RTCRtpSender")}}对象。

> **备注：** 每个 **`RTCRtpSender`** 都与{{domxref("RTCRtpReceiver")}}配对，组成{{domxref("RTCRtpTransceiver")}}。关联的接收方处于静默状态 (指示它不能发送数据包)，直到或除非远程对等方向接收方添加一个或多个流。

### 异常

- `InvalidAccessError`
  - : 指定的轨道 (或它的所有底层流) 已经是{{domxref("RTCPeerConnection")}}的一部分。
- `InvalidStateError`
  - : {{domxref("RTCPeerConnection")}}被关闭。

## 使用笔记

### 向多个流添加轨道

在 **`track`** 参数之后，您可以选择指定一个或多个{{domxref("MediaStream")}}对象来添加**`track`**。只有轨道从一个点发送到另一个点，而不是一个媒体流。由于流是特定于每个对等点的，因此指定一个或多个流意味着另一个对等点将在连接的另一端自动创建一个相应的流 (或多个流)，然后自动将接收到的轨道添加到这些流中。

#### 无流承载的轨道

如果没有指定媒体流，则轨道是无流的。这是完全可以接受的，尽管要由远程对等点决定将轨道插入到哪个流 (如果有的话)。当构建一个多类型的简单应用只有一个媒体流时，使用 **`addTrack()`** 是一个非常常用的办法。例如，如果您与远程对等点共享的只是带有音频轨道和视频轨道的单个流，那么您不需要管理流中的哪个轨道，所以您不妨让**transceriver**为您处理它。

下面是一个使用{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}从用户的摄像机和麦克风获取一个流，然后将流中的每条轨迹添加到对等连接，而不为每条轨迹指定一个流：

```js
async openCall(pc) {
  const gumStream = await navigator.mediaDevices.getUserMedia(
                          {video: true, audio: true});
  for (const track of gumStream.getTracks()) {
    pc.addTrack(track);
  }
}
```

结果是一组没有流关联的跟踪被发送到远程对等点。远程对等点上的 {{DOMxRef("RTCPeerConnection/track_event", "track")}} 事件的处理程序将负责决定将每个跟踪添加到哪个流中，即使这意味着只是将它们全部添加到同一个流中。{{domxref("RTCPeerConnection.ontrack", "ontrack")}} 方法如下：

```js
let inboundStream = null;

pc.ontrack = (ev) => {
  if (ev.streams && ev.streams[0]) {
    videoElem.srcObject = ev.streams[0];
  } else {
    if (!inboundStream) {
      inboundStream = new MediaStream();
      videoElem.srcObject = inboundStream;
    }
    inboundStream.addTrack(ev.track);
  }
};
```

在这里，如果指定了流，则 **`track`** 事件处理程序将跟踪添加到事件指定的第一个流。否则，在第一次调用 **`ontrack`** 时，将创建一个新流并附加到视频元素，然后将音轨添加到新流中。从那时起，新的堆**track**被添加到这个流中。

你也可以为每个接收到的**track**创建一个新的流：

```js
pc.ontrack = (ev) => {
  if (ev.streams && ev.streams[0]) {
    videoElem.srcObject = ev.streams[0];
  } else {
    let inboundStream = new MediaStream(ev.track);
    videoElem.srcObject = inboundStream;
  }
};
```

#### 将**track**与特定的 stream 相关联

通过指定一个流并允许{{domxref("RTCPeerConnection")}}为您创建流，流的跟踪关联将由 WebRTC 基础设施自动为您管理。这包括对收发器的{{domxref("RTCRtpTransceiver.direction","direction")}} 的更改和被停止使用{{domxref("RTCPeerConnection.removeTrack","removeTrack()")}}。

例如，考虑应用程序可能使用的这个函数，通过{{domxref("RTCPeerConnection")}}将设备的摄像头和麦克风输入流化为远程对等点：

```js
async openCall(pc) {
  const gumStream = await navigator.mediaDevices.getUserMedia(
                          {video: true, audio: true});
  for (const track of gumStream.getTracks()) {
    pc.addTrack(track, gumStream);
  }
}
```

远程对等点然后可以使用一个看起来像这样的 {{DOMxRef("RTCPeerConnection/track_event", "track")}} 事件处理程序：

```js
pc.ontrack = ({streams: [stream]} => videoElem.srcObject = stream);
```

这将把视频元素的当前流设置为包含已添加到连接中的音轨的流。

### 重用发送方

这种方法可以返回一个新的 **`RTCRtpSender`**，或者在非常特殊的情况下，返回一个尚未用于传输数据的现有的兼容发送方。兼容的可重用 **`RTCRtpSender`** 实例满足以下条件：

- 没有与发送方关联的跟踪。
- 与发送方关联的{domxref("RTCRtpTransceiver")}}有一个{domxref("RTCRtpReceiver")}}，它的{{domxref("RTCRtpReceiver.track", "track")}}属性指定了一个{{domxref("MediaStreamTrack")}}它的{{domxref("MediaStreamTrack.kind", "kind")}}与调用 **`RTCPeerConnection.addTrack()`** 时指定的 track 参数的 kind 相同。这确保了收发器只能处理音频或视频，而不能同时处理二者。
- **`RTCRtpTransceiver`** 的{{domxref("RTCRtpTransceiver.stopped", "stopped")}}属性为**`false`**。
- 正在考虑的 **`RTCRtpSender`** 从未被用于发送数据。如果收发器的{{domxref("RTCRtpTransceiver.currentDirection", "currentDirection")}} 曾经是“**`sendrecv`**”或“**`sendonly`**”，发送方不能被重用。

如果所有这些条件都满足，发送方会被重用，这将导致现有 **`RTCRtpSender`** 和它的 **`RTCRtpTransceiver`** 发生这些变化：

- **`RTCRtpSender`** 的{{domxref("RTCRtpSender.track", "track")}}被设置为指定的 track。
- 发送方的相关流集被设置为传递到这个方法的流列表，**`stream…`**
- 关联的{{domxref("RTCRtpTransceiver")}}更新了它的当前方向，包括发送;如果它的当前值是“**`recvonly`**”，它就变成“**`sendrecv`**”，如果它的当前值是“**`inactive`**”，它就变成“**`sendonly`**”。

### 新发送方

如果现有的发送方不存在可重用，则创建一个新的发送方。这也会导致必须存在的关联对象的创建。创建新发送方的过程会导致以下更改：

- 使用指定的 **`track`** 和 **`streams`** 集创建新的**`RTCRtpSender`**。
- 新{{domxref("RTCRtpReceiver")}}被创建，新{{domxref("MediaStreamTrack")}}作为它的{{domxref("RTCRtpReceiver.track", "track")}} 属性 (不是调用 **`addTrack()`** 时指定作为参数的 track)。这跟踪的{{domxref("MediaStreamTrack.kind", "kind")}}设置为与作为输入参数提供的音轨类型匹配。
- 将创建一个新的{{domxref("RTCRtpTransceiver")}}，并与新的发送方和接收方关联。
- 新的 **`transceiver`** 的 {{domxref("RTCRtpTransceiver.direction", "direction")}} 设置为"**`sendrecv`**"。
- 新的 **`transceiver`** 被添加到 RTCPeerConnection 的收发器集合中。

## 实例

这个例子是从文章中给出的[Signaling and video calling](/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling)及其相应的示例代码中提取的。它来自那里的 **`handleVideoOfferMsg()`** 方法，该方法在从远程对等方接收到报价消息时被调用。

```js
var mediaConstraints = {
  audio: true, // We want an audio track
  video: true, // ...and we want a video track
};

var desc = new RTCSessionDescription(sdp);

pc.setRemoteDescription(desc)
  .then(function () {
    return navigator.mediaDevices.getUserMedia(mediaConstraints);
  })
  .then(function (stream) {
    previewElement.srcObject = stream;

    stream.getTracks().forEach((track) => pc.addTrack(track, stream));
  });
```

这段代码获取从远程对等方接收到的 SDP，并构造一个新的 {{domxref("RTCSessionDescription")}} 传递到 {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}}。成功之后，它使用 {{domxref("MediaDevices.getUserMedia")}} 获得对本地摄像头和麦克风的访问。

如果成功，结果流将被分配为变量 **`previewElement`** 引用的{{HTMLElement("video")}}元素的源。

最后一步是开始通过对等连接向调用者发送本地视频。通过遍历{{domxref("MediaStream.getTracks()")}}返回的列表，并将它们与作为其组件的流一起传递给**`addTrack()`**，从而在流中添加每条跟踪。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)
- [实时传输协议（RTP）简介](/zh-CN/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{DOMxRef("RTCPeerConnection/track_event", "track")}}
