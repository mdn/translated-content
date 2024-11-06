---
title: RTCPeerConnection.iceConnectionState
slug: Web/API/RTCPeerConnection/iceConnectionState
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCPeerConnection.iceConnectionState`** 是一个只读属性，用于描述连接的 ICE 连接状态，返回值为枚举类型。

## 语法

```plain
 var state = peerConnection.iceConnectionState;
```

### 返回值

`RTCIceConnectionState` 的返回值为下面列举中的一种：

- `"new"`: ICE 代理正在搜集地址或者等待远程候选可用。
- `"checking"`: ICE 代理已收到至少一个远程候选，并进行校验，无论此时是否有可用连接。同时可能在继续收集候选。
- `"connected"`: ICE 代理至少对每个候选发现了一个可用的连接，此时仍然会继续测试远程候选以便发现更优的连接。同时可能在继续收集候选。
- `"completed"`: ICE 代理已经发现了可用的连接，不再测试远程候选。
- `"failed"`: ICE 候选测试了所有远程候选没有发现匹配的候选。也可能有些候选中发现了一些可用连接。
- `"disconnected"`: 测试不再活跃，这可能是一个暂时的状态，可以自我恢复。
- `"closed"`: ICE 代理关闭，不再应答任何请求。

## 例子

```plain
var pc = new RTCPeerConnection();
var state = pc.iceConnectionState;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)
