---
title: RTCPeerConnection.setRemoteDescription()
slug: Web/API/RTCPeerConnection/setRemoteDescription
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCPeerConnection.setRemoteDescription()`** 方法改变与连接相关的描述，该描述主要是描述有些关于连接的属性，例如对端使用的解码器。连接受此更改影响，并且必须能够支持旧的和新的描述。方法带三个参数，{{domxref("RTCSessionDescription")}} 对象用于设置，然后是更改成功的回调方法，一个是更改失败的回调方法。

方法是异步的，不用等待设置完成，成功会调用成功回调方法，失败则会调用错误回调方法。

连接的 offer 通常来自于负责匹配的服务器所发送的数据。执行者应调用此方法设置远程描述，然后生成发送到对端计算机的 answer。

## 语法

```plain
aPromise = pc.setRemoteDescription(sessionDescription);

pc.setRemoteDescription(sessionDescription, successCallback, errorCallback);
```

_这个方法没有返回值。_

### 参数

- _sessionDescription_
  - : Is a {{domxref("DOMString")}} is the description of the parameters to be applied to the remote session.
- _successCallback_
  - : Is a `Function` without parameter which will be called when the description has been successfully set. At this point, one can send the offer to a remote server that can forward it to a remote client
- _errorCallback_

  - : Is a `RTCPeerConnectionErrorCallback` which will be called if the description can't be set. It takes the following parameter:

    - _errorInformation_ which is a {{domxref("DOMString")}} describing the reason why the description has not been set.

## Example

```js
var pc = new PeerConnection();
pc.setRemoteDescription(new RTCSessionDescription(offer), function () {
  pc.createAnswer(function (answer) {
    pc.setLocalDescription(answer, function () {
      // send the answer to the remote connection
    });
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/zh-CN/docs/Web/Guide/API/WebRTC)
