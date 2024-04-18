---
title: RTCIceCandidate：priority 属性
slug: Web/API/RTCIceCandidate/priority
l10n:
  sourceCommit: 31fa0bbc78b87bf3ec7559906515fcd3dfde68de
---

{{APIRef("WebRTC")}}

**{{domxref("RTCIceCandidate")}}** 接口的 `priority` 只读属性指示候选者根据远程对等方的优先级。值越高，远程对等方认为候选者越好。

`priority` 字段的值是从传递给 {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} 构造函数的 `candidateInfo` 选项对象中设置的。你不能直接在选项对象中指定优先级的值，如果对象的 `candidate` 属性行 (`a-line`) 格式正确，其值将自动从对象的候选属性行中提取。

## 值

一个无符号长整数值，指示根据远程对等方的优先级候选者的优先级。这个值越大，远程对等方认为这个候选者越可取。

> **备注：** 如果 `priority` 为 `null`，则将 `candidate` 传递给 {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} 将失败，抛出 `OperationError` 异常。只有当候选者实现 `priority` 时才适用此规则。

## 使用说明

考虑描述 ICE 候选者的 {{Glossary("SDP")}} 属性行（a-line）：

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

优先级 (`priority`) 是协议 (`udp`) 后面的数字，所以它是候选者字符串中的第四个字段。在这个例子中，优先级是 `2043278322`。

## 示例

这个候选者检查候选者的优先级 (`priority`)，如果它比之前看到的候选者的优先级更高，就会记住候选者以供以后使用。

```js
let bestCandidate = {
  candidate: "",
  sdpMid: null,
  sdpMLineIndex: null,
  priority: 0,
};

function handleCandidate(candidateString) {
  const candidate = new RTCIceCandidate(candidateString);

  if (candidate.priority > bestCandidate.priority) {
    bestCandidate = candidate;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
