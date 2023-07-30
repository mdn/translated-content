---
title: RTCSessionDescription
slug: Web/API/RTCSessionDescription
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCSessionDescription`** 接口描述连接或潜在连接的一端的配置方式。每一个`RTCSessionDescription` 由一个描述类型组成，该描述类型指示它所描述的请求/应答协商过程的{{Glossary("SDP")}} 协议的相关描述。

`RTCSessionDescription` 在两个对等点之间协商连接的过程涉及来回交换对象，每个描述都表示描述的发送者支持的连接配置选项的一个组合。一旦两个对等方就连接的配置达成一致，协商就完成了。

## 属性

_`RTCSessionDescription` 接口不继承任何属性_

- {{domxref("RTCSessionDescription.type")}} {{ReadOnlyInline}}
  - : [`RTCSdpType`](#rtcsdptype) 会话描述类型的原型枚举。
- {{domxref("RTCSessionDescription.sdp")}} {{ReadOnlyInline}}
  - : 一个 {{domxref("DOMString")}} 包含会话的{{Glossary("SDP")}}协议描述。

## 常数

### RTCSdpType

当前枚举值定义当前会话描述的状态，例如这个属性： {{domxref("RTCSessionDescription.type", "type")}} 。会话描述的值将使用如下值之一。

| Value      | Description                                                                                                                              |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `answer`   | SDP 协议请求内容包含在属性{{domxref("RTCSessionDescription.sdp", "sdp")}}中。换言之，此会话描述描述了商定的配置，并将被发送以完成协商。. |
| `offer`    | 该会话描述对象描述首次握手的请求/响应。会话过程从发送方到接收方。                                                                        |
| `pranswer` | 会话描述对象描述一个临时响应；也就是说，它是对以前的提议或临时答案的响应。                                                               |
| `rollback` | 具有空会话描述的这种特殊类型用于回滚到以前的稳定状态。                                                                                   |

## 方法

_`RTCSessionDescription` 不继承任何方法。_

- {{domxref("RTCSessionDescription.RTCSessionDescription", "RTCSessionDescription()")}} {{deprecated_inline}}
  - : 该构造函数返回一个新的 `RTCSessionDescription` 对象。参数是 `RTCSessionDescriptionInit` 字典包含包含分配这两个属性的值。
- {{domxref("RTCSessionDescription.toJSON()")}}
  - : 返回一个{{Glossary("JSON")}} 描述对象。该对象包含两个值，{{domxref("RTCSessionDescription.type", "type")}} 和{{domxref("RTCSessionDescription.sdp", "sdp")}}。

## Example

```js
signalingChannel.onmessage = function (evt) {
  if (!pc) start(false);

  var message = JSON.parse(evt.data);
  if (message.sdp)
    pc.setRemoteDescription(
      new RTCSessionDescription(message),
      function () {
        // if we received an offer, we need to answer
        if (pc.remoteDescription.type == "offer")
          pc.createAnswer(localDescCreated, logError);
      },
      logError,
    );
  else
    pc.addIceCandidate(
      new RTCIceCandidate(message.candidate),
      function () {},
      logError,
    );
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/zh-CN/docs/Web/Guide/API/WebRTC)
- {{domxref("RTCPeerConnection.setLocalDescription()")}} and {{domxref("RTCPeerConnection.setRemoteDescription()")}}
