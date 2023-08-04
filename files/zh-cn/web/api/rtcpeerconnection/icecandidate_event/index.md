---
title: "RTCPeerConnection: icecandidate 事件"
slug: Web/API/RTCPeerConnection/icecandidate_event
---

{{APIRef("WebRTC")}}

当 {{domxref("RTCPeerConnection")}} 通过 {{domxref("RTCPeerConnection.setLocalDescription()")}} 方法更改本地描述之后，该 {{domxref("RTCPeerConnection")}} 会抛出 **`icecandidate`** 事件。该事件的监听器需要将更改后的描述信息传送给远端 {{domxref("RTCPeerConnection")}}，以更新远端的备选源。

## 使用指南

`icecandidate` 的类型为 {{domxref("RTCPeerIceCandidateEvent")}}, 在以下三种情况下会触发该事件：

### 分享新的候选

触发 `icecandidate` 事件的首要原因：当获得新的源之后，需要将该源的信息发送给远端信号服务器，并分发至其他端的 {{domxref("RTCPeerConnection")}}。其他 {{domxref("RTCPeerConnection")}} 通过 {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} 方法将新 {{domxref("RTCPeerCandidateIceEvent.candidate", "candidate")}} 中携带的信息，将新的源描述信息添加进它的备选池中；

```js
rtcPeerConnection.onicecandidate = (event) => {
  if (event.candidate) {
    sendCandidateToRemotePeer(event.candidate);
  } else {
    /* 在此次协商中，没有更多的候选了 */
  }
};
```

远程的节点在接受到候选后，将通过调用 {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} 的方式将候选加入候选池中，并传入通过信令服务器得到的 {{domxref("RTCPeerConnectionIceEvent.candidate", "candidate")}} 字符串（作为参数）。

### 代表最后一轮候选结束

当一个 ICE 协商会话没有候选来提供给某个给定的 RTCIceTransport，就完成了一轮候选的收集。一个带有空字串（""）的 icecandidate 事件出现，表明了这种情况。

你应当像对待任何普通候选一般向远程节点传递这个候选，正如在上述“共享一个新的候选”里所描述的。这就确保了远程节点也能获得候选终结的通知。正如你在上一个小节的代码里所见，每个候选都被发送到别的节点，包括任何可能含有空候选字串的。只有那些事件的 candidate 属性为 null 的不通过信令连接传递。

候选终结指示在 Trickle ICE draft 规范的 9.3 章有描述（注意，章节号码会根据标准的反复修正而发生改变）

### 代表 ICE 收集完成

一旦所有的 ICE 传输完成收集候选并且 {{domxref("RTCPeerConnection")}} 对象的 {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} 的值变化成 `complete`，一个 `icecandidate` 事件携带着值为 `null` 的 `complete` 属性的被发送。

这个信号的存在是为了向后兼容的目的，并且不需要向远程节点分发（这也就是为什么上面的代码片段检查了 event.candidate 是否为 null，优先于沿着候选发送）

如果你需要执行任何特别的动作，当没有更多的期待的候选，你最好通过观察 {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}} 事件来观察 ICE 收集状态。

```js
pc.addEventListener("icegatheringstatechange", (ev) => {
  switch (pc.iceGatheringState) {
    case "new":
      /* gathering is either just starting or has been reset */
      break;
    case "gathering":
      /* gathering has begun or is ongoing */
      break;
    case "complete":
      /* gathering has ended */
      break;
  }
});
```

如你在这个例子中看到的，icegatheringstatechange 事件让你知道 RTCPeerConnection 属性 iceGatheringState 被更新的时机。如果那个值现在是 complete，你就知道 ICE 收集刚刚结束。

对表明一个 ICE 会话已经结束而言，相比观察一个单独的 ICE 消息，这是更为可靠的方法。

### 示例

这个例子建立一个简单的 icecandidate 事件处理器，通过信令服务器使用一个 sendMessenge() 来建立和发送一个回复给远程节点。

首先，一个使用 addEventListener() 的例子：

```js
pc.addEventListener(
  "icecandidate",
  (ev) => {
    if (ev.candidate) {
      sendMessage({ type: "new-ice-candidate", candidate: event.candidate });
    }
  },
  false,
);
```

你也可以直接设定 {{domxref("RTCPeerConnection.onicecandidate", "onicecandidate")}} 事件处理器的属性：

```js
pc.onicecandidate = (ev) => {
  if (ev.candidate) {
    sendMessage({ type: "new-ice-candidate", candidate: event.candidate });
  }
};
```

## 概述

- 接口
  - : {{domxref("RTCPeerConnectionIceEvent")}}
- 事件冒泡
  - : 否
- 能否取消默认
  - : 否
- 事件目标
  - : {{domxref("RTCPeerConnection")}}
- 默认行为
  - : 无

## 属性

_属性继承自{{domxref("RTCPeerConnectionIceEvent")}}._

## 方法

_方法继承自 {{domxref("RTCPeerConnectionIceEvent")}}._

## 相关事件

- _无_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- [WebRTC](/zh-CN/docs/Web/Guide/API/WebRTC)
