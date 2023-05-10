---
title: RTCPeerConnection.setConfiguration()
slug: Web/API/RTCPeerConnection/setConfiguration
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`RTCPeerConnection.setConfiguration()`** method sets the current configuration of the {{domxref("RTCPeerConnection")}} based on the values included in the specified {{domxref("RTCConfiguration")}} object. This lets you change the ICE servers used by the connection and which transport policies to use.

The most common use case for this method (and even then, probably not a very common use case) is to replace the set of ICE servers to be used. Two potential scenarios in which this might be done:

- The {{domxref("RTCPeerConnection")}} was instantiated without specifying any ICE servers. If, for example, the {{domxref("RTCPeerConnection.RTCPeerConnection()", "RTCPeerConnection()")}} constructor was called with no parameters, you would have to then call `setConfiguration()` to add ICE servers before ICE negotiation could begin.
- Renegotiation of the connection is needed, and a different set of ICE servers needs to be used for some reason. Perhaps the user has moved into a new region, so using new regional ICE servers is necessary, for example. In this situation, one might call `setConfiguration()` to switch to new regional ICE servers, then initiate an [ICE restart](/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime#ICE_restart).

> **备注：** You cannot change the identity information for a connection once it's already been set.

## 语法

```
RTCPeerConnection.setConfiguration(configuration);
```

### 参数

- `configuration`
  - : {{domxref("RTCConfiguration")}}对象提供一些可以设置的选项。这些选项的改动不会附加到原来的设置，相反，新的选项会完全替代旧的选项。

### 异常

- `InvalidAccessError`
  - : One or more of the URLs specified in `configuration.iceServers` is a {{Glossary("TURN")}} server, but complete login information is not provided (that is, either the {{domxref("RTCIceServer.username")}} or {{domxref("RTCIceServer.credentials")}} is missing). This prevents successful login to the server.
- `InvalidModificationError`
  - : The `configuration` includes changed identity information, but the connection already has identity information specified. This happens if `configuration.peerIdentity` or `configuration.certificates` is set and their values differ from the current configuration.
- `InvalidStateError`
  - : {{domxref("RTCPeerConnection")}} 被关闭。
- `SyntaxError`
  - : `configuration.iceServers` 列表提供的一个或多个 URL 是无效的

## Example

In this example, it has already been determined that ICE restart is needed, and that negotiation needs to be done using a different ICE server.

```js
var restartConfig = { iceServers: [{
                          urls: "turn:asia.myturnserver.net",
                          username: "allie@oopcode.com",
                          credential: "topsecretpassword"
                      }]
};

myPeerConnection.setConfiguration(restartConfig);

myPeerConnection.createOffer({"iceRestart": true}).then(function(offer) {
  return myPeerConnection.setLocalDescription(offer);
})
.then(function() {
  // send the offer to the other peer using the signaling server
})
.catch(reportError);
```

First, a new {{domxref("RTCConfiguration")}} is created, `restartConfig`, specifying the new ICE server and its credentials. This is then passed into `setConfiguration()`. ICE negotiation is restarted by calling {{domxref("RTCPeerConnection.createOffer()", "createOffer()")}}, specifying `true` as the value of the `iceRestart` option. From there, we handle the process as usual, by setting the local description to the returned offer and then sending that offer to the other peer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCPeerConnection.getConfiguration()")}}
- {{domxref("RTCConfiguration")}}
- {{domxref("RTCPeerConnection")}}
