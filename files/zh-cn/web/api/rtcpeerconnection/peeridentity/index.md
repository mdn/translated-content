---
title: RTCPeerConnection.peerIdentity
slug: Web/API/RTCPeerConnection/peerIdentity
---

{{APIRef("WebRTC")}}

只读属性 {{domxref("RTCPeerConnection")}} **`peerIdentity`** ，返回{{jsxref("Promise")}} 对象，成功时返回 {{domxref("RTCIdentityAssertion")}} ，该结构 {{domxref("DOMString")}} 标识了远端的 ID。这个身份标识在连接过程中将不会改变（直到连接结束）.

## 值

一个 JavaScript {{jsxref("Promise")}}，会被兑现为描述远程对等方身份的 {{domxref("RTCIdentityAssertion")}}。

当验证远程的身份 ID 出错时，promise 将返回拒绝。如果目标节点身份不存在，`peerIdentity` 将被设为 一个 promise 对象，并重启验证过程（一个断言）, 直到成功或者不再想继续。

> [!NOTE]
> {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}} 返回的 promise 将不会成功返回，除非目标节点身份信息可用。如不可用，则`setRemoteDescription()` 将被拒绝。若无目标节点 ID，就不不需要等`setRemoteDescription()` 这个返回验证成功了。

## 示例

本示例创建了一个 `getIdentityAssertion()` 函数，该函数异步等待对等方的身份得到验证，然后将其身份返回给调用者。如果发生错误且 promise 被拒绝，则将错误记录到控制台并将 `null` 返回给调用者。

```js
let pc = new RTCPeerConnection();

// …

async function getIdentityAssertion(pc) {
  try {
    const identity = await pc.peerIdentity;
    return identity;
  } catch (err) {
    console.log("验证远程对等方的身份时出现错误：", err);
    return null;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API)
