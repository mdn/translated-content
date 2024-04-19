---
title: RTCIceCandidate：usernameFragment 属性
slug: Web/API/RTCIceCandidate/usernameFragment
l10n:
  sourceCommit: 31fa0bbc78b87bf3ec7559906515fcd3dfde68de
---

{{APIRef("WebRTC")}}

**{{domxref("RTCIceCandidate")}}** 接口的 **`usernameFragment`** 只读属性是一个字符串，指示一个 ICE 交互会话的用户名片段（"ufrag"）的唯一标识。此值是使用传递给 {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate() 构造函数")}} 的 `candidateInfo` 选项对象中的`usernameFragment` 属性指定的。如果你使用属性行字符串而不是选项对象调用构造函数，则从指定的候选属性字符串中提取 `usernameFragment` 的值。需要注意的是，浏览器需要将用户名片段的 24 位随机化。有关详细信息，请参阅下面的[随机化](#randomization) 。

## 值

一个包含用户名片段的字符串（通常简称为 "ufrag" 或 "ice-ufrag"）以及 ICE 密码（"ice-pwd"），单个正在进行的 ICE 交互的唯一标识，包括与 {{Glossary("STUN")}} 服务器的任何通信。该字符串最多可以长达 256 个字符，没有默认值。

### 随机化

ICE 会话开始时，ICE 层需要随机选择 `ufrag` 中的至少 24 位文本。哪些位是随机的以及 `ufrag` 的其余部分由浏览器实现决定。例如，浏览器可能选择始终使用一个 24 字符的 `ufrag`，其中每个字符的第 4 位在 0 和 1 之间随机选择。另一个例子：它可能采用用户定义的字符串，并在末尾附加三个 8 位随机字节。或者每个字符都是完全随机的。

## 使用说明

ICE 使用 `usernameFragment` 和密码来确保消息完整性。这可以避免多个正在进行的 ICE 会话之间的串话，更重要的是，可以帮助保护 ICE 传输（以及 WebRTC 的所有内容）免受试图注入自己到 ICE 交换中的攻击。

> **备注：** 出于的完整的安全性考虑，没有 API 可以获取 ICE 密码。

`usernameFragment` 和密码在每次 [ICE 重启](/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart)时都会更改。

## 示例

虽然 WebRTC 底层将在 ICE 重新启动后 为你过滤过时的候选者，但如果你意图压缩来回传递的消息数量，你可以在从信令服务器接收到候选者并在调用 {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} 将其添加到可能的候选者集之前，将 `usernameFragment` 的值与连接当前使用的 `usernameFragment` 进行比较。当 Web 应用程序从信令服务器接收到包含要添加到 {{domxref("RTCPeerConnection")}} 的候选者的消息时，你通常**应该**调用 `addIceCandidate()`；且通常不需要手动筛选 (过期的) 候选者。

以下函数 `ssNewCandidate()` 在从信令服务器接收到包含要添加到 `RTCPeerConnection` 的 ICE 候选者的消息 `signalMsg` 时调用。为了避免包含 ICE 重新启动后过时的候选者，我们可以使用如下代码：

```js
const ssNewCandidate = (signalMsg) => {
  let candidate = new RTCIceCandidate(signalMsg.candidate);
  let receivers = pc.getReceivers();

  for (const receiver of receivers) {
    let parameters = receiver.transport.getParameters();

    if (parameters.usernameFragment === candidate.usernameFragment) {
      return;
    }
  }

  pc.addIceCandidate(candidate).catch(reportError);
};
```

这将遍历用于接收 ICE 数据的 {{domxref("RTCRtpReceiver")}} 对象列表，并查看候选者的 `usernameFragment` 值 是否与其中任何 `usernameFragment` 匹配。如果匹配，则 `ssNewCandidate()` 将中止。否则，在检查每个接收器后，它将新候选者添加到连接中。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
