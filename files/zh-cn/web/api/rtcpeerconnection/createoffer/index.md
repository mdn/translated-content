---
title: RTCPeerConnection：createOffer() 方法
slug: Web/API/RTCPeerConnection/createOffer
l10n:
  sourceCommit: 7336c394a1406850b293f743c7dcb3f2ee661952
---

{{APIRef("WebRTC")}}

{{domxref("RTCPeerConnection")}} 接口的 **`createOffer()`** 方法启动创建一个 {{Glossary("SDP")}} 提议（offer），目的是启动一个新的 WebRTC 去连接远程对等方。

SDP 提议包含有关已附加到 WebRTC 会话的所有 {{domxref("MediaStreamTrack")}} 对象、浏览器支持的编解码器和选项，以及 {{Glossary("ICE")}} 代理已经收集的所有候选者的信息，目的是通过信令信道发送给潜在远程对等方，以请求连接或更新现有连接的配置。

## 语法

```js-nolint
createOffer()
createOffer(options)

createOffer(successCallback, failureCallback) // 已弃用
createOffer(successCallback, failureCallback, options) // 已弃用
```

### 参数

- `options` {{optional_inline}}
  - : 为提议提供以下请求选项的对象：
    - `iceRestart` {{optional_inline}}
      - : 要在活动连接上重新启动 ICE，请将其设置为 `true`。这将导致返回的提议与已经存在提议的凭据不同。如果你应用返回的提议，则 ICE 将重新启动。指定 `false` 以保留相同的凭据，因此不重新启动 ICE。**默认值为 `false`**。请考虑调用 {{domxref("RTCPeerConnection.restartIce()")}}（会在下一次调用 `createOffer()` 时自动设置标志）来代替这个选项的使用。
    - `offerToReceiveAudio` {{optional_inline}} {{deprecated_inline}}
      - : 提供对音频方向的额外控制。例如，它可以用于确保无论音频是否已发送，都可以接收音频。
    - `offerToReceiveVideo` {{optional_inline}} {{deprecated_inline}}
      - : 提供对视频方向的额外控制。例如，它可以用于确保无论视频是否已发送，都可以接收视频。

### 已弃用的参数

在较早的代码和文档中，你可能会看到此函数的基于回调的版本。其已被弃用并**强烈**建议不要使用它。你应该更新任何现有代码，以改用基于 {{jsxref("Promise")}} 的 `createOffer()` 版本。下面介绍了这种老形式的 `createOffer()` 的参数，以帮助更新现有代码。

- `successCallback` {{deprecated_inline}}
  - : 一个[回调函数](/zh-CN/docs/Glossary/Callback_function)，其将接收一个描述了新创建提议的 {{domxref("RTCSessionDescription")}} 对象。
- `errorCallback` {{deprecated_inline}}
  - : 一个[回调函数](/zh-CN/docs/Glossary/Callback_function)，其将接收一个解释为什么请求创建提议失败的 {{domxref("DOMException")}} 对象。
- `options` {{optional_inline}}
  - : 提供提议所要求的选项的可选对象。

### 返回值

一个 {{jsxref("Promise")}}，会兑现为一个包含与 {{domxref("RTCSessionDescription")}} 对象具有相同属性的对象：

- `type`
  - : 值为 `"offer"` 的字符串。
- `sdp`
  - : 包含描述所生成提议的 SDP 的字符串，将传递给远程对等方。

### 异常

通过拒绝返回的 promise 来返回这些异常。你的拒绝处理器应该检查接收到的异常，以确定发生了哪个异常。

- `InvalidStateError`
  - : `RTCPeerConnection` 被关闭则返回此异常。
- `NotReadableError`
  - : 没有提供用于保护连接的（一组）证书，并且 `createOffer()` 无法创建新证书则返回此错误。由于所有 WebRTC 连接都需要安全保护，因此这会导致错误。
- `OperationError`
  - : 由于某些原因，检查系统状态确定资源可用性以生成提议失败则返回此异常。

## 示例

在这里我们看到一个 {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} 事件的处理器，它创建了提议，并通过信令通道将其发送到远程系统。

> [!NOTE]
> 请记住，这是信令过程的一部分，传输层的实现细节完全由你决定。在这种情况下，[WebSocket](/zh-CN/docs/Web/API/WebSockets_API) 连接用于向其他端点发送带有值为“video-offer”的 `type` 字段的 {{Glossary("JSON")}} 消息。传递给 `sendToServer()` 函数的对象的内容，以及 promise 兑现处理器中的所有其他内容，完全取决于你的设计。

```js
myPeerConnection
  .createOffer()
  .then((offer) => myPeerConnection.setLocalDescription(offer))
  .then(() => {
    sendToServer({
      name: myUsername,
      target: targetUsername,
      type: "video-offer",
      sdp: myPeerConnection.localDescription,
    });
  })
  .catch((reason) => {
    // 发生错误，处理连接失败的情况
  });
```

在此代码中，创建了提议，一旦成功，通过将提议（以与 {{domxref("RTCSessionDescription")}} 相同结构的对象表示）传递给 {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}}，配置 {{domxref("RTCPeerConnection")}} 的本地端以进行匹配。完成后，通过信令通道将提议发送到远程系统。在本例中，使用名为 `sendToServer()` 的自定义函数。信令服务器的实现独立于 WebRTC 规范，因此只要主叫方和潜在接收方都使用相同的提议，如何发送提议都无关紧要。

用 {{jsxref("Promise.catch()")}} 来捕获和处理错误。

请参阅[信令与视频通话](/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling)，以获取此代码片段来源的完整示例；这将帮助你了解此处的信令代码如何工作。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
