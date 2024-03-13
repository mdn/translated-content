---
title: RTCPeerConnection.addIceCandidate()
slug: Web/API/RTCPeerConnection/addIceCandidate
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

当本机当前页面的 {{domxref("RTCPeerConnection")}} 接收到一个从远端页面通过信号通道发来的新的 ICE 候选地址信息，本机可以通过调用**`RTCPeerConnection.addIceCandidate()`** 来添加一个 {{Glossary("ICE")}} 代理。This adds this new remote candidate to the `RTCPeerConnection`'s remote description, which describes the state of the remote end of the connection.

If the value of the specified object'`s` {{domxref("RTCIceCandidate.candidate", "candidate")}} is an empty string (`""`), it signals that all remote candidates have been delivered.

During negotiation, your app will likely receive many candidates which you'll deliver to the ICE agent in this way, allowing it to build up a list of potential connection methods. This is covered in more detail in the articles [WebRTC connectivity](/zh-CN/docs/Web/API/WebRTC_API/Connectivity) and [Signaling and video calling](/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling).

## Syntax

```plain
aPromise = pc.addIceCandidate(candidate);

addIceCandidate(candidate, successCallback, failureCallback); {{deprecated_inline}}
```

### Parameters

- `candidate`
  - : An object conforming to the {{domxref("RTCIceCandidateInit")}} dictionary; the contents of the object should be constructed from a message received over the signaling channel, describing a newly received ICE candidate that's ready to be delivered to the local ICE agent.

### Deprecated parameters

在一些老旧的代码和文档中，你可能会看到一个回调函数 (callback) 版本的函数。这种函数是过期的，强烈建议不要使用。你应该更新你的代码，使用 {{jsxref("Promise")}}-版本的 `addIceCandidate()` . 这个版本的参数格式附在下面，方便你更新已有的代码。

- `successCallback` {{deprecated_inline}}
  - : A function to be called when the ICE candidate has been successfully added. This function receives no input parameters and doesn't return a value.
- `failureCallback` {{deprecated_inline}}
  - : A function to be called if attempting to add the ICE candidate fails. Receives as input a {{domxref("DOMException")}} object describing why failure occurred.

### Return value

A {{jsxref("Promise")}} which is fulfilled when the candidate has been successfully added to the remote peer's description by the ICE agent. The promise does not receive any input parameters.

### Exceptions

When an error occurs while attempting to add the ICE candidate, the {{jsxref("Promise")}} returned by this method is rejected, returning one of the errors below as the {{domxref("DOMException.name", "name")}} attribute in the specified {{domxref("DOMException")}} object passed to the rejection handler.

- `TypeError`
  - : The specified candidate doesn't have values for both {{domxref("RTCIceCandidate.sdpMid", "sdpMid")}} and {{domxref("RTCIceCandidate.sdpMLineIndex", "sdpMLineIndex")}}.
- `InvalidStateError`
  - : The `RTCPeerConnection` currently has no remote peer established ({{domxref("RTCPeerConnection.remoteDescription", "remoteDescription")}} is `null`).
- `OperationError`

  - : A non-`null` value was specified for {{domxref("RTCIceCandidate.sdpMid", "sdpMid")}}, but the value doesn't match the mid of any media description in the `remoteDescription`, or {{domxref("RTCIceCandidate.sdpMLineIndex", "sdpMLineIndex")}} is greater than or equal to the number of media descriptions in `remoteDescription`. This error can also be thrown if a value is given for {{domxref("RTCIceCandidate.ufrag", "ufrag")}} that doesn't match the value of `ufrag` in any of the remote description being selected.

    `OperationError` also occurs if the attempt to add the candidate fails for any other reason.

## Example

下段代码会展示如何使用一个 SDP 字符串 (这个字符串包含了候选的描述) 去构建一个候选对象。这个字符串来自于信道 (signaling channel)。

```js
// |receivedSDP| is an SDP string received over the signaling channel
// by our handler for "new ICE candidate" messages.

let candidate = new RTCIceCandidate(receivedSDP);

pc.addIceCandidate(candidate)
  .then((_) => {
    // Do stuff when the candidate is successfully passed to the ICE agent
  })
  .catch((e) => {
    console.log("Error: Failure during addIceCandidate()");
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API)
- [Signaling and video calling](/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [WebRTC architecture overview](/zh-CN/docs/Web/API/WebRTC_API/Architecture)
- [WebRTC connectivity](/zh-CN/docs/Web/API/WebRTC_API/Connectivity)
- [Lifetime of a WebRTC session](/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime)
