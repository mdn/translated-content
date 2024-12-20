---
title: RTCIceCandidate：address 属性
slug: Web/API/RTCIceCandidate/address
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{APIRef("WebRTC")}}

**{{domxref("RTCIceCandidate")}}** 接口的 **`address`** 只读属性是一个提供了候选者来源设备 IP 地址的字符串。如果没有其它指定，其默认值为 `null`。

`address` 字段的值是通过传递给 {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate(candidateInfo)")}} 构造函数的 `candidateInfo` 选项对象中设置的。你不能直接在该选项对象中指定 `address` 的值，但如果对象的 `candidate` 属性行（a-line）格式正确，则会自动从中自动提取。

## 值

提供候选者来源的 IP 地址的字符串。

> [!NOTE]
> 如果候选者的 `port`（端口）为 `null`, 并且{{Glossary("user agent", "用户代理")}}支持端口，将这个候选者传递给 {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} 将失败，并抛出 `OperationError` 异常。

## 安全注意事项

这里需要注意的是，虽然 WebRTC 不要求 {{domxref("RTCPeerConnection")}} 上的两个对等端知道彼此的真实 IP 地址，但 `RTCIceCandidate` 上的 `address` 属性*可能*会向用户暴露有关远程对等端来源的更多信息。IP 地址可以用于推断有关远程设备位置、网络拓扑等的信息。它也可以用于[指纹识别](/zh-CN/docs/Glossary/Fingerprinting)。

候选者 IP 地址*始终*通过 `address` 属性来暴露给应用程序，不良应用程序也有可能会在没有远程对等端的同意的情况下，将地址显示给用户。

构建应用程序时，考虑到用户隐私和安全性，可以将候选者限制为仅允许中继候选者。这样做可以防止暴露远程用户的地址，但会减少可供选择的候选者池。为此，使用符合 {{domxref("RTCPeerConnection.setConfiguration")}} 中描述的配置属性的对象来配置 ICE 代理的 ICE 传输策略，如下所示：

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

通过将 `iceTransportPolicy` 的值设置为 `"relay"`，任何主机候选者（IP 地址为对等端的 IP 地址的候选者）都将被排除在候选者池之外，任何其他不是中继候选者的候选者也将被排除在外。

## 使用说明

假设描述 ICE 候选者的 {{Glossary("SDP")}} 属性行如下：

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

第五个字段，`"192.0.2.172"` 字符串是该候选者的 IP 地址。

## 示例

这个代码片段使用 `address` 属性的值来实现基于 IP 地址的黑名单功能。

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
