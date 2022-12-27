---
title: RTCPeerConnection.iceGatheringState
slug: Web/API/RTCPeerConnection/iceGatheringState
---

{{APIRef("WebRTC")}}

只读属性 **`RTCPeerConnection.iceGatheringState`** 返回一个描述连接的 ICE 收集状态的字符串。比如当 ICE 候选收集完成的时候，你可以通过该属性的变化侦测到。

通过监听 {{DOMxRef("RTCPeerConnection/icegatheringstatechange_event", "icegatheringstatechange")}} 类型的事件，你可以侦测到该属性的变化。

## 值

可能的值是：

- `new`
  - : 对等连接刚刚创建，尚未进行任何网络连接。
- `gathering`
  - : ICE 代理正在收集候选的连接。
- `complete`
  - : ICE 代理完成了候选的收集。如果发生了需要收集的新候选，例如一个新接口的增加或者一个新的 ICE 服务器的增加，状态将恢复到 `gathering`，并去收集这些候选。

## 示例

```js
const pc = new RTCPeerConnection();
const state = pc.iceGatheringState;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("RTCPeerConnection/icegatheringstatechange_event", "icegatheringstatechange")}}
- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)
