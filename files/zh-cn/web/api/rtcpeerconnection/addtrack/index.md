---
title: RTCPeerConnection：addTrack() 方法
slug: Web/API/RTCPeerConnection/addTrack
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

{{domxref("RTCPeerConnection")}} 接口的 **`addTrack()`** 方法将媒体轨道添加到将传输给其他对等端的轨道集合中。

> [!NOTE]
> 通过向连接添加轨道来触发 {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} 事件，从而重新进行协商。详情请参见[开始协商](/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling#开始协商)。

## 语法

```js-nolint
addTrack(track)
addTrack(track, stream1)
addTrack(track, stream1, stream2)
addTrack(track, stream1, stream2, /* …, */ streamN)
```

### 参数

- `track`
  - : 一个 {{domxref("MediaStreamTrack")}} 对象，表示要添加到对等连接的媒体轨道。
- `stream1`、…、`streamN` {{optional_inline}}
  - : 一个或多个将要添加到轨道的本地 {{domxref("MediaStream")}} 对象。

指定的 `track` 不一定必须是任何指定 `stream` 的一部分。相反，`stream` 是连接的接收端将 `track` 组合在一起的一种方式，以确保它们是同步的。将任一轨道添到连接的本地端的同一个 stream 中，该轨道在远程端也将位于同一个 stream 中。

### 返回值

将用于传输媒体数据的 {{domxref("RTCRtpSender")}} 实例。

> [!NOTE]
> 每个 `RTCRtpSender` 都与一个 {{domxref("RTCRtpReceiver")}} 配对，组成一个 {{domxref("RTCRtpTransceiver")}}。相对应的接收器会被置于静默状态（无法传递数据包），直到远程对等端向接收器添加一个或多个流。

### 异常

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 如果指定的轨道（或其所有底层流）已经是 {{domxref("RTCPeerConnection")}} 的一部分则抛出此异常。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果 {{domxref("RTCPeerConnection")}} 被关闭则抛出此异常。

## 使用说明

### 单轨多流

在 `track` 参数的后面，你可以选择性地指定一个或多个 {{domxref("MediaStream")}} 对象，以便将轨道添加到这些流中。只有轨道会从一个对等端发送到另一个对等端，而不是流。由于流是针对每个对等端特定的，因此指定一个或多个流意味着在连接的另一端就会自动创建对应的流（或多个流），并自动将接收到的轨道添加到这些流中。

#### 无流轨道

如果没有给轨道指定任何流，那么该轨道就是**无流轨道**。尽管将轨道插入哪个流中（如果有的话）是由远程对等端来决定的，这（无流轨道）也完全可行的。使用 `addTrack()` 的这种方式来构建只需一个流的简单应用程序类型也是非常普遍的。例如，如果你只与远程对等方共享一个包含音频轨道和视频轨道的流，那么你不需要处理哪个轨道在哪个流中的问题，你完全可以让收发器为你处理这些事情。

下面是一个示例函数，它使用 {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} 从用户的摄像头和麦克风获取流，然后将流中的每个轨道添加到对等连接中，而不需要为每个轨道指定流：

```js
async function openCall(pc) {
  const gumStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
  for (const track of gumStream.getTracks()) {
    pc.addTrack(track);
  }
}
```

结果是一组轨道被发送到远程对等端，而没有流与其关联。远程对等端上的 {{DOMxRef("RTCPeerConnection/track_event", "track")}} 事件处理器将负责确定将每个轨道添加到哪个流中，这意味着也可以将它们全部添加到同一个流中。{{domxref("RTCPeerConnection.track_event", "ontrack")}} 处理器可能如下所示：

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

在这里，事件中如果指定了特定的流，则 `track` 事件处理器会将轨道添加到由事件对象所指定的第一个流中。否则，当 `ontrack` 第一次被调用时，会创建一个新的流并将其附加到视频元素上，然后将轨道添加到新流中。此后，新的轨道会被添加到该流中。

你也可以为每个接收到的轨道创建一个新的流：

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

#### 轨道与流关联

通过指定流并允许 {{domxref("RTCPeerConnection")}} 为你创建的流，WebRTC 底层会自动为你管理这个流的轨道关联。包括像收发器的 {{domxref("RTCRtpTransceiver.direction", "direction")}} 属性变更以及使用 {{domxref("RTCPeerConnection.removeTrack", "removeTrack()")}} 停止轨道传输等事情。

例如，考虑以下函数，应用程序可能会使用它来开始通过 {{domxref("RTCPeerConnection")}} 将设备的摄像头和麦克风输入流传送到远程对等端：

```js
async function openCall(pc) {
  const gumStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
  for (const track of gumStream.getTracks()) {
    pc.addTrack(track, gumStream);
  }
}
```

然后远程对等端可以使用一个 {{DOMxRef("RTCPeerConnection/track_event", "track")}} 事件处理器如下：

```js
pc.ontrack = ({ streams: [stream] }) => (videoElem.srcObject = stream);
```

将视频元素的当前流设置为已添加到在包含连接上的轨道的流。

### 复用发送器

该方法返回一个新的 `RTCRtpSender`（发送器）或用于复用的现有实例。一个 `RTCRtpSender` 实例只有在满足以下条件时才能被复用：

- 发送器尚未与任何轨道关联。
- 与发送器关联的 {{domxref("RTCRtpTransceiver")}}（收发器）拥有一个 {{domxref("RTCRtpReceiver")}}（接收器），其 {{domxref("RTCRtpReceiver.track", "track")}} 属性指定了一个 {{domxref("MediaStreamTrack")}}，且该 {{domxref("MediaStreamTrack.kind", "kind")}} 属性与调用 `RTCPeerConnection.addTrack()` 时指定的 `track` 参数的 `kind` 相同。这确保了收发器只处理音频或视频，而不是两者都处理。
- {{domxref("RTCRtpTransceiver.currentDirection")}} 属性的值不是 `"stopped"`。
- 考虑复用的 `RTCRtpSender` 从未被用于发送数据。如果收发器的 {{domxref("RTCRtpTransceiver.currentDirection", "currentDirection")}} 曾经是 `"sendrecv"` 或 `"sendonly"`，则发送器不能被复用。

如果以上这些条件都满足，那么该发送器将被复用，这将导致现有的 `RTCRtpSender` 及其 `RTCRtpTransceiver` 发生以下变化：

- `RTCRtpSender` 的 {{domxref("RTCRtpSender.track", "track")}} 属性被设置为指定的轨道。
- 发送器关联的流集合被设置为传入此方法的流集合，即 `stream...`。
- 关联的 {{domxref("RTCRtpTransceiver")}} 的 `currentDirection` 属性被更新为表示发送中；
- 如果其当前值为 `"recvonly"`，则变为 `"sendrecv"`，如果其当前值为 `"inactive"`，则变为 `"sendonly"`。

### 新建发送器

如果没有现有的可复用发送器，则会创建一个新的。这也会导致创建必须存在的相关对象。创建新发送器的过程将产生以下变化：

- 使用指定的 `track` 和 `stream` (集合) 创建新的 `RTCRtpSender`。
- 创建一个新的 {{domxref("RTCRtpReceiver")}}，其 {{domxref("RTCRtpSender.track", "track")}} 属性是一个*新的* {{domxref("MediaStreamTrack","MediaStreamTrack")}}（不是调用 `addTrack(track)` 时参数的 `track`）。这个媒体轨道的 {{domxref("MediaStreamTrack.kind", "kind")}} 属性被设置为与输入参数 `track` 的 `kind` 属性相匹配。
- 创建一个新的 {{domxref("RTCRtpTransceiver")}}，并将其与新发送器和接收器关联。
- 新收发器的 {{domxref("RTCRtpTransceiver.direction", "direction")}} 的属性值设置为 `"sendrecv"`。
- 新收发器被添加到 `RTCPeerConnection` 的收发器集合中。

## 示例

下面这个例子是从文章[信令与视频通话](/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling)中给出的相应示例代码中提取的。它来自远程对等端接收到邀请消息时被调用的方法 `handleVideoOfferMsg()` 中。

```js
const mediaConstraints = {
  audio: true, // 我们需要一个音频轨道
  video: true, // 以及一个视频轨道
};

const desc = new RTCSessionDescription(sdp);

pc.setRemoteDescription(desc)
  .then(() => navigator.mediaDevices.getUserMedia(mediaConstraints))
  .then((stream) => {
    previewElement.srcObject = stream;

    stream.getTracks().forEach((track) => pc.addTrack(track, stream));
  });
```

这段代码获取从远程对等端接收到的 SDP，并构造一个新的 {{domxref("RTCSessionDescription")}} 实例并传递到 {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}}。执行成功后，使用 {{domxref("MediaDevices.getUserMedia")}} 来访问本地摄像头和麦克风。

如果（调用）成功，则将拿到的流作为变量 `previewElement` 所指向的 {{HTMLElement("video")}} 元素的源输入给它。

这是通过遍历 {{domxref("MediaStream.getTracks()")}} 返回的列表中的每个轨道，并将它们与其所属的流一起传递给 `addTrack()` 方法来完成的。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API)
- [实时传输协议（RTP）简介](/zh-CN/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{DOMxRef("RTCPeerConnection/track_event", "track")}}
