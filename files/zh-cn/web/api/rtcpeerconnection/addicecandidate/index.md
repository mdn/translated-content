---
title: RTCPeerConnection：addIceCandidate 方法
slug: Web/API/RTCPeerConnection/addIceCandidate
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

{{domxref("RTCPeerConnection")}} 接口的 **`addIceCandidate()`** 方法将新的远程候选者添加到连接的远程描述中，该远程描述描述了连接的远程端的状态。

当一个网站或应用程序使用 {{domxref("RTCPeerConnection")}} 通过其信令通道从远程对等端接收到一个新的 ICE 候选者时，将通过调用 **`RTCPeerConnection.addIceCandidate()`** 方法将新接收的候选者传递给浏览器的 {{Glossary("ICE")}} 代理。此方法会将这个新的远程候选者添加到描述了连接的远程端状态的 `RTCPeerConnection` 远程描述中。

如果在调用 `addIceCandidate()` 方法时，`candidate` 参数缺失或者值为 `null`，那么添加的 ICE 候选者将会是一个候选结束标记（"end-of-candidates"）。如果指定对象的 {{domxref("RTCIceCandidate.candidate", "candidate")}} 属性值缺失或者为空字符串（`""`），则表示远程候选者已被传递完毕。候选结束标记通知通过属性行（a-line）值为 `end-of-candidates` 的候选者传输给远程对等端。

在协商过程中，你的应用程序可能会收到许多候选者，你将以这种方式将其传递给 ICE 代理，从而使其建立潜在连接列表。这在 [WebRTC 连接性](/zh-CN/docs/Web/API/WebRTC_API/Connectivity)和[信令以及视频通话](/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling)文章中有更详细的介绍。

## 语法

```js-nolint
addIceCandidate(candidate)

addIceCandidate(candidate, successCallback) // 已弃用
addIceCandidate(candidate, successCallback, failureCallback) // 已弃用
```

### 参数

- `candidate` {{optional_inline}}

  - : {{domxref("RTCIceCandidate")}} 实例，或者是具有以下属性的对象：

    - `candidate` {{optional_inline}}

      - : 描述候选者属性的字符串，直接从 [SDP](/zh-CN/docs/Web/API/WebRTC_API/Protocols#sdp) 属性 `"candidate"` 中取得。候选者字符串指定了候选者的网络连接信息。如果 `"candidate"` 是一个空字符串（`""`），则表示已到达候选者列表的末尾；此候选者被称为“候选结束标记（"end-of-candidates"）”。

        候选者字符串的语法在 {{RFC(5245, "", 15.1)}} 中有描述。对于一个这样的属性行（a-line）：

        ```plain
        a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
        ```

        相应的 `candidate` 字符串的值将为：

        ```plain
        "candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host"
        ```

        在其它属性相同的前提下，{{Glossary("user agent","用户代理")}}总是更优先选择具有更高{{domxref("RTCIceCandidate.priority", "优先级", "", "nocode")}}的候选者。在上面的示例中，优先级为 `2043278322`。所有属性都由单个空格字符分隔，并按特定顺序排列。这个示例的候选者完整属性列表包括：

        - {{domxref("RTCIceCandidate.foundation", "foundation")}} = 4234997325
        - {{domxref("RTCIceCandidate.component", "component")}} = `"rtp"`（数值 1 将编码为 `"rtp"` 字符串，数值 2 将编码为 `"rtcp"` 字符串）
        - {{domxref("RTCIceCandidate.protocol", "protocol")}} = `"udp"`
        - {{domxref("RTCIceCandidate.priority", "priority")}} = 2043278322
        - {{domxref("RTCIceCandidate/address", "ip")}} = `"192.0.2.172"`
        - {{domxref("RTCIceCandidate.port", "port")}} = 44323
        - {{domxref("RTCIceCandidate.type", "type")}} = `"host"`

          更多信息请参见 {{domxref("RTCIceCandidate.candidate")}}。

          > [!NOTE]
          > 为了向后兼容历史版本的 WebRTC 规范，构造函数也接受一个字符串作为参数。

    - `sdpMid` {{optional_inline}}

      - : 包含与候选者关联的媒体流标识字符串，如果没有关联的媒体流，则为 `null`。默认值为 `null`。更多信息参见 {{domxref("RTCIceCandidate.sdpMid")}}。

    - `sdpMLineIndex` {{optional_inline}}

      - : 包含与候选者关联的媒体行（m-line）的从零开始的整数型索引，包含在 [SDP](/zh-CN/docs/Web/API/WebRTC_API/Protocols#sdp) 的媒体描述中，如果不存在这样的关联则为 `null`。默认值为 `null`。更多信息参见 {{domxref("RTCIceCandidate.sdpMLineIndex")}}。

    - `usernameFragment` {{optional_inline}}

      - : 一个包含用户名片段（通常简称为“ufrag”或“ice-ufrag”）的字符串，此片段与 ICE 密码（“ice-pwd”）一起作为单个正在进行的 ICE 交互（包括与 {{Glossary("STUN")}} 服务器的任何通信）的唯一标识。该字符串由 WebRTC 在会话开始时生成。最多 256 个字符，并且至少有 24 位必须包含随机数据。它没有默认值，除非明确设置，否则不会出现。更多信息参见 {{domxref("RTCIceCandidate.usernameFragment")}}。

    如果 `sdpMid` 和 `sdpMLineIndex` 都为 `null`，则该方法将抛出 {{jsxref("TypeError")}} 异常。

    对象的内容应该根据通过信令通道收到的消息构建，该通道描述一个新接收准备传递给本地 ICE 代理的 ICE 候选者。

    如果未指定 `candidate` 对象或其值为 `null`，则将通过 `end-of-candidates` 属性行向远程对等端发送格式如下的候选结束标记信号：

    ```plain
    a=end-of-candidates
    ```

### 废弃参数

在旧代码和文档中，你可能会看到这个函数的基于回调的版本。这已被弃用，**强烈**不建议使用。你应该更新现有代码，改用基于 {{jsxref("Promise")}} 的 `addIceCandidate()` 版本。下面描述了旧版本 `addIceCandidate()` 的参数，以帮助更新现有代码。

- `successCallback` {{deprecated_inline}}
  - : 当添加 ICE 候选者成功时调用的函数。此函数不接收任何输入参数，也没有返回值。
- `failureCallback` {{deprecated_inline}}
  - : 当添加 ICE 候选者失败时调用的函数。接收一个描述失败原因的 {{domxref("DOMException")}} 对象作为输入。

### 返回值

该方法返回一个 {{jsxref("Promise")}}，当 ICE 代理添加候选者到远程对等端描述中成功时，该 Promise 将被兑现，且兑现函数不接收任何输入参数。

### 异常

当尝试添加 ICE 候选者时发生错误时，此方法返回的 {{jsxref("Promise")}} 将被拒绝，将下面的错误之一作为传递给拒绝处理程序的指定 {{domxref("DOMException")}} 对象的 {{domxref("DOMException.name", "name")}} 属性返回。

- {{jsxref("TypeError")}}

  - : 如果指定的候选者的 {{domxref("RTCIceCandidate.sdpMid", "sdpMid")}} 和 {{domxref("RTCIceCandidate.sdpMLineIndex", "sdpMLineIndex")}} 都为 `null` 时，返回本错误类型。

- `InvalidStateError` {{domxref("DOMException")}}

  - : 如果 `RTCPeerConnection` 当前没有建立远程对等端（{{domxref("RTCPeerConnection.remoteDescription", "remoteDescription")}} 为 `null`）时，返回本错误类型。

- `OperationError` {{domxref("DOMException")}}

  - : 在以下情况之一返回本错误类型：
    - 指定的 {{domxref("RTCIceCandidate.sdpMid", "sdpMid")}} 的值非空，且与 {{domxref("RTCPeerConnection.remoteDescription", "remoteDescription")}} 中包含的媒体描述的媒体描述 ID 不匹配。
    - 指定的 {{domxref("RTCIceCandidate.sdpMLineIndex", "sdpMLineIndex")}} 的值大于等于远程描述中包含的媒体描述的数量。
    - 指定的 {{domxref("RTCIceCandidate.usernameFragment", "ufrag")}} 未与任何远程描述中 `ufrag` 字段匹配。
    - {{domxref("RTCIceCandidate", "candidate")}} 字符串中的一个或多个值无效或无法解析。
    - 其它任何原因尝试添加候选者失败。

## 示例

此代码片段显示了如何通过信令通道传递 ICE 候选者。

```js
// 本示例假设另一个对等端使用以下信令通道：

// pc.onicecandidate = (event) => {
//   if (event.candidate) {
//     signalingChannel.send(JSON.stringify({ice: event.candidate})); // “ice”是任意的
//   } else {
//     // ICE 候选者全部发送完毕
//   }
// }

signalingChannel.onmessage = (receivedString) => {
  const message = JSON.parse(receivedString);
  if (message.ice) {
    //
    // ICE 候选者的属性值可能如下所示：
    //
    // {candidate: "candidate:0 1 UDP 2122154243 192.0.2.43 53421 typ host", sdpMid: "0", …}
    //
    // 将整个 ICE 候选者信息传入给方法 addIceCandidate

    pc.addIceCandidate(message.ice).catch((e) => {
      console.log(`Failure during addIceCandidate(): ${e.name}`);
    });
  } else {
    // 例如，如果信令通道用于交换 SDP 信息，则可以在此处处理
  }
};
```

远端对等设备以这种方式发出信号的最后一个候选者将是一个特殊的候选者，表示候选者结束。为方便起见，候选者结束标记也可以手动指示如下：

```js
pc.addIceCandidate({ candidate: "" });
```

但在大多数情况下，你不需要显式设置这个，因为驱动 {{domxref("RTCPeerConnection")}} 的事件将为你处理（候选结束事件），发送适当的事件。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API)
- [信令与视频通话](/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [WebRTC 协议简介](/zh-CN/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC 连接性](/zh-CN/docs/Web/API/WebRTC_API/Connectivity)
- [WebRTC 会话生命周期](/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime)
