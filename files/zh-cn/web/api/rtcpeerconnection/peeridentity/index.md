---
title: RTCPeerConnection.peerIdentity
slug: Web/API/RTCPeerConnection/peerIdentity
---

{{APIRef("WebRTC")}}

只读属性 {{domxref("RTCPeerConnection")}} **`peerIdentity`** ，返回{{jsxref("Promise")}} 对象，成功时返回 {{domxref("RTCIdentityAssertion")}} ，该结构 {{domxref("DOMString")}} 标识了远端的 ID。这个身份标识在连接过程中将不会改变（直到连接结束）.

## 语法

```
 var identity = rtcPeerConnection.peerIdentity;
```

### Value

A JavaScript {{jsxref("Promise")}} which resolves to an {{domxref("RTCIdentityAssertion")}} that describes the remote peer's identity.

当验证远程的身份 ID 出错时，promise 将返回拒绝。如果目标节点身份不存在，`peerIdentity` 将被设为 一个 promise 对象，并重启验证过程（一个断言）, 直到成功或者不再想继续。

> **备注：** {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}} 返回的 promise 将不会成功返回，除非目标节点身份信息可用。如不可用，则`setRemoteDescription()` 将被拒绝。若无目标节点 ID，就不不需要等`setRemoteDescription()` 这个返回验证成功了。

## 举个栗子

In this example, a function, `getIdentityAssertion()`, is created which asynchronously waits for the peer's identity to be verified, then returns the identity to the caller. If an error occurs and the promise is rejected, this logs the error to the console and returns `null` to the caller.

```
let pc = new RTCPeerConnection();

/* ... */

async function getIdentityAssertion(pc) {
  try {
    const identity = await pc.peerIdentity;
    return identity;
  } catch(err) {
    console.log("Error identifying remote peer: ", err);
    return null;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API)
