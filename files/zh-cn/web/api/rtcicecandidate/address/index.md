---
title: "RTCIceCandidate: address 属性"
slug: Web/API/RTCIceCandidate/address
l10n:
  sourceCommit: 31fa0bbc78b87bf3ec7559906515fcd3dfde68de
---

{{APIRef("WebRTC")}}

**{{domxref("RTCIceCandidate")}}** 接口的只读 **`address`** 属性是一个字符串，提供了候选者来源设备的 IP 地址。如果没有其它指定，其默认值为 `null`。

`address` 字段的值是从传递给 {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} 构造函数的 `candidateInfo` 选项中设置的。你不能直接在对象中配置 `address` 的值，但如果格式正确，则其值会自动从对象的候选者 `a-line`(属性行) 中提取。

## 值

提供候选者来源的 IP 地址的字符串。

> **Note:** 如果 `port`（端口）为 `null`, 并且 {{Glossary("user agent", "用户代理 ")}} 支持端口，将候选者传递给 {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} 将失败，并抛出一个 `OperationError` 异常。

## 安全注意事项

这里需要注意的是，虽然 WebRTC 不要求 {{domxref("RTCPeerConnection")}} 上的两个对等方知道彼此的真实 IP 地址，但 `RTCIceCandidate` 上的 `address` 属性 _可能_ 会向用户暴露有关远程对等方来源的更多信息。IP 地址可以用于推断有关远程设备位置、网络拓扑等的信息。它也可以用于[fingerprinting](/zh-CN/docs/Glossary/Fingerprinting) (浏览器指纹) 识别。

候选 IP 地址 _始终_ 通过 `address` 暴露给应用程序，不良应用程序也有可能会在没有远程对等方的同意的情况下，将地址显示给用户。

构建应用程序时，考虑到用户隐私和安全性，可以选择仅限于中继候选者的允许候选者。这样做可以防止暴露远程用户的地址，但会减少可供选择的候选者池。为此，使用符合 {{domxref("RTCPeerConnection.setConfiguration")}} 中描述的配置属性的对象来配置 ICE 代理 的 ICE 传输策略，如下所示：

```js
const rtcConfig = {
  iceServers: [
    {
      urls: "turn:myturn.server.ip",
      username: "username",
      credential: "password",
    },
  ],
  iceTransportPolicy: "relay",
};
```

通过将 `iceTransportPolicy` 设置为 `"relay"`，任何主机候选者（IP 地址为对等方的 IP 地址的候选者）都将被排除在候选者池之外，任何其他不是中继候选者的候选者也将被排除在外。

## 使用说明

假设描述 ICE 候选者的 {{Glossary("SDP")}} 属性行（a-line）：

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

第五个字段，`"192.0.2.172"` 是该候选者的 a-line 字符串中的 IP 地址。

## 示例

这个代码片段使用 `address` 属性的值来实现基于 IP 地址的禁止功能。

```js
if (ipBanList.includes(candidate.address)) {
  rejectCandidate(candidate);
} else {
  acceptCandidate(candidate);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
