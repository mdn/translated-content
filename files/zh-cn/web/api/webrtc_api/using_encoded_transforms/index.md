---
title: 使用 WebRTC 编码转换
slug: Web/API/WebRTC_API/Using_Encoded_Transforms
l10n:
  sourceCommit: 4799bed9382147f0b0ff642a130a1c12ed59a28e
---

{{DefaultAPISidebar("WebRTC")}}

WebRTC 编码转换提供了一种机制，可以将高性能的 [Stream API](/zh-CN/docs/Web/API/Streams_API) 注入到传入和传出的 WebRTC 管道中，用于修改编码的视频和音频帧。使得第三方代码能够实现对编码帧的端到端加密等用例。

该 API 定义了主线程和 Worker 的对象。主线程接口是一个 {{domxref("RTCRtpScriptTransform")}} 实例，其在构造时指定了要实现转换器代码的 {{domxref("Worker")}}。在 Worker 中运行的转换器通过分别将 `RTCRtpScriptTransform` 添加到 {{domxref("RTCRtpReceiver.transform")}} 或 {{domxref("RTCRtpSender.transform")}} 中，插入到传入或传出的 WebRTC 管道中。

在 Worker 中创建了一个对应的 {{domxref("RTCRtpScriptTransformer")}} 对象，它具有一个 {{domxref("ReadableStream")}} `readable` 属性，一个 {{domxref("WritableStream")}} `writable` 属性，以及一个从关联的 {{domxref("RTCRtpScriptTransform")}} 构造函数传递的 `options` 对象。来自 WebRTC 管道的编码视频帧（{{domxref("RTCEncodedVideoFrame")}}）或音频帧（{{domxref("RTCEncodedAudioFrame")}}）会被入队到 `readable` 上进行处理。

`RTCRtpScriptTransformer` 作为 {{domxref("DedicatedWorkerGlobalScope/rtctransform_event", "rtctransform")}} 事件的 `transformer` 属性向代码提供，该事件在每次编码帧被入队进行处理时（以及在相应的 {{domxref("RTCRtpScriptTransform")}} 构造函数的初始时）在 Worker 全局作用域内触发。Worker 代码必须实现一个事件处理程序，从 `transformer.readable` 中读取编码帧，根据需要对其进行修改，并按照相同的顺序且不重复地将它们写入 `transformer.writable`。

虽然接口对实现没有其他限制，但一种自然的转换帧的方式是创建一个[链式管道](/zh-CN/docs/Web/API/Streams_API/Concepts#链式管道传输)，将在 `event.transformer.readable` 流上入队的帧通过 {{DOMxRef("TransformStream")}} 发送到 `event.transformer.writable` 流。我们可以使用 `event.transformer.options` 属性来配置任何取决于转换是从封包器入队传入帧，还是从编解码器出队传出帧的转换代码。

{{domxref("RTCRtpScriptTransformer")}} 接口还提供了一些方法，可在发送编码视频时使用，以便让编解码器生成一个“关键”帧，在接收视频时请求发送一个新的关键帧。如果（例如）在发送增量帧时加入会议呼叫，则这些方法可能很有用，允许接收者更快地开始查看视频。

以下示例提供了如何使用基于 {{DOMxRef("TransformStream")}} 的实现框架的更具体示例。

## 测试是否支持编码转换

通过检查 {{domxref("RTCRtpSender.transform")}}（或 {{domxref("RTCRtpReceiver.transform")}}）的存在来测试是否支持[编码转换](#浏览器兼容性)。

```js
const supportsEncodedTransforms =
  window.RTCRtpSender && "transform" in RTCRtpSender.prototype;
```

## 添加用于传出帧的转换

通过将相应的 `RTCRtpScriptTransform` 分配给传出轨道的 {{domxref("RTCRtpSender.transform")}}，将运行在 Worker 中的转换插入到传出的 WebRTC 管道中。

以下示例展示了如何从用户的网络摄像头通过 WebRTC 传输视频，并添加一个 WebRTC 编码转换以修改传出流。代码假设已经有一个名为 `peerConnection` 的 {{domxref("RTCPeerConnection")}}，并且已经连接到远程对等端。

首先，我们使用 {{domxref("MediaDevices/getUserMedia", "getUserMedia()")}} 从媒体设备获取视频 {{domxref("MediaStream")}}，然后使用 {{domxref("MediaStream.getTracks()")}} 方法获取流中的第一个 {{domxref("MediaStreamTrack")}}。

使用 {{domxref("RTCPeerConnection/addTrack()", "addTrack()")}} 将轨道添加到对等连接，从而开始将其流式传输到远程对等端。`addTrack()` 方法返回用于发送轨道的 {{domxref("RTCRtpSender")}}。

```js
// 获取视频流和媒体轨道
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = stream.getTracks();
const videoSender = peerConnection.addTrack(track, stream);
```

接下来构造一个 `RTCRtpScriptTransform`，需要一个 Worker 脚本来定义转换，并且还可以使用一个可选对象来向 Worker 传递任意消息（在本例中，我们使用了一个值为 "senderTransform" 的 `name` 属性来告诉 Worker，此转换将被添加到传出流中）。
通过将其分配给 {{domxref("RTCRtpSender.transform")}} 属性，我们将转换添加到传出管道中。

```js
// 创建一个包含 TransformStream 的 Worker
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

下面的使用[单独的发送器和接收器转换](#单独的发送器和接收器转换)部分显示了在 Worker 中可能如何使用 `name`。

请注意，你可以在任何时候添加转换，但是通过在调用 `addTrack()` 后立即添加转换，转换将获得发送的第一帧编码帧。

## 添加用于传入帧的转换

运行在 Worker 中的转换通过将相应的 `RTCRtpScriptTransform` 分配给传入轨道的 {{domxref("RTCRtpReceiver.transform")}} 来插入到传入的 WebRTC 管道中。

这个例子展示了如何添加一个转换来修改传入流。该代码假定已经连接到远程对等端的名为 `peerConnection` 的 {{domxref("RTCPeerConnection")}}。

首先，我们添加了一个 `RTCPeerConnection` 的 [`track` 事件](/zh-CN/docs/Web/API/RTCPeerConnection/track_event)处理程序，以捕获当对等端开始接收新轨道时的事件。在处理程序内部，我们构造了一个 `RTCRtpScriptTransform` 并将其添加到 `event.receiver.transform`（`event.receiver` 是一个 {{domxref("RTCRtpReceiver")}}）。与前一节相同，构造函数采用一个具有 `name` 属性的对象，但是在这里我们使用 `receiverTransform` 作为值，告诉 Worker 正在传入帧。

```js
peerConnection.ontrack = (event) => {
  const worker = new Worker("worker.js");
  event.receiver.transform = new RTCRtpScriptTransform(worker, {
    name: "receiverTransform",
  });
  received_video.srcObject = event.streams[0];
};
```

再次注意，你可以在任何时候添加转换流。但是通过在 `track` 事件处理器中添加它，可以确保转换流将获得轨道的第一帧编码帧。

## Worker 实现

Worker 脚本必须实现一个处理 {{domxref("DedicatedWorkerGlobalScope/rtctransform_event", "rtctransform")}} 事件的处理程序，创建一个[链式管道](/zh-CN/docs/Web/API/Streams_API/Concepts#链式管道传输)，将 `event.transformer.readable`（{{DOMxRef("ReadableStream")}}）流通过 {{DOMxRef("TransformStream")}} 传输到 `event.transformer.writable`（{{DOMxRef("WritableStream")}}）流中。

Worker 可能支持转换传入或传出的编码帧，也可能同时支持两者，并且转换可能是硬编码的，也可能是在运行时使用从 Web 应用传递的信息配置的。

### 基本的 WebRTC 编码转换

下面的示例展示了一个基本的 WebRTC 编码转换，它对队列中的所有帧进行位求反操作。它不使用或需要从主线程传递的选项，因为相同的算法可以用于发送管道来对位进行求反，并且在接收管道中进行还原。

该代码实现了一个 `rtctransform` 事件的事件处理器。这个处理程序构建了一个 {{DOMxRef("TransformStream")}}，然后使用 {{domxref("ReadableStream.pipeThrough()")}} 进行管道传输，最后使用 {{domxref("ReadableStream.pipeTo()")}} 传输到 `event.transformer.writable`。

```js
addEventListener("rtctransform", (event) => {
  const transform = new TransformStream({
    start() {}, // 在启动时调用
    flush() {}, // 在流即将关闭时调用
    async transform(encodedFrame, controller) {
      // 重建原始帧
      const view = new DataView(encodedFrame.data);

      // 构建一个新的缓冲区
      const newData = new ArrayBuffer(encodedFrame.data.byteLength);
      const newView = new DataView(newData);

      // 将传入帧中的所有位取反
      for (let i = 0; i < encodedFrame.data.byteLength; ++i) {
        newView.setInt8(i, ~view.getInt8(i));
      }

      encodedFrame.data = newData;
      controller.enqueue(encodedFrame);
    },
  });
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

WebRTC 编码转换的实现类似于“通用” `TransformStream`，但存在一些重要的区别。像通用流一样，它的[构造函数](/zh-CN/docs/Web/API/TransformStream/TransformStream#参数)接受一个对象，其定义了在构造时调用的*可选* [`start()`](/zh-CN/docs/Web/API/TransformStream/TransformStream#startcontroller) 方法，在流即将关闭时调用的 [`flush()`](/zh-CN/docs/Web/API/TransformStream/TransformStream#flushcontroller) 方法，以及 [`transform()`](/zh-CN/docs/Web/API/TransformStream/TransformStream#transformchunk_controller) 方法，每当有一个块需要处理时都会调用。与通用构造函数不同，任何在构造函数对象中传递的 `writableStrategy` 或 `readableStrategy` 属性都会被忽略，队列策略完全由用户代理管理。

`transform()` 方法也不同，它接收的是 {{DOMxRef("RTCEncodedVideoFrame")}} 或 {{DOMxRef("RTCEncodedAudioFrame")}}，而不是通用的“块”。除了它展示了如何将帧转换为可以修改并在之后排队到流上的形式之外，此处显示的方法没有什么特别之处。

### 使用单独的发送器和接收器转换

之前的例子在发送和接收时使用相同的转换函数时可以工作，但在许多情况下，算法会有所不同。你可以为发送器和接收器使用单独的 Worker 脚本，或者在一个 Worker 中处理这两种情况，如下所示。

如果 Worker 用于发送器和接收器，它需要知道当前的编码帧是来自编解码器的传出帧，还是来自封包器的传入帧。可以使用 [`RTCRtpScriptTransform` 构造函数](/zh-CN/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform)的第二个选项来指定此信息。例如，我们可以为发送器和接收器定义一个单独的 `RTCRtpScriptTransform`，传递相同的 Worker 和一个 options 对象，其中的 `name` 属性指示转换是用于发送还是接收（如上面的前几节所示）。然后在 Worker 中，可以通过 `event.transformer.options` 获取到此信息。

在这个例子中，我们在全局专用 Worker 的作用域对象上实现了 `onrtctransform` 事件处理器。`name` 属性的值用于确定构造哪个 `TransformStream`（实际的构造方法没有显示）。

```js
// 实例化变换并将它们附加到发送器/接收器管道的代码
onrtctransform = (event) => {
  let transform;
  if (event.transformer.options.name == "senderTransform")
    transform = createSenderTransform(); // 返回一个 TransformStream
  else if (event.transformer.options.name == "receiverTransform")
    transform = createReceiverTransform(); // 返回一个 TransformStream
  else return;
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
};
```

请注意，创建管道链的代码与上一个示例中的代码相同。

### 运行时与变换进行通信

[`RTCRtpScriptTransform` 构造函数](/zh-CN/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform)允许你传递选项和对象到 Worker。在前面的示例中，我们传递了静态信息，但有时你可能希望在运行时修改 Worker 中的变换算法，或者从 Worker 中获取信息。例如，支持加密的 WebRTC 会议可能需要向变换使用的算法添加一个新的密钥。

虽然可以使用 {{domxref("Worker.postMessage()")}} 在运行变换代码的 Worker 和主线程之间共享信息，但通常将 {{domxref("MessageChannel")}} 作为 [`RTCRtpScriptTransform` 构造函数](/zh-CN/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform)的选项更容易，因为在处理新的编码帧时，通道上下文直接可在 `event.transformer.options` 中使用。

以下代码创建了一个 {{domxref("MessageChannel")}} 并将其第二个端口[传输](/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)给 Worker。主线程和变换随后可以使用第一个和第二个端口进行通信。

```js
// 创建一个包含 TransformStream 的 Worker 脚本
const worker = new Worker("worker.js");

// 创建一个 channel
// 将 channel.port2 作为构造函数选项传递给 transform，并将其传输到 Worker。
const channel = new MessageChannel();
const transform = new RTCRtpScriptTransform(
  worker,
  { purpose: "encrypt", port: channel.port2 },
  [channel.port2],
);

// 使用 port1 发送一个字符串。（我们可以发送和传输基本类型/对象）
channel.port1.postMessage("给 Worker 的消息");
channel.port1.start();
```

在 Worker 中，端口可作为 `event.transformer.options.port` 使用。下面的代码显示了如何监听端口的 `message` 事件以从主线程获取消息。你还可以使用该端口将消息发送回主线程。

```js
event.transformer.options.port.onmessage = (event) => {
  // 消息载荷在“event.data”中
  console.log(event.data);
};
```

### 触发关键帧

原始视频很少被发送或存储，因为用完整图像来表示每一帧会消耗大量的空间和带宽。相反，编解码器定期生成一个包含足够信息构建完整图像的“关键帧”，在关键帧之间发送“增量帧”，它们只包含自上一个增量帧以来的变化。虽然这比发送原始视频要高效得多，但这意味着为了显示与特定增量帧相关联的图像，你需要最后一个关键帧和所有随后的增量帧。

这可能会导致新用户加入 WebRTC 会议应用时出现延迟，因为他们在收到第一个关键帧之前无法显示视频。同样，如果使用编码转换来加密帧，则接收方在收到使用其密钥加密的第一个关键帧之前无法显示视频。

为了确保在需要时尽早发送新的关键帧，`event.transformer` 中的 {{domxref("RTCRtpScriptTransformer")}} 对象有两种方法：{{domxref("RTCRtpScriptTransformer.generateKeyFrame()")}}，它会导致编解码器生成一个关键帧，和 {{domxref("RTCRtpScriptTransformer.sendKeyFrameRequest()")}}，它会导致接收方可以从发送方请求一个关键帧。

下面的示例显示了主线程如何将加密密钥传递给发送方转换，并触发编解码器生成一个关键帧。请注意，主线程无法直接访问 {{domxref("RTCRtpScriptTransformer")}} 对象，因此它需要将密钥和限制标识符（“rid”是流 ID，指示必须生成关键帧的编码器）传递给 Worker。在这里，我们使用了一个 `MessageChannel`，使用了与前一节相同的模式。代码假定已经有一个对等连接，并且 `videoSender` 是一个 {{domxref("RTCRtpSender")}}。

```js
const worker = new Worker("worker.js");
const channel = new MessageChannel();

videoSender.transform = new RTCRtpScriptTransform(
  worker,
  { name: "senderTransform", port: channel.port2 },
  [channel.port2],
);

// 将 rid 和新密钥发送到发送方
channel.port1.start();
channel.port1.postMessage({
  rid: "1",
  key: "93ae0927a4f8e527f1gce6d10bc6ab6c",
});
```

在 Worker 中的 {{domxref("DedicatedWorkerGlobalScope/rtctransform_event", "rtctransform")}} 事件处理器获取端口，并使用它来监听来自主线程的 `message` 事件。如果收到事件，则获取 `rid` 和 `key`，然后调用 `generateKeyFrame()`。

```js
event.transformer.options.port.onmessage = (event) => {
  const { rid, key } = event.data;
  // 密钥由转换器用于加密帧（未显示）

  // 使用 rid 获取编解码器生成新关键帧。这里的 'rcevent' 是 rtctransform 事件。
  rcevent.transformer.generateKeyFrame(rid);
};
```

接收方请求新关键帧的代码几乎相同，只是没有指定“rid”。这里是仅包含端口消息处理程序的代码：

```js
event.transformer.options.port.onmessage = (event) => {
  const { key } = event.data;
  // key 由转换器用于解密帧（未显示）

  // 请求发送器发出一个关键帧
  transformer.sendKeyFrameRequest();
};
```

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("RTCRtpScriptTransform")}}
- {{domxref("RTCRtpReceiver.transform")}}
- {{domxref("RTCRtpSender.transform")}}
- {{domxref("DedicatedWorkerGlobalScope.rtctransform_event")}}
- {{domxref("RTCTransformEvent")}}
- {{domxref("RTCRtpScriptTransformer")}}
- {{domxref("RTCEncodedVideoFrame")}}
- {{domxref("RTCEncodedAudioFrame")}}
