---
title: RTCIceCandidate：toJSON() 方法
slug: Web/API/RTCIceCandidate/toJSON
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

{{domxref("RTCIceCandidate")}} 的 **`toJSON()`** 方法将其调用的 `RTCIceCandidate` 转换为 JSON 格式。

通过在返回的对象上调用 {{jsxref("JSON.stringify", "stringify()")}} 来获取对象的字符串版本。

## 语法

```js-nolint
toJSON()
```

### 参数

无参数。

### 返回值

一个具有以下属性的 JSON 对象，这些属性已设置为 `RTCIceCandidate` 对象中的相应值。

- `candidate` {{optional_inline}}
  - : 候选者的网络连接信息的字符串。更多信息可以查阅 {{domxref("RTCIceCandidate.candidate")}}。
- `sdpMid` {{optional_inline}}
  - : 一个包含候选者关联的媒体流的标识标签的字符串，如果没有关联的媒体流，则为 `null`。更多信息可以查阅 {{domxref("RTCIceCandidate.sdpMid")}}。
- `sdpMLineIndex` {{optional_inline}}
  - : 一个包含候选者关联的媒体行（m-line）的从零开始的索引号，位于媒体描述的 [SDP](/zh-CN/docs/Web/API/WebRTC_API/Protocols#sdp) 中，如果不存在关联则为 `null`。更多信息可以查阅 {{domxref("RTCIceCandidate.sdpMLineIndex")}}。
- `usernameFragment` {{optional_inline}}
  - : 一个包含用户名片段（通常简称为“ufrag”或“ice-ufrag”）的字符串。其连同 ICE 密码（“ice-pwd”），作为一个正在进行的 ICE 交互的唯一标识（包括所有与 {{Glossary("STUN")}} 服务器的通信）。更多信息可以查阅 {{domxref("RTCIceCandidate.usernameFragment")}}。

> [!NOTE]
> 返回的 JSON 对象的格式/属性，与传递给 {{domxref("RTCIceCandidate.RTCIceCandidate()","RTCIceCandidate()")}} 构造函数的配置候选者的 `candidateInfo` 对象相同。

## 示例

这个简单的示例获取变量 `candidate` 中构建表示一个 `RTCIceCandidate` 的 JSON 字符串。

```js
let jsonString = candidate.toJSON().stringify();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
