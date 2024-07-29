---
title: RTCIceCandidate：usernameFragment 属性
slug: Web/API/RTCIceCandidate/usernameFragment
l10n:
  sourceCommit: 4e8db9b4072e90e349f3c18b2c6edfe898cfe6a2
---

{{APIRef("WebRTC")}}

**{{domxref("RTCIceCandidate")}}** 接口的 **`usernameFragment`** 只读属性是一个指示 ICE 交互会话的用户名片段（“ufrag”）的唯一标识的字符串。

此值是使用传递给 {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} 构造函数的 `candidateInfo` 选项对象中的 `usernameFragment` 属性指定的。如果你使用属性行（a-line）字符串而不是选项对象调用构造函数，则从指定的候选属性字符串中提取 `usernameFragment` 的值。

需要注意的是，浏览器需要将用户名片段的 24 位字符随机化。有关详细信息，请参阅下面的[随机化](#随机化) 。

## 值

一个包含用户名片段（通常简称为“ufrag”或“ice-ufrag”）的字符串，通常其与 ICE 密码（“ice-pwd”）作为正在进行的 ICE 交互（包括与 {{Glossary("STUN")}} 服务器的任何通信）的唯一标识。该字符串最多可以长达 256 个字符，没有默认值。

### 随机化

ICE 会话开始时，ICE 层需要随机选择 `ufrag` 字段中的至少 24 位文本进行随机化。由浏览器实现决定 `ufrag` 中哪些位是随机的，哪些是保持不变的。例如：浏览器可能会选择始终使用 24 个字符的 `ufrag`，其中每个字符的第 4 位是从 0 到 1 之间随机选择的。另一个例子：它可能需要一个用户定义的字符串并附加三个 8 位随机字节到末尾，或者也许每个字符都是完全随机的。

## 使用说明

ICE 使用 `usernameFragment` 和密码来确保消息完整性。这可以避免多个正在进行的 ICE 会话之间的串话，更重要的是，可以帮助保护 ICE 传输（以及 WebRTC 的所有内容）免受试图将自身注入到 ICE 交换中的攻击。

> [!NOTE]
> 出于的完整的安全性考虑，没有 API 可以获取 ICE 密码。

`usernameFragment` 和密码在每次 [ICE 重启](/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime#ice_重启)时都会更改。

## 示例

虽然 WebRTC 底层会在 ICE 重新启动后为你过滤过时的候选者，但如果你想压缩来回传递的消息数量，你可以自己执行这个操作。

为此，你可以在从信令服务器接收到候选者并在调用 {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} 将其添加到可能的候选者集合之前，将 `usernameFragment` 的值与连接当前使用的 `usernameFragment` 进行比较。

当 Web 应用程序从信令服务器接收到包含要添加到 {{domxref("RTCPeerConnection")}} 的候选者的消息时，你通常*应该*调用 `addIceCandidate()`；且通常不需要手动筛选候选者。

但是，如果我们确实需要最大限度地减少流量。在从信令服务器接收到包含要添加到 `RTCPeerConnection` 的 ICE 候选者的 `signalMsg` 消息时可以调用下面的 `ssNewCandidate()` 函数。为了避免包含 ICE 重新启动后过时的候选者，我们可以使用如下代码：

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

这将遍历用于接收 ICE 数据的 {{domxref("RTCRtpReceiver")}} 对象列表，并查看候选者的 `usernameFragment` 属性自值是否与接收器列表中的任一 `usernameFragment` 匹配。如果匹配则 `ssNewCandidate()` 将中止。否则在检查每个接收器后，它将新候选者添加到连接中。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
