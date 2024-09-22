---
title: RTCPeerConnection.canTrickleIceCandidates
slug: Web/API/RTCPeerConnection/canTrickleIceCandidates
---

{{APIRef("WebRTC")}}

只读的 **{{domxref("RTCPeerConnection")}}** 属性 `canTrickleIceCandidates` 返回一个{{jsxref("Boolean")}}，它指示远程对等端是否可以接受 [trickled ICE candidates](https://tools.ietf.org/html/draft-ietf-mmusic-trickle-ice-02) 。

**ICE trickling**是在初始发送或回应已经发送给其他设备之后继续发送候选的过程。

仅在调用{{domxref("RTCPeerConnection.setRemoteDescription()")}}之后才设置此属性。理想情况下，你的信令协议提供了一种检测涓流支持的方法，因此你无需依赖此属性。WebRTC 浏览器将始终支持 trickle ICE。如果不支持涓流，或者你无法辨别，则可以检查此属性的伪值，然后等待{{domxref("RTCPeerConnection.iceGatheringState","iceGatheringState")}}的值更改在创建和发送之前“完成”。这样，发送信息包含所有候选。

## 值

{{jsxref("Boolean")}} 如果远程对等方可以接受涓流 ICE 候选，则为 true；如果不能，则为 false。如果尚未建立远程对等方，则此值为 null。

> [!NOTE]
> 一旦本地对等方调用 {{domxref("RTCPeerConnection.setRemoteDescription()")}}，就确定该属性的值；ICE 代理使用所提供的描述来确定远程对等方是否支持涓流 ICE 候选。

## 示例

```js
var pc = new RTCPeerConnection();
// The following code might be used to handle an offer from a peer when
// it isn't known whether it supports trickle ICE.
pc.setRemoteDescription(remoteOffer)
  .then(_ => pc.createAnswer())
  .then(answer => pc.setLocalDescription(answer))
  .then(_ =>
    if (pc.canTrickleIceCandidates) {
      return pc.localDescription;
    }
    return new Promise(r => {
      pc.addEventListener('icegatheringstatechange', e => {
        if (e.target.iceGatheringState === 'complete') {
          r(pc.localDescription);
        }
      });
    });
  })
  .then(answer => sendAnswerToPeer(answer)) // signaling message
  .catch(e => handleError(e));

pc.addEventListener('icecandidate', e => {
  if (pc.canTrickleIceCandidates) {
    sendCandidateToPeer(e.candidate); // signaling message
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.addIceCandidate()")}}
- [WebRTC 会话的生命周期](/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime)
