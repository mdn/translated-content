---
title: RTCPeerConnection.iceGatheringState
slug: Web/API/RTCPeerConnection/iceGatheringState
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

只读属性 **`RTCPeerConnection.iceGatheringState`** 返回一个描述连接的 ICE 收集状态的枚举值 `RTCIceGatheringState`。比如当 ICE 候选收集完成的时候，你可以通过该属性的变化侦测到。

通过监听 [`icegatheringstatechange`](/zh-CN/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) 类型的事件，你可以侦测到该属性的变化。

## 语法

```plain
 var state = RTCPeerConnection.iceGatheringState;
```

### 值

可能的值是枚举类型 `RTCIceGatheringState` 的所有值。

{{page("/en-US/docs/Web/API/RTCPeerConnection", "RTCIceGatheringState enum", 0, 1)}}

## 例子

```plain
var pc = new RTCPeerConnection();
var state = pc.iceGatheringState;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- {{event("icegatheringstatechange")}}
- [WebRTC](/zh-CN/docs/Web/Guide/API/WebRTC)
