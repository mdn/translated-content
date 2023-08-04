---
title: RTCPeerConnection.createOffer()
slug: Web/API/RTCPeerConnection/createOffer
---

{{APIRef("WebRTC")}}{{domxref("RTCPeerConnection")}}接口的 createOffer() 方法启动创建一个{{Glossary("SDP")}} offer，目的是启动一个新的 WebRTC 去连接远程端点。SDP offer 包含有关已附加到 WebRTC 会话，浏览器支持的编解码器和选项的所有{{domxref("MediaStreamTrack")}}s 信息，以及{{Glossary("ICE")}} 代理，目的是通过信令信道发送给潜在远程端点，以请求连接或更新现有连接的配置。返回值是一个{{domxref("Promise")}}，创建 offer 后，将使用包含新创建的要约的{{domxref("RTCSessionDescription")}}对象来解析该返回值。

## Syntax

```
aPromise = myPeerConnection.createOffer([options]);

myPeerConnection.createOffer(successCallback, failureCallback, [options]) {{deprecated_inline}}
```

### Parameters

- 选项 {{optional_inline}}
  - : [`RTCOfferOptions`](#RTCOfferOptions_dictionary) 词典提供要约所要求的选项。

#### RTCOfferOptions 词典

`RTCOfferOptions` 词典被用于自定义通过此方法创建 offer。

- [`iceRestart`](/zh-CN/docs/Web/API/RTCOfferOptions/iceRestart) {{optional_inline}}
  - : 要在活动连接上重新启动 ICE，请将其设置为`true`。这将导致返回的 offer 与已经存在的凭证不同。如果您应用返回的 offer，则 ICE 将重新启动。指定`false`以保留相同的凭据，因此不重新启动 ICE。默认值为`false`。
- `offerToReceiveAudio` {{optional_inline}} (Legacy)

  - : 传统的布尔选项，用于控制是否向远程对等方提供尝试发送音频的机会。如果该值为`false`，即使本地端将发送音频数据，也不会提供远程端点发送音频数据。如果此值为`true`，即使本地端不会发送音频数据，也将向远程端点发送音频数据。默认行为是仅在本地发送音频时才提供接收音频，否则不提供。

    为了在现代实现中模拟此行为，该成员的值为 false 将设置所有现有音频收发器的方向以排除接收（即，设置为“仅发送”或“无效”）。
    在现代实现中，此成员的值为 true 的存在将确保至少有一个收发器集可以接收尚未停止的音频，如果没有，则将创建一个。

    > **备注：** 您不应该使用此旧版属性。取而代之，用 {{domxref("RTCRtpTransceiver")}} 去控制是否接受传入的音频。

- `offerToReceiveVideo` {{optional_inline}} (Legacy)

  - : 传统的布尔选项，用于控制是否向远程对等方提供尝试发送视频的机会。如果此值为`false`，即使本地端将发送视频数据，也不会提供远程端点发送视频数据。如果此值为`true`，即使本地端将不发送视频数据，也将向远程端点发送视频数据。默认行为是仅在本地端正在发送视频时才提供接收视频，否则不提供。
    为了在现代实现中模拟这种行为，该成员的值为`false`将设置所有现有视频收发器的方向以排除接收（即设置为“仅发送”或“无效”）。
    在现代实现中，该成员的值为 true 的存在将确保至少有一个收发器集可以接收尚未停止的视频，如果没有，则将创建一个。

    > **备注：** 您不应该使用此旧版属性。取而代之，用 {{domxref("RTCRtpTransceiver")}} 去控制是否接受传入的视频。

- `voiceActivityDetection` {{optional_inline}}
  - : 一些编解码器和硬件能够通过监视是否出现“静音”（或相对较低的声音水平）来检测音频何时开始和结束。通过仅在实际有广播内容时发送音频数据，从而减少了用于音频的网络带宽。但是，在某些情况下，这是不需要的。例如，在音乐或其他非语音传输的情况下，这可能会导致重要的低音量声音丢失。而且，紧急呼叫在安静时切勿切断音频。此选项默认为**`true`**（启用语音活动检测）。

### 不推荐使用的参数

在较早的代码和文档中，您可能会看到此函数的基于回调的版本。不推荐使用并强烈建议不要使用它。您应该更新任何现有代码，以使用基于 {{jsxref("Promise")}}的`createOffer()`版本。下面介绍了这种形式的`createOffer()`的参数，以帮助更新现有代码。

- `successCallback` {{deprecated_inline}}
  - : {{domxref("RTCSessionDescriptionCallback")}}将传递一个描述新创建的 offer 的{{domxref("RTCSessionDescription")}}对象。
- `errorCallback` {{deprecated_inline}}
  - : {{domxref("RTCPeerConnectionErrorCallback")}}将会传递给一个{{domxref("DOMException")}}对象，该对象说明了创建 offer 的请求失败的原因。
- `options` {{optional_inline}}
  - : 可选的[`RTCOfferOptions`](#RTCOfferOptions_dictionary)词典，提供 offer 所要求的选项。

### 返回值

{{jsxref("Promise")}}的履行处理程序将接收符合{{domxref("RTCSessionDescriptionInit")}}字典的对象，该字典包含描述所生成 offer 的 SDP。收到的 offer 应通过信令服务器传递到。

### 异常

通过拒绝返回的承诺返回这些异常。您的拒绝处理程序应检查收到的异常，以确定发生了哪些异常。

- `InvalidStateError`
  - : `RTCPeerConnection` 被关闭。
- `NotReadableError`
  - : 没有提供用于保护连接的证书或一组证书，并且`createOffer()`无法创建新证书。由于需要保护所有 WebRTC 连接，因此会导致错误。
- `OperationError`
  - : 由于某些原因，检查系统状态以确定资源可用性以生成报价失败。

## 举例

在这里，我们看到了 {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} 事件的处理程序，该处理程序创建了要约，并通过信令通道将其发送到远程系统。

> **备注：** 请记住，这是信令过程的一部分，传输层的实现细节完全由您决定。在这种情况下，[WebSocket](/zh-CN/docs/Web/API/WebSocket_API)连接用于向其他端点发送带有值为“video-offer”的类型字段的{{Glossary("JSON")}}消息。传递给`sendToServer()`函数的对象的内容，以及承诺履行处理程序中的所有其他内容，完全取决于您的设计。

```js
myPeerConnection
  .createOffer()
  .then(function (offer) {
    return myPeerConnection.setLocalDescription(offer);
  })
  .then(function () {
    sendToServer({
      name: myUsername,
      target: targetUsername,
      type: "video-offer",
      sdp: myPeerConnection.localDescription,
    });
  })
  .catch(function (reason) {
    // An error occurred, so handle the failure to connect
  });
```

在此代码中，创建了 offer，一旦成功，就将{{domxref("RTCPeerConnection")}}的本地端配置为通过传递要约进行匹配（使用符合{{domxref("RTCSessionDescriptionInit")}}）放入{{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}}。完成后，要约将通过信令通道发送到远程系统。在这种情况下，使用名为`sendToServer()`的自定义函数。信令服务器的实现独立于 WebRTC 规范，因此只要主叫方和潜在接收方都使用相同的 offer，如何发送 offer 都无关紧要。

用 {{jsxref("Promise.catch()")}} 来捕获和处理错误。

请参阅 [Signaling and video calling](/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling)，以获取此摘录的完整示例。这将帮助您了解此处的信令代码如何工作。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
