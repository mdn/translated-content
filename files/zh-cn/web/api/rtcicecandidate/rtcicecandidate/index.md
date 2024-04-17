---
title: RTCIceCandidate：RTCIceCandidate() 构造函数
slug: Web/API/RTCIceCandidate/RTCIceCandidate
l10n:
  sourceCommit: 31fa0bbc78b87bf3ec7559906515fcd3dfde68de
---

{{APIRef("WebRTC")}}

**`RTCIceCandidate()`** 构造函数创建并返回一个新的 {{domxref("RTCIceCandidate")}} 实例，该实例可以配置一个 {{Glossary("ICE")}} 候选者。

## 语法

```js-nolint
new RTCIceCandidate()
new RTCIceCandidate(candidateInfo)
```

### 参数

- `candidateInfo` {{optional_inline}}

  - : 一个可选的对象，可用于配置候选者。该对象具有以下属性：

    <!-- The spec calls this object an RTCIceCandidateInit -->

    - `candidate` {{optional_inline}}

      - : 描述候选者属性的字符串，直接取自[SDP](/zh-CN/docs/Web/API/WebRTC_API/Protocols#sdp) 属性 `"candidate"`。候选者字符串指定了候选者的网络连接信息。如果候选者是一个空字符串（`""`），则表示已经到达了候选者列表的末尾；这个候选者被称为 `“候选者结束”`(`"end-of-candidates"`) 标记。
        候选者字符串的语法在 {{RFC(5245, "", 15.1)}} 定义描述。以下是一个看起来像这样的属性行 (`a-line`)：

        ```plain
        a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
        ```

        相应的`候选者`字符串的值将是 `"candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host"`。在其他条件相同前提下，{{Glossary("user agent","用户代理")}} 始终更喜欢 {{domxref("RTCIceCandidate.priority", "优先级")}} 最高的候选者。在上面的示例中，优先级是 `2043278322`。所有属性都用单个空格字符分隔，并且按特定顺序排列。示例中候选者的完整属性列表如下所示：

        - {{domxref("RTCIceCandidate.foundation", "foundation")}} = 4234997325
        - {{domxref("RTCIceCandidate.component", "component")}} = `"rtp"` (the number 1 is encoded to this string; 2 becomes `"rtcp"`)
        - {{domxref("RTCIceCandidate.protocol", "protocol")}} = `"udp"`
        - {{domxref("RTCIceCandidate.priority", "priority")}} = 2043278322
        - {{domxref("RTCIceCandidate/address", "ip")}} = `"192.0.2.172"`
        - {{domxref("RTCIceCandidate.port", "port")}} = 44323
        - {{domxref("RTCIceCandidate.type", "type")}} = `"host"`

        更多信息可以查阅 {{domxref("RTCIceCandidate.candidate")}} 。

        > ** 注意：** 为了向后兼容旧版本的 WebRTC 规范，构造函数还可以直接接受字符串作为参数。

    - `sdpMid` {{optional_inline}}

      - : 一个包含候选者关联的媒体流的标识标签的字符串，如果没有关联的媒体流，则为 `null`。默认值为 `null`。更多信息可以查阅 {{domxref("RTCIceCandidate.sdpMid")}}。

    - `sdpMLineIndex` {{optional_inline}}

      - : 一个包含候选者关联的媒体行 (m-line) 的从零开始的索引号，位于媒体描述的 [SDP](/zh-CN/docs/Web/API/WebRTC_API/Protocols#sdp) 中，如果没有这样的关联存在，则为 `null`。默认值为 `null`。更多信息可以查阅 {{domxref("RTCIceCandidate.sdpMLineIndex")}}。

    - `usernameFragment` {{optional_inline}}

      - : 一个包含用户名片段（通常简称为 `ufrag` 或 `ice-ufrag`）的字符串。其连同 ICE 密码（`"ice-pwd"`），作为一个正在进行的 ICE 交互的唯一标识（包括与 {{Glossary("STUN")}} 服务器的任何通信）。这个字符串是由 WebRTC 在会话开始时生成的。它可能长达 256 个字符，至少有 24 位必须包含随机数据。它没有默认值，除非显式设置，否则不会出现。更多信息可以查阅 {{domxref("RTCIceCandidate.usernameFragment")}}。

### 返回值

一个新创建的 {{domxref("RTCIceCandidate")}} 实例。

如果提供了`candidateInfo`，则新的 `RTCIceCandidate` 将初始化如下：

- `RTCIceCandidate` 实例的每个成员都初始化为 `candidateInfo` 中同名属性的值。包括{{domxref("RTCIceCandidate.candidate", "candidate")}}、{{domxref("RTCIceCandidate.sdpMid", "sdpMid")}}、{{domxref("RTCIceCandidate.sdpMLineIndex", "sdpMLineIndex")}} 和 {{domxref("RTCIceCandidate.usernameFragment")}} 属性。
- `candidate` 字符串（即 SDP 文本）被解析；找到的每个属性并存储在 `RTCIceCandidate` 中相应的字段中。如果没有有效字段，字符串的解析会静默中止而不抛出异常。`candidate` 的默认值是空字符串，表示候选者是一个`"候选者结束"`("end-of-candidates") 消息。
- 如果{{domxref("RTCIceCandidate.foundation", "foundation")}},
  {{domxref("RTCIceCandidate.component", "component")}},
  {{domxref("RTCIceCandidate.priority", "priority")}}, {{domxref("RTCIceCandidate/address","address")}}, {{domxref("RTCIceCandidate.protocol", "protocol")}},
  {{domxref("RTCIceCandidate.port", "port")}}, {{domxref("RTCIceCandidate.type", "type")}}, {{domxref("RTCIceCandidate.tcpType", "tcpType")}},
  {{domxref("RTCIceCandidate.relatedAddress", "relatedAddress")}}, 和 {{domxref("RTCIceCandidate.relatedPort", "relatedPort")}}这些属性没有包含在 {{domxref("RTCIceCandidate.candidate")}} 属性中，则该字段将初始化为 `null`。
  > **注意：** WebRTC 规范中 `candidate` 字符串使用 [candidate-attribute grammar](https://w3c.github.io/webrtc-pc/#candidate-attribute-grammar) 语法规范进行解析。

### 异常

- {{jsxref("TypeError")}}
  - : 如果指定的 `candidateInfo` 在 `sdpMid` 和 `sdpMLineIndex` 属性中都为 `null` 时，则抛出异常。

## 使用说明

此构造函数不会完全验证指定的 `candidateInfo` 对象或字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebRTC 协议介绍](/zh-CN/docs/Web/API/WebRTC_API/Protocols#ice)
- [WebRTC 连接性](/zh-CN/docs/Web/API/WebRTC_API/Connectivity)
- [WebRTC 会话生命周期](/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime)
- [信令与视频通话](/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
