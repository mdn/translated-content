---
title: "RTCIceCandidate: candidate 属性"
slug: Web/API/RTCIceCandidate/candidate
l10n:
  sourceCommit: 31fa0bbc78b87bf3ec7559906515fcd3dfde68de
---

{{APIRef("WebRTC")}}

**{{domxref("RTCIceCandidate")}}** 接口上的只读属性 **`candidate`** 返回一个详细描述候选者的字符串。`RTCIceCandidate` 的大多数其他属性实际上都是从这个字符串中提取的。

可以使用传递给 {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate() 构造函数")}} 或 {{domxref("RTCPeerConnection.addIceCandidate()")}} 对象的`candidate`属性来配置此属性。

## 值

直接从 {{Glossary("SDP")}} 属性 `"candidate"` 中获取的一个描述候选者属性的字符串。候选者字符串指定了候选者的网络连接信息。如果 `candidate` 是一个空字符串（`""`），则已经到达了候选者列表的末尾；这个候选者被称为 `"end-of-candidates"` (候选结束) 标记。

候选者字符串的语法在 {{RFC(5245, "", 15.1)}} 中描述。对于类似于以下内容的 `a-line`（属性行）:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

相应的候选者字符串的值将是：`"candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host"`

其他条件相同时，{{Glossary("user agent", "用户代理 ")}} 将选择具有最高优先级的候选者。在上面的示例中，优先级为 `2043278322` 。每个属性都用单个空格字符分隔，并且按特定顺序排列。此示例候选者的属性完整列表为：

- {{domxref("RTCIceCandidate.foundation", "foundation")}} = 4234997325
- {{domxref("RTCIceCandidate.component", "component")}} = `"rtp"` (the number 1 is encoded to this string; 2 becomes `"rtcp"`)
- {{domxref("RTCIceCandidate.protocol", "protocol")}} = `"udp"`
- {{domxref("RTCIceCandidate.priority", "priority")}} = 2043278322
- {{domxref("RTCIceCandidate/address", "ip")}} = `"192.0.2.172"`
- {{domxref("RTCIceCandidate.port", "port")}} = 44323
- {{domxref("RTCIceCandidate.type", "type")}} = `"host"`

## 示例

在这个例子中，我们看到一个函数接收一个包含在信令过程中从远程对等方接收的 ICE 候选者的 SD P 字符串作为输入。

```js
function handleNewIceCandidate(candidateSDP) {
  const candidateObj = new RTCIceCandidate(candidateSDP);

  myPeerConnection.addIceCandidate(candidateObj).catch({
    /* handle the error thrown by addIceCandidate() */
  });
}
```

函数 `handleNewIceCandidate()` 将接收到的候选者的 SDP 文本传递给 {{domxref("RTCIceCandidate.RTCIceCandidate",
  "RTCIceCandidate()")}} ，以获得一个代表该候选者的 {{domxref("RTCIceCandidate")}} 对象。
然后将新候选者传递给 {{domxref("RTCPeerConnection.addIceCandidate()")}}，将候选者添加到 WebRTC 用于建立连接时要考虑使用的候选者列表中。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
